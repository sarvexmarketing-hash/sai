(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 336506, 234601, 77216, 614550, 607097, 530066, 445959, 77829, 450212, 117131, 260026, 7193, 169588, 666424, 60565, 90356, 800572, 885236, 320951, 568620, 568274, 559249, 599486, 774592, 657128, 5461, 559945, 753250, 459871, 744519, 549497, 648522, 810824, 717349, 366813, 591610, 266520, 993875, 482034, 755874, 233092, 11317, 431761, 690732, 510721, 991238, 818129, 773026, 467980, 762605, 944232, 266755, 908442, 129582, 114328, 775787, 141399, 123e3, 549660, 478497, 304593, 87504, 508216, 279249, 598104, 111856, 907134, 531046, 385498, 473683, 130609, 627798, 453210, 114414, 874748, 508400, 286161, 427735, 114253, 313596, 994919, 414852, 879787, 655595, 216245, 478197, 977126, 165676, 829953, 964671, 917319, e => {
    "use strict";
    let t;
    var i, A = e.i(202396),
        r = e.i(752192);
    let a = {
            src: e.i(149189).default,
            width: 128,
            height: 128,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRiQBAABXRUJQVlA4TBcBAAAvB8ABAM1VICICHggADiIAAAB2hEIFJCyBwRgIAAAAAACAAAAAEAAAAAAAAEABAEgeFKVkiLJk7W9xAAAAPBAAGwQAAIDz39qGnsQRBC4AABIAIAEAAAAAAAAAAAAAAAAAAAAoAACAEoegsnbzQABsEAAAAM5/q586JgoHBAAAAAAAAAAAAAAAAAAAAAAAAAAIAYSAACApQD33f/sif0N0AcObQZVACXGjumO+G/sxgMsDvCJ7FwdF/AbfJs03g3OEplHXkVCpyUVB3v+fgPpYe27WVHoBH45QT7b35CStq7k1UgZJLcZlnnUakNwrpm9DwVU9FB2jZzwjTIl1+HNJ5XiwZanWTW2f3F9+hqxkYYDdY+M1TysA"
        },
        n = {
            src: e.i(916039).default,
            width: 1280,
            height: 720,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRu4AAABXRUJQVlA4TOIAAAAvBwABAM1VICICHgiADQIAAAAC4NHvOABwMADAAQAAAAEAAEAAQAAAgAMAAAgAOQcB/sFO4tCE4yUAAAAPBMQEAgAA4Pw3F/kXIQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAComdU8EAATBgAAgPOP54FFAiUcTAAHDyA8AgAAAAAAACDAAQAAAADA4QDgBAAAMISLQC4y/KfQ8e5c1zWG8Dfg2+4Ak5I1dl0l/8dsARNjoEdPq5UE7rgNx28p7aP5oh9k+5n2OD47/sIu0Qquu3HjeUSBEZxmKy3fPZcK"
        },
        o = {
            id: "ad-localization",
            name: "Ad Localization",
            tagline: "Localize your ad",
            icon: a,
            thumbnail: n.src,
            hero: {
                url: n.src,
                media_type: "image"
            },
            tutorial: {
                description: "Translate image text, adapt a poster for a new region,\nor localize an existing video ad.",
                steps: [{
                    title: "Upload your creative",
                    body: "Start with a product image, poster or video ad."
                }, {
                    title: "Choose where it will run",
                    body: "Pick up to four languages for an image, or up to four markets for a video ad. For a local poster, pick a region and a language."
                }, {
                    title: "Generate the local versions",
                    body: "Get one image per language or one video per market, or several versions of one local poster."
                }]
            },
            aliases: ["localize ads", "translate poster", "international campaign"],
            categories: ["ai-video-toolkit"],
            professions: ["marketer", "agency", "designer", "creator"],
            nav_tags: ["image-tools", "video-tools", "all-apps"],
            best_for: "Localizing the text in product photos and posters, and adapting existing video ads.",
            handoff: {
                text: null,
                inputs: [{
                    slot: "image",
                    accepts: ["image"],
                    max: 1,
                    role: "the product photo or poster to localize",
                    required: !0
                }]
            },
            status: "live",
            output_type: ["image", "video"],
            display_order: 635
        };
    e.s(["meta", 0, o], 234601);
    let s = {
        id: "add-elements",
        name: "Add Elements",
        tagline: "Choose when new objects appear and paint where they belong.",
        icon: {
            src: e.i(18554).default,
            width: 128,
            height: 128,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRiQBAABXRUJQVlA4TBcBAAAvB8ABAM1VICICHggADiIAAAB2hEIFJCyBwRgIAAAAAACAAAAAEAAAAAAAAEABAEgeFKVkiLJk7W9xAAAAPBAAGwQAAIDz39qGnsQRBC4AABIAIAEAAAAAAAAAAAAAAAAAAAAoAACAEoegsnbzQABsEAAAAM5/q586JgoHBAAAAAAAAAAAAAAAAAAAAAAAAAAIAYSAACApQD33f/sif0N0AcObQZVACXGjumO+G/sxgMsDvCJ7FwdF/AbfJs03g3OEplHXkVCpyUVB3v+fgPpYe27WVHoBH45QT7b35CStq7k1UgZJLcZlnnUakNwrpm9DwVU9FB2jZzwjTIl1+HNJ5XiwZanWTW2f3F9+hqxkYYDdY+M1TysA"
        },
        thumbnail: {
            src: e.i(651649).default,
            width: 1280,
            height: 800,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRuwAAABXRUJQVlA4TN8AAAAvBwABAM1VICICHgiACQMAAICtQ/RzXAEQAAIAwAEAAAAAAAAAAAAAAAEAAAAALgIBBMH90jARFAAAgAcCYMIAAABw/vOsS1YOY/RHBAQAAAAAAAAAAAAAAAAAAAAAAAAAAMABcH4gOQQVDwTYhgEAAOD8F2xmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADj30bZvk0gvT05xf8c+a1sYmz7d1VT31TjS6WQbgAjalfQ+zgp37+udRwcCFpJCsKSYUE3ilxyYyP9KkuTjN8aArPAX8vuUG6MX4usIAA=="
        }.src,
        aliases: ["add object", "insert object", "add prop", "composite"],
        categories: ["ai-video-toolkit"],
        professions: ["video-editor", "creator", "marketer"],
        nav_tags: ["all-apps", "video-tools"],
        best_for: "Add Elements lets editors add objects to a chosen section of a video. Select and confirm the time range, paint where each object belongs on its starting frame, and approve the composition. Seedance receives the full video with instructions to edit the selected section and preserve the surrounding footage.",
        status: "live",
        output_type: "video",
        display_order: 999,
        handoff: {
            text: null,
            inputs: [{
                slot: "videos",
                accepts: ["video"],
                max: 1,
                role: "the clip to paint new elements into",
                required: !0
            }, {
                slot: "elements",
                accepts: ["image"],
                max: 3,
                role: "reference images of the elements to add"
            }]
        }
    };
    e.s(["meta", 0, s], 77216);
    let l = {
        id: "anime-world-cup-2026",
        name: "Anime World Cup 2026",
        tagline: "Become an original anime football hero",
        icon: {
            src: e.i(875496).default,
            width: 128,
            height: 128,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRioBAABXRUJQVlA4TB4BAAAvB8ABAM1VICICHgiADQIAAIDCC71oX2V0IeGIQAACAAAAAIAAAAAAAAAAAAAAAV4AAAAA0d8DpVMAAAA8EAAbBAAAgPOvXlfXH78SCuchAgUAAAAAAAAAAAAAAAAAEAAAAAAAAAAAzv1SfSoWDwTABgEAAOD8Twqn4MgRCgABAAAAAAAAAAABAAAAAAAAAADgAABA8nitun5YHK9Wj5z3wVPmCPuFc8oz32Z3LiFCEgW88iAs4dtUkjsO5DHVnYUCQVqy1eRE3CPTWrVTWwMh5uzAeRTqPA0UsRimBcaN+N6dVNrShkZddy9NWgUjflhWuc6P9u+XRg7WmJ18i+t0Jlf56EEHzF0vv9NwkMSbaP5sixJ9X2EdRdE8PKQX"
        },
        thumbnail: {
            src: e.i(321858).default,
            width: 1280,
            height: 800,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRvIAAABXRUJQVlA4TOUAAAAvBwABAM1VICICHgiACQMAAIC8cUFI/EFQPyBECPATEAAAAAAAAAAAAAAAAAAAAAAAAEAQEWYgAgAA8EAAbBAAAADOfz9j9I85CQQAHCgABwAAAAAAAAAAAAAAAAAAAADAOQIQcA6i9XKAPBAAEwYAAIDz320GICCCHAAAAAAAAAAAAAAAAAAAAAAAAAAnABGAnBOB0Bnui/RHlo1PC6sTulvEiYPjOQYu8MKM7rK7CW5u/u0dkP6XEFv4hzzH4Xgj0M+up99rppyWFNKhSN+K/xy+p9Qs8zOXwiOXjBF5I7D6NubyAA=="
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/anime-world-cup-2026.mp4",
            media_type: "video"
        },
        aliases: ["soccer", "Seedream", "Kling"],
        categories: ["featured", "templates"],
        professions: ["video-editor", "creator", "agency", "for-fun", "designer"],
        nav_tags: ["video-tools", "image-tools", "templates", "use-cases", "all-apps"],
        best_for: "Anime World Cup 2026 is best for client-ready creative concepts, visual exploration and polished imagery, motion, video, and finishing workflows.",
        status: "live",
        hidden: !0,
        output_type: "video",
        display_order: 200,
        handoff: {
            text: null,
            inputs: [{
                slot: "selfie",
                accepts: ["image"],
                max: 1,
                role: "a selfie of the hero's face",
                required: !0
            }]
        }
    };
    e.s(["meta", 0, l], 614550);
    let d = {
        id: "camera-director",
        name: "Camera Director",
        tagline: "Reshoot your clip from any angle, with any camera move.",
        icon: {
            src: e.i(831901).default,
            width: 128,
            height: 128,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRiQBAABXRUJQVlA4TBcBAAAvB8ABAM1VICICHggADiIAAAB2hEIFJCyBwRgIAAAAAACAAAAAEAAAAAAAAEABAEgeFKVkiLJk7W9xAAAAPBAAGwQAAIDz39qGnsQRBC4AABIAIAEAAAAAAAAAAAAAAAAAAAAoAACAEoegsnbzQABsEAAAAM5/q586JgoHBAAAAAAAAAAAAAAAAAAAAAAAAAAIAYSAACApQD33f/sif0N0AcObQZVACXGjumO+G/sxgMsDvCJ7FwdF/AbfJs03g3OEplHXkVCpyUVB3v+fgPpYe27WVHoBH45QT7b35CStq7k1UgZJLcZlnnUakNwrpm9DwVU9FB2jZzwjTIl1+HNJ5XiwZanWTW2f3F9+hqxkYYDdY+M1TysA"
        },
        thumbnail: {
            src: e.i(840244).default,
            width: 1200,
            height: 670,
            blurWidth: 8,
            blurHeight: 4,
            blurDataURL: "data:image/webp;base64,UklGRtYAAABXRUJQVlA4TMkAAAAvB8AAAM1VICICHggACQAAAABnBgADDAAAAAAAAAAAAAAAAAAY4A0AhgEMjMXYgMHDjGEMCAMAAOCBAJsAAAAAnP9elZBABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIn4qnsgwCYAAAAA57/lAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCBUL0/6VZHdk4wgASQIe99B+Be0NcKQNCV2y7kaWRp09IXWfimacQ3Pu5/Ve4Y5P/pU506HBEwqW7XOQgAA"
        }.src,
        aliases: ["new angle", "dolly zoom", "reframe video", "camera swap"],
        categories: ["ai-video-toolkit"],
        professions: ["video-editor", "creator", "designer"],
        nav_tags: ["all-apps", "video-tools"],
        best_for: "Camera Director is best for editors who want the same take shot differently — call the framing, angle and camera move, and the performance, timing and scene stay exactly as filmed.",
        status: "live",
        output_type: "video",
        edits: [{
            action: "change-camera",
            accepts: "video",
            slot: "videos",
            field: "video"
        }],
        display_order: 999,
        mcp: {
            as: "presets",
            prep: [{
                app: "video-trim",
                note: "cut it to one 4–30 s shot"
            }]
        },
        handoff: {
            text: null,
            inputs: [{
                slot: "videos",
                accepts: ["video"],
                max: 1,
                role: "the clip to reshoot from a new camera angle",
                required: !0
            }]
        }
    };
    e.s(["meta", 0, d], 607097);
    let u = {
            id: "change-voice",
            name: "Change Voice",
            tagline: "Recast a recording in another voice",
            icon: {
                src: e.i(33812).default,
                width: 128,
                height: 128,
                blurWidth: 8,
                blurHeight: 8,
                blurDataURL: "data:image/webp;base64,UklGRhwBAABXRUJQVlA4TA8BAAAvB8ABAM1VICICHgjQDiIAAIC/qhFlERIBBUEFAAAAAACAiAAAAAAAAAAAgAABQAAAABFrkqigc/qvAAAAHghADgIAAMD5/7WPmmJICAACQIAAAAAAAAAAAAAAAAAAAAAAAAAAAIANSoJYqP3OAwE4QgAAADj/u61KFYHCAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA8T21t33k5G2pIM2UtAkSkPAVDGXuyt6H2EYn4EPleV8jBPPnLs1M/td8PtWprMcTIuO+wderc93GPKxm+4/d2qY3WcpzK+IpzZW+frB7rQCr56jTHeUlMFXvyGNPrtgVPzcElSmeTRZE/plFZ0d2YAAUiAoOEjoGAA=="
            },
            thumbnail: {
                src: e.i(611211).default,
                width: 640,
                height: 400,
                blurWidth: 8,
                blurHeight: 5,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AOHW8t/U8d3R8NvP7tnN7dfK7NXI69PG6gDYzO3WyezUx+rSxenQwujOwOfMvebKu+UAzsDnzL7myrzlyLnkxrfixLThwrLgwLDfAMS14cKz4MCw376u3ryr3bqp3Lin2rak2QC7qty5qNu3ptq1o9mzodixn9avnNWtmtQcRV9RDdr+ewAAAABJRU5ErkJggg=="
            }.src,
            hero: {
                url: "https://cdn.pika.art/v2/creation/app-heroes/change-voice.mp4",
                media_type: "video"
            },
            aliases: ["ElevenLabs", "speech to speech", "voice conversion"],
            categories: ["ai-video-toolkit", "voice"],
            professions: ["video-editor", "creator", "agency"],
            nav_tags: ["video-tools", "audio", "all-apps"],
            best_for: "Change Voice is best for client-ready creative concepts, motion, video, and finishing workflows.",
            status: "coming_soon",
            hidden: !0,
            output_type: "audio",
            display_order: 690
        },
        c = {
            id: "character-creator",
            name: "Character Studio",
            tagline: "Design a consistent character — upload or generate, then pick style, angle, and expression. Always on a clean white background.",
            icon: {
                src: e.i(511366).default,
                width: 256,
                height: 256,
                blurWidth: 8,
                blurHeight: 8,
                blurDataURL: "data:image/webp;base64,UklGRgoBAABXRUJQVlA4TP0AAAAvB8ABAM1VICICHgiACQMAAICyCXBfAQAQAJAAAAAAAAD4EQAABAB+AAAAAEAAQACAHwBAD+DSNAAAgAcCUAMBAABw/p1qtj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgPk21XkgwDYMAAAA55/23b7NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBdO9rnkb/7os5qnKYEYIWaGlzU8UY7u8aq/2pnjzcWZVbrMW8gG7N/F/4ec1bntLe1WNrb7b2L10PlNCUQquvzFEpTAgErD8bWjZBI8SBYoea+4oAkSmo5CZqBmho0I9x+wvSw3H2vGUeDAA=="
            },
            thumbnail: {
                src: e.i(495933).default,
                width: 1024,
                height: 768,
                blurWidth: 8,
                blurHeight: 6,
                blurDataURL: "data:image/webp;base64,UklGRvwAAABXRUJQVlA4TO8AAAAvB0ABAM1VICICHghADgIAAAC2bapfHMAoWIwAoAAAMAAAAAAAAAAAAAAAAAQAACAIAADEpKAHVVkAAAAeCEAKAwAAwPnPfNW/0jIhQAAgAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMoB9s3N4DAbZhAAAAOP9mW8EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgHPPuryJdCeFBVjNwd/AO0xJ8psx+u0f6/dG59idXPytDX4+Mb3uxfXhIa/k5OqAwPoQYY3WYWekME+K7Tm3TsaqNIc7bYhCWnurStlrnjVdXMYp86WkugitAAA="
            }.src,
            hero: {
                url: "https://cdn.pika.art/v2/files/agent/d67e46ea-799d-424e-8ce6-a46201247f08/3ccba7b4397ef07623befb34acdb6174548833feb739e0ebdc1593ce808e9c61",
                media_type: "video"
            },
            aliases: ["Character Creator", "character sheet", "turnaround", "persona", "avatar", "cast"],
            categories: ["featured", "create-media"],
            professions: ["designer", "creator", "developer"],
            nav_tags: ["image-tools", "all-apps"],
            best_for: "A three-view sheet of one consistent character from a photo, description or traits, saved to the Library; one-off images go to Image Studio.",
            status: "live",
            output_type: "image",
            display_order: 45,
            handoff: {
                text: {
                    field: "description",
                    role: "a description of the character",
                    max: 4e3,
                    seed: {
                        mode: "describe"
                    }
                },
                inputs: [{
                    slot: "face",
                    accepts: ["image"],
                    max: 1,
                    role: "a front-facing photo to build the character from",
                    required: !0,
                    text: "backstory",
                    seed: {
                        mode: "image"
                    }
                }]
            }
        };
    e.s(["meta", 0, c], 530066);
    let m = {
        id: "cinematic-camera",
        name: "Cinematic Camera",
        tagline: "Reframe a shot from a new camera angle",
        icon: {
            src: e.i(145576).default,
            width: 128,
            height: 128,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRmoBAABXRUJQVlA4TF4BAAAvB8ABEM1VICICHgiADQIAAAB/f7+udwAEQAAACAAAAAAAEAAAAAAAEAAAAAAAAAgIECpBOvnqfX0AAAA8EAAbBAAAgPPP23l9wkPByCEAAAAAAAAAAAAAAAAAAAAAAAAAAACECECCUuf3+rrzQABSGAAAAM6/6/tKGxAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBoZH611noPhAAHAQAA4PxvAwAAZAAALAEAAAoAAAAAAMAkAwAAAAAAFAAAAA0AwAQAAOBLnWjr9tQNfPXsbAaATBKy6IDTtTqELn63K0Hla7Dc9l64vQpRPQpproq5ruOTZtuEuWink/vAek6AfT2Gmgk7gUOviyEK2750YlQoswINCaaXqY7GarffyRJIYkuZEX8/QTT8lvnl8K4ZPgHPCGHmSBl/Vj96wTlPMjM+Rsn+fS7frmN7ggszVvptqn1RrIlSb4R5Ag=="
        },
        thumbnail: {
            src: e.i(880841).default,
            width: 800,
            height: 500,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRsgAAABXRUJQVlA4TLsAAAAvBwABAM1VICICHgiwCQAAAIC3rQ7qAQAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAc9AMAADwQYBMAAACA8wcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIFDh2/a3PJANAgAAAIDzDwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADai3xr0cH1miI0VQ+JQBIskYN+CqFVSFYMgRWDWai5CPLKIzd/d2P/OxEJ6JcBAA=="
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/cinematic-camera.mp4",
            media_type: "video"
        },
        aliases: ["Change Camera Angle", "Kling", "Camera Control", "Motion Control", "dolly", "pan", "orbit"],
        categories: ["ai-video-toolkit"],
        professions: ["agency", "video-editor", "creator"],
        nav_tags: ["video-tools", "all-apps"],
        best_for: "Cinematic Camera is best for client-ready creative concepts, motion, video, and finishing workflows.",
        status: "live",
        hidden: !0,
        output_type: "video",
        edits: [{
            action: "animate",
            accepts: "image",
            slot: "image"
        }],
        intent: "detail",
        display_order: 260,
        handoff: {
            text: {
                field: "detail",
                role: "optional detail for the camera move",
                max: 3004
            },
            inputs: [{
                slot: "image",
                accepts: ["image"],
                max: 1,
                role: "the still to animate with a camera move",
                required: !0
            }]
        }
    };
    e.s(["meta", 0, m], 445959), e.i(890620), e.i(896379), e.s([], 114493), e.i(114493), e.s([], 154394), e.i(154394);
    var g = e.i(212912),
        p = e.i(71781),
        f = e.i(272972),
        v = e.i(250343),
        h = e.i(899918);
    e.s(["$ZodAny", () => v.$ZodAny, "$ZodArray", () => v.$ZodArray, "$ZodBase64", () => v.$ZodBase64, "$ZodBase64URL", () => v.$ZodBase64URL, "$ZodBigInt", () => v.$ZodBigInt, "$ZodBigIntFormat", () => v.$ZodBigIntFormat, "$ZodBoolean", () => v.$ZodBoolean, "$ZodCIDRv4", () => v.$ZodCIDRv4, "$ZodCIDRv6", () => v.$ZodCIDRv6, "$ZodCUID", () => v.$ZodCUID, "$ZodCUID2", () => v.$ZodCUID2, "$ZodCatch", () => v.$ZodCatch, "$ZodCodec", () => v.$ZodCodec, "$ZodCreditCard", () => v.$ZodCreditCard, "$ZodCustom", () => v.$ZodCustom, "$ZodCustomStringFormat", () => v.$ZodCustomStringFormat, "$ZodDate", () => v.$ZodDate, "$ZodDefault", () => v.$ZodDefault, "$ZodDiscriminatedUnion", () => v.$ZodDiscriminatedUnion, "$ZodE164", () => v.$ZodE164, "$ZodEmail", () => v.$ZodEmail, "$ZodEmoji", () => v.$ZodEmoji, "$ZodEnum", () => v.$ZodEnum, "$ZodExactOptional", () => v.$ZodExactOptional, "$ZodFile", () => v.$ZodFile, "$ZodFunction", () => v.$ZodFunction, "$ZodGUID", () => v.$ZodGUID, "$ZodIBAN", () => v.$ZodIBAN, "$ZodIPv4", () => v.$ZodIPv4, "$ZodIPv6", () => v.$ZodIPv6, "$ZodISODate", () => v.$ZodISODate, "$ZodISODateTime", () => v.$ZodISODateTime, "$ZodISODuration", () => v.$ZodISODuration, "$ZodISOTime", () => v.$ZodISOTime, "$ZodIntersection", () => v.$ZodIntersection, "$ZodJWT", () => v.$ZodJWT, "$ZodKSUID", () => v.$ZodKSUID, "$ZodLazy", () => v.$ZodLazy, "$ZodLiteral", () => v.$ZodLiteral, "$ZodMAC", () => v.$ZodMAC, "$ZodMap", () => v.$ZodMap, "$ZodNaN", () => v.$ZodNaN, "$ZodNanoID", () => v.$ZodNanoID, "$ZodNever", () => v.$ZodNever, "$ZodNonOptional", () => v.$ZodNonOptional, "$ZodNull", () => v.$ZodNull, "$ZodNullable", () => v.$ZodNullable, "$ZodNumber", () => v.$ZodNumber, "$ZodNumberFormat", () => v.$ZodNumberFormat, "$ZodObject", () => v.$ZodObject, "$ZodObjectJIT", () => v.$ZodObjectJIT, "$ZodOptional", () => v.$ZodOptional, "$ZodPipe", () => v.$ZodPipe, "$ZodPrefault", () => v.$ZodPrefault, "$ZodPreprocess", () => v.$ZodPreprocess, "$ZodPromise", () => v.$ZodPromise, "$ZodReadonly", () => v.$ZodReadonly, "$ZodRecord", () => v.$ZodRecord, "$ZodSet", () => v.$ZodSet, "$ZodString", () => v.$ZodString, "$ZodStringFormat", () => v.$ZodStringFormat, "$ZodSuccess", () => v.$ZodSuccess, "$ZodSymbol", () => v.$ZodSymbol, "$ZodTemplateLiteral", () => v.$ZodTemplateLiteral, "$ZodTransform", () => v.$ZodTransform, "$ZodTuple", () => v.$ZodTuple, "$ZodType", () => v.$ZodType, "$ZodULID", () => v.$ZodULID, "$ZodURL", () => v.$ZodURL, "$ZodUUID", () => v.$ZodUUID, "$ZodUndefined", () => v.$ZodUndefined, "$ZodUnion", () => v.$ZodUnion, "$ZodUnknown", () => v.$ZodUnknown, "$ZodVoid", () => v.$ZodVoid, "$ZodXID", () => v.$ZodXID, "$ZodXor", () => v.$ZodXor, "URL_BAD_FORMAT", () => v.URL_BAD_FORMAT, "URL_UNPARSEABLE", () => v.URL_UNPARSEABLE, "base64Charset", () => v.base64Charset, "base64urlCharset", () => v.base64urlCharset, "canParseURL", () => v.canParseURL, "clone", () => h.clone, "getDiscriminatedOption", () => v.getDiscriminatedOption, "isValidBase64", () => v.isValidBase64, "isValidBase64URL", () => v.isValidBase64URL, "isValidCIDRv6", () => v.isValidCIDRv6, "isValidCreditCard", () => v.isValidCreditCard, "isValidIBAN", () => v.isValidIBAN, "isValidIPv6", () => v.isValidIPv6, "isValidJWT", () => v.isValidJWT, "mergeValues", () => v.mergeValues, "parseURLObject", () => v.parseURLObject, "standardProps", () => v.standardProps, "stripTabAndNewline", () => v.stripTabAndNewline, "urlHostnameOk", () => v.urlHostnameOk, "urlProtocolOk", () => v.urlProtocolOk, "validateURL", () => v.validateURL], 539587), e.i(539587);
    class b extends Error {
        constructor() {
            super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError"
        }
    }
    let $ = "~memo",
        I = [];

    function y(e) {
        return null !== e && "object" == typeof e
    }

    function _(e) {
        return e.map(e => e.path ? { ...e,
            path: e.path.slice()
        } : { ...e
        })
    }
    let x = new WeakMap;

    function k(e, t, i) {
        var A, r;
        let a = x.get(e);
        if (void 0 !== a) return 2 * !!a;
        if (t.has(e)) return 2;
        t.add(e);
        let n = 0,
            o = e => {
                if (2 !== n && e ? ._zod) {
                    let A = k(e, t, i);
                    A > n && (n = A)
                }
            },
            s = e => {
                e > n && (n = e)
            },
            l = e._zod.def;
        switch (l.type) {
            case "object":
                {
                    let e = h.rawShape(l);s(e ? ((e, A) => {
                        let r = 0;
                        for (let a of Reflect.ownKeys(e)) {
                            let n = Object.getOwnPropertyDescriptor(e, a);
                            if (A && !n.enumerable) continue;
                            let o = n.get ? 1 : n.value ? ._zod ? k(n.value, t, i) : 0;
                            o > r && (r = o)
                        }
                        return r
                    })(e, !0) : 1),
                    o(l.catchall);
                    break
                }
            case "array":
                o(l.element);
                break;
            case "tuple":
                for (let e of l.items) o(e);
                o(l.rest);
                break;
            case "record":
            case "map":
                o(l.keyType), o(l.valueType);
                break;
            case "set":
                o(l.valueType);
                break;
            case "union":
                for (let e of l.options) o(e);
                break;
            case "intersection":
                o(l.left), o(l.right);
                break;
            case "optional":
            case "nullable":
            case "default":
            case "prefault":
            case "catch":
            case "readonly":
            case "nonoptional":
            case "promise":
            case "success":
                o(l.innerType);
                break;
            case "pipe":
                o(l.in), o(l.out);
                break;
            case "function":
                o(l.input), o(l.output);
                break;
            case "lazy":
                {
                    let A = l._cachedInner ? ? (i ? e._zod.innerType : void 0);s(A ? k(A, t, !1) : 1);
                    break
                }
            case "template_literal":
            case "string":
            case "number":
            case "int":
            case "boolean":
            case "bigint":
            case "symbol":
            case "undefined":
            case "null":
            case "void":
            case "never":
            case "any":
            case "unknown":
            case "date":
            case "nan":
            case "enum":
            case "literal":
            case "file":
            case "transform":
            case "custom":
                break;
            default:
                for (let e in l) {
                    let t = Object.getOwnPropertyDescriptor(l, e);
                    if (!t || t.get) continue;
                    let i = t.value;
                    if (i && "object" == typeof i) {
                        if (i._zod) o(i);
                        else if (Array.isArray(i))
                            for (let e of i) o(e)
                    }
                }
        }
        return t.delete(e), A = e, 1 !== (r = n) && x.set(A, 2 === r), r
    }

    function w(e) {
        return 0 !== k(e, new Set, !0)
    }
    let D = [],
        U = {
            alloc(e, i, A) {
                let r = t;
                if (!r) return A;
                t = void 0;
                let a = {
                    value: A,
                    issues: null
                };
                return r.set(i.value, a), D.push(a), A
            },
            guard(e) {
                var t;
                (t = e._zod).deferred ? ? (t.deferred = []), e._zod.deferred.push(() => {
                    let t = e._zod.parse,
                        i = (e, i) => {
                            if ("backward" !== i.direction && B(i, e.value)) throw new b;
                            return t(e, i)
                        };
                    e._zod.parse = i, e._zod.run === t && (e._zod.run = i)
                })
            },
            attach(e) {
                var i;
                let A, r, a, n = !1;
                (i = e._zod).deferred ? ? (i.deferred = []), e._zod.deferred.push(() => {
                    let i = e._zod.parse,
                        o = (s, l) => {
                            let d;
                            if (void 0 === A) {
                                let t = k(e, new Set, !1);
                                if (0 === t) return e._zod.parse = i, e._zod.run === o && (e._zod.run = i), i(s, l);
                                2 === t || n ? A = !0 : n = !0
                            }
                            let u = s.value;
                            if (!y(u)) return i(s, l);
                            let c = l[$];
                            if (c || (c = {
                                    buckets: new WeakMap,
                                    backEdges: void 0
                                }, l[$] = c), r === l) d = a;
                            else {
                                var m;
                                let t;
                                (t = (m = c).buckets.get(e)) || (t = new WeakMap, m.buckets.set(e, t)), d = t, r = l, a = d
                            }
                            let g = d.get(u);
                            if (g) return s.value = g.value, g.issues ? g.issues.length && s.issues.push(..._(g.issues)) : (s.memo = !0, c.backEdges ? ? (c.backEdges = new WeakSet), c.backEdges.add(g.value)), s;
                            t = d;
                            let p = D.length,
                                f = i(s, l);
                            t = void 0;
                            let v = D.length > p ? D.pop() : void 0;
                            return f instanceof Promise ? f.then(e => (v && (v.issues = e.issues.length ? _(e.issues) : I), e)) : (v && (v.issues = f.issues.length ? _(f.issues) : I), f)
                        };
                    e._zod.parse = o, e._zod.run === i && (e._zod.run = o)
                })
            }
        };

    function C() {
        return U
    }

    function B(e, t) {
        let i = e[$] ? .backEdges;
        return void 0 !== i && y(t) && i.has(t)
    }
    e.s(["$ZodCyclicError", 0, b, "isBackEdge", 0, B, "isRecursiveSchema", 0, w, "memoizer", 0, C], 922688), e.i(922688);
    var S = e.i(109691),
        E = e.i(985722),
        P = e.i(899918),
        O = e.i(615417);

    function N(e, t, i, A) {
        let r = Math.abs(e),
            a = r % 10,
            n = r % 100;
        return n >= 11 && n <= 19 ? A : 1 === a ? t : a >= 2 && a <= 4 ? i : A
    }

    function R() {
        return {
            localeError: (() => {
                let e = {
                        string: {
                            unit: "characters",
                            verb: "to have"
                        },
                        file: {
                            unit: "bytes",
                            verb: "to have"
                        },
                        array: {
                            unit: "items",
                            verb: "to have"
                        },
                        set: {
                            unit: "items",
                            verb: "to have"
                        },
                        map: {
                            unit: "entries",
                            verb: "to have"
                        }
                    },
                    t = {
                        regex: "input",
                        email: "email address",
                        url: "URL",
                        emoji: "emoji",
                        uuid: "UUID",
                        uuidv4: "UUIDv4",
                        uuidv6: "UUIDv6",
                        nanoid: "nanoid",
                        guid: "GUID",
                        cuid: "cuid",
                        cuid2: "cuid2",
                        ulid: "ULID",
                        xid: "XID",
                        ksuid: "KSUID",
                        datetime: "ISO datetime",
                        date: "ISO date",
                        time: "ISO time",
                        duration: "ISO duration",
                        ipv4: "IPv4 address",
                        ipv6: "IPv6 address",
                        mac: "MAC address",
                        cidrv4: "IPv4 range",
                        cidrv6: "IPv6 range",
                        base64: "base64-encoded string",
                        base64url: "base64url-encoded string",
                        json_string: "JSON string",
                        e164: "E.164 number",
                        currency_code: "currency code",
                        credit_card: "credit card number",
                        iban: "IBAN",
                        jwt: "JWT",
                        template_literal: "input"
                    },
                    i = {
                        nan: "NaN"
                    };

                function A(e, t) {
                    return "number" !== e || "number" != typeof t || Number.isFinite(t) ? i[e] ? ? e : String(t)
                }
                return i => {
                    switch (i.code) {
                        case "invalid_type":
                            {
                                let e = A(i.expected),
                                    t = A(h.parsedType(i.input), i.input);
                                return `Invalid input: expected ${e}, received ${t}`
                            }
                        case "invalid_value":
                            if (1 === i.values.length) return `Invalid input: expected ${h.stringifyPrimitive(i.values[0])}`;
                            return `Invalid option: expected one of ${h.joinValues(i.values,"|")}`;
                        case "too_big":
                            {
                                let t = i.exact ? "exactly " : i.inclusive ? "<=" : "<",
                                    A = e[i.origin] ? ? null;
                                if (A) return `Too big: expected ${i.origin??"value"} to have ${t}${i.maximum.toString()} ${A.unit??"elements"}`;
                                return `Too big: expected ${i.origin??"value"} to be ${t}${i.maximum.toString()}`
                            }
                        case "too_small":
                            {
                                let t = i.exact ? "exactly " : i.inclusive ? ">=" : ">",
                                    A = e[i.origin] ? ? null;
                                if (A) return `Too small: expected ${i.origin} to have ${t}${i.minimum.toString()} ${A.unit}`;
                                return `Too small: expected ${i.origin} to be ${t}${i.minimum.toString()}`
                            }
                        case "invalid_format":
                            if ("starts_with" === i.format) return `Invalid string: must start with "${i.prefix}"`;
                            if ("ends_with" === i.format) return `Invalid string: must end with "${i.suffix}"`;
                            if ("includes" === i.format) return `Invalid string: must include "${i.includes}"`;
                            if ("regex" === i.format) return `Invalid string: must match pattern ${i.pattern}`;
                            return `Invalid ${t[i.format]??i.format}`;
                        case "not_multiple_of":
                            return `Invalid number: must be a multiple of ${i.divisor}`;
                        case "unrecognized_keys":
                            return `Unrecognized key${i.keys.length>1?"s":""}: ${h.joinValues(i.keys,", ")}`;
                        case "invalid_key":
                            return `Invalid key in ${i.origin}`;
                        case "invalid_union":
                            if (i.options && Array.isArray(i.options) && i.options.length > 0) {
                                let e = i.options.map(e => `'${e}'`).join(" | ");
                                return `Invalid discriminator value. Expected ${e}`
                            }
                            if (!1 === i.inclusive) return "Invalid input: more than one option matched";
                            return "Invalid input";
                        case "invalid_element":
                            return `Invalid value in ${i.origin}`;
                        default:
                            return "Invalid input"
                    }
                }
            })()
        }
    }

    function T(e, t, i) {
        return 1 === Math.abs(e) ? t : i
    }

    function Z(e) {
        if (!e) return "";
        let t = e[e.length - 1];
        return e + (["ա", "ե", "ը", "ի", "ո", "ու", "օ"].includes(t) ? "ն" : "ը")
    }

    function L() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "តួអក្សរ",
                    verb: "គួរមាន"
                },
                file: {
                    unit: "បៃ",
                    verb: "គួរមាន"
                },
                array: {
                    unit: "ធាតុ",
                    verb: "គួរមាន"
                },
                set: {
                    unit: "ធាតុ",
                    verb: "គួរមាន"
                },
                map: {
                    unit: "ធាតុ",
                    verb: "គួរមាន"
                }
            }, t = {
                regex: "ទិន្នន័យបញ្ចូល",
                email: "អាសយដ្ឋានអ៊ីមែល",
                url: "URL",
                emoji: "សញ្ញាអារម្មណ៍",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "កាលបរិច្ឆេទ និងម៉ោង ISO",
                date: "កាលបរិច្ឆេទ ISO",
                time: "ម៉ោង ISO",
                duration: "រយៈពេល ISO",
                ipv4: "អាសយដ្ឋាន IPv4",
                ipv6: "អាសយដ្ឋាន IPv6",
                mac: "អាសយដ្ឋាន MAC",
                cidrv4: "ដែនអាសយដ្ឋាន IPv4",
                cidrv6: "ដែនអាសយដ្ឋាន IPv6",
                base64: "ខ្សែអក្សរអ៊ិកូដ base64",
                base64url: "ខ្សែអក្សរអ៊ិកូដ base64url",
                json_string: "ខ្សែអក្សរ JSON",
                e164: "លេខ E.164",
                credit_card: "លេខប័ណ្ណឥណទាន",
                currency_code: "កូដរូបិយប័ណ្ណ",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "ទិន្នន័យបញ្ចូល"
            }, i = {
                nan: "NaN",
                number: "លេខ",
                array: "អារេ (Array)",
                null: "គ្មានតម្លៃ (null)"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ instanceof ${A.expected} ប៉ុន្តែទទួលបាន ${r}`;
                            return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${e} ប៉ុន្តែទទួលបាន ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${h.stringifyPrimitive(A.values[0])}`;
                        return `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `ធំពេក៖ ត្រូវការ ${A.origin??"តម្លៃ"} ${t} ${A.maximum.toString()} ${i.unit??"ធាតុ"}`;
                            return `ធំពេក៖ ត្រូវការ ${A.origin??"តម្លៃ"} ${t} ${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `តូចពេក៖ ត្រូវការ ${A.origin} ${t} ${A.minimum.toString()} ${i.unit}`;
                            return `តូចពេក៖ ត្រូវការ ${A.origin} ${t} ${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${A.prefix}"`;
                        if ("ends_with" === A.format) return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${A.suffix}"`;
                        if ("includes" === A.format) return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${A.includes}"`;
                        if ("regex" === A.format) return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${A.pattern}`;
                        return `មិនត្រឹមត្រូវ៖ ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${A.divisor}`;
                    case "unrecognized_keys":
                        return `រកឃើញសោមិនស្គាល់៖ ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `សោមិនត្រឹមត្រូវនៅក្នុង ${A.origin}`;
                    case "invalid_union":
                    default:
                        return "ទិន្នន័យមិនត្រឹមត្រូវ";
                    case "invalid_element":
                        return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${A.origin}`
                }
            })
        }
    }
    e.s([], 733996), e.i(733996);
    let Q = e => e.charAt(0).toUpperCase() + e.slice(1);

    function z(e) {
        let t = Math.abs(e),
            i = t % 10,
            A = t % 100;
        return A >= 11 && A <= 19 || 0 === i ? "many" : 1 === i ? "one" : "few"
    }

    function j(e, t, i, A) {
        let r = Math.abs(e),
            a = r % 10,
            n = r % 100;
        return n >= 11 && n <= 19 ? A : 1 === a ? t : a >= 2 && a <= 4 ? i : A
    }

    function V() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "символів",
                    verb: "матиме"
                },
                file: {
                    unit: "байтів",
                    verb: "матиме"
                },
                array: {
                    unit: "елементів",
                    verb: "матиме"
                },
                set: {
                    unit: "елементів",
                    verb: "матиме"
                },
                map: {
                    unit: "елементів",
                    verb: "матиме"
                }
            }, t = {
                regex: "вхідні дані",
                email: "адреса електронної пошти",
                url: "URL",
                emoji: "емодзі",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "дата та час ISO",
                date: "дата ISO",
                time: "час ISO",
                duration: "тривалість ISO",
                ipv4: "адреса IPv4",
                ipv6: "адреса IPv6",
                mac: "адреса MAC",
                cidrv4: "діапазон IPv4",
                cidrv6: "діапазон IPv6",
                base64: "рядок у кодуванні base64",
                base64url: "рядок у кодуванні base64url",
                json_string: "рядок JSON",
                e164: "номер E.164",
                credit_card: "номер кредитної картки",
                currency_code: "код валюти",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "вхідні дані"
            }, i = {
                nan: "NaN",
                number: "число",
                array: "масив"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `Неправильні вхідні дані: очікується instanceof ${A.expected}, отримано ${r}`;
                            return `Неправильні вхідні дані: очікується ${e}, отримано ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Неправильні вхідні дані: очікується ${h.stringifyPrimitive(A.values[0])}`;
                        return `Неправильна опція: очікується одне з ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `Занадто велике: очікується, що ${A.origin??"значення"} ${i.verb} ${t}${A.maximum.toString()} ${i.unit??"елементів"}`;
                            return `Занадто велике: очікується, що ${A.origin??"значення"} буде ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `Занадто мале: очікується, що ${A.origin} ${i.verb} ${t}${A.minimum.toString()} ${i.unit}`;
                            return `Занадто мале: очікується, що ${A.origin} буде ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `Неправильний рядок: повинен починатися з "${A.prefix}"`;
                        if ("ends_with" === A.format) return `Неправильний рядок: повинен закінчуватися на "${A.suffix}"`;
                        if ("includes" === A.format) return `Неправильний рядок: повинен містити "${A.includes}"`;
                        if ("regex" === A.format) return `Неправильний рядок: повинен відповідати шаблону ${A.pattern}`;
                        return `Неправильний ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `Неправильне число: повинно бути кратним ${A.divisor}`;
                    case "unrecognized_keys":
                        return `Нерозпізнаний ключ${A.keys.length>1?"і":""}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `Неправильний ключ у ${A.origin}`;
                    case "invalid_union":
                    default:
                        return "Неправильні вхідні дані";
                    case "invalid_element":
                        return `Неправильне значення у ${A.origin}`
                }
            })
        }
    }
    e.s(["ar", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "حرف",
                    verb: "أن يحوي"
                },
                file: {
                    unit: "بايت",
                    verb: "أن يحوي"
                },
                array: {
                    unit: "عنصر",
                    verb: "أن يحوي"
                },
                set: {
                    unit: "عنصر",
                    verb: "أن يحوي"
                },
                map: {
                    unit: "عنصر",
                    verb: "أن يحوي"
                }
            }, t = {
                regex: "مدخل",
                email: "بريد إلكتروني",
                url: "رابط",
                emoji: "إيموجي",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "تاريخ ووقت بمعيار ISO",
                date: "تاريخ بمعيار ISO",
                time: "وقت بمعيار ISO",
                duration: "مدة بمعيار ISO",
                ipv4: "عنوان IPv4",
                ipv6: "عنوان IPv6",
                mac: "عنوان MAC",
                cidrv4: "مدى عناوين بصيغة IPv4",
                cidrv6: "مدى عناوين بصيغة IPv6",
                base64: "نَص بترميز base64-encoded",
                base64url: "نَص بترميز base64url-encoded",
                json_string: "نَص على هيئة JSON",
                e164: "رقم هاتف بمعيار E.164",
                credit_card: "رقم بطاقة الائتمان",
                currency_code: "رمز العملة",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "مدخل"
            }, i = {
                nan: "NaN"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `مدخلات غير مقبولة: يفترض إدخال instanceof ${A.expected}، ولكن تم إدخال ${r}`;
                            return `مدخلات غير مقبولة: يفترض إدخال ${e}، ولكن تم إدخال ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `مدخلات غير مقبولة: يفترض إدخال ${h.stringifyPrimitive(A.values[0])}`;
                        return `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return ` أكبر من اللازم: يفترض أن تكون ${A.origin??"القيمة"} ${t} ${A.maximum.toString()} ${i.unit??"عنصر"}`;
                            return `أكبر من اللازم: يفترض أن تكون ${A.origin??"القيمة"} ${t} ${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `أصغر من اللازم: يفترض لـ ${A.origin} أن يكون ${t} ${A.minimum.toString()} ${i.unit}`;
                            return `أصغر من اللازم: يفترض لـ ${A.origin} أن يكون ${t} ${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `نَص غير مقبول: يجب أن يبدأ بـ "${A.prefix}"`;
                        if ("ends_with" === A.format) return `نَص غير مقبول: يجب أن ينتهي بـ "${A.suffix}"`;
                        if ("includes" === A.format) return `نَص غير مقبول: يجب أن يتضمَّن "${A.includes}"`;
                        if ("regex" === A.format) return `نَص غير مقبول: يجب أن يطابق النمط ${A.pattern}`;
                        return `${t[A.format]??A.format} غير مقبول`;
                    case "not_multiple_of":
                        return `رقم غير مقبول: يجب أن يكون من مضاعفات ${A.divisor}`;
                    case "unrecognized_keys":
                        return `معرف${A.keys.length>1?"ات":""} غريب${A.keys.length>1?"ة":""}: ${h.joinValues(A.keys,"، ")}`;
                    case "invalid_key":
                        return `معرف غير مقبول في ${A.origin}`;
                    case "invalid_union":
                    default:
                        return "مدخل غير مقبول";
                    case "invalid_element":
                        return `مدخل غير مقبول في ${A.origin}`
                }
            })
        }
    }, "az", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "simvol",
                    verb: "olmalıdır"
                },
                file: {
                    unit: "bayt",
                    verb: "olmalıdır"
                },
                array: {
                    unit: "element",
                    verb: "olmalıdır"
                },
                set: {
                    unit: "element",
                    verb: "olmalıdır"
                },
                map: {
                    unit: "element",
                    verb: "olmalıdır"
                }
            }, t = {
                regex: "input",
                email: "email address",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO datetime",
                date: "ISO date",
                time: "ISO time",
                duration: "ISO duration",
                ipv4: "IPv4 address",
                ipv6: "IPv6 address",
                mac: "MAC address",
                cidrv4: "IPv4 range",
                cidrv6: "IPv6 range",
                base64: "base64-encoded string",
                base64url: "base64url-encoded string",
                json_string: "JSON string",
                e164: "E.164 number",
                credit_card: "kredit kartı nömrəsi",
                currency_code: "valyuta kodu",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "input"
            }, i = {
                nan: "NaN"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `Yanlış dəyər: g\xf6zlənilən instanceof ${A.expected}, daxil olan ${r}`;
                            return `Yanlış dəyər: g\xf6zlənilən ${e}, daxil olan ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Yanlış dəyər: g\xf6zlənilən ${h.stringifyPrimitive(A.values[0])}`;
                        return `Yanlış se\xe7im: aşağıdakılardan biri olmalıdır: ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `\xc7ox b\xf6y\xfck: g\xf6zlənilən ${A.origin??"dəyər"} ${t}${A.maximum.toString()} ${i.unit??"element"}`;
                            return `\xc7ox b\xf6y\xfck: g\xf6zlənilən ${A.origin??"dəyər"} ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `\xc7ox ki\xe7ik: g\xf6zlənilən ${A.origin} ${t}${A.minimum.toString()} ${i.unit}`;
                            return `\xc7ox ki\xe7ik: g\xf6zlənilən ${A.origin} ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `Yanlış mətn: "${A.prefix}" ilə başlamalıdır`;
                        if ("ends_with" === A.format) return `Yanlış mətn: "${A.suffix}" ilə bitməlidir`;
                        if ("includes" === A.format) return `Yanlış mətn: "${A.includes}" daxil olmalıdır`;
                        if ("regex" === A.format) return `Yanlış mətn: ${A.pattern} şablonuna uyğun olmalıdır`;
                        return `Yanlış ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `Yanlış ədəd: ${A.divisor} ilə b\xf6l\xfcnə bilən olmalıdır`;
                    case "unrecognized_keys":
                        return `Tanınmayan a\xe7ar${A.keys.length>1?"lar":""}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `${A.origin} daxilində yanlış a\xe7ar`;
                    case "invalid_union":
                    default:
                        return "Yanlış dəyər";
                    case "invalid_element":
                        return `${A.origin} daxilində yanlış dəyər`
                }
            })
        }
    }, "be", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: {
                        one: "сімвал",
                        few: "сімвалы",
                        many: "сімвалаў"
                    },
                    verb: "мець"
                },
                array: {
                    unit: {
                        one: "элемент",
                        few: "элементы",
                        many: "элементаў"
                    },
                    verb: "мець"
                },
                set: {
                    unit: {
                        one: "элемент",
                        few: "элементы",
                        many: "элементаў"
                    },
                    verb: "мець"
                },
                map: {
                    unit: {
                        one: "элемент",
                        few: "элементы",
                        many: "элементаў"
                    },
                    verb: "мець"
                },
                file: {
                    unit: {
                        one: "байт",
                        few: "байты",
                        many: "байтаў"
                    },
                    verb: "мець"
                }
            }, t = {
                regex: "увод",
                email: "email адрас",
                url: "URL",
                emoji: "эмодзі",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO дата і час",
                date: "ISO дата",
                time: "ISO час",
                duration: "ISO працягласць",
                ipv4: "IPv4 адрас",
                ipv6: "IPv6 адрас",
                mac: "MAC адрас",
                cidrv4: "IPv4 дыяпазон",
                cidrv6: "IPv6 дыяпазон",
                base64: "радок у фармаце base64",
                base64url: "радок у фармаце base64url",
                json_string: "JSON радок",
                e164: "нумар E.164",
                credit_card: "нумар крэдытнай карты",
                currency_code: "код валюты",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "увод"
            }, i = {
                nan: "NaN",
                number: "лік",
                array: "масіў"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `Няправільны ўвод: чакаўся instanceof ${A.expected}, атрымана ${r}`;
                            return `Няправільны ўвод: чакаўся ${e}, атрымана ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Няправільны ўвод: чакалася ${h.stringifyPrimitive(A.values[0])}`;
                        return `Няправільны варыянт: чакаўся адзін з ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) {
                                let e = N(Number(A.maximum), i.unit.one, i.unit.few, i.unit.many);
                                return `Занадта вялікі: чакалася, што ${A.origin??"значэнне"} павінна ${i.verb} ${t}${A.maximum.toString()} ${e}`
                            }
                            return `Занадта вялікі: чакалася, што ${A.origin??"значэнне"} павінна быць ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) {
                                let e = N(Number(A.minimum), i.unit.one, i.unit.few, i.unit.many);
                                return `Занадта малы: чакалася, што ${A.origin} павінна ${i.verb} ${t}${A.minimum.toString()} ${e}`
                            }
                            return `Занадта малы: чакалася, што ${A.origin} павінна быць ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `Няправільны радок: павінен пачынацца з "${A.prefix}"`;
                        if ("ends_with" === A.format) return `Няправільны радок: павінен заканчвацца на "${A.suffix}"`;
                        if ("includes" === A.format) return `Няправільны радок: павінен змяшчаць "${A.includes}"`;
                        if ("regex" === A.format) return `Няправільны радок: павінен адпавядаць шаблону ${A.pattern}`;
                        return `Няправільны ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `Няправільны лік: павінен быць кратным ${A.divisor}`;
                    case "unrecognized_keys":
                        return `Нераспазнаны ${A.keys.length>1?"ключы":"ключ"}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `Няправільны ключ у ${A.origin}`;
                    case "invalid_union":
                    default:
                        return "Няправільны ўвод";
                    case "invalid_element":
                        return `Няправільнае значэнне ў ${A.origin}`
                }
            })
        }
    }, "bg", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "символа",
                    verb: "да съдържа"
                },
                file: {
                    unit: "байта",
                    verb: "да съдържа"
                },
                array: {
                    unit: "елемента",
                    verb: "да съдържа"
                },
                set: {
                    unit: "елемента",
                    verb: "да съдържа"
                },
                map: {
                    unit: "елемента",
                    verb: "да съдържа"
                }
            }, t = {
                regex: "вход",
                email: "имейл адрес",
                url: "URL",
                emoji: "емоджи",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO време",
                date: "ISO дата",
                time: "ISO време",
                duration: "ISO продължителност",
                ipv4: "IPv4 адрес",
                ipv6: "IPv6 адрес",
                mac: "MAC адрес",
                cidrv4: "IPv4 диапазон",
                cidrv6: "IPv6 диапазон",
                base64: "base64-кодиран низ",
                base64url: "base64url-кодиран низ",
                json_string: "JSON низ",
                e164: "E.164 номер",
                credit_card: "номер на кредитна карта",
                currency_code: "код на валута",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "вход"
            }, i = {
                nan: "NaN",
                number: "число",
                array: "масив"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `Невалиден вход: очакван instanceof ${A.expected}, получен ${r}`;
                            return `Невалиден вход: очакван ${e}, получен ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Невалиден вход: очакван ${h.stringifyPrimitive(A.values[0])}`;
                        return `Невалидна опция: очаквано едно от ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `Твърде голямо: очаква се ${A.origin??"стойност"} да съдържа ${t}${A.maximum.toString()} ${i.unit??"елемента"}`;
                            return `Твърде голямо: очаква се ${A.origin??"стойност"} да бъде ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `Твърде малко: очаква се ${A.origin} да съдържа ${t}${A.minimum.toString()} ${i.unit}`;
                            return `Твърде малко: очаква се ${A.origin} да бъде ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        {
                            if ("starts_with" === A.format) return `Невалиден низ: трябва да започва с "${A.prefix}"`;
                            if ("ends_with" === A.format) return `Невалиден низ: трябва да завършва с "${A.suffix}"`;
                            if ("includes" === A.format) return `Невалиден низ: трябва да включва "${A.includes}"`;
                            if ("regex" === A.format) return `Невалиден низ: трябва да съвпада с ${A.pattern}`;
                            let e = "Невалиден";
                            return "emoji" === A.format && (e = "Невалидно"),
                            "datetime" === A.format && (e = "Невалидно"),
                            "date" === A.format && (e = "Невалидна"),
                            "time" === A.format && (e = "Невалидно"),
                            "duration" === A.format && (e = "Невалидна"),
                            `${e} ${t[A.format]??A.format}`
                        }
                    case "not_multiple_of":
                        return `Невалидно число: трябва да бъде кратно на ${A.divisor}`;
                    case "unrecognized_keys":
                        return `Неразпознат${A.keys.length>1?"и":""} ключ${A.keys.length>1?"ове":""}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `Невалиден ключ в ${A.origin}`;
                    case "invalid_union":
                    default:
                        return "Невалиден вход";
                    case "invalid_element":
                        return `Невалидна стойност в ${A.origin}`
                }
            })
        }
    }, "bn", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "অক্ষর",
                    verb: "থাকতে হবে"
                },
                file: {
                    unit: "বাইট",
                    verb: "থাকতে হবে"
                },
                array: {
                    unit: "আইটেম",
                    verb: "থাকতে হবে"
                },
                set: {
                    unit: "আইটেম",
                    verb: "থাকতে হবে"
                },
                map: {
                    unit: "এন্ট্রি",
                    verb: "থাকতে হবে"
                }
            }, t = {
                regex: "ইনপুট",
                email: "ইমেইল ঠিকানা",
                url: "URL",
                emoji: "ইমোজি",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO তারিখ ও সময়",
                date: "ISO তারিখ",
                time: "ISO সময়",
                duration: "ISO সময়কাল",
                ipv4: "IPv4 ঠিকানা",
                ipv6: "IPv6 ঠিকানা",
                mac: "MAC ঠিকানা",
                cidrv4: "IPv4 রেঞ্জ",
                cidrv6: "IPv6 রেঞ্জ",
                base64: "base64-এনকোডেড স্ট্রিং",
                base64url: "base64url-এনকোডেড স্ট্রিং",
                json_string: "JSON স্ট্রিং",
                e164: "E.164 নম্বর",
                credit_card: "ক্রেডিট কার্ড নম্বর",
                currency_code: "মুদ্রা কোড",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "ইনপুট"
            }, i = {
                nan: "NaN"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            return `অবৈধ ইনপুট: প্রত্যাশিত ${e}, প্রাপ্ত ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `অবৈধ ইনপুট: প্রত্যাশিত ${h.stringifyPrimitive(A.values[0])}`;
                        return `অবৈধ অপশন: ${h.joinValues(A.values," | ")} এর মধ্যে একটি প্রত্যাশিত`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `অনেক বড়: ${A.origin??"মান"} ${t}${A.maximum.toString()} ${i.unit??"এলিমেন্ট"} হতে হবে`;
                            return `অনেক বড়: ${A.origin??"মান"} ${t}${A.maximum.toString()} হতে হবে`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `অনেক ছোট: ${A.origin} ${t}${A.minimum.toString()} ${i.unit} হতে হবে`;
                            return `অনেক ছোট: ${A.origin} ${t}${A.minimum.toString()} হতে হবে`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `অবৈধ স্ট্রিং: "${A.prefix}" দিয়ে শুরু হতে হবে`;
                        if ("ends_with" === A.format) return `অবৈধ স্ট্রিং: "${A.suffix}" দিয়ে শেষ হতে হবে`;
                        if ("includes" === A.format) return `অবৈধ স্ট্রিং: "${A.includes}" অন্তর্ভুক্ত থাকতে হবে`;
                        if ("regex" === A.format) return `অবৈধ স্ট্রিং: ${A.pattern} প্যাটার্ন মিলতে হবে`;
                        return `অবৈধ ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `অবৈধ নম্বর: ${A.divisor} এর গুণিতক হতে হবে`;
                    case "unrecognized_keys":
                        return `অচেনা কী${A.keys.length>1?"গুলো":""}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `${A.origin} এ অবৈধ কী`;
                    case "invalid_union":
                        if (A.options && Array.isArray(A.options) && A.options.length > 0) {
                            let e = A.options.map(e => `'${e}'`).join(" | ");
                            return `অবৈধ ডিসক্রিমিনেটর মান। প্রত্যাশিত ${e}`
                        }
                        return "অবৈধ ইনপুট";
                    case "invalid_element":
                        return `${A.origin} এ অবৈধ মান`;
                    default:
                        return "অবৈধ ইনপুট"
                }
            })
        }
    }, "ca", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "caràcters",
                    verb: "contenir"
                },
                file: {
                    unit: "bytes",
                    verb: "contenir"
                },
                array: {
                    unit: "elements",
                    verb: "contenir"
                },
                set: {
                    unit: "elements",
                    verb: "contenir"
                },
                map: {
                    unit: "elements",
                    verb: "contenir"
                }
            }, t = {
                regex: "entrada",
                email: "adreça electrònica",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "data i hora ISO",
                date: "data ISO",
                time: "hora ISO",
                duration: "durada ISO",
                ipv4: "adreça IPv4",
                ipv6: "adreça IPv6",
                mac: "adreça MAC",
                cidrv4: "rang IPv4",
                cidrv6: "rang IPv6",
                base64: "cadena codificada en base64",
                base64url: "cadena codificada en base64url",
                json_string: "cadena JSON",
                e164: "número E.164",
                credit_card: "número de targeta de crèdit",
                currency_code: "codi de moneda",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "entrada"
            }, i = {
                nan: "NaN"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `Tipus inv\xe0lid: s'esperava instanceof ${A.expected}, s'ha rebut ${r}`;
                            return `Tipus inv\xe0lid: s'esperava ${e}, s'ha rebut ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Valor inv\xe0lid: s'esperava ${h.stringifyPrimitive(A.values[0])}`;
                        return `Opci\xf3 inv\xe0lida: s'esperava una de ${h.joinValues(A.values," o ")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "com a màxim" : "menys de",
                                i = e[A.origin] ? ? null;
                            if (i) return `Massa gran: s'esperava que ${A.origin??"el valor"} contingu\xe9s ${t} ${A.maximum.toString()} ${i.unit??"elements"}`;
                            return `Massa gran: s'esperava que ${A.origin??"el valor"} fos ${t} ${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? "com a mínim" : "més de",
                                i = e[A.origin] ? ? null;
                            if (i) return `Massa petit: s'esperava que ${A.origin} contingu\xe9s ${t} ${A.minimum.toString()} ${i.unit}`;
                            return `Massa petit: s'esperava que ${A.origin} fos ${t} ${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `Format inv\xe0lid: ha de comen\xe7ar amb "${A.prefix}"`;
                        if ("ends_with" === A.format) return `Format inv\xe0lid: ha d'acabar amb "${A.suffix}"`;
                        if ("includes" === A.format) return `Format inv\xe0lid: ha d'incloure "${A.includes}"`;
                        if ("regex" === A.format) return `Format inv\xe0lid: ha de coincidir amb el patr\xf3 ${A.pattern}`;
                        return `Format inv\xe0lid per a ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `N\xfamero inv\xe0lid: ha de ser m\xfaltiple de ${A.divisor}`;
                    case "unrecognized_keys":
                        return `Clau${A.keys.length>1?"s":""} no reconeguda${A.keys.length>1?"s":""}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `Clau inv\xe0lida a ${A.origin}`;
                    case "invalid_union":
                    default:
                        return "Entrada invàlida";
                    case "invalid_element":
                        return `Element inv\xe0lid a ${A.origin}`
                }
            })
        }
    }, "ckb", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "پیت",
                    verb: "بێت"
                },
                file: {
                    unit: "بایت",
                    verb: "بێت"
                },
                array: {
                    unit: "دانە",
                    verb: "بێت"
                },
                set: {
                    unit: "دانە",
                    verb: "بێت"
                },
                map: {
                    unit: "دانە",
                    verb: "بێت"
                }
            }, t = {
                regex: "regex",
                email: "ئیمەیڵ",
                url: "بەستەر (URL)",
                emoji: "ئیمۆجی",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ڕێکەوت و کات",
                date: "ڕێکەوت",
                time: "کات",
                duration: "ماوە",
                ipv4: "ناونیشانی IPv4",
                ipv6: "ناونیشانی IPv6",
                mac: "ناونیشانی MAC",
                cidrv4: "مەودای IPv4",
                cidrv6: "مەودای IPv6",
                base64: "دەقی base64",
                base64url: "دەقی base64url",
                json_string: "دەقی JSON",
                e164: "ژمارەی E.164",
                credit_card: "ژمارەی کارتی کرێدیت",
                currency_code: "کۆدی دراو",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "تێکردە"
            }, i = {
                nan: "NaN",
                string: "نووسین",
                number: "ژمارە",
                boolean: "boolean",
                array: "array",
                object: "object",
                date: "ڕێکەوت",
                integer: "ژمارە",
                float: "ژمارە",
                null: "null",
                undefined: "undefined",
                function: "function",
                symbol: "symbol",
                unknown: "unknown",
                promise: "promise",
                void: "void",
                never: "never",
                map: "map",
                set: "set"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t,
                                a = ["ا", "و", "ۆ", "وو", "ە", "ی", "ێ"].some(e => r.endsWith(e)) ? "یە" : "ە",
                                n = /^[a-zA-Z]+$/.test(r);
                            if ("null" === t || "undefined" === t) return "داواکراوە";
                            return `چاوەڕوانکراوە ${e} بێت، بەڵام ${r}${n?"":a}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `بەهاکە نادرووستە: چاوەڕوانکراوە ${h.stringifyPrimitive(A.values[0])} بێت`;
                        return `هەڵبژاردەی نادروست: چاوەڕوانکراوە یەکێک بێت لە ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = e[A.origin] ? ? null;
                            if (t) return `پێویستە بە لایەنی زۆرەوە ${A.maximum.toString()} ${t.unit} ${t.verb}`;
                            return `پێویستە بە لایەنی زۆرەوە ${A.maximum.toString()} بێت`
                        }
                    case "too_small":
                        {
                            let t = e[A.origin] ? ? null;
                            if (t) return `پێویستە بە لایەنی کەمەوە ${A.minimum.toString()} ${t.unit} ${t.verb}`;
                            return `پێویستە بە لایەنی کەمەوە ${A.minimum.toString()} بێت`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `دەقی نادروست: پێویستە دەستپێبکات بە "${A.prefix}"`;
                        if ("ends_with" === A.format) return `دەقی نادروست: پێویستە کۆتاییبێت بە "${A.suffix}"`;
                        if ("includes" === A.format) return `دەقی نادروست: پێویستە "${A.includes}" لەخۆبگرێت`;
                        if ("regex" === A.format) return `دەقی نادروست: پێویستە لەگەڵ پاتێرنی ${A.pattern} بگونجێت`;
                        return `بەهای ${t[A.format]??A.format} نادروستە`;
                    case "not_multiple_of":
                        return `ژمارەی نادروست: دەبێت چەند هێندە بێت بۆ ${A.divisor}`;
                    case "unrecognized_keys":
                        return `کلیلی نەناسراو: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `کلیلی نادروست لە ${A.origin}`;
                    case "invalid_union":
                        if (A.options && Array.isArray(A.options) && A.options.length > 0) {
                            let e = A.options.map(e => `'${e}'`).join(" | ");
                            return `بەهای نەناسراو هەیە. بەهای چاوەڕوانکراو: ${e}`
                        }
                        return "یەکگرتنی نادروست";
                    case "invalid_element":
                        return `${A.origin} بەهاکە نادروستە`;
                    default:
                        return "تێکردەی نادروست"
                }
            })
        }
    }, "cs", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "znaků",
                    verb: "mít"
                },
                file: {
                    unit: "bajtů",
                    verb: "mít"
                },
                array: {
                    unit: "prvků",
                    verb: "mít"
                },
                set: {
                    unit: "prvků",
                    verb: "mít"
                },
                map: {
                    unit: "prvků",
                    verb: "mít"
                }
            }, t = {
                regex: "regulární výraz",
                email: "e-mailová adresa",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "datum a čas ve formátu ISO",
                date: "datum ve formátu ISO",
                time: "čas ve formátu ISO",
                duration: "doba trvání ISO",
                ipv4: "IPv4 adresa",
                ipv6: "IPv6 adresa",
                mac: "MAC adresa",
                cidrv4: "rozsah IPv4",
                cidrv6: "rozsah IPv6",
                base64: "řetězec zakódovaný ve formátu base64",
                base64url: "řetězec zakódovaný ve formátu base64url",
                json_string: "řetězec ve formátu JSON",
                e164: "číslo E.164",
                credit_card: "číslo kreditní karty",
                currency_code: "kód měny",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "vstup"
            }, i = {
                nan: "NaN",
                number: "číslo",
                string: "řetězec",
                function: "funkce",
                array: "pole"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `Neplatn\xfd vstup: oček\xe1v\xe1no instanceof ${A.expected}, obdrženo ${r}`;
                            return `Neplatn\xfd vstup: oček\xe1v\xe1no ${e}, obdrženo ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Neplatn\xfd vstup: oček\xe1v\xe1no ${h.stringifyPrimitive(A.values[0])}`;
                        return `Neplatn\xe1 možnost: oček\xe1v\xe1na jedna z hodnot ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `Hodnota je př\xedliš velk\xe1: ${A.origin??"hodnota"} mus\xed m\xedt ${t}${A.maximum.toString()} ${i.unit??"prvků"}`;
                            return `Hodnota je př\xedliš velk\xe1: ${A.origin??"hodnota"} mus\xed b\xfdt ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `Hodnota je př\xedliš mal\xe1: ${A.origin??"hodnota"} mus\xed m\xedt ${t}${A.minimum.toString()} ${i.unit??"prvků"}`;
                            return `Hodnota je př\xedliš mal\xe1: ${A.origin??"hodnota"} mus\xed b\xfdt ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `Neplatn\xfd řetězec: mus\xed zač\xednat na "${A.prefix}"`;
                        if ("ends_with" === A.format) return `Neplatn\xfd řetězec: mus\xed končit na "${A.suffix}"`;
                        if ("includes" === A.format) return `Neplatn\xfd řetězec: mus\xed obsahovat "${A.includes}"`;
                        if ("regex" === A.format) return `Neplatn\xfd řetězec: mus\xed odpov\xeddat vzoru ${A.pattern}`;
                        return `Neplatn\xfd form\xe1t ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `Neplatn\xe9 č\xedslo: mus\xed b\xfdt n\xe1sobkem ${A.divisor}`;
                    case "unrecognized_keys":
                        return `Nezn\xe1m\xe9 kl\xedče: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `Neplatn\xfd kl\xedč v ${A.origin}`;
                    case "invalid_union":
                    default:
                        return "Neplatný vstup";
                    case "invalid_element":
                        return `Neplatn\xe1 hodnota v ${A.origin}`
                }
            })
        }
    }, "da", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "tegn",
                    verb: "havde"
                },
                file: {
                    unit: "bytes",
                    verb: "havde"
                },
                array: {
                    unit: "elementer",
                    verb: "indeholdt"
                },
                set: {
                    unit: "elementer",
                    verb: "indeholdt"
                },
                map: {
                    unit: "elementer",
                    verb: "indeholdt"
                }
            }, t = {
                regex: "input",
                email: "e-mailadresse",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO dato- og klokkeslæt",
                date: "ISO-dato",
                time: "ISO-klokkeslæt",
                duration: "ISO-varighed",
                ipv4: "IPv4-adresse",
                ipv6: "IPv6-adresse",
                mac: "MAC-adresse",
                cidrv4: "IPv4-spektrum",
                cidrv6: "IPv6-spektrum",
                base64: "base64-kodet streng",
                base64url: "base64url-kodet streng",
                json_string: "JSON-streng",
                e164: "E.164-nummer",
                credit_card: "kreditkortnummer",
                currency_code: "valutakode",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "input"
            }, i = {
                nan: "NaN",
                string: "streng",
                number: "tal",
                boolean: "boolean",
                array: "liste",
                object: "objekt",
                set: "sæt",
                file: "fil"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `Ugyldigt input: forventede instanceof ${A.expected}, fik ${r}`;
                            return `Ugyldigt input: forventede ${e}, fik ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Ugyldig v\xe6rdi: forventede ${h.stringifyPrimitive(A.values[0])}`;
                        return `Ugyldigt valg: forventede en af f\xf8lgende ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                r = e[A.origin] ? ? null,
                                a = i[A.origin] ? ? A.origin;
                            if (r) return `For stor: forventede ${a??"value"} ${r.verb} ${t} ${A.maximum.toString()} ${r.unit??"elementer"}`;
                            return `For stor: forventede ${a??"value"} havde ${t} ${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                r = e[A.origin] ? ? null,
                                a = i[A.origin] ? ? A.origin;
                            if (r) return `For lille: forventede ${a} ${r.verb} ${t} ${A.minimum.toString()} ${r.unit}`;
                            return `For lille: forventede ${a} havde ${t} ${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `Ugyldig streng: skal starte med "${A.prefix}"`;
                        if ("ends_with" === A.format) return `Ugyldig streng: skal ende med "${A.suffix}"`;
                        if ("includes" === A.format) return `Ugyldig streng: skal indeholde "${A.includes}"`;
                        if ("regex" === A.format) return `Ugyldig streng: skal matche m\xf8nsteret ${A.pattern}`;
                        return `Ugyldig ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `Ugyldigt tal: skal v\xe6re deleligt med ${A.divisor}`;
                    case "unrecognized_keys":
                        return `${A.keys.length>1?"Ukendte nøgler":"Ukendt nøgle"}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `Ugyldig n\xf8gle i ${A.origin}`;
                    case "invalid_union":
                        return "Ugyldigt input: matcher ingen af de tilladte typer";
                    case "invalid_element":
                        return `Ugyldig v\xe6rdi i ${A.origin}`;
                    default:
                        return "Ugyldigt input"
                }
            })
        }
    }, "de", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "Zeichen",
                    verb: "zu haben"
                },
                file: {
                    unit: "Bytes",
                    verb: "zu haben"
                },
                array: {
                    unit: "Elemente",
                    verb: "zu haben"
                },
                set: {
                    unit: "Elemente",
                    verb: "zu haben"
                },
                map: {
                    unit: "Elemente",
                    verb: "zu haben"
                }
            }, t = {
                regex: "Eingabe",
                email: "E-Mail-Adresse",
                url: "URL",
                emoji: "Emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO-Datum und -Uhrzeit",
                date: "ISO-Datum",
                time: "ISO-Uhrzeit",
                duration: "ISO-Dauer",
                ipv4: "IPv4-Adresse",
                ipv6: "IPv6-Adresse",
                mac: "MAC-Adresse",
                cidrv4: "IPv4-Bereich",
                cidrv6: "IPv6-Bereich",
                base64: "Base64-codierter String",
                base64url: "Base64-URL-codierter String",
                json_string: "JSON-String",
                e164: "E.164-Nummer",
                credit_card: "Kreditkartennummer",
                currency_code: "Währungscode",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "Eingabe"
            }, i = {
                nan: "NaN",
                number: "Zahl",
                array: "Array"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `Ung\xfcltige Eingabe: erwartet instanceof ${A.expected}, erhalten ${r}`;
                            return `Ung\xfcltige Eingabe: erwartet ${e}, erhalten ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Ung\xfcltige Eingabe: erwartet ${h.stringifyPrimitive(A.values[0])}`;
                        return `Ung\xfcltige Option: erwartet eine von ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `Zu gro\xdf: erwartet, dass ${A.origin??"Wert"} ${t}${A.maximum.toString()} ${i.unit??"Elemente"} hat`;
                            return `Zu gro\xdf: erwartet, dass ${A.origin??"Wert"} ${t}${A.maximum.toString()} ist`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `Zu klein: erwartet, dass ${A.origin} ${t}${A.minimum.toString()} ${i.unit} hat`;
                            return `Zu klein: erwartet, dass ${A.origin} ${t}${A.minimum.toString()} ist`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `Ung\xfcltiger String: muss mit "${A.prefix}" beginnen`;
                        if ("ends_with" === A.format) return `Ung\xfcltiger String: muss mit "${A.suffix}" enden`;
                        if ("includes" === A.format) return `Ung\xfcltiger String: muss "${A.includes}" enthalten`;
                        if ("regex" === A.format) return `Ung\xfcltiger String: muss dem Muster ${A.pattern} entsprechen`;
                        return `Ung\xfcltig: ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `Ung\xfcltige Zahl: muss ein Vielfaches von ${A.divisor} sein`;
                    case "unrecognized_keys":
                        return `${A.keys.length>1?"Unbekannte Schlüssel":"Unbekannter Schlüssel"}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `Ung\xfcltiger Schl\xfcssel in ${A.origin}`;
                    case "invalid_union":
                    default:
                        return "Ungültige Eingabe";
                    case "invalid_element":
                        return `Ung\xfcltiger Wert in ${A.origin}`
                }
            })
        }
    }, "el", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "χαρακτήρες",
                    verb: "να έχει"
                },
                file: {
                    unit: "bytes",
                    verb: "να έχει"
                },
                array: {
                    unit: "στοιχεία",
                    verb: "να έχει"
                },
                set: {
                    unit: "στοιχεία",
                    verb: "να έχει"
                },
                map: {
                    unit: "καταχωρήσεις",
                    verb: "να έχει"
                }
            }, t = {
                regex: "είσοδος",
                email: "διεύθυνση email",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO ημερομηνία και ώρα",
                date: "ISO ημερομηνία",
                time: "ISO ώρα",
                duration: "ISO διάρκεια",
                ipv4: "διεύθυνση IPv4",
                ipv6: "διεύθυνση IPv6",
                mac: "διεύθυνση MAC",
                cidrv4: "εύρος IPv4",
                cidrv6: "εύρος IPv6",
                base64: "συμβολοσειρά κωδικοποιημένη σε base64",
                base64url: "συμβολοσειρά κωδικοποιημένη σε base64url",
                json_string: "συμβολοσειρά JSON",
                e164: "αριθμός E.164",
                credit_card: "αριθμός πιστωτικής κάρτας",
                currency_code: "κωδικός νομίσματος",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "είσοδος"
            }, i = {
                nan: "NaN"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if ("string" == typeof A.expected && /^[A-Z]/.test(A.expected)) return `Μη έγκυρη είσοδος: αναμενόταν instanceof ${A.expected}, λήφθηκε ${r}`;
                            return `Μη έγκυρη είσοδος: αναμενόταν ${e}, λήφθηκε ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Μη έγκυρη είσοδος: αναμενόταν ${h.stringifyPrimitive(A.values[0])}`;
                        return `Μη έγκυρη επιλογή: αναμενόταν ένα από ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `Πολύ μεγάλο: αναμενόταν ${A.origin??"τιμή"} να έχει ${t}${A.maximum.toString()} ${i.unit??"στοιχεία"}`;
                            return `Πολύ μεγάλο: αναμενόταν ${A.origin??"τιμή"} να είναι ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `Πολύ μικρό: αναμενόταν ${A.origin} να έχει ${t}${A.minimum.toString()} ${i.unit}`;
                            return `Πολύ μικρό: αναμενόταν ${A.origin} να είναι ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `Μη έγκυρη συμβολοσειρά: πρέπει να ξεκινά με "${A.prefix}"`;
                        if ("ends_with" === A.format) return `Μη έγκυρη συμβολοσειρά: πρέπει να τελειώνει με "${A.suffix}"`;
                        if ("includes" === A.format) return `Μη έγκυρη συμβολοσειρά: πρέπει να περιέχει "${A.includes}"`;
                        if ("regex" === A.format) return `Μη έγκυρη συμβολοσειρά: πρέπει να ταιριάζει με το μοτίβο ${A.pattern}`;
                        return `Μη έγκυρο: ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `Μη έγκυρος αριθμός: πρέπει να είναι πολλαπλάσιο του ${A.divisor}`;
                    case "unrecognized_keys":
                        return `Άγνωστ${A.keys.length>1?"α":"ο"} κλειδ${A.keys.length>1?"ιά":"ί"}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `Μη έγκυρο κλειδί στο ${A.origin}`;
                    case "invalid_union":
                    default:
                        return "Μη έγκυρη είσοδος";
                    case "invalid_element":
                        return `Μη έγκυρη τιμή στο ${A.origin}`
                }
            })
        }
    }, "en", 0, R, "eo", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "karaktrojn",
                    verb: "havi"
                },
                file: {
                    unit: "bajtojn",
                    verb: "havi"
                },
                array: {
                    unit: "elementojn",
                    verb: "havi"
                },
                set: {
                    unit: "elementojn",
                    verb: "havi"
                },
                map: {
                    unit: "elementojn",
                    verb: "havi"
                }
            }, t = {
                regex: "enigo",
                email: "retadreso",
                url: "URL",
                emoji: "emoĝio",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO-datotempo",
                date: "ISO-dato",
                time: "ISO-tempo",
                duration: "ISO-daŭro",
                ipv4: "IPv4-adreso",
                ipv6: "IPv6-adreso",
                mac: "MAC-adreso",
                cidrv4: "IPv4-rango",
                cidrv6: "IPv6-rango",
                base64: "64-ume kodita karaktraro",
                base64url: "URL-64-ume kodita karaktraro",
                json_string: "JSON-karaktraro",
                e164: "E.164-nombro",
                credit_card: "kreditkarta numero",
                currency_code: "valuta kodo",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "enigo"
            }, i = {
                nan: "NaN",
                number: "nombro",
                array: "tabelo",
                null: "senvalora"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `Nevalida enigo: atendiĝis instanceof ${A.expected}, riceviĝis ${r}`;
                            return `Nevalida enigo: atendiĝis ${e}, riceviĝis ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Nevalida enigo: atendiĝis ${h.stringifyPrimitive(A.values[0])}`;
                        return `Nevalida opcio: atendiĝis unu el ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `Tro granda: atendiĝis ke ${A.origin??"valoro"} havu ${t}${A.maximum.toString()} ${i.unit??"elementojn"}`;
                            return `Tro granda: atendiĝis ke ${A.origin??"valoro"} havu ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `Tro malgranda: atendiĝis ke ${A.origin} havu ${t}${A.minimum.toString()} ${i.unit}`;
                            return `Tro malgranda: atendiĝis ke ${A.origin} estu ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `Nevalida karaktraro: devas komenciĝi per "${A.prefix}"`;
                        if ("ends_with" === A.format) return `Nevalida karaktraro: devas finiĝi per "${A.suffix}"`;
                        if ("includes" === A.format) return `Nevalida karaktraro: devas inkluzivi "${A.includes}"`;
                        if ("regex" === A.format) return `Nevalida karaktraro: devas kongrui kun la modelo ${A.pattern}`;
                        return `Nevalida ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `Nevalida nombro: devas esti oblo de ${A.divisor}`;
                    case "unrecognized_keys":
                        return `Nekonata${A.keys.length>1?"j":""} ŝlosilo${A.keys.length>1?"j":""}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `Nevalida ŝlosilo en ${A.origin}`;
                    case "invalid_union":
                    default:
                        return "Nevalida enigo";
                    case "invalid_element":
                        return `Nevalida valoro en ${A.origin}`
                }
            })
        }
    }, "es", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "caracteres",
                    verb: "tener"
                },
                file: {
                    unit: "bytes",
                    verb: "tener"
                },
                array: {
                    unit: "elementos",
                    verb: "tener"
                },
                set: {
                    unit: "elementos",
                    verb: "tener"
                }
            }, t = {
                regex: "entrada",
                email: "dirección de correo electrónico",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "fecha y hora ISO",
                date: "fecha ISO",
                time: "hora ISO",
                duration: "duración ISO",
                ipv4: "dirección IPv4",
                ipv6: "dirección IPv6",
                mac: "dirección MAC",
                cidrv4: "rango IPv4",
                cidrv6: "rango IPv6",
                base64: "cadena codificada en base64",
                base64url: "URL codificada en base64",
                json_string: "cadena JSON",
                e164: "número E.164",
                credit_card: "número de tarjeta de crédito",
                currency_code: "código de moneda",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "entrada"
            }, i = {
                nan: "NaN",
                string: "texto",
                number: "número",
                boolean: "booleano",
                array: "arreglo",
                object: "objeto",
                set: "conjunto",
                file: "archivo",
                date: "fecha",
                bigint: "número grande",
                symbol: "símbolo",
                undefined: "indefinido",
                null: "nulo",
                function: "función",
                map: "mapa",
                record: "registro",
                tuple: "tupla",
                enum: "enumeración",
                union: "unión",
                literal: "literal",
                promise: "promesa",
                void: "vacío",
                never: "nunca",
                unknown: "desconocido",
                any: "cualquiera"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `Entrada inv\xe1lida: se esperaba instanceof ${A.expected}, recibido ${r}`;
                            return `Entrada inv\xe1lida: se esperaba ${e}, recibido ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Entrada inv\xe1lida: se esperaba ${h.stringifyPrimitive(A.values[0])}`;
                        return `Opci\xf3n inv\xe1lida: se esperaba una de ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                r = e[A.origin] ? ? null,
                                a = i[A.origin] ? ? A.origin;
                            if (r) return `Demasiado grande: se esperaba que ${a??"valor"} tuviera ${t}${A.maximum.toString()} ${r.unit??"elementos"}`;
                            return `Demasiado grande: se esperaba que ${a??"valor"} fuera ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                r = e[A.origin] ? ? null,
                                a = i[A.origin] ? ? A.origin;
                            if (r) return `Demasiado peque\xf1o: se esperaba que ${a} tuviera ${t}${A.minimum.toString()} ${r.unit}`;
                            return `Demasiado peque\xf1o: se esperaba que ${a} fuera ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `Cadena inv\xe1lida: debe comenzar con "${A.prefix}"`;
                        if ("ends_with" === A.format) return `Cadena inv\xe1lida: debe terminar en "${A.suffix}"`;
                        if ("includes" === A.format) return `Cadena inv\xe1lida: debe incluir "${A.includes}"`;
                        if ("regex" === A.format) return `Cadena inv\xe1lida: debe coincidir con el patr\xf3n ${A.pattern}`;
                        return `Inv\xe1lido ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `N\xfamero inv\xe1lido: debe ser m\xfaltiplo de ${A.divisor}`;
                    case "unrecognized_keys":
                        return `Llave${A.keys.length>1?"s":""} desconocida${A.keys.length>1?"s":""}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `Llave inv\xe1lida en ${i[A.origin]??A.origin}`;
                    case "invalid_union":
                    default:
                        return "Entrada inválida";
                    case "invalid_element":
                        return `Valor inv\xe1lido en ${i[A.origin]??A.origin}`
                }
            })
        }
    }, "fa", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "کاراکتر",
                    verb: "داشته باشد"
                },
                file: {
                    unit: "بایت",
                    verb: "داشته باشد"
                },
                array: {
                    unit: "آیتم",
                    verb: "داشته باشد"
                },
                set: {
                    unit: "آیتم",
                    verb: "داشته باشد"
                },
                map: {
                    unit: "آیتم",
                    verb: "داشته باشد"
                }
            }, t = {
                regex: "ورودی",
                email: "آدرس ایمیل",
                url: "URL",
                emoji: "ایموجی",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "تاریخ و زمان ایزو",
                date: "تاریخ ایزو",
                time: "زمان ایزو",
                duration: "مدت زمان ایزو",
                ipv4: "IPv4 آدرس",
                ipv6: "IPv6 آدرس",
                mac: "MAC آدرس",
                cidrv4: "IPv4 دامنه",
                cidrv6: "IPv6 دامنه",
                base64: "base64-encoded رشته",
                base64url: "base64url-encoded رشته",
                json_string: "JSON رشته",
                e164: "E.164 عدد",
                credit_card: "شماره کارت اعتباری",
                currency_code: "کد ارز",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "ورودی"
            }, i = {
                nan: "NaN",
                number: "عدد",
                array: "آرایه"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `ورودی نامعتبر: می‌بایست instanceof ${A.expected} می‌بود، ${r} دریافت شد`;
                            return `ورودی نامعتبر: می‌بایست ${e} می‌بود، ${r} دریافت شد`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `ورودی نامعتبر: می‌بایست ${h.stringifyPrimitive(A.values[0])} می‌بود`;
                        return `گزینه نامعتبر: می‌بایست یکی از ${h.joinValues(A.values,"|")} می‌بود`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `خیلی بزرگ: ${A.origin??"مقدار"} باید ${t}${A.maximum.toString()} ${i.unit??"عنصر"} باشد`;
                            return `خیلی بزرگ: ${A.origin??"مقدار"} باید ${t}${A.maximum.toString()} باشد`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `خیلی کوچک: ${A.origin} باید ${t}${A.minimum.toString()} ${i.unit} باشد`;
                            return `خیلی کوچک: ${A.origin} باید ${t}${A.minimum.toString()} باشد`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `رشته نامعتبر: باید با "${A.prefix}" شروع شود`;
                        if ("ends_with" === A.format) return `رشته نامعتبر: باید با "${A.suffix}" تمام شود`;
                        if ("includes" === A.format) return `رشته نامعتبر: باید شامل "${A.includes}" باشد`;
                        if ("regex" === A.format) return `رشته نامعتبر: باید با الگوی ${A.pattern} مطابقت داشته باشد`;
                        return `${t[A.format]??A.format} نامعتبر`;
                    case "not_multiple_of":
                        return `عدد نامعتبر: باید مضرب ${A.divisor} باشد`;
                    case "unrecognized_keys":
                        return `کلید${A.keys.length>1?"های":""} ناشناس: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `کلید ناشناس در ${A.origin}`;
                    case "invalid_union":
                    default:
                        return "ورودی نامعتبر";
                    case "invalid_element":
                        return `مقدار نامعتبر در ${A.origin}`
                }
            })
        }
    }, "fi", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "merkkiä",
                    subject: "merkkijonon"
                },
                file: {
                    unit: "tavua",
                    subject: "tiedoston"
                },
                array: {
                    unit: "alkiota",
                    subject: "listan"
                },
                set: {
                    unit: "alkiota",
                    subject: "joukon"
                },
                map: {
                    unit: "alkiota",
                    subject: "kuvauksen"
                },
                number: {
                    unit: "",
                    subject: "luvun"
                },
                bigint: {
                    unit: "",
                    subject: "suuren kokonaisluvun"
                },
                int: {
                    unit: "",
                    subject: "kokonaisluvun"
                },
                date: {
                    unit: "",
                    subject: "päivämäärän"
                }
            }, t = {
                regex: "säännöllinen lauseke",
                email: "sähköpostiosoite",
                url: "URL-osoite",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO-aikaleima",
                date: "ISO-päivämäärä",
                time: "ISO-aika",
                duration: "ISO-kesto",
                ipv4: "IPv4-osoite",
                ipv6: "IPv6-osoite",
                mac: "MAC-osoite",
                cidrv4: "IPv4-alue",
                cidrv6: "IPv6-alue",
                base64: "base64-koodattu merkkijono",
                base64url: "base64url-koodattu merkkijono",
                json_string: "JSON-merkkijono",
                e164: "E.164-luku",
                credit_card: "luottokortin numero",
                currency_code: "valuuttakoodi",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "templaattimerkkijono"
            }, i = {
                nan: "NaN"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `Virheellinen tyyppi: odotettiin instanceof ${A.expected}, oli ${r}`;
                            return `Virheellinen tyyppi: odotettiin ${e}, oli ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Virheellinen sy\xf6te: t\xe4ytyy olla ${h.stringifyPrimitive(A.values[0])}`;
                        return `Virheellinen valinta: t\xe4ytyy olla yksi seuraavista: ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `Liian suuri: ${i.subject} t\xe4ytyy olla ${t}${A.maximum.toString()} ${i.unit}`.trim();
                            return `Liian suuri: arvon t\xe4ytyy olla ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `Liian pieni: ${i.subject} t\xe4ytyy olla ${t}${A.minimum.toString()} ${i.unit}`.trim();
                            return `Liian pieni: arvon t\xe4ytyy olla ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `Virheellinen sy\xf6te: t\xe4ytyy alkaa "${A.prefix}"`;
                        if ("ends_with" === A.format) return `Virheellinen sy\xf6te: t\xe4ytyy loppua "${A.suffix}"`;
                        if ("includes" === A.format) return `Virheellinen sy\xf6te: t\xe4ytyy sis\xe4lt\xe4\xe4 "${A.includes}"`;
                        if ("regex" === A.format) return `Virheellinen sy\xf6te: t\xe4ytyy vastata s\xe4\xe4nn\xf6llist\xe4 lauseketta ${A.pattern}`;
                        return `Virheellinen ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `Virheellinen luku: t\xe4ytyy olla luvun ${A.divisor} monikerta`;
                    case "unrecognized_keys":
                        return `${A.keys.length>1?"Tuntemattomat avaimet":"Tuntematon avain"}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return "Virheellinen avain tietueessa";
                    case "invalid_union":
                        return "Virheellinen unioni";
                    case "invalid_element":
                        return "Virheellinen arvo joukossa";
                    default:
                        return "Virheellinen syöte"
                }
            })
        }
    }, "fr", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "caractères",
                    verb: "avoir"
                },
                file: {
                    unit: "octets",
                    verb: "avoir"
                },
                array: {
                    unit: "éléments",
                    verb: "avoir"
                },
                set: {
                    unit: "éléments",
                    verb: "avoir"
                }
            }, t = {
                regex: "expression régulière",
                email: "adresse e-mail",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "date et heure ISO",
                date: "date ISO",
                time: "heure ISO",
                duration: "durée ISO",
                ipv4: "adresse IPv4",
                ipv6: "adresse IPv6",
                mac: "adresse MAC",
                cidrv4: "plage IPv4",
                cidrv6: "plage IPv6",
                base64: "chaîne de caractères encodée en base64",
                base64url: "chaîne de caractères encodée en base64url",
                json_string: "chaîne de caractères JSON",
                e164: "numéro au format E.164",
                credit_card: "numéro de carte de crédit",
                currency_code: "code de devise",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "entrée"
            }, i = {
                string: "chaîne de caractères",
                number: "nombre",
                int: "entier",
                boolean: "booléen",
                bigint: "grand entier",
                symbol: "symbole",
                undefined: "indéfini",
                null: "null",
                never: "jamais",
                void: "vide",
                date: "date",
                array: "tableau",
                object: "objet",
                tuple: "tuple",
                record: "record",
                map: "map",
                set: "ensemble",
                file: "fichier",
                nonoptional: "non optionnel",
                nan: "NaN",
                function: "fonction"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `Entr\xe9e invalide : instance de ${A.expected} attendu, ${r} re\xe7u`;
                            return `Entr\xe9e invalide : ${e} attendu, ${r} re\xe7u`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Entr\xe9e invalide : ${h.stringifyPrimitive(A.values[0])} attendu`;
                        return `Option invalide : une valeur parmi ${h.joinValues(A.values,"|")} attendue`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                r = e[A.origin] ? ? null;
                            if (r) return `Trop grand : ${i[A.origin]??"valeur"} doit ${r.verb} ${t}${A.maximum.toString()} ${r.unit??"élément(s)"}`;
                            return `Trop grand : ${i[A.origin]??"valeur"} doit \xeatre ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                r = e[A.origin] ? ? null;
                            if (r) return `Trop petit : ${i[A.origin]??"valeur"} doit ${r.verb} ${t}${A.minimum.toString()} ${r.unit}`;
                            return `Trop petit : ${i[A.origin]??"valeur"} doit \xeatre ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `Cha\xeene de caract\xe8res invalide : doit commencer par "${A.prefix}"`;
                        if ("ends_with" === A.format) return `Cha\xeene de caract\xe8res invalide : doit se terminer par "${A.suffix}"`;
                        if ("includes" === A.format) return `Cha\xeene de caract\xe8res invalide : doit inclure "${A.includes}"`;
                        if ("regex" === A.format) return `Cha\xeene de caract\xe8res invalide : doit correspondre au motif ${A.pattern}`;
                        return `${t[A.format]??A.format} invalide`;
                    case "not_multiple_of":
                        return `Nombre invalide : doit \xeatre un multiple de ${A.divisor}`;
                    case "unrecognized_keys":
                        return `Cl\xe9${A.keys.length>1?"s":""} non reconnue${A.keys.length>1?"s":""} : ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `Cl\xe9 invalide dans ${A.origin}`;
                    case "invalid_union":
                    default:
                        return "Entrée invalide";
                    case "invalid_element":
                        return `Valeur invalide dans ${A.origin}`
                }
            })
        }
    }, "frCA", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "caractères",
                    verb: "avoir"
                },
                file: {
                    unit: "octets",
                    verb: "avoir"
                },
                array: {
                    unit: "éléments",
                    verb: "avoir"
                },
                set: {
                    unit: "éléments",
                    verb: "avoir"
                },
                map: {
                    unit: "éléments",
                    verb: "avoir"
                }
            }, t = {
                regex: "entrée",
                email: "adresse courriel",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "date-heure ISO",
                date: "date ISO",
                time: "heure ISO",
                duration: "durée ISO",
                ipv4: "adresse IPv4",
                ipv6: "adresse IPv6",
                mac: "adresse MAC",
                cidrv4: "plage IPv4",
                cidrv6: "plage IPv6",
                base64: "chaîne encodée en base64",
                base64url: "chaîne encodée en base64url",
                json_string: "chaîne JSON",
                e164: "numéro E.164",
                credit_card: "numéro de carte de crédit",
                currency_code: "code de devise",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "entrée"
            }, i = {
                nan: "NaN"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `Entr\xe9e invalide : attendu instanceof ${A.expected}, re\xe7u ${r}`;
                            return `Entr\xe9e invalide : attendu ${e}, re\xe7u ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Entr\xe9e invalide : attendu ${h.stringifyPrimitive(A.values[0])}`;
                        return `Option invalide : attendu l'une des valeurs suivantes ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "≤" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `Trop grand : attendu que ${A.origin??"la valeur"} ait ${t}${A.maximum.toString()} ${i.unit}`;
                            return `Trop grand : attendu que ${A.origin??"la valeur"} soit ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? "≥" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `Trop petit : attendu que ${A.origin} ait ${t}${A.minimum.toString()} ${i.unit}`;
                            return `Trop petit : attendu que ${A.origin} soit ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `Cha\xeene invalide : doit commencer par "${A.prefix}"`;
                        if ("ends_with" === A.format) return `Cha\xeene invalide : doit se terminer par "${A.suffix}"`;
                        if ("includes" === A.format) return `Cha\xeene invalide : doit inclure "${A.includes}"`;
                        if ("regex" === A.format) return `Cha\xeene invalide : doit correspondre au motif ${A.pattern}`;
                        return `${t[A.format]??A.format} invalide`;
                    case "not_multiple_of":
                        return `Nombre invalide : doit \xeatre un multiple de ${A.divisor}`;
                    case "unrecognized_keys":
                        return `Cl\xe9${A.keys.length>1?"s":""} non reconnue${A.keys.length>1?"s":""} : ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `Cl\xe9 invalide dans ${A.origin}`;
                    case "invalid_union":
                    default:
                        return "Entrée invalide";
                    case "invalid_element":
                        return `Valeur invalide dans ${A.origin}`
                }
            })
        }
    }, "gu", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "અક્ષર",
                    verb: "હોવા જોઈએ"
                },
                file: {
                    unit: "બાયટ",
                    verb: "હોવા જોઈએ"
                },
                array: {
                    unit: "આઇટમ",
                    verb: "હોવા જોઈએ"
                },
                set: {
                    unit: "આઇટમ",
                    verb: "હોવા જોઈએ"
                },
                map: {
                    unit: "એન્ટ્રી",
                    verb: "હોવા જોઈએ"
                }
            }, t = {
                regex: "ઇનપુટ",
                email: "ઈમેઇલ એડ્રેસ",
                url: "URL",
                emoji: "ઇમોજી",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO તારીખ અને સમય",
                date: "ISO તારીખ",
                time: "ISO સમય",
                duration: "ISO અવધિ",
                ipv4: "IPv4 એડ્રેસ",
                ipv6: "IPv6 એડ્રેસ",
                mac: "MAC એડ્રેસ",
                cidrv4: "IPv4 શ્રેણી",
                cidrv6: "IPv6 શ્રેણી",
                base64: "base64-એન્કોડેડ સ્ટ્રિંગ",
                base64url: "base64url-એન્કોડેડ સ્ટ્રિંગ",
                json_string: "JSON સ્ટ્રિંગ",
                e164: "E.164 નંબર",
                credit_card: "ક્રેડિટ કાર્ડ નંબર",
                currency_code: "ચલણ કોડ",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "ઇનપુટ"
            }, i = {
                nan: "NaN"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            return `અમાન્ય ઇનપુટ: અપેક્ષિત ${e}, પ્રાપ્ત ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `અમાન્ય ઇનપુટ: અપેક્ષિત ${h.stringifyPrimitive(A.values[0])}`;
                        return `અમાન્ય વિકલ્પ: ${h.joinValues(A.values," | ")} માધ્યમથી એક અપેક્ષિત`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `ખૂબ મોટું: ${A.origin??"મૂલ્ય"} ${t}${A.maximum.toString()} ${i.unit??"એલિમેન્ટ"} હોવા જોઈએ`;
                            return `ખૂબ મોટું: ${A.origin??"મૂલ્ય"} ${t}${A.maximum.toString()} હોવું જોઈએ`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `ખૂબ નાનું: ${A.origin} ${t}${A.minimum.toString()} ${i.unit} હોવા જોઈએ`;
                            return `ખૂબ નાનું: ${A.origin} ${t}${A.minimum.toString()} હોવું જોઈએ`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `અમાન્ય સ્ટ્રિંગ: "${A.prefix}" થી શરૂ થવું જોઈએ`;
                        if ("ends_with" === A.format) return `અમાન્ય સ્ટ્રિંગ: "${A.suffix}" પર સમાપ્ત થવું જોઈએ`;
                        if ("includes" === A.format) return `અમાન્ય સ્ટ્રિંગ: "${A.includes}" શામેલ હોવું જોઈએ`;
                        if ("regex" === A.format) return `અમાન્ય સ્ટ્રિંગ: પેટર્ન ${A.pattern} સાથે મેળ ખાવું જોઈએ`;
                        return `અમાન્ય ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `અમાન્ય નંબર: ${A.divisor} નો ગુણાંક હોવો જોઈએ`;
                    case "unrecognized_keys":
                        return `ઓળખી શકાતા નહીં તે કી${A.keys.length>1?"ઓ":""}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `${A.origin} માં અમાન્ય કી`;
                    case "invalid_union":
                        if (A.options && Array.isArray(A.options) && A.options.length > 0) {
                            let e = A.options.map(e => `'${e}'`).join(" | ");
                            return `અમાન્ય ડિસ્ક્રિમિનેટર મૂલ્ય. અપેક્ષિત ${e}`
                        }
                        return "અમાન્ય ઇનપુટ";
                    case "invalid_element":
                        return `${A.origin} માં અમાન્ય મૂલ્ય`;
                    default:
                        return "અમાન્ય ઇનપુટ"
                }
            })
        }
    }, "he", 0, function() {
        let e, t, i, A, r, a, n, o, s;
        return {
            localeError: (e = {
                string: {
                    label: "מחרוזת",
                    gender: "f"
                },
                number: {
                    label: "מספר",
                    gender: "m"
                },
                boolean: {
                    label: "ערך בוליאני",
                    gender: "m"
                },
                bigint: {
                    label: "BigInt",
                    gender: "m"
                },
                date: {
                    label: "תאריך",
                    gender: "m"
                },
                array: {
                    label: "מערך",
                    gender: "m"
                },
                object: {
                    label: "אובייקט",
                    gender: "m"
                },
                null: {
                    label: "ערך ריק (null)",
                    gender: "m"
                },
                undefined: {
                    label: "ערך לא מוגדר (undefined)",
                    gender: "m"
                },
                symbol: {
                    label: "סימבול (Symbol)",
                    gender: "m"
                },
                function: {
                    label: "פונקציה",
                    gender: "f"
                },
                map: {
                    label: "מפה (Map)",
                    gender: "f"
                },
                set: {
                    label: "קבוצה (Set)",
                    gender: "f"
                },
                file: {
                    label: "קובץ",
                    gender: "m"
                },
                promise: {
                    label: "Promise",
                    gender: "m"
                },
                NaN: {
                    label: "NaN",
                    gender: "m"
                },
                unknown: {
                    label: "ערך לא ידוע",
                    gender: "m"
                },
                value: {
                    label: "ערך",
                    gender: "m"
                }
            }, t = {
                string: {
                    unit: "תווים",
                    shortLabel: "קצר",
                    longLabel: "ארוך"
                },
                file: {
                    unit: "בייטים",
                    shortLabel: "קטן",
                    longLabel: "גדול"
                },
                array: {
                    unit: "פריטים",
                    shortLabel: "קטן",
                    longLabel: "גדול"
                },
                set: {
                    unit: "פריטים",
                    shortLabel: "קטן",
                    longLabel: "גדול"
                },
                number: {
                    unit: "",
                    shortLabel: "קטן",
                    longLabel: "גדול"
                }
            }, i = t => t ? e[t] : void 0, A = t => {
                let A = i(t);
                return A ? A.label : t ? ? e.unknown.label
            }, r = e => `ה${A(e)}`, a = e => {
                let t = i(e);
                return "f" === (t ? .gender ? ? "m") ? "צריכה להיות" : "צריך להיות"
            }, n = e => e ? t[e] ? ? null : null, o = {
                regex: {
                    label: "קלט",
                    gender: "m"
                },
                email: {
                    label: "כתובת אימייל",
                    gender: "f"
                },
                url: {
                    label: "כתובת רשת",
                    gender: "f"
                },
                emoji: {
                    label: "אימוג'י",
                    gender: "m"
                },
                uuid: {
                    label: "UUID",
                    gender: "m"
                },
                uuidv4: {
                    label: "UUIDv4",
                    gender: "m"
                },
                uuidv6: {
                    label: "UUIDv6",
                    gender: "m"
                },
                nanoid: {
                    label: "nanoid",
                    gender: "m"
                },
                guid: {
                    label: "GUID",
                    gender: "m"
                },
                cuid: {
                    label: "cuid",
                    gender: "m"
                },
                cuid2: {
                    label: "cuid2",
                    gender: "m"
                },
                ulid: {
                    label: "ULID",
                    gender: "m"
                },
                xid: {
                    label: "XID",
                    gender: "m"
                },
                ksuid: {
                    label: "KSUID",
                    gender: "m"
                },
                datetime: {
                    label: "תאריך וזמן ISO",
                    gender: "m"
                },
                date: {
                    label: "תאריך ISO",
                    gender: "m"
                },
                time: {
                    label: "זמן ISO",
                    gender: "m"
                },
                duration: {
                    label: "משך זמן ISO",
                    gender: "m"
                },
                ipv4: {
                    label: "כתובת IPv4",
                    gender: "f"
                },
                ipv6: {
                    label: "כתובת IPv6",
                    gender: "f"
                },
                mac: {
                    label: "כתובת MAC",
                    gender: "f"
                },
                cidrv4: {
                    label: "טווח IPv4",
                    gender: "m"
                },
                cidrv6: {
                    label: "טווח IPv6",
                    gender: "m"
                },
                base64: {
                    label: "מחרוזת בבסיס 64",
                    gender: "f"
                },
                base64url: {
                    label: "מחרוזת בבסיס 64 לכתובות רשת",
                    gender: "f"
                },
                json_string: {
                    label: "מחרוזת JSON",
                    gender: "f"
                },
                e164: {
                    label: "מספר E.164",
                    gender: "m"
                },
                credit_card: {
                    label: "מספר כרטיס אשראי",
                    gender: "m"
                },
                currency_code: {
                    label: "קוד מטבע",
                    gender: "m"
                },
                iban: {
                    label: "IBAN",
                    gender: "m"
                },
                jwt: {
                    label: "JWT",
                    gender: "m"
                },
                template_literal: {
                    label: "קלט",
                    gender: "m"
                },
                ends_with: {
                    label: "קלט",
                    gender: "m"
                },
                includes: {
                    label: "קלט",
                    gender: "m"
                },
                lowercase: {
                    label: "קלט",
                    gender: "m"
                },
                starts_with: {
                    label: "קלט",
                    gender: "m"
                },
                uppercase: {
                    label: "קלט",
                    gender: "m"
                }
            }, s = {
                nan: "NaN"
            }, t => {
                switch (t.code) {
                    case "invalid_type":
                        {
                            let i = t.expected,
                                r = s[i ? ? ""] ? ? A(i),
                                a = h.parsedType(t.input),
                                n = s[a] ? ? e[a] ? .label ? ? a;
                            if (/^[A-Z]/.test(t.expected)) return `קלט לא תקין: צריך להיות instanceof ${t.expected}, התקבל ${n}`;
                            return `קלט לא תקין: צריך להיות ${r}, התקבל ${n}`
                        }
                    case "invalid_value":
                        {
                            if (1 === t.values.length) return `ערך לא תקין: הערך חייב להיות ${h.stringifyPrimitive(t.values[0])}`;
                            let e = t.values.map(e => h.stringifyPrimitive(e));
                            if (2 === t.values.length) return `ערך לא תקין: האפשרויות המתאימות הן ${e[0]} או ${e[1]}`;
                            let i = e[e.length - 1],
                                A = e.slice(0, -1).join(", ");
                            return `ערך לא תקין: האפשרויות המתאימות הן ${A} או ${i}`
                        }
                    case "too_big":
                        {
                            let e = n(t.origin),
                                i = r(t.origin ? ? "value");
                            if ("string" === t.origin) return `${e?.longLabel??"ארוך"} מדי: ${i} צריכה להכיל ${t.maximum.toString()} ${e?.unit??""} ${t.inclusive?"או פחות":"לכל היותר"}`.trim();
                            if ("number" === t.origin) {
                                let e = t.inclusive ? `קטן או שווה ל-${t.maximum}` : `קטן מ-${t.maximum}`;
                                return `גדול מדי: ${i} צריך להיות ${e}`
                            }
                            if ("array" === t.origin || "set" === t.origin) {
                                let A = "set" === t.origin ? "צריכה" : "צריך",
                                    r = t.inclusive ? `${t.maximum} ${e?.unit??""} או פחות` : `פחות מ-${t.maximum} ${e?.unit??""}`;
                                return `גדול מדי: ${i} ${A} להכיל ${r}`.trim()
                            }
                            let A = t.inclusive ? "<=" : "<",
                                o = a(t.origin ? ? "value");
                            if (e ? .unit) return `${e.longLabel} מדי: ${i} ${o} ${A}${t.maximum.toString()} ${e.unit}`;
                            return `${e?.longLabel??"גדול"} מדי: ${i} ${o} ${A}${t.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let e = n(t.origin),
                                i = r(t.origin ? ? "value");
                            if ("string" === t.origin) return `${e?.shortLabel??"קצר"} מדי: ${i} צריכה להכיל ${t.minimum.toString()} ${e?.unit??""} ${t.inclusive?"או יותר":"לפחות"}`.trim();
                            if ("number" === t.origin) {
                                let e = t.inclusive ? `גדול או שווה ל-${t.minimum}` : `גדול מ-${t.minimum}`;
                                return `קטן מדי: ${i} צריך להיות ${e}`
                            }
                            if ("array" === t.origin || "set" === t.origin) {
                                let A = "set" === t.origin ? "צריכה" : "צריך";
                                if (1 === t.minimum && t.inclusive) {
                                    let e = (t.origin, "לפחות פריט אחד");
                                    return `קטן מדי: ${i} ${A} להכיל ${e}`
                                }
                                let r = t.inclusive ? `${t.minimum} ${e?.unit??""} או יותר` : `יותר מ-${t.minimum} ${e?.unit??""}`;
                                return `קטן מדי: ${i} ${A} להכיל ${r}`.trim()
                            }
                            let A = t.inclusive ? ">=" : ">",
                                o = a(t.origin ? ? "value");
                            if (e ? .unit) return `${e.shortLabel} מדי: ${i} ${o} ${A}${t.minimum.toString()} ${e.unit}`;
                            return `${e?.shortLabel??"קטן"} מדי: ${i} ${o} ${A}${t.minimum.toString()}`
                        }
                    case "invalid_format":
                        {
                            if ("starts_with" === t.format) return `המחרוזת חייבת להתחיל ב "${t.prefix}"`;
                            if ("ends_with" === t.format) return `המחרוזת חייבת להסתיים ב "${t.suffix}"`;
                            if ("includes" === t.format) return `המחרוזת חייבת לכלול "${t.includes}"`;
                            if ("regex" === t.format) return `המחרוזת חייבת להתאים לתבנית ${t.pattern}`;
                            let e = o[t.format],
                                i = e ? .label ? ? t.format,
                                A = e ? .gender ? ? "m";
                            return `${i} לא ${"f"===A?"תקינה":"תקין"}`
                        }
                    case "not_multiple_of":
                        return `מספר לא תקין: חייב להיות מכפלה של ${t.divisor}`;
                    case "unrecognized_keys":
                        return `מפתח${t.keys.length>1?"ות":""} לא מזוה${t.keys.length>1?"ים":"ה"}: ${h.joinValues(t.keys,", ")}`;
                    case "invalid_key":
                        return "שדה לא תקין באובייקט";
                    case "invalid_union":
                    default:
                        return "קלט לא תקין";
                    case "invalid_element":
                        {
                            let e = r(t.origin ? ? "array");
                            return `ערך לא תקין ב${e}`
                        }
                }
            })
        }
    }, "hi", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "अक्षर",
                    verb: "रखने के लिए"
                },
                file: {
                    unit: "बाइट्स",
                    verb: "रखने के लिए"
                },
                array: {
                    unit: "तत्व",
                    verb: "रखने के लिए"
                },
                set: {
                    unit: "तत्व",
                    verb: "रखने के लिए"
                },
                map: {
                    unit: "प्रविष्टियाँ",
                    verb: "रखने के लिए"
                }
            }, t = {
                regex: "इनपुट",
                email: "ईमेल पता",
                url: "URL",
                emoji: "इमोजी",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO तिथि और समय",
                date: "ISO तिथि",
                time: "ISO समय",
                duration: "ISO अवधि",
                ipv4: "IPv4 पता",
                ipv6: "IPv6 पता",
                mac: "MAC पता",
                cidrv4: "IPv4 श्रेणी",
                cidrv6: "IPv6 श्रेणी",
                base64: "Base64-एन्कोडेड स्ट्रिंग",
                base64url: "Base64URL-एन्कोडेड स्ट्रिंग",
                json_string: "JSON स्ट्रिंग",
                e164: "E.164 संख्या",
                credit_card: "क्रेडिट कार्ड संख्या",
                currency_code: "मुद्रा कोड",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "इनपुट"
            }, i = {
                nan: "NaN"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            return `अमान्य इनपुट: अपेक्षित ${e}, प्राप्त ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `अमान्य इनपुट: अपेक्षित ${h.stringifyPrimitive(A.values[0])}`;
                        return `अमान्य विकल्प: अपेक्षित मानों में से एक ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `बहुत बड़ा: अपेक्षित था कि ${A.origin??"मान"} में ${t}${A.maximum} ${i.unit} हों`;
                            return `बहुत बड़ा: अपेक्षित था कि ${A.origin??"मान"} ${t}${A.maximum} हो`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `बहुत छोटा: अपेक्षित था कि ${A.origin} में ${t}${A.minimum} ${i.unit} हों`;
                            return `बहुत छोटा: अपेक्षित था कि ${A.origin} ${t}${A.minimum} हो`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `अमान्य स्ट्रिंग: "${A.prefix}" से शुरू होना चाहिए`;
                        if ("ends_with" === A.format) return `अमान्य स्ट्रिंग: "${A.suffix}" पर समाप्त होना चाहिए`;
                        if ("includes" === A.format) return `अमान्य स्ट्रिंग: इसमें "${A.includes}" शामिल होना चाहिए`;
                        if ("regex" === A.format) return `अमान्य स्ट्रिंग: पैटर्न ${A.pattern} से मेल खाना चाहिए`;
                        return `अमान्य ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `अमान्य संख्या: यह ${A.divisor} का गुणज होना चाहिए`;
                    case "unrecognized_keys":
                        return `अपरिचित कुंजी${A.keys.length>1?"याँ":""}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `अमान्य कुंजी: ${A.origin} में`;
                    case "invalid_union":
                        if (A.options && Array.isArray(A.options) && A.options.length > 0) {
                            let e = A.options.map(e => `'${e}'`).join(" | ");
                            return `अमान्य डिस्क्रिमिनेटर मान: अपेक्षित ${e}`
                        }
                        return "अमान्य इनपुट";
                    case "invalid_element":
                        return `अमान्य मान: ${A.origin} में`;
                    default:
                        return "अमान्य इनपुट"
                }
            })
        }
    }, "hr", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "znakova",
                    verb: "imati"
                },
                file: {
                    unit: "bajtova",
                    verb: "imati"
                },
                array: {
                    unit: "stavki",
                    verb: "imati"
                },
                set: {
                    unit: "stavki",
                    verb: "imati"
                }
            }, t = {
                regex: "unos",
                email: "email adresa",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO datum i vrijeme",
                date: "ISO datum",
                time: "ISO vrijeme",
                duration: "ISO trajanje",
                ipv4: "IPv4 adresa",
                ipv6: "IPv6 adresa",
                mac: "MAC adresa",
                cidrv4: "IPv4 raspon",
                cidrv6: "IPv6 raspon",
                base64: "base64 kodirani tekst",
                base64url: "base64url kodirani tekst",
                json_string: "JSON tekst",
                e164: "E.164 broj",
                credit_card: "broj kreditne kartice",
                currency_code: "kod valute",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "unos"
            }, i = {
                nan: "NaN",
                string: "tekst",
                number: "broj",
                boolean: "boolean",
                array: "niz",
                object: "objekt",
                set: "skup",
                file: "datoteka",
                date: "datum",
                bigint: "bigint",
                symbol: "simbol",
                undefined: "undefined",
                null: "null",
                function: "funkcija",
                map: "mapa"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `Neispravan unos: očekuje se instanceof ${A.expected}, a primljeno je ${r}`;
                            return `Neispravan unos: očekuje se ${e}, a primljeno je ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Neispravna vrijednost: očekivano ${h.stringifyPrimitive(A.values[0])}`;
                        return `Neispravna opcija: očekivano jedno od ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                r = e[A.origin] ? ? null,
                                a = i[A.origin] ? ? A.origin;
                            if (r) return `Preveliko: očekivano da ${a??"vrijednost"} ima ${t}${A.maximum.toString()} ${r.unit??"elemenata"}`;
                            return `Preveliko: očekivano da ${a??"vrijednost"} bude ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                r = e[A.origin] ? ? null,
                                a = i[A.origin] ? ? A.origin;
                            if (r) return `Premalo: očekivano da ${a} ima ${t}${A.minimum.toString()} ${r.unit}`;
                            return `Premalo: očekivano da ${a} bude ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `Neispravan tekst: mora započinjati s "${A.prefix}"`;
                        if ("ends_with" === A.format) return `Neispravan tekst: mora završavati s "${A.suffix}"`;
                        if ("includes" === A.format) return `Neispravan tekst: mora sadržavati "${A.includes}"`;
                        if ("regex" === A.format) return `Neispravan tekst: mora odgovarati uzorku ${A.pattern}`;
                        return `Neispravna ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `Neispravan broj: mora biti višekratnik od ${A.divisor}`;
                    case "unrecognized_keys":
                        return `Neprepoznat${A.keys.length>1?"i ključevi":" ključ"}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `Neispravan ključ u ${i[A.origin]??A.origin}`;
                    case "invalid_union":
                    default:
                        return "Neispravan unos";
                    case "invalid_element":
                        return `Neispravna vrijednost u ${i[A.origin]??A.origin}`
                }
            })
        }
    }, "hu", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "karakter",
                    verb: "legyen"
                },
                file: {
                    unit: "byte",
                    verb: "legyen"
                },
                array: {
                    unit: "elem",
                    verb: "legyen"
                },
                set: {
                    unit: "elem",
                    verb: "legyen"
                },
                map: {
                    unit: "elem",
                    verb: "legyen"
                }
            }, t = {
                regex: "bemenet",
                email: "email cím",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO időbélyeg",
                date: "ISO dátum",
                time: "ISO idő",
                duration: "ISO időintervallum",
                ipv4: "IPv4 cím",
                ipv6: "IPv6 cím",
                mac: "MAC cím",
                cidrv4: "IPv4 tartomány",
                cidrv6: "IPv6 tartomány",
                base64: "base64-kódolt string",
                base64url: "base64url-kódolt string",
                json_string: "JSON string",
                e164: "E.164 szám",
                credit_card: "hitelkártyaszám",
                currency_code: "pénznemkód",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "bemenet"
            }, i = {
                nan: "NaN",
                number: "szám",
                array: "tömb"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `\xc9rv\xe9nytelen bemenet: a v\xe1rt \xe9rt\xe9k instanceof ${A.expected}, a kapott \xe9rt\xe9k ${r}`;
                            return `\xc9rv\xe9nytelen bemenet: a v\xe1rt \xe9rt\xe9k ${e}, a kapott \xe9rt\xe9k ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `\xc9rv\xe9nytelen bemenet: a v\xe1rt \xe9rt\xe9k ${h.stringifyPrimitive(A.values[0])}`;
                        return `\xc9rv\xe9nytelen opci\xf3: valamelyik \xe9rt\xe9k v\xe1rt ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `T\xfal nagy: ${A.origin??"érték"} m\xe9rete t\xfal nagy ${t}${A.maximum.toString()} ${i.unit??"elem"}`;
                            return `T\xfal nagy: a bemeneti \xe9rt\xe9k ${A.origin??"érték"} t\xfal nagy: ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `T\xfal kicsi: a bemeneti \xe9rt\xe9k ${A.origin} m\xe9rete t\xfal kicsi ${t}${A.minimum.toString()} ${i.unit}`;
                            return `T\xfal kicsi: a bemeneti \xe9rt\xe9k ${A.origin} t\xfal kicsi ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `\xc9rv\xe9nytelen string: "${A.prefix}" \xe9rt\xe9kkel kell kezdődnie`;
                        if ("ends_with" === A.format) return `\xc9rv\xe9nytelen string: "${A.suffix}" \xe9rt\xe9kkel kell v\xe9gződnie`;
                        if ("includes" === A.format) return `\xc9rv\xe9nytelen string: "${A.includes}" \xe9rt\xe9ket kell tartalmaznia`;
                        if ("regex" === A.format) return `\xc9rv\xe9nytelen string: ${A.pattern} mint\xe1nak kell megfelelnie`;
                        return `\xc9rv\xe9nytelen ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `\xc9rv\xe9nytelen sz\xe1m: ${A.divisor} t\xf6bbsz\xf6r\xf6s\xe9nek kell lennie`;
                    case "unrecognized_keys":
                        return `Ismeretlen kulcs${A.keys.length>1?"s":""}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `\xc9rv\xe9nytelen kulcs ${A.origin}`;
                    case "invalid_union":
                    default:
                        return "Érvénytelen bemenet";
                    case "invalid_element":
                        return `\xc9rv\xe9nytelen \xe9rt\xe9k: ${A.origin}`
                }
            })
        }
    }, "hy", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: {
                        one: "նշան",
                        many: "նշաններ"
                    },
                    verb: "ունենալ"
                },
                file: {
                    unit: {
                        one: "բայթ",
                        many: "բայթեր"
                    },
                    verb: "ունենալ"
                },
                array: {
                    unit: {
                        one: "տարր",
                        many: "տարրեր"
                    },
                    verb: "ունենալ"
                },
                set: {
                    unit: {
                        one: "տարր",
                        many: "տարրեր"
                    },
                    verb: "ունենալ"
                },
                map: {
                    unit: {
                        one: "տարր",
                        many: "տարրեր"
                    },
                    verb: "ունենալ"
                }
            }, t = {
                regex: "մուտք",
                email: "էլ. հասցե",
                url: "URL",
                emoji: "էմոջի",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO ամսաթիվ և ժամ",
                date: "ISO ամսաթիվ",
                time: "ISO ժամ",
                duration: "ISO տևողություն",
                ipv4: "IPv4 հասցե",
                ipv6: "IPv6 հասցե",
                mac: "MAC հասցե",
                cidrv4: "IPv4 միջակայք",
                cidrv6: "IPv6 միջակայք",
                base64: "base64 ձևաչափով տող",
                base64url: "base64url ձևաչափով տող",
                json_string: "JSON տող",
                e164: "E.164 համար",
                credit_card: "կրեդիտ քարտի համար",
                currency_code: "արժույթի կոդ",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "մուտք"
            }, i = {
                nan: "NaN",
                number: "թիվ",
                array: "զանգված"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `Սխալ մուտքագրում․ սպասվում էր instanceof ${A.expected}, ստացվել է ${r}`;
                            return `Սխալ մուտքագրում․ սպասվում էր ${e}, ստացվել է ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Սխալ մուտքագրում․ սպասվում էր ${h.stringifyPrimitive(A.values[1])}`;
                        return `Սխալ տարբերակ․ սպասվում էր հետևյալներից մեկը՝ ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) {
                                let e = T(Number(A.maximum), i.unit.one, i.unit.many);
                                return `Չափազանց մեծ արժեք․ սպասվում է, որ ${Z(A.origin??"արժեք")} կունենա ${t}${A.maximum.toString()} ${e}`
                            }
                            return `Չափազանց մեծ արժեք․ սպասվում է, որ ${Z(A.origin??"արժեք")} լինի ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) {
                                let e = T(Number(A.minimum), i.unit.one, i.unit.many);
                                return `Չափազանց փոքր արժեք․ սպասվում է, որ ${Z(A.origin)} կունենա ${t}${A.minimum.toString()} ${e}`
                            }
                            return `Չափազանց փոքր արժեք․ սպասվում է, որ ${Z(A.origin)} լինի ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `Սխալ տող․ պետք է սկսվի "${A.prefix}"-ով`;
                        if ("ends_with" === A.format) return `Սխալ տող․ պետք է ավարտվի "${A.suffix}"-ով`;
                        if ("includes" === A.format) return `Սխալ տող․ պետք է պարունակի "${A.includes}"`;
                        if ("regex" === A.format) return `Սխալ տող․ պետք է համապատասխանի ${A.pattern} ձևաչափին`;
                        return `Սխալ ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `Սխալ թիվ․ պետք է բազմապատիկ լինի ${A.divisor}-ի`;
                    case "unrecognized_keys":
                        return `Չճանաչված բանալի${A.keys.length>1?"ներ":""}. ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `Սխալ բանալի ${Z(A.origin)}-ում`;
                    case "invalid_union":
                    default:
                        return "Սխալ մուտքագրում";
                    case "invalid_element":
                        return `Սխալ արժեք ${Z(A.origin)}-ում`
                }
            })
        }
    }, "id", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "karakter",
                    verb: "memiliki"
                },
                file: {
                    unit: "byte",
                    verb: "memiliki"
                },
                array: {
                    unit: "item",
                    verb: "memiliki"
                },
                set: {
                    unit: "item",
                    verb: "memiliki"
                },
                map: {
                    unit: "item",
                    verb: "memiliki"
                }
            }, t = {
                regex: "input",
                email: "alamat email",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "tanggal dan waktu format ISO",
                date: "tanggal format ISO",
                time: "jam format ISO",
                duration: "durasi format ISO",
                ipv4: "alamat IPv4",
                ipv6: "alamat IPv6",
                mac: "alamat MAC",
                cidrv4: "rentang alamat IPv4",
                cidrv6: "rentang alamat IPv6",
                base64: "string dengan enkode base64",
                base64url: "string dengan enkode base64url",
                json_string: "string JSON",
                e164: "angka E.164",
                credit_card: "nomor kartu kredit",
                currency_code: "kode mata uang",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "input"
            }, i = {
                nan: "NaN"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `Input tidak valid: diharapkan instanceof ${A.expected}, diterima ${r}`;
                            return `Input tidak valid: diharapkan ${e}, diterima ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Input tidak valid: diharapkan ${h.stringifyPrimitive(A.values[0])}`;
                        return `Pilihan tidak valid: diharapkan salah satu dari ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `Terlalu besar: diharapkan ${A.origin??"value"} memiliki ${t}${A.maximum.toString()} ${i.unit??"elemen"}`;
                            return `Terlalu besar: diharapkan ${A.origin??"value"} menjadi ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `Terlalu kecil: diharapkan ${A.origin} memiliki ${t}${A.minimum.toString()} ${i.unit}`;
                            return `Terlalu kecil: diharapkan ${A.origin} menjadi ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `String tidak valid: harus dimulai dengan "${A.prefix}"`;
                        if ("ends_with" === A.format) return `String tidak valid: harus berakhir dengan "${A.suffix}"`;
                        if ("includes" === A.format) return `String tidak valid: harus menyertakan "${A.includes}"`;
                        if ("regex" === A.format) return `String tidak valid: harus sesuai pola ${A.pattern}`;
                        return `${t[A.format]??A.format} tidak valid`;
                    case "not_multiple_of":
                        return `Angka tidak valid: harus kelipatan dari ${A.divisor}`;
                    case "unrecognized_keys":
                        return `Kunci tidak dikenali ${A.keys.length>1?"s":""}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `Kunci tidak valid di ${A.origin}`;
                    case "invalid_union":
                    default:
                        return "Input tidak valid";
                    case "invalid_element":
                        return `Nilai tidak valid di ${A.origin}`
                }
            })
        }
    }, "is", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "stafi",
                    verb: "að hafa"
                },
                file: {
                    unit: "bæti",
                    verb: "að hafa"
                },
                array: {
                    unit: "hluti",
                    verb: "að hafa"
                },
                set: {
                    unit: "hluti",
                    verb: "að hafa"
                },
                map: {
                    unit: "hluti",
                    verb: "að hafa"
                }
            }, t = {
                regex: "gildi",
                email: "netfang",
                url: "vefslóð",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO dagsetning og tími",
                date: "ISO dagsetning",
                time: "ISO tími",
                duration: "ISO tímalengd",
                ipv4: "IPv4 address",
                ipv6: "IPv6 address",
                mac: "MAC address",
                cidrv4: "IPv4 range",
                cidrv6: "IPv6 range",
                base64: "base64-encoded strengur",
                base64url: "base64url-encoded strengur",
                json_string: "JSON strengur",
                e164: "E.164 tölugildi",
                credit_card: "kreditkortanúmer",
                currency_code: "gjaldmiðilskóði",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "gildi"
            }, i = {
                nan: "NaN",
                number: "númer",
                array: "fylki"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `Rangt gildi: \xde\xfa sl\xf3st inn ${r} \xfear sem \xe1 a\xf0 vera instanceof ${A.expected}`;
                            return `Rangt gildi: \xde\xfa sl\xf3st inn ${r} \xfear sem \xe1 a\xf0 vera ${e}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Rangt gildi: gert r\xe1\xf0 fyrir ${h.stringifyPrimitive(A.values[0])}`;
                        return `\xd3gilt val: m\xe1 vera eitt af eftirfarandi ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `Of st\xf3rt: gert er r\xe1\xf0 fyrir a\xf0 ${A.origin??"gildi"} hafi ${t}${A.maximum.toString()} ${i.unit??"hluti"}`;
                            return `Of st\xf3rt: gert er r\xe1\xf0 fyrir a\xf0 ${A.origin??"gildi"} s\xe9 ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `Of l\xedti\xf0: gert er r\xe1\xf0 fyrir a\xf0 ${A.origin} hafi ${t}${A.minimum.toString()} ${i.unit}`;
                            return `Of l\xedti\xf0: gert er r\xe1\xf0 fyrir a\xf0 ${A.origin} s\xe9 ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `\xd3gildur strengur: ver\xf0ur a\xf0 byrja \xe1 "${A.prefix}"`;
                        if ("ends_with" === A.format) return `\xd3gildur strengur: ver\xf0ur a\xf0 enda \xe1 "${A.suffix}"`;
                        if ("includes" === A.format) return `\xd3gildur strengur: ver\xf0ur a\xf0 innihalda "${A.includes}"`;
                        if ("regex" === A.format) return `\xd3gildur strengur: ver\xf0ur a\xf0 fylgja mynstri ${A.pattern}`;
                        return `Rangt ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `R\xf6ng tala: ver\xf0ur a\xf0 vera margfeldi af ${A.divisor}`;
                    case "unrecognized_keys":
                        return `\xd3\xfeekkt ${A.keys.length>1?"ir lyklar":"ur lykill"}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `Rangur lykill \xed ${A.origin}`;
                    case "invalid_union":
                    default:
                        return "Rangt gildi";
                    case "invalid_element":
                        return `Rangt gildi \xed ${A.origin}`
                }
            })
        }
    }, "it", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "caratteri",
                    verb: "avere"
                },
                file: {
                    unit: "byte",
                    verb: "avere"
                },
                array: {
                    unit: "elementi",
                    verb: "avere"
                },
                set: {
                    unit: "elementi",
                    verb: "avere"
                },
                map: {
                    unit: "elementi",
                    verb: "avere"
                }
            }, t = {
                regex: "input",
                email: "indirizzo email",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "data e ora ISO",
                date: "data ISO",
                time: "ora ISO",
                duration: "durata ISO",
                ipv4: "indirizzo IPv4",
                ipv6: "indirizzo IPv6",
                mac: "indirizzo MAC",
                cidrv4: "intervallo IPv4",
                cidrv6: "intervallo IPv6",
                base64: "stringa codificata in base64",
                base64url: "URL codificata in base64",
                json_string: "stringa JSON",
                e164: "numero E.164",
                credit_card: "numero di carta di credito",
                currency_code: "codice valuta",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "input"
            }, i = {
                nan: "NaN",
                number: "numero",
                array: "vettore"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `Input non valido: atteso instanceof ${A.expected}, ricevuto ${r}`;
                            return `Input non valido: atteso ${e}, ricevuto ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Input non valido: atteso ${h.stringifyPrimitive(A.values[0])}`;
                        return `Opzione non valida: atteso uno tra ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `Troppo grande: ${A.origin??"valore"} deve avere ${t}${A.maximum.toString()} ${i.unit??"elementi"}`;
                            return `Troppo grande: ${A.origin??"valore"} deve essere ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `Troppo piccolo: ${A.origin} deve avere ${t}${A.minimum.toString()} ${i.unit}`;
                            return `Troppo piccolo: ${A.origin} deve essere ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `Stringa non valida: deve iniziare con "${A.prefix}"`;
                        if ("ends_with" === A.format) return `Stringa non valida: deve terminare con "${A.suffix}"`;
                        if ("includes" === A.format) return `Stringa non valida: deve includere "${A.includes}"`;
                        if ("regex" === A.format) return `Stringa non valida: deve corrispondere al pattern ${A.pattern}`;
                        return `Input non valido: ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `Numero non valido: deve essere un multiplo di ${A.divisor}`;
                    case "unrecognized_keys":
                        return `Chiav${A.keys.length>1?"i":"e"} non riconosciut${A.keys.length>1?"e":"a"}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `Chiave non valida in ${A.origin}`;
                    case "invalid_union":
                    default:
                        return "Input non valido";
                    case "invalid_element":
                        return `Valore non valido in ${A.origin}`
                }
            })
        }
    }, "ja", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "文字",
                    verb: "である"
                },
                file: {
                    unit: "バイト",
                    verb: "である"
                },
                array: {
                    unit: "要素",
                    verb: "である"
                },
                set: {
                    unit: "要素",
                    verb: "である"
                },
                map: {
                    unit: "要素",
                    verb: "である"
                }
            }, t = {
                regex: "入力値",
                email: "メールアドレス",
                url: "URL",
                emoji: "絵文字",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO日時",
                date: "ISO日付",
                time: "ISO時刻",
                duration: "ISO期間",
                ipv4: "IPv4アドレス",
                ipv6: "IPv6アドレス",
                mac: "MACアドレス",
                cidrv4: "IPv4範囲",
                cidrv6: "IPv6範囲",
                base64: "base64エンコード文字列",
                base64url: "base64urlエンコード文字列",
                json_string: "JSON文字列",
                e164: "E.164番号",
                credit_card: "クレジットカード番号",
                currency_code: "通貨コード",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "入力値"
            }, i = {
                nan: "NaN",
                number: "数値",
                array: "配列"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `無効な入力: instanceof ${A.expected}が期待されましたが、${r}が入力されました`;
                            return `無効な入力: ${e}が期待されましたが、${r}が入力されました`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `無効な入力: ${h.stringifyPrimitive(A.values[0])}が期待されました`;
                        return `無効な選択: ${h.joinValues(A.values,"、")}のいずれかである必要があります`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "以下である" : "より小さい",
                                i = e[A.origin] ? ? null;
                            if (i) return `大きすぎる値: ${A.origin??"値"}は${A.maximum.toString()}${i.unit??"要素"}${t}必要があります`;
                            return `大きすぎる値: ${A.origin??"値"}は${A.maximum.toString()}${t}必要があります`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? "以上である" : "より大きい",
                                i = e[A.origin] ? ? null;
                            if (i) return `小さすぎる値: ${A.origin}は${A.minimum.toString()}${i.unit}${t}必要があります`;
                            return `小さすぎる値: ${A.origin}は${A.minimum.toString()}${t}必要があります`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `無効な文字列: "${A.prefix}"で始まる必要があります`;
                        if ("ends_with" === A.format) return `無効な文字列: "${A.suffix}"で終わる必要があります`;
                        if ("includes" === A.format) return `無効な文字列: "${A.includes}"を含む必要があります`;
                        if ("regex" === A.format) return `無効な文字列: パターン${A.pattern}に一致する必要があります`;
                        return `無効な${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `無効な数値: ${A.divisor}の倍数である必要があります`;
                    case "unrecognized_keys":
                        return `認識されていないキー${A.keys.length>1?"群":""}: ${h.joinValues(A.keys,"、")}`;
                    case "invalid_key":
                        return `${A.origin}内の無効なキー`;
                    case "invalid_union":
                    default:
                        return "無効な入力";
                    case "invalid_element":
                        return `${A.origin}内の無効な値`
                }
            })
        }
    }, "ka", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "სიმბოლო",
                    verb: "უნდა შეიცავდეს"
                },
                file: {
                    unit: "ბაიტი",
                    verb: "უნდა შეიცავდეს"
                },
                array: {
                    unit: "ელემენტი",
                    verb: "უნდა შეიცავდეს"
                },
                set: {
                    unit: "ელემენტი",
                    verb: "უნდა შეიცავდეს"
                },
                map: {
                    unit: "ელემენტი",
                    verb: "უნდა შეიცავდეს"
                }
            }, t = {
                regex: "შეყვანა",
                email: "ელ-ფოსტის მისამართი",
                url: "URL",
                emoji: "ემოჯი",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "თარიღი-დრო",
                date: "თარიღი",
                time: "დრო",
                duration: "ხანგრძლივობა",
                ipv4: "IPv4 მისამართი",
                ipv6: "IPv6 მისამართი",
                mac: "MAC მისამართი",
                cidrv4: "IPv4 დიაპაზონი",
                cidrv6: "IPv6 დიაპაზონი",
                base64: "base64-კოდირებული ველი",
                base64url: "base64url-კოდირებული ველი",
                json_string: "JSON ველი",
                e164: "E.164 ნომერი",
                credit_card: "საკრედიტო ბარათის ნომერი",
                currency_code: "ვალუტის კოდი",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "შეყვანა"
            }, i = {
                nan: "NaN",
                number: "რიცხვი",
                string: "ველი",
                boolean: "ბულეანი",
                function: "ფუნქცია",
                array: "მასივი"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `არასწორი შეყვანა: მოსალოდნელი instanceof ${A.expected}, მიღებული ${r}`;
                            return `არასწორი შეყვანა: მოსალოდნელი ${e}, მიღებული ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `არასწორი შეყვანა: მოსალოდნელი ${h.stringifyPrimitive(A.values[0])}`;
                        return `არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი ${h.joinValues(A.values,"|")}-დან`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `ზედმეტად დიდი: მოსალოდნელი ${A.origin??"მნიშვნელობა"} ${i.verb} ${t}${A.maximum.toString()} ${i.unit}`;
                            return `ზედმეტად დიდი: მოსალოდნელი ${A.origin??"მნიშვნელობა"} იყოს ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `ზედმეტად პატარა: მოსალოდნელი ${A.origin} ${i.verb} ${t}${A.minimum.toString()} ${i.unit}`;
                            return `ზედმეტად პატარა: მოსალოდნელი ${A.origin} იყოს ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `არასწორი ველი: უნდა იწყებოდეს "${A.prefix}"-ით`;
                        if ("ends_with" === A.format) return `არასწორი ველი: უნდა მთავრდებოდეს "${A.suffix}"-ით`;
                        if ("includes" === A.format) return `არასწორი ველი: უნდა შეიცავდეს "${A.includes}"-ს`;
                        if ("regex" === A.format) return `არასწორი ველი: უნდა შეესაბამებოდეს შაბლონს ${A.pattern}`;
                        return `არასწორი ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `არასწორი რიცხვი: უნდა იყოს ${A.divisor}-ის ჯერადი`;
                    case "unrecognized_keys":
                        return `უცნობი გასაღებ${A.keys.length>1?"ები":"ი"}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `არასწორი გასაღები ${A.origin}-ში`;
                    case "invalid_union":
                    default:
                        return "არასწორი შეყვანა";
                    case "invalid_element":
                        return `არასწორი მნიშვნელობა ${A.origin}-ში`
                }
            })
        }
    }, "kh", 0, function() {
        return L()
    }, "km", 0, L, "kn", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "ಅಕ್ಷರಗಳು",
                    verb: "ಹೊಂದಲು"
                },
                file: {
                    unit: "ಬೈಟ್‌ಗಳು",
                    verb: "ಹೊಂದಲು"
                },
                array: {
                    unit: "ವಸ್ತುಗಳು",
                    verb: "ಹೊಂದಲು"
                },
                set: {
                    unit: "ವಸ್ತುಗಳು",
                    verb: "ಹೊಂದಲು"
                },
                map: {
                    unit: "entries",
                    verb: "ಹೊಂದಲು"
                }
            }, t = {
                regex: "ಇನ್ಪುಟ್",
                email: "email ವಿಳಾಸ",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO ದಿನಾಂಕದ ಸಮಯ",
                date: "ISO ದಿನಾಂಕ",
                time: "ISO ಸಮಯ",
                duration: "ISO ಅವಧಿ",
                ipv4: "IPv4 ವಿಳಾಸ",
                ipv6: "IPv6 ವಿಳಾಸ",
                mac: "MAC ವಿಳಾಸ",
                cidrv4: "IPv4 ವ್ಯಾಪ್ತಿಯ",
                cidrv6: "IPv6 ವ್ಯಾಪ್ತಿಯ",
                base64: "base64-encodedಸ್ಟ್ರಿಂಗ್",
                base64url: "base64url-encodedಸ್ಟ್ರಿಂಗ್",
                json_string: "JSONಸ್ಟ್ರಿಂಗ್",
                e164: "E.164 ಸಂಖ್ಯೆ",
                credit_card: "ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ಸಂಖ್ಯೆ",
                currency_code: "ಕರೆನ್ಸಿ ಕೋಡ್",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "ಇನ್ಪುಟ್"
            }, i = {
                nan: "NaN"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            return `ಅಮಾನ್ಯ ಇನ್‌ಪುಟ್: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${e}, ಸ್ವೀಕರಿಸಿದನು ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `ಅಮಾನ್ಯ ಇನ್‌ಪುಟ್: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${h.stringifyPrimitive(A.values[0])}`;
                        return `ಅಮಾನ್ಯ ಆಯ್ಕೆ: ಇವುಗಳಲ್ಲಿ ಒಂದನ್ನು ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `ತುಂಬಾ ದೊಡ್ಡದು: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${A.origin??"value"} ಹೊಂದಲು ${t}${A.maximum.toString()} ${i.unit??"ಅಂಶಗಳು"}`;
                            return `ತುಂಬಾ ದೊಡ್ಡದು: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${A.origin??"value"} ಎಂದು ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `ತುಂಬಾ ಚಿಕ್ಕದು: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${A.origin} ಹೊಂದಲು ${t}${A.minimum.toString()} ${i.unit}`;
                            return `ತುಂಬಾ ಚಿಕ್ಕದು: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${A.origin} ಎಂದು ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `ಅಮಾನ್ಯವಾದ ಸ್ಟ್ರಿಂಗ್: ಇದರೊಂದಿಗೆ ಪ್ರಾರಂಭಿಸಬೇಕು "${A.prefix}"`;
                        if ("ends_with" === A.format) return `ಅಮಾನ್ಯವಾದ ಸ್ಟ್ರಿಂಗ್: ಇದರೊಂದಿಗೆ ಕೊನೆಗೊಳ್ಳಬೇಕು "${A.suffix}"`;
                        if ("includes" === A.format) return `ಅಮಾನ್ಯ ಸ್ಟ್ರಿಂಗ್: ಒಳಗೊಂಡಿರಬೇಕು "${A.includes}"`;
                        if ("regex" === A.format) return `ಅಮಾನ್ಯವಾದ ಸ್ಟ್ರಿಂಗ್: ಮಾದರಿಗೆ ಹೊಂದಿಕೆಯಾಗಬೇಕು ${A.pattern}`;
                        return `ಅಮಾನ್ಯ ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `ಅಮಾನ್ಯ ಸಂಖ್ಯೆ: ಬಹುಸಂಖ್ಯೆಯಾಗಿರಬೇಕು ${A.divisor}`;
                    case "unrecognized_keys":
                        return `ಗುರುತಿಸಲಾಗದ ಕೀ ${A.keys.length>1?"s":""}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `ಅಮಾನ್ಯವಾದ ಕೀ ಇನ್ ${A.origin}`;
                    case "invalid_union":
                        if (A.options && Array.isArray(A.options) && A.options.length > 0) {
                            let e = A.options.map(e => `'${e}'`).join(" | ");
                            return `ಅಮಾನ್ಯ ತಾರತಮ್ಯ ಮೌಲ್ಯ. ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${e}`
                        }
                        return "ಅಮಾನ್ಯ ಇನ್‌ಪುಟ್";
                    case "invalid_element":
                        return `ರಲ್ಲಿ ಅಮಾನ್ಯ ಮೌಲ್ಯ ${A.origin}`;
                    default:
                        return "ಅಮಾನ್ಯ ಇನ್‌ಪುಟ್"
                }
            })
        }
    }, "ko", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "문자",
                    verb: "to have"
                },
                file: {
                    unit: "바이트",
                    verb: "to have"
                },
                array: {
                    unit: "개",
                    verb: "to have"
                },
                set: {
                    unit: "개",
                    verb: "to have"
                },
                map: {
                    unit: "개",
                    verb: "to have"
                }
            }, t = {
                regex: "입력",
                email: "이메일 주소",
                url: "URL",
                emoji: "이모지",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO 날짜시간",
                date: "ISO 날짜",
                time: "ISO 시간",
                duration: "ISO 기간",
                ipv4: "IPv4 주소",
                ipv6: "IPv6 주소",
                mac: "MAC 주소",
                cidrv4: "IPv4 범위",
                cidrv6: "IPv6 범위",
                base64: "base64 인코딩 문자열",
                base64url: "base64url 인코딩 문자열",
                json_string: "JSON 문자열",
                e164: "E.164 번호",
                credit_card: "신용카드 번호",
                currency_code: "통화 코드",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "입력"
            }, i = {
                nan: "NaN"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `잘못된 입력: 예상 타입은 instanceof ${A.expected}, 받은 타입은 ${r}입니다`;
                            return `잘못된 입력: 예상 타입은 ${e}, 받은 타입은 ${r}입니다`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `잘못된 입력: 값은 ${h.stringifyPrimitive(A.values[0])} 이어야 합니다`;
                        return `잘못된 옵션: ${h.joinValues(A.values,"또는 ")} 중 하나여야 합니다`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "이하" : "미만",
                                i = "미만" === t ? "이어야 합니다" : "여야 합니다",
                                r = e[A.origin] ? ? null,
                                a = r ? .unit ? ? "요소";
                            if (r) return `${A.origin??"값"}이 너무 큽니다: ${A.maximum.toString()}${a} ${t}${i}`;
                            return `${A.origin??"값"}이 너무 큽니다: ${A.maximum.toString()} ${t}${i}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? "이상" : "초과",
                                i = "이상" === t ? "이어야 합니다" : "여야 합니다",
                                r = e[A.origin] ? ? null,
                                a = r ? .unit ? ? "요소";
                            if (r) return `${A.origin??"값"}이 너무 작습니다: ${A.minimum.toString()}${a} ${t}${i}`;
                            return `${A.origin??"값"}이 너무 작습니다: ${A.minimum.toString()} ${t}${i}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `잘못된 문자열: "${A.prefix}"(으)로 시작해야 합니다`;
                        if ("ends_with" === A.format) return `잘못된 문자열: "${A.suffix}"(으)로 끝나야 합니다`;
                        if ("includes" === A.format) return `잘못된 문자열: "${A.includes}"을(를) 포함해야 합니다`;
                        if ("regex" === A.format) return `잘못된 문자열: 정규식 ${A.pattern} 패턴과 일치해야 합니다`;
                        return `잘못된 ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `잘못된 숫자: ${A.divisor}의 배수여야 합니다`;
                    case "unrecognized_keys":
                        return `인식할 수 없는 키: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `잘못된 키: ${A.origin}`;
                    case "invalid_union":
                    default:
                        return "잘못된 입력";
                    case "invalid_element":
                        return `잘못된 값: ${A.origin}`
                }
            })
        }
    }, "lt", 0, function() {
        return {
            localeError: (() => {
                let e = {
                    string: {
                        unit: {
                            one: "simbolis",
                            few: "simboliai",
                            many: "simbolių"
                        },
                        verb: {
                            smaller: {
                                inclusive: "turi būti ne ilgesnė kaip",
                                notInclusive: "turi būti trumpesnė kaip"
                            },
                            bigger: {
                                inclusive: "turi būti ne trumpesnė kaip",
                                notInclusive: "turi būti ilgesnė kaip"
                            }
                        }
                    },
                    file: {
                        unit: {
                            one: "baitas",
                            few: "baitai",
                            many: "baitų"
                        },
                        verb: {
                            smaller: {
                                inclusive: "turi būti ne didesnis kaip",
                                notInclusive: "turi būti mažesnis kaip"
                            },
                            bigger: {
                                inclusive: "turi būti ne mažesnis kaip",
                                notInclusive: "turi būti didesnis kaip"
                            }
                        }
                    },
                    array: {
                        unit: {
                            one: "elementą",
                            few: "elementus",
                            many: "elementų"
                        },
                        verb: {
                            smaller: {
                                inclusive: "turi turėti ne daugiau kaip",
                                notInclusive: "turi turėti mažiau kaip"
                            },
                            bigger: {
                                inclusive: "turi turėti ne mažiau kaip",
                                notInclusive: "turi turėti daugiau kaip"
                            }
                        }
                    },
                    set: {
                        unit: {
                            one: "elementą",
                            few: "elementus",
                            many: "elementų"
                        },
                        verb: {
                            smaller: {
                                inclusive: "turi turėti ne daugiau kaip",
                                notInclusive: "turi turėti mažiau kaip"
                            },
                            bigger: {
                                inclusive: "turi turėti ne mažiau kaip",
                                notInclusive: "turi turėti daugiau kaip"
                            }
                        }
                    }
                };

                function t(t, i, A, r) {
                    let a = e[t] ? ? null;
                    return null === a ? a : {
                        unit: a.unit[i],
                        verb: a.verb[r][A ? "inclusive" : "notInclusive"]
                    }
                }
                let i = {
                        regex: "įvestis",
                        email: "el. pašto adresas",
                        url: "URL",
                        emoji: "jaustukas",
                        uuid: "UUID",
                        uuidv4: "UUIDv4",
                        uuidv6: "UUIDv6",
                        nanoid: "nanoid",
                        guid: "GUID",
                        cuid: "cuid",
                        cuid2: "cuid2",
                        ulid: "ULID",
                        xid: "XID",
                        ksuid: "KSUID",
                        datetime: "ISO data ir laikas",
                        date: "ISO data",
                        time: "ISO laikas",
                        duration: "ISO trukmė",
                        ipv4: "IPv4 adresas",
                        ipv6: "IPv6 adresas",
                        mac: "MAC adresas",
                        cidrv4: "IPv4 tinklo prefiksas (CIDR)",
                        cidrv6: "IPv6 tinklo prefiksas (CIDR)",
                        base64: "base64 užkoduota eilutė",
                        base64url: "base64url užkoduota eilutė",
                        json_string: "JSON eilutė",
                        e164: "E.164 numeris",
                        credit_card: "kredito kortelės numeris",
                        currency_code: "valiutos kodas",
                        iban: "IBAN",
                        jwt: "JWT",
                        template_literal: "įvestis"
                    },
                    A = {
                        nan: "NaN",
                        number: "skaičius",
                        bigint: "sveikasis skaičius",
                        string: "eilutė",
                        boolean: "loginė reikšmė",
                        undefined: "neapibrėžta reikšmė",
                        function: "funkcija",
                        symbol: "simbolis",
                        array: "masyvas",
                        object: "objektas",
                        null: "nulinė reikšmė"
                    };
                return e => {
                    switch (e.code) {
                        case "invalid_type":
                            {
                                let t = A[e.expected] ? ? e.expected,
                                    i = h.parsedType(e.input),
                                    r = A[i] ? ? i;
                                if (/^[A-Z]/.test(e.expected)) return `Gautas tipas ${r}, o tikėtasi - instanceof ${e.expected}`;
                                return `Gautas tipas ${r}, o tikėtasi - ${t}`
                            }
                        case "invalid_value":
                            if (1 === e.values.length) return `Privalo būti ${h.stringifyPrimitive(e.values[0])}`;
                            return `Privalo būti vienas iš ${h.joinValues(e.values,"|")} pasirinkimų`;
                        case "too_big":
                            {
                                let i = A[e.origin] ? ? e.origin,
                                    r = t(e.origin, z(Number(e.maximum)), e.inclusive ? ? !1, "smaller");
                                if (r ? .verb) return `${Q(i??e.origin??"reikšmė")} ${r.verb} ${e.maximum.toString()} ${r.unit??"elementų"}`;
                                let a = e.inclusive ? "ne didesnis kaip" : "mažesnis kaip";
                                return `${Q(i??e.origin??"reikšmė")} turi būti ${a} ${e.maximum.toString()} ${r?.unit}`
                            }
                        case "too_small":
                            {
                                let i = A[e.origin] ? ? e.origin,
                                    r = t(e.origin, z(Number(e.minimum)), e.inclusive ? ? !1, "bigger");
                                if (r ? .verb) return `${Q(i??e.origin??"reikšmė")} ${r.verb} ${e.minimum.toString()} ${r.unit??"elementų"}`;
                                let a = e.inclusive ? "ne mažesnis kaip" : "didesnis kaip";
                                return `${Q(i??e.origin??"reikšmė")} turi būti ${a} ${e.minimum.toString()} ${r?.unit}`
                            }
                        case "invalid_format":
                            if ("starts_with" === e.format) return `Eilutė privalo prasidėti "${e.prefix}"`;
                            if ("ends_with" === e.format) return `Eilutė privalo pasibaigti "${e.suffix}"`;
                            if ("includes" === e.format) return `Eilutė privalo įtraukti "${e.includes}"`;
                            if ("regex" === e.format) return `Eilutė privalo atitikti ${e.pattern}`;
                            return `Neteisingas ${i[e.format]??e.format}`;
                        case "not_multiple_of":
                            return `Skaičius privalo būti ${e.divisor} kartotinis.`;
                        case "unrecognized_keys":
                            return `Neatpažint${e.keys.length>1?"i":"as"} rakt${e.keys.length>1?"ai":"as"}: ${h.joinValues(e.keys,", ")}`;
                        case "invalid_key":
                            return "Rastas klaidingas raktas";
                        case "invalid_union":
                        default:
                            return "Klaidinga įvestis";
                        case "invalid_element":
                            {
                                let t = A[e.origin] ? ? e.origin;
                                return `${Q(t??e.origin??"reikšmė")} turi klaidingą įvestį`
                            }
                    }
                }
            })()
        }
    }, "mk", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "знаци",
                    verb: "да имаат"
                },
                file: {
                    unit: "бајти",
                    verb: "да имаат"
                },
                array: {
                    unit: "ставки",
                    verb: "да имаат"
                },
                set: {
                    unit: "ставки",
                    verb: "да имаат"
                },
                map: {
                    unit: "ставки",
                    verb: "да имаат"
                }
            }, t = {
                regex: "внес",
                email: "адреса на е-пошта",
                url: "URL",
                emoji: "емоџи",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO датум и време",
                date: "ISO датум",
                time: "ISO време",
                duration: "ISO времетраење",
                ipv4: "IPv4 адреса",
                ipv6: "IPv6 адреса",
                mac: "MAC адреса",
                cidrv4: "IPv4 опсег",
                cidrv6: "IPv6 опсег",
                base64: "base64-енкодирана низа",
                base64url: "base64url-енкодирана низа",
                json_string: "JSON низа",
                e164: "E.164 број",
                credit_card: "број на кредитна картичка",
                currency_code: "код на валута",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "внес"
            }, i = {
                nan: "NaN",
                number: "број",
                array: "низа"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `Грешен внес: се очекува instanceof ${A.expected}, примено ${r}`;
                            return `Грешен внес: се очекува ${e}, примено ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Invalid input: expected ${h.stringifyPrimitive(A.values[0])}`;
                        return `Грешана опција: се очекува една ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `Премногу голем: се очекува ${A.origin??"вредноста"} да има ${t}${A.maximum.toString()} ${i.unit??"елементи"}`;
                            return `Премногу голем: се очекува ${A.origin??"вредноста"} да биде ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `Премногу мал: се очекува ${A.origin} да има ${t}${A.minimum.toString()} ${i.unit}`;
                            return `Премногу мал: се очекува ${A.origin} да биде ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `Неважечка низа: мора да започнува со "${A.prefix}"`;
                        if ("ends_with" === A.format) return `Неважечка низа: мора да завршува со "${A.suffix}"`;
                        if ("includes" === A.format) return `Неважечка низа: мора да вклучува "${A.includes}"`;
                        if ("regex" === A.format) return `Неважечка низа: мора да одгоара на патернот ${A.pattern}`;
                        return `Invalid ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `Грешен број: мора да биде делив со ${A.divisor}`;
                    case "unrecognized_keys":
                        return `${A.keys.length>1?"Непрепознаени клучеви":"Непрепознаен клуч"}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `Грешен клуч во ${A.origin}`;
                    case "invalid_union":
                    default:
                        return "Грешен внес";
                    case "invalid_element":
                        return `Грешна вредност во ${A.origin}`
                }
            })
        }
    }, "ms", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "aksara",
                    verb: "mempunyai"
                },
                file: {
                    unit: "bait",
                    verb: "mempunyai"
                },
                array: {
                    unit: "elemen",
                    verb: "mempunyai"
                },
                set: {
                    unit: "elemen",
                    verb: "mempunyai"
                },
                map: {
                    unit: "elemen",
                    verb: "mempunyai"
                }
            }, t = {
                regex: "input",
                email: "alamat e-mel",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "tarikh masa ISO",
                date: "tarikh ISO",
                time: "masa ISO",
                duration: "tempoh ISO",
                ipv4: "alamat IPv4",
                ipv6: "alamat IPv6",
                mac: "alamat MAC",
                cidrv4: "julat IPv4",
                cidrv6: "julat IPv6",
                base64: "string dikodkan base64",
                base64url: "string dikodkan base64url",
                json_string: "string JSON",
                e164: "nombor E.164",
                credit_card: "nombor kad kredit",
                currency_code: "kod mata wang",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "input"
            }, i = {
                nan: "NaN",
                number: "nombor"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `Input tidak sah: dijangka instanceof ${A.expected}, diterima ${r}`;
                            return `Input tidak sah: dijangka ${e}, diterima ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Input tidak sah: dijangka ${h.stringifyPrimitive(A.values[0])}`;
                        return `Pilihan tidak sah: dijangka salah satu daripada ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `Terlalu besar: dijangka ${A.origin??"nilai"} ${i.verb} ${t}${A.maximum.toString()} ${i.unit??"elemen"}`;
                            return `Terlalu besar: dijangka ${A.origin??"nilai"} adalah ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `Terlalu kecil: dijangka ${A.origin} ${i.verb} ${t}${A.minimum.toString()} ${i.unit}`;
                            return `Terlalu kecil: dijangka ${A.origin} adalah ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `String tidak sah: mesti bermula dengan "${A.prefix}"`;
                        if ("ends_with" === A.format) return `String tidak sah: mesti berakhir dengan "${A.suffix}"`;
                        if ("includes" === A.format) return `String tidak sah: mesti mengandungi "${A.includes}"`;
                        if ("regex" === A.format) return `String tidak sah: mesti sepadan dengan corak ${A.pattern}`;
                        return `${t[A.format]??A.format} tidak sah`;
                    case "not_multiple_of":
                        return `Nombor tidak sah: perlu gandaan ${A.divisor}`;
                    case "unrecognized_keys":
                        return `Kunci tidak dikenali: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `Kunci tidak sah dalam ${A.origin}`;
                    case "invalid_union":
                    default:
                        return "Input tidak sah";
                    case "invalid_element":
                        return `Nilai tidak sah dalam ${A.origin}`
                }
            })
        }
    }, "ne", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "अक्षर",
                    verb: "हुनुपर्छ"
                },
                file: {
                    unit: "बाइट",
                    verb: "हुनुपर्छ"
                },
                array: {
                    unit: "तत्व",
                    verb: "हुनुपर्छ"
                },
                set: {
                    unit: "तत्व",
                    verb: "हुनुपर्छ"
                },
                map: {
                    unit: "प्रविष्टि",
                    verb: "हुनुपर्छ"
                }
            }, t = {
                regex: "इनपुट",
                email: "इमेल ठेगाना",
                url: "URL",
                emoji: "इमोजी",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO मिति र समय",
                date: "ISO मिति",
                time: "ISO समय",
                duration: "ISO अवधि",
                ipv4: "IPv4 ठेगाना",
                ipv6: "IPv6 ठेगाना",
                mac: "MAC ठेगाना",
                cidrv4: "IPv4 दायरा",
                cidrv6: "IPv6 दायरा",
                base64: "base64-इन्कोड गरिएको स्ट्रिङ",
                base64url: "base64url-इन्कोड गरिएको स्ट्रिङ",
                json_string: "JSON स्ट्रिङ",
                e164: "E.164 नम्बर",
                credit_card: "क्रेडिट कार्ड नम्बर",
                currency_code: "मुद्रा कोड",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "इनपुट"
            }, i = {
                nan: "NaN"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            return `अमान्य इनपुट: अपेक्षित ${e}, प्राप्त ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `अमान्य इनपुट: अपेक्षित ${h.stringifyPrimitive(A.values[0])}`;
                        return `अमान्य विकल्प: अपेक्षित मानहरू मध्ये एक ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `धेरै ठूलो: ${A.origin??"मान"} मा ${t}${A.maximum.toString()} ${i.unit} ${i.verb}`;
                            return `धेरै ठूलो: ${A.origin??"मान"} ${t}${A.maximum.toString()} हुनुपर्छ`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `धेरै सानो: ${A.origin} मा ${t}${A.minimum.toString()} ${i.unit} ${i.verb}`;
                            return `धेरै सानो: ${A.origin} ${t}${A.minimum.toString()} हुनुपर्छ`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `अमान्य स्ट्रिङ: "${A.prefix}" बाट सुरु हुनुपर्छ`;
                        if ("ends_with" === A.format) return `अमान्य स्ट्रिङ: "${A.suffix}" मा समाप्त हुनुपर्छ`;
                        if ("includes" === A.format) return `अमान्य स्ट्रिङ: "${A.includes}" समावेश हुनुपर्छ`;
                        if ("regex" === A.format) return `अमान्य स्ट्रिङ: ढाँचा ${A.pattern} सँग मेल खानुपर्छ`;
                        return `अमान्य ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `अमान्य संख्या: ${A.divisor} को गुणज हुनुपर्छ`;
                    case "unrecognized_keys":
                        return `अपरिचित कुञ्जी${A.keys.length>1?"हरू":""}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `अमान्य कुञ्जी: ${A.origin} मा`;
                    case "invalid_union":
                        if (A.options && Array.isArray(A.options) && A.options.length > 0) {
                            let e = A.options.map(e => `'${e}'`).join(" | ");
                            return `अमान्य डिस्क्रिमिनेटर मान: अपेक्षित ${e}`
                        }
                        return "अमान्य इनपुट";
                    case "invalid_element":
                        return `अमान्य मान: ${A.origin} मा`;
                    default:
                        return "अमान्य इनपुट"
                }
            })
        }
    }, "nl", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "tekens",
                    verb: "heeft"
                },
                file: {
                    unit: "bytes",
                    verb: "heeft"
                },
                array: {
                    unit: "elementen",
                    verb: "heeft"
                },
                set: {
                    unit: "elementen",
                    verb: "heeft"
                },
                map: {
                    unit: "elementen",
                    verb: "heeft"
                }
            }, t = {
                regex: "invoer",
                email: "emailadres",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO datum en tijd",
                date: "ISO datum",
                time: "ISO tijd",
                duration: "ISO duur",
                ipv4: "IPv4-adres",
                ipv6: "IPv6-adres",
                mac: "MAC-adres",
                cidrv4: "IPv4-bereik",
                cidrv6: "IPv6-bereik",
                base64: "base64-gecodeerde tekst",
                base64url: "base64 URL-gecodeerde tekst",
                json_string: "JSON string",
                e164: "E.164-nummer",
                credit_card: "creditcardnummer",
                currency_code: "valutacode",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "invoer"
            }, i = {
                nan: "NaN",
                number: "getal"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `Ongeldige invoer: verwacht instanceof ${A.expected}, ontving ${r}`;
                            return `Ongeldige invoer: verwacht ${e}, ontving ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Ongeldige invoer: verwacht ${h.stringifyPrimitive(A.values[0])}`;
                        return `Ongeldige optie: verwacht \xe9\xe9n van ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null,
                                r = "date" === A.origin ? "laat" : "string" === A.origin ? "lang" : "groot";
                            if (i) return `Te ${r}: verwacht dat ${A.origin??"waarde"} ${t}${A.maximum.toString()} ${i.unit??"elementen"} ${i.verb}`;
                            return `Te ${r}: verwacht dat ${A.origin??"waarde"} ${t}${A.maximum.toString()} is`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null,
                                r = "date" === A.origin ? "vroeg" : "string" === A.origin ? "kort" : "klein";
                            if (i) return `Te ${r}: verwacht dat ${A.origin} ${t}${A.minimum.toString()} ${i.unit} ${i.verb}`;
                            return `Te ${r}: verwacht dat ${A.origin} ${t}${A.minimum.toString()} is`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `Ongeldige tekst: moet met "${A.prefix}" beginnen`;
                        if ("ends_with" === A.format) return `Ongeldige tekst: moet op "${A.suffix}" eindigen`;
                        if ("includes" === A.format) return `Ongeldige tekst: moet "${A.includes}" bevatten`;
                        if ("regex" === A.format) return `Ongeldige tekst: moet overeenkomen met patroon ${A.pattern}`;
                        return `Ongeldig: ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `Ongeldig getal: moet een veelvoud van ${A.divisor} zijn`;
                    case "unrecognized_keys":
                        return `Onbekende key${A.keys.length>1?"s":""}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `Ongeldige key in ${A.origin}`;
                    case "invalid_union":
                    default:
                        return "Ongeldige invoer";
                    case "invalid_element":
                        return `Ongeldige waarde in ${A.origin}`
                }
            })
        }
    }, "nn", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "teikn",
                    verb: "å ha"
                },
                file: {
                    unit: "bytes",
                    verb: "å ha"
                },
                array: {
                    unit: "element",
                    verb: "å innehalde"
                },
                set: {
                    unit: "element",
                    verb: "å innehalde"
                },
                map: {
                    unit: "element",
                    verb: "å innehalde"
                }
            }, t = {
                regex: "input",
                email: "e-postadresse",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO dato- og klokkeslett",
                date: "ISO-dato",
                time: "ISO-klokkeslett",
                duration: "ISO-varigheit",
                ipv4: "IPv4-adresse",
                ipv6: "IPv6-adresse",
                mac: "MAC-adresse",
                cidrv4: "IPv4-spekter",
                cidrv6: "IPv6-spekter",
                base64: "base64-enkoda streng",
                base64url: "base64url-enkoda streng",
                json_string: "JSON-streng",
                e164: "E.164-nummer",
                credit_card: "kredittkortnummer",
                currency_code: "valutakode",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "input"
            }, i = {
                nan: "NaN",
                number: "tal",
                array: "liste"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `Ugyldig input: forventa instanceof ${A.expected}, fekk ${r}`;
                            return `Ugyldig input: forventa ${e}, fekk ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Ugyldig verdi: forventa ${h.stringifyPrimitive(A.values[0])}`;
                        return `Ugyldig val: forventa eitt av ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `For stor(t): forventa ${A.origin??"value"} til \xe5 ha ${t}${A.maximum.toString()} ${i.unit??"element"}`;
                            return `For stor(t): forventa ${A.origin??"value"} til \xe5 ha ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `For lite(n): forventa ${A.origin} til \xe5 ha ${t}${A.minimum.toString()} ${i.unit}`;
                            return `For lite(n): forventa ${A.origin} til \xe5 ha ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `Ugyldig streng: m\xe5 starte med "${A.prefix}"`;
                        if ("ends_with" === A.format) return `Ugyldig streng: m\xe5 slutte med "${A.suffix}"`;
                        if ("includes" === A.format) return `Ugyldig streng: m\xe5 innehalde "${A.includes}"`;
                        if ("regex" === A.format) return `Ugyldig streng: m\xe5 matche m\xf8nsteret ${A.pattern}`;
                        return `Ugyldig ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `Ugyldig tal: m\xe5 vere eit multiplum av ${A.divisor}`;
                    case "unrecognized_keys":
                        return `${A.keys.length>1?"Ukjende nøklar":"Ukjend nøkkel"}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `Ugyldig n\xf8kkel i ${A.origin}`;
                    case "invalid_union":
                    default:
                        return "Ugyldig input";
                    case "invalid_element":
                        return `Ugyldig verdi i ${A.origin}`
                }
            })
        }
    }, "no", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "tegn",
                    verb: "å ha"
                },
                file: {
                    unit: "bytes",
                    verb: "å ha"
                },
                array: {
                    unit: "elementer",
                    verb: "å inneholde"
                },
                set: {
                    unit: "elementer",
                    verb: "å inneholde"
                },
                map: {
                    unit: "elementer",
                    verb: "å inneholde"
                }
            }, t = {
                regex: "input",
                email: "e-postadresse",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO dato- og klokkeslett",
                date: "ISO-dato",
                time: "ISO-klokkeslett",
                duration: "ISO-varighet",
                ipv4: "IPv4-adresse",
                ipv6: "IPv6-adresse",
                mac: "MAC-adresse",
                cidrv4: "IPv4-spekter",
                cidrv6: "IPv6-spekter",
                base64: "base64-enkodet streng",
                base64url: "base64url-enkodet streng",
                json_string: "JSON-streng",
                e164: "E.164-nummer",
                credit_card: "kredittkortnummer",
                currency_code: "valutakode",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "input"
            }, i = {
                nan: "NaN",
                number: "tall",
                array: "liste"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `Ugyldig input: forventet instanceof ${A.expected}, fikk ${r}`;
                            return `Ugyldig input: forventet ${e}, fikk ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Ugyldig verdi: forventet ${h.stringifyPrimitive(A.values[0])}`;
                        return `Ugyldig valg: forventet en av ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `For stor(t): forventet ${A.origin??"value"} til \xe5 ha ${t}${A.maximum.toString()} ${i.unit??"elementer"}`;
                            return `For stor(t): forventet ${A.origin??"value"} til \xe5 ha ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `For lite(n): forventet ${A.origin} til \xe5 ha ${t}${A.minimum.toString()} ${i.unit}`;
                            return `For lite(n): forventet ${A.origin} til \xe5 ha ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `Ugyldig streng: m\xe5 starte med "${A.prefix}"`;
                        if ("ends_with" === A.format) return `Ugyldig streng: m\xe5 ende med "${A.suffix}"`;
                        if ("includes" === A.format) return `Ugyldig streng: m\xe5 inneholde "${A.includes}"`;
                        if ("regex" === A.format) return `Ugyldig streng: m\xe5 matche m\xf8nsteret ${A.pattern}`;
                        return `Ugyldig ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `Ugyldig tall: m\xe5 v\xe6re et multiplum av ${A.divisor}`;
                    case "unrecognized_keys":
                        return `${A.keys.length>1?"Ukjente nøkler":"Ukjent nøkkel"}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `Ugyldig n\xf8kkel i ${A.origin}`;
                    case "invalid_union":
                    default:
                        return "Ugyldig input";
                    case "invalid_element":
                        return `Ugyldig verdi i ${A.origin}`
                }
            })
        }
    }, "ota", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "harf",
                    verb: "olmalıdır"
                },
                file: {
                    unit: "bayt",
                    verb: "olmalıdır"
                },
                array: {
                    unit: "unsur",
                    verb: "olmalıdır"
                },
                set: {
                    unit: "unsur",
                    verb: "olmalıdır"
                },
                map: {
                    unit: "unsur",
                    verb: "olmalıdır"
                }
            }, t = {
                regex: "giren",
                email: "epostagâh",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO hengâmı",
                date: "ISO tarihi",
                time: "ISO zamanı",
                duration: "ISO müddeti",
                ipv4: "IPv4 nişânı",
                ipv6: "IPv6 nişânı",
                mac: "MAC nişânı",
                cidrv4: "IPv4 menzili",
                cidrv6: "IPv6 menzili",
                base64: "base64-şifreli metin",
                base64url: "base64url-şifreli metin",
                json_string: "JSON metin",
                e164: "E.164 sayısı",
                credit_card: "i'tibâr kartı numarası",
                currency_code: "para birimi kodu",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "giren"
            }, i = {
                nan: "NaN",
                number: "numara",
                array: "saf",
                null: "gayb"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `F\xe2sit giren: umulan instanceof ${A.expected}, alınan ${r}`;
                            return `F\xe2sit giren: umulan ${e}, alınan ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `F\xe2sit giren: umulan ${h.stringifyPrimitive(A.values[0])}`;
                        return `F\xe2sit tercih: m\xfbteberler ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `Fazla b\xfcy\xfck: ${A.origin??"value"}, ${t}${A.maximum.toString()} ${i.unit??"elements"} sahip olmalıydı.`;
                            return `Fazla b\xfcy\xfck: ${A.origin??"value"}, ${t}${A.maximum.toString()} olmalıydı.`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `Fazla k\xfc\xe7\xfck: ${A.origin}, ${t}${A.minimum.toString()} ${i.unit} sahip olmalıydı.`;
                            return `Fazla k\xfc\xe7\xfck: ${A.origin}, ${t}${A.minimum.toString()} olmalıydı.`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `F\xe2sit metin: "${A.prefix}" ile başlamalı.`;
                        if ("ends_with" === A.format) return `F\xe2sit metin: "${A.suffix}" ile bitmeli.`;
                        if ("includes" === A.format) return `F\xe2sit metin: "${A.includes}" ihtiv\xe2 etmeli.`;
                        if ("regex" === A.format) return `F\xe2sit metin: ${A.pattern} nakşına uymalı.`;
                        return `F\xe2sit ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `F\xe2sit sayı: ${A.divisor} katı olmalıydı.`;
                    case "unrecognized_keys":
                        return `Tanınmayan anahtar ${A.keys.length>1?"s":""}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `${A.origin} i\xe7in tanınmayan anahtar var.`;
                    case "invalid_union":
                        return "Giren tanınamadı.";
                    case "invalid_element":
                        return `${A.origin} i\xe7in tanınmayan kıymet var.`;
                    default:
                        return "Kıymet tanınamadı."
                }
            })
        }
    }, "pl", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "znaków",
                    verb: "mieć"
                },
                file: {
                    unit: "bajtów",
                    verb: "mieć"
                },
                array: {
                    unit: "elementów",
                    verb: "mieć"
                },
                set: {
                    unit: "elementów",
                    verb: "mieć"
                },
                map: {
                    unit: "elementów",
                    verb: "mieć"
                }
            }, t = {
                regex: "wyrażenie",
                email: "adres email",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "data i godzina w formacie ISO",
                date: "data w formacie ISO",
                time: "godzina w formacie ISO",
                duration: "czas trwania ISO",
                ipv4: "adres IPv4",
                ipv6: "adres IPv6",
                mac: "adres MAC",
                cidrv4: "zakres IPv4",
                cidrv6: "zakres IPv6",
                base64: "ciąg znaków zakodowany w formacie base64",
                base64url: "ciąg znaków zakodowany w formacie base64url",
                json_string: "ciąg znaków w formacie JSON",
                e164: "liczba E.164",
                credit_card: "numer karty kredytowej",
                currency_code: "kod waluty",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "wejście"
            }, i = {
                nan: "NaN",
                number: "liczba",
                array: "tablica"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `Nieprawidłowe dane wejściowe: oczekiwano instanceof ${A.expected}, otrzymano ${r}`;
                            return `Nieprawidłowe dane wejściowe: oczekiwano ${e}, otrzymano ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Nieprawidłowe dane wejściowe: oczekiwano ${h.stringifyPrimitive(A.values[0])}`;
                        return `Nieprawidłowa opcja: oczekiwano jednej z wartości ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `Za duża wartość: oczekiwano, że ${A.origin??"wartość"} będzie mieć ${t}${A.maximum.toString()} ${i.unit??"elementów"}`;
                            return `Zbyt duż(y/a/e): oczekiwano, że ${A.origin??"wartość"} będzie wynosić ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `Za mała wartość: oczekiwano, że ${A.origin??"wartość"} będzie mieć ${t}${A.minimum.toString()} ${i.unit??"elementów"}`;
                            return `Zbyt mał(y/a/e): oczekiwano, że ${A.origin??"wartość"} będzie wynosić ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `Nieprawidłowy ciąg znak\xf3w: musi zaczynać się od "${A.prefix}"`;
                        if ("ends_with" === A.format) return `Nieprawidłowy ciąg znak\xf3w: musi kończyć się na "${A.suffix}"`;
                        if ("includes" === A.format) return `Nieprawidłowy ciąg znak\xf3w: musi zawierać "${A.includes}"`;
                        if ("regex" === A.format) return `Nieprawidłowy ciąg znak\xf3w: musi odpowiadać wzorcowi ${A.pattern}`;
                        return `Nieprawidłow(y/a/e) ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `Nieprawidłowa liczba: musi być wielokrotnością ${A.divisor}`;
                    case "unrecognized_keys":
                        return `Nierozpoznane klucze${A.keys.length>1?"s":""}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `Nieprawidłowy klucz w ${A.origin}`;
                    case "invalid_union":
                    default:
                        return "Nieprawidłowe dane wejściowe";
                    case "invalid_element":
                        return `Nieprawidłowa wartość w ${A.origin}`
                }
            })
        }
    }, "ps", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "توکي",
                    verb: "ولري"
                },
                file: {
                    unit: "بایټس",
                    verb: "ولري"
                },
                array: {
                    unit: "توکي",
                    verb: "ولري"
                },
                set: {
                    unit: "توکي",
                    verb: "ولري"
                },
                map: {
                    unit: "توکي",
                    verb: "ولري"
                }
            }, t = {
                regex: "ورودي",
                email: "بریښنالیک",
                url: "یو آر ال",
                emoji: "ایموجي",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "نیټه او وخت",
                date: "نېټه",
                time: "وخت",
                duration: "موده",
                ipv4: "د IPv4 پته",
                ipv6: "د IPv6 پته",
                mac: "د MAC پته",
                cidrv4: "د IPv4 ساحه",
                cidrv6: "د IPv6 ساحه",
                base64: "base64-encoded متن",
                base64url: "base64url-encoded متن",
                json_string: "JSON متن",
                e164: "د E.164 شمېره",
                credit_card: "د کریډیټ کارت شمیره",
                currency_code: "د اسعارو کوډ",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "ورودي"
            }, i = {
                nan: "NaN",
                number: "عدد",
                array: "ارې"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `ناسم ورودي: باید instanceof ${A.expected} وای, مګر ${r} ترلاسه شو`;
                            return `ناسم ورودي: باید ${e} وای, مګر ${r} ترلاسه شو`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `ناسم ورودي: باید ${h.stringifyPrimitive(A.values[0])} وای`;
                        return `ناسم انتخاب: باید یو له ${h.joinValues(A.values,"|")} څخه وای`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `ډیر لوی: ${A.origin??"ارزښت"} باید ${t}${A.maximum.toString()} ${i.unit??"عنصرونه"} ولري`;
                            return `ډیر لوی: ${A.origin??"ارزښت"} باید ${t}${A.maximum.toString()} وي`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `ډیر کوچنی: ${A.origin} باید ${t}${A.minimum.toString()} ${i.unit} ولري`;
                            return `ډیر کوچنی: ${A.origin} باید ${t}${A.minimum.toString()} وي`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `ناسم متن: باید د "${A.prefix}" سره پیل شي`;
                        if ("ends_with" === A.format) return `ناسم متن: باید د "${A.suffix}" سره پای ته ورسيږي`;
                        if ("includes" === A.format) return `ناسم متن: باید "${A.includes}" ولري`;
                        if ("regex" === A.format) return `ناسم متن: باید د ${A.pattern} سره مطابقت ولري`;
                        return `${t[A.format]??A.format} ناسم دی`;
                    case "not_multiple_of":
                        return `ناسم عدد: باید د ${A.divisor} مضرب وي`;
                    case "unrecognized_keys":
                        return `ناسم ${A.keys.length>1?"کلیډونه":"کلیډ"}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `ناسم کلیډ په ${A.origin} کې`;
                    case "invalid_union":
                    default:
                        return "ناسمه ورودي";
                    case "invalid_element":
                        return `ناسم عنصر په ${A.origin} کې`
                }
            })
        }
    }, "pt", 0, function() {
        return {
            localeError: (() => {
                let e = {
                        string: {
                            unit: "caracteres"
                        },
                        file: {
                            unit: "bytes"
                        },
                        array: {
                            unit: "elementos"
                        },
                        set: {
                            unit: "elementos"
                        },
                        map: {
                            unit: "entradas"
                        }
                    },
                    t = {
                        regex: "a entrada",
                        email: "o endereço de e-mail",
                        url: "o URL",
                        emoji: "o emoji",
                        uuid: "o UUID",
                        uuidv4: "o UUIDv4",
                        uuidv6: "o UUIDv6",
                        nanoid: "o nanoid",
                        guid: "o GUID",
                        cuid: "o cuid",
                        cuid2: "o cuid2",
                        ulid: "o ULID",
                        xid: "o XID",
                        ksuid: "o KSUID",
                        datetime: "a data e hora ISO",
                        date: "a data ISO",
                        time: "a hora ISO",
                        duration: "a duração ISO",
                        ipv4: "o endereço IPv4",
                        ipv6: "o endereço IPv6",
                        mac: "o endereço MAC",
                        cidrv4: "o intervalo de endereços IPv4",
                        cidrv6: "o intervalo de endereços IPv6",
                        base64: "o texto codificado em base64",
                        base64url: "o texto codificado em base64url",
                        json_string: "o texto JSON",
                        e164: "o número E.164",
                        credit_card: "o número de cartão de crédito",
                        currency_code: "o código de moeda",
                        iban: "o IBAN",
                        jwt: "o JWT",
                        template_literal: "a entrada"
                    },
                    i = {
                        definite: "o",
                        indefinite: "um"
                    },
                    A = {
                        definite: "a",
                        indefinite: "uma"
                    },
                    r = {
                        string: {
                            name: "texto",
                            articles: i
                        },
                        number: {
                            name: "número",
                            articles: i
                        },
                        int: {
                            name: "número inteiro",
                            articles: i
                        },
                        boolean: {
                            name: "valor booleano",
                            articles: i
                        },
                        bigint: {
                            name: "número bigint",
                            articles: i
                        },
                        symbol: {
                            name: "símbolo",
                            articles: i
                        },
                        undefined: {
                            name: 'valor "undefined"',
                            articles: i
                        },
                        null: {
                            name: 'valor "nulo"',
                            articles: i
                        },
                        never: {
                            name: 'valor "never"',
                            articles: i
                        },
                        void: {
                            name: 'valor "void"',
                            articles: i
                        },
                        date: {
                            name: "data",
                            articles: A
                        },
                        array: {
                            name: "vetor",
                            articles: i
                        },
                        object: {
                            name: "objeto",
                            articles: i
                        },
                        tuple: {
                            name: "tuplo",
                            articles: i
                        },
                        record: {
                            name: "registo",
                            articles: i
                        },
                        map: {
                            name: "mapa",
                            articles: i
                        },
                        set: {
                            name: "conjunto",
                            articles: i
                        },
                        file: {
                            name: "ficheiro",
                            articles: i
                        },
                        nonoptional: {
                            name: "valor não opcional",
                            articles: i
                        },
                        nan: {
                            name: 'valor "NaN"',
                            articles: i
                        },
                        function: {
                            name: "função",
                            articles: A
                        }
                    };

                function a(e, t) {
                    let A = r[e] ? ? {
                        name: `valor "${e}"`,
                        articles: i
                    };
                    return `${A.articles[t]} ${A.name}`
                }
                return i => {
                    switch (i.code) {
                        case "invalid_type":
                            {
                                let e = a(i.expected, "indefinite"),
                                    t = a(h.parsedType(i.input), "indefinite");
                                return `Entrada inv\xe1lida: esperava ${e}, recebeu ${t}`
                            }
                        case "invalid_value":
                            if (1 === i.values.length) return `Entrada inv\xe1lida: esperava ${h.stringifyPrimitive(i.values[0])}`;
                            return `Op\xe7\xe3o inv\xe1lida: esperava uma das seguintes op\xe7\xf5es: ${h.joinValues(i.values,"|")}`;
                        case "too_big":
                            {
                                let t = i.inclusive ? "<=" : "<",
                                    A = e[i.origin] ? ? null;
                                if (A) return `Demasiado grande: esperava que ${a(i.origin,"definite")} tivesse ${t} ${i.maximum.toString()} ${A.unit??"elementos"}`;
                                return `Demasiado grande: esperava que ${a(i.origin,"definite")} fosse ${t} ${i.maximum.toString()}`
                            }
                        case "too_small":
                            {
                                let t = i.inclusive ? ">=" : ">",
                                    A = e[i.origin] ? ? null;
                                if (A) return `Demasiado pequeno: esperava que ${a(i.origin,"definite")} tivesse ${t} ${i.minimum.toString()} ${A.unit??"elementos"}`;
                                return `Demasiado pequeno: esperava que ${a(i.origin,"definite")} fosse ${t} ${i.minimum.toString()}`
                            }
                        case "invalid_format":
                            if ("starts_with" === i.format) return `Texto inv\xe1lido: deve come\xe7ar por "${i.prefix}"`;
                            if ("ends_with" === i.format) return `Texto inv\xe1lido: deve terminar em "${i.suffix}"`;
                            if ("includes" === i.format) return `Texto inv\xe1lido: deve incluir "${i.includes}"`;
                            if ("regex" === i.format) return `Texto inv\xe1lido: deve corresponder ao padr\xe3o ${i.pattern}`;
                            return `Formato d${t[i.format]??i.format} inv\xe1lido`;
                        case "not_multiple_of":
                            return `N\xfamero inv\xe1lido: deve ser m\xfaltiplo de ${i.divisor}`;
                        case "unrecognized_keys":
                            {
                                let e = i.keys.length > 1 ? "s" : "";
                                return `Chave${e} inv\xe1lida${e}: ${h.joinValues(i.keys,", ")}`
                            }
                        case "invalid_key":
                        case "invalid_element":
                            return `Entrada inv\xe1lida n${a(i.origin,"definite")}`;
                        case "invalid_union":
                            if (i.options && Array.isArray(i.options) && i.options.length > 0) {
                                let e = i.options.map(e => `'${e}'`).join(" | ");
                                return `Valor de discrimina\xe7\xe3o inv\xe1lido. Esperava ${e}`
                            }
                            return "Entrada inválida";
                        default:
                            return "Entrada inválida"
                    }
                }
            })()
        }
    }, "ptBR", 0, function() {
        return {
            localeError: (() => {
                let e = {
                        string: {
                            unit: "caracteres"
                        },
                        file: {
                            unit: "bytes"
                        },
                        array: {
                            unit: "elementos"
                        },
                        set: {
                            unit: "elementos"
                        },
                        map: {
                            unit: "entradas"
                        }
                    },
                    t = {
                        regex: "a entrada",
                        email: "o endereço de e-mail",
                        url: "o URL",
                        emoji: "o emoji",
                        uuid: "o UUID",
                        uuidv4: "o UUIDv4",
                        uuidv6: "o UUIDv6",
                        nanoid: "o nanoid",
                        guid: "o GUID",
                        cuid: "o cuid",
                        cuid2: "o cuid2",
                        ulid: "o ULID",
                        xid: "o XID",
                        ksuid: "o KSUID",
                        datetime: "a data e hora ISO",
                        date: "a data ISO",
                        time: "a hora ISO",
                        duration: "a duração ISO",
                        ipv4: "o endereço IPv4",
                        ipv6: "o endereço IPv6",
                        mac: "o endereço MAC",
                        cidrv4: "a faixa de endereços IPv4",
                        cidrv6: "a faixa de endereços IPv6",
                        base64: "o texto codificado em base64",
                        base64url: "o texto codificado em base64url",
                        json_string: "o texto JSON",
                        e164: "o número E.164",
                        credit_card: "o número de cartão de crédito",
                        currency_code: "o código de moeda",
                        iban: "o IBAN",
                        jwt: "o JWT",
                        template_literal: "a entrada"
                    },
                    i = {
                        definite: "o",
                        indefinite: "um"
                    },
                    A = {
                        definite: "a",
                        indefinite: "uma"
                    },
                    r = {
                        string: {
                            name: "texto",
                            articles: i
                        },
                        number: {
                            name: "número",
                            articles: i
                        },
                        int: {
                            name: "número inteiro",
                            articles: i
                        },
                        boolean: {
                            name: "valor booleano",
                            articles: i
                        },
                        bigint: {
                            name: "número bigint",
                            articles: i
                        },
                        symbol: {
                            name: "símbolo",
                            articles: i
                        },
                        undefined: {
                            name: 'valor "undefined"',
                            articles: i
                        },
                        null: {
                            name: 'valor "nulo"',
                            articles: i
                        },
                        never: {
                            name: 'valor "never"',
                            articles: i
                        },
                        void: {
                            name: 'valor "void"',
                            articles: i
                        },
                        date: {
                            name: "data",
                            articles: A
                        },
                        array: {
                            name: "vetor",
                            articles: i
                        },
                        object: {
                            name: "objeto",
                            articles: i
                        },
                        tuple: {
                            name: "tupla",
                            articles: A
                        },
                        record: {
                            name: "registro",
                            articles: i
                        },
                        map: {
                            name: "mapa",
                            articles: i
                        },
                        set: {
                            name: "conjunto",
                            articles: i
                        },
                        file: {
                            name: "arquivo",
                            articles: i
                        },
                        nonoptional: {
                            name: "valor não opcional",
                            articles: i
                        },
                        nan: {
                            name: 'valor "NaN"',
                            articles: i
                        },
                        function: {
                            name: "função",
                            articles: A
                        }
                    };

                function a(e, t) {
                    let A = r[e] ? ? {
                        name: `valor "${e}"`,
                        articles: i
                    };
                    return `${A.articles[t]} ${A.name}`
                }
                return i => {
                    switch (i.code) {
                        case "invalid_type":
                            {
                                let e = a(i.expected, "indefinite"),
                                    t = a(h.parsedType(i.input), "indefinite");
                                return `Entrada inv\xe1lida: esperava ${e}, recebeu ${t}`
                            }
                        case "invalid_value":
                            if (1 === i.values.length) return `Entrada inv\xe1lida: esperava ${h.stringifyPrimitive(i.values[0])}`;
                            return `Op\xe7\xe3o inv\xe1lida: esperava uma das seguintes op\xe7\xf5es: ${h.joinValues(i.values,"|")}`;
                        case "too_big":
                            {
                                let t = i.inclusive ? "<=" : "<",
                                    A = e[i.origin] ? ? null;
                                if (A) return `Grande demais: esperava que ${a(i.origin,"definite")} tivesse ${t} ${i.maximum.toString()} ${A.unit??"elementos"}`;
                                return `Grande demais: esperava que ${a(i.origin,"definite")} fosse ${t} ${i.maximum.toString()}`
                            }
                        case "too_small":
                            {
                                let t = i.inclusive ? ">=" : ">",
                                    A = e[i.origin] ? ? null;
                                if (A) return `Pequeno demais: esperava que ${a(i.origin,"definite")} tivesse ${t} ${i.minimum.toString()} ${A.unit??"elementos"}`;
                                return `Pequeno demais: esperava que ${a(i.origin,"definite")} fosse ${t} ${i.minimum.toString()}`
                            }
                        case "invalid_format":
                            if ("starts_with" === i.format) return `Texto inv\xe1lido: deve come\xe7ar com "${i.prefix}"`;
                            if ("ends_with" === i.format) return `Texto inv\xe1lido: deve terminar com "${i.suffix}"`;
                            if ("includes" === i.format) return `Texto inv\xe1lido: deve incluir "${i.includes}"`;
                            if ("regex" === i.format) return `Texto inv\xe1lido: deve corresponder ao padr\xe3o ${i.pattern}`;
                            return `Formato d${t[i.format]??i.format} inv\xe1lido`;
                        case "not_multiple_of":
                            return `N\xfamero inv\xe1lido: deve ser m\xfaltiplo de ${i.divisor}`;
                        case "unrecognized_keys":
                            {
                                let e = i.keys.length > 1 ? "s" : "";
                                return `Chave${e} inv\xe1lida${e}: ${h.joinValues(i.keys,", ")}`
                            }
                        case "invalid_key":
                        case "invalid_element":
                            return `Entrada inv\xe1lida n${a(i.origin,"definite")}`;
                        case "invalid_union":
                            if (i.options && Array.isArray(i.options) && i.options.length > 0) {
                                let e = i.options.map(e => `'${e}'`).join(" | ");
                                return `Valor de discrimina\xe7\xe3o inv\xe1lido. Esperava ${e}`
                            }
                            return "Entrada inválida";
                        default:
                            return "Entrada inválida"
                    }
                }
            })()
        }
    }, "ro", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "caractere",
                    verb: "să aibă"
                },
                file: {
                    unit: "octeți",
                    verb: "să aibă"
                },
                array: {
                    unit: "elemente",
                    verb: "să aibă"
                },
                set: {
                    unit: "elemente",
                    verb: "să aibă"
                },
                map: {
                    unit: "intrări",
                    verb: "să aibă"
                }
            }, t = {
                regex: "intrare",
                email: "adresă de email",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "dată și oră ISO",
                date: "dată ISO",
                time: "oră ISO",
                duration: "durată ISO",
                ipv4: "adresă IPv4",
                ipv6: "adresă IPv6",
                mac: "adresă MAC",
                cidrv4: "interval IPv4",
                cidrv6: "interval IPv6",
                base64: "șir codat base64",
                base64url: "șir codat base64url",
                json_string: "șir JSON",
                e164: "număr E.164",
                credit_card: "număr de card de credit",
                currency_code: "cod valutar",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "intrare"
            }, i = {
                nan: "NaN",
                string: "șir",
                number: "număr",
                boolean: "boolean",
                function: "funcție",
                array: "matrice",
                object: "obiect",
                undefined: "nedefinit",
                symbol: "simbol",
                bigint: "număr mare",
                void: "void",
                never: "never",
                map: "hartă",
                set: "set"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            return `Intrare invalidă: așteptat ${e}, primit ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Intrare invalidă: așteptat ${h.stringifyPrimitive(A.values[0])}`;
                        return `Opțiune invalidă: așteptat una dintre ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `Prea mare: așteptat ca ${A.origin??"valoarea"} ${i.verb} ${t}${A.maximum.toString()} ${i.unit??"elemente"}`;
                            return `Prea mare: așteptat ca ${A.origin??"valoarea"} să fie ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `Prea mic: așteptat ca ${A.origin} ${i.verb} ${t}${A.minimum.toString()} ${i.unit}`;
                            return `Prea mic: așteptat ca ${A.origin} să fie ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `Șir invalid: trebuie să \xeenceapă cu "${A.prefix}"`;
                        if ("ends_with" === A.format) return `Șir invalid: trebuie să se termine cu "${A.suffix}"`;
                        if ("includes" === A.format) return `Șir invalid: trebuie să includă "${A.includes}"`;
                        if ("regex" === A.format) return `Șir invalid: trebuie să se potrivească cu modelul ${A.pattern}`;
                        return `Format invalid: ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `Număr invalid: trebuie să fie multiplu de ${A.divisor}`;
                    case "unrecognized_keys":
                        return `Chei nerecunoscute: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `Cheie invalidă \xeen ${A.origin}`;
                    case "invalid_union":
                    default:
                        return "Intrare invalidă";
                    case "invalid_element":
                        return `Valoare invalidă \xeen ${A.origin}`
                }
            })
        }
    }, "ru", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: {
                        one: "символ",
                        few: "символа",
                        many: "символов"
                    },
                    verb: "иметь"
                },
                file: {
                    unit: {
                        one: "байт",
                        few: "байта",
                        many: "байт"
                    },
                    verb: "иметь"
                },
                array: {
                    unit: {
                        one: "элемент",
                        few: "элемента",
                        many: "элементов"
                    },
                    verb: "иметь"
                },
                set: {
                    unit: {
                        one: "элемент",
                        few: "элемента",
                        many: "элементов"
                    },
                    verb: "иметь"
                },
                map: {
                    unit: {
                        one: "элемент",
                        few: "элемента",
                        many: "элементов"
                    },
                    verb: "иметь"
                }
            }, t = {
                regex: "ввод",
                email: "email адрес",
                url: "URL",
                emoji: "эмодзи",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO дата и время",
                date: "ISO дата",
                time: "ISO время",
                duration: "ISO длительность",
                ipv4: "IPv4 адрес",
                ipv6: "IPv6 адрес",
                mac: "MAC адрес",
                cidrv4: "IPv4 диапазон",
                cidrv6: "IPv6 диапазон",
                base64: "строка в формате base64",
                base64url: "строка в формате base64url",
                json_string: "JSON строка",
                e164: "номер E.164",
                credit_card: "номер кредитной карты",
                currency_code: "код валюты",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "ввод"
            }, i = {
                nan: "NaN",
                number: "число",
                array: "массив"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `Неверный ввод: ожидалось instanceof ${A.expected}, получено ${r}`;
                            return `Неверный ввод: ожидалось ${e}, получено ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Неверный ввод: ожидалось ${h.stringifyPrimitive(A.values[0])}`;
                        return `Неверный вариант: ожидалось одно из ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) {
                                let e = j(Number(A.maximum), i.unit.one, i.unit.few, i.unit.many);
                                return `Слишком большое значение: ожидалось, что ${A.origin??"значение"} будет иметь ${t}${A.maximum.toString()} ${e}`
                            }
                            return `Слишком большое значение: ожидалось, что ${A.origin??"значение"} будет ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) {
                                let e = j(Number(A.minimum), i.unit.one, i.unit.few, i.unit.many);
                                return `Слишком маленькое значение: ожидалось, что ${A.origin} будет иметь ${t}${A.minimum.toString()} ${e}`
                            }
                            return `Слишком маленькое значение: ожидалось, что ${A.origin} будет ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `Неверная строка: должна начинаться с "${A.prefix}"`;
                        if ("ends_with" === A.format) return `Неверная строка: должна заканчиваться на "${A.suffix}"`;
                        if ("includes" === A.format) return `Неверная строка: должна содержать "${A.includes}"`;
                        if ("regex" === A.format) return `Неверная строка: должна соответствовать шаблону ${A.pattern}`;
                        return `Неверный ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `Неверное число: должно быть кратным ${A.divisor}`;
                    case "unrecognized_keys":
                        return `Нераспознанн${A.keys.length>1?"ые":"ый"} ключ${A.keys.length>1?"и":""}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `Неверный ключ в ${A.origin}`;
                    case "invalid_union":
                    default:
                        return "Неверные входные данные";
                    case "invalid_element":
                        return `Неверное значение в ${A.origin}`
                }
            })
        }
    }, "sk", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "znakov",
                    verb: "mať"
                },
                file: {
                    unit: "bajtov",
                    verb: "mať"
                },
                array: {
                    unit: "prvkov",
                    verb: "mať"
                },
                set: {
                    unit: "prvkov",
                    verb: "mať"
                },
                map: {
                    unit: "položiek",
                    verb: "mať"
                }
            }, t = {
                regex: "regulárny výraz",
                email: "e-mailová adresa",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "dátum a čas vo formáte ISO",
                date: "dátum vo formáte ISO",
                time: "čas vo formáte ISO",
                duration: "doba trvania ISO",
                ipv4: "IPv4 adresa",
                ipv6: "IPv6 adresa",
                mac: "MAC adresa",
                cidrv4: "rozsah IPv4",
                cidrv6: "rozsah IPv6",
                base64: "reťazec zakódovaný vo formáte base64",
                base64url: "reťazec zakódovaný vo formáte base64url",
                json_string: "reťazec vo formáte JSON",
                e164: "číslo E.164",
                credit_card: "číslo kreditnej karty",
                currency_code: "kód meny",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "vstup"
            }, i = {
                nan: "NaN",
                number: "číslo",
                string: "reťazec",
                function: "funkcia",
                array: "pole"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `Neplatn\xfd vstup: očak\xe1van\xe9 instanceof ${A.expected}, obdržan\xe9 ${r}`;
                            return `Neplatn\xfd vstup: očak\xe1van\xe9 ${e}, obdržan\xe9 ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Neplatn\xfd vstup: očak\xe1van\xe9 ${h.stringifyPrimitive(A.values[0])}`;
                        return `Neplatn\xfd vstup: očak\xe1van\xe1 jedna z hodn\xf4t ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `Hodnota je pr\xedliš veľk\xe1: ${A.origin??"hodnota"} mus\xed mať ${t}${A.maximum.toString()} ${i.unit??"prvkov"}`;
                            return `Hodnota je pr\xedliš veľk\xe1: ${A.origin??"hodnota"} mus\xed byť ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `Hodnota je pr\xedliš mal\xe1: ${A.origin??"hodnota"} mus\xed mať ${t}${A.minimum.toString()} ${i.unit??"prvkov"}`;
                            return `Hodnota je pr\xedliš mal\xe1: ${A.origin??"hodnota"} mus\xed byť ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `Neplatn\xfd reťazec: mus\xed zač\xednať na "${A.prefix}"`;
                        if ("ends_with" === A.format) return `Neplatn\xfd reťazec: mus\xed končiť na "${A.suffix}"`;
                        if ("includes" === A.format) return `Neplatn\xfd reťazec: mus\xed obsahovať "${A.includes}"`;
                        if ("regex" === A.format) return `Neplatn\xfd reťazec: mus\xed zodpovedať vzoru ${A.pattern}`;
                        return `Neplatn\xfd form\xe1t ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `Neplatn\xe9 č\xedslo: mus\xed byť n\xe1sobkom ${A.divisor}`;
                    case "unrecognized_keys":
                        return `Nezn\xe1me kl\xfače: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `Neplatn\xfd kl\xfač v ${A.origin}`;
                    case "invalid_union":
                    default:
                        return "Neplatný vstup";
                    case "invalid_element":
                        return `Neplatn\xe1 hodnota v ${A.origin}`
                }
            })
        }
    }, "sl", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "znakov",
                    verb: "imeti"
                },
                file: {
                    unit: "bajtov",
                    verb: "imeti"
                },
                array: {
                    unit: "elementov",
                    verb: "imeti"
                },
                set: {
                    unit: "elementov",
                    verb: "imeti"
                },
                map: {
                    unit: "elementov",
                    verb: "imeti"
                }
            }, t = {
                regex: "vnos",
                email: "e-poštni naslov",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO datum in čas",
                date: "ISO datum",
                time: "ISO čas",
                duration: "ISO trajanje",
                ipv4: "IPv4 naslov",
                ipv6: "IPv6 naslov",
                mac: "MAC naslov",
                cidrv4: "obseg IPv4",
                cidrv6: "obseg IPv6",
                base64: "base64 kodiran niz",
                base64url: "base64url kodiran niz",
                json_string: "JSON niz",
                e164: "E.164 številka",
                credit_card: "številka kreditne kartice",
                currency_code: "koda valute",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "vnos"
            }, i = {
                nan: "NaN",
                number: "število",
                array: "tabela"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `Neveljaven vnos: pričakovano instanceof ${A.expected}, prejeto ${r}`;
                            return `Neveljaven vnos: pričakovano ${e}, prejeto ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Neveljaven vnos: pričakovano ${h.stringifyPrimitive(A.values[0])}`;
                        return `Neveljavna možnost: pričakovano eno izmed ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `Preveliko: pričakovano, da bo ${A.origin??"vrednost"} imelo ${t}${A.maximum.toString()} ${i.unit??"elementov"}`;
                            return `Preveliko: pričakovano, da bo ${A.origin??"vrednost"} ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `Premajhno: pričakovano, da bo ${A.origin} imelo ${t}${A.minimum.toString()} ${i.unit}`;
                            return `Premajhno: pričakovano, da bo ${A.origin} ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `Neveljaven niz: mora se začeti z "${A.prefix}"`;
                        if ("ends_with" === A.format) return `Neveljaven niz: mora se končati z "${A.suffix}"`;
                        if ("includes" === A.format) return `Neveljaven niz: mora vsebovati "${A.includes}"`;
                        if ("regex" === A.format) return `Neveljaven niz: mora ustrezati vzorcu ${A.pattern}`;
                        return `Neveljaven ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `Neveljavno število: mora biti večkratnik ${A.divisor}`;
                    case "unrecognized_keys":
                        return `Neprepoznan${A.keys.length>1?"i ključi":" ključ"}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `Neveljaven ključ v ${A.origin}`;
                    case "invalid_union":
                    default:
                        return "Neveljaven vnos";
                    case "invalid_element":
                        return `Neveljavna vrednost v ${A.origin}`
                }
            })
        }
    }, "sv", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "tecken",
                    verb: "att ha"
                },
                file: {
                    unit: "bytes",
                    verb: "att ha"
                },
                array: {
                    unit: "objekt",
                    verb: "att innehålla"
                },
                set: {
                    unit: "objekt",
                    verb: "att innehålla"
                },
                map: {
                    unit: "objekt",
                    verb: "att innehålla"
                }
            }, t = {
                regex: "reguljärt uttryck",
                email: "e-postadress",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO-datum och tid",
                date: "ISO-datum",
                time: "ISO-tid",
                duration: "ISO-varaktighet",
                ipv4: "IPv4-adress",
                ipv6: "IPv6-adress",
                mac: "MAC-adress",
                cidrv4: "IPv4-spektrum",
                cidrv6: "IPv6-spektrum",
                base64: "base64-kodad sträng",
                base64url: "base64url-kodad sträng",
                json_string: "JSON-sträng",
                e164: "E.164-nummer",
                credit_card: "kreditkortsnummer",
                currency_code: "valutakod",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "mall-literal"
            }, i = {
                nan: "NaN",
                number: "antal",
                array: "lista"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `Ogiltig inmatning: f\xf6rv\xe4ntat instanceof ${A.expected}, fick ${r}`;
                            return `Ogiltig inmatning: f\xf6rv\xe4ntat ${e}, fick ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Ogiltig inmatning: f\xf6rv\xe4ntat ${h.stringifyPrimitive(A.values[0])}`;
                        return `Ogiltigt val: f\xf6rv\xe4ntade en av ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `F\xf6r stor(t): f\xf6rv\xe4ntade ${A.origin??"värdet"} att ha ${t}${A.maximum.toString()} ${i.unit??"element"}`;
                            return `F\xf6r stor(t): f\xf6rv\xe4ntat ${A.origin??"värdet"} att ha ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `F\xf6r lite(t): f\xf6rv\xe4ntade ${A.origin??"värdet"} att ha ${t}${A.minimum.toString()} ${i.unit}`;
                            return `F\xf6r lite(t): f\xf6rv\xe4ntade ${A.origin??"värdet"} att ha ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `Ogiltig str\xe4ng: m\xe5ste b\xf6rja med "${A.prefix}"`;
                        if ("ends_with" === A.format) return `Ogiltig str\xe4ng: m\xe5ste sluta med "${A.suffix}"`;
                        if ("includes" === A.format) return `Ogiltig str\xe4ng: m\xe5ste inneh\xe5lla "${A.includes}"`;
                        if ("regex" === A.format) return `Ogiltig str\xe4ng: m\xe5ste matcha m\xf6nstret "${A.pattern}"`;
                        return `Ogiltig(t) ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `Ogiltigt tal: m\xe5ste vara en multipel av ${A.divisor}`;
                    case "unrecognized_keys":
                        return `${A.keys.length>1?"Okända nycklar":"Okänd nyckel"}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `Ogiltig nyckel i ${A.origin??"värdet"}`;
                    case "invalid_union":
                    default:
                        return "Ogiltig input";
                    case "invalid_element":
                        return `Ogiltigt v\xe4rde i ${A.origin??"värdet"}`
                }
            })
        }
    }, "ta", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "எழுத்துக்கள்",
                    verb: "கொண்டிருக்க வேண்டும்"
                },
                file: {
                    unit: "பைட்டுகள்",
                    verb: "கொண்டிருக்க வேண்டும்"
                },
                array: {
                    unit: "உறுப்புகள்",
                    verb: "கொண்டிருக்க வேண்டும்"
                },
                set: {
                    unit: "உறுப்புகள்",
                    verb: "கொண்டிருக்க வேண்டும்"
                },
                map: {
                    unit: "உறுப்புகள்",
                    verb: "கொண்டிருக்க வேண்டும்"
                }
            }, t = {
                regex: "உள்ளீடு",
                email: "மின்னஞ்சல் முகவரி",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO தேதி நேரம்",
                date: "ISO தேதி",
                time: "ISO நேரம்",
                duration: "ISO கால அளவு",
                ipv4: "IPv4 முகவரி",
                ipv6: "IPv6 முகவரி",
                mac: "MAC முகவரி",
                cidrv4: "IPv4 வரம்பு",
                cidrv6: "IPv6 வரம்பு",
                base64: "base64-encoded சரம்",
                base64url: "base64url-encoded சரம்",
                json_string: "JSON சரம்",
                e164: "E.164 எண்",
                credit_card: "கடன் அட்டை எண்",
                currency_code: "நாணயக் குறியீடு",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "input"
            }, i = {
                nan: "NaN",
                number: "எண்",
                array: "அணி",
                null: "வெறுமை"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது instanceof ${A.expected}, பெறப்பட்டது ${r}`;
                            return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${e}, பெறப்பட்டது ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${h.stringifyPrimitive(A.values[0])}`;
                        return `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${h.joinValues(A.values,"|")} இல் ஒன்று`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${A.origin??"மதிப்பு"} ${t}${A.maximum.toString()} ${i.unit??"உறுப்புகள்"} ஆக இருக்க வேண்டும்`;
                            return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${A.origin??"மதிப்பு"} ${t}${A.maximum.toString()} ஆக இருக்க வேண்டும்`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${A.origin} ${t}${A.minimum.toString()} ${i.unit} ஆக இருக்க வேண்டும்`;
                            return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${A.origin} ${t}${A.minimum.toString()} ஆக இருக்க வேண்டும்`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `தவறான சரம்: "${A.prefix}" இல் தொடங்க வேண்டும்`;
                        if ("ends_with" === A.format) return `தவறான சரம்: "${A.suffix}" இல் முடிவடைய வேண்டும்`;
                        if ("includes" === A.format) return `தவறான சரம்: "${A.includes}" ஐ உள்ளடக்க வேண்டும்`;
                        if ("regex" === A.format) return `தவறான சரம்: ${A.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`;
                        return `தவறான ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `தவறான எண்: ${A.divisor} இன் பலமாக இருக்க வேண்டும்`;
                    case "unrecognized_keys":
                        return `அடையாளம் தெரியாத விசை${A.keys.length>1?"கள்":""}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `${A.origin} இல் தவறான விசை`;
                    case "invalid_union":
                    default:
                        return "தவறான உள்ளீடு";
                    case "invalid_element":
                        return `${A.origin} இல் தவறான மதிப்பு`
                }
            })
        }
    }, "tg", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "аломат",
                    verb: "дошта бошад"
                },
                file: {
                    unit: "байт",
                    verb: "дошта бошад"
                },
                array: {
                    unit: "унсур",
                    verb: "дошта бошад"
                },
                set: {
                    unit: "унсур",
                    verb: "дошта бошад"
                },
                map: {
                    unit: "сабт",
                    verb: "дошта бошад"
                }
            }, t = {
                regex: "вуруд",
                email: "суроғаи email",
                url: "URL",
                emoji: "эмоҷи",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "санаву вақти ISO",
                date: "санаи ISO",
                time: "вақти ISO",
                duration: "давомнокии ISO",
                ipv4: "суроғаи IPv4",
                ipv6: "суроғаи IPv6",
                mac: "суроғаи MAC",
                cidrv4: "маҳдудаи IPv4",
                cidrv6: "маҳдудаи IPv6",
                base64: "сатри дар формати base64",
                base64url: "сатри дар формати base64url",
                json_string: "сатри JSON",
                e164: "рақами E.164",
                credit_card: "рақами корти кредитӣ",
                currency_code: "рамзи асъор",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "вуруд"
            }, i = {
                nan: "NaN",
                number: "рақам",
                string: "сатр",
                array: "массив",
                object: "объект",
                date: "сана"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            return `Вуруди нодуруст: ${e} интизор мерафт, ${r} гирифта шуд`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Вуруди нодуруст: ${h.stringifyPrimitive(A.values[0])} интизор мерафт`;
                        return `Интихоби нодуруст: яке аз ${h.joinValues(A.values,"|")} интизор мерафт`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `Хеле калон: ${A.origin??"қимат"} бояд ${t}${A.maximum.toString()} ${i.unit} ${i.verb}`;
                            return `Хеле калон: ${A.origin??"қимат"} бояд ${t}${A.maximum.toString()} бошад`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `Хеле хурд: ${A.origin} бояд ${t}${A.minimum.toString()} ${i.unit} ${i.verb}`;
                            return `Хеле хурд: ${A.origin} бояд ${t}${A.minimum.toString()} бошад`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `Сатри нодуруст: бояд бо "${A.prefix}" оғоз шавад`;
                        if ("ends_with" === A.format) return `Сатри нодуруст: бояд бо "${A.suffix}" анҷом ёбад`;
                        if ("includes" === A.format) return `Сатри нодуруст: бояд "${A.includes}"-ро дар бар гирад`;
                        if ("regex" === A.format) return `Сатри нодуруст: бояд ба намунаи ${A.pattern} мувофиқат кунад`;
                        return `${t[A.format]??A.format}-и нодуруст`;
                    case "not_multiple_of":
                        return `Рақами нодуруст: бояд ба ${A.divisor} бе бақия тақсим шавад`;
                    case "unrecognized_keys":
                        return `Калид${A.keys.length>1?"ҳои":"и"} номаълум: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `Калиди нодуруст дар ${A.origin}`;
                    case "invalid_union":
                        if (A.options && Array.isArray(A.options) && A.options.length > 0) {
                            let e = A.options.map(e => `'${e}'`).join(" | ");
                            return `Қимати нодурусти дискриминатор: ${e} интизор мерафт`
                        }
                        return "Вуруди нодуруст";
                    case "invalid_element":
                        return `Қимати нодуруст дар ${A.origin}`;
                    default:
                        return "Вуруди нодуруст"
                }
            })
        }
    }, "th", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "ตัวอักษร",
                    verb: "ควรมี"
                },
                file: {
                    unit: "ไบต์",
                    verb: "ควรมี"
                },
                array: {
                    unit: "รายการ",
                    verb: "ควรมี"
                },
                set: {
                    unit: "รายการ",
                    verb: "ควรมี"
                },
                map: {
                    unit: "รายการ",
                    verb: "ควรมี"
                }
            }, t = {
                regex: "ข้อมูลที่ป้อน",
                email: "ที่อยู่อีเมล",
                url: "URL",
                emoji: "อิโมจิ",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "วันที่เวลาแบบ ISO",
                date: "วันที่แบบ ISO",
                time: "เวลาแบบ ISO",
                duration: "ช่วงเวลาแบบ ISO",
                ipv4: "ที่อยู่ IPv4",
                ipv6: "ที่อยู่ IPv6",
                mac: "ที่อยู่ MAC",
                cidrv4: "ช่วง IP แบบ IPv4",
                cidrv6: "ช่วง IP แบบ IPv6",
                base64: "ข้อความแบบ Base64",
                base64url: "ข้อความแบบ Base64 สำหรับ URL",
                json_string: "ข้อความแบบ JSON",
                e164: "เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",
                credit_card: "หมายเลขบัตรเครดิต",
                currency_code: "รหัสสกุลเงิน",
                iban: "IBAN",
                jwt: "โทเคน JWT",
                template_literal: "ข้อมูลที่ป้อน"
            }, i = {
                nan: "NaN",
                number: "ตัวเลข",
                array: "อาร์เรย์ (Array)",
                null: "ไม่มีค่า (null)"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น instanceof ${A.expected} แต่ได้รับ ${r}`;
                            return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${e} แต่ได้รับ ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `ค่าไม่ถูกต้อง: ควรเป็น ${h.stringifyPrimitive(A.values[0])}`;
                        return `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "ไม่เกิน" : "น้อยกว่า",
                                i = e[A.origin] ? ? null;
                            if (i) return `เกินกำหนด: ${A.origin??"ค่า"} ควรมี${t} ${A.maximum.toString()} ${i.unit??"รายการ"}`;
                            return `เกินกำหนด: ${A.origin??"ค่า"} ควรมี${t} ${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? "อย่างน้อย" : "มากกว่า",
                                i = e[A.origin] ? ? null;
                            if (i) return `น้อยกว่ากำหนด: ${A.origin} ควรมี${t} ${A.minimum.toString()} ${i.unit}`;
                            return `น้อยกว่ากำหนด: ${A.origin} ควรมี${t} ${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${A.prefix}"`;
                        if ("ends_with" === A.format) return `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${A.suffix}"`;
                        if ("includes" === A.format) return `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${A.includes}" อยู่ในข้อความ`;
                        if ("regex" === A.format) return `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${A.pattern}`;
                        return `รูปแบบไม่ถูกต้อง: ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${A.divisor} ได้ลงตัว`;
                    case "unrecognized_keys":
                        return `พบคีย์ที่ไม่รู้จัก: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `คีย์ไม่ถูกต้องใน ${A.origin}`;
                    case "invalid_union":
                        return "ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";
                    case "invalid_element":
                        return `ข้อมูลไม่ถูกต้องใน ${A.origin}`;
                    default:
                        return "ข้อมูลไม่ถูกต้อง"
                }
            })
        }
    }, "tk", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "simwol",
                    verb: "bolmaly"
                },
                file: {
                    unit: "baýt",
                    verb: "bolmaly"
                },
                array: {
                    unit: "elementler",
                    verb: "bolmaly"
                },
                set: {
                    unit: "elementler",
                    verb: "bolmaly"
                },
                map: {
                    unit: "elementler",
                    verb: "bolmaly"
                }
            }, t = {
                regex: "giriş",
                email: "e-poçta salgysy",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO sene we wagt",
                date: "ISO sene",
                time: "ISO wagt",
                duration: "ISO wagt aralygy",
                ipv4: "IPv4 salgysy",
                ipv6: "IPv6 salgysy",
                mac: "MAC salgysy",
                cidrv4: "IPv4 aralygy",
                cidrv6: "IPv6 aralygy",
                base64: "base64 bilen şifrlenen setir",
                base64url: "base64url bilen şifrlenen setir",
                json_string: "JSON setiri",
                e164: "E.164 nomeri",
                credit_card: "kredit kartynyň nomeri",
                currency_code: "walýuta kody",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "şablon"
            }, i = {
                nan: "NaN"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            return `N\xe4dogry baha: garaşylan ${e} \xfderine ${r} alyndy`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `N\xe4dogry baha: ${h.stringifyPrimitive(A.values[0])} bolmaly`;
                        return `N\xe4dogry sa\xfdlaw: aşakdakylardan biri bolmaly: ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `Has uly: garaşyl\xfdan ${A.origin??"baha"} ${t} ${A.maximum.toString()} ${i.unit??"element"}`;
                            return `Has uly: garaşyl\xfdan ${A.origin??"baha"} ${t} ${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `Has ki\xe7i: garaşyl\xfdan ${A.origin} ${t} ${A.minimum.toString()} ${i.unit}`;
                            return `Has ki\xe7i: garaşyl\xfdan ${A.origin} ${t} ${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `N\xe4dogry setir: "${A.prefix}" bilen başlamaly`;
                        if ("ends_with" === A.format) return `N\xe4dogry setir: "${A.suffix}" bilen gutarmaly`;
                        if ("includes" === A.format) return `N\xe4dogry setir: "${A.includes}" saklamaly`;
                        if ("regex" === A.format) return `N\xe4dogry setir: ${A.pattern} nusga la\xfdyk bolmaly`;
                        return `N\xe4dogry ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `N\xe4dogry san: ${A.divisor} bilen galyndysyz b\xf6l\xfcnmeli`;
                    case "unrecognized_keys":
                        return `Tanalma\xfdan a\xe7ar${A.keys.length>1?"lar":""}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `${A.origin} i\xe7inde n\xe4dogry a\xe7ar`;
                    case "invalid_union":
                    default:
                        return "Nädogry baha";
                    case "invalid_element":
                        return `${A.origin} i\xe7inde n\xe4dogry baha`
                }
            })
        }
    }, "tr", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "karakter",
                    verb: "olmalı"
                },
                file: {
                    unit: "bayt",
                    verb: "olmalı"
                },
                array: {
                    unit: "öğe",
                    verb: "olmalı"
                },
                set: {
                    unit: "öğe",
                    verb: "olmalı"
                },
                map: {
                    unit: "öğe",
                    verb: "olmalı"
                }
            }, t = {
                regex: "girdi",
                email: "e-posta adresi",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO tarih ve saat",
                date: "ISO tarih",
                time: "ISO saat",
                duration: "ISO süre",
                ipv4: "IPv4 adresi",
                ipv6: "IPv6 adresi",
                mac: "MAC adresi",
                cidrv4: "IPv4 aralığı",
                cidrv6: "IPv6 aralığı",
                base64: "base64 ile şifrelenmiş metin",
                base64url: "base64url ile şifrelenmiş metin",
                json_string: "JSON dizesi",
                e164: "E.164 sayısı",
                credit_card: "kredi kartı numarası",
                currency_code: "para birimi kodu",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "Şablon dizesi"
            }, i = {
                nan: "NaN"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `Ge\xe7ersiz değer: beklenen instanceof ${A.expected}, alınan ${r}`;
                            return `Ge\xe7ersiz değer: beklenen ${e}, alınan ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Ge\xe7ersiz değer: beklenen ${h.stringifyPrimitive(A.values[0])}`;
                        return `Ge\xe7ersiz se\xe7enek: aşağıdakilerden biri olmalı: ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `\xc7ok b\xfcy\xfck: beklenen ${A.origin??"değer"} ${t}${A.maximum.toString()} ${i.unit??"öğe"}`;
                            return `\xc7ok b\xfcy\xfck: beklenen ${A.origin??"değer"} ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `\xc7ok k\xfc\xe7\xfck: beklenen ${A.origin} ${t}${A.minimum.toString()} ${i.unit}`;
                            return `\xc7ok k\xfc\xe7\xfck: beklenen ${A.origin} ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `Ge\xe7ersiz metin: "${A.prefix}" ile başlamalı`;
                        if ("ends_with" === A.format) return `Ge\xe7ersiz metin: "${A.suffix}" ile bitmeli`;
                        if ("includes" === A.format) return `Ge\xe7ersiz metin: "${A.includes}" i\xe7ermeli`;
                        if ("regex" === A.format) return `Ge\xe7ersiz metin: ${A.pattern} desenine uymalı`;
                        return `Ge\xe7ersiz ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `Ge\xe7ersiz sayı: ${A.divisor} ile tam b\xf6l\xfcnebilmeli`;
                    case "unrecognized_keys":
                        return `Tanınmayan anahtar${A.keys.length>1?"lar":""}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `${A.origin} i\xe7inde ge\xe7ersiz anahtar`;
                    case "invalid_union":
                    default:
                        return "Geçersiz değer";
                    case "invalid_element":
                        return `${A.origin} i\xe7inde ge\xe7ersiz değer`
                }
            })
        }
    }, "ua", 0, function() {
        return V()
    }, "uk", 0, V, "ur", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "حروف",
                    verb: "ہونا"
                },
                file: {
                    unit: "بائٹس",
                    verb: "ہونا"
                },
                array: {
                    unit: "آئٹمز",
                    verb: "ہونا"
                },
                set: {
                    unit: "آئٹمز",
                    verb: "ہونا"
                },
                map: {
                    unit: "آئٹمز",
                    verb: "ہونا"
                }
            }, t = {
                regex: "ان پٹ",
                email: "ای میل ایڈریس",
                url: "یو آر ایل",
                emoji: "ایموجی",
                uuid: "یو یو آئی ڈی",
                uuidv4: "یو یو آئی ڈی وی 4",
                uuidv6: "یو یو آئی ڈی وی 6",
                nanoid: "نینو آئی ڈی",
                guid: "جی یو آئی ڈی",
                cuid: "سی یو آئی ڈی",
                cuid2: "سی یو آئی ڈی 2",
                ulid: "یو ایل آئی ڈی",
                xid: "ایکس آئی ڈی",
                ksuid: "کے ایس یو آئی ڈی",
                datetime: "آئی ایس او ڈیٹ ٹائم",
                date: "آئی ایس او تاریخ",
                time: "آئی ایس او وقت",
                duration: "آئی ایس او مدت",
                ipv4: "آئی پی وی 4 ایڈریس",
                ipv6: "آئی پی وی 6 ایڈریس",
                mac: "ایم اے سی ایڈریس",
                cidrv4: "آئی پی وی 4 رینج",
                cidrv6: "آئی پی وی 6 رینج",
                base64: "بیس 64 ان کوڈڈ سٹرنگ",
                base64url: "بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",
                json_string: "جے ایس او این سٹرنگ",
                e164: "ای 164 نمبر",
                credit_card: "کریڈٹ کارڈ نمبر",
                currency_code: "کرنسی کوڈ",
                iban: "IBAN",
                jwt: "جے ڈبلیو ٹی",
                template_literal: "ان پٹ"
            }, i = {
                nan: "NaN",
                number: "نمبر",
                array: "آرے",
                null: "نل"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `غلط ان پٹ: instanceof ${A.expected} متوقع تھا، ${r} موصول ہوا`;
                            return `غلط ان پٹ: ${e} متوقع تھا، ${r} موصول ہوا`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `غلط ان پٹ: ${h.stringifyPrimitive(A.values[0])} متوقع تھا`;
                        return `غلط آپشن: ${h.joinValues(A.values,"|")} میں سے ایک متوقع تھا`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `بہت بڑا: ${A.origin??"ویلیو"} کے ${t}${A.maximum.toString()} ${i.unit??"عناصر"} ہونے متوقع تھے`;
                            return `بہت بڑا: ${A.origin??"ویلیو"} کا ${t}${A.maximum.toString()} ہونا متوقع تھا`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `بہت چھوٹا: ${A.origin} کے ${t}${A.minimum.toString()} ${i.unit} ہونے متوقع تھے`;
                            return `بہت چھوٹا: ${A.origin} کا ${t}${A.minimum.toString()} ہونا متوقع تھا`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `غلط سٹرنگ: "${A.prefix}" سے شروع ہونا چاہیے`;
                        if ("ends_with" === A.format) return `غلط سٹرنگ: "${A.suffix}" پر ختم ہونا چاہیے`;
                        if ("includes" === A.format) return `غلط سٹرنگ: "${A.includes}" شامل ہونا چاہیے`;
                        if ("regex" === A.format) return `غلط سٹرنگ: پیٹرن ${A.pattern} سے میچ ہونا چاہیے`;
                        return `غلط ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `غلط نمبر: ${A.divisor} کا مضاعف ہونا چاہیے`;
                    case "unrecognized_keys":
                        return `غیر تسلیم شدہ کی${A.keys.length>1?"ز":""}: ${h.joinValues(A.keys,"، ")}`;
                    case "invalid_key":
                        return `${A.origin} میں غلط کی`;
                    case "invalid_union":
                    default:
                        return "غلط ان پٹ";
                    case "invalid_element":
                        return `${A.origin} میں غلط ویلیو`
                }
            })
        }
    }, "uz", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "belgi",
                    verb: "bo‘lishi kerak"
                },
                file: {
                    unit: "bayt",
                    verb: "bo‘lishi kerak"
                },
                array: {
                    unit: "element",
                    verb: "bo‘lishi kerak"
                },
                set: {
                    unit: "element",
                    verb: "bo‘lishi kerak"
                },
                map: {
                    unit: "yozuv",
                    verb: "bo‘lishi kerak"
                }
            }, t = {
                regex: "kirish",
                email: "elektron pochta manzili",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO sana va vaqti",
                date: "ISO sana",
                time: "ISO vaqt",
                duration: "ISO davomiylik",
                ipv4: "IPv4 manzil",
                ipv6: "IPv6 manzil",
                mac: "MAC manzil",
                cidrv4: "IPv4 diapazon",
                cidrv6: "IPv6 diapazon",
                base64: "base64 kodlangan satr",
                base64url: "base64url kodlangan satr",
                json_string: "JSON satr",
                e164: "E.164 raqam",
                credit_card: "kredit karta raqami",
                currency_code: "valyuta kodi",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "kirish"
            }, i = {
                nan: "NaN",
                number: "raqam",
                array: "massiv"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `Noto‘g‘ri kirish: kutilgan instanceof ${A.expected}, qabul qilingan ${r}`;
                            return `Noto‘g‘ri kirish: kutilgan ${e}, qabul qilingan ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Noto‘g‘ri kirish: kutilgan ${h.stringifyPrimitive(A.values[0])}`;
                        return `Noto‘g‘ri variant: quyidagilardan biri kutilgan ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `Juda katta: kutilgan ${A.origin??"qiymat"} ${t}${A.maximum.toString()} ${i.unit} ${i.verb}`;
                            return `Juda katta: kutilgan ${A.origin??"qiymat"} ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `Juda kichik: kutilgan ${A.origin} ${t}${A.minimum.toString()} ${i.unit} ${i.verb}`;
                            return `Juda kichik: kutilgan ${A.origin} ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `Noto‘g‘ri satr: "${A.prefix}" bilan boshlanishi kerak`;
                        if ("ends_with" === A.format) return `Noto‘g‘ri satr: "${A.suffix}" bilan tugashi kerak`;
                        if ("includes" === A.format) return `Noto‘g‘ri satr: "${A.includes}" ni o‘z ichiga olishi kerak`;
                        if ("regex" === A.format) return `Noto‘g‘ri satr: ${A.pattern} shabloniga mos kelishi kerak`;
                        return `Noto‘g‘ri ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `Noto‘g‘ri raqam: ${A.divisor} ning karralisi bo‘lishi kerak`;
                    case "unrecognized_keys":
                        return `Noma’lum kalit${A.keys.length>1?"lar":""}: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `${A.origin} dagi kalit noto‘g‘ri`;
                    case "invalid_union":
                    default:
                        return "Noto‘g‘ri kirish";
                    case "invalid_element":
                        return `${A.origin} da noto‘g‘ri qiymat`
                }
            })
        }
    }, "vi", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "ký tự",
                    verb: "có"
                },
                file: {
                    unit: "byte",
                    verb: "có"
                },
                array: {
                    unit: "phần tử",
                    verb: "có"
                },
                set: {
                    unit: "phần tử",
                    verb: "có"
                },
                map: {
                    unit: "phần tử",
                    verb: "có"
                }
            }, t = {
                regex: "đầu vào",
                email: "địa chỉ email",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ngày giờ ISO",
                date: "ngày ISO",
                time: "giờ ISO",
                duration: "khoảng thời gian ISO",
                ipv4: "địa chỉ IPv4",
                ipv6: "địa chỉ IPv6",
                mac: "địa chỉ MAC",
                cidrv4: "dải IPv4",
                cidrv6: "dải IPv6",
                base64: "chuỗi mã hóa base64",
                base64url: "chuỗi mã hóa base64url",
                json_string: "chuỗi JSON",
                e164: "số E.164",
                credit_card: "số thẻ tín dụng",
                currency_code: "mã tiền tệ",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "đầu vào"
            }, i = {
                nan: "NaN",
                number: "số",
                array: "mảng"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `Đầu v\xe0o kh\xf4ng hợp lệ: mong đợi instanceof ${A.expected}, nhận được ${r}`;
                            return `Đầu v\xe0o kh\xf4ng hợp lệ: mong đợi ${e}, nhận được ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `Đầu v\xe0o kh\xf4ng hợp lệ: mong đợi ${h.stringifyPrimitive(A.values[0])}`;
                        return `T\xf9y chọn kh\xf4ng hợp lệ: mong đợi một trong c\xe1c gi\xe1 trị ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `Qu\xe1 lớn: mong đợi ${A.origin??"giá trị"} ${i.verb} ${t}${A.maximum.toString()} ${i.unit??"phần tử"}`;
                            return `Qu\xe1 lớn: mong đợi ${A.origin??"giá trị"} ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `Qu\xe1 nhỏ: mong đợi ${A.origin} ${i.verb} ${t}${A.minimum.toString()} ${i.unit}`;
                            return `Qu\xe1 nhỏ: mong đợi ${A.origin} ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `Chuỗi kh\xf4ng hợp lệ: phải bắt đầu bằng "${A.prefix}"`;
                        if ("ends_with" === A.format) return `Chuỗi kh\xf4ng hợp lệ: phải kết th\xfac bằng "${A.suffix}"`;
                        if ("includes" === A.format) return `Chuỗi kh\xf4ng hợp lệ: phải bao gồm "${A.includes}"`;
                        if ("regex" === A.format) return `Chuỗi kh\xf4ng hợp lệ: phải khớp với mẫu ${A.pattern}`;
                        return `${t[A.format]??A.format} kh\xf4ng hợp lệ`;
                    case "not_multiple_of":
                        return `Số kh\xf4ng hợp lệ: phải l\xe0 bội số của ${A.divisor}`;
                    case "unrecognized_keys":
                        return `Kh\xf3a kh\xf4ng được nhận dạng: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `Kh\xf3a kh\xf4ng hợp lệ trong ${A.origin}`;
                    case "invalid_union":
                    default:
                        return "Đầu vào không hợp lệ";
                    case "invalid_element":
                        return `Gi\xe1 trị kh\xf4ng hợp lệ trong ${A.origin}`
                }
            })
        }
    }, "yo", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "àmi",
                    verb: "ní"
                },
                file: {
                    unit: "bytes",
                    verb: "ní"
                },
                array: {
                    unit: "nkan",
                    verb: "ní"
                },
                set: {
                    unit: "nkan",
                    verb: "ní"
                },
                map: {
                    unit: "nkan",
                    verb: "ní"
                }
            }, t = {
                regex: "ẹ̀rọ ìbáwọlé",
                email: "àdírẹ́sì ìmẹ́lì",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "àkókò ISO",
                date: "ọjọ́ ISO",
                time: "àkókò ISO",
                duration: "àkókò tó pé ISO",
                ipv4: "àdírẹ́sì IPv4",
                ipv6: "àdírẹ́sì IPv6",
                mac: "àdírẹ́sì MAC",
                cidrv4: "àgbègbè IPv4",
                cidrv6: "àgbègbè IPv6",
                base64: "ọ̀rọ̀ tí a kọ́ ní base64",
                base64url: "ọ̀rọ̀ base64url",
                json_string: "ọ̀rọ̀ JSON",
                e164: "nọ́mbà E.164",
                credit_card: "nọmba kaadi gbese",
                currency_code: "koodu owó",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "ẹ̀rọ ìbáwọlé"
            }, i = {
                nan: "NaN",
                number: "nọ́mbà",
                array: "akopọ"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `\xccb\xe1wọl\xe9 aṣ\xecṣe: a n\xed l\xe1ti fi instanceof ${A.expected}, \xe0mọ̀ a r\xed ${r}`;
                            return `\xccb\xe1wọl\xe9 aṣ\xecṣe: a n\xed l\xe1ti fi ${e}, \xe0mọ̀ a r\xed ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `\xccb\xe1wọl\xe9 aṣ\xecṣe: a n\xed l\xe1ti fi ${h.stringifyPrimitive(A.values[0])}`;
                        return `\xc0ṣ\xe0y\xe0n aṣ\xecṣe: yan ọ̀kan l\xe1ra ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `T\xf3 pọ̀ j\xf9: a n\xed l\xe1ti jẹ́ p\xe9 ${A.origin??"iye"} ${i.verb} ${t}${A.maximum} ${i.unit}`;
                            return `T\xf3 pọ̀ j\xf9: a n\xed l\xe1ti jẹ́ ${t}${A.maximum}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `K\xe9r\xe9 ju: a n\xed l\xe1ti jẹ́ p\xe9 ${A.origin} ${i.verb} ${t}${A.minimum} ${i.unit}`;
                            return `K\xe9r\xe9 ju: a n\xed l\xe1ti jẹ́ ${t}${A.minimum}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀l\xfa "${A.prefix}"`;
                        if ("ends_with" === A.format) return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ par\xed pẹ̀l\xfa "${A.suffix}"`;
                        if ("includes" === A.format) return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ n\xed "${A.includes}"`;
                        if ("regex" === A.format) return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ b\xe1 \xe0pẹẹrẹ mu ${A.pattern}`;
                        return `Aṣ\xecṣe: ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `Nọ́mb\xe0 aṣ\xecṣe: gbọ́dọ̀ jẹ́ \xe8y\xe0 p\xedp\xedn ti ${A.divisor}`;
                    case "unrecognized_keys":
                        return `Bọt\xecn\xec \xe0\xecmọ̀: ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `Bọt\xecn\xec aṣ\xecṣe n\xedn\xfa ${A.origin}`;
                    case "invalid_union":
                    default:
                        return "Ìbáwọlé aṣìṣe";
                    case "invalid_element":
                        return `Iye aṣ\xecṣe n\xedn\xfa ${A.origin}`
                }
            })
        }
    }, "zhCN", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "字符",
                    verb: "包含"
                },
                file: {
                    unit: "字节",
                    verb: "包含"
                },
                array: {
                    unit: "项",
                    verb: "包含"
                },
                set: {
                    unit: "项",
                    verb: "包含"
                },
                map: {
                    unit: "项",
                    verb: "包含"
                }
            }, t = {
                regex: "输入",
                email: "电子邮件",
                url: "URL",
                emoji: "表情符号",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO日期时间",
                date: "ISO日期",
                time: "ISO时间",
                duration: "ISO时长",
                ipv4: "IPv4地址",
                ipv6: "IPv6地址",
                mac: "MAC地址",
                cidrv4: "IPv4网段",
                cidrv6: "IPv6网段",
                base64: "base64编码字符串",
                base64url: "base64url编码字符串",
                json_string: "JSON字符串",
                e164: "E.164号码",
                credit_card: "信用卡号",
                currency_code: "货币代码",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "输入"
            }, i = {
                nan: "NaN",
                number: "数字",
                array: "数组",
                null: "空值(null)"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `无效输入：期望 instanceof ${A.expected}，实际接收 ${r}`;
                            return `无效输入：期望 ${e}，实际接收 ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `无效输入：期望 ${h.stringifyPrimitive(A.values[0])}`;
                        return `无效选项：期望以下之一 ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `数值过大：期望 ${A.origin??"值"} ${t}${A.maximum.toString()} ${i.unit??"个元素"}`;
                            return `数值过大：期望 ${A.origin??"值"} ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `数值过小：期望 ${A.origin} ${t}${A.minimum.toString()} ${i.unit}`;
                            return `数值过小：期望 ${A.origin} ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `无效字符串：必须以 "${A.prefix}" 开头`;
                        if ("ends_with" === A.format) return `无效字符串：必须以 "${A.suffix}" 结尾`;
                        if ("includes" === A.format) return `无效字符串：必须包含 "${A.includes}"`;
                        if ("regex" === A.format) return `无效字符串：必须满足正则表达式 ${A.pattern}`;
                        return `无效${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `无效数字：必须是 ${A.divisor} 的倍数`;
                    case "unrecognized_keys":
                        return `出现未知的键(key): ${h.joinValues(A.keys,", ")}`;
                    case "invalid_key":
                        return `${A.origin} 中的键(key)无效`;
                    case "invalid_union":
                    default:
                        return "无效输入";
                    case "invalid_element":
                        return `${A.origin} 中包含无效值(value)`
                }
            })
        }
    }, "zhTW", 0, function() {
        let e, t, i;
        return {
            localeError: (e = {
                string: {
                    unit: "字元",
                    verb: "擁有"
                },
                file: {
                    unit: "位元組",
                    verb: "擁有"
                },
                array: {
                    unit: "項目",
                    verb: "擁有"
                },
                set: {
                    unit: "項目",
                    verb: "擁有"
                },
                map: {
                    unit: "項目",
                    verb: "擁有"
                }
            }, t = {
                regex: "輸入",
                email: "郵件地址",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO 日期時間",
                date: "ISO 日期",
                time: "ISO 時間",
                duration: "ISO 期間",
                ipv4: "IPv4 位址",
                ipv6: "IPv6 位址",
                mac: "MAC 位址",
                cidrv4: "IPv4 範圍",
                cidrv6: "IPv6 範圍",
                base64: "base64 編碼字串",
                base64url: "base64url 編碼字串",
                json_string: "JSON 字串",
                e164: "E.164 數值",
                credit_card: "信用卡號",
                currency_code: "貨幣代碼",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "輸入"
            }, i = {
                nan: "NaN"
            }, A => {
                switch (A.code) {
                    case "invalid_type":
                        {
                            let e = i[A.expected] ? ? A.expected,
                                t = h.parsedType(A.input),
                                r = i[t] ? ? t;
                            if (/^[A-Z]/.test(A.expected)) return `無效的輸入值：預期為 instanceof ${A.expected}，但收到 ${r}`;
                            return `無效的輸入值：預期為 ${e}，但收到 ${r}`
                        }
                    case "invalid_value":
                        if (1 === A.values.length) return `無效的輸入值：預期為 ${h.stringifyPrimitive(A.values[0])}`;
                        return `無效的選項：預期為以下其中之一 ${h.joinValues(A.values,"|")}`;
                    case "too_big":
                        {
                            let t = A.inclusive ? "<=" : "<",
                                i = e[A.origin] ? ? null;
                            if (i) return `數值過大：預期 ${A.origin??"值"} 應為 ${t}${A.maximum.toString()} ${i.unit??"個元素"}`;
                            return `數值過大：預期 ${A.origin??"值"} 應為 ${t}${A.maximum.toString()}`
                        }
                    case "too_small":
                        {
                            let t = A.inclusive ? ">=" : ">",
                                i = e[A.origin] ? ? null;
                            if (i) return `數值過小：預期 ${A.origin} 應為 ${t}${A.minimum.toString()} ${i.unit}`;
                            return `數值過小：預期 ${A.origin} 應為 ${t}${A.minimum.toString()}`
                        }
                    case "invalid_format":
                        if ("starts_with" === A.format) return `無效的字串：必須以 "${A.prefix}" 開頭`;
                        if ("ends_with" === A.format) return `無效的字串：必須以 "${A.suffix}" 結尾`;
                        if ("includes" === A.format) return `無效的字串：必須包含 "${A.includes}"`;
                        if ("regex" === A.format) return `無效的字串：必須符合格式 ${A.pattern}`;
                        return `無效的 ${t[A.format]??A.format}`;
                    case "not_multiple_of":
                        return `無效的數字：必須為 ${A.divisor} 的倍數`;
                    case "unrecognized_keys":
                        return `無法識別的鍵值${A.keys.length>1?"們":""}：${h.joinValues(A.keys,"、")}`;
                    case "invalid_key":
                        return `${A.origin} 中有無效的鍵值`;
                    case "invalid_union":
                    default:
                        return "無效的輸入值";
                    case "invalid_element":
                        return `${A.origin} 中有無效的值`
                }
            })
        }
    }], 331835);
    var M = e.i(331835),
        H = e.i(465418),
        J = e.i(309995);
    let F = Symbol.for("zod.compile.invalid"),
        G = Symbol.for("zod.compile.fallback");
    class W extends Error {
        constructor(e = "z.compile does not support async refinements, transforms, or checks") {
            super(e), this.name = "ZodCompileAsyncError"
        }
    }
    class X extends Error {
        constructor(e, t = !0) {
            super(`z.compile does not support ${e}; this schema must use the runtime parser`), this.name = "ZodCompileUnsupportedError", this.islandable = t
        }
    }

    function K(e, t) {
        try {
            let t = Y(e),
                i = q(e, t);
            return i._zod.bag.validator = function(e, t) {
                try {
                    return Y(e, {
                        assertOnly: !0
                    })
                } catch {
                    return t
                }
            }(e, t), i
        } catch (i) {
            if (t ? .strict) throw i;
            return e
        }
    }

    function q(e, t) {
        if (w(e)) throw new X("a schema whose subtree contains a reference cycle");
        let i = h.clone(e),
            A = e._zod.run,
            r = A.__originalRun ? ? A,
            a = (e, i) => {
                if (i ? .async || i ? .direction === "backward" || i ? .skipChecks || i ? .[G] || i && B(i, e.value)) return r(e, i);
                let A = t(e.value);
                return A !== F ? (e.value = A, e) : (i && (i[G] = !0), r(e, i))
            };
        return a.__originalRun = r, i._zod.bag.fallbackRun = r, i._zod.bag.validator = t, i._zod.run = a, A.__originalRun || function(e, t, i) {
            if ("function" == typeof t.safeParse) {
                let A = t.safeParse;
                e.safeParse = (e, t) => {
                    let r = i(e);
                    return r !== F ? {
                        success: !0,
                        data: r
                    } : A(e, t)
                }
            }
            if ("function" == typeof t.parse) {
                let A = t.parse;
                e.parse = (e, t) => {
                    let r = i(e);
                    return r !== F ? r : A(e, t)
                }
            }
        }(i, e, t), i
    }

    function Y(e, t) {
        let i, A = !0;
        try {
            A = w(e)
        } catch {}
        if (A) throw new X("a schema whose subtree contains a reference cycle");
        let r = {
                constants: new Map,
                constantCounter: 0,
                varCounter: 0,
                definite: !0
            },
            a = new J.Doc(["input"]),
            n = eg(a, r, e, "input", !t ? .assertOnly);
        a.write(null === n ? "return true;" : `return ${n};`);
        let o = ["INVALID", ...r.constants.keys()],
            s = [F, ...r.constants.values()],
            l = a.content.join("\n"),
            d = t ? .debug ? o.length > 0 ? `// Constants: ${o.join(", ")}
${l}` : l : "",
            u = Function,
            c = `return (input) => {
${l}
}`;
        try {
            i = new u(...o, c)(...s)
        } catch (e) {
            throw new X(`this schema (generated code failed to evaluate: ${e.message})`)
        }
        return t ? .debug && (i.code = d), i.definite = r.definite, i
    }

    function ee(e, t) {
        for (let [i, A] of e.constants)
            if (A === t) return i;
        let i = `c${e.constantCounter++}`;
        return e.constants.set(i, t), i
    }

    function et(e, t) {
        return e.definite = !1, ee(e, t)
    }

    function ei(e) {
        return `v${e.varCounter++}`
    }

    function eA(e, t) {
        let i = e._zod.run({
            value: t,
            issues: []
        }, {});
        return i && "function" == typeof i.then ? F : 0 === i.issues.length ? i.value : F
    }

    function er(e, t, i, A, r = !0) {
        let a = e.content.length,
            n = t.constants.size,
            o = t.constantCounter,
            s = t.varCounter;
        try {
            return eg(e, t, i, A, r)
        } catch (p) {
            var l, d, u, c;
            let r, m, g;
            if (!(p instanceof X) || !p.islandable) throw p;
            if (e.content.length = a, t.constants.size > n)
                for (let e of Array.from(t.constants.keys()).slice(n)) t.constants.delete(e);
            return t.constantCounter = o, t.varCounter = s, l = e, d = t, u = i, c = A, d.definite = !1, r = ee(d, u), m = ee(d, eA), g = ei(d), l.write(`const ${g} = ${m}(${r}, ${c});`), l.write(`if (${g} === INVALID) return INVALID;`), g
        }
    }
    let ea = new Set(["max_size", "min_size", "size_equals", "max_length", "min_length", "length_equals"]);

    function en(e, t, i, A) {
        let r = ee(t, h.codePointLength),
            a = ei(t);
        return e.write(`const ${a} = typeof ${i} === "string" && ${A} ? ${r}(${i}) : ${i}.length;`), a
    }

    function eo(e, t) {
        if ("number" != typeof e || !Number.isFinite(e)) throw new X(`${t} bound of type ${typeof e}`);
        return `${e}`
    }

    function es(e, t) {
        if ("bigint" == typeof t) return `${t}n`;
        if ("number" == typeof t) {
            if (Number.isNaN(t)) throw new X("comparison check with NaN bound");
            return `${t}`
        }
        if (t instanceof Date) {
            if (Number.isNaN(t.getTime())) throw new X("comparison check with Invalid Date bound");
            return ee(e, t)
        }
        throw new X(`comparison check bound of type ${typeof t}`)
    }

    function el(e, t, i) {
        let A = t.format;
        switch (A) {
            case "safeint":
                e.write(`if (!Number.isSafeInteger(${i})) return INVALID;`);
                break;
            case "int32":
                e.write(`if (!Number.isInteger(${i}) || ${i} < -2147483648 || ${i} > 2147483647) return INVALID;`);
                break;
            case "uint32":
                e.write(`if (!Number.isInteger(${i}) || ${i} < 0 || ${i} > 4294967295) return INVALID;`);
                break;
            case "float32":
                e.write(`if (!Number.isFinite(${i}) || ${i} < -3.4028234663852886e38 || ${i} > 3.4028234663852886e38) return INVALID;`);
                break;
            case "float64":
                e.write(`if (!Number.isFinite(${i})) return INVALID;`);
                break;
            default:
                throw new X(`number format ${A}`)
        }
    }

    function ed() {
        throw new g.$ZodAsyncError
    }

    function eu(e) {
        this.issues.push(e)
    }
    let ec = new Set(["cidrv4", "cuid", "cuid2", "date", "datetime", "duration", "e164", "email", "emoji", "ends_with", "guid", "includes", "ipv4", "ksuid", "lowercase", "mac", "nanoid", "regex", "starts_with", "time", "ulid", "uppercase", "uuid", "xid"]);

    function em(e, t, i, A, r = !0) {
        let a = i.format;
        if ("base64" === a) {
            let i = ee(t, v.isValidBase64);
            return e.write(`if (!${i}(${A})) return INVALID;`), A
        }
        if ("base64url" === a) {
            let i = ee(t, v.isValidBase64URL);
            return e.write(`if (!${i}(${A})) return INVALID;`), A
        }
        if ("jwt" === a) {
            let r = ee(t, v.isValidJWT),
                a = ee(t, i.alg ? ? null);
            return e.write(`if (!${r}(${A}, ${a})) return INVALID;`), A
        }
        if ("ipv6" === a) {
            let i = ee(t, v.isValidIPv6);
            return e.write(`if (!${i}(${A})) return INVALID;`), A
        }
        if ("cidrv6" === a) {
            let i = ee(t, v.isValidCIDRv6);
            return e.write(`if (!${i}(${A})) return INVALID;`), A
        }
        if ("credit_card" === a) {
            let i = ee(t, v.isValidCreditCard);
            return e.write(`if (!${i}(${A})) return INVALID;`), A
        }
        if ("iban" === a) {
            let i = ee(t, v.isValidIBAN);
            return e.write(`if (!${i}(${A})) return INVALID;`), A
        }
        if ("url" === a || "httpurl" === a || i.normalize || void 0 !== i.hostname || void 0 !== i.protocol) {
            let a = ee(t, v.validateURL),
                n = ee(t, i),
                o = ei(t),
                s = ei(t);
            if (e.write(`const ${o} = ${A}.trim();`), e.write(`const ${s} = ${a}(${o}, ${n});`), e.write(`if (typeof ${s} === "number") return INVALID;`), void 0 !== i.hostname) {
                let i = ee(t, v.urlHostnameOk);
                e.write(`if (!${i}(${s}, ${n}.hostname)) return INVALID;`)
            }
            if (void 0 !== i.protocol) {
                let i = ee(t, v.urlProtocolOk);
                e.write(`if (!${i}(${s}, ${n}.protocol)) return INVALID;`)
            }
            if (!r) return null;
            let l = ei(t),
                d = i.normalize ? `${s}.href` : `${ee(t,v.stripTabAndNewline)}(${o})`;
            return e.write(`const ${l} = ${d};`), l
        }
        let n = i.fn;
        if (n) {
            if (e$(n)) throw new X(`async string format ${a}`);
            let i = ee(t, n);
            return e.write(`if (!${i}(${A})) return INVALID;`), A
        }
        if (ec.has(a) && i.pattern) {
            let r = ee(t, i.pattern);
            return e.write(`${r}.lastIndex = 0;`), e.write(`if (!${r}.test(${A})) return INVALID;`), A
        }
        let o = i.format;
        switch (o) {
            case "regex":
                throw new X("regex format without a pattern");
            case "lowercase":
                e.write(`if (${A} !== ${A}.toLowerCase()) return INVALID;`);
                break;
            case "uppercase":
                e.write(`if (${A} !== ${A}.toUpperCase()) return INVALID;`);
                break;
            case "includes":
                e.write(`if (!${A}.includes(${h.esc(i.includes)})) return INVALID;`);
                break;
            case "starts_with":
                {
                    let t = i.prefix;e.write(`if (${A}.slice(0, ${t.length}) !== ${h.esc(t)}) return INVALID;`);
                    break
                }
            case "ends_with":
                {
                    let t = i.suffix;e.write(`if (${A}.slice(-${t.length}) !== ${h.esc(t)}) return INVALID;`);
                    break
                }
            default:
                throw new X(`string format ${o}`)
        }
        return A
    }

    function eg(e, t, i, A, r = !0) {
        var a, n, o, s, l, d, u, c, m, g, p, f, b, $, I, y, _, x, k, w, D, U, C, B, S, E, P, N, R, T, Z, L, Q, z, j, V, M, H, J;
        let G, K = i._zod.def,
            q = K.type;
        if (K.coerce) throw new X(`coercion (z.coerce.${q}())`);
        let eA = r || !!K.checks ? .length;
        switch (q) {
            case "string":
                G = function(e, t, i, A, r = !0) {
                    e.write(`if (typeof ${A} !== "string") return INVALID;`);
                    let a = i._zod.def;
                    return void 0 === a.format ? A : em(e, t, a, A, r)
                }(e, t, i, A, eA);
                break;
            case "number":
                let ec;
                a = e, n = i, o = A, a.write(`if (typeof ${o} !== "number" || !Number.isFinite(${o})) return INVALID;`), "number_format" === (ec = n._zod.def).check && ec.format && el(a, {
                    format: ec.format
                }, o), G = o;
                break;
            case "boolean":
                s = e, l = A, s.write(`if (typeof ${l} !== "boolean") return INVALID;`), G = l;
                break;
            case "bigint":
                G = function(e, t, i) {
                    e.write(`if (typeof ${i} !== "bigint") return INVALID;`);
                    let A = t._zod.def;
                    if (A.format) switch (A.format) {
                        case "int64":
                            e.write(`if (${i} < -9223372036854775808n || ${i} > 9223372036854775807n) return INVALID;`);
                            break;
                        case "uint64":
                            e.write(`if (${i} < 0n || ${i} > 18446744073709551615n) return INVALID;`)
                    }
                    return i
                }(e, i, A);
                break;
            case "symbol":
                d = e, u = A, d.write(`if (typeof ${u} !== "symbol") return INVALID;`), G = u;
                break;
            case "undefined":
                c = e, m = A, c.write(`if (${m} !== undefined) return INVALID;`), G = m;
                break;
            case "null":
                g = e, p = A, g.write(`if (${p} !== null) return INVALID;`), G = p;
                break;
            case "any":
            case "unknown":
                G = A;
                break;
            case "never":
                e.write("return INVALID;"), G = A;
                break;
            case "void":
                f = e, b = A, f.write(`if (${b} !== undefined) return INVALID;`), G = b;
                break;
            case "nan":
                $ = e, I = A, $.write(`if (typeof ${I} !== "number" || !Number.isNaN(${I})) return INVALID;`), G = I;
                break;
            case "date":
                y = e, _ = A, y.write(`if (!(${_} instanceof Date) || Number.isNaN(${_}.getTime())) return INVALID;`), G = _;
                break;
            case "object":
                G = function(e, t, i, A, r = !0) {
                    let a = i._zod.def;
                    e.write(`if (typeof ${A} !== "object" || ${A} === null || Array.isArray(${A})) return INVALID;`);
                    let n = a.shape,
                        o = Object.keys(n),
                        s = Object.getOwnPropertySymbols(n),
                        l = s.length ? [...o, ...s] : o,
                        d = e => "symbol" == typeof e ? ee(t, e) : h.esc(e);
                    if (o.includes("__proto__")) throw new X('object shape key "__proto__"');
                    let u = new Map;
                    for (let i of l) {
                        let a = n[i],
                            o = d(i),
                            s = ei(t);
                        if (e.write(`const ${s} = ${A}[${o}];`), void 0 !== a._zod.optin) {
                            let r = ei(t);
                            e.write(`let ${r} = (() => {`), e.indented(e => {
                                let i = er(e, t, a, s);
                                e.write(`return ${i};`)
                            }), e.write("})();"), "optional" === a._zod.optout ? (e.write(`if (${r} === INVALID) {`), e.indented(e => {
                                e.write(`if (${o} in ${A}) return INVALID;`), e.write(`${r} = undefined;`)
                            }), e.write("}")) : e.write(`if (${r} === INVALID) return INVALID;`), u.set(i, r)
                        } else {
                            var c;
                            void 0 === (c = a)._zod.optin && function e(t) {
                                if (t._zod.def.coerce) return !0;
                                let i = t._zod.def;
                                switch (i.type) {
                                    case "any":
                                    case "unknown":
                                    case "undefined":
                                    case "void":
                                    case "default":
                                    case "prefault":
                                    case "transform":
                                    case "custom":
                                    case "lazy":
                                    case "catch":
                                    default:
                                        return !0;
                                    case "string":
                                    case "number":
                                    case "boolean":
                                    case "bigint":
                                    case "symbol":
                                    case "null":
                                    case "never":
                                    case "nan":
                                    case "date":
                                    case "object":
                                    case "array":
                                    case "tuple":
                                    case "record":
                                    case "map":
                                    case "set":
                                    case "file":
                                    case "template_literal":
                                        return !1;
                                    case "nonoptional":
                                        return !!i.innerType && e(i.innerType);
                                    case "literal":
                                        return !!i.values ? .includes(void 0);
                                    case "enum":
                                        return !!t._zod.values ? .has(void 0);
                                    case "optional":
                                    case "nullable":
                                    case "readonly":
                                    case "success":
                                        return !i.innerType || e(i.innerType);
                                    case "union":
                                        return !i.options || i.options.some(e);
                                    case "intersection":
                                        if (!i.left || !i.right) return !0;
                                        return e(i.left) && e(i.right);
                                    case "pipe":
                                        return !i.in || e(i.in)
                                }
                            }(c) && e.write(`if (!(${o} in ${A})) return INVALID;`);
                            let n = er(e, t, a, s, r);
                            null !== n && u.set(i, n)
                        }
                    }
                    let m = a.catchall,
                        g = "none";
                    if (m) {
                        let t = m._zod.def.type;
                        if ("never" === t) {
                            let t = o.map(e => `k !== ${h.esc(e)}`).join(" && ") || "true";
                            e.write(`for (const k in ${A}) {`), e.indented(e => {
                                e.write(`if (${t}) return INVALID;`)
                            }), e.write("}")
                        } else g = "unknown" !== t && "any" !== t || m._zod.def.checks ? .length ? "schema" : "passthrough"
                    }
                    let p = ei(t),
                        f = l.some(e => ef(n[e]) || ep(n[e]));
                    if (!r) {
                        if ("schema" === g) {
                            let i = o.length > 0 ? ee(t, new Set(o)) : null;
                            e.write(`for (const k in ${A}) {`), e.indented(e => {
                                e.write('if (k === "__proto__") continue;'), i && e.write(`if (${i}.has(k)) continue;`);
                                let r = ei(t);
                                e.write(`const ${r} = ${A}[k];`), er(e, t, m, r, !1)
                            }), e.write("}")
                        }
                        return null
                    }
                    if (f)
                        for (let t of (e.write(`const ${p} = {};`), l)) {
                            let i = d(t),
                                r = u.get(t);
                            ep(n[t]) ? e.write(`if (${i} in ${A}) ${p}[${i}] = ${r};`) : ef(n[t]) ? e.write(`if (${r} !== undefined || ${i} in ${A}) ${p}[${i}] = ${r};`) : e.write(`${p}[${i}] = ${r};`)
                        } else {
                            let t = l.map(e => `${"symbol"==typeof e?`[${d(e)}]`:h.esc(e)}: ${u.get(e)}`).join(", ");
                            e.write(`const ${p} = { ${t} };`)
                        }
                    if ("none" !== g) {
                        let i = o.length > 0 ? ee(t, new Set(o)) : null;
                        e.write(`for (const k in ${A}) {`), e.indented(e => {
                            if (e.write('if (k === "__proto__") continue;'), i && e.write(`if (${i}.has(k)) continue;`), "passthrough" === g) e.write(`${p}[k] = ${A}[k];`);
                            else {
                                let i = ei(t);
                                e.write(`const ${i} = ${A}[k];`);
                                let r = er(e, t, m, i);
                                e.write(`${p}[k] = ${r};`)
                            }
                        }), e.write("}")
                    }
                    return p
                }(e, t, i, A, eA);
                break;
            case "optional":
                G = function(e, t, i, A, r = !0) {
                    var a;
                    let n = i._zod.def;
                    if (a = i, a._zod.traits ? .has("$ZodExactOptional") === !0) return eg(e, t, n.innerType, A, r);
                    if ("defaulted" === n.innerType._zod.optin) {
                        let i = ei(t),
                            r = ei(t);
                        return e.write(`let ${i};`), e.write(`if (${A} === undefined) {`), e.indented(e => {
                            e.write(`const ${r} = (() => {`), e.indented(e => {
                                let i = eg(e, t, n.innerType, A);
                                e.write(`return ${i};`)
                            }), e.write("})();"), e.write(`if (${r} !== INVALID) ${i} = ${r};`)
                        }), e.write("} else {"), e.indented(e => {
                            let r = eg(e, t, n.innerType, A);
                            e.write(`${i} = ${r};`)
                        }), e.write("}"), i
                    }
                    let o = r ? ei(t) : null;
                    return o && e.write(`let ${o};`), e.write(`if (${A} !== undefined) {`), e.indented(e => {
                        let i = eg(e, t, n.innerType, A, r);
                        o && null !== i && e.write(`${o} = ${i};`)
                    }), e.write("}"), o
                }(e, t, i, A, eA);
                break;
            case "nullable":
                G = function(e, t, i, A, r = !0) {
                    let a = i._zod.def,
                        n = r ? ei(t) : null;
                    return n && e.write(`let ${n} = null;`), e.write(`if (${A} !== null) {`), e.indented(e => {
                        let i = eg(e, t, a.innerType, A, r);
                        n && null !== i && e.write(`${n} = ${i};`)
                    }), e.write("}"), n
                }(e, t, i, A, eA);
                break;
            case "array":
                G = function(e, t, i, A, r = !0) {
                    let a = i._zod.def;
                    e.write(`if (!Array.isArray(${A})) return INVALID;`);
                    let n = r ? ei(t) : null,
                        o = ei(t),
                        s = ei(t);
                    return n && e.write(`const ${n} = new Array(${A}.length);`), e.write(`for (let ${o} = 0; ${o} < ${A}.length; ${o}++) {`), e.indented(e => {
                        e.write(`const ${s} = ${A}[${o}];`);
                        let i = er(e, t, a.element, s, r);
                        n && null !== i && e.write(`${n}[${o}] = ${i};`)
                    }), e.write("}"), n
                }(e, t, i, A, eA);
                break;
            case "literal":
                G = function(e, t, i, A) {
                    let r = i._zod.def.values;
                    if (1 !== r.length) {
                        let i = ee(t, new Set(r));
                        return e.write(`if (!${i}.has(${A})) return INVALID;`), A
                    }
                    let a = r[0];
                    if ("number" == typeof a && Number.isNaN(a)) {
                        let i = ee(t, new Set(r));
                        return e.write(`if (!${i}.has(${A})) return INVALID;`), A
                    }
                    if ("string" == typeof a) e.write(`if (${A} !== ${h.esc(a)}) return INVALID;`);
                    else if ("number" == typeof a || "boolean" == typeof a) e.write(`if (${A} !== ${a}) return INVALID;`);
                    else if (null === a) e.write(`if (${A} !== null) return INVALID;`);
                    else if (void 0 === a) e.write(`if (${A} !== undefined) return INVALID;`);
                    else if ("bigint" == typeof a) e.write(`if (${A} !== ${a}n) return INVALID;`);
                    else throw new X(`literal type ${typeof a}`);
                    return A
                }(e, t, i, A);
                break;
            case "enum":
                G = function(e, t, i, A) {
                    let r = i._zod.values;
                    if (!r) throw new X("enum schema without enumerated values");
                    let a = ee(t, r);
                    return e.write(`if (!${a}.has(${A})) return INVALID;`), A
                }(e, t, i, A);
                break;
            case "readonly":
                {
                    let r = ev(e, t, i, A),
                        a = ei(t);e.write(`const ${a} = Object.freeze(${r});`),
                    G = a;
                    break
                }
            case "success":
                ev(e, t, i, A), G = "true";
                break;
            case "default":
            case "prefault":
                G = function(e, t, i, A) {
                    let r = i._zod.def,
                        a = Object.getOwnPropertyDescriptor(i._zod.def, "defaultValue") ? () => i._zod.def.defaultValue : void 0;
                    if ("prefault" === i._zod.def.type) {
                        if (!a) return eg(e, t, r.innerType, A);
                        let i = ee(t, a),
                            n = ei(t);
                        return e.write(`let ${n} = ${A};`), e.write(`if (${A} === undefined) ${n} = ${i}();`), eg(e, t, r.innerType, n)
                    }
                    let n = ei(t);
                    if (a) {
                        let i = ee(t, a),
                            o = ee(t, h.shallowClone);
                        e.write(`let ${n};`), e.write(`if (${A} === undefined) {`), e.indented(e => {
                            e.write(`${n} = ${o}(${i}());`)
                        }), e.write("} else {"), e.indented(e => {
                            let a = eg(e, t, r.innerType, A);
                            e.write(`${n} = ${a} === undefined ? ${o}(${i}()) : ${a};`)
                        }), e.write("}")
                    } else e.write(`let ${n};`), e.write(`if (${A} !== undefined) {`), e.indented(e => {
                        let i = eg(e, t, r.innerType, A);
                        e.write(`${n} = ${i};`)
                    }), e.write("}");
                    return n
                }(e, t, i, A);
                break;
            case "nonoptional":
                let ey, e_;
                x = e, k = t, w = i, D = A, ey = eg(x, k, w._zod.def.innerType, D), e_ = ei(k), x.write(`const ${e_} = ${ey};`), x.write(`if (${e_} === undefined) return INVALID;`), G = e_;
                break;
            case "tuple":
                G = function(e, t, i, A) {
                    let r = i._zod.def,
                        a = r.items,
                        n = r.rest;
                    e.write(`if (!Array.isArray(${A})) return INVALID;`);
                    let o = eh(a, "optin"),
                        s = eh(a, "optout");
                    n ? e.write(`if (${A}.length < ${o}) return INVALID;`) : e.write(`if (${A}.length < ${o} || ${A}.length > ${a.length}) return INVALID;`);
                    let l = ei(t);
                    e.write(`const ${l} = [];`);
                    for (let i = 0; i < a.length; i++) {
                        let r = a[i];
                        if (i >= s) e.write(`if (${l}.length === ${i}) {`), e.indented(e => {
                            e.write(`if (${i} < ${A}.length) {`), e.indented(e => {
                                let a = ei(t);
                                e.write(`const ${a} = ${A}[${i}];`);
                                let n = er(e, t, r, a);
                                e.write(`${l}[${i}] = ${n};`)
                            }), e.write("} else {"), e.indented(e => {
                                if (ep(r)) return void e.write(`${l}.length = ${i};`);
                                let A = ei(t),
                                    a = ei(t);
                                e.write(`const ${A} = undefined;`), e.write(`const ${a} = (() => {`), e.indented(e => {
                                    let i = er(e, t, r, A);
                                    e.write(`return ${i};`)
                                }), e.write("})();"), e.write(`if (${a} === INVALID || ${a} === undefined) ${l}.length = ${i};`), e.write(`else ${l}[${i}] = ${a};`)
                            }), e.write("}")
                        }), e.write("}");
                        else {
                            let a = ei(t);
                            e.write(`const ${a} = ${A}[${i}];`);
                            let n = er(e, t, r, a);
                            e.write(`${l}[${i}] = ${n};`)
                        }
                    }
                    if (n) {
                        let i = ei(t),
                            r = ei(t);
                        e.write(`for (let ${i} = ${a.length}; ${i} < ${A}.length; ${i}++) {`), e.indented(e => {
                            e.write(`const ${r} = ${A}[${i}];`);
                            let a = er(e, t, n, r);
                            e.write(`${l}[${i}] = ${a};`)
                        }), e.write("}")
                    }
                    return l
                }(e, t, i, A);
                break;
            case "union":
                G = function(e, t, i, A) {
                    let r = i._zod.def,
                        a = r.options;
                    if (r.discriminator) return function(e, t, i, A) {
                        if (i.unionFallback) throw new X("discriminated union with unionFallback");
                        if (0 === i.options.length) return e.write("return INVALID;"), A;
                        let r = ei(t),
                            a = ei(t);
                        e.write(`const ${r} = ${A}?.[${h.esc(i.discriminator)}];`), e.write(`let ${a};`);
                        let n = !0,
                            o = new Set;
                        for (let s of i.options) {
                            let l = s._zod.propValues ? .[i.discriminator];
                            if (!l || 0 === l.size) throw new X("discriminated union option without static discriminator values");
                            for (let e of l) {
                                if (o.has(e)) throw new X(`duplicate discriminator value ${String(e)}`);
                                o.add(e)
                            }
                            let d = Array.from(l, e => (function(e, t, i) {
                                    if ("string" == typeof i) return `${t} === ${h.esc(i)}`;
                                    if ("number" == typeof i) return Number.isNaN(i) ? `Number.isNaN(${t})` : `${t} === ${i}`;
                                    if ("boolean" == typeof i) return `${t} === ${i}`;
                                    if (null === i) return `${t} === null`;
                                    if (void 0 === i) return `${t} === undefined`;
                                    if ("bigint" == typeof i) return `${t} === ${i}n`;
                                    if ("symbol" == typeof i) {
                                        let A = ee(e, i);
                                        return `${t} === ${A}`
                                    }
                                    throw new X(`literal discriminator value ${String(i)}`)
                                })(t, r, e)),
                                u = n ? "if" : "else if";
                            e.write(`${u} (${d.join(" || ")}) {`), e.indented(e => {
                                let i = eg(e, t, s, A);
                                e.write(`${a} = ${i};`)
                            }), e.write("}"), n = !1
                        }
                        return e.write("else { return INVALID; }"), a
                    }(e, t, r, A);
                    if (!1 === r.inclusive) throw new X("exclusive unions (z.xor)");
                    if (0 === a.length) return e.write("return INVALID;"), A;
                    if (1 === a.length) return eg(e, t, a[0], A);
                    if (a.every(e => "literal" === e._zod.def.type && !e._zod.def.checks ? .length)) {
                        let i = ee(t, new Set(a.flatMap(e => e._zod.def.values)));
                        return e.write(`if (!${i}.has(${A})) return INVALID;`), A
                    }
                    let n = ei(t);
                    e.write(`let ${n};`);
                    for (let i = 0; i < a.length; i++) {
                        let r = a[i];
                        0 === i ? e.write(`${n} = (() => {`) : e.write(`if (${n} === INVALID) ${n} = (() => {`), e.indented(e => {
                            let i = eg(e, t, r, A);
                            e.write(`return ${i};`)
                        }), e.write("})();")
                    }
                    return e.write(`if (${n} === INVALID) return INVALID;`), n
                }(e, t, i, A);
                break;
            case "intersection":
                let ex, ek, ew, eD, eU;
                U = e, C = t, B = i, S = A, ex = B._zod.def, C.definite = !1, ek = er(U, C, ex.left, S), ew = er(U, C, ex.right, S), eD = ee(C, v.mergeValues), eU = ei(C), U.write(`const ${eU} = ${eD}(${ek}, ${ew});`), U.write(`if (!${eU}.valid) return INVALID;`), G = `${eU}.data`;
                break;
            case "record":
                G = function(e, t, i, A) {
                    let r = i._zod.def,
                        a = ee(t, h.isPlainObject);
                    e.write(`if (!${a}(${A})) return INVALID;`);
                    let n = ei(t),
                        o = ei(t),
                        s = ei(t);
                    e.write(`const ${n} = {};`);
                    let l = r.partial ? void 0 : r.keyType._zod.values;
                    if (l) {
                        let i = [];
                        for (let a of l) {
                            var d, u;
                            if ("string" != typeof a && "number" != typeof a && "symbol" != typeof a) throw new X(`record key value ${String(a)}`);
                            let o = "number" == typeof a ? a.toString() : a;
                            if ("__proto__" === o) throw new X('record key "__proto__"');
                            i.push(o);
                            let s = ee(t, a),
                                l = eg(e, t, r.keyType, s),
                                c = ei(t);
                            e.write(`const ${c} = ${A}[${(d=t,"string"==typeof(u=o)?h.esc(u):ee(d,u))}];`);
                            let m = er(e, t, r.valueType, c);
                            e.write(`${n}[${l}] = ${m};`)
                        }
                        let a = ee(t, new Set(i));
                        return e.write(`for (const ${o} in ${A}) {`), e.indented(e => {
                            e.write(`if (${a}.has(${o})) continue;`), "loose" === r.mode ? e.write(`if (${o} !== "__proto__") ${n}[${o}] = ${A}[${o}];`) : e.write("return INVALID;")
                        }), e.write("}"), n
                    }
                    let c = r.keyType._zod.def;
                    if (!("string" === c.type && void 0 === c.format && !c.coerce && (c.checks ? .length ? ? 0) === 0)) {
                        let i = "loose" === r.mode,
                            a = Y(r.keyType);
                        !1 === a.definite && (t.definite = !1);
                        let s = ee(t, a),
                            l = ee(t, O.number),
                            d = ei(t);
                        return eb(e, t, A, o, e => {
                            e.write(`let ${d} = ${s}(${o});`), e.write(`if (${d} === INVALID && typeof ${o} === "string" && ${l}.test(${o})) ${d} = ${s}(Number(${o}));`), i ? e.write(`if (${d} === INVALID) { ${n}[${o}] = ${A}[${o}]; continue; }`) : e.write(`if (${d} === INVALID) return INVALID;`), e.write(`if (${d} === "__proto__") continue;`);
                            let a = ei(t);
                            e.write(`const ${a} = ${A}[${o}];`);
                            let u = er(e, t, r.valueType, a);
                            e.write(`${n}[${d}] = ${u};`)
                        }), n
                    }
                    return eb(e, t, A, o, e => {
                        e.write(`const ${s} = ${A}[${o}];`);
                        let i = er(e, t, r.valueType, s);
                        e.write(`${n}[${o}] = ${i};`)
                    }, "return INVALID;"), n
                }(e, t, i, A);
                break;
            case "map":
                let eC, eB, eS, eE;
                E = e, P = t, N = i, R = A, eC = N._zod.def, E.write(`if (!(${R} instanceof Map)) return INVALID;`), eB = ei(P), eS = ei(P), eE = ei(P), E.write(`const ${eB} = new Map();`), E.write(`for (const [${eS}, ${eE}] of ${R}) {`), E.indented(e => {
                    let t = eg(e, P, eC.keyType, eS),
                        i = eg(e, P, eC.valueType, eE);
                    e.write(`${eB}.set(${t}, ${i});`)
                }), E.write("}"), G = eB;
                break;
            case "set":
                let eP, eO, eN;
                T = e, Z = t, L = i, Q = A, eP = L._zod.def, T.write(`if (!(${Q} instanceof Set)) return INVALID;`), eO = ei(Z), eN = ei(Z), T.write(`const ${eO} = new Set();`), T.write(`for (const ${eN} of ${Q}) {`), T.indented(e => {
                    let t = eg(e, Z, eP.valueType, eN);
                    e.write(`${eO}.add(${t});`)
                }), T.write("}"), G = eO;
                break;
            case "file":
                z = e, j = A, z.write(`if (!(${j} instanceof File)) return INVALID;`), G = j;
                break;
            case "template_literal":
                G = function(e, t, i, A) {
                    e.write(`if (typeof ${A} !== "string") return INVALID;`);
                    let r = i._zod.pattern;
                    if (r) {
                        let i = ee(t, r);
                        e.write(`${i}.lastIndex = 0;`), e.write(`if (!${i}.test(${A})) return INVALID;`)
                    }
                    return A
                }(e, t, i, A);
                break;
            case "lazy":
                let eR, eT, eZ;
                V = e, M = t, H = i, J = A, eR = et(M, H._zod.def.getter), eT = ee(M, {
                    parser: null
                }), V.write(`if (!${eT}.parser) {`), V.indented(e => {
                    e.write(`const inner = ${eR}();`), e.write(`${eT}.parser = function(input) {`), e.indented(e => {
                        e.write("const result = inner._zod.run({ value: input, issues: [] }, {});"), e.write("return result.issues.length === 0 ? result.value : INVALID;")
                    }), e.write("};")
                }), V.write("}"), eZ = ei(M), V.write(`const ${eZ} = ${eT}.parser(${J});`), V.write(`if (${eZ} === INVALID) return INVALID;`), G = eZ;
                break;
            case "pipe":
                G = function(e, t, i, A) {
                    let r = i._zod.def,
                        a = eg(e, t, r.in, A);
                    if (!r.transform) return eg(e, t, r.out, a); {
                        if (e$(r.transform)) throw new W("z.compile: async transforms in pipes are not supported");
                        let i = r.transform,
                            A = et(t, e => {
                                let t = {
                                        value: e,
                                        issues: [],
                                        addIssue: eu
                                    },
                                    A = i(e, t);
                                return A instanceof Promise ? F : 0 === t.issues.length ? A : F
                            }),
                            n = ei(t);
                        return e.write(`const ${n} = ${A}(${a});`), e.write(`if (${n} === INVALID) return INVALID;`), eg(e, t, r.out, n)
                    }
                }(e, t, i, A);
                break;
            case "custom":
                G = function(e, t, i, A) {
                    let r = i._zod.def;
                    if (r.fn) {
                        if (e$(r.fn)) throw new W("z.compile: async custom predicates are not supported");
                        let i = et(t, r.fn),
                            a = ee(t, ed),
                            n = ei(t);
                        e.write(`const ${n} = ${i}(${A});`), e.write(`if (${n} instanceof Promise) ${a}();`), e.write(`if (!${n}) return INVALID;`)
                    } else throw new X("custom schema without a predicate function");
                    return A
                }(e, t, i, A);
                break;
            case "transform":
                G = function(e, t, i, A) {
                    let r = i._zod.def;
                    if (r.transform) {
                        if (e$(r.transform)) throw new W("z.compile: async transforms are not supported");
                        let i = r.transform,
                            a = et(t, e => {
                                let t = {
                                        value: e,
                                        issues: [],
                                        addIssue: eu
                                    },
                                    A = i(e, t);
                                return A instanceof Promise ? F : 0 === t.issues.length ? A : F
                            }),
                            n = ei(t);
                        return e.write(`const ${n} = ${a}(${A});`), e.write(`if (${n} === INVALID) return INVALID;`), n
                    }
                    return A
                }(e, t, i, A);
                break;
            case "catch":
                G = function(e, t, i, A) {
                    let r = i._zod.def;
                    if (!r.catchValue[h.CONSTANT_CATCH]) throw new X("catch with a callback (only a constant catch value compiles)", !1);
                    let a = ei(t);
                    e.write(`let ${a} = (() => {`), e.indented(e => {
                        let i = er(e, t, r.innerType, A);
                        e.write(`return ${i};`)
                    }), e.write("})();");
                    let n = ee(t, r.innerType),
                        o = et(t, r.catchValue),
                        s = ee(t, eI);
                    return e.write(`if (${a} === INVALID) {`), e.indented(e => {
                        e.write(`${a} = ${s}(${n}, ${o}, ${A});`), e.write(`if (${a} === INVALID) return INVALID;`)
                    }), e.write("}"), a
                }(e, t, i, A);
                break;
            default:
                throw new X(`schema type ${q}`)
        }
        return null === G ? null : function(e, t, i, A) {
            let r = i._zod.def.checks;
            if (!r || 0 === r.length) return A;
            let a = A;
            for (let i of r) {
                let A = i._zod.def;
                if (A.when && !ea.has(A.check)) throw new X('check with a custom "when" condition');
                switch (A.check) {
                    case "greater_than":
                        ! function(e, t, i, A) {
                            let r = i.inclusive ? "<" : "<=";
                            e.write(`if (${A} ${r} ${es(t,i.value)}) return INVALID;`)
                        }(e, t, A, a);
                        break;
                    case "less_than":
                        ! function(e, t, i, A) {
                            let r = i.inclusive ? ">" : ">=";
                            e.write(`if (${A} ${r} ${es(t,i.value)}) return INVALID;`)
                        }(e, t, A, a);
                        break;
                    case "multiple_of":
                        ! function(e, t, i, A) {
                            if ("bigint" == typeof i.value) {
                                if (i.value === BigInt(0)) throw new X("multiple_of check with a zero divisor");
                                e.write(`if (${A} % ${i.value}n !== 0n) return INVALID;`)
                            } else {
                                let r = ee(t, h.floatSafeRemainder);
                                e.write(`if (${r}(${A}, ${eo(i.value,"multiple_of")}) !== 0) return INVALID;`)
                            }
                        }(e, t, A, a);
                        break;
                    case "number_format":
                        el(e, A, a);
                        break;
                    case "min_length":
                        {
                            let i = eo(A.minimum, "min_length"),
                                r = en(e, t, a, `${a}.length >= ${i} && ${a}.length < ${2*A.minimum}`);e.write(`if (${r} < ${i}) return INVALID;`);
                            break
                        }
                    case "max_length":
                        {
                            let i = eo(A.maximum, "max_length"),
                                r = en(e, t, a, `${a}.length > ${i}`);e.write(`if (${r} > ${i}) return INVALID;`);
                            break
                        }
                    case "length_equals":
                        {
                            let i = eo(A.length, "length_equals"),
                                r = en(e, t, a, `${a}.length >= ${i} && ${a}.length <= ${2*A.length}`);e.write(`if (${r} !== ${i}) return INVALID;`);
                            break
                        }
                    case "min_size":
                        e.write(`if (${a}.size < ${eo(A.minimum,"min_size")}) return INVALID;`);
                        break;
                    case "max_size":
                        e.write(`if (${a}.size > ${eo(A.maximum,"max_size")}) return INVALID;`);
                        break;
                    case "size_equals":
                        e.write(`if (${a}.size !== ${eo(A.size,"size_equals")}) return INVALID;`);
                        break;
                    case "string_format":
                        a = em(e, t, A, a);
                        break;
                    case "custom":
                        a = function(e, t, i, A) {
                            let r = i._zod.def;
                            if (r.fn) {
                                if (e$(r.fn)) throw new W("z.compile: async .refine() predicates are not supported");
                                let i = et(t, r.fn),
                                    a = ee(t, ed),
                                    n = ei(t);
                                return e.write(`const ${n} = ${i}(${A});`), e.write(`if (${n} instanceof Promise) ${a}();`), e.write(`if (!${n}) return INVALID;`), A
                            }
                            if (i._zod.check) {
                                if (e$(i._zod.check)) throw new W("z.compile: async .superRefine() / check functions are not supported");
                                let r = i._zod.check,
                                    a = et(t, e => {
                                        let t = {
                                            value: e,
                                            issues: [],
                                            addIssue: eu
                                        };
                                        return r(t) instanceof Promise && ed(), 0 === t.issues.length ? t.value : F
                                    }),
                                    n = ei(t);
                                return e.write(`const ${n} = ${a}(${A});`), e.write(`if (${n} === INVALID) return INVALID;`), n
                            }
                            throw new X("custom check without a predicate or check function")
                        }(e, t, i, a);
                        break;
                    case "bigint_format":
                        ! function(e, t, i) {
                            let A = t.format;
                            if (A) switch (A) {
                                case "int64":
                                    e.write(`if (${i} < -9223372036854775808n || ${i} > 9223372036854775807n) return INVALID;`);
                                    break;
                                case "uint64":
                                    e.write(`if (${i} < 0n || ${i} > 18446744073709551615n) return INVALID;`);
                                    break;
                                default:
                                    throw new X(`bigint format ${A}`)
                            }
                        }(e, A, a);
                        break;
                    case "mime_type":
                        ! function(e, t, i, A) {
                            let r = i.mime;
                            if (r && r.length > 0) {
                                let i = ee(t, new Set(r));
                                e.write(`if (!${i}.has(${A}.type)) return INVALID;`)
                            }
                        }(e, t, A, a);
                        break;
                    case "property":
                        ! function(e, t, i, A) {
                            let r = `${A}[${JSON.stringify(i.property)}]`;
                            eg(e, t, i.schema, r)
                        }(e, t, A, a);
                        break;
                    case "properties":
                        ! function(e, t, i, A) {
                            if (i.when) throw new X('check with a custom "when" condition');
                            e.write(`if (${A} == null) return INVALID;`);
                            let r = i.shape;
                            for (let i of Reflect.ownKeys(r)) {
                                let a = "symbol" == typeof i ? ee(t, i) : h.esc(i),
                                    n = ei(t);
                                e.write(`const ${n} = ${A}[${a}];`), er(e, t, r[i], n, !1)
                            }
                        }(e, t, A, a);
                        break;
                    case "overwrite":
                        {
                            let A = ei(t);
                            (function(e, t, i, A, r) {
                                let a = i._zod.def.tx;
                                if (!a) throw new X("overwrite check without a transform function");
                                if (e$(a)) throw new W("z.compile: async overwrite transforms are not supported");
                                let n = ee(t, a);
                                e.write(`const ${r} = ${n}(${A});`)
                            })(e, t, i, a, A),
                            a = A;
                            break
                        }
                    default:
                        throw new X(`check type ${A.check}`)
                }
            }
            return a
        }(e, t, i, G)
    }

    function ep(e) {
        return "optional" === e._zod.optin && "optional" === e._zod.optout
    }

    function ef(e) {
        return ("defaulted" !== e._zod.optin || "optional" === e._zod.optout) && function e(t) {
            let i = t._zod.def;
            switch (i.type) {
                case "string":
                case "number":
                case "boolean":
                case "bigint":
                case "symbol":
                case "null":
                case "nan":
                case "date":
                case "object":
                case "array":
                case "tuple":
                case "record":
                case "map":
                case "set":
                case "file":
                case "template_literal":
                case "never":
                case "success":
                    return !1;
                case "literal":
                    return !!i.values ? .includes(void 0);
                case "enum":
                    return !!t._zod.values ? .has(void 0);
                case "optional":
                default:
                    return !0;
                case "nullable":
                case "readonly":
                case "nonoptional":
                    return !i.innerType || e(i.innerType);
                case "union":
                    return !i.options || i.options.some(e);
                case "intersection":
                    return !i.left || !i.right || e(i.left) || e(i.right);
                case "pipe":
                    return !i.out || e(i.out)
            }
        }(e)
    }

    function ev(e, t, i, A) {
        return eg(e, t, i._zod.def.innerType, A)
    }

    function eh(e, t) {
        for (let i = e.length - 1; i >= 0; i--)
            if (!("optin" === t ? void 0 !== e[i]._zod.optin : "optional" === e[i]._zod.optout)) return i + 1;
        return 0
    }

    function eb(e, t, i, A, r, a) {
        let n = ee(t, Object.prototype.propertyIsEnumerable),
            o = ei(t),
            s = ei(t),
            l = ei(t);
        e.write(`const ${o} = Object.getOwnPropertySymbols(${i});`), e.write(`const ${s} = Object.getOwnPropertyNames(${i});`), e.write(`for (let ${l} = 0; ${l} < ${s}.length; ${l}++) {`), e.indented(e => {
            e.write(`const ${A} = ${s}[${l}];`), e.write(`if (${A} === "__proto__" || !${n}.call(${i}, ${A})) continue;`), r(e)
        }), e.write("}"), e.write(`for (let ${l} = 0; ${l} < ${o}.length; ${l}++) {`), e.indented(e => {
            e.write(`const ${A} = ${o}[${l}];`), e.write(`if (!${n}.call(${i}, ${A})) continue;`), a ? e.write(a) : r(e)
        }), e.write("}")
    }

    function e$(e) {
        return "function" == typeof e && ("AsyncFunction" === e.constructor.name || "AsyncFunction" === e[Symbol.toStringTag])
    }

    function eI(e, t, i) {
        let A = e._zod.run({
            value: i,
            issues: []
        }, {});
        return A && "function" == typeof A.then ? F : 0 === A.issues.length ? A.value : t()
    }
    e.s(["INVALID", 0, F, "ZodCompileAsyncError", 0, W, "ZodCompileUnsupportedError", 0, X, "compile", 0, K, "compileFn", 0, Y, "withParser", 0, q], 559347), e.i(559347);
    var ey = e.i(521986);

    function e_(e, ...t) {
        for (let i of t)
            for (let t of Reflect.ownKeys(i)) Object.prototype.propertyIsEnumerable.call(i, t) && (0, h.assignProp)(e, t, i[t]);
        return e
    }

    function ex(e) {
        let t = e ? .target ? ? "draft-2020-12";
        return "draft-4" === t && (t = "draft-04"), "draft-7" === t && (t = "draft-07"), {
            processors: e.processors ? ? {},
            metadataRegistry: e ? .metadata ? ? H.globalRegistry,
            target: t,
            unrepresentable: e ? .unrepresentable ? ? "throw",
            override: e ? .override ? ? (() => {}),
            io: e ? .io ? ? "output",
            counter: 0,
            seen: new Map,
            sharedDefsExtractedFor: void 0,
            sharedEmitDoneFor: void 0,
            cycles: e ? .cycles ? ? "ref",
            reused: e ? .reused ? ? "inline",
            intersections: [],
            deferred: [],
            external: e ? .external ? ? void 0
        }
    }

    function ek(e, t, i, A, r) {
        let a = "function" == typeof t.unrepresentable ? t.unrepresentable({
            zodSchema: e,
            path: A.path,
            message: r
        }) : t.unrepresentable;
        if ("any" === a) return !1;
        if (void 0 === a || "throw" === a) throw Error(r);
        return Object.assign(i, a), !0
    }

    function ew(e, t, i = {
        path: [],
        schemaPath: []
    }) {
        var A;
        let r = e._zod.def,
            a = t.seen.get(e);
        if (a) return a.count++, i.schemaPath.includes(e) && (a.cycle = i.path), a.schema;
        let n = {
            schema: {},
            count: 1,
            cycle: void 0,
            path: i.path
        };
        t.seen.set(e, n), t.sharedDefsExtractedFor = void 0, t.sharedEmitDoneFor = void 0;
        let o = e._zod.toJSONSchema ? .();
        if (o) n.schema = o;
        else {
            let A = { ...i,
                schemaPath: [...i.schemaPath, e],
                path: i.path
            };
            if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, n.schema, A);
            else {
                let i = n.schema,
                    a = t.processors[r.type];
                if (!a) throw Error(`[toJSONSchema]: Non-representable type encountered: ${r.type}`);
                a(e, t, i, A)
            }
            let a = e._zod.parent;
            a && (n.ref || (n.ref = a), ew(a, t, A), t.seen.get(a).isParent = !0)
        }
        let s = t.metadataRegistry.get(e);
        return s && e_(n.schema, s), "input" === t.io && function e(t, i) {
            let A = i ? ? {
                seen: new Set
            };
            if (A.seen.has(t)) return !1;
            A.seen.add(t);
            let r = t._zod.def;
            if ("transform" === r.type) return !0;
            if ("array" === r.type) return e(r.element, A);
            if ("set" === r.type) return e(r.valueType, A);
            if ("lazy" === r.type) return e(r.getter(), A);
            if ("promise" === r.type || "optional" === r.type || "nonoptional" === r.type || "nullable" === r.type || "readonly" === r.type || "default" === r.type || "prefault" === r.type || "catch" === r.type) return e(r.innerType, A);
            if ("intersection" === r.type) return e(r.left, A) || e(r.right, A);
            if ("record" === r.type || "map" === r.type) return e(r.keyType, A) || e(r.valueType, A);
            if ("pipe" === r.type) return !!t._zod.traits.has("$ZodCodec") || e(r.in, A) || e(r.out, A);
            if ("object" === r.type) {
                for (let t in r.shape)
                    if (e(r.shape[t], A)) return !0;
                return !1
            }
            if ("union" === r.type) {
                for (let t of r.options)
                    if (e(t, A)) return !0;
                return !1
            }
            if ("tuple" === r.type) {
                for (let t of r.items)
                    if (e(t, A)) return !0;
                if (r.rest && e(r.rest, A)) return !0
            }
            return !1
        }(e) && (delete n.schema.examples, delete n.schema.default), "input" === t.io && "_prefault" in n.schema && ((A = n.schema).default ? ? (A.default = n.schema._prefault)), delete n.schema._prefault, t.seen.get(e).schema
    }

    function eD(e) {
        return e.replace(/~/g, "~0").replace(/\//g, "~1")
    }

    function eU(e, t) {
        let i = e.seen.get(t);
        if (!i) throw Error("Unprocessed schema. This is a bug in Zod.");
        if (e.external && e.sharedDefsExtractedFor === e.external) return;
        let A = new Map;
        for (let t of e.seen.entries()) {
            let i = e.metadataRegistry.get(t[0]) ? .id;
            if (i) {
                let e = A.get(i);
                if (e && e !== t[0]) throw Error(`Duplicate schema id "${i}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
                A.set(i, t[0])
            }
        }
        let r = t => {
            if (t[1].schema.$ref) return;
            let A = t[1],
                {
                    ref: r,
                    defId: a
                } = (t => {
                    let A = "draft-2020-12" === e.target ? "$defs" : "definitions";
                    if (e.external) {
                        let i = e.external.registry.get(t[0]) ? .id,
                            r = e.external.uri ? ? (e => e);
                        if (i) return {
                            ref: r(i)
                        };
                        let a = t[1].defId ? ? t[1].schema.id ? ? `schema${e.counter++}`;
                        return t[1].defId = a, {
                            defId: a,
                            ref: `${r("__shared")}#/${A}/${eD(a)}`
                        }
                    }
                    let r = `#/${A}/`;
                    if (t[1] === i && !t[1].schema.id) return {
                        ref: "#"
                    };
                    let a = t[1].schema.id ? ? `__schema${e.counter++}`;
                    return {
                        defId: a,
                        ref: r + eD(a)
                    }
                })(t);
            A.def = { ...A.schema
            }, a && (A.defId = a);
            let n = A.schema;
            for (let e in n) delete n[e];
            n.$ref = r
        };
        if ("throw" === e.cycles)
            for (let t of e.seen.entries()) {
                let e = t[1];
                if (e.cycle) throw Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)
            }
        for (let i of e.seen.entries()) {
            let A = i[1];
            if (t === i[0]) {
                r(i);
                continue
            }
            if (e.external) {
                let A = e.external.registry.get(i[0]) ? .id;
                if (t !== i[0] && A) {
                    r(i);
                    continue
                }
            }
            if (e.metadataRegistry.get(i[0]) ? .id || A.cycle) {
                r(i);
                continue
            }
            A.count > 1 && "ref" === e.reused && r(i)
        }
        e.external && (e.sharedDefsExtractedFor = e.external)
    }
    let eC = new Set(["type", "properties", "required", "additionalProperties"]),
        eB = ["oneOf", "anyOf"];

    function eS(e) {
        let t = e.additionalProperties;
        return void 0 === t || !1 === t || "object" != typeof t || null === t ? null : Object.keys(t).length ? t : null
    }

    function eE(e) {
        let t = [];
        for (let i of e) {
            if ("object" != typeof i || "object" !== i.type) return null;
            for (let e in i)
                if (!eC.has(e)) return null;
            t.push(i)
        }
        let i = {},
            A = new Set;
        for (let e of t) {
            for (let A in e.properties) {
                if (Object.prototype.hasOwnProperty.call(i, A)) continue;
                let e = [];
                for (let i of t) {
                    let t = i.properties ? .[A] ? ? eS(i);
                    null != t && (e.some(e => JSON.stringify(e) === JSON.stringify(t)) || e.push(t))
                }
                let r = 1 === e.length ? e[0] : eE(e) ? ? {
                    allOf: e
                };
                (0, h.assignProp)(i, A, r)
            }
            for (let t of e.required ? ? []) A.add(t)
        }
        let r = {
            type: "object",
            properties: i
        };
        if (A.size && (r.required = [...A]), t.every(e => !1 === e.additionalProperties)) r.additionalProperties = !1;
        else {
            let e = [];
            for (let i of t) {
                let t = eS(i);
                t && !e.some(e => JSON.stringify(e) === JSON.stringify(t)) && e.push(t)
            }
            1 === e.length ? r.additionalProperties = e[0] : e.length > 1 && (r.additionalProperties = {
                allOf: e
            })
        }
        return r
    }

    function eP(e, t) {
        let i = e.seen.get(t);
        if (!i) throw Error("Unprocessed schema. This is a bug in Zod.");
        let A = t => {
            let i = e.seen.get(t);
            if (null === i.ref) return;
            let r = i.def ? ? i.schema,
                a = { ...r
                },
                n = i.ref;
            if (i.ref = null, n) {
                A(n);
                let i = e.seen.get(n),
                    o = i.schema;
                if (o.$ref && ("draft-07" === e.target || "draft-04" === e.target || "openapi-3.0" === e.target) ? (r.allOf = r.allOf ? ? [], r.allOf.push(o)) : e_(r, o), e_(r, a), t._zod.parent === n)
                    for (let e in r) "$ref" !== e && "allOf" !== e && (e in a || delete r[e]);
                if (o.$ref && i.def)
                    for (let e in r) "$ref" !== e && "allOf" !== e && e in i.def && JSON.stringify(r[e]) === JSON.stringify(i.def[e]) && delete r[e]
            }
            let o = t._zod.parent;
            if (o && o !== n) {
                A(o);
                let t = e.seen.get(o);
                if (t ? .schema.$ref && (r.$ref = t.schema.$ref, t.def))
                    for (let e in r) "$ref" !== e && "allOf" !== e && e in t.def && JSON.stringify(r[e]) === JSON.stringify(t.def[e]) && delete r[e]
            }
            e.override({
                zodSchema: t,
                jsonSchema: r,
                path: i.path ? ? []
            })
        };
        if (!e.external || e.sharedEmitDoneFor !== e.external) {
            for (let t of [...e.seen.entries()].reverse()) A(t[0]);
            if ("openapi-3.0" !== e.target)
                for (let t of e.seen.entries()) ! function e(t) {
                    let i = t.anyOf;
                    if (!Array.isArray(i) || 0 === i.length || void 0 !== t.type) return;
                    let A = [];
                    for (let t of i) {
                        if (!t || "object" != typeof t) return;
                        e(t);
                        let i = Object.keys(t);
                        if (1 !== i.length || "type" !== i[0]) return;
                        let r = t.type;
                        for (let e of Array.isArray(r) ? r : [r]) {
                            if ("string" != typeof e) return;
                            A.includes(e) || A.push(e)
                        }
                    }
                    delete t.anyOf, t.type = 1 === A.length ? A[0] : A
                }(t[1].def ? ? t[1].schema);
            for (let t of e.deferred) t();
            if (e.intersections.length) {
                let t = new Map;
                for (let i of e.seen.values())
                    for (let e of [i.schema, i.def]) {
                        let i = e ? .allOf;
                        if (!Array.isArray(i)) continue;
                        let A = t.get(i);
                        A ? A.push(e) : t.set(i, [e])
                    }
                for (let i of e.intersections)
                    for (let e of t.get(i) ? ? []) ! function(e) {
                        let t = e.allOf;
                        if (!Array.isArray(t) || t.length < 2) return;
                        for (let t of eC)
                            if (t in e) return;
                        let i = t.filter(e => eB.some(t => Array.isArray(e[t]))),
                            A = null;
                        if (i.length) {
                            let e = i[0],
                                r = eB.find(t => Array.isArray(e[t]));
                            if (1 !== Object.keys(e).length) return;
                            let a = t.filter(t => t !== e),
                                n = e[r].map(e => eE([...a, e]));
                            if (n.some(e => !e)) return;
                            A = {
                                [r]: n
                            }
                        } else A = eE(t);
                        A && (delete e.allOf, e_(e, A))
                    }(e)
            }
        }
        let r = {};
        if ("draft-2020-12" === e.target ? r.$schema = "https://json-schema.org/draft/2020-12/schema" : "draft-07" === e.target ? r.$schema = "http://json-schema.org/draft-07/schema#" : "draft-04" === e.target ? r.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external ? .uri) {
            let i = e.external.registry.get(t) ? .id;
            if (!i) throw Error("Schema is missing an `id` property");
            r.$id = e.external.uri(i)
        }
        e_(r, i.defId ? i.schema : i.def ? ? i.schema);
        let a = e.metadataRegistry.get(t) ? .id;
        void 0 !== a && r.id === a && delete r.id;
        let n = e.external ? .defs ? ? {};
        if (!e.external || e.sharedEmitDoneFor !== e.external)
            for (let t of e.seen.entries()) {
                let e = t[1];
                e.def && e.defId && (e.def.id === e.defId && delete e.def.id, (0, h.assignProp)(n, e.defId, e.def))
            }
        e.external && (e.sharedEmitDoneFor = e.external), e.external || Object.keys(n).length > 0 && ("draft-2020-12" === e.target ? r.$defs = n : r.definitions = n);
        try {
            let i = JSON.parse(JSON.stringify(r));
            return Object.defineProperty(i, "~standard", {
                value: { ...t["~standard"],
                    jsonSchema: {
                        input: eN(t, "input", e.processors),
                        output: eN(t, "output", e.processors)
                    }
                },
                enumerable: !1,
                writable: !1
            }), i
        } catch (e) {
            throw Error("Error converting schema to JSON.")
        }
    }
    let eO = (e, t = {}) => i => {
            let A = ex({ ...i,
                processors: t
            });
            return ew(e, A), eU(A, e), eP(A, e)
        },
        eN = (e, t, i = {}) => A => {
            let {
                libraryOptions: r,
                target: a
            } = A ? ? {}, n = ex({ ...r ? ? {},
                target : a,
                io : t,
                processors: i
            });
            return ew(e, n), eU(n, e), eP(n, e)
        };
    e.s(["createStandardJSONSchemaMethod", 0, eN, "createToJSONSchemaMethod", 0, eO, "extractDefs", 0, eU, "finalize", 0, eP, "handleUnrepresentable", 0, ek, "initializeContext", 0, ex, "process", 0, ew, "processSchema", 0, ew], 545876), e.i(545876);
    let eR = (e, t, i) => {
            (void 0 === e[t] || i > e[t]) && (e[t] = i)
        },
        eT = (e, t, i) => {
            (void 0 === e[t] || i < e[t]) && (e[t] = i)
        },
        eZ = (e, t) => {
            eR(e, "minimum", t), eT(e, "maximum", t)
        },
        eL = (e, t) => {
            e.multipleOf ? ? (e.multipleOf = []), e.multipleOf.includes(t) || e.multipleOf.push(t)
        },
        eQ = (e, t) => {
            e.patterns ? ? (e.patterns = new Set), e.patterns.add(t)
        },
        ez = (e, t) => {
            e.mime = e.mime ? e.mime.filter(e => t.includes(e)) : [...t]
        },
        ej = (e, t) => {
            e.format = t, t.includes("int") && (e.isInt = !0)
        },
        eV = (e, t) => eR(e, "minimum", t.minimum),
        eM = (e, t) => eT(e, "maximum", t.maximum),
        eH = e => (t, i) => {
            ej(t, i.format);
            let [A, r] = e[i.format];
            eR(t, "minimum", A), eT(t, "maximum", r)
        },
        eJ = {
            greater_than: (e, t) => eR(e, t.inclusive ? "minimum" : "exclusiveMinimum", t.value),
            less_than: (e, t) => eT(e, t.inclusive ? "maximum" : "exclusiveMaximum", t.value),
            multiple_of: (e, t) => eL(e, t.value),
            number_format: eH(h.NUMBER_FORMAT_RANGES),
            bigint_format: eH(h.BIGINT_FORMAT_RANGES),
            min_length: eV,
            max_length: eM,
            length_equals: (e, t) => eZ(e, t.length),
            min_size: eV,
            max_size: eM,
            size_equals: (e, t) => eZ(e, t.size),
            string_format: (e, t) => {
                ej(e, t.format), t.pattern && eQ(e, t.pattern), ("base64" === t.format || "base64url" === t.format) && (e.contentEncoding = t.format), (t.local || -1 === t.precision) && (e.laxFormat = !0)
            },
            mime_type: (e, t) => ez(e, t.mime)
        };

    function eF(e) {
        let t = {},
            i = e._zod.def;
        for (let A of e._zod.traits.has("$ZodCheck") ? [e, ...i.checks ? ? []] : i.checks ? ? []) eJ[A._zod.def.check] ? .(t, A._zod.def);
        let A = e._zod.bag;
        for (let e of (void 0 !== A.minimum && eR(t, "minimum", A.minimum), void 0 !== A.exclusiveMinimum && eR(t, "exclusiveMinimum", A.exclusiveMinimum), void 0 !== A.maximum && eT(t, "maximum", A.maximum), void 0 !== A.exclusiveMaximum && eT(t, "exclusiveMaximum", A.exclusiveMaximum), void 0 !== A.multipleOf && eL(t, A.multipleOf), void 0 !== A.format && (t.format ? ? (t.format = A.format), A.format.includes("int") && (t.isInt = !0)), A.mime && ez(t, A.mime), A.patterns ? ? [])) eQ(t, e);
        return t
    }
    let eG = {
            guid: "uuid",
            url: "uri",
            datetime: "date-time",
            json_string: "json-string",
            regex: ""
        },
        eW = new Map([
            [v.base64Charset, O.base64],
            [v.base64urlCharset, O.base64url]
        ]),
        eX = e => eW.get(e) ? ? e,
        eK = (e, t, i, A) => {
            i.type = "string";
            let {
                minimum: r,
                maximum: a,
                format: n,
                patterns: o,
                contentEncoding: s,
                laxFormat: l
            } = eF(e);
            if ("number" == typeof r && (i.minLength = r), "number" == typeof a && (i.maxLength = a), n && (i.format = eG[n] ? ? n, "" === i.format && delete i.format, ("time" === n || l) && delete i.format), s && (i.contentEncoding = s), o && o.size > 0) {
                let e = [...o].map(eX);
                1 === e.length ? i.pattern = e[0].source : e.length > 1 && (i.allOf = [...e.map(e => ({ ..."draft-07" === t.target || "draft-04" === t.target || "openapi-3.0" === t.target ? {
                        type: "string"
                    } : {},
                    pattern: e.source
                }))])
            }
        },
        eq = (e, t, i, A) => {
            let {
                minimum: r,
                maximum: a,
                multipleOf: n,
                exclusiveMaximum: o,
                exclusiveMinimum: s,
                isInt: l
            } = eF(e);
            i.type = l ? "integer" : "number";
            let d = "number" == typeof s && s >= (r ? ? -1 / 0),
                u = "number" == typeof o && o <= (a ? ? 1 / 0),
                c = "draft-04" === t.target || "openapi-3.0" === t.target;
            if (d ? c ? (i.minimum = s, i.exclusiveMinimum = !0) : i.exclusiveMinimum = s : "number" == typeof r && (i.minimum = r), u ? c ? (i.maximum = o, i.exclusiveMaximum = !0) : i.exclusiveMaximum = o : "number" == typeof a && (i.maximum = a), n) {
                let r = new Set;
                for (let a of n) Number.isFinite(a) && 0 !== a ? r.add(Math.abs(a)) : ek(e, t, i, A, `A multipleOf divisor of ${a} cannot be represented in JSON Schema`);
                let [a, ...o] = r;
                void 0 !== a && (i.multipleOf = a), o.length && (i.allOf = [...i.allOf ? ? [], ...o.map(e => ({
                    multipleOf: e
                }))])
            }
        },
        eY = (e, t, i, A) => {
            i.type = "boolean"
        },
        e0 = (e, t, i, A) => {
            ek(e, t, i, A, "BigInt cannot be represented in JSON Schema")
        },
        e4 = (e, t, i, A) => {
            ek(e, t, i, A, "Symbols cannot be represented in JSON Schema")
        },
        e6 = (e, t, i, A) => {
            "openapi-3.0" === t.target ? (i.type = "string", i.nullable = !0, i.enum = [null]) : i.type = "null"
        },
        e1 = (e, t, i, A) => {
            ek(e, t, i, A, "Undefined cannot be represented in JSON Schema")
        },
        e2 = (e, t, i, A) => {
            ek(e, t, i, A, "Void cannot be represented in JSON Schema")
        },
        e8 = (e, t, i, A) => {
            i.not = {}
        },
        e5 = (e, t, i, A) => {},
        e3 = (e, t, i, A) => {},
        e7 = (e, t, i, A) => {
            ek(e, t, i, A, "Date cannot be represented in JSON Schema")
        },
        e9 = (e, t, i, A) => {
            let r = e._zod.def,
                a = (0, h.getEnumValues)(r.entries);
            if (0 === a.length) {
                i.not = {};
                return
            }
            a.every(e => "number" == typeof e) && (i.type = "number"), a.every(e => "string" == typeof e) && (i.type = "string"), i.enum = a
        },
        te = (e, t, i, A) => {
            let r = e._zod.def;
            if (0 === r.values.length) {
                i.not = {};
                return
            }
            let a = [];
            for (let n of r.values)
                if (void 0 === n) {
                    if (ek(e, t, i, A, "Literal `undefined` cannot be represented in JSON Schema")) return
                } else if ("bigint" == typeof n) {
                if (ek(e, t, i, A, "BigInt literals cannot be represented in JSON Schema")) return;
                a.push(Number(n))
            } else a.push(n);
            if (0 === a.length);
            else if (1 === a.length) {
                let e = a[0];
                i.type = null === e ? "null" : typeof e, "draft-04" === t.target || "openapi-3.0" === t.target ? i.enum = [e] : i.const = e
            } else a.every(e => "number" == typeof e) && (i.type = "number"), a.every(e => "string" == typeof e) && (i.type = "string"), a.every(e => "boolean" == typeof e) && (i.type = "boolean"), a.every(e => null === e) && (i.type = "null"), i.enum = a
        },
        tt = (e, t, i, A) => {
            ek(e, t, i, A, "NaN cannot be represented in JSON Schema")
        },
        ti = (e, t, i, A) => {
            let r = e._zod.pattern;
            if (!r) throw Error("Pattern not found in template literal");
            i.type = "string", i.pattern = r.source
        },
        tA = (e, t, i, A) => {
            i.type = "string", i.format = "binary", i.contentEncoding = "binary";
            let {
                minimum: r,
                maximum: a,
                mime: n
            } = eF(e);
            void 0 !== r && (i.minLength = r), void 0 !== a && (i.maxLength = a), n && (0 === n.length ? i.not = {} : 1 === n.length ? i.contentMediaType = n[0] : i.anyOf = n.map(e => ({
                contentMediaType: e
            })))
        },
        tr = (e, t, i, A) => {
            i.type = "boolean"
        },
        ta = (e, t, i, A) => {
            ek(e, t, i, A, "Custom types cannot be represented in JSON Schema")
        },
        tn = (e, t, i, A) => {
            ek(e, t, i, A, "Function types cannot be represented in JSON Schema")
        },
        to = (e, t, i, A) => {
            ek(e, t, i, A, "Transforms cannot be represented in JSON Schema")
        },
        ts = (e, t, i, A) => {
            ek(e, t, i, A, "Map cannot be represented in JSON Schema")
        },
        tl = (e, t, i, A) => {
            ek(e, t, i, A, "Set cannot be represented in JSON Schema")
        },
        td = (e, t, i, A) => {
            let r = e._zod.def,
                {
                    minimum: a,
                    maximum: n
                } = eF(e);
            "number" == typeof a && (i.minItems = a), "number" == typeof n && (i.maxItems = n), i.type = "array", i.items = ew(r.element, t, { ...A,
                path: [...A.path, "items"]
            })
        };

    function tu(e) {
        let t = e._zod.def;
        return "pipe" === t.type && t.in._zod.traits.has("$ZodTransform") ? tu(t.out) : "catch" === t.type ? tu(t.innerType) : e._zod.optin
    }
    let tc = (e, t, i, A) => {
            let r = e._zod.def,
                a = r.shape;
            if (Object.getOwnPropertySymbols(a).length && ek(e, t, i, A, "Symbol keys cannot be represented in JSON Schema")) return;
            for (let e in i.type = "object", i.properties = {}, a)(0, h.assignProp)(i.properties, e, ew(a[e], t, { ...A,
                path: [...A.path, "properties", e]
            }));
            let n = [];
            for (let e of Object.keys(a)) {
                let i = r.shape[e];
                ("input" === t.io ? void 0 === tu(i) : void 0 === i._zod.optout) && n.push(e)
            }
            n.length > 0 && (i.required = n), r.catchall ? ._zod.def.type === "never" ? i.additionalProperties = !1 : r.catchall ? r.catchall && (i.additionalProperties = ew(r.catchall, t, { ...A,
                path: [...A.path, "additionalProperties"]
            })) : "output" === t.io && (i.additionalProperties = !1)
        },
        tm = (e, t, i, A) => {
            let r = e._zod.def,
                a = !1 === r.inclusive,
                n = r.options.map((e, i) => ew(e, t, { ...A,
                    path: [...A.path, a ? "oneOf" : "anyOf", i]
                }));
            a ? i.oneOf = n : i.anyOf = n
        },
        tg = (e, t, i, A) => {
            let r = e._zod.def,
                a = ew(r.left, t, { ...A,
                    path: [...A.path, "allOf", 0]
                }),
                n = ew(r.right, t, { ...A,
                    path: [...A.path, "allOf", 1]
                }),
                o = e => "allOf" in e && 1 === Object.keys(e).length,
                s = [...o(a) ? a.allOf : [a], ...o(n) ? n.allOf : [n]];
            i.allOf = s, t.intersections.push(s)
        },
        tp = (e, t, i, A) => {
            let r = e._zod.def;
            i.type = "array";
            let a = "draft-2020-12" === t.target ? "prefixItems" : "items",
                n = "draft-2020-12" === t.target || "openapi-3.0" === t.target ? "items" : "additionalItems",
                o = r.items.map((e, i) => ew(e, t, { ...A,
                    path: [...A.path, a, i]
                })),
                s = r.rest ? ew(r.rest, t, { ...A,
                    path: [...A.path, n, ..."openapi-3.0" === t.target ? [r.items.length] : []]
                }) : null,
                l = r.items.length;
            for (; l > 0;) {
                let e = r.items[l - 1];
                if (!("input" === t.io ? void 0 !== tu(e) : "optional" === e._zod.optout)) break;
                l--
            }
            let d = r.items.length,
                u = !r.rest;
            "draft-2020-12" === t.target ? (i.prefixItems = o, u ? i.items = !1 : s && (i.items = s)) : "openapi-3.0" === t.target ? (i.items = {
                anyOf: o
            }, s && i.items.anyOf.push(s)) : (i.items = o, u ? i.additionalItems = !1 : s && (i.additionalItems = s)), l > 0 && (i.minItems = l), u && (i.maxItems = d);
            let {
                minimum: c,
                maximum: m
            } = eF(e);
            "number" == typeof c && (i.minItems = c), "number" == typeof m && (i.maxItems = m)
        },
        tf = new WeakMap,
        tv = (e, t, i, A) => {
            let r = e._zod.def;
            i.type = "object";
            let a = r.keyType,
                n = eF(a).patterns;
            if ("loose" === r.mode && n && n.size > 0) {
                let e = ew(r.valueType, t, { ...A,
                    path: [...A.path, "patternProperties", "*"]
                });
                for (let t of (i.patternProperties = {}, n))(0, h.assignProp)(i.patternProperties, eX(t).source, e)
            } else {
                if ("draft-07" === t.target || "draft-2020-12" === t.target) {
                    i.propertyNames = ew(r.keyType, t, { ...A,
                        path: [...A.path, "propertyNames"]
                    });
                    let a = tf.get(t);
                    a || (a = [], tf.set(t, a), t.deferred.push(() => (function(e) {
                        let t = new Map;
                        for (let i of e.seen.values()) i.def && !t.has(i.schema) && t.set(i.schema, i);
                        let i = new Map;
                        for (let A of tf.get(e) ? ? []) {
                            let r = e.seen.get(A),
                                a = (r ? .def ? ? r ? .schema) ? .propertyNames;
                            if (!a || !0 === a || i.has(a)) continue;
                            let n = function e(t, i, A) {
                                if (i.$ref) {
                                    if (A.has(i)) return i;
                                    A.add(i);
                                    let r = t.get(i) ? .def;
                                    if (!r) return i;
                                    let a = e(t, r, A);
                                    return a === r ? i : a
                                }
                                for (let r of ["anyOf", "oneOf"]) {
                                    let a = i[r];
                                    if (!Array.isArray(a)) continue;
                                    let n = a.map(i => e(t, i, A));
                                    n.some((e, t) => e !== a[t]) && (i = { ...i,
                                        [r]: n
                                    })
                                }
                                let r = Array.isArray(i.type) ? i.type : [i.type],
                                    a = !r.includes("string") && r.some(e => "number" === e || "integer" === e),
                                    n = i.enum ? ? (void 0 !== i.const ? [i.const] : void 0);
                                if (!a && !n ? .some(e => "number" == typeof e)) return i;
                                let {
                                    minimum: o,
                                    maximum: s,
                                    exclusiveMinimum: l,
                                    exclusiveMaximum: d,
                                    multipleOf: u,
                                    format: c,
                                    id: m,
                                    ...g
                                } = i;
                                return g.enum ? g.enum = g.enum.map(e => "number" == typeof e ? String(e) : e) : "number" == typeof g.const && (g.const = String(g.const)), a && (g.type = "string", n || (g.pattern = (r.includes("number") ? O.number : O.integer).source)), g
                            }(t, a, new Set);
                            n !== a && i.set(a, n)
                        }
                        if (i.size)
                            for (let t of e.seen.values())
                                for (let e of [t.schema, t.def]) {
                                    let t = e && i.get(e.propertyNames);
                                    t && (e.propertyNames = t)
                                }
                    })(t))), a.push(e)
                }
                i.additionalProperties = ew(r.valueType, t, { ...A,
                    path: [...A.path, "additionalProperties"]
                })
            }
            let o = a._zod.values,
                s = "input" === t.io && void 0 !== tu(r.valueType);
            if (o && !r.partial && !s) {
                let e = [...o].filter(e => "string" == typeof e || "number" == typeof e);
                e.length > 0 && (i.required = e.map(String))
            }
        },
        th = (e, t, i, A) => {
            let r = e._zod.def,
                a = ew(r.innerType, t, A),
                n = t.seen.get(e);
            "openapi-3.0" === t.target ? (n.ref = r.innerType, i.nullable = !0) : i.anyOf = [a, {
                type: "null"
            }]
        },
        tb = (e, t, i, A) => {
            let r = e._zod.def;
            ew(r.innerType, t, A), t.seen.get(e).ref = r.innerType
        },
        t$ = Symbol();

    function tI(e, t, i, A, r) {
        let a = !1,
            n = JSON.stringify(e, (e, t) => "bigint" != typeof t ? t : (a = !0, null));
        return a ? (ek(t, i, A, r, "BigInt defaults cannot be represented in JSON Schema"), t$) : JSON.parse(n)
    }
    let ty = (e, t, i, A) => {
            let r = e._zod.def;
            ew(r.innerType, t, A), t.seen.get(e).ref = r.innerType;
            let a = tI(r.defaultValue, e, t, i, A);
            a !== t$ && (i.default = a)
        },
        t_ = (e, t, i, A) => {
            let r = e._zod.def;
            if (ew(r.innerType, t, A), t.seen.get(e).ref = r.innerType, "input" !== t.io) return;
            let a = tI(r.defaultValue, e, t, i, A);
            a !== t$ && (i._prefault = a)
        },
        tx = (e, t, i, A) => {
            let r, a = e._zod.def;
            ew(a.innerType, t, A), t.seen.get(e).ref = a.innerType;
            try {
                r = a.catchValue(void 0)
            } catch {
                ek(e, t, i, A, "Dynamic catch values are not supported in JSON Schema");
                return
            }
            i.default = r
        },
        tk = (e, t, i, A) => {
            let r = e._zod.def,
                a = r.in._zod.traits.has("$ZodTransform"),
                n = "input" === t.io ? a ? r.out : r.in : r.out;
            ew(n, t, A), t.seen.get(e).ref = n
        },
        tw = (e, t, i, A) => {
            let r = e._zod.def;
            ew(r.innerType, t, A), t.seen.get(e).ref = r.innerType, i.readOnly = !0
        },
        tD = (e, t, i, A) => {
            let r = e._zod.def;
            ew(r.innerType, t, A), t.seen.get(e).ref = r.innerType
        },
        tU = (e, t, i, A) => {
            let r = e._zod.def;
            ew(r.innerType, t, A), t.seen.get(e).ref = r.innerType
        },
        tC = (e, t, i, A) => {
            let r = e._zod.innerType;
            ew(r, t, A), t.seen.get(e).ref = r
        },
        tB = {
            string: eK,
            number: eq,
            boolean: eY,
            bigint: e0,
            symbol: e4,
            null: e6,
            undefined: e1,
            void: e2,
            never: e8,
            any: e5,
            unknown: e3,
            date: e7,
            enum: e9,
            literal: te,
            nan: tt,
            template_literal: ti,
            file: tA,
            success: tr,
            custom: ta,
            function: tn,
            transform: to,
            map: ts,
            set: tl,
            array: td,
            object: tc,
            union: tm,
            intersection: tg,
            tuple: tp,
            record: tv,
            nullable: th,
            nonoptional: tb,
            default: ty,
            prefault: t_,
            catch: tx,
            pipe: tk,
            readonly: tw,
            promise: tD,
            optional: tU,
            lazy: tC
        };

    function tS(e, t) {
        if ("_idmap" in e) {
            let i = ex({ ...t,
                    processors: tB
                }),
                A = {};
            for (let t of e._idmap.entries()) {
                let [e, A] = t;
                ew(A, i)
            }
            let r = {};
            for (let a of (i.external = {
                    registry: e,
                    uri: t ? .uri,
                    defs: A
                }, e._idmap.entries())) {
                let [e, t] = a;
                eU(i, t), (0, h.assignProp)(r, e, eP(i, t))
            }
            return Object.keys(A).length > 0 && (r.__shared = {
                ["draft-2020-12" === i.target ? "$defs" : "definitions"]: A
            }), {
                schemas: r
            }
        }
        let i = ex({ ...t,
            processors: tB
        });
        return ew(e, i), eU(i, e), eP(i, e)
    }
    e.s([], 935761);
    var tE = e.i(935761);
    e.s(["$ZodAny", () => v.$ZodAny, "$ZodArray", () => v.$ZodArray, "$ZodAsyncError", () => g.$ZodAsyncError, "$ZodBase64", () => v.$ZodBase64, "$ZodBase64URL", () => v.$ZodBase64URL, "$ZodBigInt", () => v.$ZodBigInt, "$ZodBigIntFormat", () => v.$ZodBigIntFormat, "$ZodBoolean", () => v.$ZodBoolean, "$ZodCIDRv4", () => v.$ZodCIDRv4, "$ZodCIDRv6", () => v.$ZodCIDRv6, "$ZodCUID", () => v.$ZodCUID, "$ZodCUID2", () => v.$ZodCUID2, "$ZodCatch", () => v.$ZodCatch, "$ZodCheck", () => S.$ZodCheck, "$ZodCheckBigIntFormat", () => S.$ZodCheckBigIntFormat, "$ZodCheckEndsWith", () => S.$ZodCheckEndsWith, "$ZodCheckGreaterThan", () => S.$ZodCheckGreaterThan, "$ZodCheckIncludes", () => S.$ZodCheckIncludes, "$ZodCheckLengthEquals", () => S.$ZodCheckLengthEquals, "$ZodCheckLessThan", () => S.$ZodCheckLessThan, "$ZodCheckLowerCase", () => S.$ZodCheckLowerCase, "$ZodCheckMaxLength", () => S.$ZodCheckMaxLength, "$ZodCheckMaxSize", () => S.$ZodCheckMaxSize, "$ZodCheckMimeType", () => S.$ZodCheckMimeType, "$ZodCheckMinLength", () => S.$ZodCheckMinLength, "$ZodCheckMinSize", () => S.$ZodCheckMinSize, "$ZodCheckMultipleOf", () => S.$ZodCheckMultipleOf, "$ZodCheckNumberFormat", () => S.$ZodCheckNumberFormat, "$ZodCheckOverwrite", () => S.$ZodCheckOverwrite, "$ZodCheckProperties", () => S.$ZodCheckProperties, "$ZodCheckProperty", () => S.$ZodCheckProperty, "$ZodCheckRegex", () => S.$ZodCheckRegex, "$ZodCheckSizeEquals", () => S.$ZodCheckSizeEquals, "$ZodCheckStartsWith", () => S.$ZodCheckStartsWith, "$ZodCheckStringFormat", () => S.$ZodCheckStringFormat, "$ZodCheckUpperCase", () => S.$ZodCheckUpperCase, "$ZodCodec", () => v.$ZodCodec, "$ZodCreditCard", () => v.$ZodCreditCard, "$ZodCustom", () => v.$ZodCustom, "$ZodCustomStringFormat", () => v.$ZodCustomStringFormat, "$ZodCyclicError", 0, b, "$ZodDate", () => v.$ZodDate, "$ZodDefault", () => v.$ZodDefault, "$ZodDiscriminatedUnion", () => v.$ZodDiscriminatedUnion, "$ZodE164", () => v.$ZodE164, "$ZodEmail", () => v.$ZodEmail, "$ZodEmoji", () => v.$ZodEmoji, "$ZodEncodeError", () => g.$ZodEncodeError, "$ZodEnum", () => v.$ZodEnum, "$ZodError", () => f.$ZodError, "$ZodExactOptional", () => v.$ZodExactOptional, "$ZodFile", () => v.$ZodFile, "$ZodFunction", () => v.$ZodFunction, "$ZodGUID", () => v.$ZodGUID, "$ZodIBAN", () => v.$ZodIBAN, "$ZodIPv4", () => v.$ZodIPv4, "$ZodIPv6", () => v.$ZodIPv6, "$ZodISODate", () => v.$ZodISODate, "$ZodISODateTime", () => v.$ZodISODateTime, "$ZodISODuration", () => v.$ZodISODuration, "$ZodISOTime", () => v.$ZodISOTime, "$ZodIntersection", () => v.$ZodIntersection, "$ZodJWT", () => v.$ZodJWT, "$ZodKSUID", () => v.$ZodKSUID, "$ZodLazy", () => v.$ZodLazy, "$ZodLiteral", () => v.$ZodLiteral, "$ZodMAC", () => v.$ZodMAC, "$ZodMap", () => v.$ZodMap, "$ZodNaN", () => v.$ZodNaN, "$ZodNanoID", () => v.$ZodNanoID, "$ZodNever", () => v.$ZodNever, "$ZodNonOptional", () => v.$ZodNonOptional, "$ZodNull", () => v.$ZodNull, "$ZodNullable", () => v.$ZodNullable, "$ZodNumber", () => v.$ZodNumber, "$ZodNumberFormat", () => v.$ZodNumberFormat, "$ZodObject", () => v.$ZodObject, "$ZodObjectJIT", () => v.$ZodObjectJIT, "$ZodOptional", () => v.$ZodOptional, "$ZodPipe", () => v.$ZodPipe, "$ZodPrefault", () => v.$ZodPrefault, "$ZodPreprocess", () => v.$ZodPreprocess, "$ZodPromise", () => v.$ZodPromise, "$ZodReadonly", () => v.$ZodReadonly, "$ZodRealError", () => f.$ZodRealError, "$ZodRecord", () => v.$ZodRecord, "$ZodRegistry", () => H.$ZodRegistry, "$ZodSet", () => v.$ZodSet, "$ZodString", () => v.$ZodString, "$ZodStringFormat", () => v.$ZodStringFormat, "$ZodSuccess", () => v.$ZodSuccess, "$ZodSymbol", () => v.$ZodSymbol, "$ZodTemplateLiteral", () => v.$ZodTemplateLiteral, "$ZodTransform", () => v.$ZodTransform, "$ZodTuple", () => v.$ZodTuple, "$ZodType", () => v.$ZodType, "$ZodULID", () => v.$ZodULID, "$ZodURL", () => v.$ZodURL, "$ZodUUID", () => v.$ZodUUID, "$ZodUndefined", () => v.$ZodUndefined, "$ZodUnion", () => v.$ZodUnion, "$ZodUnknown", () => v.$ZodUnknown, "$ZodVoid", () => v.$ZodVoid, "$ZodXID", () => v.$ZodXID, "$ZodXor", () => v.$ZodXor, "$brand", () => g.$brand, "$constructor", () => g.$constructor, "$input", () => H.$input, "$output", () => H.$output, "Doc", () => J.Doc, "INVALID", 0, F, "JSONSchema", 0, tE, "JSONSchemaGenerator", 0, class {
        get metadataRegistry() {
            return this.ctx.metadataRegistry
        }
        get target() {
            return this.ctx.target
        }
        get unrepresentable() {
            return this.ctx.unrepresentable
        }
        get override() {
            return this.ctx.override
        }
        get io() {
            return this.ctx.io
        }
        get counter() {
            return this.ctx.counter
        }
        set counter(e) {
            this.ctx.counter = e
        }
        get seen() {
            return this.ctx.seen
        }
        constructor(e) {
            let t = e ? .target ? ? "draft-2020-12";
            "draft-4" === t && (t = "draft-04"), "draft-7" === t && (t = "draft-07"), this.ctx = ex({
                processors: tB,
                target: t,
                ...e ? .metadata && {
                    metadata: e.metadata
                },
                ...e ? .unrepresentable && {
                    unrepresentable: e.unrepresentable
                },
                ...e ? .override && {
                    override: e.override
                },
                ...e ? .io && {
                    io: e.io
                }
            })
        }
        process(e, t = {
            path: [],
            schemaPath: []
        }) {
            return ew(e, this.ctx, t)
        }
        emit(e, t) {
            t && (t.cycles && (this.ctx.cycles = t.cycles), t.reused && (this.ctx.reused = t.reused), t.external && (this.ctx.external = t.external)), this.ctx.sharedDefsExtractedFor = void 0, this.ctx.sharedEmitDoneFor = void 0, eU(this.ctx, e);
            let {
                "~standard": i,
                ...A
            } = eP(this.ctx, e);
            return A
        }
    }, "NEVER", () => g.NEVER, "TimePrecision", () => ey.TimePrecision, "URL_BAD_FORMAT", () => v.URL_BAD_FORMAT, "URL_UNPARSEABLE", () => v.URL_UNPARSEABLE, "ZodCompileAsyncError", 0, W, "ZodCompileUnsupportedError", 0, X, "_any", () => ey._any, "_array", () => ey._array, "_base64", () => ey._base64, "_base64url", () => ey._base64url, "_bigint", () => ey._bigint, "_boolean", () => ey._boolean, "_catch", () => ey._catch, "_check", () => ey._check, "_cidrv4", () => ey._cidrv4, "_cidrv6", () => ey._cidrv6, "_coercedBigint", () => ey._coercedBigint, "_coercedBoolean", () => ey._coercedBoolean, "_coercedDate", () => ey._coercedDate, "_coercedNumber", () => ey._coercedNumber, "_coercedString", () => ey._coercedString, "_creditCard", () => ey._creditCard, "_cuid", () => ey._cuid, "_cuid2", () => ey._cuid2, "_custom", () => ey._custom, "_date", () => ey._date, "_decode", () => p._decode, "_decodeAsync", () => p._decodeAsync, "_default", () => ey._default, "_discriminatedUnion", () => ey._discriminatedUnion, "_e164", () => ey._e164, "_email", () => ey._email, "_emoji", () => ey._emoji, "_encode", () => p._encode, "_encodeAsync", () => p._encodeAsync, "_endsWith", () => ey._endsWith, "_enum", () => ey._enum, "_file", () => ey._file, "_float32", () => ey._float32, "_float64", () => ey._float64, "_gt", () => ey._gt, "_gte", () => ey._gte, "_guid", () => ey._guid, "_iban", () => ey._iban, "_includes", () => ey._includes, "_int", () => ey._int, "_int32", () => ey._int32, "_int64", () => ey._int64, "_intersection", () => ey._intersection, "_ipv4", () => ey._ipv4, "_ipv6", () => ey._ipv6, "_isoDate", () => ey._isoDate, "_isoDateTime", () => ey._isoDateTime, "_isoDuration", () => ey._isoDuration, "_isoTime", () => ey._isoTime, "_jwt", () => ey._jwt, "_ksuid", () => ey._ksuid, "_lazy", () => ey._lazy, "_length", () => ey._length, "_literal", () => ey._literal, "_lowercase", () => ey._lowercase, "_lt", () => ey._lt, "_lte", () => ey._lte, "_mac", () => ey._mac, "_map", () => ey._map, "_max", () => ey._max, "_maxLength", () => ey._maxLength, "_maxSize", () => ey._maxSize, "_mime", () => ey._mime, "_min", () => ey._min, "_minLength", () => ey._minLength, "_minSize", () => ey._minSize, "_multipleOf", () => ey._multipleOf, "_nan", () => ey._nan, "_nanoid", () => ey._nanoid, "_nativeEnum", () => ey._nativeEnum, "_negative", () => ey._negative, "_never", () => ey._never, "_nonnegative", () => ey._nonnegative, "_nonoptional", () => ey._nonoptional, "_nonpositive", () => ey._nonpositive, "_normalize", () => ey._normalize, "_null", () => ey._null, "_nullable", () => ey._nullable, "_number", () => ey._number, "_optional", () => ey._optional, "_overwrite", () => ey._overwrite, "_parse", () => p._parse, "_parseAsync", () => p._parseAsync, "_pipe", () => ey._pipe, "_positive", () => ey._positive, "_promise", () => ey._promise, "_properties", () => ey._properties, "_property", () => ey._property, "_readonly", () => ey._readonly, "_record", () => ey._record, "_refine", () => ey._refine, "_regex", () => ey._regex, "_safeDecode", () => p._safeDecode, "_safeDecodeAsync", () => p._safeDecodeAsync, "_safeEncode", () => p._safeEncode, "_safeEncodeAsync", () => p._safeEncodeAsync, "_safeParse", () => p._safeParse, "_safeParseAsync", () => p._safeParseAsync, "_set", () => ey._set, "_size", () => ey._size, "_slugify", () => ey._slugify, "_startsWith", () => ey._startsWith, "_string", () => ey._string, "_stringFormat", () => ey._stringFormat, "_stringbool", () => ey._stringbool, "_success", () => ey._success, "_superRefine", () => ey._superRefine, "_symbol", () => ey._symbol, "_templateLiteral", () => ey._templateLiteral, "_toLowerCase", () => ey._toLowerCase, "_toUpperCase", () => ey._toUpperCase, "_transform", () => ey._transform, "_trim", () => ey._trim, "_tuple", () => ey._tuple, "_uint32", () => ey._uint32, "_uint64", () => ey._uint64, "_ulid", () => ey._ulid, "_undefined", () => ey._undefined, "_union", () => ey._union, "_unknown", () => ey._unknown, "_uppercase", () => ey._uppercase, "_url", () => ey._url, "_uuid", () => ey._uuid, "_uuidv4", () => ey._uuidv4, "_uuidv6", () => ey._uuidv6, "_uuidv7", () => ey._uuidv7, "_void", () => ey._void, "_xid", () => ey._xid, "_xor", () => ey._xor, "base64Charset", () => v.base64Charset, "base64urlCharset", () => v.base64urlCharset, "canParseURL", () => v.canParseURL, "clone", () => h.clone, "compile", 0, K, "compileFn", 0, Y, "config", () => g.config, "createStandardJSONSchemaMethod", 0, eN, "createToJSONSchemaMethod", 0, eO, "decode", () => p.decode, "decodeAsync", () => p.decodeAsync, "describe", () => ey.describe, "encode", () => p.encode, "encodeAsync", () => p.encodeAsync, "extractDefs", 0, eU, "finalize", 0, eP, "flattenError", () => f.flattenError, "formatError", () => f.formatError, "getDiscriminatedOption", () => v.getDiscriminatedOption, "globalConfig", () => g.globalConfig, "globalRegistry", () => H.globalRegistry, "handleUnrepresentable", 0, ek, "initializeContext", 0, ex, "isBackEdge", 0, B, "isRecursiveSchema", 0, w, "isValidBase64", () => v.isValidBase64, "isValidBase64URL", () => v.isValidBase64URL, "isValidCIDRv6", () => v.isValidCIDRv6, "isValidCreditCard", () => v.isValidCreditCard, "isValidIBAN", () => v.isValidIBAN, "isValidIPv6", () => v.isValidIPv6, "isValidJWT", () => v.isValidJWT, "locales", 0, M, "memoizer", 0, C, "mergeValues", () => v.mergeValues, "meta", () => ey.meta, "parse", () => p.parse, "parseAsync", () => p.parseAsync, "parseURLObject", () => v.parseURLObject, "prettifyError", () => f.prettifyError, "process", 0, ew, "processSchema", 0, ew, "regexes", 0, O, "registry", () => H.registry, "safeDecode", () => p.safeDecode, "safeDecodeAsync", () => p.safeDecodeAsync, "safeEncode", () => p.safeEncode, "safeEncodeAsync", () => p.safeEncodeAsync, "safeParse", () => p.safeParse, "safeParseAsync", () => p.safeParseAsync, "standardProps", () => v.standardProps, "stripTabAndNewline", () => v.stripTabAndNewline, "toDotPath", () => f.toDotPath, "toJSONSchema", 0, tS, "toZod", () => P.toZod, "treeifyError", () => f.treeifyError, "urlHostnameOk", () => v.urlHostnameOk, "urlProtocolOk", () => v.urlProtocolOk, "util", 0, P, "validate", () => p.validate, "validateAsync", () => p.validateAsync, "validateURL", () => v.validateURL, "version", () => E.version, "withParser", 0, q], 498888);
    var tP = e.i(498888),
        tO = e.i(385133),
        tN = e.i(829815),
        tR = e.i(63867),
        tT = e.i(69975),
        tZ = e.i(108069),
        tL = e.i(924447),
        tQ = e.i(805067);
    let tz = new WeakSet([Object.prototype, Error.prototype]);

    function tj(e, t, i) {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            get() {
                let e = i(this);
                return Object.defineProperty(this, t, {
                    value: e,
                    configurable: !0,
                    writable: !0
                }), e
            },
            set(e) {
                Object.defineProperty(this, t, {
                    value: e,
                    configurable: !0,
                    writable: !0
                })
            }
        })
    }
    let tV = (e, t) => {
            f.$ZodError.init(e, t), e.name = "ZodError";
            let i = Object.getPrototypeOf(e);
            tz.has(i) || (tz.add(i), tj(i, "format", e => t => f.formatError(e, t)), tj(i, "flatten", e => t => f.flattenError(e, t)), tj(i, "addIssue", e => t => {
                e.issues.push(t), e.message = JSON.stringify(e.issues, h.jsonStringifyReplacer, 2)
            }), tj(i, "addIssues", e => t => {
                e.issues.push(...t), e.message = JSON.stringify(e.issues, h.jsonStringifyReplacer, 2)
            }), Object.defineProperty(i, "isEmpty", {
                configurable: !0,
                enumerable: !1,
                get() {
                    return 0 === this.issues.length
                }
            }))
        },
        tM = g.$constructor("ZodError", tV),
        tH = g.$constructor("ZodError", tV, void 0, {
            Parent: Error
        });
    e.s(["ZodError", 0, tM, "ZodRealError", 0, tH], 275955);
    let tJ = p._parse(tH),
        tF = p._parseAsync(tH),
        tG = p._safeParse(tH),
        tW = p._safeParseAsync(tH),
        tX = p._encode(tH),
        tK = p._decode(tH),
        tq = p._encodeAsync(tH),
        tY = p._decodeAsync(tH),
        t0 = p._safeEncode(tH),
        t4 = p._safeDecode(tH),
        t6 = p._safeEncodeAsync(tH),
        t1 = p._safeDecodeAsync(tH);

    function t2() {
        g.globalConfig.memoizer || g.config({
            memoizer: C()
        })
    }
    e.s(["decode", 0, tK, "decodeAsync", 0, tY, "encode", 0, tX, "encodeAsync", 0, tq, "parse", 0, tJ, "parseAsync", 0, tF, "safeDecode", 0, t4, "safeDecodeAsync", 0, t1, "safeEncode", 0, t0, "safeEncodeAsync", 0, t6, "safeParse", 0, tG, "safeParseAsync", 0, tW], 763757);
    let t8 = g.$constructor("ZodType", (e, t) => (g.globalConfig.localeError || g.config(R()), v.$ZodType.init(e, t), e.def = t, e.type = t.type, e), {
            check(...e) {
                let t = this.def;
                return this.clone(tN.util.mergeDefs(t, {
                    checks: [...t.checks ? ? [], ...e.map(e => "function" == typeof e ? {
                        _zod: {
                            check: e,
                            def: {
                                check: "custom"
                            },
                            onattach: []
                        }
                    } : e)]
                }), {
                    parent: !0
                })
            },
            with(...e) {
                return this.check(...e)
            },
            clone(e, t) {
                return h.clone(this, e, t)
            },
            brand() {
                return this
            },
            register(e, t) {
                return e.add(this, t), this
            },
            refine(e, t) {
                return this.check(rN(e, t))
            },
            superRefine(e, t) {
                return this.check(rR(e, t))
            },
            overwrite(e) {
                return this.check(ey._overwrite(e))
            },
            optional() {
                return A7(this)
            },
            exactOptional() {
                return re(this)
            },
            nullable() {
                return ri(this)
            },
            nullish() {
                return A7(ri(this))
            },
            nonoptional(e) {
                return rl(this, e)
            },
            array() {
                return AU(this)
            },
            or(e) {
                return AN([this, e])
            },
            and(e) {
                return Az(this, e)
            },
            transform(e) {
                return rv(this, A5(e))
            },
            default (e) {
                return ra(this, e)
            },
            prefault(e) {
                return ro(this, e)
            },
            catch (e) {
                return rm(this, e)
            },
            pipe(e) {
                return rv(this, e)
            },
            readonly() {
                return r_(this)
            },
            describe(e) {
                let t = this.clone();
                return H.globalRegistry.add(t, {
                    description: e
                }), t
            },
            meta(...e) {
                if (0 === e.length) return H.globalRegistry.get(this);
                let t = this.clone();
                return H.globalRegistry.add(t, e[0]), t
            },
            isOptional() {
                return this.safeParse(void 0).success
            },
            isNullable() {
                return this.safeParse(null).success
            },
            apply(e, ...t) {
                return 0 === t.length ? e(this) : e(this, ...t)
            },
            get "~standard" () {
                return tN.util.hide(this, "~standard", { ...v.standardProps(this),
                    jsonSchema: {
                        input: eN(this, "input"),
                        output: eN(this, "output")
                    }
                })
            },
            set "~standard" (value) {
                tN.util.own(this, "~standard", value)
            },
            parse: function e(t, i) {
                return tJ(this, t, i, {
                    callee: e
                })
            },
            parseAsync: async function e(t, i) {
                return await tF(this, t, i, {
                    callee: e
                })
            },
            safeParse(e, t) {
                return tG(this, e, t)
            },
            async safeParseAsync(e, t) {
                return tW(this, e, t)
            },
            get spa() {
                return this ? .safeParseAsync
            },
            set spa(value) {
                tN.util.own(this, "spa", value)
            },
            validate(e, t) {
                return p.validate(this, e, t)
            },
            validateAsync(e, t) {
                return p.validateAsync(this, e, t)
            },
            encode: function e(t, i) {
                return tX(this, t, i, {
                    callee: e
                })
            },
            decode: function e(t, i) {
                return tK(this, t, i, {
                    callee: e
                })
            },
            encodeAsync: async function e(t, i) {
                return await tq(this, t, i, {
                    callee: e
                })
            },
            decodeAsync: async function e(t, i) {
                return await tY(this, t, i, {
                    callee: e
                })
            },
            safeEncode(e, t) {
                return t0(this, e, t)
            },
            safeDecode(e, t) {
                return t4(this, e, t)
            },
            async safeEncodeAsync(e, t) {
                return t6(this, e, t)
            },
            async safeDecodeAsync(e, t) {
                return t1(this, e, t)
            },
            toJSONSchema(e) {
                return eO(this, {})(e)
            },
            get description() {
                return H.globalRegistry.get(this) ? .description
            },
            get _def() {
                return this._zod.def
            }
        }),
        t5 = g.$constructor("_ZodString", (e, t) => {
            v.$ZodString.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => eK(e, t, i, A)
        }, tN.util.derived({
            format: e => eF(e).format ? ? null,
            minLength: e => eF(e).minimum ? ? null,
            maxLength: e => eF(e).maximum ? ? null
        }, {
            regex(...e) {
                return this.check(tR.regex(...e))
            },
            includes(...e) {
                return this.check(ey._includes(...e))
            },
            startsWith(...e) {
                return this.check(ey._startsWith(...e))
            },
            endsWith(...e) {
                return this.check(ey._endsWith(...e))
            },
            min(...e) {
                return this.check(tT.minLength(...e))
            },
            max(...e) {
                return this.check(tZ.maxLength(...e))
            },
            length(...e) {
                return this.check(tL.length(...e))
            },
            nonempty(...e) {
                return this.check(tT.minLength(1, ...e))
            },
            lowercase(e) {
                return this.check(ey._lowercase(e))
            },
            uppercase(e) {
                return this.check(ey._uppercase(e))
            },
            trim() {
                return this.check(ey._trim())
            },
            normalize(...e) {
                return this.check(ey._normalize(...e))
            },
            toLowerCase() {
                return this.check(ey._toLowerCase())
            },
            toUpperCase() {
                return this.check(ey._toUpperCase())
            },
            slugify() {
                return this.check(ey._slugify())
            }
        })),
        t3 = g.$constructor("ZodString", (e, t) => {
            v.$ZodString.init(e, t), t5.init(e, t)
        }, {
            email(e) {
                return this.check(ey._email(ir, e))
            },
            url(e) {
                return this.check(ey._url(ig, e))
            },
            jwt(e) {
                return this.check(ey._jwt(iq, e))
            },
            emoji(e) {
                return this.check(ey._emoji(ih, e))
            },
            guid(e) {
                return this.check(ey._guid(io, e))
            },
            uuid(e) {
                return this.check(ey._uuid(il, e))
            },
            uuidv4(e) {
                return this.check(ey._uuidv4(il, e))
            },
            uuidv6(e) {
                return this.check(ey._uuidv6(il, e))
            },
            uuidv7(e) {
                return this.check(ey._uuidv7(il, e))
            },
            nanoid(e) {
                return this.check(ey._nanoid(i$, e))
            },
            cuid(e) {
                return this.check(ey._cuid(iy, e))
            },
            cuid2(e) {
                return this.check(ey._cuid2(ix, e))
            },
            ulid(e) {
                return this.check(ey._ulid(iw, e))
            },
            base64(e) {
                return this.check(ey._base64(ij, e))
            },
            base64url(e) {
                return this.check(ey._base64url(iM, e))
            },
            xid(e) {
                return this.check(ey._xid(iU, e))
            },
            ksuid(e) {
                return this.check(ey._ksuid(iB, e))
            },
            ipv4(e) {
                return this.check(ey._ipv4(iE, e))
            },
            ipv6(e) {
                return this.check(ey._ipv6(iR, e))
            },
            cidrv4(e) {
                return this.check(ey._cidrv4(iZ, e))
            },
            cidrv6(e) {
                return this.check(ey._cidrv6(iQ, e))
            },
            e164(e) {
                return this.check(ey._e164(iJ, e))
            },
            datetime(e) {
                return this.check(ey._isoDateTime(ie, e))
            },
            date(e) {
                return this.check(ey._isoDate(it, e))
            },
            time(e) {
                return this.check(ey._isoTime(ii, e))
            },
            duration(e) {
                return this.check(ey._isoDuration(iA, e))
            }
        });

    function t7(e) {
        return ey._string(t3, e)
    }
    let t9 = g.$constructor("ZodStringFormat", (e, t) => {
            v.$ZodStringFormat.init(e, t), t5.init(e, t)
        }),
        ie = g.$constructor("ZodISODateTime", (e, t) => {
            v.$ZodISODateTime.init(e, t), t9.init(e, t)
        }),
        it = g.$constructor("ZodISODate", (e, t) => {
            v.$ZodISODate.init(e, t), t9.init(e, t)
        }),
        ii = g.$constructor("ZodISOTime", (e, t) => {
            v.$ZodISOTime.init(e, t), t9.init(e, t)
        }),
        iA = g.$constructor("ZodISODuration", (e, t) => {
            v.$ZodISODuration.init(e, t), t9.init(e, t)
        }),
        ir = g.$constructor("ZodEmail", (e, t) => {
            v.$ZodEmail.init(e, t), t9.init(e, t)
        });

    function ia(e) {
        return ey._email(ir, e)
    }
    let io = g.$constructor("ZodGUID", (e, t) => {
        v.$ZodGUID.init(e, t), t9.init(e, t)
    });

    function is(e) {
        return ey._guid(io, e)
    }
    let il = g.$constructor("ZodUUID", (e, t) => {
        v.$ZodUUID.init(e, t), t9.init(e, t)
    });

    function id(e) {
        return ey._uuid(il, e)
    }

    function iu(e) {
        return ey._uuidv4(il, e)
    }

    function ic(e) {
        return ey._uuidv6(il, e)
    }

    function im(e) {
        return ey._uuidv7(il, e)
    }
    let ig = g.$constructor("ZodURL", (e, t) => {
        v.$ZodURL.init(e, t), t9.init(e, t)
    });

    function ip(e) {
        return ey._url(ig, e)
    }

    function iv(e) {
        return ey._url(ig, {
            protocol: O.httpProtocol,
            hostname: O.domain,
            ...tN.util.normalizeParams(e)
        })
    }
    let ih = g.$constructor("ZodEmoji", (e, t) => {
        v.$ZodEmoji.init(e, t), t9.init(e, t)
    });

    function ib(e) {
        return ey._emoji(ih, e)
    }
    let i$ = g.$constructor("ZodNanoID", (e, t) => {
        v.$ZodNanoID.init(e, t), t9.init(e, t)
    });

    function iI(e) {
        return ey._nanoid(i$, e)
    }
    let iy = g.$constructor("ZodCUID", (e, t) => {
        v.$ZodCUID.init(e, t), t9.init(e, t)
    });

    function i_(e) {
        return ey._cuid(iy, e)
    }
    let ix = g.$constructor("ZodCUID2", (e, t) => {
        v.$ZodCUID2.init(e, t), t9.init(e, t)
    });

    function ik(e) {
        return ey._cuid2(ix, e)
    }
    let iw = g.$constructor("ZodULID", (e, t) => {
        v.$ZodULID.init(e, t), t9.init(e, t)
    });

    function iD(e) {
        return ey._ulid(iw, e)
    }
    let iU = g.$constructor("ZodXID", (e, t) => {
        v.$ZodXID.init(e, t), t9.init(e, t)
    });

    function iC(e) {
        return ey._xid(iU, e)
    }
    let iB = g.$constructor("ZodKSUID", (e, t) => {
        v.$ZodKSUID.init(e, t), t9.init(e, t)
    });

    function iS(e) {
        return ey._ksuid(iB, e)
    }
    let iE = g.$constructor("ZodIPv4", (e, t) => {
        v.$ZodIPv4.init(e, t), t9.init(e, t)
    });

    function iP(e) {
        return ey._ipv4(iE, e)
    }
    let iO = g.$constructor("ZodMAC", (e, t) => {
        v.$ZodMAC.init(e, t), t9.init(e, t)
    });

    function iN(e) {
        return ey._mac(iO, e)
    }
    let iR = g.$constructor("ZodIPv6", (e, t) => {
        v.$ZodIPv6.init(e, t), t9.init(e, t)
    });

    function iT(e) {
        return ey._ipv6(iR, e)
    }
    let iZ = g.$constructor("ZodCIDRv4", (e, t) => {
        v.$ZodCIDRv4.init(e, t), t9.init(e, t)
    });

    function iL(e) {
        return ey._cidrv4(iZ, e)
    }
    let iQ = g.$constructor("ZodCIDRv6", (e, t) => {
        v.$ZodCIDRv6.init(e, t), t9.init(e, t)
    });

    function iz(e) {
        return ey._cidrv6(iQ, e)
    }
    let ij = g.$constructor("ZodBase64", (e, t) => {
        v.$ZodBase64.init(e, t), t9.init(e, t)
    });

    function iV(e) {
        return ey._base64(ij, e)
    }
    let iM = g.$constructor("ZodBase64URL", (e, t) => {
        v.$ZodBase64URL.init(e, t), t9.init(e, t)
    });

    function iH(e) {
        return ey._base64url(iM, e)
    }
    let iJ = g.$constructor("ZodE164", (e, t) => {
        v.$ZodE164.init(e, t), t9.init(e, t)
    });

    function iF(e) {
        return ey._e164(iJ, e)
    }
    let iG = g.$constructor("ZodCreditCard", (e, t) => {
        v.$ZodCreditCard.init(e, t), t9.init(e, t)
    });

    function iW(e) {
        return ey._creditCard(iG, e)
    }
    let iX = g.$constructor("ZodIBAN", (e, t) => {
        v.$ZodIBAN.init(e, t), t9.init(e, t)
    });

    function iK(e) {
        return ey._iban(iX, e)
    }
    let iq = g.$constructor("ZodJWT", (e, t) => {
        v.$ZodJWT.init(e, t), t9.init(e, t)
    });

    function iY(e) {
        return ey._jwt(iq, e)
    }
    let i0 = g.$constructor("ZodCustomStringFormat", (e, t) => {
        v.$ZodCustomStringFormat.init(e, t), t9.init(e, t)
    });

    function i4(e, t, i = {}) {
        return ey._stringFormat(i0, e, t, i)
    }

    function i6(e) {
        return ey._stringFormat(i0, "hostname", O.hostname, e)
    }

    function i1(e) {
        return ey._stringFormat(i0, "hex", O.hex, e)
    }

    function i2(e) {
        return ey._stringFormat(i0, "currency_code", O.currencyCode, e)
    }

    function i8(e, t) {
        let i = t ? .enc ? ? "hex",
            A = `${e}_${i}`,
            r = tO.regexes[A];
        if (!r) throw Error(`Unrecognized hash format: ${A}`);
        return ey._stringFormat(i0, A, r, t)
    }
    let i5 = g.$constructor("ZodNumber", (e, t) => {
        v.$ZodNumber.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => eq(e, t, i, A), e.isFinite = !0
    }, tN.util.derived({
        minValue: e => {
            let {
                minimum: t,
                exclusiveMinimum: i
            } = eF(e);
            return Math.max(t ? ? -1 / 0, i ? ? -1 / 0)
        },
        maxValue: e => {
            let {
                maximum: t,
                exclusiveMaximum: i
            } = eF(e);
            return Math.min(t ? ? 1 / 0, i ? ? 1 / 0)
        },
        isInt: e => {
            let {
                isInt: t,
                multipleOf: i
            } = eF(e);
            return !!t || !!i ? .some(Number.isSafeInteger)
        },
        format: e => eF(e).format ? ? null
    }, {
        gt(e, t) {
            return this.check(tQ.gt(e, t))
        },
        gte(e, t) {
            return this.check(ey._gte(e, t))
        },
        min(e, t) {
            return this.check(ey._gte(e, t))
        },
        lt(e, t) {
            return this.check(ey._lt(e, t))
        },
        lte(e, t) {
            return this.check(ey._lte(e, t))
        },
        max(e, t) {
            return this.check(ey._lte(e, t))
        },
        int(e) {
            return this.check(i9(e))
        },
        safe(e) {
            return this.check(i9(e))
        },
        positive(e) {
            return this.check(tQ.gt(0, e))
        },
        nonnegative(e) {
            return this.check(ey._gte(0, e))
        },
        negative(e) {
            return this.check(ey._lt(0, e))
        },
        nonpositive(e) {
            return this.check(ey._lte(0, e))
        },
        multipleOf(e, t) {
            return this.check(ey._multipleOf(e, t))
        },
        step(e, t) {
            return this.check(ey._multipleOf(e, t))
        },
        finite() {
            return this
        }
    }));

    function i3(e) {
        return ey._number(i5, e)
    }
    let i7 = g.$constructor("ZodNumberFormat", (e, t) => {
        v.$ZodNumberFormat.init(e, t), i5.init(e, t)
    });

    function i9(e) {
        return ey._int(i7, e)
    }

    function Ae(e) {
        return ey._float32(i7, e)
    }

    function At(e) {
        return ey._float64(i7, e)
    }

    function Ai(e) {
        return ey._int32(i7, e)
    }

    function AA(e) {
        return ey._uint32(i7, e)
    }
    let Ar = g.$constructor("ZodBoolean", (e, t) => {
        v.$ZodBoolean.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => eY(e, t, i, A)
    });

    function Aa(e) {
        return ey._boolean(Ar, e)
    }
    let An = g.$constructor("ZodBigInt", (e, t) => {
        v.$ZodBigInt.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => e0(e, t, i, A)
    }, tN.util.derived({
        minValue: e => eF(e).minimum ? ? null,
        maxValue: e => eF(e).maximum ? ? null,
        format: e => eF(e).format ? ? null
    }, {
        gte(e, t) {
            return this.check(ey._gte(e, t))
        },
        min(e, t) {
            return this.check(ey._gte(e, t))
        },
        gt(e, t) {
            return this.check(tQ.gt(e, t))
        },
        lt(e, t) {
            return this.check(ey._lt(e, t))
        },
        lte(e, t) {
            return this.check(ey._lte(e, t))
        },
        max(e, t) {
            return this.check(ey._lte(e, t))
        },
        positive(e) {
            return this.check(tQ.gt(BigInt(0), e))
        },
        negative(e) {
            return this.check(ey._lt(BigInt(0), e))
        },
        nonpositive(e) {
            return this.check(ey._lte(BigInt(0), e))
        },
        nonnegative(e) {
            return this.check(ey._gte(BigInt(0), e))
        },
        multipleOf(e, t) {
            return this.check(ey._multipleOf(e, t))
        }
    }));

    function Ao(e) {
        return ey._bigint(An, e)
    }
    let As = g.$constructor("ZodBigIntFormat", (e, t) => {
        v.$ZodBigIntFormat.init(e, t), An.init(e, t)
    });

    function Al(e) {
        return ey._int64(As, e)
    }

    function Ad(e) {
        return ey._uint64(As, e)
    }
    let Au = g.$constructor("ZodSymbol", (e, t) => {
        v.$ZodSymbol.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => e4(e, t, i, A)
    });

    function Ac(e) {
        return ey._symbol(Au, e)
    }
    let Am = g.$constructor("ZodUndefined", (e, t) => {
        v.$ZodUndefined.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => e1(e, t, i, A)
    });

    function Ag(e) {
        return ey._undefined(Am, e)
    }
    let Ap = g.$constructor("ZodNull", (e, t) => {
        v.$ZodNull.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => e6(e, t, i, A)
    });

    function Af(e) {
        return ey._null(Ap, e)
    }
    let Av = g.$constructor("ZodAny", (e, t) => {
        v.$ZodAny.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => e5(e, t, i, A)
    });

    function Ah() {
        return ey._any(Av)
    }
    let Ab = g.$constructor("ZodUnknown", (e, t) => {
        v.$ZodUnknown.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => e3(e, t, i, A)
    });

    function A$() {
        return ey._unknown(Ab)
    }
    let AI = g.$constructor("ZodNever", (e, t) => {
        v.$ZodNever.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => e8(e, t, i, A)
    });

    function Ay(e) {
        return ey._never(AI, e)
    }
    let A_ = g.$constructor("ZodVoid", (e, t) => {
        v.$ZodVoid.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => e2(e, t, i, A)
    });

    function Ax(e) {
        return ey._void(A_, e)
    }
    let Ak = g.$constructor("ZodDate", (e, t) => {
        v.$ZodDate.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => e7(e, t, i, A), e.min = (t, i) => e.check(ey._gte(t, i)), e.max = (t, i) => e.check(ey._lte(t, i))
    }, tN.util.derived({
        minDate: e => {
            let {
                minimum: t
            } = eF(e);
            return t ? new Date(t) : null
        },
        maxDate: e => {
            let {
                maximum: t
            } = eF(e);
            return t ? new Date(t) : null
        }
    }, {}));

    function Aw(e) {
        return ey._date(Ak, e)
    }
    let AD = g.$constructor("ZodArray", (e, t) => {
        t2(), v.$ZodArray.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => td(e, t, i, A), e.element = t.element
    }, {
        min(e, t) {
            return this.check(tT.minLength(e, t))
        },
        nonempty(e) {
            return this.check(tT.minLength(1, e))
        },
        max(e, t) {
            return this.check(tZ.maxLength(e, t))
        },
        length(e, t) {
            return this.check(tL.length(e, t))
        },
        unwrap() {
            return this.element
        }
    });

    function AU(e, t) {
        return ey._array(AD, e, t)
    }

    function AC(e) {
        return AY(Object.keys(e._zod.def.shape))
    }
    let AB = g.$constructor("ZodObject", (e, t) => {
        t2(), v.$ZodObjectJIT.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => tc(e, t, i, A), tN.util.installLazyProp(e, "shape", e => e._zod.def.shape, !1)
    }, {
        keyof() {
            return AY(Object.keys(this._zod.def.shape))
        },
        catchall(e) {
            return this.clone(tN.util.mergeDefs(this._zod.def, {
                catchall: e
            }))
        },
        passthrough() {
            return this.clone(tN.util.mergeDefs(this._zod.def, {
                catchall: A$()
            }))
        },
        loose() {
            return this.clone(tN.util.mergeDefs(this._zod.def, {
                catchall: A$()
            }))
        },
        strict() {
            return this.clone(tN.util.mergeDefs(this._zod.def, {
                catchall: Ay()
            }))
        },
        strip() {
            return this.clone(tN.util.mergeDefs(this._zod.def, {
                catchall: void 0
            }))
        },
        extend(e) {
            return tN.util.extend(this, e)
        },
        safeExtend(e) {
            return tN.util.safeExtend(this, e)
        },
        merge(e) {
            return tN.util.merge(this, e)
        },
        pick(e) {
            return tN.util.pick(this, e)
        },
        omit(e) {
            return tN.util.omit(this, e)
        },
        partial(...e) {
            return tN.util.partial(A3, this, e[0])
        },
        exactPartial(...e) {
            return tN.util.partial(A9, this, e[0], "exactPartial")
        },
        required(...e) {
            return tN.util.required(rs, this, e[0])
        }
    });

    function AS(e, t) {
        return new AB({
            type: "object",
            shape: e ? ? {},
            ...tN.util.normalizeParams(t)
        })
    }

    function AE(e, t) {
        return new AB({
            type: "object",
            shape: e,
            catchall: Ay(),
            ...tN.util.normalizeParams(t)
        })
    }

    function AP(e, t) {
        return new AB({
            type: "object",
            shape: e,
            catchall: A$(),
            ...tN.util.normalizeParams(t)
        })
    }
    let AO = g.$constructor("ZodUnion", (e, t) => {
        v.$ZodUnion.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => tm(e, t, i, A), e.options = t.options
    });

    function AN(e, t) {
        return new AO({
            type: "union",
            options: e,
            ...tN.util.normalizeParams(t)
        })
    }
    let AR = g.$constructor("ZodXor", (e, t) => {
        AO.init(e, t), v.$ZodXor.init(e, t), e._zod.processJSONSchema = (t, i, A) => tm(e, t, i, A), e.options = t.options
    });

    function AT(e, t) {
        return new AR({
            type: "union",
            options: e,
            inclusive: !1,
            ...tN.util.normalizeParams(t)
        })
    }
    let AZ = g.$constructor("ZodDiscriminatedUnion", (e, t) => {
        AO.init(e, t), v.$ZodDiscriminatedUnion.init(e, t)
    });

    function AL(e, t, i) {
        return new AZ({
            type: "union",
            options: t,
            discriminator: e,
            ...tN.util.normalizeParams(i)
        })
    }
    let AQ = g.$constructor("ZodIntersection", (e, t) => {
        v.$ZodIntersection.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => tg(e, t, i, A)
    });

    function Az(e, t) {
        return new AQ({
            type: "intersection",
            left: e,
            right: t
        })
    }
    let Aj = g.$constructor("ZodTuple", (e, t) => {
        t2(), v.$ZodTuple.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => tp(e, t, i, A)
    }, {
        rest(e) {
            return this.clone({ ...this._zod.def,
                rest: e
            })
        },
        partial() {
            let e = this._zod.def;
            if (e.checks ? .length) throw Error(".partial() cannot be used on tuple schemas containing refinements");
            return this.clone({ ...e,
                items: e.items.map(e => new A3({
                    type: "optional",
                    innerType: e
                }))
            })
        }
    });

    function AV(e, t, i) {
        let A = t instanceof v.$ZodType,
            r = A ? i : t;
        return new Aj({
            type: "tuple",
            items: e,
            rest: A ? t : null,
            ...tN.util.normalizeParams(r)
        })
    }
    let AM = g.$constructor("ZodRecord", (e, t) => {
        t2(), v.$ZodRecord.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => tv(e, t, i, A), e.keyType = t.keyType, e.valueType = t.valueType
    });

    function AH(e, t, i) {
        return new AM(t && t._zod ? {
            type: "record",
            keyType: e,
            valueType: t,
            ...tN.util.normalizeParams(i)
        } : {
            type: "record",
            keyType: t7(),
            valueType: e,
            ...tN.util.normalizeParams(t)
        })
    }

    function AJ(e, t, i) {
        return new AM({
            type: "record",
            keyType: e,
            valueType: t,
            ...tN.util.normalizeParams(i),
            partial: !0
        })
    }

    function AF(e, t, i) {
        return new AM({
            type: "record",
            keyType: e,
            valueType: t,
            mode: "loose",
            ...tN.util.normalizeParams(i)
        })
    }
    let AG = g.$constructor("ZodMap", (e, t) => {
        t2(), v.$ZodMap.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => ts(e, t, i, A), e.keyType = t.keyType, e.valueType = t.valueType, e.min = (...t) => e.check(ey._minSize(...t)), e.nonempty = t => e.check(ey._minSize(1, t)), e.max = (...t) => e.check(ey._maxSize(...t)), e.size = (...t) => e.check(ey._size(...t))
    });

    function AW(e, t, i) {
        return new AG({
            type: "map",
            keyType: e,
            valueType: t,
            ...tN.util.normalizeParams(i)
        })
    }
    let AX = g.$constructor("ZodSet", (e, t) => {
        t2(), v.$ZodSet.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => tl(e, t, i, A), e.min = (...t) => e.check(ey._minSize(...t)), e.nonempty = t => e.check(ey._minSize(1, t)), e.max = (...t) => e.check(ey._maxSize(...t)), e.size = (...t) => e.check(ey._size(...t))
    });

    function AK(e, t) {
        return new AX({
            type: "set",
            valueType: e,
            ...tN.util.normalizeParams(t)
        })
    }
    let Aq = g.$constructor("ZodEnum", (e, t) => {
        v.$ZodEnum.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => e9(e, t, i, A), e.enum = t.entries, e.options = [...e._zod.values];
        let i = new Set(Object.keys(t.entries));
        e.extract = (e, A) => {
            let r = {};
            for (let A of e)
                if (i.has(A)) r[A] = t.entries[A];
                else throw Error(`Key ${A} not found in enum`);
            return new Aq({ ...t,
                checks: [],
                ...tN.util.normalizeParams(A),
                entries: r
            })
        }, e.exclude = (e, A) => {
            let r = { ...t.entries
            };
            for (let t of e)
                if (i.has(t)) delete r[t];
                else throw Error(`Key ${t} not found in enum`);
            return new Aq({ ...t,
                checks: [],
                ...tN.util.normalizeParams(A),
                entries: r
            })
        }
    });

    function AY(e, t) {
        return new Aq({
            type: "enum",
            entries: Array.isArray(e) ? Object.fromEntries(e.map(e => [e, e])) : e,
            ...tN.util.normalizeParams(t)
        })
    }

    function A0(e, t) {
        return new Aq({
            type: "enum",
            entries: e,
            ...tN.util.normalizeParams(t)
        })
    }
    let A4 = g.$constructor("ZodLiteral", (e, t) => {
        v.$ZodLiteral.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => te(e, t, i, A), e.values = new Set(t.values), Object.defineProperty(e, "value", {
            get() {
                if (t.values.length > 1) throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
                return t.values[0]
            }
        })
    });

    function A6(e, t) {
        return new A4({
            type: "literal",
            values: Array.isArray(e) ? e : [e],
            ...tN.util.normalizeParams(t)
        })
    }
    let A1 = g.$constructor("ZodFile", (e, t) => {
        v.$ZodFile.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => tA(e, t, i, A), e.min = (t, i) => e.check(ey._minSize(t, i)), e.max = (t, i) => e.check(ey._maxSize(t, i)), e.mime = (t, i) => e.check(ey._mime(Array.isArray(t) ? t : [t], i))
    });

    function A2(e) {
        return ey._file(A1, e)
    }
    let A8 = g.$constructor("ZodTransform", (e, t) => {
        t2(), v.$ZodTransform.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => to(e, t, i, A), e._zod.parse = (i, A) => {
            if ("backward" === A.direction) throw new g.$ZodEncodeError(e.constructor.name);
            i.addIssue = A => {
                "string" == typeof A ? i.issues.push(tN.util.issue(A, i.value, t)) : (A.fatal && (A.continue = !1), A.code ? ? (A.code = "custom"), "input" in A || (A.input = i.value), A.inst ? ? (A.inst = e), i.issues.push(tN.util.issue(A)))
            };
            let r = t.transform(i.value, i);
            return r instanceof Promise ? r.then(e => (i.value = e, i)) : (i.value = r, i)
        }
    });

    function A5(e) {
        return new A8({
            type: "transform",
            transform: e
        })
    }
    let A3 = g.$constructor("ZodOptional", (e, t) => {
        v.$ZodOptional.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => tU(e, t, i, A), e.unwrap = () => e._zod.def.innerType
    });

    function A7(e) {
        return new A3({
            type: "optional",
            innerType: e
        })
    }
    let A9 = g.$constructor("ZodExactOptional", (e, t) => {
        v.$ZodExactOptional.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => tU(e, t, i, A), e.unwrap = () => e._zod.def.innerType
    });

    function re(e) {
        return new A9({
            type: "optional",
            innerType: e
        })
    }
    let rt = g.$constructor("ZodNullable", (e, t) => {
        v.$ZodNullable.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => th(e, t, i, A), e.unwrap = () => e._zod.def.innerType
    });

    function ri(e) {
        return new rt({
            type: "nullable",
            innerType: e
        })
    }

    function rA(e) {
        return A7(ri(e))
    }
    let rr = g.$constructor("ZodDefault", (e, t) => {
        v.$ZodDefault.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => ty(e, t, i, A), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap
    });

    function ra(e, t) {
        return new rr({
            type: "default",
            innerType: e,
            get defaultValue() {
                return "function" == typeof t ? t() : tN.util.shallowClone(t)
            }
        })
    }
    let rn = g.$constructor("ZodPrefault", (e, t) => {
        v.$ZodPrefault.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => t_(e, t, i, A), e.unwrap = () => e._zod.def.innerType
    });

    function ro(e, t) {
        return new rn({
            type: "prefault",
            innerType: e,
            get defaultValue() {
                return "function" == typeof t ? t() : tN.util.shallowClone(t)
            }
        })
    }
    let rs = g.$constructor("ZodNonOptional", (e, t) => {
        v.$ZodNonOptional.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => tb(e, t, i, A), e.unwrap = () => e._zod.def.innerType
    });

    function rl(e, t) {
        return new rs({
            type: "nonoptional",
            innerType: e,
            ...tN.util.normalizeParams(t)
        })
    }
    let rd = g.$constructor("ZodSuccess", (e, t) => {
        v.$ZodSuccess.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => tr(e, t, i, A), e.unwrap = () => e._zod.def.innerType
    });

    function ru(e) {
        return new rd({
            type: "success",
            innerType: e
        })
    }
    let rc = g.$constructor("ZodCatch", (e, t) => {
        v.$ZodCatch.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => tx(e, t, i, A), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap
    });

    function rm(e, t) {
        return new rc({
            type: "catch",
            innerType: e,
            catchValue: "function" == typeof t ? t : tN.util.constantCatch(t)
        })
    }
    let rg = g.$constructor("ZodNaN", (e, t) => {
        v.$ZodNaN.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => tt(e, t, i, A)
    });

    function rp(e) {
        return ey._nan(rg, e)
    }
    let rf = g.$constructor("ZodPipe", (e, t) => {
        v.$ZodPipe.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => tk(e, t, i, A), e.in = t.in, e.out = t.out
    });

    function rv(e, t) {
        return new rf({
            type: "pipe",
            in: e,
            out: t
        })
    }
    let rh = g.$constructor("ZodCodec", (e, t) => {
        rf.init(e, t), v.$ZodCodec.init(e, t)
    });

    function rb(e, t, i) {
        return new rh({
            type: "pipe",
            in: e,
            out: t,
            transform: i.decode,
            reverseTransform: i.encode
        })
    }

    function r$(e) {
        let t = e._zod.def;
        return new rh({
            type: "pipe",
            in: t.out,
            out: t.in,
            transform: t.reverseTransform,
            reverseTransform: t.transform
        })
    }
    let rI = g.$constructor("ZodPreprocess", (e, t) => {
            rf.init(e, t), v.$ZodPreprocess.init(e, t)
        }),
        ry = g.$constructor("ZodReadonly", (e, t) => {
            v.$ZodReadonly.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => tw(e, t, i, A), e.unwrap = () => e._zod.def.innerType
        });

    function r_(e) {
        return new ry({
            type: "readonly",
            innerType: e
        })
    }
    let rx = g.$constructor("ZodTemplateLiteral", (e, t) => {
        v.$ZodTemplateLiteral.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => ti(e, t, i, A)
    });

    function rk(e, t) {
        return new rx({
            type: "template_literal",
            parts: e,
            ...tN.util.normalizeParams(t)
        })
    }
    let rw = g.$constructor("ZodLazy", (e, t) => {
        v.$ZodLazy.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => tC(e, t, i, A), e.unwrap = () => e._zod.def.getter()
    });

    function rD(e) {
        return new rw({
            type: "lazy",
            getter: e
        })
    }
    let rU = g.$constructor("ZodPromise", (e, t) => {
        v.$ZodPromise.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => tD(e, t, i, A), e.unwrap = () => e._zod.def.innerType
    });

    function rC(e) {
        return new rU({
            type: "promise",
            innerType: e
        })
    }
    let rB = g.$constructor("ZodFunction", (e, t) => {
        v.$ZodFunction.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => tn(e, t, i, A)
    });

    function rS(e) {
        return new rB({
            type: "function",
            input: Array.isArray(e ? .input) ? AV(e ? .input) : e ? .input ? ? AU(A$()),
            output: e ? .output ? ? A$()
        })
    }
    let rE = g.$constructor("ZodCustom", (e, t) => {
        v.$ZodCustom.init(e, t), t8.init(e, t), e._zod.processJSONSchema = (t, i, A) => ta(e, t, i, A)
    });

    function rP(e) {
        let t = new S.$ZodCheck({
            check: "custom"
        });
        return t._zod.check = e, t
    }

    function rO(e, t) {
        return ey._custom(rE, e ? ? (() => !0), t)
    }

    function rN(e, t = {}) {
        return ey._refine(rE, e, t)
    }

    function rR(e, t) {
        return ey._superRefine(e, t)
    }
    let rT = ey.describe,
        rZ = ey.meta,
        rL = g.$constructor("ZodInstanceOf", (e, t) => {
            rE.init(e, t)
        }, {
            properties(e, t) {
                return this.check(ey._properties(e, t))
            }
        });

    function rQ(e, t = {}) {
        let i = new rL({
            type: "custom",
            check: "custom",
            fn: t => t instanceof e,
            abort: !0,
            ...tN.util.normalizeParams(t)
        });
        return i._zod.bag.Class = e, i._zod.check = t => {
            t.value instanceof e || t.issues.push({
                code: "invalid_type",
                expected: e.name,
                input: t.value,
                inst: i,
                path: [...i._zod.def.path ? ? []]
            })
        }, i
    }
    let rz = (...e) => ey._stringbool({
        Codec: rh,
        Boolean: Ar,
        String: t3
    }, ...e);

    function rj(e) {
        let t = rD(() => AN([t7(e), i3(), Aa(), Af(), AU(t), AH(t7(), t)]));
        return t
    }

    function rV(e, t) {
        return new rI({
            type: "pipe",
            in: A5(e),
            out: t
        })
    }
    e.s(["ZodAny", 0, Av, "ZodArray", 0, AD, "ZodBase64", 0, ij, "ZodBase64URL", 0, iM, "ZodBigInt", 0, An, "ZodBigIntFormat", 0, As, "ZodBoolean", 0, Ar, "ZodCIDRv4", 0, iZ, "ZodCIDRv6", 0, iQ, "ZodCUID", 0, iy, "ZodCUID2", 0, ix, "ZodCatch", 0, rc, "ZodCodec", 0, rh, "ZodCreditCard", 0, iG, "ZodCustom", 0, rE, "ZodCustomStringFormat", 0, i0, "ZodDate", 0, Ak, "ZodDefault", 0, rr, "ZodDiscriminatedUnion", 0, AZ, "ZodE164", 0, iJ, "ZodEmail", 0, ir, "ZodEmoji", 0, ih, "ZodEnum", 0, Aq, "ZodExactOptional", 0, A9, "ZodFile", 0, A1, "ZodFunction", 0, rB, "ZodGUID", 0, io, "ZodIBAN", 0, iX, "ZodIPv4", 0, iE, "ZodIPv6", 0, iR, "ZodISODate", 0, it, "ZodISODateTime", 0, ie, "ZodISODuration", 0, iA, "ZodISOTime", 0, ii, "ZodInstanceOf", 0, rL, "ZodIntersection", 0, AQ, "ZodJWT", 0, iq, "ZodKSUID", 0, iB, "ZodLazy", 0, rw, "ZodLiteral", 0, A4, "ZodMAC", 0, iO, "ZodMap", 0, AG, "ZodNaN", 0, rg, "ZodNanoID", 0, i$, "ZodNever", 0, AI, "ZodNonOptional", 0, rs, "ZodNull", 0, Ap, "ZodNullable", 0, rt, "ZodNumber", 0, i5, "ZodNumberFormat", 0, i7, "ZodObject", 0, AB, "ZodOptional", 0, A3, "ZodPipe", 0, rf, "ZodPrefault", 0, rn, "ZodPreprocess", 0, rI, "ZodPromise", 0, rU, "ZodReadonly", 0, ry, "ZodRecord", 0, AM, "ZodSet", 0, AX, "ZodString", 0, t3, "ZodStringFormat", 0, t9, "ZodSuccess", 0, rd, "ZodSymbol", 0, Au, "ZodTemplateLiteral", 0, rx, "ZodTransform", 0, A8, "ZodTuple", 0, Aj, "ZodType", 0, t8, "ZodULID", 0, iw, "ZodURL", 0, ig, "ZodUUID", 0, il, "ZodUndefined", 0, Am, "ZodUnion", 0, AO, "ZodUnknown", 0, Ab, "ZodVoid", 0, A_, "ZodXID", 0, iU, "ZodXor", 0, AR, "_ZodString", 0, t5, "_default", 0, ra, "_function", 0, rS, "any", 0, Ah, "array", 0, AU, "base64", 0, iV, "base64url", 0, iH, "bigint", 0, Ao, "boolean", 0, Aa, "catch", 0, rm, "check", 0, rP, "cidrv4", 0, iL, "cidrv6", 0, iz, "codec", 0, rb, "creditCard", 0, iW, "cuid", 0, i_, "cuid2", 0, ik, "currencyCode", 0, i2, "custom", 0, rO, "date", 0, Aw, "describe", 0, rT, "discriminatedUnion", 0, AL, "e164", 0, iF, "email", 0, ia, "emoji", 0, ib, "enum", 0, AY, "exactOptional", 0, re, "file", 0, A2, "float32", 0, Ae, "float64", 0, At, "function", 0, rS, "guid", 0, is, "hash", 0, i8, "hex", 0, i1, "hostname", 0, i6, "httpUrl", 0, iv, "iban", 0, iK, "instanceof", 0, rQ, "int", 0, i9, "int32", 0, Ai, "int64", 0, Al, "intersection", 0, Az, "invertCodec", 0, r$, "ipv4", 0, iP, "ipv6", 0, iT, "json", 0, rj, "jwt", 0, iY, "keyof", 0, AC, "ksuid", 0, iS, "lazy", 0, rD, "literal", 0, A6, "looseObject", 0, AP, "looseRecord", 0, AF, "mac", 0, iN, "map", 0, AW, "meta", 0, rZ, "nan", 0, rp, "nanoid", 0, iI, "nativeEnum", 0, A0, "never", 0, Ay, "nonoptional", 0, rl, "null", 0, Af, "nullable", 0, ri, "nullish", 0, rA, "number", 0, i3, "object", 0, AS, "optional", 0, A7, "partialRecord", 0, AJ, "pipe", 0, rv, "prefault", 0, ro, "preprocess", 0, rV, "promise", 0, rC, "readonly", 0, r_, "record", 0, AH, "refine", 0, rN, "set", 0, AK, "strictObject", 0, AE, "string", 0, t7, "stringFormat", 0, i4, "stringbool", 0, rz, "success", 0, ru, "superRefine", 0, rR, "symbol", 0, Ac, "templateLiteral", 0, rk, "transform", 0, A5, "tuple", 0, AV, "uint32", 0, AA, "uint64", 0, Ad, "ulid", 0, iD, "undefined", 0, Ag, "union", 0, AN, "unknown", 0, A$, "url", 0, ip, "uuid", 0, id, "uuidv4", 0, iu, "uuidv6", 0, ic, "uuidv7", 0, im, "void", 0, Ax, "xid", 0, iC, "xor", 0, AT], 593497);
    var rM = e.i(593497);
    e.s([], 772774), e.i(772774), e.s(["endsWith", () => ey._endsWith, "gt", () => ey._gt, "gte", () => ey._gte, "includes", () => ey._includes, "length", () => ey._length, "lowercase", () => ey._lowercase, "lt", () => ey._lt, "lte", () => ey._lte, "maxLength", () => ey._maxLength, "maxSize", () => ey._maxSize, "mime", () => ey._mime, "minLength", () => ey._minLength, "minSize", () => ey._minSize, "multipleOf", () => ey._multipleOf, "negative", () => ey._negative, "nonnegative", () => ey._nonnegative, "nonpositive", () => ey._nonpositive, "normalize", () => ey._normalize, "overwrite", () => ey._overwrite, "positive", () => ey._positive, "properties", () => ey._properties, "property", () => ey._property, "regex", () => ey._regex, "size", () => ey._size, "slugify", () => ey._slugify, "startsWith", () => ey._startsWith, "toLowerCase", () => ey._toLowerCase, "toUpperCase", () => ey._toUpperCase, "trim", () => ey._trim, "uppercase", () => ey._uppercase], 575720);
    var rH = e.i(575720);
    e.i(275955), e.i(763757), e.s(["decode", 0, tK, "decodeAsync", 0, tY, "encode", 0, tX, "encodeAsync", 0, tq, "parse", 0, tJ, "parseAsync", 0, tF, "safeDecode", 0, t4, "safeDecodeAsync", 0, t1, "safeEncode", 0, t0, "safeEncodeAsync", 0, t6, "safeParse", 0, tG, "safeParseAsync", 0, tW, "validate", () => p.validate, "validateAsync", () => p.validateAsync], 670483), e.i(670483);
    let rJ = {
        invalid_type: "invalid_type",
        too_big: "too_big",
        too_small: "too_small",
        invalid_format: "invalid_format",
        not_multiple_of: "not_multiple_of",
        unrecognized_keys: "unrecognized_keys",
        invalid_union: "invalid_union",
        invalid_key: "invalid_key",
        invalid_element: "invalid_element",
        invalid_value: "invalid_value",
        custom: "custom"
    };

    function rF(e) {
        g.config({
            customError: e
        })
    }

    function rG() {
        return g.config().customError
    }
    i || (i = {}), e.s(["ZodFirstPartyTypeKind", 0, i, "ZodIssueCode", 0, rJ, "getErrorMap", 0, rG, "setErrorMap", 0, rF], 852491), e.i(852491), e.s(["$brand", () => g.$brand, "ZodFirstPartyTypeKind", 0, i, "ZodIssueCode", 0, rJ, "config", () => g.config, "getErrorMap", 0, rG, "setErrorMap", 0, rF], 370265), e.i(370265);
    var rW = e.i(521986);

    function rX(e) {
        return ey._isoDateTime(ie, e)
    }

    function rK(e) {
        return ey._isoDate(it, e)
    }

    function rq(e) {
        return ey._isoTime(ii, e)
    }

    function rY(e) {
        return ey._isoDuration(iA, e)
    }
    e.s(["date", 0, rK, "datetime", 0, rX, "duration", 0, rY, "time", 0, rq], 911812), e.i(911812), e.s(["ZodISODate", 0, it, "ZodISODateTime", 0, ie, "ZodISODuration", 0, iA, "ZodISOTime", 0, ii, "date", 0, rK, "datetime", 0, rX, "duration", 0, rY, "time", 0, rq], 196635);
    var r0 = e.i(196635);
    let r4 = { ...rM,
            ...rH,
            iso: r0
        },
        r6 = new Set(["$schema", "$ref", "$defs", "definitions", "$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor", "type", "enum", "const", "anyOf", "oneOf", "allOf", "not", "properties", "required", "additionalProperties", "patternProperties", "propertyNames", "minProperties", "maxProperties", "items", "prefixItems", "additionalItems", "minItems", "maxItems", "uniqueItems", "contains", "minContains", "maxContains", "minLength", "maxLength", "pattern", "format", "minimum", "maximum", "exclusiveMinimum", "exclusiveMaximum", "multipleOf", "description", "default", "contentEncoding", "contentMediaType", "contentSchema", "unevaluatedItems", "unevaluatedProperties", "if", "then", "else", "dependentSchemas", "dependentRequired", "nullable", "readOnly"]);

    function r1(e, t) {
        return e.map((e, i) => i < t ? e : e.optional())
    }
    let r2 = new Set(["items", "prefixItems", "additionalItems", "additionalProperties", "contains", "propertyNames", "not", "if", "then", "else", "allOf", "anyOf", "oneOf", "unevaluatedItems", "unevaluatedProperties", "contentSchema"]),
        r8 = new Set(["properties", "patternProperties", "dependentSchemas", "dependencies", "$defs", "definitions"]);

    function r5(e) {
        return "object" == typeof e && null !== e && (Array.isArray(e) ? e.some(r5) : "string" == typeof e.$ref || Object.entries(e).some(([e, t]) => r2.has(e) ? r5(t) : !!r8.has(e) && "object" == typeof t && null !== t && Object.values(t).some(r5)))
    }

    function r3(e) {
        return 1 === e ? "element" : "elements"
    }

    function r7(e, t) {
        if (!1 !== e) return void 0 === e || !0 === e ? r4.any() : ae(e, t)
    }
    let r9 = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z|[+-](?:[01]\d|2[0-3]):[0-5]\d)$/;

    function ae(e, t) {
        if ("boolean" == typeof e) return e ? r4.any() : r4.never();
        let i = function e(t, i) {
                var A, r, a, n;
                let o;
                if (void 0 !== t.not) {
                    if ("object" == typeof t.not && 0 === Object.keys(t.not).length) return r4.never();
                    throw Error("not is not supported in Zod (except { not: {} } for never)")
                }
                if (void 0 !== t.unevaluatedItems) throw Error("unevaluatedItems is not supported");
                if (void 0 !== t.unevaluatedProperties) throw Error("unevaluatedProperties is not supported");
                if (void 0 !== t.if || void 0 !== t.then || void 0 !== t.else) throw Error("Conditional schemas (if/then/else) are not supported");
                if (void 0 !== t.dependentSchemas || void 0 !== t.dependentRequired) throw Error("dependentSchemas and dependentRequired are not supported");
                if (t.$ref) {
                    let e = t.$ref;
                    if (i.refs.has(e)) return i.refs.get(e);
                    if (i.processing.has(e)) return r4.lazy(() => {
                        if (!i.refs.has(e)) throw Error(`Circular reference not resolved: ${e}`);
                        return i.refs.get(e)
                    });
                    i.processing.add(e);
                    let A = ae(function(e, t) {
                        if (!e.startsWith("#")) throw Error("External $ref is not supported, only local refs (#/...) are allowed");
                        let i = e.slice(1).split("/").filter(Boolean);
                        if (0 === i.length) return t.rootSchema;
                        let A = "draft-2020-12" === t.version ? "$defs" : "definitions";
                        if (i[0] === A) {
                            let A = void 0 === i[1] ? void 0 : i[1].replace(/~1/g, "/").replace(/~0/g, "~");
                            if (!A || !t.defs[A]) throw Error(`Reference not found: ${e}`);
                            return t.defs[A]
                        }
                        throw Error(`Reference not found: ${e}`)
                    }(e, i), i);
                    return i.refs.set(e, A), i.processing.delete(e), A
                }
                if (void 0 !== t.enum) {
                    let e = t.enum;
                    if ("openapi-3.0" === i.version && !0 === t.nullable && 1 === e.length && null === e[0]) return r4.null();
                    if (0 === e.length) return r4.never();
                    if (1 === e.length) return r4.literal(e[0]);
                    if (e.every(e => "string" == typeof e)) return r4.enum(e);
                    let A = e.map(e => r4.literal(e));
                    return A.length < 2 ? A[0] : r4.union([A[0], A[1], ...A.slice(2)])
                }
                if (void 0 !== t.const) return r4.literal(t.const);
                let s = t.type;
                if (Array.isArray(s)) {
                    let A = s.map(A => e({ ...t,
                        type: A
                    }, i));
                    return 0 === A.length ? r4.never() : 1 === A.length ? A[0] : r4.union(A)
                }
                if (!s) return r4.any();
                switch (s) {
                    case "string":
                        {
                            let e = r4.string();
                            if (t.format) {
                                let i = t.format;
                                "email" === i ? e = e.check(r4.email()) : "uri" === i || "uri-reference" === i ? e = e.check(r4.url()) : "uuid" === i || "guid" === i ? e = e.check(r4.uuid()) : "date-time" === i ? e = e.check(r4.iso.datetime({
                                    offset: !0
                                })) : "date" === i ? e = e.check(r4.iso.date()) : "time" === i ? e = e.check(r4.regex(r9)) : "duration" === i ? e = e.check(r4.iso.duration()) : "hostname" === i ? e = e.check(r4.hostname()) : "ipv4" === i ? e = e.check(r4.ipv4()) : "ipv6" === i ? e = e.check(r4.ipv6()) : "mac" === i ? e = e.check(r4.mac()) : "cidr" === i ? e = e.check(r4.cidrv4()) : "cidr-v6" === i ? e = e.check(r4.cidrv6()) : "base64" === i ? e = e.check(r4.base64()) : "base64url" === i ? e = e.check(r4.base64url()) : "e164" === i ? e = e.check(r4.e164()) : "credit_card" === i ? e = e.check(r4.creditCard()) : "iban" === i ? e = e.check(r4.iban()) : "jwt" === i ? e = e.check(r4.jwt()) : "emoji" === i ? e = e.check(r4.emoji()) : "nanoid" === i ? e = e.check(r4.nanoid()) : "cuid" === i ? e = e.check(r4.cuid()) : "cuid2" === i ? e = e.check(r4.cuid2()) : "ulid" === i ? e = e.check(r4.ulid()) : "xid" === i ? e = e.check(r4.xid()) : "ksuid" === i && (e = e.check(r4.ksuid()))
                            }
                            "number" == typeof t.minLength && (e = e.min(t.minLength)),
                            "number" == typeof t.maxLength && (e = e.max(t.maxLength)),
                            t.pattern && (e = e.regex(new RegExp(t.pattern))),
                            o = e;
                            break
                        }
                    case "number":
                    case "integer":
                        {
                            let e = "integer" === s ? r4.number().int() : r4.number();
                            "number" == typeof t.minimum && !0 !== t.exclusiveMinimum && (e = e.min(t.minimum)),
                            "number" == typeof t.maximum && !0 !== t.exclusiveMaximum && (e = e.max(t.maximum)),
                            "number" == typeof t.exclusiveMinimum ? e = e.gt(t.exclusiveMinimum) : !0 === t.exclusiveMinimum && "number" == typeof t.minimum && (e = e.gt(t.minimum)),
                            "number" == typeof t.exclusiveMaximum ? e = e.lt(t.exclusiveMaximum) : !0 === t.exclusiveMaximum && "number" == typeof t.maximum && (e = e.lt(t.maximum)),
                            "number" == typeof t.multipleOf && (e = e.multipleOf(t.multipleOf)),
                            o = e;
                            break
                        }
                    case "boolean":
                        o = r4.boolean();
                        break;
                    case "null":
                        o = r4.null();
                        break;
                    case "object":
                        {
                            let e = {},
                                a = t.properties || {},
                                n = new Set(t.required || []),
                                s = "object" == typeof t.additionalProperties ? ae(t.additionalProperties, i) : void 0;
                            for (let [t, A] of Object.entries(a)) {
                                let r = ae(A, i);
                                (0, h.assignProp)(e, t, n.has(t) ? r : r.optional())
                            }
                            if (t.patternProperties) {
                                let A = t.patternProperties,
                                    r = Object.keys(A),
                                    a = [];
                                for (let e of r) {
                                    let t = ae(A[e], i),
                                        r = r4.string().regex(new RegExp(e));
                                    a.push(r4.looseRecord(r, t))
                                }
                                let n = [];
                                if (Object.keys(e).length > 0 && n.push(r4.object(e).passthrough()), n.push(...a), 0 === n.length) o = r4.object({}).passthrough();
                                else if (1 === n.length) o = n[0];
                                else {
                                    let e = r4.intersection(n[0], n[1]);
                                    for (let t = 2; t < n.length; t++) e = r4.intersection(e, n[t]);
                                    o = e
                                }
                                if (!1 === t.additionalProperties) {
                                    let t = Object.keys(e),
                                        i = r.map(e => new RegExp(e)),
                                        A = o;
                                    o = o.check(e => {
                                        if (!(0, h.isPlainObject)(e.value)) return;
                                        let r = [];
                                        for (let A of Object.keys(e.value)) !t.includes(A) && (i.some(e => e.test(A)) || r.push(A));
                                        r.length && e.issues.push({
                                            code: "unrecognized_keys",
                                            keys: r,
                                            input: e.value,
                                            inst: A
                                        })
                                    })
                                }
                            } else {
                                let i = r4.object(e);
                                o = !1 === t.additionalProperties ? i.strict() : s ? i.catchall(s) : i.passthrough()
                            }
                            let l = void 0 !== t.propertyNames && !0 !== t.propertyNames,
                                d = "number" == typeof t.minProperties ? t.minProperties : void 0,
                                u = "number" == typeof t.maxProperties ? t.maxProperties : void 0;
                            if (l || void 0 !== d || void 0 !== u) {
                                let e;
                                l && (e = ae("object" == typeof t.propertyNames && void 0 === t.propertyNames.type ? {
                                    type: "string",
                                    ...t.propertyNames
                                } : t.propertyNames, i)), A = o, r = {
                                    keySchema: e,
                                    minProperties: d,
                                    maxProperties: u
                                }, o = r4.transform(e => e).check(e => {
                                    let t = e.value;
                                    if ("object" != typeof t || null === t || Array.isArray(t)) return;
                                    let i = Object.getOwnPropertyNames(t);
                                    if (void 0 !== r.minProperties && i.length < r.minProperties && e.issues.push({
                                            origin: "object",
                                            code: "too_small",
                                            minimum: r.minProperties,
                                            inclusive: !0,
                                            message: `Too small: expected object to have >=${r.minProperties} properties`,
                                            input: t,
                                            inst: A,
                                            continue: !0
                                        }), void 0 !== r.maxProperties && i.length > r.maxProperties && e.issues.push({
                                            origin: "object",
                                            code: "too_big",
                                            maximum: r.maxProperties,
                                            inclusive: !0,
                                            message: `Too big: expected object to have <=${r.maxProperties} properties`,
                                            input: t,
                                            inst: A,
                                            continue: !0
                                        }), r.keySchema)
                                        for (let t of i) {
                                            let i = r.keySchema.safeParse(t);
                                            i.success || e.issues.push({
                                                code: "invalid_key",
                                                origin: "record",
                                                issues: i.error.issues,
                                                input: t,
                                                path: [t],
                                                continue: !0
                                            })
                                        }
                                }).pipe(A)
                            }
                            break
                        }
                    case "array":
                        {
                            let e = t.prefixItems,
                                A = t.items;
                            if (e && Array.isArray(e)) {
                                let r = "number" == typeof t.minItems ? t.minItems : 0,
                                    a = r1(e.map(e => ae(e, i)), r),
                                    n = Array.isArray(A) ? void 0 : r7(A, i),
                                    s = r4.tuple(a);
                                o = n ? s.rest(n) : s, "number" == typeof t.minItems && (o = o.check(r4.minLength(t.minItems))), "number" == typeof t.maxItems && (o = o.check(r4.maxLength(t.maxItems)))
                            } else if (Array.isArray(A)) {
                                let e = "number" == typeof t.minItems ? t.minItems : 0,
                                    r = r1(A.map(e => ae(e, i)), e),
                                    a = r7(t.additionalItems, i),
                                    n = r4.tuple(r);
                                o = a ? n.rest(a) : n, "number" == typeof t.minItems && (o = o.check(r4.minLength(t.minItems))), "number" == typeof t.maxItems && (o = o.check(r4.maxLength(t.maxItems)))
                            } else if (void 0 !== A) {
                                let e = ae(A, i),
                                    r = r4.array(e);
                                "number" == typeof t.minItems && (r = r.min(t.minItems)), "number" == typeof t.maxItems && (r = r.max(t.maxItems)), o = r
                            } else o = r4.array(r4.any());
                            (!0 === t.uniqueItems || void 0 !== t.contains) && (a = o, n = {
                                uniqueItems: !0 === t.uniqueItems,
                                containsSchema: void 0 !== t.contains ? ae(t.contains, i) : void 0,
                                minContains: "number" == typeof t.minContains ? t.minContains : void 0,
                                maxContains: "number" == typeof t.maxContains ? t.maxContains : void 0
                            }, o = r4.transform(e => e).check(e => {
                                let t = e.value;
                                if (Array.isArray(t)) {
                                    if (!0 === n.uniqueItems) {
                                        let i = new Map;
                                        for (let A = 0; A < t.length; A++) {
                                            let r = function e(t, i) {
                                                if (null === t) return "z";
                                                let A = typeof t;
                                                if ("object" !== A) {
                                                    if ("number" === A && Number.isNaN(t)) return null;
                                                    let e = String(t);
                                                    return `${A[0]}${e.length}:${e}`
                                                }
                                                if (i.has(t)) return null;
                                                i.add(t);
                                                try {
                                                    if (Array.isArray(t)) {
                                                        let A = [];
                                                        for (let r of t) {
                                                            let t = e(r, i);
                                                            if (null === t) return null;
                                                            A.push(t)
                                                        }
                                                        return `a${A.length}:[${A.join(",")}]`
                                                    }
                                                    let A = Object.keys(t).sort(),
                                                        r = [];
                                                    for (let a of A) {
                                                        let A = e(t[a], i);
                                                        if (null === A) return null;
                                                        r.push(`${a.length}:${a}=${A}`)
                                                    }
                                                    return `o${r.length}:{${r.join(",")}}`
                                                } finally {
                                                    i.delete(t)
                                                }
                                            }(t[A], new Set);
                                            if (null === r) continue;
                                            let a = i.get(r);
                                            if (void 0 === a) {
                                                i.set(r, A);
                                                continue
                                            }
                                            e.issues.push({
                                                code: "custom",
                                                message: `Array items must be unique: element at index ${A} duplicates the one at index ${a}`,
                                                input: t,
                                                path: [A],
                                                continue: !0
                                            })
                                        }
                                    }
                                    if (n.containsSchema) {
                                        let i = n.minContains ? ? 1,
                                            A = void 0 !== n.maxContains ? n.maxContains + 1 : 1 / 0,
                                            r = 0;
                                        for (let e of t)
                                            if (n.containsSchema.safeParse(e).success && ++r >= A) break;
                                        r < i && e.issues.push({
                                            code: "custom",
                                            message: `Array must contain at least ${i} matching ${r3(i)}; found ${r}`,
                                            input: t,
                                            continue: !0
                                        }), void 0 !== n.maxContains && r > n.maxContains && e.issues.push({
                                            code: "custom",
                                            message: `Array must contain at most ${n.maxContains} matching ${r3(n.maxContains)}`,
                                            input: t,
                                            continue: !0
                                        })
                                    }
                                }
                            }).pipe(a));
                            break
                        }
                    default:
                        throw Error(`Unsupported type: ${s}`)
                }
                return o
            }(e, t),
            A = e.type || void 0 !== e.enum || void 0 !== e.const;
        if (e.anyOf && Array.isArray(e.anyOf)) {
            let r = e.anyOf.map(e => ae(e, t)),
                a = r4.union(r);
            i = A ? r4.intersection(i, a) : a
        }
        if (e.oneOf && Array.isArray(e.oneOf)) {
            let r = e.oneOf.map(e => ae(e, t)),
                a = r4.xor(r);
            i = A ? r4.intersection(i, a) : a
        }
        if (e.allOf && Array.isArray(e.allOf))
            if (0 === e.allOf.length) i = A ? i : r4.any();
            else {
                let r = A ? i : ae(e.allOf[0], t),
                    a = +!A;
                for (let i = a; i < e.allOf.length; i++) r = r4.intersection(r, ae(e.allOf[i], t));
                i = r
            }!0 === e.nullable && "openapi-3.0" === t.version && (i = r4.nullable(i)), !0 === e.readOnly && (i = r4.readonly(i)), void 0 !== e.default && (i = i.default(e.default));
        let r = {};
        for (let t of ["$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor"]) t in e && (r[t] = e[t]);
        for (let t of ["contentEncoding", "contentMediaType", "contentSchema"]) t in e && (r[t] = e[t]);
        if ("object" === e.type && void 0 === e.$ref)
            for (let t of (void 0 === e.propertyNames || r5(e.propertyNames) || (r.propertyNames = e.propertyNames), ["minProperties", "maxProperties"])) void 0 !== e[t] && (r[t] = e[t]);
        if ("array" === e.type && void 0 === e.$ref)
            for (let t of (void 0 === e.contains || r5(e.contains) || (r.contains = e.contains), ["uniqueItems", "minContains", "maxContains"])) void 0 !== e[t] && (r[t] = e[t]);
        for (let t of Object.keys(e)) r6.has(t) || (0, h.assignProp)(r, t, e[t]);
        return Object.keys(r).length > 0 && t.registry.add(i, r), e.description && (i = i.describe(e.description)), i
    }
    let at = Symbol("z.visit/resolving");

    function ai(e, t) {
        let i = "function" == typeof t ? t : (e, i) => {
                let A = t[e._zod.def.type];
                return A ? A(e, i) : e
            },
            A = new Map;
        return function e(t) {
            let r = A.get(t);
            if (r === at) return new v.$ZodLazy({
                type: "lazy",
                getter: () => A.get(t)
            });
            if (void 0 !== r) return r;
            A.set(t, at);
            let a = function(t) {
                    let i = t._zod.def;
                    switch (i.type) {
                        case "object":
                            {
                                let A = i.shape,
                                    r = Object.keys(A),
                                    a = !1,
                                    n = {};
                                for (let t of r) {
                                    let i = e(A[t]);
                                    i !== A[t] && (a = !0), n[t] = i
                                }
                                let o = i.catchall;
                                return i.catchall && (o = e(i.catchall)) !== i.catchall && (a = !0),
                                a ? (0, h.clone)(t, { ...i,
                                    shape: n,
                                    catchall: o
                                }) : t
                            }
                        case "array":
                            {
                                let A = e(i.element);
                                return A === i.element ? t : (0, h.clone)(t, { ...i,
                                    element: A
                                })
                            }
                        case "tuple":
                            {
                                let A = i.items,
                                    r = !1,
                                    a = [];
                                for (let t of A) {
                                    let i = e(t);
                                    i !== t && (r = !0), a.push(i)
                                }
                                let n = i.rest;
                                return i.rest && (n = e(i.rest)) !== i.rest && (r = !0),
                                r ? (0, h.clone)(t, { ...i,
                                    items: a,
                                    rest: n
                                }) : t
                            }
                        case "record":
                        case "map":
                            {
                                let A = e(i.keyType),
                                    r = e(i.valueType);
                                return A === i.keyType && r === i.valueType ? t : (0, h.clone)(t, { ...i,
                                    keyType: A,
                                    valueType: r
                                })
                            }
                        case "set":
                            {
                                let A = e(i.valueType);
                                return A === i.valueType ? t : (0, h.clone)(t, { ...i,
                                    valueType: A
                                })
                            }
                        case "union":
                            {
                                let A = i.options,
                                    r = !1,
                                    a = [];
                                for (let t of A) {
                                    let i = e(t);
                                    i !== t && (r = !0), a.push(i)
                                }
                                return r ? (0, h.clone)(t, { ...i,
                                    options: a
                                }) : t
                            }
                        case "intersection":
                            {
                                let A = e(i.left),
                                    r = e(i.right);
                                return A === i.left && r === i.right ? t : (0, h.clone)(t, { ...i,
                                    left: A,
                                    right: r
                                })
                            }
                        case "optional":
                        case "nullable":
                        case "default":
                        case "prefault":
                        case "catch":
                        case "readonly":
                        case "nonoptional":
                        case "promise":
                        case "success":
                            {
                                let A = e(i.innerType);
                                return A === i.innerType ? t : (0, h.clone)(t, { ...i,
                                    innerType: A
                                })
                            }
                        case "pipe":
                            {
                                let A = e(i.in),
                                    r = e(i.out);
                                return A === i.in && r === i.out ? t : (0, h.clone)(t, { ...i,
                                    in: A,
                                    out: r
                                })
                            }
                        case "function":
                            {
                                let A = e(i.input),
                                    r = e(i.output);
                                return A === i.input && r === i.output ? t : (0, h.clone)(t, { ...i,
                                    input: A,
                                    output: r
                                })
                            }
                        case "lazy":
                            {
                                let A = i.getter,
                                    {
                                        _cachedInner: r,
                                        ...a
                                    } = i;
                                return (0, h.clone)(t, { ...a,
                                    getter: () => e(A())
                                })
                            }
                        default:
                            return t
                    }
                }(t),
                n = i(a, a !== t);
            return A.set(t, n), n
        }(e)
    }

    function aA(e) {
        return function(e, t) {
            if (!t ? .length) return e;
            let i = e._zod.def;
            return (0, h.clone)(e, (0, h.mergeDefs)(i, {
                checks: [...i.checks ? ? [], ...t]
            }), {
                parent: !0
            })
        }(e.out, e.checks)
    }
    e.s(["bigint", 0, function(e) {
        return ey._coercedBigint(An, e)
    }, "boolean", 0, function(e) {
        return ey._coercedBoolean(Ar, e)
    }, "date", 0, function(e) {
        return ey._coercedDate(Ak, e)
    }, "number", 0, function(e) {
        return ey._coercedNumber(i5, e)
    }, "string", 0, function(e) {
        return ey._coercedString(t3, e)
    }], 717958);
    var ar = e.i(717958);
    e.s(["$brand", () => g.$brand, "$input", () => H.$input, "$output", () => H.$output, "INVALID", 0, F, "NEVER", () => g.NEVER, "TimePrecision", () => rW.TimePrecision, "ZodAny", 0, Av, "ZodArray", 0, AD, "ZodBase64", 0, ij, "ZodBase64URL", 0, iM, "ZodBigInt", 0, An, "ZodBigIntFormat", 0, As, "ZodBoolean", 0, Ar, "ZodCIDRv4", 0, iZ, "ZodCIDRv6", 0, iQ, "ZodCUID", 0, iy, "ZodCUID2", 0, ix, "ZodCatch", 0, rc, "ZodCodec", 0, rh, "ZodCompileAsyncError", 0, W, "ZodCompileUnsupportedError", 0, X, "ZodCreditCard", 0, iG, "ZodCustom", 0, rE, "ZodCustomStringFormat", 0, i0, "ZodDate", 0, Ak, "ZodDefault", 0, rr, "ZodDiscriminatedUnion", 0, AZ, "ZodE164", 0, iJ, "ZodEmail", 0, ir, "ZodEmoji", 0, ih, "ZodEnum", 0, Aq, "ZodError", 0, tM, "ZodExactOptional", 0, A9, "ZodFile", 0, A1, "ZodFirstPartyTypeKind", 0, i, "ZodFunction", 0, rB, "ZodGUID", 0, io, "ZodIBAN", 0, iX, "ZodIPv4", 0, iE, "ZodIPv6", 0, iR, "ZodISODate", 0, it, "ZodISODateTime", 0, ie, "ZodISODuration", 0, iA, "ZodISOTime", 0, ii, "ZodInstanceOf", 0, rL, "ZodIntersection", 0, AQ, "ZodIssueCode", 0, rJ, "ZodJWT", 0, iq, "ZodKSUID", 0, iB, "ZodLazy", 0, rw, "ZodLiteral", 0, A4, "ZodMAC", 0, iO, "ZodMap", 0, AG, "ZodNaN", 0, rg, "ZodNanoID", 0, i$, "ZodNever", 0, AI, "ZodNonOptional", 0, rs, "ZodNull", 0, Ap, "ZodNullable", 0, rt, "ZodNumber", 0, i5, "ZodNumberFormat", 0, i7, "ZodObject", 0, AB, "ZodOptional", 0, A3, "ZodPipe", 0, rf, "ZodPrefault", 0, rn, "ZodPreprocess", 0, rI, "ZodPromise", 0, rU, "ZodReadonly", 0, ry, "ZodRealError", 0, tH, "ZodRecord", 0, AM, "ZodSet", 0, AX, "ZodString", 0, t3, "ZodStringFormat", 0, t9, "ZodSuccess", 0, rd, "ZodSymbol", 0, Au, "ZodTemplateLiteral", 0, rx, "ZodTransform", 0, A8, "ZodTuple", 0, Aj, "ZodType", 0, t8, "ZodULID", 0, iw, "ZodURL", 0, ig, "ZodUUID", 0, il, "ZodUndefined", 0, Am, "ZodUnion", 0, AO, "ZodUnknown", 0, Ab, "ZodVoid", 0, A_, "ZodXID", 0, iU, "ZodXor", 0, AR, "_ZodString", 0, t5, "_default", 0, ra, "_function", 0, rS, "any", 0, Ah, "array", 0, AU, "base64", 0, iV, "base64url", 0, iH, "bigint", 0, Ao, "boolean", 0, Aa, "catch", 0, rm, "check", 0, rP, "cidrv4", 0, iL, "cidrv6", 0, iz, "clone", () => h.clone, "codec", 0, rb, "coerce", 0, ar, "compile", 0, K, "config", () => g.config, "core", 0, tP, "creditCard", 0, iW, "cuid", 0, i_, "cuid2", 0, ik, "currencyCode", 0, i2, "custom", 0, rO, "date", 0, Aw, "decode", 0, tK, "decodeAsync", 0, tY, "deepPartial", 0, function(e) {
        return ai(e, {
            object: e => e.partial(),
            union: e => {
                let t = e._zod.def;
                return void 0 === t.discriminator ? e : AN(t.options)
            }
        })
    }, "describe", 0, rT, "discriminatedUnion", 0, AL, "e164", 0, iF, "email", 0, ia, "emoji", 0, ib, "encode", 0, tX, "encodeAsync", 0, tq, "endsWith", () => ey._endsWith, "enum", 0, AY, "exactOptional", 0, re, "file", 0, A2, "flattenError", () => f.flattenError, "float32", 0, Ae, "float64", 0, At, "formatError", () => f.formatError, "fromJSONSchema", 0, function(e, t) {
        var i, A;
        let r, a;
        if ("boolean" == typeof e) return e ? r4.any() : r4.never();
        try {
            r = JSON.parse(JSON.stringify(e))
        } catch {
            throw Error("fromJSONSchema input is not valid JSON (possibly cyclic); use $defs/$ref for recursive schemas")
        }
        let n = {
            version: (i = r, A = t ? .defaultTarget, "https://json-schema.org/draft/2020-12/schema" === (a = i.$schema) ? "draft-2020-12" : "http://json-schema.org/draft-07/schema#" === a ? "draft-7" : "http://json-schema.org/draft-04/schema#" === a ? "draft-4" : A ? ? "draft-2020-12"),
            defs: r.$defs || r.definitions || {},
            refs: new Map,
            processing: new Set,
            rootSchema: r,
            registry: t ? .registry ? ? H.globalRegistry
        };
        return ae(r, n)
    }, "function", 0, rS, "getDiscriminatedOption", () => v.getDiscriminatedOption, "getErrorMap", 0, rG, "globalRegistry", () => H.globalRegistry, "gt", () => ey._gt, "gte", () => ey._gte, "guid", 0, is, "hash", 0, i8, "hex", 0, i1, "hostname", 0, i6, "httpUrl", 0, iv, "iban", 0, iK, "includes", () => ey._includes, "input", 0, function(e) {
        return ai(e, {
            pipe: e => {
                var t;
                return (t = e._zod.def).in._zod.traits.has("$ZodTransform") ? aA(t) : t.in
            },
            default: (e, t) => t ? A7(e._zod.def.innerType) : e,
            catch: (e, t) => t ? e._zod.def.innerType : e
        })
    }, "instanceof", 0, rQ, "int", 0, i9, "int32", 0, Ai, "int64", 0, Al, "intersection", 0, Az, "invertCodec", 0, r$, "ipv4", 0, iP, "ipv6", 0, iT, "iso", 0, r0, "json", 0, rj, "jwt", 0, iY, "keyof", 0, AC, "ksuid", 0, iS, "lazy", 0, rD, "length", () => ey._length, "literal", 0, A6, "locales", 0, M, "looseObject", 0, AP, "looseRecord", 0, AF, "lowercase", () => ey._lowercase, "lt", () => ey._lt, "lte", () => ey._lte, "mac", 0, iN, "map", 0, AW, "maxLength", () => ey._maxLength, "maxSize", () => ey._maxSize, "memoizer", 0, C, "meta", 0, rZ, "mime", () => ey._mime, "minLength", () => ey._minLength, "minSize", () => ey._minSize, "multipleOf", () => ey._multipleOf, "nan", 0, rp, "nanoid", 0, iI, "nativeEnum", 0, A0, "negative", () => ey._negative, "never", 0, Ay, "nonnegative", () => ey._nonnegative, "nonoptional", 0, rl, "nonpositive", () => ey._nonpositive, "normalize", () => ey._normalize, "null", 0, Af, "nullable", 0, ri, "nullish", 0, rA, "number", 0, i3, "object", 0, AS, "optional", 0, A7, "output", 0, function(e) {
        return ai(e, {
            pipe: e => aA(e._zod.def),
            prefault: (e, t) => t ? e._zod.def.innerType : e
        })
    }, "overwrite", () => ey._overwrite, "parse", 0, tJ, "parseAsync", 0, tF, "partialRecord", 0, AJ, "pipe", 0, rv, "positive", () => ey._positive, "prefault", 0, ro, "preprocess", 0, rV, "prettifyError", () => f.prettifyError, "promise", 0, rC, "properties", () => ey._properties, "property", () => ey._property, "readonly", 0, r_, "record", 0, AH, "refine", 0, rN, "regex", () => ey._regex, "regexes", () => tO.regexes, "registry", () => H.registry, "safeDecode", 0, t4, "safeDecodeAsync", 0, t1, "safeEncode", 0, t0, "safeEncodeAsync", 0, t6, "safeParse", 0, tG, "safeParseAsync", 0, tW, "set", 0, AK, "setErrorMap", 0, rF, "size", () => ey._size, "slugify", () => ey._slugify, "startsWith", () => ey._startsWith, "strictObject", 0, AE, "string", 0, t7, "stringFormat", 0, i4, "stringbool", 0, rz, "success", 0, ru, "superRefine", 0, rR, "symbol", 0, Ac, "templateLiteral", 0, rk, "toJSONSchema", 0, tS, "toLowerCase", () => ey._toLowerCase, "toUpperCase", () => ey._toUpperCase, "toZod", () => h.toZod, "transform", 0, A5, "treeifyError", () => f.treeifyError, "trim", () => ey._trim, "tuple", 0, AV, "uint32", 0, AA, "uint64", 0, Ad, "ulid", 0, iD, "undefined", 0, Ag, "union", 0, AN, "unknown", 0, A$, "uppercase", () => ey._uppercase, "url", 0, ip, "util", () => tN.util, "uuid", 0, id, "uuidv4", 0, iu, "uuidv6", 0, ic, "uuidv7", 0, im, "validate", () => p.validate, "validateAsync", () => p.validateAsync, "void", 0, Ax, "withParser", 0, q, "xid", 0, iC, "xor", 0, AT], 65716);
    var aa = e.i(65716);
    e.s(["z", 0, aa], 77829);
    var aa = aa;
    let an = "media_url or job output url",
        ao = aa.registry();
    e.s(["mediaUrls", 0, function({
        min: e = 0,
        max: t,
        kind: i,
        label: A
    }, r) {
        var a, n;
        let o = aa.array(aa.url({
            protocol: /^https?$/
        }));
        return a = (e > 0 ? o.min(e) : o).max(t).describe(void 0 === r ? an : `${an}; ${r}`), n = {
            kind: i,
            label: A,
            min: e,
            max: t
        }, ao.add(a, { ...ao.get(a),
            ...n
        }), a
    }], 450212), e.s([], 117131);
    var as = e.i(267901),
        al = e.i(493331),
        ad = e.i(500827);
    let au = e => e < 0 ? 0 : e > 255 ? 255 : e;

    function ac(e, t, i, A) {
        let r = new Float32Array(e.length),
            a = new Float32Array(e.length),
            n = (e, r, a) => {
                let n = a ? i : t,
                    o = a ? t : i;
                for (let i = 0; i < n; i++)
                    for (let n = 0; n < 3; n++) {
                        let s = 0,
                            l = 0;
                        for (let r = -A; r <= A; r++) {
                            let A = Math.min(o - 1, Math.max(0, r));
                            s += e[(a ? (i * t + A) * 4 : (A * t + i) * 4) + n], l++
                        }
                        for (let d = 0; d < o; d++) {
                            r[(a ? (i * t + d) * 4 : (d * t + i) * 4) + n] = s / l;
                            let u = Math.min(o - 1, d + A + 1),
                                c = Math.max(0, d - A),
                                m = a ? (i * t + u) * 4 : (u * t + i) * 4,
                                g = a ? (i * t + c) * 4 : (c * t + i) * 4;
                            s += e[m + n] - e[g + n]
                        }
                    }
            };
        return n(e, a, !0), n(a, r, !1), r
    }

    function am(e) {
        let t = /^#?([0-9a-f]{6})$/i.exec(e.trim());
        if (!t) return [255, 255, 255];
        let i = Number.parseInt(t[1], 16);
        return [i >> 16 & 255, i >> 8 & 255, 255 & i]
    }

    function ag(e, t, i, A) {
        let r = 0 !== A.structure || 0 !== A.sharpen,
            a = r && 0 !== A.structure ? ac(e, t, i, Math.max(2, Math.round(Math.min(t, i) / 60))) : null,
            n = r && 0 !== A.sharpen ? ac(e, t, i, 1) : null,
            o = 0 !== A.brightness || 0 !== A.contrast || 0 !== A.warmth || 0 !== A.saturation,
            s = A.brightness / 100 * 70,
            l = 1 + A.contrast / 100,
            d = 1 + A.saturation / 100,
            u = A.warmth / 100 * 40,
            c = A.fade / 100 * 60,
            m = A.highlights / 100,
            g = A.shadows / 100,
            p = A.structure / 100,
            f = A.sharpen / 100,
            v = A.tintStrength / 100,
            h = am(A.shadowTint),
            b = am(A.highlightTint),
            $ = A.vignette / 100,
            I = t / 2,
            y = i / 2,
            _ = Math.hypot(I, y);
        for (let i = 0, A = 0; i < e.length; i += 4, A++) {
            let r = e[i],
                x = e[i + 1],
                k = e[i + 2];
            a && 0 !== p && (r += (r - a[i]) * p * 1.4, x += (x - a[i + 1]) * p * 1.4, k += (k - a[i + 2]) * p * 1.4), n && 0 !== f && (r += (r - n[i]) * f * 1.2, x += (x - n[i + 1]) * f * 1.2, k += (k - n[i + 2]) * f * 1.2), o && (r += s, x += s, k += s, r = (r - 128) * l + 128, x = (x - 128) * l + 128, k = (k - 128) * l + 128, r += u, k -= u);
            let w = .2126 * r + .7152 * x + .0722 * k;
            o && (r = w + (r - w) * d, x = w + (x - w) * d, k = w + (k - w) * d);
            let D = Math.min(1, Math.max(0, w / 255));
            if (0 !== m) {
                let e = 70 * m * D * D;
                r += e, x += e, k += e
            }
            if (0 !== g) {
                let e = 70 * g * (1 - D) * (1 - D);
                r += e, x += e, k += e
            }
            if (v > 0) {
                let e = D * D * v,
                    t = (1 - D) * (1 - D) * v;
                r = r * (1 - e - t) + b[0] * e + h[0] * t, x = x * (1 - e - t) + b[1] * e + h[1] * t, k = k * (1 - e - t) + b[2] * e + h[2] * t
            }
            if (c > 0 && (r = r * (1 - c / 255) + c, x = x * (1 - c / 255) + c, k = k * (1 - c / 255) + c), $ > 0) {
                let e = A % t,
                    i = (A - e) / t,
                    a = 1 - $ * Math.max(0, Math.hypot(e - I, i - y) / _ - .35) * 1.6;
                r *= a, x *= a, k *= a
            }
            e[i] = au(r), e[i + 1] = au(x), e[i + 2] = au(k)
        }
    }
    let ap = (e, t) => (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2 + (e[2] - t[2]) ** 2;

    function af(e, t = 16) {
        let i = function(e, t = 4e4) {
            let i = e.length >> 2,
                A = Math.max(1, Math.floor(i / t)),
                r = [];
            for (let t = 0; t < i; t += A) {
                let i = 4 * t;
                e[i + 3] < 16 || r.push([e[i], e[i + 1], e[i + 2]])
            }
            return r
        }(e);
        if (!i.length) return [];
        let A = [... function(e) {
            let t = [e];
            for (; t.length < 256;) {
                t.sort((e, t) => t.length - e.length);
                let e = t.shift();
                if (!e || e.length < 2) {
                    e && t.push(e);
                    break
                }
                let i = 0,
                    A = -1;
                for (let t = 0; t < 3; t++) {
                    let r = 255,
                        a = 0;
                    for (let i of e) i[t] < r && (r = i[t]), i[t] > a && (a = i[t]);
                    a - r > A && (A = a - r, i = t)
                }
                e.sort((e, t) => e[i] - t[i]);
                let r = e.length >> 1;
                t.push(e.slice(0, r), e.slice(r))
            }
            return t.filter(e => e.length).map(e => {
                let t = e.reduce((e, t) => [e[0] + t[0], e[1] + t[1], e[2] + t[2]], [0, 0, 0]);
                return {
                    color: [Math.round(t[0] / e.length), Math.round(t[1] / e.length), Math.round(t[2] / e.length)],
                    weight: e.length
                }
            })
        }(i.slice()), ...(function(e) {
            let t = e.map(e => {
                    let t = Math.max(e[0], e[1], e[2]),
                        i = Math.min(e[0], e[1], e[2]);
                    return {
                        pixel: e,
                        score: (t - i) * (.3 + t / 255)
                    }
                }).sort((e, t) => t.score - e.score).slice(0, 200),
                i = new Map;
            for (let {
                    pixel: e
                } of t) {
                let t = `${e[0]>>5}-${e[1]>>5}-${e[2]>>5}`;
                if (i.has(t) || i.set(t, e), i.size >= 4) break
            }
            return [...i.values()]
        })(i).map(e => ({
            color: e,
            weight: 1
        }))];
        if (!A.length) return [];
        A.sort((e, t) => t.weight - e.weight);
        let r = [A[0].color];
        for (; r.length < t && r.length < A.length;) {
            let e = null,
                t = -1;
            for (let i of A) {
                let A = 1 / 0;
                for (let e of r) A = Math.min(A, ap(i.color, e));
                A > t && (t = A, e = i.color)
            }
            if (!e || t <= 0) break;
            r.push(e)
        }
        let a = e => .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
        return r.sort((e, t) => a(e) - a(t)).map(e => {
            var t, i, A;
            return t = e[0], i = e[1], A = e[2], `#${[t,i,A].map(e=>Math.round(au(e)).toString(16).padStart(2,"0")).join("").toUpperCase()}`
        })
    }
    e.s(["gradePixels", 0, ag, "paletteOf", 0, af], 551995), e.i(551995);
    var av = e.i(661628);
    e.s(["APP_ID", () => as.APP_ID, "CLIP_MODEL", () => ad.CLIP_MODEL, "CLIP_RATIO", () => ad.CLIP_RATIO, "CLIP_RESOLUTION", () => ad.CLIP_RESOLUTION, "DEFAULT_KNOBS", () => al.DEFAULT_KNOBS, "KNOB_DEFS", () => al.KNOB_DEFS, "PHOTO_MODEL", () => ad.PHOTO_MODEL, "PHOTO_SIZE", () => ad.PHOTO_SIZE, "buildImageGradePrompt", () => al.buildImageGradePrompt, "buildVideoGradePrompt", () => al.buildVideoGradePrompt, "describeDials", () => al.describeDials, "gradePixels", 0, ag, "gradeRequest", () => av.gradeRequest, "knobsTouched", () => al.knobsTouched, "paletteOf", 0, af], 273411);
    var ah = e.i(273411);
    e.s(["colorGradingKit", 0, ah], 260026);
    var ah = ah;
    let ab = {
            src: e.i(375222).default,
            width: 256,
            height: 256,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRgYBAABXRUJQVlA4TPoAAAAvB8ABAM1VICICHggKDioAAIB3FJAiAoVAAAAAAQEAAAASAAAQEQBAAgAAAEAAPgBAAcIADCPij7sAAAAPBOQEAAAA4PzvtxYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABV23sgAEcIAAAA53+L/a++UgIQAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMKjRzVtWORbH4TasQFQEjEQxH/0fO99Wjg13Du2QqjdfV08rsybZTe7VsawZf0M/+rv2b7qDRnFBrDKf1TnlQGfwE+Wa23HPn57L4GGaGQiNdmP8plmU3i9ioiBkhyKWrqaLN9rGgIE"
        },
        a$ = {
            src: e.i(801667).default,
            width: 1024,
            height: 768,
            blurWidth: 8,
            blurHeight: 6,
            blurDataURL: "data:image/webp;base64,UklGRvAAAABXRUJQVlA4TOMAAAAvB0ABAM1VICICHgjAEQIAAIBdFh+9pkrKgE8EAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAgABCyewAAAA8ExAQCAADg/G/ZfP8xBB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADSP23zQIBtGAAAAM4/SWEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgMP+rdck8sS98P55bbQZfRrvg2YFiWT/k7oBkqwhnhIC8nH1aikyxdAfRRjg8fedOzS0QKfaTIJFchx2vTe/Ps7eP7+34xWUtYbSqDOXbcM+AAA="
        },
        aI = {
            id: ah.APP_ID,
            name: "Color Grade",
            tagline: "Apply a cinematic color grade to a photo or clip",
            icon: ab,
            thumbnail: a$.src,
            hero: {
                url: "https://cdn.pika.art/v2/creation/app-heroes/color-grading.mp4",
                media_type: "video"
            },
            aliases: ["Color Grading", "Gemini", "LUT", "look", "Relight"],
            categories: ["ai-video-toolkit"],
            professions: ["agency", "video-editor", "designer", "marketer", "creator"],
            nav_tags: ["video-tools", "image-tools", "use-cases", "all-apps"],
            best_for: "Color Grade is best for campaign and launch assets, client-ready creative concepts, visual exploration and polished imagery.",
            status: "live",
            output_type: ["image", "video"],
            display_order: 640,
            mcp: {
                as: "presets"
            },
            handoff: {
                text: {
                    field: "notes",
                    role: "optional direction for the grade"
                },
                inputs: [{
                    slot: "media",
                    accepts: ["image", "video"],
                    max: 1,
                    role: "the photo or clip to color grade",
                    required: !0
                }, {
                    slot: "reference",
                    accepts: ["image"],
                    max: 1,
                    role: "a reference image whose colors drive the grade"
                }]
            }
        };
    e.s(["meta", 0, aI], 7193);
    var ay = e.i(180048);
    let a_ = {
        id: "create-audio",
        name: "Music Studio",
        tagline: "Generate original music beds and instrumentals",
        icon: {
            src: e.i(517613).default,
            width: 256,
            height: 256,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRhoBAABXRUJQVlA4TA4BAAAvB8ABAM1VICICHgiADQIAAIDPLlIFEMADAQoBAgAAAICQABEAAAACgAAAACAIgAAcBAAgFVK9ajcAAAAPBICGAQAA4PyrWo/tBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7fL3rJAwHIQQAAADj/3/y2VlVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzGq/+vcX+YzBHamSTRZAKCZZAZ07frFc73E817LP2bf9L9yBKhlf12/vCa19jZiOQpVt8h95i6I7ZPetvL6VbLIAupGG9YTJhnyaLzYEEIqdNsez+UML8MprQkAxyRqrdMk1IrdRAqJDJP+A7upMbajZg6t5qzsqgAA="
        },
        thumbnail: {
            src: e.i(518077).default,
            width: 1024,
            height: 768,
            blurWidth: 8,
            blurHeight: 6,
            blurDataURL: "data:image/webp;base64,UklGRvYAAABXRUJQVlA4TOkAAAAvB0ABAM1VICICHgiACQMAAAC15wAACIAAAAAAAAAAAAAAOAAAAAAAAA4EAAAAIO5JCZmn3CHfFAAAgAeCdgIBAABw/lshDgAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEaOz29zwQgBQGAACA87/0X7tqtozVBCgBAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAABmRR77ZTZWkP4vMMcnsAJhaczmzgxn5Fdr3P2VNy5z+57HL46KQzt1YkiwkHSc8Nlvsc2MVh6v3R87cTZLCgGQUWU2QfaavtrvUUzyoZ3H3aYXAgA="
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/create-music.mp4",
            media_type: "video"
        },
        aliases: ["Create Audio", "Pika Music", "Pika SFX", "Sonilo", "MiniMax Music", "MiniMax Music 2.0", "Stable Audio", "Cassette Music", "Beatoven", "Lyria", "soundtrack", "song"],
        categories: ["featured", "pika", "create-media"],
        professions: ["creator", "video-editor", "developer"],
        nav_tags: ["pika", "audio", "all-apps"],
        best_for: "Music, songs with lyrics or sound effects from text; also scores an existing clip with the Pika Soundtrack model.",
        status: "live",
        output_type: "audio",
        edits: [{
            action: "soundtrack",
            accepts: "video",
            slot: "source",
            seed: {
                choice: ay.PIKA_SOUNDTRACK
            },
            field: "video",
            prefill: {
                model: ay.PIKA_SOUNDTRACK
            }
        }],
        display_order: 290,
        handoff: {
            text: {
                field: "prompt",
                role: "a description of the music",
                max: 2e3
            }
        }
    };
    e.s(["meta", 0, a_], 169588);
    let ax = {
        id: "create-environment",
        name: "Create Location",
        tagline: "Generate a reusable location",
        icon: {
            src: e.i(14891).default,
            width: 128,
            height: 128,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRjABAABXRUJQVlA4TCMBAAAvB8ABAM1VICICHgiADQIAAIDnAOqHIFAeBdQTAAA4qIIAAAAAAAAAAIAAAAAAAABUIguJHuTOSegHAADAAwHAQQQAADj/Xbtttj5V6QglHwEKhQAAAAAAAAAAAAAAAAAAAABAAAAAAICEhAUnVR4IgA0CAADA+af8AilAgHLyDiEAAAAAAAAAAAAAAAAAAIgAAEgCERGO4A88ktydtyqR41I78Tj4EUf2w1h+9g7+13/aHsZmnlpNnKKth6XoOVHuqOYz0dI5KDdE0uLtRdaPTbRVwV4mXKQd2uZ10lj65DvD8soYx9wCd0AzpAp9p5fO5V53phkuI9ZDLesOXiic3v+Yh28sPQzGPCcDldmD/GxIUIlcAOsDNhjaatoo0iERkAIA"
        },
        thumbnail: {
            src: e.i(822171).default,
            width: 800,
            height: 500,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRtAAAABXRUJQVlA4TMMAAAAvBwABAM1VICICHgjIDQMAAICk01kLAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAEADtuQvAAAADwSkBgAAAOD8u49YAQAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAC34eCLYNAAAAwPnD9zYZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIABAAAAAAAAEPnegw+xPyOzT10jP4CAqHCoTsxxKmxCIE0L8pO1fy/lJQpjicdZvX3Ge1jNzJbzmTIA"
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/create-environment.mp4",
            media_type: "video"
        },
        aliases: ["Seedream", "backdrop", "set", "environment", "Moodboard"],
        categories: ["ai-video-toolkit"],
        professions: ["agency", "video-editor", "designer", "creator"],
        nav_tags: ["video-tools", "image-tools", "all-apps"],
        best_for: "Create Location is best for client-ready creative concepts, visual exploration and polished imagery, motion, video, and finishing workflows.",
        status: "live",
        hidden: !0,
        output_type: "image",
        display_order: 280,
        handoff: {
            text: {
                field: "detail",
                role: "optional detail for the scene"
            },
            inputs: [{
                slot: "references",
                accepts: ["image"],
                max: 10,
                role: "subject reference images to place in a new location",
                required: !0
            }]
        }
    };
    e.s(["meta", 0, ax], 666424);
    var ak = e.i(314149),
        aw = e.i(712488);
    e.s(["APP_ID", () => ak.APP_ID, "CREATE_IMAGE_MODELS", () => aw.CREATE_IMAGE_MODELS, "CREATE_IMAGE_ROWS", () => aw.CREATE_IMAGE_ROWS, "createImageFormat", () => aw.createImageFormat, "createImageRequest", () => aw.createImageRequest, "createImageRow", () => aw.createImageRow], 840014);
    var aD = e.i(840014);
    e.s(["createImageKit", 0, aD], 60565);
    var aD = aD;
    let aU = {
            src: e.i(426307).default,
            width: 256,
            height: 256,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRggBAABXRUJQVlA4TPwAAAAvB8ABAM1VICICHgiADQIAAIDNBoCnAAAAOABwDgAAAAAAAAAAwAMAAAAKAAciVwA4AIDAD0D8swEAADwQgCIGAACA869V+wfYAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCudS0PBOAEAgAA4Pzvc9s2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPSAr1+rIv/4dNpsERIE5MW2UI9O62UFcb9hBdHoOs9sqeUv4mqzJ6OmzlYhR9F9/v0wlz5IIUGggnadhWJdtwpAQF4U63x6Pt2O81IUebGljz+RCZpgO+nvZEvUu8YMa8Q94x5hjc0n6gU="
        },
        aC = {
            src: e.i(200698).default,
            width: 1024,
            height: 768,
            blurWidth: 8,
            blurHeight: 6,
            blurDataURL: "data:image/webp;base64,UklGRgIBAABXRUJQVlA4TPYAAAAvB0ABAM1VICICHgiADQIAAIBeffiNpurn4EIAAAAAAAQAAAAAAAAAAAAAAAAAAAAQ4i6Ajl0FwD0AAAAPBMAGAQAA4Py3voKXq8MAcDkAAHAAAAAAAAAAAAAAAAAAAAAAAAAgOICLy3/BvfQ8EIATCAAAgPNftY+WvA8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAACAsFb9FblfXdO8W6jLN7MvktY9KrFgFZDSghNV30RfRAwWPjhG3/fyru2/viids7kDH+S5mu0dVJnmTOQRL5ZfeciRra3WNTYp61Q7d0HHZ0s8DyA1O/y4Ms6ppEF+8QA="
        },
        aB = {
            id: aD.APP_ID,
            name: "Image Studio",
            tagline: "Generate an image from a prompt — pick any image model",
            icon: aU,
            thumbnail: aC.src,
            hero: {
                url: "https://cdn.pika.art/v2/creation/app-heroes/create-image.mp4",
                media_type: "video"
            },
            aliases: ["Create Image", "Nano Banana", "Seedream", "GPT Image 2.5", "Recraft", "Ideogram", "Flux", "Flux Schnell", "Flux Pro", "ByteDance", "OpenAI", "Google", "text to image"],
            categories: ["featured", "create-media"],
            professions: ["designer", "creator", "developer"],
            nav_tags: ["image-tools", "all-apps"],
            best_for: "New stills from a prompt and optional references; headshots, character sheets and photo edits have their own apps.",
            status: "live",
            output_type: "image",
            display_order: 40,
            handoff: {
                text: {
                    field: "prompt",
                    role: "a description of the image",
                    mentions: !0
                },
                inputs: [{
                    slot: "references",
                    accepts: ["image"],
                    max: 16,
                    role: "reference or source images to edit"
                }]
            }
        };
    e.s(["meta", 0, aB], 90356);
    let aS = {
            id: "create-sfx",
            name: "SFX Studio",
            tagline: "Generate one-shot sound effects from a description",
            icon: {
                src: e.i(997137).default,
                width: 256,
                height: 256,
                blurWidth: 8,
                blurHeight: 8,
                blurDataURL: "data:image/webp;base64,UklGRhoBAABXRUJQVlA4TA4BAAAvB8ABAM1VICICHgiADQIAAIDN3uEHFAICIIAIAAAIEAAAAAUAAIIAAAAAABwAAAAIRAUISvSX2w0AAMADAThCAAAAOP/tt9+XvggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg+xrv1jwQACJGAACA8++6mnO3vx8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACYadS20kX+VSWRgxMICEhDiSOnJMbV/PxdYz7P4eeMq0kWDg7eNx8u2KGe3+69c2wJdINX0B51us/xupYsCQQEH6/sR2R8Sx7qoQAQkEYpYTez9e3fMY9/zYs0lLjZtWlPJzGAWvvypkocObWZ6VIdd3GK6aLNkBM="
            },
            thumbnail: {
                src: e.i(22649).default,
                width: 1024,
                height: 768,
                blurWidth: 8,
                blurHeight: 6,
                blurDataURL: "data:image/webp;base64,UklGRvYAAABXRUJQVlA4TOoAAAAvB0ABAM1VICICHghACgMAAICkSAF4MACEBxAABgwYEAAAAAAAAAAAAAAAAACDAYAZTCAExAZLdQAAAHggwCAMAAAA59/uFCcOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgMMBXJR6WFseCMAJBAAAwPnvbvvfSgCE9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIIJqRfI9KE8ZrzwPBI18GbAA0jdHQJPp9YTS1maLAMvcmAHDEKIjbSqWKqxYr6IRhNMu13r6+o6MX9/fb3t+T+04yTyAHNNM/6fX4VdtZ6v3H02sPQA="
            }.src,
            hero: {
                url: "https://cdn.pika.art/v2/creation/app-heroes/create-sfx.mp4",
                media_type: "video"
            },
            aliases: ["Create SFX", "ElevenLabs", "Sonilo", "Lyria", "Cassette SFX", "Beatoven SFX", "foley"],
            categories: ["pika", "create-media"],
            professions: ["for-fun", "creator", "video-editor", "developer"],
            nav_tags: ["pika", "audio", "all-apps"],
            best_for: "SFX Studio is best for motion, video, and finishing workflows, model testing and prototype media, playful experiments and casual creation.",
            status: "live",
            output_type: "audio",
            display_order: 300,
            handoff: {
                text: {
                    field: "prompt",
                    role: "a description of the sound effect",
                    max: 450
                }
            }
        },
        aE = {
            id: "create-speech",
            name: "Speech Studio",
            tagline: "Synthesize speech and voiceover from any text",
            icon: {
                src: e.i(10198).default,
                width: 256,
                height: 256,
                blurWidth: 8,
                blurHeight: 8,
                blurDataURL: "data:image/webp;base64,UklGRgwBAABXRUJQVlA4TAABAAAvB8ABAM1VICICHghADgIAAIB7mwFAAQAJhAUARgAAAAAAgAwIQghQAAAAAAAQBgA0BBIAUABkNv8AAAAPBKCIAQAA4PwvXeuHDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAztr6SBwJAwwAAAHD+9Vor+AEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwXlv9Rf728mBuKcUAKJbWJPl5ri81hB1hEsLeUh7MPWLOST+/YmGNzLglt5TilNR+2j9P995NWEoqxQAACADQggEARLGM1X3Gea/rWs9yY6VYWo+1vTZt/5yT9xr2SK2HpCsL5z64i3Ov6SQN"
            },
            thumbnail: {
                src: e.i(742125).default,
                width: 1024,
                height: 768,
                blurWidth: 8,
                blurHeight: 6,
                blurDataURL: "data:image/webp;base64,UklGRvQAAABXRUJQVlA4TOcAAAAvB0ABAM1VICICHggIDgIAAID7USyMhQwAQQAAAAAAIAAAAAAAAAAAAAAAgAEhAICVCKEBgEbS4AEAAB4IWg4CAADA+b9ZFoXAGQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQCAmH6na+BwKQwgAAAHD+90UkSxlMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAMM/yj+ot0+y3yvtq8ThsIf2iLb9sCgJRMd5Szl2T5mXb3UkRAJR5fM7Gd/+LqbwMoSB61OX063uGy3xWgiJ/i+vSddM18lwtREUyeMb9Yx2KPbRUA"
            }.src,
            hero: {
                url: "https://cdn.pika.art/v2/files/agent/34f0ba0a-deea-4629-b73c-10042bbf274f/af34cde0c9c5537746bfaa970f471ddbbfd9372c70434f0799d1e4409be73b9f",
                media_type: "video"
            },
            aliases: ["Create Speech", "Create Voice", "Pika", "TTS", "text to speech", "ElevenLabs", "MiniMax", "Chatterbox", "Inworld", "Seed-Speech", "SeedSpeech", "ByteDance", "narration"],
            categories: ["featured", "create-media", "pika"],
            professions: ["creator", "for-fun", "video-editor", "developer"],
            nav_tags: ["audio", "all-apps"],
            best_for: "A script read aloud in a chosen voice, for narration or a Talking Head Video track.",
            status: "live",
            output_type: "audio",
            display_order: 60,
            handoff: {
                text: {
                    field: "speech:text",
                    role: "the exact words to speak"
                }
            }
        };
    e.s(["meta", 0, aE], 800572);
    let aP = {
        id: "create-style",
        name: "Create Style",
        tagline: "Turn inspiration into a reusable look.",
        icon: {
            src: e.i(871036).default,
            width: 140,
            height: 140,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRpwAAABXRUJQVlA4TJAAAAAvB8ABEM1VICICHggIDgIAAICbvgQAAICGDAAgghAABQAAAAAAAAAAAAAEJggAgGAgAQSCBBCL+gQAABEeiAQAAAAAwPkHABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwACCZ8DPBsEoGCFpoNRx8iZo3qKSgInc4iQw02nR6uwv0NZkFowcYt9UiAgM="
        },
        thumbnail: {
            src: e.i(157607).default,
            width: 640,
            height: 998,
            blurWidth: 5,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRvIAAABXRUJQVlA4TOYAAAAvBMABAM1VICICHgiACQMAAAA8MwoAAA4AAAAAAAAAAAAAAAAAAACAAwAAAEIAFFC87QH64S+VFwAAgAcCYMIAAABw/l12IlB0IfAFZ3x1AAAAAIBzIAAAQAAAkQAAAAAAAAAAAAAAIMAhDwTAhAEAAOD8d6fPLw8DOgcCDgAAAAAAAAAAAAAgABAQIAAAALgAAAAAEIPA6mCPPMozzdrOvYejoIUNYAH+CvAj6Eg4GH8yixZxC/fBY8bWqNb85usr2xNfTie9JvdP96rYRqcx+MMnT+66hPzkLvtkchTC/ZhTCbntBg=="
        }.src,
        aliases: ["moodboard", "visual style", "style reference", "brand style"],
        categories: ["create-media"],
        professions: ["designer", "creator", "agency"],
        nav_tags: ["image-tools", "all-apps"],
        best_for: "Create Style turns reference images, palettes and creative direction into reusable styles for image generation.",
        status: "live",
        internal: !0,
        output_type: "image",
        fullscreen: {
            rail: {
                source: "library",
                subject: "style",
                hidden: !0
            },
            minEditorWidth: 680,
            railWidth: 112
        },
        display_order: 591,
        handoff: {
            text: null,
            inputs: []
        },
        elements: [{
            type: "style",
            role: "author"
        }]
    };
    e.s(["meta", 0, aP], 885236);
    let aO = {
        id: "create-video",
        name: "Video Studio",
        tagline: "Generate a video from a prompt — text-to-video or image-to-video",
        icon: {
            src: e.i(620446).default,
            width: 256,
            height: 256,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRhIBAABXRUJQVlA4TAUBAAAvB8ABAM1VICICHghADgIAAIA/PysACgAAQAOAjAEAAAAA0BIAAAAgKgAAAACAMgKABQAAoABY81kAAAAPBOAIAQAA4PxvfmcVggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIig/tvmPBCgIlYAAIDzf23VdWAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAzwdrXe2KTHyKSFqlGQJ7qZGwXUTPP8Kax2f7tLDmnaPokJaYNvqa9hiO1zNjqrRIa64zGfr77p7rBXLxVww1AT/UZEQACQSwl+ZXg87rd53/CtAs9lIjDWNJmadt71xTDJcaC7Ybhg134W5zG94yYA0A"
        },
        thumbnail: {
            src: e.i(924516).default,
            width: 1024,
            height: 768,
            blurWidth: 8,
            blurHeight: 6,
            blurDataURL: "data:image/webp;base64,UklGRvYAAABXRUJQVlA4TOkAAAAvB0ABAM1VICICHghADgIAAID7rcKDAgCACAIAAAAAAAAAAAAAAAAAAAAgAAABGCgCANbMIwZY/gAAADwQEBQGAACA87/fW2ogG5SJABACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgYc30HgjAEQIAAMD535lPQh4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgCdATZpkvy4yXcdkzXT63K65QnM/7nmZQCzeTz/Gfn5L3yoAAEFEFX2h9Hw390VEADjIv0Yfy7XkR/cpACiYfp/Wh2dvL9tvYiCC8E3nU6Pc0dvIvlxIAQA="
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/create-video.mp4",
            media_type: "video"
        },
        aliases: ["Create Video", "Seedance", "Kling", "Veo", "Hailuo", "MiniMax H3", "Grok Imagine", "Omni Flash", "Pika 2.5", "Luma", "Luma Dream Machine", "Ray 2", "Wan", "MiniMax Video 01", "text to video"],
        categories: ["featured", "create-media", "pika"],
        professions: ["video-editor", "creator", "agency", "developer"],
        nav_tags: ["pika", "video-tools", "all-apps"],
        best_for: "New clips from a prompt, start frame or references; continuing, reshooting, motion copying and inserting into footage have their own apps.",
        status: "live",
        output_type: "video",
        edits: [{
            action: "animate",
            accepts: "image",
            slot: "refImages",
            field: "image_urls"
        }, {
            action: "reference",
            accepts: "video",
            slot: "refVideos",
            field: "video_urls"
        }],
        intent: "prompt",
        display_order: 50,
        handoff: {
            text: {
                field: "prompt",
                role: "a description of the video",
                mentions: !0
            },
            inputs: [{
                slot: "refImages",
                accepts: ["image"],
                max: 30,
                role: "reference images"
            }, {
                slot: "refVideos",
                accepts: ["video"],
                max: 10,
                role: "reference videos"
            }, {
                slot: "refAudio",
                accepts: ["audio"],
                max: 10,
                role: "reference audio"
            }]
        }
    };
    e.s(["meta", 0, aO], 320951);
    let aN = {
        id: "dynamic-captions",
        name: "Dynamic Captions",
        tagline: "Word-by-word animated captions for talking-head videos.",
        icon: {
            src: e.i(477063).default,
            width: 128,
            height: 128,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRiQBAABXRUJQVlA4TBcBAAAvB8ABAM1VICICHgiADQIAAIBFDiAFFQCAFICogoQ4AFAUAACBAgAAIAgAEQAABAgRoFKgTqQloiAAAADwQAByEAAAAM7/d7+1VCWACAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBAmLWt79figQDYIAAAAJz/p7XfAAU4Sg4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEDVD2Q/altkfHh/GX5ubH0LxCLRHTSPXmrR+vjz68SP6rAgZpDgHKp2vUpSKk0t1Cun0623gNqMS+XXrOUSW4Ejbbl2+7SUebI2cyc8mIRdXJmR5iX+Bwx+IByADVilHn4Lu/HzRQVgDypb5Y2LLlw8IeN3853TI5FJHAu9DxJVjhwA"
        },
        thumbnail: {
            src: e.i(772301).default,
            width: 1280,
            height: 800,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRugAAABXRUJQVlA4TNsAAAAvBwABAM1VICICHgiACQMAAADf7rqdOASAQCCAIAAAAAAAAAAAAAAAAAAAAAAAAAAAoAh1l9mgAAAA8EAATiAAAADOv+WSvAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQa+vbVjwQgBMIAACA819r+guAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA4oOEal1kHO4+Ma1MbtSyRDp8PL2qU9PrfOWySxgcFzjkvBBcX/CR/5lm9/HbbagLiaDKpuWAHy5wi51bwYSwf9KWUSu+Z0B+FwcA"
        }.src,
        aliases: ["subtitles", "kinetic text", "text on video"],
        categories: ["ai-video-toolkit"],
        professions: ["creator", "video-editor"],
        nav_tags: ["video-tools", "all-apps"],
        best_for: "Dynamic Captions is best for talking-head clips that need captions timed to every word.",
        status: "live",
        output_type: "video",
        display_order: 999,
        handoff: {
            text: null,
            inputs: [{
                slot: "source",
                accepts: ["video"],
                max: 1,
                role: "the talking-head clip to caption",
                required: !0
            }]
        }
    };
    e.s(["meta", 0, aN], 568620);
    var aR = e.i(746535),
        aT = e.i(358008),
        aZ = e.i(683002);

    function aL(e) {
        return e.reduce((e, t) => Math.max(e, t.id), 0) + 1
    }

    function aQ(e, t, i = 0) {
        let A = t.map((e, t) => ({
                pin: e,
                index: t
            })).filter(({
                pin: e
            }) => "" !== e.note.trim()).map(({
                pin: e,
                index: t
            }) => `${t+1}. ${Math.round(e.x)}% across, ${Math.round(e.y)}% down: ${e.note.trim()}`),
            r = (0, aZ.serializeMentions)(e, "spaced").trim();
        return "" === r && 0 === A.length ? "" : [i > 0 ? "Edit only the first image. The remaining images are visual references for the requested changes. Keep the first image as the base and preserve anything not requested to change." : "", r, A.length > 0 ? `Pinned spots, measured from the top-left corner of the ${i>0?"first image":"image"}:` : "", ...A].filter(e => "" !== e).join("\n")
    }
    let az = "Fill the transparent area around the photo, extending the scene naturally beyond its original edges. Leave the existing pixels completely unchanged and match their lighting, perspective, grain and style exactly.";

    function aj(e) {
        let t = e.trim();
        return "" === t ? az : `${az} The new space should show: ${t}`
    }
    e.s(["MAX_INSTRUCTIONS", 0, 4e3, "MAX_PINS", 0, 5, "editPrompt", 0, aQ, "expandPrompt", 0, aj, "nextPinId", 0, aL], 648286), e.i(648286), e.s(["APP_ID", () => aR.APP_ID, "DEFAULT_CHOICE", () => aT.DEFAULT_CHOICE, "DEFAULT_ENHANCER", () => aT.DEFAULT_ENHANCER, "DEFAULT_FACTOR", () => aT.DEFAULT_FACTOR, "DEFAULT_RATIO", () => aT.DEFAULT_RATIO, "DEFAULT_RESOLUTION", () => aT.DEFAULT_RESOLUTION, "ENHANCERS", () => aT.ENHANCERS, "FACTORS", () => aT.FACTORS, "GPT_RESOLUTIONS", () => aT.GPT_RESOLUTIONS, "MAX_INSTRUCTIONS", 0, 4e3, "MAX_PINS", 0, 5, "MAX_REFERENCES", () => aT.MAX_REFERENCES, "MODELS", () => aT.MODELS, "NANO_BANANA_2", () => aT.NANO_BANANA_2, "QUALITY_NAMES", () => aT.QUALITY_NAMES, "RATIOS", () => aT.RATIOS, "buildRequest", () => aT.buildRequest, "editPrompt", 0, aQ, "expandImageRequest", () => aT.expandImageRequest, "expandPrompt", 0, aj, "nextPinId", 0, aL, "qualitiesFor", () => aT.qualitiesFor, "resolutionsFor", () => aT.resolutionsFor, "rowOf", () => aT.rowOf, "scaleOf", () => aT.scaleOf], 637070);
    var aV = e.i(637070);
    e.s(["editImageKit", 0, aV], 568274);
    var aV = aV;
    let aM = {
            src: e.i(635640).default,
            width: 256,
            height: 256,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRg4BAABXRUJQVlA4TAEBAAAvB8ABAM1VICICHggIDgIAAID7VYESAEKgFAAQQwAIAAIACBCAAAgBAAAAAAAAAAABGARQBYDR9AAAAB4IuA0EAADA+d/SbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH5+bTwQgBwEAACA89/T/teoFJMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAQAJSCxpd96yL9VoDGSAEneMRAgH+e8F/h7v4e97u1FaAx995t4p5u1rIwPa1MIfamVu8c7nYNkpS8s2KSX4IsX4pbv7XuHAMJWGwkh9Pp5Dx/CiiqBHFnGaspz9icfqoa7UGWByokvcVarENb0agFAgA="
        },
        aH = {
            src: e.i(8459).default,
            width: 1024,
            height: 768,
            blurWidth: 8,
            blurHeight: 6,
            blurDataURL: "data:image/webp;base64,UklGRuoAAABXRUJQVlA4TN4AAAAvB0ABAM1VICICHghACgMAAID5ZbOJ/194hAEAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAGQIKo/gIAAPBA0I4QAAAAzv/vLd3cSoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAB3TfAwFJgQAAADj/6cIDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEBQm7+J/L550ydcAuFuKCBB8gjKOYUKZgmYKZbxwMf9R28CHtPVd+HoVvF31WePBKnjwHxF7/P8aJ3UsRnr2HwZE77ri3tw/oKMnA0="
        },
        aJ = {
            id: aV.APP_ID,
            name: "Edit Image",
            tagline: "Edit a photo with a prompt, expand it to a new shape, or upscale it",
            icon: aM,
            thumbnail: aH.src,
            hero: {
                url: "https://cdn.pika.art/v2/creation/app-heroes/image-expand.mp4",
                media_type: "video"
            },
            aliases: ["Nano Banana", "Gemini", "Google", "Topaz", "GPT Image", "Image Expand", "retouch", "outpaint", "uncrop"],
            categories: ["ai-video-toolkit"],
            professions: ["agency", "video-editor", "designer", "creator"],
            nav_tags: ["video-tools", "image-tools", "all-apps"],
            best_for: "Changing a photo by instruction, pinned spots or references, including product photos in a new setting; Upscale also does video.",
            status: "live",
            output_type: "image",
            edits: [{
                action: "edit-image",
                accepts: "image",
                slot: "source",
                field: "image_url"
            }, {
                action: "expand",
                accepts: "image",
                slot: "source",
                seed: {
                    mode: "expand"
                },
                mcp: !1
            }],
            display_order: 600,
            handoff: {
                text: {
                    field: "instructions",
                    role: "instructions for how to edit the photo",
                    mentions: !0,
                    max: 4e3
                },
                inputs: [{
                    slot: "source",
                    accepts: ["image"],
                    max: 1,
                    role: "the photo to edit",
                    required: !0
                }, {
                    slot: "references",
                    accepts: ["image"],
                    max: 15,
                    role: "extra reference images for the edit"
                }]
            }
        };
    e.s(["meta", 0, aJ], 559249);
    let aF = {
            id: "edit-video",
            name: "Edit Video",
            tagline: "Edit an existing clip from a prompt",
            icon: {
                src: e.i(345359).default,
                width: 128,
                height: 128,
                blurWidth: 8,
                blurHeight: 8,
                blurDataURL: "data:image/webp;base64,UklGRiIBAABXRUJQVlA4TBYBAAAvB8ABAM1VICICHgiADQIAAIC3/b3ULk9QIAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAABKFAPfPr3RUAAAAPBAAHEQAA4Pxtt9pat6syNIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAA7KOwdtS9PBAAGwQAAIDz/+5fiTogAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIRQoNrt3/8tcgkVWMOLEbx5VLeSBv6Rnl/y5+77EEZBR2BMNeaoia6062lVHvIiBQU4vNaSty7dOhTynGKNNt4cz09r8QimxRW295qk+7f5AXwxI/87ezgi7FtbJ6KSvv14eXY3sx5s9fKW0zQrUyiZuDFhLDAdZqraOir6aLksZQ=="
            },
            thumbnail: {
                src: e.i(104810).default,
                width: 640,
                height: 400,
                blurWidth: 8,
                blurHeight: 5,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/APLbzfHZy/DXyO/Vxe7Sw+3QwOzOvevMuwDu0cLt0L/szb3ry7rqybfpx7XnxbLmw7AA6ce16MWz58Ow5sGt5L+r472o4rul4bmjAOS9qOO7puG5o+C3od+1nt6zm92wmdyvlgDftJ3espvdsJjcrpXbq5PaqZDZp43YpYuJplypKnN3+gAAAABJRU5ErkJggg=="
            }.src,
            hero: {
                url: "https://cdn.pika.art/v2/creation/app-heroes/edit-video.mp4",
                media_type: "video"
            },
            aliases: ["video to video", "edit clip"],
            categories: ["ai-video-toolkit"],
            professions: ["agency", "video-editor", "creator"],
            nav_tags: ["video-tools", "all-apps"],
            best_for: "Changing what happens in an existing clip while it keeps its timing and framing.",
            status: "coming_soon",
            hidden: !0,
            output_type: "video",
            display_order: 680
        },
        aG = {
            id: "eleven-multilingual",
            name: "Eleven Multilingual v2",
            tagline: "Studio-grade voiceover in 29 languages and dozens of voices",
            icon: {
                src: e.i(543744).default,
                width: 24,
                height: 24,
                blurWidth: 0,
                blurHeight: 0
            },
            thumbnail: {
                src: e.i(786405).default,
                width: 1024,
                height: 768,
                blurWidth: 8,
                blurHeight: 6,
                blurDataURL: "data:image/webp;base64,UklGRr4AAABXRUJQVlA4TLIAAAAvB0ABAM1VICICHgjACQQAAIBti4gH8AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID+6+rWAAAAD0QCAAAAAOD8GwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADsgUgAAAAAAJx/AwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAjOx8PL2CiBBOitSCBszkY/w82ZGEQARyA4gipBBekQZxKQwgK"
            }.src,
            hero: {
                url: "https://cdn.pika.art/v2/files/agent/453961fd-cb0f-4b7a-ab81-c9884d720004/4f24550b9ebd04826b3859346ce640e6447f48f635ced5413e4f49bddb9e0aa0",
                media_type: "video"
            },
            aliases: ["ElevenLabs Multilingual v2", "Chatterbox", "Inworld", "TTS"],
            categories: ["models", "voice"],
            professions: ["creator", "video-editor", "developer"],
            nav_tags: ["audio", "models", "all-apps"],
            best_for: "Eleven Multilingual v2 is best for motion, video, and finishing workflows, model testing and prototype media.",
            status: "live",
            output_type: "audio",
            display_order: 140,
            handoff: {
                text: {
                    field: "text",
                    role: "the exact words to speak"
                }
            }
        };
    e.s(["meta", 0, aG], 599486);
    let aW = {
            id: "eleven-sfx",
            name: "ElevenLabs Sound Effects v2",
            tagline: "Sound effects from a description",
            icon: {
                src: e.i(425448).default,
                width: 24,
                height: 24,
                blurWidth: 0,
                blurHeight: 0
            },
            thumbnail: {
                src: e.i(763042).default,
                width: 800,
                height: 500,
                blurWidth: 8,
                blurHeight: 5,
                blurDataURL: "data:image/webp;base64,UklGRtYAAABXRUJQVlA4TMoAAAAvBwABAM1VICICHghaCgMAAIBErAUAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAgFprUf3cOAADggYCjAAAAAJw/db9tVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHggaCcQAAAA539dCQAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAsmVa7y+yn2VTjkzK5LuOD46wQkXB/MIELhUl8cPsfn//k1qnMQbbFcmX8L0x/py3F7xiz7a2vRCIGykC"
            }.src,
            aliases: ["Eleven Text to Sound", "Cassette SFX"],
            categories: ["pika", "models"],
            professions: ["for-fun", "creator", "developer", "video-editor"],
            nav_tags: ["pika", "audio", "models", "all-apps"],
            best_for: "ElevenLabs Sound Effects v2 is best for motion, video, and finishing workflows, model testing and prototype media, playful experiments and casual creation.",
            status: "live",
            hidden: !0,
            output_type: "audio",
            display_order: 180,
            handoff: {
                text: {
                    field: "prompt",
                    role: "a description of the sound effect",
                    max: 450
                }
            }
        },
        aX = {
            id: "eleven-turbo",
            name: "Eleven Turbo v2.5",
            tagline: "Low-latency ElevenLabs TTS — same quality, faster generation",
            icon: {
                src: e.i(969523).default,
                width: 24,
                height: 24,
                blurWidth: 0,
                blurHeight: 0
            },
            thumbnail: {
                src: e.i(3960).default,
                width: 1024,
                height: 768,
                blurWidth: 8,
                blurHeight: 6,
                blurDataURL: "data:image/webp;base64,UklGRsIAAABXRUJQVlA4TLUAAAAvB0ABAM1VICICHgjAEQIAAIBt9fEPAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAWv//bLQAAwAORAAAAAAA4/wYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeyASAAAAAADn3wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgyBvFAUf1v3hwXoBUvvI3DEF+41RiCAGpzYQYQS0qAScfgAwaJJgAAA=="
            }.src,
            hero: {
                url: "https://cdn.pika.art/v2/files/agent/453961fd-cb0f-4b7a-ab81-c9884d720004/849af3c823c3c375bafc45d5f5cbd07724503c3ff1a0c03d8b9e6e5dcb54dd01",
                media_type: "video"
            },
            aliases: ["ElevenLabs Turbo v2.5", "Chatterbox", "Inworld"],
            categories: ["models", "voice"],
            professions: ["creator", "video-editor", "developer"],
            nav_tags: ["audio", "models", "all-apps"],
            best_for: "Eleven Turbo v2.5 is best for motion, video, and finishing workflows, model testing and prototype media.",
            status: "live",
            output_type: "audio",
            display_order: 150,
            handoff: {
                text: {
                    field: "text",
                    role: "the exact words to speak"
                }
            }
        };
    e.s(["meta", 0, aX], 774592);
    let aK = {
        id: "extend-video",
        name: "Extend Video",
        tagline: "Keep a clip running past its last frame",
        icon: {
            src: e.i(498209).default,
            width: 256,
            height: 256,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRgQBAABXRUJQVlA4TPcAAAAvB8ABAM1VICICHggIDgIAAID7AkEBAABQCMAIAAIAApAFAgAAAAAQUAIQACAAUgCCAQAAMFBQ/wAAAA8EHQsBAADg/N9ulQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANL9zQMBOEIAAAA4/y39VgCK4gFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQvATQtxsu8r0/oDYpQISRcVBgTFz7H3+3cxETQIJwMLB61V511BIOCJT8TzwM9bbuO9ttmv41pVQpCKUiRgUEWTqWwfvZt/fYvYnnZIyxasrMs+Rec016S5uogOaenL253Jy9GAcFAA=="
        },
        thumbnail: {
            src: e.i(606550).default,
            width: 1024,
            height: 768,
            blurWidth: 8,
            blurHeight: 6,
            blurDataURL: "data:image/webp;base64,UklGRvIAAABXRUJQVlA4TOUAAAAvB0ABAM1VICICHgiADQIAAAA9/fo7nauA8wQCAACAAwAAAAAAAAAAAAAAAAAAAIEDHIccECJ+8foNAADAAwG0AQAAADj/Vd0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC4vTwQgCMEAACA87/bQnoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoPJ9224faZCZ2aPHGqIXqbJxkKRBJZxEQVyg6s6E+1BC9Jo7VnBXbHvyHGU4MZaArcuY7lY1HrTx+nTlC/89Qtt9+n60mvJvv0DEip7Ovx/cwAcBAA=="
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/expand-video.mp4",
            media_type: "video"
        },
        aliases: ["make longer", "expand", "continuation", "video extension"],
        categories: ["ai-video-toolkit"],
        professions: ["agency", "video-editor", "creator", "designer"],
        nav_tags: ["video-tools", "image-tools", "all-apps"],
        best_for: "5–15 s more after a clip's last frame with FLUX 3, or 4–30 s with Seedance 2.5, optionally steered by a prompt; the span is trimmed to the model's input limit first.",
        status: "live",
        output_type: "video",
        edits: [{
            action: "extend",
            accepts: "video",
            slot: "source",
            field: "video"
        }],
        display_order: 550,
        mcp: {
            as: "presets",
            prep: [{
                app: "video-trim",
                note: "cut it to one 4–30 s shot"
            }]
        },
        handoff: {
            text: {
                field: "prompt",
                role: "what should happen next in the clip",
                max: 2e3
            },
            inputs: [{
                slot: "source",
                accepts: ["video"],
                max: 1,
                role: "the MP4 clip to extend",
                required: !0
            }]
        }
    };
    e.s(["meta", 0, aK], 657128);
    let aq = {
        id: "flux-3",
        name: "FLUX 3",
        tagline: "Generate video from text, keyframes, or a clip to extend",
        icon: {
            src: e.i(502767).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        thumbnail: {
            src: e.i(311865).default,
            width: 1024,
            height: 768,
            blurWidth: 8,
            blurHeight: 6,
            blurDataURL: "data:image/webp;base64,UklGRvIAAABXRUJQVlA4TOYAAAAvB0ABAM1VICICHgiADQIAAID9efAABA4ADhwhAAAAAAEOAAAAAAAAIA4AcIrjEBIEhyvghMAJQDUHAADwQDByGAAAAM4/NzsDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB47dp4IAAnEAAAAOd/Ww3lHwAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgOeRLLF/tkUu7/h5Zj976CZeogAAwqOiQ7f+ete7DhMAAAnQmxTZ1vdqIwxQcP3rjG23JPmDeLgKEbDPO42Py83MdWu+P5pg+kecLVqPY2HroyMoIQ=="
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/media/media_d0fe182d-3338-430d-bf76-33f7994a1633/output.mp4",
            media_type: "video"
        },
        aliases: ["Black Forest Labs", "BFL", "Flux Pro", "Flux Schnell", "Flux Video"],
        categories: ["models"],
        professions: ["video-editor", "creator", "agency", "developer", "designer"],
        nav_tags: ["video-tools", "image-tools", "models", "all-apps"],
        best_for: "FLUX 3 is best for client-ready creative concepts, visual exploration and polished imagery, motion, video, and finishing workflows.",
        status: "live",
        hidden: !0,
        output_type: "video",
        display_order: 16,
        edits: [{
            action: "animate",
            accepts: "image",
            slot: "keyframes"
        }],
        intent: "prompt",
        handoff: {
            text: {
                field: "prompt",
                role: "a description of the video",
                max: 2e3
            },
            inputs: [{
                slot: "keyframes",
                accepts: ["image"],
                max: 2,
                role: "keyframe images to animate between"
            }, {
                slot: "startVideo",
                accepts: ["video"],
                max: 1,
                role: "a clip to extend",
                alone: !0
            }]
        }
    };
    e.s(["meta", 0, aq], 5461);
    let aY = {
        id: "freaky-hair-makeover",
        name: "Freaky Hair Makeover",
        tagline: "Give a selfie a wild new hairstyle",
        icon: {
            src: e.i(834767).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        thumbnail: {
            src: e.i(26017).default,
            width: 1280,
            height: 800,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRvQAAABXRUJQVlA4TOcAAAAvBwABAM1VICICHgiACQMAAABOc4QAdwAHBwAwAAAAEQQACAAAAAAQAHACAAgIQADgQLiLAkixCAAAgAcCYMIAAABw/qSikWByR3AAIAcAABwAAAAAAAAAAAAAAAHCAQAADoCucy78ASTDxQMBMGEAAAA4/1SXcAEOcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhgGuW33/4VZ5D+cZH62066NiyoP1XsXbQ2WvD8ixC0RVK16+6a98TJfOyKvZ2JBvKFAoi/s+evWT/zVyRcZXrcJcJMwF8MsbrleRaM//H+BYzYjoQAA"
        }.src,
        aliases: ["Gemini 3.1 Flash Lite"],
        categories: ["community"],
        professions: ["designer", "for-fun", "creator"],
        nav_tags: ["image-tools", "all-apps"],
        best_for: "Freaky Hair Makeover is best for visual exploration and polished imagery, playful experiments and casual creation.",
        status: "live",
        hidden: !0,
        output_type: "image",
        display_order: 730,
        handoff: {
            text: null,
            inputs: [{
                slot: "selfie",
                accepts: ["image"],
                max: 1,
                role: "a selfie to restyle",
                required: !0
            }]
        }
    };
    e.s(["meta", 0, aY], 559945);
    let a0 = {
        id: "google-omni",
        name: "Gemini Omni 1.1 Flash",
        tagline: "Fast multimodal video up to 10s — text, image, references or an edit",
        icon: {
            src: e.i(822701).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        thumbnail: {
            src: e.i(491973).default,
            width: 1024,
            height: 768,
            blurWidth: 8,
            blurHeight: 6,
            blurDataURL: "data:image/webp;base64,UklGRu4AAABXRUJQVlA4TOIAAAAvB0ABAM1VICICHghACgMAAID7AgQYAAAAAAAAAAAAAAAAAACEAABAACJjFgAIAAgAAwBrK2P75gMAAPBAQA4QAAAAzv+vlQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGD780AAUhgAAADO/67Sr2qEAWUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwIy8xGwTWVaWf5iZ2l+FSpIAlDPzLGkIUoAAAAFqufm1sPtI+tkkDnI8vlMqrdIvzkZ9OJiwv8yfHBNv/AdP31xuyoqGu+LdqSOsul12H98P"
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/google-omni.mp4",
            media_type: "video"
        },
        aliases: ["Google Omni Flash", "Gemini Omni Flash"],
        categories: ["models"],
        professions: ["video-editor", "agency", "developer", "creator", "designer"],
        nav_tags: ["video-tools", "image-tools", "models", "all-apps"],
        best_for: "Gemini Omni 1.1 Flash is best for client-ready creative concepts, visual exploration and polished imagery, motion, video, and finishing workflows.",
        status: "live",
        output_type: "video",
        display_order: 560,
        handoff: {
            text: {
                field: "prompt",
                role: "a description of the video",
                mentions: !0
            },
            inputs: [{
                slot: "references",
                accepts: ["image"],
                max: 6,
                role: "reference images"
            }]
        }
    };
    e.s(["meta", 0, a0], 753250);
    let a4 = {
            src: e.i(296610).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        a6 = {
            src: e.i(867676).default,
            width: 1600,
            height: 900,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRugAAABXRUJQVlA4TNwAAAAvBwABAM1VICICHghACgMAAAACFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgA7BEwgqGfRdjxQ/zEfwAAAB4IQAoDAADA+f/lq4SCRyASAAgAAAAAAAAAAAAAAAAAAAAAAAAAECKAADATMBN5IAA1EAAAAOdfEttDA2YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMABA+tUp8oo3kJjqH/j4Fy6ljigDuaJNPU10cQmu+uHyAikAGzUntdFE73/m94CTvR8VVOZa8k4rzx7f9+h3JmYnaQDd2l7zqF8G"
        },
        a1 = {
            id: "gpt-image-2",
            name: "GPT Image 2.5",
            tagline: "OpenAI's GPT Image 2.5 model",
            icon: a4,
            thumbnail: {
                src: e.i(833736).default,
                width: 1024,
                height: 768,
                blurWidth: 8,
                blurHeight: 6,
                blurDataURL: "data:image/webp;base64,UklGRgABAABXRUJQVlA4TPMAAAAvB0ABAM1VICICHghADgIAAIABkEEAAAAAAAAAAAAAAAAAAAAAAAAAAACAAkAVLDWmQOvNNv2PTRcAAAAPBCAHAQAA4Pzv/z8ZrRaCYcBECAAAAAAAAAAAAAAAAAAAAAAAAADwGBCAAGOEAikPBOAEAgAA4Pz3ma9HG/gHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAA1L3Vtkg3DkgCWSlFNstJfL6fwKRw/SDRn4bp/WpqVR2UjeLtjCZsOY61hNkKe5Z997ALxr2tScrNsfW5vafDlHzYngesLXLpS/3soybyHmp3Wm/uD70u4ffGVwAA"
            }.src,
            hero: {
                url: a6.src,
                media_type: "image"
            },
            aliases: ["DALL-E"],
            categories: ["models"],
            professions: ["designer", "developer", "creator"],
            nav_tags: ["image-tools", "models", "all-apps"],
            best_for: "GPT Image 2.5 is best for visual exploration and polished imagery, model testing and prototype media.",
            status: "live",
            output_type: "image",
            display_order: 110,
            handoff: {
                text: {
                    field: "prompt",
                    role: "a description of the image",
                    mentions: !0
                },
                inputs: [{
                    slot: "references",
                    accepts: ["image"],
                    max: 16,
                    role: "reference or source images to edit"
                }]
            }
        };
    e.s(["meta", 0, a1], 459871);
    let a2 = {
        id: "grok-imagine-1-5",
        name: "Grok Imagine 1.5",
        tagline: "Next-gen image-to-video, up to 15s at 720p",
        icon: {
            src: e.i(397816).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        thumbnail: {
            src: e.i(512076).default,
            width: 1024,
            height: 768,
            blurWidth: 8,
            blurHeight: 6,
            blurDataURL: "data:image/webp;base64,UklGRvIAAABXRUJQVlA4TOUAAAAvB0ABAM1VICICHgiADQIAAICBqlU/hQbg6C6AuSMQLwFQcDgkIAAAAAAAAAAAAAAAAAAAAAAAuFIAAAAPBO0EAgAA4Pzfn7O2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC4pPJ5IAApDAAAAOd/t/9JgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQGYYC1HqL5LAAxJ6ISAA/wcRlKAAiITYyiRXBRokJAq5jDARO89fVUpdBMuv5N39GM/SbasxRbHPz2u7F2/qP5m1rd61fr/uwbP2yq3MxGf9OWN8AA=="
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/grok-imagine-1-5.mp4",
            media_type: "video"
        },
        aliases: ["xAI", "x-ai", "Grok Imagine HQ"],
        categories: ["models"],
        professions: ["video-editor", "agency", "developer", "creator", "designer"],
        nav_tags: ["video-tools", "image-tools", "models", "all-apps"],
        best_for: "Grok Imagine 1.5 is best for client-ready creative concepts, visual exploration and polished imagery, motion, video, and finishing workflows.",
        status: "live",
        output_type: "video",
        display_order: 540,
        handoff: {
            text: {
                field: "prompt",
                role: "a description of the video",
                mentions: !0
            },
            inputs: [{
                slot: "images",
                accepts: ["image"],
                max: 3,
                role: "images to animate or use as references"
            }, {
                slot: "clip",
                accepts: ["video"],
                max: 1,
                role: "a clip to restyle",
                alone: !0
            }]
        }
    };
    e.s(["meta", 0, a2], 744519);
    let a8 = {
            src: e.i(141438).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        a5 = {
            src: e.i(371192).default,
            width: 1600,
            height: 900,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRugAAABXRUJQVlA4TNsAAAAvBwABAM1VICICHgiACQMAAADkmScDAAAAOAIOAAAQAAARAAAAAAAAAAAAQIAAkMR1ACcnYWgAAwAA8EDQaiAAAADO/6fNcYQRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAXOc1fNAAE4gAAAAzj8f6AEAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAADwWKZ3lkrtl+i0xvPfSLguuik9f2at8br5FYAI1Zu0AD4Ffwv08EOF9LvtTG0Plc2Z0ptBDpuWDxPXd4lo8ZV1Oyv73DJB3EdhNX4wYA"
        },
        a3 = {
            id: "grok-imagine-image",
            name: "Grok Imagine",
            tagline: "Images and video in one app, including Image 2.0",
            icon: a8,
            thumbnail: {
                src: e.i(653437).default,
                width: 1024,
                height: 768,
                blurWidth: 8,
                blurHeight: 6,
                blurDataURL: "data:image/webp;base64,UklGRvYAAABXRUJQVlA4TOoAAAAvB0ABAM1VICICHgiADQIAAID8+KsAAhAIEAAA4AAIAHAHAAAAAAAAAAAAQCAHAKBD/ACWz/XCBwYAAAAPBO0EAgAA4Pz/1sACQAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALuku15IAApDAAAAOff9gEEAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAYGBAYmSM+rrvXz7S59XJWYGK6J7t+PNrHP+ITEiPMsjNb4u+cf7SwJJoeuN830HxM8N8VUBipXesiTQV3WR167H7/o1CbRCE1ubYfazSxeXjuGEE1TxAlwUK42E="
            }.src,
            hero: {
                url: a5.src,
                media_type: "image"
            },
            aliases: ["xAI", "x-ai"],
            categories: ["models"],
            professions: ["designer", "developer", "creator", "agency", "video-editor"],
            nav_tags: ["video-tools", "image-tools", "models", "all-apps"],
            best_for: "Grok Imagine is best for client-ready creative concepts, visual exploration and polished imagery, motion, video, and finishing workflows.",
            status: "live",
            output_type: "image",
            display_order: 525,
            handoff: {
                text: {
                    field: "prompt",
                    role: "a description of the image",
                    max: 16e3,
                    mentions: !0
                },
                inputs: [{
                    slot: "images",
                    accepts: ["image"],
                    max: 3,
                    role: "reference images"
                }, {
                    slot: "clip",
                    accepts: ["video"],
                    max: 1,
                    role: "a clip to restyle into a new video",
                    alone: !0,
                    seed: {
                        tab: "video"
                    }
                }]
            }
        };
    e.s(["meta", 0, a3], 549497);
    let a7 = {
        id: "grok-imagine-video",
        name: "Grok Imagine Video",
        tagline: "Text, image, reference or video edit",
        icon: {
            src: e.i(239251).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        thumbnail: {
            src: e.i(927942).default,
            width: 800,
            height: 500,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRsQAAABXRUJQVlA4TLcAAAAvBwABAM1VICICHgiwDQMAAABrlqRV3A8AAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsMEGAADwQMgJAAAAAM7/PgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIwD4ScAAAAAOD8bwAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgj/z/0JCJ1xNpG2+M5laqrJaWRjAgQBtY6rNM2N4WR32991+fS3sIwwEA"
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/grok-imagine.mp4",
            media_type: "video"
        },
        aliases: ["xAI", "x-ai", "Grok Imagine HQ"],
        categories: ["models"],
        professions: ["video-editor", "agency", "developer", "creator", "designer"],
        nav_tags: ["video-tools", "image-tools", "models", "all-apps"],
        best_for: "Grok Imagine Video is best for client-ready creative concepts, visual exploration and polished imagery, motion, video, and finishing workflows.",
        status: "live",
        hidden: !0,
        output_type: "video",
        display_order: 530,
        handoff: {
            text: {
                field: "prompt",
                role: "a description of the video",
                mentions: !0
            },
            inputs: [{
                slot: "images",
                accepts: ["image"],
                max: 3,
                role: "images to animate or use as references"
            }, {
                slot: "clip",
                accepts: ["video"],
                max: 1,
                role: "a clip to restyle",
                alone: !0
            }]
        }
    };
    e.s(["meta", 0, a7], 648522);
    let a9 = {
        id: "hailuo-2-3",
        name: "MiniMax Hailuo 2.3",
        tagline: "Text-to-video up to 1080p",
        icon: {
            src: e.i(10203).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        thumbnail: {
            src: e.i(430577).default,
            width: 800,
            height: 500,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRtAAAABXRUJQVlA4TMMAAAAvBwABAM1VICICHgiwCQAAAICToAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKEvXa/g4AAPBAgFEgAAAAzh/lAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAID3UU9+25YHAkEAAAAAcP5fPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDINnKvmRBYvv1idSigSKHkJxykIxghGOFJGp/dV1vZhEdQTaO+1892+Z36jGzgoK7VCAkA"
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/hailuo-2-3.mp4",
            media_type: "video"
        },
        aliases: ["MiniMax Video 01"],
        categories: ["models"],
        professions: ["video-editor", "developer", "creator", "agency"],
        nav_tags: ["video-tools", "models", "all-apps"],
        best_for: "MiniMax Hailuo 2.3 is best for client-ready creative concepts, motion, video, and finishing workflows, model testing and prototype media.",
        status: "live",
        hidden: !0,
        output_type: "video",
        display_order: 500,
        handoff: {
            text: {
                field: "prompt",
                role: "a description of the video"
            }
        }
    };
    e.s(["meta", 0, a9], 810824);
    let ne = {
        id: "hailuo-2-3-fast",
        name: "MiniMax Hailuo 2.3 Fast",
        tagline: "Quicker first-frame animation",
        icon: {
            src: e.i(741154).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        thumbnail: {
            src: e.i(949505).default,
            width: 800,
            height: 500,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRtAAAABXRUJQVlA4TMMAAAAvBwABAM1VICICHgjACQQAAIBCAQAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAACF9M7utt8AAAA8EGAiCAAAgPP3AQAAAAAAAAAAAAAAAAAAAHgAAAAAAAAAAAAAAAAAdFyuti0eCLQBAAAAwPkDAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwKuJXP+FF9K9grOW6sWoBMgE/ymHgP2heQLhSSDgjH4rr3b0yhvI87Hj79LSmY60WhETsCIA"
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/hailuo-2-3-fast.mp4",
            media_type: "video"
        },
        categories: ["models"],
        professions: ["video-editor", "developer", "creator", "agency"],
        nav_tags: ["video-tools", "models", "all-apps"],
        best_for: "MiniMax Hailuo 2.3 Fast is best for client-ready creative concepts, motion, video, and finishing workflows, model testing and prototype media.",
        status: "live",
        hidden: !0,
        output_type: "video",
        display_order: 520,
        handoff: {
            text: {
                field: "prompt",
                role: "a description of the motion"
            },
            inputs: [{
                slot: "firstFrame",
                accepts: ["image"],
                max: 1,
                role: "the first frame to animate",
                required: !0
            }]
        }
    };
    e.s(["meta", 0, ne], 717349);
    let nt = {
        id: "hailuo-2-3-i2v",
        name: "MiniMax Hailuo 2.3 Image to Video",
        tagline: "Animate a first frame up to 1080p",
        icon: {
            src: e.i(182702).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        thumbnail: {
            src: e.i(953153).default,
            width: 800,
            height: 500,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRtgAAABXRUJQVlA4TMwAAAAvBwABAM1VICICHgjACQQAAABkBQAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAACCeZzY7f/tVAAAADwSgBgIAAOD8u83HAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAABYkqfuPBCQGgAAAIDz/xoAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQWt1HznsJUaa5Bqkpop4wQYYZUg7/LMluwgC50BpkO3yFbqEmsvlPNh95PNc575cnSl61eCO710/icMA="
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/hailuo-2-3-i2v.mp4",
            media_type: "video"
        },
        aliases: ["MiniMax Video 01"],
        categories: ["models"],
        professions: ["video-editor", "agency", "developer", "creator", "designer"],
        nav_tags: ["video-tools", "image-tools", "models", "all-apps"],
        best_for: "MiniMax Hailuo 2.3 Image to Video is best for client-ready creative concepts, visual exploration and polished imagery, motion, video, and finishing workflows.",
        status: "live",
        hidden: !0,
        output_type: "video",
        edits: [{
            action: "animate",
            accepts: "image",
            slot: "firstFrame"
        }],
        intent: "prompt",
        display_order: 510,
        handoff: {
            text: {
                field: "prompt",
                role: "a description of the motion"
            },
            inputs: [{
                slot: "firstFrame",
                accepts: ["image"],
                max: 1,
                role: "the first frame to animate",
                required: !0
            }]
        }
    };
    e.s(["meta", 0, nt], 366813);
    let ni = {
        id: "headshot",
        name: "Headshots",
        tagline: "Turn reference photos into a polished headshot",
        icon: {
            src: e.i(834604).default,
            width: 256,
            height: 256,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRggBAABXRUJQVlA4TPsAAAAvB8ABAM1VICICHgiADQIAAIAZGvw4oAQgCABIAXABAAAAAAgBAQQAAAgAAABAwREAABAJUTI02A8AAPBAAHIQAAAAzv982qlWGokQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBAs+mafPA8EG4YBAADg/NNuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADr4m8m8/lQiTAJJJBroq4Zhr7T53G8+xHI5RiTBPaggdzzscd6nnThUiDA+s2rPy/QnalwgLMCLqRARA0Zs1ACDDvnbTyk4SqqAtkJlctvk2bf+8/z2eyyMTXaPLr7XPfHn1PaOiCwA="
        },
        thumbnail: {
            src: e.i(499486).default,
            width: 1024,
            height: 768,
            blurWidth: 8,
            blurHeight: 6,
            blurDataURL: "data:image/webp;base64,UklGRgIBAABXRUJQVlA4TPUAAAAvB0ABAM1VICICHgiADQIAAICWNM+f6A44DgAAAAAAAAAAAAAAAAAAAAABAAAAAAoAyI0fEvf0PD4AAAAPBCAHAQAA4PxZzGYAgAEIAAAAAAAAAAAAAAAAAAAAAAAAgAWDIjwwAAUxoT617n8eCEAKAwAAwPlf/z8TAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAwwkgLFdN/rUVuY5AdF3wOPH/LiorBBqssB/Y9+aUCFUer/PqHbFzbCeqAvyh2bu9btX8dKxXIfXNa8zPdf057igc9CejOTksOpY1U3VEam98HPajz9V1jgRkzMXq2kkFUAQA="
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/headshot.mp4",
            media_type: "video"
        },
        aliases: ["Headshot Studio", "portrait", "profile photo", "LinkedIn photo", "studio headshot"],
        categories: ["ai-video-toolkit"],
        professions: ["agency", "video-editor", "designer", "marketer", "founder"],
        nav_tags: ["video-tools", "image-tools", "use-cases", "all-apps"],
        best_for: "A studio headshot from one casual photo of a real person; invented characters go to Character Studio.",
        status: "live",
        output_type: "image",
        display_order: 600,
        mcp: {
            as: "presets"
        },
        handoff: {
            text: null,
            inputs: [{
                slot: "photo",
                accepts: ["image"],
                max: 1,
                role: "a photo of the person",
                required: !0
            }]
        }
    };
    e.s(["meta", 0, ni], 591610);
    let nA = {
            src: e.i(631193).default,
            width: 30,
            height: 30,
            blurWidth: 0,
            blurHeight: 0
        },
        nr = {
            src: e.i(7061).default,
            width: 2560,
            height: 1440,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRuwAAABXRUJQVlA4TN8AAAAvBwABAM1VICICHgiACQMAAIC1IWG4I98AOAAADgAAAAAAAAAAAAAAAIAAAAAAOABAQM8BRVhAAQAA8EAATBgAAADOX5kNDDU4ggQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAECDg4Iuc/poHAmDCAAAAcP5bK2gIAiIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQQLQ1WLqLTK2rCHzxv2uO9rI+vclk3KErNy3gYZRd0y5BGN7eaG+e9jtyP1BMvQfE7wrGsogPwb0fjpGszpCHW3T+SU8UB+vSg6ixf/gAAA=="
        },
        na = {
            id: "ideogram",
            name: "Ideogram 4.5",
            tagline: "Create with Ideogram 4.5 and 4.0, edit with 4.5",
            icon: nA,
            thumbnail: {
                src: e.i(833474).default,
                width: 960,
                height: 540,
                blurWidth: 8,
                blurHeight: 5,
                blurDataURL: "data:image/webp;base64,UklGRuwAAABXRUJQVlA4TOAAAAAvBwABAM1VICICHgiACQMAAIC1IdFxIt8ACAAAAQAAAAAAAAAAAAAAAOAAAAAABAAQ8O6AxVFAAQAA8EAATBgAAADOv88r+LAPQpCAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAQIOKic02w8EIATCAAAgPPf2sDCQyAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3oOo+0GpEnm3ItxB9HtTvb0gcs/yGWroM+p8AOiv7c3tIXi/t/L4bbpr4rCL2WCBMJyL/OBK10/nTCNGlvF8rrxmSxAVUz5oJZxRFEfzCw=="
            }.src,
            hero: {
                url: nr.src,
                media_type: "image"
            },
            aliases: ["typography"],
            categories: ["models"],
            professions: ["designer", "developer", "creator", "agency"],
            nav_tags: ["image-tools", "models", "all-apps"],
            best_for: "Ideogram creates posters, product concepts and images with text, and edits existing images using references.",
            status: "live",
            output_type: "image",
            display_order: 530,
            handoff: {
                text: {
                    field: "prompt",
                    role: "a description of the image or changes to make",
                    max: 1e4,
                    mentions: !0
                },
                inputs: [{
                    slot: "references",
                    accepts: ["image"],
                    max: 5,
                    role: "the image to edit first, followed by optional reference images",
                    seed: {
                        version: "4.5"
                    }
                }]
            }
        };
    e.s(["meta", 0, na], 266520);
    let nn = {
        src: e.i(853243).default,
        width: 192,
        height: 192,
        blurWidth: 8,
        blurHeight: 8,
        blurDataURL: "data:image/webp;base64,UklGRqwAAABXRUJQVlA4TJ8AAAAvB8ABEM1VICICHggBEBoAAID7AAAGAoCCDSNQEAaEAAAAYAAAAAAAwAAAMACDYR4g0UMAQGAAgPwDAAAiPBACIwQAAIDzvwGIXwAAAAAAAAAAAAAQAwAAADwAABQBAAAAAAAAAAAASnrA0lRSULxOZRdBa3QZDknlZvLUsYng6u4tOlAaDz+DKKHUerPdKsOTvHwtTliu//fprXNrvxsA"
    };
    e.s(["default", 0, nn], 993875);
    let no = {
        id: "image-editor",
        name: "Image Studio",
        tagline: "Edit any photo with AI — fill, remove, relight, expand and upscale.",
        icon: nn,
        thumbnail: {
            src: e.i(213986).default,
            width: 1280,
            height: 720,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRjgBAABXRUJQVlA4TCwBAAAvBwABEM1VICICHgiACQMAAICYkCSFI+Z8P0ZIToBwAAAAAAAAAAAAAAAAAAAHwAEAAATAgQEB7gAAADwQABsEAACA8+9kOEAc5w8gAAKAAAdAAgAAAAAAAAAAAAAAAAB+KK6h3wAEuAN+KPNAAEwYAAAAzj9pEDSAArrE6YAIHQAAAAAAAAAAAAAAAAAAAAAAAA7Q8YOA/kPaCQ8EBIUBAADg/O+LAQAD8BIgCgAAAAAAAAwY6QkAQQgwQAAAAAAAAAAAAAAAAGGpBibA4mqTfK5Pf+GH/4Fa7/ruT8zjutKS88IrtsggAbhHjL08+/QNw/EG22h9AX18g5PhLfNclNNmJ6VB8595u/xiP+Q2SNQk3ejH4erSky1YjCRovdFqkPfC7k7+kVjNcwM="
        }.src,
        aliases: ["image editor", "photo editor", "retouch", "background remover", "layers", "crop", "color", "resize"],
        categories: ["ai-video-toolkit"],
        professions: ["designer", "creator", "agency", "video-editor"],
        nav_tags: ["image-tools", "all-apps"],
        best_for: "Image Studio is a full-screen workspace for precise AI photo edits, masked retouching, layers, resizing, color grading, relighting and upscaling.",
        status: "live",
        internal: !0,
        output_type: "image",
        fullscreen: {
            rail: {
                source: "project"
            },
            minEditorWidth: 420,
            railWidth: 144
        },
        display_order: 590,
        edits: [{
            action: "edit-image",
            accepts: "image",
            slot: "source"
        }],
        handoff: {
            text: {
                field: "prompt",
                role: "instructions for editing the image"
            },
            inputs: [{
                slot: "source",
                accepts: ["image"],
                max: 1,
                role: "the image to edit"
            }]
        },
        elements: [{
            type: "style",
            role: "use"
        }]
    };
    e.s(["meta", 0, no], 482034);
    let ns = {
        id: "inpaint",
        name: "Inpaint",
        tagline: "Mask a region and edit it with a prompt",
        icon: {
            src: e.i(854409).default,
            width: 128,
            height: 128,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRnYBAABXRUJQVlA4TGkBAAAvB8ABEM1VICICHgiADQIAAIA4HhEJISCHkgBAAEgAAAIAAAAJAAAAIBAAQAEoAIGHQ3I2P4dU8EACAADwQABsEAAAAM6/zqG+uqCKFAEgAAAAAAAAAAAAAAAAAAAAAAAAAAAEKPEol1c91uu6PBAAGwQAAIDz90uVWkFxq8gjAAQEQAEAAAAAAAAAAAAAAAAgAAAAUAABjQKhSupdxQMhwEEAAAA4/9sAAAAZAABLAACAAgAAAAAAMMkAAAAAAAAFAABAAwAwAQAA+LIMl62puh5HWyU/y64Bll6BBsYgytaSsVcb2zORFqKbxTuqpZiiUit+dISu3P3V10n6r8IMte9x0ddCrZkST6+mOLINXuJGrJuEHznZQ8Pt4XvGciUbEsQkzVomHfTUtoLh5gqCFzL/XG1P1bPJCuB8TqJo4LENchwL/uIEoEIKAWMni0FwKd+lz9o+igdWnLjjF/n6e9GZXMb3OOcnAA=="
        },
        thumbnail: {
            src: e.i(102465).default,
            width: 800,
            height: 500,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRtIAAABXRUJQVlA4TMUAAAAvBwABAM1VICICHgjACQQAAAAVQAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAJ4SZH2zuxUDAAB4ICREEAAAAOffAwAAwAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDVjgeCdgIBAABw/mcnAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAACYqlXvfyLb3292LlW9fHT5MQIeEB4kD5JsykvddZIyI3jgJuy/sTHn12xjjFInV4B1l+/72hB9AgA="
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/inpaint.mp4",
            media_type: "video"
        },
        aliases: ["GPT Image", "retouch", "remove", "Background Remover"],
        categories: ["ai-video-toolkit"],
        professions: ["agency", "video-editor", "designer", "creator"],
        nav_tags: ["video-tools", "image-tools", "all-apps"],
        best_for: "Inpaint is best for client-ready creative concepts, visual exploration and polished imagery, motion, video, and finishing workflows.",
        status: "live",
        hidden: !0,
        output_type: "image",
        edits: [{
            action: "edit-image",
            accepts: "image",
            slot: "source"
        }],
        intent: "prompt",
        display_order: 620,
        handoff: {
            text: {
                field: "prompt",
                role: "what to paint into the masked area"
            },
            inputs: [{
                slot: "source",
                accepts: ["image"],
                max: 1,
                role: "the photo to repaint",
                required: !0
            }]
        }
    };
    e.s(["meta", 0, ns], 755874);
    let nl = {
        id: "kling-4",
        name: "Kling 4.0",
        tagline: "Text-to-video with native audio, up to 30 seconds",
        icon: {
            src: e.i(839224).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        thumbnail: {
            src: e.i(518035).default,
            width: 1280,
            height: 800,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRuYAAABXRUJQVlA4TNkAAAAvBwABAM1VICICHgiACQMAAICHsR+4BAFHAAAAAoAAAAAAAAAAAAAAAAAAOAAWAAGgAABCVlivAwAA8EAATiAAAADO/3bbXl2994AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA0OSBANswAAAAnH+6qh8YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcA5aSbdG+v1aa1hfyG3g/7UFfIR8yr8KmVqSGFU08tWPo44piGh+GsnJ/dTpc5c7w9Nj0QToZeMsxdavLjXGBczECMB31fMAAA=="
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/kling-3.mp4",
            media_type: "video"
        },
        aliases: ["Kuaishou", "Kling 3.0", "Kling 2.1", "Kling 2.1 Text to Video"],
        categories: ["featured", "models"],
        professions: ["video-editor", "creator", "developer", "agency"],
        nav_tags: ["video-tools", "audio", "models", "all-apps"],
        best_for: "Kling 3.0 and 4.0 are best for client-ready creative concepts, motion, video, and finishing workflows, model testing and prototype media.",
        badge: "NEW",
        status: "live",
        output_type: "video",
        intent: "prompt",
        display_order: 120,
        handoff: {
            text: {
                field: "prompt",
                role: "a description of the video",
                max: 3072
            },
            inputs: [{
                slot: "reference",
                accepts: ["image"],
                max: 1,
                role: "an image to animate"
            }]
        }
    };
    e.s(["meta", 0, nl], 233092);
    let nd = {
        id: "language-swap",
        name: "Language Swap",
        tagline: "Speak your video in another language, in a clone of your voice",
        icon: {
            src: e.i(2035).default,
            width: 128,
            height: 128,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRiIBAABXRUJQVlA4TBUBAAAvB8ABAM1VICICHghADgIAAIBst+/aL+kbBAABAAEAAAAAAAAAAAAAAAACAAAAAAAAAAAII4B6IQEAADwQABsEAACA86/3739Pqq52EFUFAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAkJ7o/cwDAcBBBAAAOP9trQaSRAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBMUHXt1bVdq+euyOMcuqBFcu7yl+yPjAPT67rV6WcbLMtu7hzwEsyx4FjHa/fRLf5W/tnUA+YpHcGDaoIew28pMIgfmxlv9CTZnubMa0kFbwffTVTOl6H4hExgKjfYt0Ltqu81trBHtmGPUDjKsKZxhqKxiqqS8afAS7gpiTqp+BMIAA=="
        },
        thumbnail: {
            src: e.i(101231).default,
            width: 640,
            height: 400,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AM/q4szp4Mnn3sfl3MTk2sHi2L7g1rzf1QDD49nA4di94Na73tS43NK129Cy2c6w180AtdvQs9nPsNjNrdbLq9TJqNLHpdHFo8/EAKjTx6bRxqPPxKDOwp3MwJvKvpjJvJXHuwCcy7+ayr6XyLyUxrqRxbiPw7aMwbSJwLJVSlu5HmJclQAAAABJRU5ErkJggg=="
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/dubbing.mp4",
            media_type: "video"
        },
        aliases: ["Seed Audio", "voice clone", "translate", "localization", "dubbing", "lipsync"],
        categories: ["ai-video-toolkit", "voice"],
        professions: ["agency", "video-editor", "creator"],
        nav_tags: ["video-tools", "audio", "use-cases", "all-apps"],
        best_for: "Language Swap is best for talking-to-camera clips you want in one of 20 languages, in your own cloned voice, without re-recording them.",
        handoff: {
            text: null,
            inputs: [{
                slot: "source",
                accepts: ["video"],
                max: 1,
                role: "the clip to speak in another language",
                required: !0
            }]
        },
        status: "live",
        hidden: !0,
        output_type: "video",
        display_order: 700
    };
    e.s(["meta", 0, nd], 11317);
    let nu = {
        id: "lipsync-studio",
        name: "Lipsync Studio",
        tagline: "Sync a video to an audio track",
        icon: {
            src: e.i(779948).default,
            width: 128,
            height: 128,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRiwBAABXRUJQVlA4TB8BAAAvB8ABAM1VICICHggADiIAAICjlTImBQoWIJQpCA8IBoAAAAABAAAAAAQAAAAQAKQiAECpEFSSAV+lAgAA8EAAcBABAADO/+6vzmyiOiMEQQABCgAAAAAAAAAAAAAAAAAAAAAAAACMIBSMwENll+WBAOQgAAAAnP9OpS1RgIAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBKAZH6aduy7bfIOixz67L5WPpHduHTOtrGZJ0k5r7Tg3gqxMvbpFB6Xw0XcO5qfyQgBRBC+oCEcBlV5gdW+zdPxmarv5UEpW6GV7L/Fgay3ecpKXGBPMk7nKICf+C/6ALo2TpRpaFnsduZVv6Dm2KzWfpitCrFu0j5so6NuZDtzAaW0+tm2ovxBAA="
        },
        thumbnail: {
            src: e.i(452938).default,
            width: 800,
            height: 500,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRtgAAABXRUJQVlA4TMwAAAAvBwABAM1VICICHghACgMAAIACAQAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAgCnxxu/f3deTDQAA4IGgpTAAAACc/233fiFqAgAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAACM+nkg4EQAAAAA5w+8fbuWAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAkde6jRb/c7Xf+SpTmQ8CQIA68B9UpMUrZzXyVryYgkDhN3TbHiWzxwoQxCeopmzz4Wl9z4yR/g0="
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/lipsync-studio.mp4",
            media_type: "video"
        },
        aliases: ["Kling Lipsync", "dub", "mouth"],
        categories: ["ai-video-toolkit"],
        professions: ["agency", "video-editor", "creator"],
        nav_tags: ["video-tools", "audio", "use-cases", "all-apps"],
        best_for: "Lipsync Studio is best for client-ready creative concepts, motion, video, and finishing workflows.",
        status: "live",
        hidden: !0,
        output_type: "video",
        edits: [{
            action: "lip-sync",
            accepts: "video",
            slot: "video"
        }],
        display_order: 590,
        handoff: {
            text: null,
            inputs: [{
                slot: "video",
                accepts: ["video"],
                max: 1,
                role: "a clip of a face to lip sync",
                required: !0
            }, {
                slot: "audio",
                accepts: ["audio"],
                max: 1,
                role: "the voice track to sync to",
                required: !0
            }]
        }
    };
    e.s(["meta", 0, nu], 431761);
    let nc = {
        id: "minimax-h3",
        name: "MiniMax H3",
        tagline: "Generate 4-15s video from a prompt, a still, or references",
        icon: {
            src: e.i(442387).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        thumbnail: {
            src: e.i(631115).default,
            width: 1024,
            height: 768,
            blurWidth: 8,
            blurHeight: 6,
            blurDataURL: "data:image/webp;base64,UklGRvAAAABXRUJQVlA4TOMAAAAvB0ABAM1VICICHgiADQIAAAB/mSo+QnGHHJwfB4cACAAAAAAAAAAAAAAAAAAAAABAAgBUBy9SUkoHAADwQLCRGAAAAM4/vQNgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABs/108ELQUBgAAgPPvt+MsMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAmZKf+i9TPA1KucEiiCz3qn4656o02zcaGLWI2FGl8UmU47v6q65Yc1Jk+3s9/73YmtJq6khxS2FvrXVP/QS9JwiAERe/PLaeePWMrVB8R7QA="
        }.src,
        aliases: ["Hailuo"],
        categories: ["models"],
        professions: ["video-editor", "developer", "creator", "agency"],
        nav_tags: ["video-tools", "models", "all-apps"],
        best_for: "MiniMax H3 is best for client-ready creative concepts, motion, video, and finishing workflows, model testing and prototype media.",
        status: "live",
        badge: "NEW",
        output_type: "video",
        display_order: 17,
        edits: [{
            action: "animate",
            accepts: "image",
            slot: "images"
        }],
        intent: "prompt",
        handoff: {
            text: {
                field: "prompt",
                role: "a description of the video",
                mentions: !0
            },
            inputs: [{
                slot: "images",
                accepts: ["image"],
                max: 9,
                role: "reference images"
            }, {
                slot: "videos",
                accepts: ["video"],
                max: 3,
                role: "reference videos"
            }, {
                slot: "audio",
                accepts: ["audio"],
                max: 3,
                role: "reference audio"
            }]
        }
    };
    e.s(["meta", 0, nc], 690732);
    let nm = {
        id: "minimax-music-3-0",
        name: "MiniMax Music 3.0",
        tagline: "Complete tracks with singing, backing music, and arrangement from lyrics + a style prompt",
        icon: {
            src: e.i(141661).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        thumbnail: {
            src: e.i(804360).default,
            width: 1024,
            height: 768,
            blurWidth: 8,
            blurHeight: 6,
            blurDataURL: "data:image/webp;base64,UklGRsoAAABXRUJQVlA4TL0AAAAvB0ABAM1VICICHgiACQMAAIC053B+qeAOAAAAAAAAAAAAAAAAEJwAIAAAAgIQBBd+8EMQDr9AgDMHAAB4IBIAAAAAAOffAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAPRAIAAAAA4PwbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABy5AkDhU5AP5ODEvsawsXPzVy5eCpnGw4yCQ+hZmJAkHA0ACUQ8hAGBQjLC6AAA"
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/files/agent/a723a50a-707f-4eaa-bf03-1f328d14ab26/minimax-music-2-6-hero.mp4",
            media_type: "video"
        },
        aliases: ["MiniMax Music 2.6", "MiniMax Music 2.0", "Stable Audio", "Cassette Music", "Beatoven"],
        categories: ["models"],
        professions: ["creator", "developer", "video-editor"],
        nav_tags: ["pika", "audio", "models", "all-apps"],
        best_for: "MiniMax Music 3.0 is best for motion, video, and finishing workflows, model testing and prototype media.",
        status: "live",
        output_type: "audio",
        display_order: 190,
        handoff: {
            text: {
                field: "prompt",
                role: "a description of the song",
                max: 2e3
            }
        }
    };
    e.s(["meta", 0, nm], 510721);
    let ng = {
        id: "minimax-speech-hd",
        name: "MiniMax Speech 02 HD",
        tagline: "High-fidelity speech synthesis",
        icon: {
            src: e.i(977303).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        thumbnail: {
            src: e.i(355184).default,
            width: 800,
            height: 500,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRtIAAABXRUJQVlA4TMYAAAAvBwABAM1VICICHgiwCQAAAIBI5AUAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQjpLa/hwAAPBAQE4AAAAAzr/dr6oAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsLQ8EmAYAAADg/B0AAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAOB/RdvqRY67jYrcIC+ccmuKYTAMUYIAQADn6bXHv641m2UW539Plg50zzxL15S0HrfFk/RaQfG5IAE="
        }.src,
        aliases: ["Seed-Speech", "SeedSpeech", "TTS"],
        categories: ["models", "voice"],
        professions: ["creator", "video-editor", "developer"],
        nav_tags: ["audio", "models", "all-apps"],
        best_for: "MiniMax Speech 02 HD is best for motion, video, and finishing workflows, model testing and prototype media.",
        status: "live",
        hidden: !0,
        output_type: "audio",
        display_order: 160,
        handoff: {
            text: {
                field: "text",
                role: "the exact words to speak"
            }
        }
    };
    e.s(["meta", 0, ng], 991238);
    let np = {
        id: "minimax-speech-turbo",
        name: "MiniMax Speech 02 Turbo",
        tagline: "Fast speech synthesis",
        icon: {
            src: e.i(825572).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        thumbnail: {
            src: e.i(512622).default,
            width: 800,
            height: 500,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRtYAAABXRUJQVlA4TMoAAAAvBwABAM1VICICHghaCgMAAIB2MnQbAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAMMypfvvBgAA8EAATiAAAADOfwQAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAAAAKh+S9vdLg8E5AQAAADg/AEAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAGDb3bdCZP8O/ZIXbc20Y3LRFwWI/kAQmAQqAghQLDmfu/0s/MWsI9rulGKYz8hrnD737muNB+5YGkQU"
        }.src,
        aliases: ["Seed-Speech", "SeedSpeech", "TTS"],
        categories: ["models", "voice"],
        professions: ["creator", "video-editor", "developer"],
        nav_tags: ["audio", "models", "all-apps"],
        best_for: "MiniMax Speech 02 Turbo is best for motion, video, and finishing workflows, model testing and prototype media.",
        status: "live",
        hidden: !0,
        output_type: "audio",
        display_order: 170,
        handoff: {
            text: {
                field: "text",
                role: "the exact words to speak"
            }
        }
    };
    e.s(["meta", 0, np], 818129);
    let nf = {
        id: "motion-transfer",
        name: "Motion Transfer",
        tagline: "Put a character from one photo into any motion clip",
        icon: {
            src: e.i(949846).default,
            width: 256,
            height: 256,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRgIBAABXRUJQVlA4TPYAAAAvB8ABAM1VICICHghaDgIAAID3IWESAIAMDQAAAAAAAIAACAQIBAgEwAAAAAAAAABYSAAAkaKCWwAAgAcCcgIAAABw/retFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgLLvPRAAEwYAAIDz39DuV9QTIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALjDeRXXsPFFPs1gZsUCIBxJgGAmvl9/75OvGYjBzJq+dOSR2EcZHA8tvmCt5mvV/LvDvZrphRYW+Qf4AQkAAyDoXGGtvO2aTt3r/MpbbiSFpEibmIvfmVkvr3CAqsN1KnfJrpNyBwQ="
        },
        thumbnail: {
            src: e.i(900688).default,
            width: 1024,
            height: 768,
            blurWidth: 8,
            blurHeight: 6,
            blurDataURL: "data:image/webp;base64,UklGRgABAABXRUJQVlA4TPMAAAAvB0ABAM1VICICHgiADQIAAIB4/++EDgcFcIgOwAUAAAAAAAAAAAAAAAAAgADEBYEDuIDEdMLlwE8FAADAAwE4gQAAADj/VU2SEgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgMcjRWzr8kAAchAAAADOf13/MyUgAhgAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAMYABoDy0ev/I7dilbfaJSQ4ku6A0zTVuwHdzdvLDLx6gqzjmMDvkzzShi0jAGt0uQ9RqOWzf0Ul8v8RzFN1jlyG5vl/pb8cgl0UQnY5K18n5cfrsszVbsxmCVEevecifwMA"
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/kling-3-motion.mp4",
            media_type: "video"
        },
        aliases: ["Motion Control", "Kling 3.0 Motion Control", "Kuaishou", "Kling 2.1 Image to Video"],
        categories: ["models", "pika"],
        professions: ["video-editor", "agency", "developer", "creator", "designer"],
        nav_tags: ["video-tools", "image-tools", "models", "all-apps"],
        best_for: "Animate a person or character from a single image using a motion reference. For Kling, match full- or half-body framing and use a continuous shot with the performer visible. Fast or complex motion may distort or shorten the result.",
        status: "live",
        output_type: "video",
        display_order: 130,
        mcp: {
            as: "presets"
        },
        handoff: {
            text: {
                field: "prompt",
                role: "an optional description of the motion",
                max: 2500
            },
            inputs: [{
                slot: "character",
                accepts: ["image"],
                max: 1,
                role: "the character image to animate",
                required: !0
            }, {
                slot: "driver",
                accepts: ["video"],
                max: 1,
                role: "the clip whose motion to copy (up to 30s)",
                required: !0
            }]
        }
    };
    e.s(["meta", 0, nf], 773026);
    let nv = {
        id: "multi-shot-video",
        name: "Multi-shot Video",
        tagline: "Generate a clip with multiple shots in one run",
        icon: {
            src: e.i(901839).default,
            width: 128,
            height: 128,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRigBAABXRUJQVlA4TBsBAAAvB8ABAM1VICICHgiADQIAAIB11dVCmZzqAVECIIAAAAAAAAAAAAAAAAAAEAAAAAAkRBGAyEP3yCsAAAA8EAAcRAAAgPNvu9N2d2xJAiyQAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3SFo3/GPBAAGwQAAIDz/+Okkiq8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECUSh6K9cq5Z/ixz6v7dGWVpPtNX1ors3Ge4Xvjn8lS0zx9AAyGSmdOoh8LAFBMnu3SwNTq/WPvrRSiPxYujW1uq7dagl4/foDPo4wZkoljqcYvlqAoBRejhFlEEsC9Kx5mnmMUbfhYK56PdoZE8+bCnOYgK45cTuzyv3eTNXnJVChOrz6KMEAA=="
        },
        thumbnail: {
            src: e.i(491020).default,
            width: 800,
            height: 500,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRsoAAABXRUJQVlA4TL0AAAAvBwABAM1VICICHgiwCQAAAAA4BQQAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAEgJiNd9ew4AAPBAoA0AAAAAzt+rAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAIAHgm0DAAAAcP4GAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4GuTRfZ/1Diktu3HONMD1hNK4AGl6n5aUX0IIYWwjcJ9o9u5nitAai2lxHruBrOY6QAA"
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/multi-shot-video.mp4",
            media_type: "video"
        },
        aliases: ["Kling", "multi shot", "sequence", "scenes"],
        categories: ["ai-video-toolkit"],
        professions: ["agency", "video-editor", "creator"],
        nav_tags: ["video-tools", "all-apps"],
        best_for: "Multi-shot Video is best for client-ready creative concepts, motion, video, and finishing workflows.",
        status: "live",
        hidden: !0,
        output_type: "video",
        display_order: 650,
        handoff: {
            text: {
                field: "prompt",
                role: "a description of the multi-shot video",
                max: 3072
            }
        }
    };
    e.s(["meta", 0, nv], 467980);
    let nh = {
            src: e.i(423943).default,
            width: 256,
            height: 256,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRtIAAABXRUJQVlA4TMUAAAAvB8ABAM1VICICHghACgMAAIDrGQYAYcAAAAAAAEYAABgCAAAAAAAAIBAAMAAQAAAQA/ADMAB0/yIAAB4IwQkAAADA+d+3CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPzyQIpqIAAAAM7//egAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICDZiuyvx8syADM76f0q+1fgJNnO3o77xYBRiEhVFqLABN7naO/NtK9AvAje8/kmTMPTMGAAwA="
        },
        nb = {
            src: e.i(835008).default,
            width: 1090,
            height: 612,
            blurWidth: 8,
            blurHeight: 4,
            blurDataURL: "data:image/webp;base64,UklGRtYAAABXRUJQVlA4TMkAAAAvB8AAAM1VICICHggACQAAAABjgBHYzACDbTQYAAAAAAAAAAAAAAAAAAAAAAAAYAdig2EMFgMAAHggwCYAAAAA5z9K/khElYjAAQkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABC0nkgwCYAAAAA56/fdU6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC4O0TUpGNcb+KNoEofE/IcTnD2LPkxLQxoHIld0D1qx+5etMsgFRotPTeG3Qm2xjV+zQaxqUtLxt93gAA"
        },
        n$ = {
            id: "nano-banana",
            name: "Nano Banana 2.1",
            tagline: "Google's Nano Banana, Lite to Pro — a 0.5K sketch or a 4K render.",
            icon: nh,
            thumbnail: {
                src: e.i(789830).default,
                width: 901,
                height: 675,
                blurWidth: 8,
                blurHeight: 6,
                blurDataURL: "data:image/webp;base64,UklGRvwAAABXRUJQVlA4TPAAAAAvB0ABAM1VICICHgiADQIAAAB34D0B91Cv3I9kAQAAAAAAAAAAAAAAAAAAAAAAAAAAgIb+9COdA6oOAADwQAByEAAAAM5/+/2uvYePoETeCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALM4DAbZhAAAAOP+17/QfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHfYnmZaizRtf2x/lZdCeCpN7Z/2dzIMgwrssbvOEShCyh4T9rnEAv9XixkUFPrf9I06F3vQnJDBdiQv9qyBt22z4ac+z3VlisqbZnqUx9s4ux/qO7rTHuS6iwI="
            }.src,
            hero: {
                url: nb.src,
                media_type: "image"
            },
            aliases: ["Gemini", "Gemini 3.1 Flash Lite Image", "Gemini 3.1 Flash Image", "Gemini 3 Pro Image", "Nano Banana Pro", "Nano Banana Edit"],
            categories: ["featured", "models"],
            professions: ["designer", "developer", "creator"],
            nav_tags: ["image-tools", "models", "all-apps"],
            best_for: "Nano Banana 2.1 is best for visual exploration and polished imagery, model testing and prototype media.",
            status: "live",
            output_type: "image",
            edits: [{
                action: "edit-image",
                accepts: "image",
                slot: "references"
            }],
            intent: "prompt",
            display_order: 315,
            handoff: {
                text: {
                    field: "prompt",
                    role: "a description of the image",
                    mentions: !0
                },
                inputs: [{
                    slot: "references",
                    accepts: ["image"],
                    max: 14,
                    role: "reference or source images to edit"
                }]
            }
        };
    e.s(["meta", 0, n$], 762605);
    let nI = {
        id: "pika-2-5",
        name: "Pika 2.5",
        tagline: "Text or image to video with Pika 2.5",
        icon: {
            src: e.i(753597).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        thumbnail: {
            src: e.i(716111).default,
            width: 1024,
            height: 768,
            blurWidth: 8,
            blurHeight: 6,
            blurDataURL: "data:image/webp;base64,UklGRvQAAABXRUJQVlA4TOcAAAAvB0ABAM1VICICHgiADQIAAIA9XXQADgIAB45wAAAAAAEOAAAAAAAAwB0AcCQhCBcEIR4QIXAOoD4HAADwQAhQGAAAAM7//rcWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAaf17IABHCAAAAOd/Nz8qBQAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQIJoEytti1zfPTumClfyRn1dBQC6fmTYMFzPpX+2BgkAoIJOlirGrL6Vp1Ks4PnvK96t5G75sc1RawL7OsedZqddlz8W74ca9JI613Qa4cZxPPWfsSAA"
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/pika-2-5.mp4",
            media_type: "video"
        },
        aliases: ["Pika 2.5 Text to Video", "Pika 2.5 Image to Video", "Pika 2.2", "Pika 2.2 Text to Video", "Pika 2.2 Image to Video", "Pika Turbo", "Pika Turbo Image to Video", "Pikascenes", "Pikatwists", "Pika 3.0"],
        categories: ["featured", "pika", "models"],
        professions: ["video-editor", "creator", "developer", "agency", "designer"],
        nav_tags: ["pika", "video-tools", "image-tools", "models", "all-apps"],
        best_for: "Pika 2.5 is best for prompt-led clips, animating a still, visual exploration, and polished video concepts.",
        status: "live",
        output_type: "video",
        edits: [{
            action: "animate",
            accepts: "image",
            slot: "source"
        }],
        intent: "prompt",
        display_order: 350,
        handoff: {
            text: {
                field: "prompt",
                role: "a description of the video"
            },
            inputs: [{
                slot: "source",
                accepts: ["image"],
                max: 1,
                role: "an image to animate"
            }]
        }
    };
    e.s(["meta", 0, nI], 944232);
    let ny = {
        id: "pika-2-5-i2v",
        name: "Pika 2.5 Image to Video",
        tagline: "Animate a still with Pika 2.5",
        icon: {
            src: e.i(694132).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        thumbnail: {
            src: e.i(492773).default,
            width: 1024,
            height: 768,
            blurWidth: 8,
            blurHeight: 6,
            blurDataURL: "data:image/webp;base64,UklGRu4AAABXRUJQVlA4TOIAAAAvB0ABAM1VICICHgiACQMAAICv1Q9XcBdA8hwAQAAAAAAAAAAAAAAAAAAFEAEADgBwAATAH6H/dwcBAAB4IKBGAAAAAOff4AEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPitLg8ELQcBAADg/P3JDBQBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQq5hddy4vcnuHmGect5fRSdQPookEqe1kq91/VqCylgFFhvd09nC5Z3mpxKLoZvC7l3/Oe+XtJdYBRjKfta1249D2a+MBqFR8IrFAYUDCET4V"
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/pika-2-5-i2v.mp4",
            media_type: "video"
        },
        aliases: ["Pika 2.2 Image to Video", "Pika Turbo", "Pika Turbo Image to Video", "Pikascenes"],
        categories: ["featured", "pika", "models"],
        professions: ["video-editor", "creator", "agency", "developer", "designer"],
        nav_tags: ["pika", "video-tools", "image-tools", "models", "all-apps"],
        best_for: "Pika 2.5 Image to Video is best for client-ready creative concepts, visual exploration and polished imagery, motion, video, and finishing workflows.",
        status: "live",
        hidden: !0,
        output_type: "video",
        edits: [{
            action: "animate",
            accepts: "image",
            slot: "source"
        }],
        intent: "prompt",
        display_order: 360,
        handoff: {
            text: {
                field: "prompt",
                role: "an optional description of the motion"
            },
            inputs: [{
                slot: "source",
                accepts: ["image"],
                max: 1,
                role: "the image to animate",
                required: !0
            }]
        }
    };
    e.s(["meta", 0, ny], 266755);
    let n_ = {
        id: "pika-2-5-keyframe",
        name: "Pikaframes",
        tagline: "Animate between up to five stills with Pika 2.5",
        icon: {
            src: e.i(515188).default,
            width: 256,
            height: 256,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRggBAABXRUJQVlA4TPwAAAAvB8ABAM1VICICHggIDgIAAIB7MAAJZACgIhBALACAARkAAGAAAAACAABEIACAJECAbACAhBCgwAAAADwQcCMGAACA87+0/QEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALB9l3ggADkIAAAA5/+PbjbGWAIRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACACJglyfb94yO/M8BTjCgQgmgBBn/97yvbleu95Wv8AxzruTqw2dqn4L+dfbASzf1VfuvtB1iJyZMoUJnh71lYboVxjqgEhCAVe2YrC1Nj56czAgWmqLM62eJrTmsaFIDpxKn6KWZCNyErAAM="
        },
        thumbnail: {
            src: e.i(975062).default,
            width: 1024,
            height: 768,
            blurWidth: 8,
            blurHeight: 6,
            blurDataURL: "data:image/webp;base64,UklGRvoAAABXRUJQVlA4TO4AAAAvB0ABAM1VICICHgiADQIAAIDRq9e9nvcncAA4AA4ORAAAACAAAAAAAAAAAAAAAAAgAAQEMDwAURsAAAAPBBgFAgAA4Pzbpl4XCR4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAyO08EIAcBAAAgPO/X80AUGAAAAAAAAAAAAAAAAAAAAAAAAAAAABAADxGAECVxLz5/22Rx2yr/NRsnHRBwP63ZvqTCxd6uvmfYd+19AOokUTvPFOU/B17cDjchl3srwNmQgQaP4zq1znXdb83akTA3m1kLV1AVpk098UwGJOEoaRP3ewqbo0A"
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/media/uploads/a7112d4d-62ed-4a11-8dee-74e89c2ec037/51cab9cc8dea4a8f9e7a52dc0134f29d.mp4",
            media_type: "video"
        },
        aliases: ["Pika 2.5 Keyframe", "Pika 2.2 Keyframe", "Frame to frame"],
        categories: ["pika", "models"],
        professions: ["video-editor", "creator", "developer", "agency"],
        nav_tags: ["pika", "video-tools", "models", "all-apps"],
        best_for: "Pikaframes is best for animating storyboards, ordered keyframe motion, and transitions between still images.",
        status: "live",
        output_type: "video",
        display_order: 365,
        handoff: {
            text: {
                field: "prompt",
                role: "an optional description of the transitions"
            },
            inputs: [{
                slot: "keyframes",
                accepts: ["image"],
                max: 5,
                role: "up to five keyframe images to transition between, in order",
                required: !0
            }]
        }
    };
    e.s(["meta", 0, n_], 908442);
    var nx = e.i(441036);
    let nk = {
        id: "pika-dejavu",
        name: "Pika Deja vu",
        tagline: "Make any trend your own with your characters, outfits, products or a few words.",
        icon: {
            src: e.i(502383).default,
            width: 128,
            height: 128,
            blurWidth: 0,
            blurHeight: 0
        },
        thumbnail: {
            src: e.i(871208).default,
            width: 1280,
            height: 720,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAFAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwBh8WXa6y90IUKeSFERJwOck1yfWJXOz6pH6r7Tqf/Z"
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/uploads/86f1d170-4432-4b75-8479-4c2b86773f28/87a3875ade1d432783a6ed33008a60eb.mp4",
            media_type: "video"
        },
        aliases: ["recreate a trend", "remake a reel", "TikTok remix", "character swap"],
        categories: ["ai-video-toolkit", "pika"],
        professions: ["creator", "marketer", "video-editor"],
        nav_tags: ["all-apps", "video-tools"],
        best_for: "Pika Deja vu is best for creators who want to recreate a video trend with different characters, outfits, products or changes described in text, starting from an uploaded clip or an Instagram or TikTok post.",
        status: "live",
        output_type: "video",
        display_order: 999,
        model_labels: {
            [nx.MODEL_IDS.PIKA_PIKA_H3_FLEX_REFERENCE_TO_VIDEO]: "Dejavu Fast",
            [nx.MODEL_IDS.ALIBABA_WAN3_0_VIDEO_OMNI_VIDEO]: "Dejavu Lite",
            [nx.MODEL_IDS.BYTEDANCE_SEEDANCE_2_5_REFERENCE_TO_VIDEO]: "Dejavu Pro"
        },
        landing: {
            layout: "templates"
        },
        fullscreen: {
            rail: {
                source: "project",
                media: ["video"]
            },
            minEditorWidth: 420,
            railWidth: 144,
            tone: "dark"
        },
        handoff: {
            text: {
                field: "prompt",
                role: "the changes to make to the trend video",
                mentions: !0
            },
            inputs: [{
                slot: "videos",
                accepts: ["video"],
                max: 1,
                role: "the source trend video",
                required: !0
            }, {
                slot: "references",
                accepts: ["image"],
                max: 10,
                role: "character, outfit or product reference images to swap into the video"
            }]
        }
    };
    e.s(["meta", 0, nk], 129582);
    let nw = {
        id: "pika-h3-flex",
        name: "Pika H3 Flex",
        tagline: "Generate 5-15s video with native audio from a prompt, a still, or references",
        icon: {
            src: e.i(864212).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        thumbnail: {
            src: e.i(94772).default,
            width: 1024,
            height: 768,
            blurWidth: 8,
            blurHeight: 6,
            blurDataURL: "data:image/webp;base64,UklGRvQAAABXRUJQVlA4TOcAAAAvB0ABAM1VICICHgiADQIAAIA9XXQADgIAB45wAAAAAAEOAAAAAAAAwB0AcCQhCBcEIR4QIXAOoD4HAADwQAhQGAAAAM7//rcWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAaf17IABHCAAAAOd/Nz8qBQAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQIJoEytti1zfPTumClfyRn1dBQC6fmTYMFzPpX+2BgkAoIJOlirGrL6Vp1Ks4PnvK96t5G75sc1RawL7OsedZqddlz8W74ca9JI613Qa4cZxPPWfsSAA"
        }.src,
        aliases: ["Pika Flex", "Pika H3 Pro"],
        categories: ["featured", "pika", "models"],
        professions: ["video-editor", "creator", "developer", "agency"],
        nav_tags: ["pika", "video-tools", "audio", "models", "all-apps"],
        best_for: "Pika H3 Flex is best for prompt-led clips with native audio, animating a single still, and directing a shot from image, video and audio references.",
        status: "live",
        badge: "NEW",
        output_type: "video",
        display_order: 16,
        edits: [{
            action: "animate",
            accepts: "image",
            slot: "firstFrame",
            seed: {
                mode: "frames"
            }
        }],
        intent: "prompt",
        handoff: {
            text: {
                field: "prompt",
                role: "a description of the video",
                mentions: !0
            },
            inputs: [{
                slot: "images",
                accepts: ["image"],
                max: 9,
                role: "reference images",
                seed: {
                    mode: "omni"
                }
            }, {
                slot: "firstFrame",
                accepts: ["image"],
                max: 1,
                role: "the first frame to animate",
                seed: {
                    mode: "frames"
                }
            }, {
                slot: "lastFrame",
                accepts: ["image"],
                max: 1,
                role: "the optional last frame",
                seed: {
                    mode: "frames"
                }
            }, {
                slot: "videos",
                accepts: ["video"],
                max: 3,
                role: "reference videos",
                seed: {
                    mode: "omni"
                }
            }, {
                slot: "audio",
                accepts: ["audio"],
                max: 3,
                role: "reference audio",
                seed: {
                    mode: "omni"
                }
            }]
        }
    };
    e.s(["meta", 0, nw], 114328);
    let nD = {
            src: e.i(394962).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        nU = {
            src: e.i(595541).default,
            width: 1600,
            height: 900,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRr4AAABXRUJQVlA4TLEAAAAvBwABAM1VICICHgjACQQAAIBt61eCAAAPgAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4wKWq5AAAAHogEAAAAAMD5NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADYA5EAAAAAADj/BgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHfhwI8sZlvAQFNWmQSfwEMDTMUgsPwiRgVW77hNkEyoNFLwcA"
        },
        nC = {
            id: "pika-music",
            name: "Pika Music",
            tagline: "Generate full tracks from a brief — genre, tempo, instruments, mood.",
            icon: nD,
            thumbnail: {
                src: e.i(286804).default,
                width: 1024,
                height: 768,
                blurWidth: 8,
                blurHeight: 6,
                blurDataURL: "data:image/webp;base64,UklGRsYAAABXRUJQVlA4TLkAAAAvB0ABAM1VICICHghACgMAAICs+qwADAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKL0VnP3AQAAPBAJAAAAAIDzbwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwByIBAAAAAHD+DQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACOfCmeCBun24Khcutq6qioZJilDkQWFePScJCHRIRPwFOceJyh7UkeBFfOLwA="
            }.src,
            hero: {
                url: nU.src,
                media_type: "image"
            },
            aliases: ["soundtrack", "song", "background music", "voice cover", "music cover"],
            categories: ["pika", "models"],
            professions: ["marketer", "creator", "developer", "agency", "video-editor"],
            nav_tags: ["pika", "audio", "models", "use-cases", "all-apps"],
            best_for: "Pika Music is best for campaign and launch assets, client-ready creative concepts, motion, video, and finishing workflows.",
            status: "live",
            output_type: "audio",
            display_order: 295,
            handoff: {
                text: {
                    field: "prompt",
                    role: "a description of the music",
                    max: 4e3
                },
                inputs: [{
                    slot: "source-audio",
                    accepts: ["audio"],
                    max: 1,
                    role: "a song to cover",
                    seed: {
                        mode: "music_cover"
                    }
                }]
            }
        };
    e.s(["meta", 0, nC], 775787);
    let nB = {
            src: e.i(456511).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        nS = {
            src: e.i(704352).default,
            width: 1600,
            height: 900,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRr4AAABXRUJQVlA4TLEAAAAvBwABAM1VICICHgjACQQAAIAS6yEAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQzOCntVsDAADwQCQAAAAAAM6/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAeiAQAAAAAwPk3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADhy/geV/EhCBLUkbETYKCB99NOwgYUK4F19JaHAuXgBziMdsgcA"
        },
        nE = {
            id: "pika-sfx",
            name: "Pika SFX",
            tagline: "Design sound effects from a text description — punchy one-shots to long textures.",
            icon: nB,
            thumbnail: {
                src: e.i(301314).default,
                width: 1024,
                height: 768,
                blurWidth: 8,
                blurHeight: 6,
                blurDataURL: "data:image/webp;base64,UklGRsYAAABXRUJQVlA4TLoAAAAvB0ABAM1VICICHgjAEQIAAICkQACAFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjCbMr4fve7BQAA8EAkAAAAAADOvwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAHogEAAAAAMD5NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA48vwW0fINzcYAdRP/5orh7F9WehUPLkErCCUHCel8gH96/ApNTQICWYFSAQE="
            }.src,
            hero: {
                url: nS.src,
                media_type: "image"
            },
            aliases: ["sound design", "ambience"],
            categories: ["pika", "models"],
            professions: ["video-editor", "for-fun", "creator", "developer"],
            nav_tags: ["pika", "video-tools", "audio", "models", "all-apps"],
            best_for: "Pika SFX is best for motion, video, and finishing workflows, model testing and prototype media, playful experiments and casual creation.",
            status: "live",
            output_type: "audio",
            display_order: 297,
            handoff: {
                text: {
                    field: "prompt",
                    role: "a description of the sound effect",
                    max: 4e3
                }
            }
        };
    e.s(["meta", 0, nE], 141399);
    let nP = {
            src: e.i(297857).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        nO = {
            src: e.i(390686).default,
            width: 1600,
            height: 900,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRpIAAABXRUJQVlA4TIUAAAAvBwABAM1VICICHghACgMAAICTZRAADAAAAAAAAAAAAAIAAAAAAAAAAAAACAAAA8AApmIj7au/PQAAgPBAJAAAAAAAzr8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwJHxM8NDxzWeenVP2UWXHNzJ469bgdFmzzTLvw8rMjRZAA=="
        },
        nN = {
            id: "pika-soundtrack",
            name: "Pika Soundtrack",
            tagline: "Score a clip to picture — music and foley matched to the action.",
            icon: nP,
            thumbnail: {
                src: e.i(397197).default,
                width: 1024,
                height: 768,
                blurWidth: 8,
                blurHeight: 6,
                blurDataURL: "data:image/webp;base64,UklGRsoAAABXRUJQVlA4TL0AAAAvB0ABAM1VICICHghADgIAAACfqTRiEhAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAA2cZsW67J/xcAAIAHIgEAAAAAcP4NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZAJAAAAAAAzr8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwJGngwTjBREDmkYmLBs7zocLL42oa/czIuIBdHrleCXIAzMGAKkrv8TMh6KGVgMA"
            }.src,
            hero: {
                url: nO.src,
                media_type: "image"
            },
            aliases: ["video to audio", "sound design", "music for video"],
            categories: ["pika", "models"],
            professions: ["agency", "video-editor", "creator"],
            nav_tags: ["pika", "video-tools", "audio", "models", "all-apps"],
            best_for: "Music and foley scored to an existing clip's picture; music or SFX from text alone go to Music Studio.",
            status: "live",
            output_type: "video",
            display_order: 298,
            mcp: {
                as: {
                    alias: "create-audio",
                    prefill: {
                        model: "pika/pika-audio/pika-soundtrack"
                    }
                }
            },
            handoff: {
                text: {
                    field: "instruction",
                    role: "an optional brief for the score"
                },
                inputs: [{
                    slot: "source",
                    accepts: ["video"],
                    max: 1,
                    role: "the video to score with music and sound",
                    required: !0
                }]
            }
        };
    e.s(["meta", 0, nN], 123e3);
    let nR = {
            src: e.i(823677).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        nT = {
            src: e.i(640792).default,
            width: 1600,
            height: 900,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRsAAAABXRUJQVlA4TLQAAAAvBwABAM1VICICHgiACQMAAID54FnunHFwAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAQgC6hTr5MDQAAgAciAQAAAABw/g0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9kAkAAAAAADOvwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAkd4PQwr5VEIAFcy3nSK/jQXUoKIgxMUGPiObMIeCd3/KzHQLjdc="
        },
        nZ = {
            id: "pika-speech",
            name: "Pika Speech",
            tagline: "Turn a script into natural narration with a library of voices.",
            icon: nR,
            thumbnail: {
                src: e.i(115765).default,
                width: 1024,
                height: 768,
                blurWidth: 8,
                blurHeight: 6,
                blurDataURL: "data:image/webp;base64,UklGRswAAABXRUJQVlA4TL8AAAAvB0ABAM1VICICHgiACQMAAABifeUAwQHIDwAHAAAAAAAAAAAAAAAAAAAAAAAAACDiBnQwvVf43wcAAOCBSAAAAAAAnH8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgD2QTQAAAACA898BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoCJ3Ln7Kn2pBc0D5GL5lJf3gjwsZIUO8NaQFzyFUzRiMozeBWyodxKPoOmEpmEasWwA="
            }.src,
            hero: {
                url: nT.src,
                media_type: "image"
            },
            aliases: ["Pika TTS", "TTS", "text to speech", "voice clone"],
            categories: ["pika", "models", "voice"],
            professions: ["marketer", "creator", "agency", "video-editor", "designer"],
            nav_tags: ["pika", "image-tools", "audio", "models", "use-cases", "all-apps"],
            best_for: "Pika Speech is best for campaign and launch assets, client-ready creative concepts, visual exploration and polished imagery.",
            status: "live",
            output_type: "audio",
            display_order: 140,
            handoff: {
                text: {
                    field: "script",
                    role: "the exact words to speak"
                }
            }
        };
    e.s(["meta", 0, nZ], 549660);
    let nL = {
        id: "pikadditions",
        name: "Pikadditions",
        tagline: "Add a subject into a clip you upload",
        icon: {
            src: e.i(361112).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        thumbnail: {
            src: e.i(94368).default,
            width: 1024,
            height: 768,
            blurWidth: 8,
            blurHeight: 6,
            blurDataURL: "data:image/webp;base64,UklGRvgAAABXRUJQVlA4TOsAAAAvB0ABAM1VICICHgiADQIAAICfjws9H0+9A3FwHJxKCTgACOAAAAAAAAAAAAAAAAAcAAABAAAKUF4AAADwQNCOEAAAAM7/7f/bJQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA6BJzywMByEEAAAA4/70FECAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxUL+z/u7uK9D6WMd6sPOd1hhi9LJKbNU1D39vUu8RAdFlWQKT+QNLEX2Hdh+ONoLcnFX7P87xcGKm417cas57W15P3f6xoxEfNbiPa4NBAEbb4Wl8URSwEAA=="
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/pikaddition.mp4",
            media_type: "video"
        },
        aliases: ["add object", "insert"],
        categories: ["pika", "models"],
        professions: ["agency", "video-editor", "marketer", "creator", "developer"],
        nav_tags: ["pika", "video-tools", "models", "use-cases", "all-apps"],
        best_for: "Inserting a person, creature or object into existing footage; replacing what is already there is Swap Anything.",
        status: "live",
        output_type: "video",
        edits: [{
            action: "add-element",
            accepts: "video",
            slot: "video",
            field: "video"
        }],
        intent: "prompt",
        display_order: 380,
        mcp: {
            as: "presets"
        },
        handoff: {
            text: {
                field: "prompt",
                role: "what to add to the clip",
                max: 4e3
            },
            inputs: [{
                slot: "video",
                accepts: ["video"],
                max: 1,
                role: "the clip to add something into",
                required: !0
            }, {
                slot: "reference",
                accepts: ["image"],
                max: 1,
                role: "an image of what to add"
            }]
        }
    };
    e.s(["meta", 0, nL], 478497);
    let nQ = {
        id: "pikaffects",
        name: "Pikaffects",
        tagline: "One-tap viral effects — photo in, video out",
        icon: {
            src: e.i(185149).default,
            width: 256,
            height: 256,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRtQAAABXRUJQVlA4TMcAAAAvB8ABAM1VICICHghACgMAAIADAIAwAAACAAAAAACKYUIBBgAAAgABIAQAAAAAwIAkRAQAsqD4QQMA8EBAjQAAAADO/1I8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAflseCMgJAAAAwPnfL5sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGCwr4pMrwH/C55bpTEL4HuRn7RT999uqyMA5VPYrFWrYmMUADEhc7StPCZm+gA69E6PiK+Y6wI2AA=="
        },
        thumbnail: {
            src: e.i(75268).default,
            width: 1024,
            height: 768,
            blurWidth: 8,
            blurHeight: 6,
            blurDataURL: "data:image/webp;base64,UklGRvQAAABXRUJQVlA4TOgAAAAvB0ABAM1VICICHgiADQIAAIAR4KVzwJ90OuBwGOGhkAgCAAAQAAgAAAAAAAAAAAAAAAAAEIE8sx8AAAAPBBgFAgAA4Py31pdcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAd5sHAmzDAAAAcP5PWgccAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQMc+39tmkbGfT4u5Ac1AMv6QSDkTK/Ybx42tYq4RzhzXomY2aqob6fVP317Wu+6pVNn2Pn/aKFcTGcqh7z2u+Z0q5NE4AqrSBeqf2f+29gHQAy0BZDIB"
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/pikaffects.mp4",
            media_type: "video"
        },
        aliases: ["Pikatwists", "transform"],
        categories: ["pika", "models", "templates"],
        professions: ["video-editor", "for-fun", "creator", "agency", "developer"],
        nav_tags: ["pika", "video-tools", "image-tools", "templates", "models", "use-cases", "all-apps"],
        best_for: "A photo turned into a short clip with a named effect like Cake-ify or Explode; free-form animation is Video Studio.",
        status: "live",
        output_type: "video",
        edits: [{
            action: "apply-effect",
            accepts: "image",
            slot: "image",
            field: "image"
        }],
        display_order: 390,
        mcp: {
            as: "presets"
        },
        handoff: {
            text: null,
            inputs: [{
                slot: "image",
                accepts: ["image"],
                max: 1,
                role: "the photo to apply an effect to",
                required: !0
            }]
        }
    };
    e.s(["meta", 0, nQ], 304593);
    let nz = {
        id: "pikaperformance",
        name: "Pikaformance",
        tagline: "Make your avatar talk, sing, and perform",
        icon: {
            src: e.i(53380).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        thumbnail: {
            src: e.i(240436).default,
            width: 1024,
            height: 768,
            blurWidth: 8,
            blurHeight: 6,
            blurDataURL: "data:image/webp;base64,UklGRvwAAABXRUJQVlA4TPAAAAAvB0ABAM1VICICHggACAIAAICU9QgNgXkC7EBgYwAAEDgAAAAAAAAAAAAAAACAAcQIZobwC6FTAAAAeCAAOQgAAADn36kVigBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQT1CwJBCiiI/9x5IABHCAAAAOe/3RNEDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI+GHVw2Ls30Xy7LDiCCDQkAACwUJM0l7StcWbor6YREhn6dJRBdvi2Wyd7m2f2pskji+/09P61MtHrnjM3B07tp9fu0X6tQlWkui8bIRjFgKP5z30s7/edIQa/5vD8wM="
        }.src,
        aliases: ["Pikaperformance"],
        categories: ["pika", "models", "voice"],
        professions: ["creator", "marketer"],
        nav_tags: ["pika", "video-tools", "audio", "models", "all-apps"],
        best_for: "Fast, affordable avatar videos from a photo and music, speech, or generated audio, up to 30 seconds.",
        status: "live",
        output_type: "video",
        display_order: 31,
        handoff: {
            text: null,
            inputs: [{
                slot: "image",
                accepts: ["image"],
                max: 1,
                role: "a photo of the person or character to animate"
            }]
        }
    };
    e.s(["meta", 0, nz], 87504);
    let nj = {
        id: "pikaswap",
        name: "Pikaswap",
        tagline: "Swap a subject inside a clip you upload",
        icon: {
            src: e.i(50862).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        thumbnail: {
            src: e.i(167204).default,
            width: 800,
            height: 500,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRtgAAABXRUJQVlA4TMsAAAAvBwABAM1VICICHgjKCgMAAIB73ciACAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJgEjX8AAAAeCMgJAAAAwPkHAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAABKFnX/rfFAgFEgAAAAzj939duWIx8AAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFzk6k8J3lLCmiP68cz/kBBlAQ0NZDUgpEOuweV9f0X6s9oMj0Gk5GifOl+7u/43Yq7uO4Gg2GXHBgA="
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/pikaswap.mp4",
            media_type: "video"
        },
        aliases: ["Pikaswaps", "object swap", "replace"],
        categories: ["pika", "models"],
        professions: ["agency", "video-editor", "marketer", "for-fun", "creator"],
        nav_tags: ["pika", "video-tools", "models", "use-cases", "all-apps"],
        best_for: "Pikaswap is best for campaign and launch assets, client-ready creative concepts, motion, video, and finishing workflows.",
        status: "live",
        hidden: !0,
        output_type: "video",
        edits: [{
            action: "swap-subject",
            accepts: "video",
            slot: "video"
        }],
        intent: "prompt",
        display_order: 370,
        handoff: {
            text: {
                field: "prompt",
                role: "what to swap in"
            },
            inputs: [{
                slot: "video",
                accepts: ["video"],
                max: 1,
                role: "the clip to swap something in",
                required: !0
            }, {
                slot: "reference",
                accepts: ["image"],
                max: 1,
                role: "an image of the replacement"
            }]
        }
    };
    e.s(["meta", 0, nj], 508216);
    let nV = {
        id: "podcast-creator",
        name: "Podcast Video",
        tagline: "Turn a topic or script into a two-host video episode",
        icon: {
            src: e.i(410810).default,
            width: 256,
            height: 256,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRv4AAABXRUJQVlA4TPIAAAAvB8ABAM1VICICHgiACQMAAIAMBiH2gR8AAAAOAACA+AEAAAAAAIADAAAAAAAgAAIAgCD9QsMHMwAAgAcCcIQAAABw/rOWYQv/ngcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAChUvC+fZeyDYIAAAAADn/z0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC9UX++zVGFQ8kIgghNUac3ltraz29VxxjVJmlrfG8x1tjFlSjihjD+i1e6rCKodpAWTPlhI5sbrlYk0BByDD9koTEFDJE6Dx2yfJ6ef17ezyGENIYHvc/v/n+GENIAQ=="
        },
        thumbnail: {
            src: e.i(503114).default,
            width: 1024,
            height: 768,
            blurWidth: 8,
            blurHeight: 6,
            blurDataURL: "data:image/webp;base64,UklGRvgAAABXRUJQVlA4TOwAAAAvB0ABAM1VICICHgiADQIAAAB9HYnjwQEBAnCAAACABAcHAAEAACAEHMQdRAAAAgAAAACAg9Gp3qMCAADwQACOEAAAAM7/d7cJyyIBAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAYaC2eSBoKQwAAADn//4/awAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARjEDZ8BAWknkeCUbi3Y5gtEh8pwo+2fcBKFQx/mdoSPBn9qZV7DNMPua4p83rMWizoTi7fWT8V+e7OFHyQksLi+UpUlVPfnRydpvqUX2ccv7685n8EtnVdYkXg=="
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/files/agent/f0a5c6a5-95f9-4d77-8774-4dd6d9262e9f/video-2-full.mp4",
            media_type: "video"
        },
        aliases: ["Podcast Creator", "interview", "talk show", "debate", "co-host"],
        categories: ["templates"],
        professions: ["creator", "marketer", "founder", "agency"],
        nav_tags: ["video-tools", "audio", "templates", "use-cases", "all-apps"],
        best_for: "A solo or host-and-guest video podcast, rendered segment by segment from planned dialogue.",
        status: "live",
        output_type: "video",
        display_order: 250,
        handoff: {
            text: {
                field: "content",
                role: "what the episode is about",
                max: 8e3
            },
            inputs: [{
                slot: "host_photo",
                accepts: ["image"],
                max: 1,
                role: "a photo of the host",
                remix: !0
            }, {
                slot: "guest_photo",
                accepts: ["image"],
                max: 1,
                role: "a photo of the guest",
                remix: !0
            }, {
                slot: "references",
                accepts: ["image"],
                max: 8,
                role: "reference images for the set"
            }]
        }
    };
    e.s(["meta", 0, nV], 279249);
    let nM = {
        id: "product-ad",
        name: "Product Ad",
        tagline: "Four steps from a product photo to a finished ad",
        icon: {
            src: e.i(815360).default,
            width: 256,
            height: 256,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRgQBAABXRUJQVlA4TPcAAAAvB8ABAM1VICICHghQDioAAIBz6DJgwAAAgFAAgBEAAAAAEIABAAoIAAAAADAKAGAA9AFAARSm03ceAADAAwE4QgAAADj/Gbn/MZAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAB4qFp/qb0HgnEDAQAAcP6XdgMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABj8t4l8p2eKApDYvLR9OTXlqrVZZ+tsZ691WpmioJRK7a5HI7VbUApQC97t1sC7FSggCY3Y4P/l+2MjJCFRqKPP6bHnt+W+cFQYoT13Xv7JB8v8DX2Fchpi4z1jDGJMeJZTAA=="
        },
        thumbnail: {
            src: e.i(329863).default,
            width: 1024,
            height: 768,
            blurWidth: 8,
            blurHeight: 6,
            blurDataURL: "data:image/webp;base64,UklGRv4AAABXRUJQVlA4TPIAAAAvB0ABAM1VICICHgiADQIAAABfgtQBAAQAAAAAAAAAAAAAAAAAAAAAAAAAYCAE5KD7BcfvD715vj8AAAAPBMCEAQAA4PyXflZnLgwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKGwTruteSAANggAAADnr9YeAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAChkCg8hLbV+r5F7heHGeufIfsf8SaTZOIViG6qbXi0kALpUqLdPyHjN5tTcjtv3h8+Yl22PWFfnX5qX2cuc3kY78M3rWTkFeHd/RptlJxGb9dANn6ODYABvNYcYoXIoAIyJA=="
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/product-ad.mp4",
            media_type: "video"
        },
        aliases: ["commercial", "UGC", "advert", "advertising", "product marketing video"],
        categories: ["templates"],
        professions: ["agency", "video-editor", "marketer", "creator", "founder"],
        nav_tags: ["video-tools", "templates", "use-cases", "all-apps"],
        best_for: "A finished product commercial up to 30 s, with music and voiceover, from product photos and a screenplay; still product photos go to Edit Image.",
        status: "live",
        output_type: "video",
        display_order: 220,
        handoff: {
            text: {
                field: "doc:brief",
                role: "a brief for the ad",
                max: 2e3
            },
            inputs: [{
                slot: "product",
                accepts: ["image"],
                max: 8,
                role: "product photos",
                required: !0,
                remix: !0
            }]
        }
    };
    e.s(["meta", 0, nM], 598104);
    let nH = {
        id: "product-shot",
        name: "Product Shot",
        tagline: "Turn reference photos into a polished product shot",
        icon: {
            src: e.i(121053).default,
            width: 256,
            height: 256,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRgQBAABXRUJQVlA4TPgAAAAvB8ABAM1VICICHgiAESIAAIAZrDgAAA6HQQEBAACEBwAAHAAAACABACAAIAoAAAAAKIVLBB44NMcaAADAAwHIQQAAADj/31duagLDAwIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBBFcyePvn3QLBtAAAAAM6/2Q4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBAl8h3+coIsC+leiUTXWVyIdVZ8q7YVCcXlBGwbTv0N+nO/4797esIIuBMeWbqnX9wTxw8ggESiEZkue64VgQKkGQJYTm9GlYuQ0imsTaivddiLmvJgq4b+ud+X83f54boAg=="
        },
        thumbnail: {
            src: e.i(226192).default,
            width: 1024,
            height: 768,
            blurWidth: 8,
            blurHeight: 6,
            blurDataURL: "data:image/webp;base64,UklGRvIAAABXRUJQVlA4TOUAAAAvB0ABAM1VICICHghADgIAAID2L6oAYAAAAQAAAAAAAAAAAAAAAAAAAAAYAAAAAAWgTRNLc5tIVwIAAPBAUK4QAAAAzn+3WoEAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMB3u+eBABQxAAAAnH99dzX/GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAzgB6a+SPc/tv7uTEWa++OVeCvIRx3iSvPAe1Ew9mfjgC+Kzm1yCSu4KiSELBX+pX329L2nRosIWmO3eh2ZtXbfn2fMFTeyHXCY6udoK1pTocQAAA=="
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/product-shot.mp4",
            media_type: "video"
        },
        aliases: ["GPT Image", "packshot", "ecommerce", "From URL", "Product Photo"],
        categories: ["ai-video-toolkit"],
        professions: ["agency", "video-editor", "designer", "marketer", "creator"],
        nav_tags: ["video-tools", "image-tools", "use-cases", "all-apps"],
        best_for: "Product Shot is best for campaign and launch assets, client-ready creative concepts, visual exploration and polished imagery.",
        status: "live",
        output_type: "image",
        display_order: 630,
        mcp: {
            as: "presets"
        },
        handoff: {
            text: {
                field: "instructions",
                role: "optional instructions for the product shot"
            },
            inputs: [{
                slot: "references",
                accepts: ["image"],
                max: 16,
                role: "product photos",
                required: !0
            }]
        }
    };
    e.s(["meta", 0, nH], 111856);
    let nJ = {
        id: "recraft",
        name: "Recraft 4.1",
        tagline: "Text-to-image with fixed output sizes",
        icon: {
            src: e.i(934534).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        thumbnail: {
            src: e.i(216300).default,
            width: 800,
            height: 500,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRtQAAABXRUJQVlA4TMgAAAAvBwABAM1VICICHgjICQAAAIBNoQAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAhZJftwAAADwQYBoAAACA8wf+V7W2kAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBBgEwAAAIDzZwAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAwLm8tq0iR620ZOSbzdXPNtNJ0E4oQZpex/NYssZAoguJpLGUoO88qp8XGEgpazE/9v5yq53y10C0gpECDA=="
        }.src,
        aliases: ["Ideogram", "vector", "logo"],
        categories: ["models"],
        professions: ["designer", "developer", "creator"],
        nav_tags: ["image-tools", "models", "all-apps"],
        best_for: "Recraft 4.1 is best for visual exploration and polished imagery, model testing and prototype media.",
        status: "live",
        hidden: !0,
        output_type: "image",
        display_order: 570,
        handoff: {
            text: {
                field: "prompt",
                role: "a description of the image"
            }
        }
    };
    e.s(["meta", 0, nJ], 907134);
    var nF = e.i(38823);
    let nG = "golden-hour",
        nW = {
            collections: {
                rigs: [{
                    color: "#F0A15C",
                    id: "golden-hour",
                    image_url: "https://cdn.pika.art/v2/creation/cms/cc0d5b6f0f0b5577b9d00f88a2e893cb.png",
                    label: "Golden Hour",
                    lights: [{
                        azimuth: -47,
                        brightness: 30,
                        color: "#FFC98A",
                        diffuse: 85,
                        elevation: 15
                    }, {
                        azimuth: 60,
                        brightness: 78,
                        color: "#FF9E4D",
                        diffuse: 55,
                        elevation: 7
                    }]
                }, {
                    color: "#DDD9D4",
                    id: "softbox",
                    image_url: "https://cdn.pika.art/v2/creation/cms/b7288b3ee30954e2b72256bf194a0336.png",
                    label: "Softbox",
                    lights: [{
                        azimuth: -41,
                        brightness: 28,
                        color: "#FFE8C4",
                        diffuse: 90,
                        elevation: 9
                    }, {
                        azimuth: -170,
                        brightness: 45,
                        color: "#FFFFFF",
                        diffuse: 35,
                        elevation: 33
                    }, {
                        azimuth: 40,
                        brightness: 62,
                        color: "#FFFFFF",
                        diffuse: 85,
                        elevation: 30
                    }]
                }, {
                    color: "#D8D4CF",
                    id: "hard-flash",
                    image_url: "https://cdn.pika.art/v2/creation/cms/4b9dea4db3c45515996e20327e5bebd9.png",
                    label: "Hard Flash",
                    lights: [{
                        azimuth: 3,
                        brightness: 95,
                        color: "#FFFFFF",
                        diffuse: 8,
                        elevation: 6
                    }]
                }, {
                    color: "#D5DBE2",
                    id: "window",
                    image_url: "https://cdn.pika.art/v2/creation/cms/464ec5b9c4a75ab18c3587855a7e45a8.png",
                    label: "Window",
                    lights: [{
                        azimuth: -65,
                        brightness: 55,
                        color: "#BFE2FF",
                        diffuse: 80,
                        elevation: 20
                    }, {
                        azimuth: 37,
                        brightness: 20,
                        color: "#FFE8C4",
                        diffuse: 90,
                        elevation: -6
                    }]
                }, {
                    color: "#FF3DAE",
                    id: "neon-night",
                    image_url: "https://cdn.pika.art/v2/creation/cms/b5e1319bfaa054d8bce14c9206933041.png",
                    label: "Neon Night",
                    lights: [{
                        azimuth: -49,
                        brightness: 62,
                        color: "#7FE2E0",
                        diffuse: 50,
                        elevation: 3
                    }, {
                        azimuth: 47,
                        brightness: 70,
                        color: "#E86BC0",
                        diffuse: 45,
                        elevation: 12
                    }]
                }, {
                    color: "#3F5687",
                    id: "moonlight",
                    image_url: "https://cdn.pika.art/v2/creation/cms/dc1be8fd1d5153ffb07650482880023f.png",
                    label: "Moonlight",
                    lights: [{
                        azimuth: -154,
                        brightness: 50,
                        color: "#7FB8FF",
                        diffuse: 65,
                        elevation: 55
                    }, {
                        azimuth: 24,
                        brightness: 18,
                        color: "#BFE2FF",
                        diffuse: 90,
                        elevation: -12
                    }]
                }, {
                    color: "#c2410c",
                    id: "preset-ec225621-fe48-4797-8cac-bae55178f576",
                    image_url: "https://cdn.pika.art/v2/creation/cms/6261fc355cbe57f6a8507cde7967b99b.png",
                    label: "Back Light",
                    lights: [{
                        azimuth: 180,
                        brightness: 95,
                        color: "#FF6B1A",
                        diffuse: 30,
                        elevation: 15
                    }, {
                        azimuth: 0,
                        brightness: 10,
                        color: "#FF9A5C",
                        diffuse: 95,
                        elevation: 5
                    }]
                }, {
                    color: "#141414",
                    id: "preset-ac0cf28a-1601-4fdd-8eaf-750b840ba277",
                    image_url: "https://cdn.pika.art/v2/creation/cms/f910153aca455d509fd9c62a4b544cfb.png",
                    label: "Spotlight",
                    lights: [{
                        azimuth: 25,
                        brightness: 95,
                        color: "#FFFFFF",
                        diffuse: 12,
                        elevation: 60
                    }]
                }]
            }
        };

    function nX(e) {
        return e.find(e => e.id === nG) ? ? e[0] ? ? nW.collections.rigs[0]
    }
    e.s(["DEFAULT_PRESET", 0, nG, "defaultRig", 0, nX, "presetDefaults", 0, nW], 512304), e.i(512304);
    var nK = e.i(355895),
        nq = e.i(980133);
    e.s(["APP_ID", () => nF.APP_ID, "CLIP_MODEL", () => nK.CLIP_MODEL, "DEFAULT_PRESET", 0, nG, "DESCRIPTION_LIMIT", () => nK.DESCRIPTION_LIMIT, "DIRECTIONS", () => nq.DIRECTIONS, "DIRECTION_LABEL", () => nq.DIRECTION_LABEL, "DIRECTION_VECTOR", () => nq.DIRECTION_VECTOR, "GELS", () => nq.GELS, "MAX_LIGHTS", () => nq.MAX_LIGHTS, "MIN_LIGHTS", () => nq.MIN_LIGHTS, "PHOTO_MODEL", () => nK.PHOTO_MODEL, "PLACEHOLDER_LIGHTS", () => nq.PLACEHOLDER_LIGHTS, "PRESETS", () => nq.PRESETS, "colorWord", () => nq.colorWord, "compilePrompt", () => nq.compilePrompt, "defaultRig", 0, nX, "describeRigLight", () => nq.describeRigLight, "dirFor", () => nq.dirFor, "isAt", () => nq.isAt, "isPlaceholderRig", () => nq.isPlaceholderRig, "nextLight", () => nq.nextLight, "normalizeDir", () => nq.normalizeDir, "placeholderLights", () => nq.placeholderLights, "placementLabel", () => nq.placementLabel, "placementOf", () => nq.placementOf, "presetDefaults", 0, nW, "relightRequest", () => nK.relightRequest, "rigLights", () => nq.rigLights, "rigMood", () => nq.rigMood, "vectorFor", () => nq.vectorFor], 177696);
    var nY = e.i(177696);
    e.s(["relightKit", 0, nY], 531046);
    var nY = nY;
    let n0 = {
            src: e.i(514637).default,
            width: 256,
            height: 256,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRggBAABXRUJQVlA4TPwAAAAvB8ABAM1VICICHggIDgIAAID7YgwIYUASAIQIQAAAAAAgEAAAAAAYCAAAAAACIEEAwAhIQNALewAAAA8E3IgBAADg/O+TDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALa1iwcCkIMAAABw/vvNf2ssMgAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAaSUePOfLlKjAKtTgyAwEiAAq/pe73Ok587fySrA6nmec/q2/7G2j3378hv1VFz9Y9b1Lne/f7vhgLrmAA0QlPgclkJg5zEozbMvszWKraJpQOJdR8tw83RT71x6ksNAuBRpXWqV5jPjAgQ="
        },
        n4 = {
            src: e.i(814042).default,
            width: 1024,
            height: 768,
            blurWidth: 8,
            blurHeight: 6,
            blurDataURL: "data:image/webp;base64,UklGRvIAAABXRUJQVlA4TOUAAAAvB0ABAM1VICICHghACgMAAIBpAdmOJcZWGAEAhCEAAAAAAAAAAAAAAAAAAAAAAAAAIAKAEmbw9RsAAMADQUthAAAAOP+33adqxxgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmKt8DwTYhgEAAOD8k+87AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwrW/XJPJG++Gl7vuLv3VJgp+NVm/bAzPXUTOYIJvdeM9Tatalr4UAbBKDAIUfnJ9K36KmIYywvLn0VHnOvqG7vcfmbzNw+Yj2I4LlFqE2IS0DAA=="
        },
        n6 = {
            id: nY.APP_ID,
            name: "Relight Media",
            tagline: "Light a photo or a clip on an interactive 3D stage",
            icon: n0,
            thumbnail: n4.src,
            hero: {
                url: "https://cdn.pika.art/v2/creation/app-heroes/relight-video.mp4",
                media_type: "video"
            },
            aliases: ["change lighting", "relighting", "lighting", "light rig"],
            categories: ["ai-video-toolkit"],
            professions: ["agency", "video-editor", "creator", "designer"],
            nav_tags: ["video-tools", "image-tools", "all-apps"],
            best_for: "New lighting on a photo or 2–30 s clip, keeping subject, framing and motion.",
            status: "live",
            output_type: ["image", "video"],
            edits: [{
                action: "relight",
                accepts: "video",
                slot: "media",
                field: "media"
            }, {
                action: "relight",
                accepts: "image",
                slot: "media",
                field: "media"
            }],
            display_order: 251,
            mcp: {
                as: "presets"
            },
            intent: "description",
            handoff: {
                text: {
                    field: "description",
                    role: "an optional description of the lighting",
                    max: 4e3
                },
                inputs: [{
                    slot: "media",
                    accepts: ["image", "video"],
                    max: 1,
                    role: "the photo or clip to relight",
                    required: !0
                }]
            }
        };
    e.s(["meta", 0, n6], 385498);
    let n1 = {
            src: e.i(838078).default,
            width: 256,
            height: 256,
            blurWidth: 0,
            blurHeight: 0
        },
        n2 = {
            src: e.i(491910).default,
            width: 1440,
            height: 1e3,
            blurWidth: 0,
            blurHeight: 0
        },
        n8 = {
            id: "resize-images",
            name: "Resize Images",
            tagline: "New size. Same message.",
            icon: n1,
            thumbnail: n2.src,
            hero: {
                url: n2.src,
                media_type: "image"
            },
            aliases: ["resize creative", "reformat poster", "reflow text"],
            categories: ["ai-video-toolkit"],
            professions: ["marketer", "designer", "agency", "creator"],
            nav_tags: ["image-tools", "all-apps"],
            best_for: "Resizing photos, posters and ads with automatic text layout.",
            status: "live",
            hidden: !0,
            output_type: "image",
            handoff: {
                text: {
                    field: "prompt",
                    role: "optional layout preferences"
                },
                inputs: [{
                    slot: "source",
                    accepts: ["image"],
                    max: 1,
                    required: !0,
                    role: "the original image to resize"
                }]
            },
            display_order: 640
        };
    e.s(["meta", 0, n8], 473683);
    let n5 = {
            id: "seed-audio",
            name: "ByteDance Seed-Audio 1.0",
            tagline: "Speech and audio from ByteDance's Seed model",
            icon: {
                src: e.i(352242).default,
                width: 128,
                height: 128,
                blurWidth: 8,
                blurHeight: 8,
                blurDataURL: "data:image/webp;base64,UklGRrwAAABXRUJQVlA4TK8AAAAvB8ABEM1VICICHghaDgIAAIB3f6s6DQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg7cLuBgAARHggADkIAAAA53//BhQRBAMQCEAAIAAQGBBCAERIARDgAzAABgAAAIABAAwhIIACk5Ti/BNgK+UbvTdGoETPMLbWdmMMpI5EutWQ8VWcmXe+SIES35OPvbISApscnZEXFOcK3Hn9dsqK+cz13T8JiWP6cDEDAA=="
            },
            thumbnail: {
                src: e.i(965151).default,
                width: 640,
                height: 400,
                blurWidth: 8,
                blurHeight: 5,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/APLT4vHR4O/O3u7M3O3J2uzH2OrE1unC1QDsyNnrxtjqw9bpwdTnvtLmu9Dluc7kt80A5rzQ5bnP5LfN47TL4bLJ4K/H363F3qrEAOCvx9+txt6rxN2owtulwNqjvtmgvNieuwDbpL/aor7Yn7zXnbrWmrjVmLbTlbTSk7II0F7Ze9UtKgAAAABJRU5ErkJggg=="
            }.src,
            aliases: ["Seed Audio", "Seed-Speech", "SeedSpeech", "TTS"],
            categories: ["pika", "models"],
            professions: ["creator", "developer", "video-editor"],
            nav_tags: ["pika", "audio", "models", "all-apps"],
            best_for: "ByteDance Seed-Audio 1.0 is best for motion, video, and finishing workflows, model testing and prototype media.",
            status: "live",
            hidden: !0,
            output_type: "audio",
            display_order: 720,
            handoff: {
                text: {
                    field: "prompt",
                    role: "a description of the audio",
                    max: 3e3
                }
            }
        },
        n3 = {
            id: "seedance-2",
            name: "Seedance 2.0",
            tagline: "Cinematic text-to-video",
            icon: {
                src: e.i(383553).default,
                width: 24,
                height: 24,
                blurWidth: 0,
                blurHeight: 0
            },
            thumbnail: {
                src: e.i(12582).default,
                width: 1024,
                height: 768,
                blurWidth: 8,
                blurHeight: 6,
                blurDataURL: "data:image/webp;base64,UklGRvIAAABXRUJQVlA4TOYAAAAvB0ABAM1VICICHgiADQIAAICb75aGOYk6EPBCfoQCAQEAAAAAAAEAAAAAAAAAAAAAAABE6CiQPAAAAMADAUcBAAAAOP9bDxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKjf5oEA5CAAAACc//XaAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwJCnWLqv3+9H5H4PqyLaSFDFw0rN5AjUwF4f5Ml3ViOZKcvUNn8RuxmGaeSXSNhkAu08euT5zOFf/erfk6Oluu/dtWuIfcfPuMZ1aDjH9r71sUoiEAtVAA=="
            }.src,
            hero: {
                url: "https://cdn.pika.art/v2/creation/app-heroes/seedance-2.mp4",
                media_type: "video"
            },
            aliases: ["ByteDance"],
            categories: ["featured", "models"],
            professions: ["video-editor", "developer", "creator", "agency"],
            nav_tags: ["video-tools", "models", "all-apps"],
            best_for: "Seedance 2.0 is best for client-ready creative concepts, motion, video, and finishing workflows, model testing and prototype media.",
            status: "live",
            output_type: "video",
            edits: [{
                action: "animate",
                accepts: "image",
                slot: "images",
                seed: {
                    mode: "omni"
                }
            }, {
                action: "reference",
                accepts: "video",
                slot: "videos",
                seed: {
                    mode: "edit"
                }
            }],
            display_order: 10,
            handoff: {
                text: {
                    field: "prompt",
                    role: "a description of the video",
                    mentions: !0
                },
                inputs: [{
                    slot: "images",
                    accepts: ["image"],
                    max: 30,
                    role: "reference images"
                }, {
                    slot: "videos",
                    accepts: ["video"],
                    max: 10,
                    role: "reference videos"
                }, {
                    slot: "audio",
                    accepts: ["audio"],
                    max: 10,
                    role: "reference audio"
                }]
            }
        };
    e.s(["meta", 0, n3], 130609);
    let n7 = {
        id: "seedance-2-5",
        name: "Seedance 2.5",
        tagline: "ByteDance's newest video model — sharper motion, up to 50 references, stronger prompt adherence, and native audio",
        icon: {
            src: e.i(306949).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        thumbnail: {
            src: e.i(405223).default,
            width: 1024,
            height: 768,
            blurWidth: 8,
            blurHeight: 6,
            blurDataURL: "data:image/webp;base64,UklGRuwAAABXRUJQVlA4TOAAAAAvB0ABAM1VICICHgiADQIAAIAFHguAIzsCQMBJBwAgAAAAAAAOAAAAAAAAAAAQOHBwHA7wlFP8kdMBAAA8EEwDAAAAgPPf6gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCRBwKQwgAAAHD+XQYAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxtfmW/5r/RWpLb3phx8BS0h+hswZoXBP2dQ11CGTwlmg0fnfjkNJleDjpyfmphZpvVXr1ibvZR0R83TMt2LLZ/mXYvFY1ROsO9dgwt0I4B0LBA=="
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/files/agent/60a1eb0d-c3d8-4a59-bf82-59c577a9d7b8/seedance-2.5-t2v-output-full.mp4",
            media_type: "video"
        },
        aliases: ["Seedance 2.5 Pro"],
        categories: ["models"],
        professions: ["video-editor", "developer", "creator", "agency"],
        nav_tags: ["video-tools", "models", "all-apps"],
        best_for: "Seedance 2.5 is best for client-ready creative concepts, motion, video, and finishing workflows, model testing and prototype media.",
        status: "live",
        output_type: "video",
        edits: [{
            action: "animate",
            accepts: "image",
            slot: "images",
            seed: {
                mode: "omni"
            }
        }, {
            action: "reference",
            accepts: "video",
            slot: "videos",
            seed: {
                mode: "edit"
            }
        }],
        display_order: 15,
        handoff: {
            text: {
                field: "prompt",
                role: "a description of the video",
                mentions: !0
            },
            inputs: [{
                slot: "images",
                accepts: ["image"],
                max: 30,
                role: "reference images"
            }, {
                slot: "videos",
                accepts: ["video"],
                max: 10,
                role: "reference videos"
            }, {
                slot: "audio",
                accepts: ["audio"],
                max: 10,
                role: "reference audio"
            }]
        }
    };
    e.s(["meta", 0, n7], 627798);
    let n9 = {
        id: "seedance-2-mini",
        name: "Seedance 2.0 Mini",
        tagline: "Fast text-to-video",
        icon: {
            src: e.i(945247).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        thumbnail: {
            src: e.i(488034).default,
            width: 1024,
            height: 768,
            blurWidth: 8,
            blurHeight: 6,
            blurDataURL: "data:image/webp;base64,UklGRuoAAABXRUJQVlA4TN0AAAAvB0ABAM1VICICHgiADQIAAIAurat/BR6puAEAOIQAAAAAAAAAcAAAAAAAAAAAAAAAAAAAFBT2/h0AAMADgTYAAAAAOP86HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFgeCEAKAwAAwPn39/PymwFAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAwAEAIUuwNXx8Z/+VCkQz+cwKPWAQmgcaAV+PeemsTNhPX6Wk+IGi37bLRVx3f2OHR4E0IyPpo0VZGjhRAZPfq5BSs/2bnUJeaIIDDE74MmQA="
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/seedance-2-mini.mp4",
            media_type: "video"
        },
        aliases: ["ByteDance"],
        categories: ["models"],
        professions: ["video-editor", "developer", "creator", "agency"],
        nav_tags: ["video-tools", "models", "all-apps"],
        best_for: "Seedance 2.0 Mini is best for client-ready creative concepts, motion, video, and finishing workflows, model testing and prototype media.",
        status: "live",
        output_type: "video",
        edits: [{
            action: "reference",
            accepts: "video",
            slot: "videos",
            seed: {
                mode: "edit"
            }
        }],
        display_order: 20,
        handoff: {
            text: {
                field: "prompt",
                role: "a description of the video",
                mentions: !0
            },
            inputs: [{
                slot: "images",
                accepts: ["image"],
                max: 9,
                role: "reference images"
            }, {
                slot: "videos",
                accepts: ["video"],
                max: 3,
                role: "reference videos"
            }, {
                slot: "audio",
                accepts: ["audio"],
                max: 3,
                role: "reference audio"
            }]
        }
    };
    e.s(["meta", 0, n9], 453210);
    let oe = {
            src: e.i(310898).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        ot = {
            src: e.i(220098).default,
            width: 1600,
            height: 900,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRuQAAABXRUJQVlA4TNgAAAAvBwABAM1VICICHgiACQMAAIBuf+OuIBACAAAAAAAAAAAAAAAAAAAAAAAIAAgAAABPGHQcx2tCFQAAgAcCkMIAAABw/v+XxBBBAAAAAAABAAAAAAAAAAAAAAAAAAAAAAABYIABMEJB9fceCLAJAAAAwPnXPgUHAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQD8rUWGfHcRp/YNY/Lp514JPoQU8s/o9yFxn6gL2mRW1Rc6Vue0ePC3kPjLrWiAqbCR1nQclB1CgA59l/sFb6QvDaT1dTM="
        },
        oi = {
            id: "seedream",
            name: "Seedream 4",
            tagline: "Text-to-image up to 4K",
            icon: oe,
            thumbnail: {
                src: e.i(748150).default,
                width: 1024,
                height: 768,
                blurWidth: 8,
                blurHeight: 6,
                blurDataURL: "data:image/webp;base64,UklGRvoAAABXRUJQVlA4TO0AAAAvB0ABAM1VICICHgiADQIAAAAnnmYEoJwCBAAAAAAAAAAAAAAAAAAAABAAAHA4AAgUBOOXot+P1hwAAMADAUhhAAAAOP/u4wusASQAAAAAMAAAAAAAAAAAAAAAAAAAAAAADMAAAoEhBa2+vQcCbMMAAABw/pVFXzZgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4APDTbmmkDa/g3metl0MD3OHqToso3W1jb8mPABZI62mMXspszx77Uqc3HsHsvp71kfyhLQVbGM3/82PMvEdrIKz4Uxpr54iLKp6N4kPnVEo9PPOi8SzuBxIA"
            }.src,
            hero: {
                url: ot.src,
                media_type: "image"
            },
            aliases: ["ByteDance", "Seedream 4.0", "Flux", "Ideogram"],
            categories: ["models"],
            professions: ["designer", "developer", "creator"],
            nav_tags: ["image-tools", "models", "all-apps"],
            best_for: "Seedream 4 is best for visual exploration and polished imagery, model testing and prototype media.",
            status: "live",
            output_type: "image",
            display_order: 100,
            handoff: {
                text: {
                    field: "prompt",
                    role: "a description of the image",
                    mentions: !0
                },
                inputs: [{
                    slot: "references",
                    accepts: ["image"],
                    max: 10,
                    role: "reference images"
                }]
            }
        };
    e.s(["meta", 0, oi], 114414);
    let oA = {
            src: e.i(887533).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        or = {
            src: e.i(956550).default,
            width: 1600,
            height: 900,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRugAAABXRUJQVlA4TNsAAAAvBwABAM1VICICHgiACQMAAIB/KwMOfD8ICPAcSHACAAAAAAAAAAAAAAAAAAAAAEAAgHMAcLASSwAAADwQgBMIAACA899+u19CEAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBQ2JUHAlADAQAAcP4m2r0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8Kbs66ss0t927iGMNW/oZj8VqJ7T8oI/ZvE/Zsg/3wVm9OamKT5GjLG/JdIbvkTtAzG9xAtJe4JzWmJ9o5z1kquQFmBDyU2oKwEA"
        },
        oa = {
            id: "seedream-5",
            name: "Seedream 5",
            tagline: "Text-to-image and editing, Pro at 2K or Lite at 4K",
            icon: oA,
            thumbnail: {
                src: e.i(247178).default,
                width: 1024,
                height: 768,
                blurWidth: 8,
                blurHeight: 6,
                blurDataURL: "data:image/webp;base64,UklGRvoAAABXRUJQVlA4TO4AAAAvB0ABAM1VICICHgiACQMAAIBYIzoiR+LOQeQHxIEAAAAAAAAAAAAAAAAAAAAAAAAACM4Rh3ie7QAAAOCBAOQgAAAAnP/+7/7TSgBsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEUdTavwcCkMIAAABw/r/6dQsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxGr3u70pMomOZUEpHoqgxQti+GM17fgymUDrpH3yekvN056guUC4zbuN0lc7KBAbJZns6jWG//p185wYtcIe7r8c093d2efL1XeJbNfEl5WyjGg8QBNd/FUH"
            }.src,
            hero: {
                url: or.src,
                media_type: "image"
            },
            aliases: ["ByteDance", "Seedream 5.0 Pro", "Seedream 5.0 Lite"],
            categories: ["models"],
            professions: ["designer", "developer", "creator"],
            nav_tags: ["image-tools", "models", "all-apps"],
            best_for: "Seedream 5 Pro is best for visual exploration and polished imagery, model testing and prototype media.",
            status: "live",
            output_type: "image",
            display_order: 580,
            handoff: {
                text: {
                    field: "prompt",
                    role: "a description of the image",
                    mentions: !0
                },
                inputs: [{
                    slot: "references",
                    accepts: ["image"],
                    max: 10,
                    role: "reference images"
                }]
            }
        };
    e.s(["meta", 0, oa], 874748);
    let on = {
        id: "short-film",
        name: "Short Film",
        tagline: "Turn a premise into a multi-scene short film",
        icon: {
            src: e.i(228834).default,
            width: 256,
            height: 256,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRg4BAABXRUJQVlA4TAIBAAAvB8ABAM1VICICHggADiIAAIA5tEEBIYoBEA0BAAAAAgAgAAAAAkoIBAACAAAACBJIkEgAFWHVvw6uAQAAPBAAGwQAAIDzXyMT7+3EoQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADSkqCrrd7yQLCtKAEAAM5/6R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICD228i3/ZHCBKGgdaD0IJLyBPYcnpOxzvE3H0IQeJMWVOq42Xy6rJ7BGmQmIFm3aXMYYwX0w9SvgZdaRcu42ejX/4OgxFa/zPJVWw0VAXdKjdNeDftLp+umK8c/7F+3ATXPuttlVIpBnudIrg="
        },
        thumbnail: {
            src: e.i(948795).default,
            width: 1024,
            height: 768,
            blurWidth: 8,
            blurHeight: 6,
            blurDataURL: "data:image/webp;base64,UklGRgYBAABXRUJQVlA4TPoAAAAvB0ABAM1VICICHgiADQIAAICuPIc7AEDXoRTwAwgAAAAAAAAAAAAAgAAAAAAAEhAgECCudm4sos4BAAA8EIAcBAAAgPP3t72ZvgIAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAACA2DI2skWr0UTxQABMGAAAAM6ffSdNadzD0S+AB0BPAAAAAAAAAAAAAAAAAAAAcAAAAAAAcAgI705FzstdDo/qktT0YfyAhD9Tl9Xy/bxK8CEGl5/tyj5VKRx12499uxagFnU99bfeaokeO4VH3c1AY8qIa2OxvOcrftHRPAHNy/W3FvYQs9OGRoZGgWFoDfai7UhOxDBJ"
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/files/agent/e1607ef6-64bb-46a6-ba1a-910714b05b6b/director-suite-output.mp4",
            media_type: "video"
        },
        aliases: ["short drama", "storyboard"],
        categories: ["templates", "pika"],
        professions: ["video-editor", "creator", "agency"],
        nav_tags: ["video-tools", "templates", "use-cases", "all-apps"],
        best_for: "Short Film is best for a story told in up to 8 evenly timed beats, 8s to 2m: you write the shot list and supply cast stills from create_image or edit_image, and each call renders consecutive beats as one clip locked to that cast for assembly in a project. A script with exact per-shot timing, titles or freezes is better shot clip by clip and placed on the timeline.",
        status: "live",
        output_type: "video",
        display_order: 240,
        handoff: {
            text: {
                field: "doc:logline",
                role: "the film's idea or logline",
                max: 2e3,
                mentions: !0
            },
            inputs: [{
                slot: "reference",
                accepts: ["image"],
                max: 6,
                role: "reference images for characters and places",
                remix: !0
            }]
        }
    };
    e.s(["meta", 0, on], 508400);
    let oo = {
        id: "smart-resize",
        name: "Smart Resize",
        tagline: "Adapt photos and videos to any platform with AI reframing.",
        icon: {
            src: e.i(572892).default,
            width: 128,
            height: 128,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRiQBAABXRUJQVlA4TBcBAAAvB8ABAM1VICICHggADiIAAAB2hEIFJCyBwRgIAAAAAACAAAAAEAAAAAAAAEABAEgeFKVkiLJk7W9xAAAAPBAAGwQAAIDz39qGnsQRBC4AABIAIAEAAAAAAAAAAAAAAAAAAAAoAACAEoegsnbzQABsEAAAAM5/q586JgoHBAAAAAAAAAAAAAAAAAAAAAAAAAAIAYSAACApQD33f/sif0N0AcObQZVACXGjumO+G/sxgMsDvCJ7FwdF/AbfJs03g3OEplHXkVCpyUVB3v+fgPpYe27WVHoBH45QT7b35CStq7k1UgZJLcZlnnUakNwrpm9DwVU9FB2jZzwjTIl1+HNJ5XiwZanWTW2f3F9+hqxkYYDdY+M1TysA"
        },
        thumbnail: {
            src: e.i(115029).default,
            width: 1280,
            height: 800,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRuwAAABXRUJQVlA4TN8AAAAvBwABAM1VICICHgiACQMAAICtQ/RzXAEQAAIAwAEAAAAAAAAAAAAAAAEAAAAALgIBBMH90jARFAAAgAcCYMIAAABw/vOsS1YOY/RHBAQAAAAAAAAAAAAAAAAAAAAAAAAAAMABcH4gOQQVDwTYhgEAAOD8F2xmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADj30bZvk0gvT05xf8c+a1sYmz7d1VT31TjS6WQbgAjalfQ+zgp37+udRwcCFpJCsKSYUE3ilxyYyP9KkuTjN8aArPAX8vuUG6MX4usIAA=="
        }.src,
        aliases: ["Reframe Anything", "Reframe Footage", "Resize Images", "expand video", "outpaint", "uncrop"],
        categories: ["ai-video-toolkit"],
        professions: ["video-editor", "creator", "marketer", "designer"],
        nav_tags: ["all-apps", "video-tools", "image-tools"],
        best_for: "Smart Resize adapts a photo, poster or ad to a new aspect ratio for different platforms, recomposing the image while preserving important subjects, text and branding. This tool takes images only; video reframing is in the web app.",
        status: "live",
        output_type: ["image", "video"],
        display_order: 999,
        mcp: {
            as: "presets"
        },
        handoff: {
            text: null,
            inputs: [{
                slot: "videos",
                accepts: ["image", "video"],
                max: 1,
                role: "the photo or clip to reframe to a new aspect ratio",
                required: !0
            }]
        }
    };
    e.s(["meta", 0, oo], 286161);
    let os = {
        id: "swap-anything",
        name: "Swap Anything",
        tagline: "Recast anything in your clip — the performance stays as filmed.",
        icon: {
            src: e.i(70038).default,
            width: 256,
            height: 256,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRhgBAABXRUJQVlA4TAwBAAAvB8ABAM1VICICHgjADioAAIAzCSIvBCkApEoBAAAAAAAAAAAAAAAAAAAAQAAAIYA+wCdgENYytLYLAADggQDkIAAAAJz/fQLFFwAChAgAAAgAAgAAAAAAAAAAAAAAwAAQRAACEAQAFIhsf+eBAOQgAAAAnH9NSEhmJQQAQAAAAAAAwAAAAAAAAAAAAAAAAAAAAICtCRUJEN7f7yJbjyQoIwEgBkgD9cvik3IVcc9d6qfUDA8MSiL5kJzrKN1cpjWPy5nWggBABQ5mldT66tzTSAAi0Dyt3GNnm+WqfFCNrBBza8teEnvNIb/U+89e8kTQnLd3W/b9vzl3/aEoCaPh4Lg+YT8nfTv/a5QB"
        },
        thumbnail: {
            src: e.i(691194).default,
            width: 1024,
            height: 768,
            blurWidth: 8,
            blurHeight: 6,
            blurDataURL: "data:image/webp;base64,UklGRgABAABXRUJQVlA4TPQAAAAvB0ABAM1VICICHgiADQIAAIA5Qu/gdEAQBAAABwgHAAAAAAAAAAAAAAAAcAC4C4SDALADlJyzVS4AAAAPBCAHAQAA4PwPgSRTmAgAgIAFAAAAAAAAAAAAAAAAAPAAAAAwAAAATCMBQ1Rb/+eBAOQgAAAAnP/AFgFBAAAAAACGAAQAAAAAAAAAAAAAAAAAAAAAADVlYCqyxH7n/iOXYe2t/kCj6Pke3MU/j2Nq9ozfNr1pbtlu2e3nGoqawFqJJDjZ413mzS9pjdSNpF+GIcyMjcsbxQcJ5aKwpogO2Iv3cbjycab9ef6PvUILFW+7T4oqoAIk"
        }.src,
        aliases: ["character swap", "outfit change", "location swap", "product swap"],
        categories: ["ai-video-toolkit"],
        professions: ["video-editor", "creator", "marketer"],
        nav_tags: ["all-apps", "video-tools"],
        best_for: "Swap Anything is best for editors and marketers who want a finished take recast from reference images — the characters, the outfits, the location or the products — while the motion, camera, timing and lip-sync stay exactly as filmed.",
        status: "live",
        output_type: "video",
        edits: [{
            action: "swap-subject",
            accepts: "video",
            slot: "videos",
            field: "video"
        }],
        display_order: 999,
        mcp: {
            as: "presets"
        },
        handoff: {
            text: null,
            inputs: [{
                slot: "videos",
                accepts: ["video"],
                max: 1,
                role: "the video to reskin",
                required: !0
            }, {
                slot: "ref-character",
                accepts: ["image"],
                max: 3,
                role: "character references to swap in"
            }]
        }
    };
    e.s(["meta", 0, os], 427735);
    let ol = {
            src: e.i(593284).default,
            width: 256,
            height: 256,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRg4BAABXRUJQVlA4TAEBAAAvB8ABAM1VICICHggADiIAAIBztBsGYUGCiQAACEICAEAAAIAIAJAHAACABwAAAJKAiBAgDBigkg5OAAAADwQgBwEAAOD8z6/1w6ZICQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICAJoh+/WZbHgg4AgIAAMD571YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC/S7ytZ8QzHwAVUHrsCvE7Qlbj71jeNbQ01cIZsLUfe7/e/rz7eI72zKHGT92Q6ebq+ILSy1zAXlayCg/gESUzAlQlbimVav1zJDY6CDlaF36XClr3X7HPyx/kUZZ7JrXJC6/1sjV6awMuwA="
        },
        od = {
            src: e.i(462545).default,
            width: 1600,
            height: 900,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRuwAAABXRUJQVlA4TN8AAAAvBwABAM1VICICHghACgMAAIBtY00EiG8ImA0BGUCAQAAAAAAAAAAAAAAAAAAAAAgAUACzAEFAWAcAAOCBAKQwAAAAnP++fzQAMAAAAAAAAAAAAAAAAAAAAAAAAAAAABIAALFIkBGCSOXWeyAAJxAAAADnf1sBDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQCFD1rwymbZH62UxcGpyMCMwmcLijbASnbP53LL2b+o1waCcsV5LY9U74/rhm8+FK0PiRKXwl/eLTdfobR653Qg4QelQr3y2NaxumyiIEAA=="
        },
        ou = {
            id: "talking-head-studio",
            name: "Talking Head Video",
            tagline: "Lip-synced video from a face and audio",
            icon: ol,
            thumbnail: {
                src: e.i(410751).default,
                width: 1024,
                height: 768,
                blurWidth: 8,
                blurHeight: 6,
                blurDataURL: "data:image/webp;base64,UklGRvwAAABXRUJQVlA4TPAAAAAvB0ABAM1VICICHggACAIAAICU9QgNgXkC7EBgYwAAEDgAAAAAAAAAAAAAAACAAcQIZobwC6FTAAAAeCAAOQgAAADn36kVigBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQT1CwJBCiiI/9x5IABHCAAAAOe/3RNEDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI+GHVw2Ls30Xy7LDiCCDQkAACwUJM0l7StcWbor6YREhn6dJRBdvi2Wyd7m2f2pskji+/09P61MtHrnjM3B07tp9fu0X6tQlWkui8bIRjFgKP5z30s7/edIQa/5vD8wM="
            }.src,
            hero: {
                url: od.src,
                media_type: "image"
            },
            aliases: ["Talking Head Studio", "Kling Avatar", "ElevenLabs", "lipsync", "Sync Labs", "presenter", "spokesperson"],
            categories: ["pika", "featured", "ai-video-toolkit", "voice"],
            professions: ["agency", "video-editor", "marketer", "founder", "creator"],
            nav_tags: ["video-tools", "audio", "use-cases", "all-apps"],
            best_for: "Lip-sync a portrait or a video of a person to speech. Sync Labs models use video input.",
            status: "live",
            output_type: "video",
            edits: [{
                action: "lip-sync",
                accepts: "image",
                slot: "face",
                field: "face"
            }],
            display_order: 30,
            mcp: {
                as: "presets"
            },
            handoff: {
                text: {
                    field: "doc:input",
                    role: "the exact words to speak",
                    max: 1e3,
                    wrap: {
                        key: "text",
                        base: {
                            kind: "script"
                        }
                    }
                },
                inputs: [{
                    slot: "face",
                    accepts: ["image"],
                    max: 1,
                    role: "a photo of the presenter's face",
                    remix: !0
                }, {
                    slot: "video",
                    accepts: ["video"],
                    max: 1,
                    role: "a video of a person for Sync Labs models",
                    remix: !0
                }, {
                    slot: "audio",
                    accepts: ["audio"],
                    max: 1,
                    role: "a voice recording to lip sync to",
                    remix: !0
                }]
            }
        };
    e.s(["meta", 0, ou], 114253);
    let oc = {
        id: "time-tourist",
        name: "Time Tourist",
        tagline: "Step into another era and watch it come alive",
        icon: {
            src: e.i(207637).default,
            width: 128,
            height: 128,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRiYBAABXRUJQVlA4TBoBAAAvB8ABAM1VICICHgiADQIAAIC4OuruETgpABAQABECAAcICAAAAAAAAAAAAAgAHQoCBNB5coCv8lIEAADAAwGwQQAAADj/bZff8+IRHEAgIqgAAAAAAAAAAAAAAAAAAAAAAAABAAAQErk0r+QvDwTABgEAAOD895XbW9QLAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAACQAkdABfblfeJbLs9Cozv0MwbXyZPvYdVTkgAE/xDsq1Jqr3n8ZymY+ivj5pDh9CNrsghWavGfH2pEP0K9Aj73QO1LrruUFXehI/dtlQ+xtzxA+jTWwiOGReZyMJ+ZPtcrmvNTK8RRZKVaCNGyyUseClLKAIUKvvs3890Vk/ZgOxGSBPk5wA="
        },
        thumbnail: {
            src: e.i(643588).default,
            width: 1280,
            height: 800,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRuIAAABXRUJQVlA4TNYAAAAvBwABAM1VICICHghACgMAAAD77SsIIQAAABgAAAAAAAAAAAAAAAAAAAADgQAAEAEEeAwKas/ABQAAgAcCjAIBAABw/rvrd6UC8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGhankgwEQQAAAA57/W8QQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4JD71iKF9wDg1rSttTFAiPtYJT3Sw3azHb9LvvyNLLJicXufM+atb1DhBGANp79zn5L3KaIb2/+PAnyPcvOrSF28TDME"
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/time-tourist.mp4",
            media_type: "video"
        },
        aliases: ["time travel", "GPT Image", "Kling"],
        categories: ["featured", "templates"],
        professions: ["video-editor", "creator", "agency", "for-fun", "designer"],
        nav_tags: ["video-tools", "image-tools", "templates", "use-cases", "all-apps"],
        best_for: "Time Tourist is best for client-ready creative concepts, visual exploration and polished imagery, motion, video, and finishing workflows.",
        status: "live",
        hidden: !0,
        output_type: "video",
        display_order: 660,
        handoff: {
            text: {
                field: "doc:custom",
                role: "a destination or era to visit",
                max: 120
            },
            inputs: [{
                slot: "source",
                accepts: ["image"],
                max: 1,
                role: "a photo of the traveler",
                required: !0
            }]
        }
    };
    e.s(["meta", 0, oc], 313596);
    let om = {
        id: "time-travel-vlog",
        name: "Time Travel Vlog",
        tagline: "Selfie to scroll-stopping ancient-world vlog",
        icon: {
            src: e.i(775048).default,
            width: 128,
            height: 128,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRi4BAABXRUJQVlA4TCIBAAAvB8ABAM1VICICHgiADQIAAICqJTwn+iVAQgEAhAAgAAIAAAAAAAAAAQAAAAgCCCII4JBIOKTkP38dAADAAwGwQQAAADh/ev/fn6p4J1ECAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAVUiPv3/d8kAAcBABAADOf+1SVKKEAIJAAAACAAAAAAAAAAAAAAAAAAAAAAAIiOhLqmDdqpH7zabIPrZ/+wULedTdbxyCy+G4kKHS4lllcqDsl5opHhejGSKBY07edxpFZCO6s+IQWr18SHfdL/k8gJ5sOJ4e8zk8CAyPdsR3SdYEu+3x94zryncZpSRGZfpU/61GVUlbPEDBBnoTN/xyJyIdNI1fSvB/LpKqXNZudXc19VclohDCfMFK1A=="
        },
        thumbnail: {
            src: e.i(801393).default,
            width: 1280,
            height: 720,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRuQAAABXRUJQVlA4TNgAAAAvBwABAM1VICICHgiACQMAAACChuQAAAAAgAAAAAAAAAAAAAgAAAAAAAAAAAAQeRoushJzGokBAADAAwEwYQAAADj/7cusnAIEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgl6X2zQMBNgEAAAA4/+Z70RMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAIJJbImPfwUBZX0rUGACyxkAxI5L1v52TYAJO0pFqtPSwIu7vCgWSPN+Hs4dnsbcefPM0SXmKlMt1vK1axvp1wjHeg77g2QE="
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/time-travel-vlog.mp4",
            media_type: "video"
        },
        aliases: ["era"],
        categories: ["templates"],
        professions: ["video-editor", "creator", "for-fun", "agency"],
        nav_tags: ["video-tools", "templates", "use-cases", "all-apps"],
        best_for: "Time Travel Vlog is best for client-ready creative concepts, motion, video, and finishing workflows, playful experiments and casual creation.",
        status: "coming_soon",
        hidden: !0,
        output_type: "video",
        display_order: 214
    };
    var og = e.i(78323),
        op = e.i(177383);
    e.s(["APP_ID", () => og.APP_ID, "IMAGE_UPSCALE_DEFAULTS", () => op.IMAGE_UPSCALE_DEFAULTS, "IMAGE_UPSCALE_FACTORS", () => op.IMAGE_UPSCALE_FACTORS, "IMAGE_UPSCALE_FORMATS", () => op.IMAGE_UPSCALE_FORMATS, "IMAGE_UPSCALE_MODELS", () => op.IMAGE_UPSCALE_MODELS, "UPSCALE_IMAGE_MODEL", () => op.UPSCALE_IMAGE_MODEL, "UPSCALE_TARGETS", () => op.UPSCALE_TARGETS, "UPSCALE_VIDEO_MODEL", () => op.UPSCALE_VIDEO_MODEL, "VIDEO_SIZE_UNREAD", () => op.VIDEO_SIZE_UNREAD, "VIDEO_UPSCALE_DEFAULTS", () => op.VIDEO_UPSCALE_DEFAULTS, "VIDEO_UPSCALE_MODELS", () => op.VIDEO_UPSCALE_MODELS, "factorFor", () => op.factorFor, "imageScale", () => op.imageScale, "imageUpscaleRequest", () => op.imageUpscaleRequest, "resolveImageFormat", () => op.resolveImageFormat, "upscaleRequest", () => op.upscaleRequest, "videoOutputIssue", () => op.videoOutputIssue, "videoUpscaleRequest", () => op.videoUpscaleRequest], 561673);
    var of = e.i(561673);
    e.s(["upscaleKit", 0, of ], 994919);
    var of = of ;
    let ov = {
            src: e.i(317174).default,
            width: 256,
            height: 256,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRgoBAABXRUJQVlA4TP0AAAAvB8ABAM1VICICHgiKDiIAAIA3yICBgpAoAADh4ABgMQAIBAAAAAAEAAAAAAgAQAQAAQEUBAb+RP4AAAAeCEoRJQAAwPm/pu4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4tmY8EKAcVAAAgPO/F7vTNgo+EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUSNLavfEvMv0ahGYQglBqKgEgov18z/1d2+v79miHwHz2XS+WWiZtM7/jiElo3Yr4ZREmAZ+pDJBMZLjjt7u/s/VnEpSK8iuzmv++m3jqrDKk1ZSxEfQPCt8op5hKACfrptb/NfdTnQwAAA=="
        },
        oh = {
            src: e.i(447045).default,
            width: 1024,
            height: 768,
            blurWidth: 8,
            blurHeight: 6,
            blurDataURL: "data:image/webp;base64,UklGRuQAAABXRUJQVlA4TNcAAAAvB0ABAM1VICICHgjAEQIAAIBtW74gEAAPAAAAAAAAAAAAAADAAwAAAAAAAAAAAEB4AIAnQNR2GwAAwAMBuWEAAAA4//voKxVKbQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAKATeKBgKMAAAAAnP/tAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiL6qLXLc0eQtcii9tINCCXDAAqfwlhIhTIpBlJO+vm2KAKFEheb/bW4LCLLlDYp3+M49n0nzRZVT8A/7y4u91jrPOm7HMAA="
        },
        ob = {
            id: of .APP_ID,
            name: "Upscale",
            tagline: "Push any photo or clip up to 4× with Topaz",
            icon: ov,
            thumbnail: oh.src,
            hero: {
                url: "https://cdn.pika.art/v2/creation/app-heroes/upscale-video.mp4",
                media_type: "video"
            },
            aliases: ["Upscale Image", "Upscale Video", "enhance", "resolution", "upres"],
            categories: ["pika", "ai-video-toolkit"],
            professions: ["agency", "video-editor", "designer", "creator"],
            nav_tags: ["video-tools", "image-tools", "all-apps"],
            best_for: "A photo up to 4x, a video to 1080p or 4K on Topaz, or a video up to 768p to 4K with Pika H3 Flex.",
            status: "live",
            output_type: ["image", "video"],
            edits: [{
                action: "upscale",
                accepts: "image",
                slot: "source",
                field: "media"
            }, {
                action: "upscale",
                accepts: "video",
                slot: "source",
                field: "media"
            }],
            display_order: 340,
            mcp: {
                as: "presets"
            },
            handoff: {
                text: null,
                inputs: [{
                    slot: "source",
                    accepts: ["image", "video"],
                    max: 1,
                    role: "the photo or clip to upscale",
                    required: !0
                }]
            }
        };
    e.s(["meta", 0, ob], 414852);
    let o$ = {
        id: "veo-3-1",
        name: "Veo 3.1",
        aliases: ["Google Veo 3.1"],
        tagline: "Cinematic text-to-video with native audio",
        icon: {
            src: e.i(231479).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        thumbnail: {
            src: e.i(933336).default,
            width: 1024,
            height: 768,
            blurWidth: 8,
            blurHeight: 6,
            blurDataURL: "data:image/webp;base64,UklGRugAAABXRUJQVlA4TNwAAAAvB0ABAM1VICICHghADgIAAIC3W7efAJAsAAAAAAAAAAAAAAAAAAAAAACIAiAAAjMAEPABEGJARQMAAHggICcAAAAA5383AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASKvtPRCAEwgAAIDzv+YBAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAviwA76fatouc7bC5JATjHjoIGKCmFAaqkWodPOe71wRngoR6o7vHll7r1fLWiw41Jt/kGGteSVvf27bzH/8IFwTMTzyFKgzJ77GRX0oI"
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/veo-3.mp4",
            media_type: "video"
        },
        categories: ["featured", "models"],
        professions: ["video-editor", "creator", "developer", "agency"],
        nav_tags: ["video-tools", "audio", "models", "all-apps"],
        best_for: "Veo 3.1 is best for client-ready creative concepts, motion, video, and finishing workflows, model testing and prototype media.",
        status: "live",
        output_type: "video",
        display_order: 310,
        handoff: {
            text: {
                field: "prompt",
                role: "a description of the video",
                mentions: !0
            },
            inputs: [{
                slot: "references",
                accepts: ["image"],
                max: 3,
                role: "reference images"
            }, {
                slot: "clip",
                accepts: ["video"],
                max: 1,
                role: "a clip to extend",
                alone: !0
            }]
        }
    };
    e.s(["meta", 0, o$], 879787);
    let oI = {
        id: "veo-3-fast",
        name: "Google Veo 3.1 Fast",
        tagline: "Google's Veo 3.1 in faster, lower-cost mode — text-to-video with native audio.",
        icon: {
            src: e.i(20500).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        thumbnail: {
            src: e.i(729020).default,
            width: 800,
            height: 500,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRtIAAABXRUJQVlA4TMYAAAAvBwABAM1VICICHgjACQQAAIAXhgAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAACQD1S7u60BAAA8EJATAAAAgPMHtf3dBwAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAA8E7QQCAADg/Lf3f0rnAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAACoFkSOv+ISQ72Jvveb0JFQCRQyZFKrCBBvElFf22YAH7q/opt9rKCX3/T/nY0yyzgCRQyOQQM="
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/veo-3-fast.mp4",
            media_type: "video"
        },
        aliases: ["Veo 3 Fast"],
        categories: ["models"],
        professions: ["video-editor", "creator", "developer", "agency"],
        nav_tags: ["video-tools", "audio", "models", "all-apps"],
        best_for: "Google Veo 3.1 Fast is best for client-ready creative concepts, motion, video, and finishing workflows, model testing and prototype media.",
        status: "live",
        hidden: !0,
        output_type: "video",
        display_order: 400,
        handoff: {
            text: {
                field: "prompt",
                role: "a description of the video",
                mentions: !0
            },
            inputs: [{
                slot: "references",
                accepts: ["image"],
                max: 3,
                role: "reference images"
            }]
        }
    };
    e.s(["meta", 0, oI], 655595);
    let oy = {
        id: "veo-3-i2v",
        name: "Google Veo 3.1 — Image to Video",
        tagline: "Animate a still image with audio",
        icon: {
            src: e.i(130678).default,
            width: 24,
            height: 24,
            blurWidth: 0,
            blurHeight: 0
        },
        thumbnail: {
            src: e.i(41728).default,
            width: 800,
            height: 500,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRtYAAABXRUJQVlA4TMkAAAAvBwABAM1VICICHgjACQQAAIA1UgAAAAAAAAAAAAAAgAcAAAAAAAAAAAAAAAAAAAAAhaTfXWsFAAB4ICAnAAAAAOcPsv3fFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAB4IwAkEAADA+be7NeIFAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAgJhS1i/y+8NHri9iSsmJLfM0gl28IKV5IppHSUEJ1ag/hnJh9MLlhvBD7X7t9vFawjNemZWtBEorWQAA"
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/veo-3-i2v.mp4",
            media_type: "video"
        },
        aliases: ["Veo 3 Image to Video"],
        categories: ["models"],
        professions: ["video-editor", "creator", "agency", "developer", "designer"],
        nav_tags: ["video-tools", "image-tools", "audio", "models", "all-apps"],
        best_for: "Google Veo 3.1 — Image to Video is best for client-ready creative concepts, visual exploration and polished imagery, motion, video, and finishing workflows.",
        status: "live",
        hidden: !0,
        output_type: "video",
        edits: [{
            action: "animate",
            accepts: "image",
            slot: "source"
        }],
        intent: "prompt",
        display_order: 460,
        handoff: {
            text: {
                field: "prompt",
                role: "a description of the motion"
            },
            inputs: [{
                slot: "source",
                accepts: ["image"],
                max: 1,
                role: "the image to animate",
                required: !0
            }]
        }
    };
    e.s(["meta", 0, oy], 216245);
    let o_ = {
            src: e.i(644835).default,
            width: 256,
            height: 256,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRhIBAABXRUJQVlA4TAUBAAAvB8ABAM1VICICHghADgIAAIA/PysACgAAQAOAjAEAAAAA0BIAAAAgKgAAAACAMgKABQAAoABY81kAAAAPBOAIAQAA4PxvfmcVggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIig/tvmPBCgIlYAAIDzf23VdWAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAzwdrXe2KTHyKSFqlGQJ7qZGwXUTPP8Kax2f7tLDmnaPokJaYNvqa9hiO1zNjqrRIa64zGfr77p7rBXLxVww1AT/UZEQACQSwl+ZXg87rd53/CtAs9lIjDWNJmadt71xTDJcaC7Ybhg134W5zG94yYA0A"
        },
        ox = {
            src: e.i(254639).default,
            width: 1024,
            height: 768,
            blurWidth: 8,
            blurHeight: 6,
            blurDataURL: "data:image/webp;base64,UklGRvYAAABXRUJQVlA4TOkAAAAvB0ABAM1VICICHghADgIAAID7rcKDAgCACAIAAAAAAAAAAAAAAAAAAAAgAAABGCgCANbMIwZY/gAAADwQEBQGAACA87/fW2ogG5SJABACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgYc30HgjAEQIAAMD535lPQh4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgCdATZpkvy4yXcdkzXT63K65QnM/7nmZQCzeTz/Gfn5L3yoAAEFEFX2h9Hw390VEADjIv0Yfy7XkR/cpACiYfp/Wh2dvL9tvYiCC8E3nU6Pc0dvIvlxIAQA="
        };
    e.s(["default", 0, ox], 478197);
    let ok = {
        id: "video-studio",
        name: "Video Studio",
        tagline: "Create or edit videos with AI",
        icon: o_,
        thumbnail: ox.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/hailuo-2-3.mp4",
            media_type: "video"
        },
        aliases: ["video editor", "extend video", "trim video", "relight video", "color grade", "camera move", "upscale video", "shot deck"],
        categories: ["ai-video-toolkit", "pika"],
        professions: ["video-editor", "creator", "agency", "designer"],
        nav_tags: ["video-tools", "all-apps"],
        best_for: "Video Studio is a full-screen workspace to generate a clip from a prompt and a shot deck, then keep working on it in place: extend, trim, relight, grade, move the camera and upscale.",
        status: "live",
        internal: !0,
        output_type: "video",
        fullscreen: {
            rail: {
                source: "project",
                media: ["video", "image", "audio"]
            },
            minEditorWidth: 420,
            railWidth: 144,
            tone: "dark"
        },
        display_order: 595,
        handoff: {
            text: {
                field: "prompt",
                role: "a description of the video or the edit"
            },
            inputs: [{
                slot: "source",
                accepts: ["video"],
                max: 1,
                role: "the video to edit"
            }]
        }
    };
    e.s(["meta", 0, ok], 977126);
    let ow = {
            src: e.i(749687).default,
            width: 256,
            height: 256,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRgoBAABXRUJQVlA4TP0AAAAvB8ABAM1VICICHghaDgIAAIB3FURAyAAEBAggAAAABAYAEMAAAEIIAAAhAAAACAABgYIIkIABPwAAgAeCVgMBAABw/q9+HQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALutvgcCkIMAAABw/v/VvjUpNgqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIgGgk1ZafucjYCSAXrECEWBhggCbpj3aO98T9fnEyQC7n/JOH473LtvP221RWsVZzu3eF2tZavmjcPliBDMqAYJkS4wcyzKP5qjDevZ+zALcmQkipZUPmpkevOqR26kgBNrm0PN9atm/b5bLAAA=="
        },
        oD = {
            src: e.i(812512).default,
            width: 1600,
            height: 900,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRtoAAABXRUJQVlA4TM4AAAAvBwABAM1VICICHgiADQIAAACtxR0dCHAEP4cLgHEAAQAAAAAAAAAAAAAQAEDAAQAAAAAUwFbnOAMAAPBAUK0gAAAAzr+GHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPfXywMBSYEAAAA4/9k9UQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIPRvItP3oYT+s0VFPZKo+R+QRjiQZChLack0bpXcc1/Zm4lrACzt4qV8m/8jymhW19AvczPXW/XWU/y4Ww=="
        },
        oU = {
            id: "video-trim",
            name: "Trim Video",
            tagline: "Cut a clip down to exactly the span you want.",
            icon: ow,
            thumbnail: {
                src: e.i(777103).default,
                width: 1024,
                height: 768,
                blurWidth: 8,
                blurHeight: 6,
                blurDataURL: "data:image/webp;base64,UklGRuoAAABXRUJQVlA4TN0AAAAvB0ABAM1VICICHgiADQIAAACtXcAkTlDpOcQ5gANAFAAAAAAAAAAAAAAAAIQAAIIAKMcTAABIdxoAAAAPBF0FAgAA4Py36+cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICE9uaBgAMgAgAAnP/dFuDBAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECqskj7338HXiZyAU6qL2FSJsN7VT4jtKyL0AhGM69jmi37cqxDEcFWilT6eWidjUUsahJPOdLr/sL53xANmu/1pFtc6U59w6b9BgA="
            }.src,
            hero: {
                url: oD.src,
                media_type: "image"
            },
            aliases: ["Video Trim", "cut video", "shorten video", "trim clip"],
            categories: ["ai-video-toolkit"],
            professions: ["agency", "video-editor", "creator"],
            nav_tags: ["video-tools", "all-apps"],
            best_for: "Cutting a clip to a span between two timestamps, often to fit another app's length limit.",
            status: "live",
            output_type: "video",
            edits: [{
                action: "trim",
                accepts: "video",
                slot: "source",
                field: "video"
            }],
            display_order: 999,
            mcp: {
                as: "presets"
            },
            handoff: {
                text: null,
                inputs: [{
                    slot: "source",
                    accepts: ["video"],
                    max: 1,
                    role: "the clip to trim",
                    required: !0
                }]
            }
        };
    e.s(["meta", 0, oU], 165676);
    let oC = {
            id: "voice-isolation",
            name: "Voice Isolation",
            tagline: "Lift a clean voice out of noisy audio",
            icon: {
                src: e.i(225853).default,
                width: 24,
                height: 24,
                blurWidth: 0,
                blurHeight: 0
            },
            thumbnail: {
                src: e.i(10846).default,
                width: 640,
                height: 400,
                blurWidth: 8,
                blurHeight: 5,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/APDmze/ly+7jyOzixevgw+rewOndvejbuwDr38Lq3r/o3L3n27rm2bfl17Xk1rLj1LAA5di15Naz49Sw4tOt4NGr39Co3s6l3cyjAN/QqN7Opt3No9zLodvJntrIm9jGmdfFlgDayZ3Zx5vYxpjXxJXWwpPUwZDTv43SvosDSF7ZD6pZ5gAAAABJRU5ErkJggg=="
            }.src,
            aliases: ["ElevenLabs", "denoise", "clean up", "isolate", "audio tools"],
            categories: ["ai-video-toolkit", "voice"],
            professions: ["video-editor", "creator", "agency"],
            nav_tags: ["video-tools", "audio", "all-apps"],
            best_for: "Voice Isolation is best for client-ready creative concepts, motion, video, and finishing workflows.",
            status: "coming_soon",
            hidden: !0,
            output_type: "audio",
            display_order: 710
        },
        oB = {
            id: "voiceover",
            name: "Voiceover",
            tagline: "Speak a script in the voice you name",
            icon: {
                src: e.i(403564).default,
                width: 128,
                height: 128,
                blurWidth: 8,
                blurHeight: 8,
                blurDataURL: "data:image/webp;base64,UklGRigBAABXRUJQVlA4TBsBAAAvB8ABAM1VICICHgiADQIAAADtUv+VcQc4AEgBAAAAAAAAAAAAAAAAAAAgAAAAAAC4UAnFCc3rz70AAAA8EAAbBAAAgPPvvGvty4ujOlFEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEcHqH+Po8EAAcRAAAgPNvt20rKzIGAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAQsFnE8xp2y5U1KnJcfJfNdS8u2cwCFASWrG38/5LwQr1xX9Mc6TE+jWe0QlQow/PpTFiy5Lq1HWnKrGF/UaAfjE6+VsAle0KHB2YXgt6CoaIPX18bnL9qjXYsk6WZTsK6ObEObkFnYcYCDcMLt/ddEaqa/oPsfU1f5Yq1yROZ3iG7LUZz7JAAAA=="
            },
            thumbnail: {
                src: e.i(550169).default,
                width: 800,
                height: 500,
                blurWidth: 8,
                blurHeight: 5,
                blurDataURL: "data:image/webp;base64,UklGRtIAAABXRUJQVlA4TMYAAAAvBwABAM1VICICHghaCgMAAIB3nQxkAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFDBqv8HAADwQEBxAAAAAM4f66r2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4IGg1UAAAACc/+vXuAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAGFkOLbKzEbaA1LTXqRHCuCIQi1D8HIXxzBnKf+fflqq9MBUc+Xelav1vXM7Lh/uqKk2gpvlZqA4="
            }.src,
            hero: {
                url: "https://cdn.pika.art/v2/creation/app-heroes/voiceover.mp4",
                media_type: "video"
            },
            aliases: ["ElevenLabs", "MiniMax", "narration", "TTS"],
            categories: ["ai-video-toolkit", "voice", "pika"],
            professions: ["video-editor", "creator", "agency"],
            nav_tags: ["video-tools", "audio", "all-apps"],
            best_for: "Voiceover is best for client-ready creative concepts, motion, video, and finishing workflows.",
            status: "live",
            hidden: !0,
            output_type: "audio",
            display_order: 330,
            handoff: {
                text: {
                    field: "speech:text",
                    role: "the exact words to speak"
                }
            }
        };
    e.s(["meta", 0, oB], 829953);
    let oS = {
        id: "wan-3",
        name: "Wan 3.0",
        tagline: "Generate or edit 2-30s video from a prompt, frames, or references",
        icon: {
            src: e.i(954797).default,
            width: 128,
            height: 128,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRiQBAABXRUJQVlA4TBcBAAAvB8ABAM1VICICHggADiIAAAB2hEIFJCyBwRgIAAAAAACAAAAAEAAAAAAAAEABAEgeFKVkiLJk7W9xAAAAPBAAGwQAAIDz39qGnsQRBC4AABIAIAEAAAAAAAAAAAAAAAAAAAAoAACAEoegsnbzQABsEAAAAM5/q586JgoHBAAAAAAAAAAAAAAAAAAAAAAAAAAIAYSAACApQD33f/sif0N0AcObQZVACXGjumO+G/sxgMsDvCJ7FwdF/AbfJs03g3OEplHXkVCpyUVB3v+fgPpYe27WVHoBH45QT7b35CStq7k1UgZJLcZlnnUakNwrpm9DwVU9FB2jZzwjTIl1+HNJ5XiwZanWTW2f3F9+hqxkYYDdY+M1TysA"
        },
        thumbnail: {
            src: e.i(581963).default,
            width: 1280,
            height: 800,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRuwAAABXRUJQVlA4TN8AAAAvBwABAM1VICICHgiACQMAAICtQ/RzXAEQAAIAwAEAAAAAAAAAAAAAAAEAAAAALgIBBMH90jARFAAAgAcCYMIAAABw/vOsS1YOY/RHBAQAAAAAAAAAAAAAAAAAAAAAAAAAAMABcH4gOQQVDwTYhgEAAOD8F2xmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADj30bZvk0gvT05xf8c+a1sYmz7d1VT31TjS6WQbgAjalfQ+zgp37+udRwcCFpJCsKSYUE3ilxyYyP9KkuTjN8aArPAX8vuUG6MX4usIAA=="
        }.src,
        aliases: ["Alibaba", "Tongyi", "Wanxiang"],
        categories: ["models"],
        professions: ["video-editor", "developer", "creator", "agency"],
        nav_tags: ["video-tools", "models", "all-apps"],
        best_for: "Wan 3.0 is best for client-ready creative concepts, motion, video, and finishing workflows, model testing and prototype media.",
        status: "live",
        badge: "NEW",
        output_type: "video",
        edits: [{
            action: "reference",
            accepts: "video",
            slot: "videos",
            seed: {
                mode: "omni"
            }
        }],
        display_order: 18,
        intent: "prompt",
        handoff: {
            text: {
                field: "prompt",
                role: "a description of the video",
                mentions: !0
            },
            inputs: [{
                slot: "images",
                accepts: ["image"],
                max: 10,
                role: "reference images"
            }, {
                slot: "videos",
                accepts: ["video"],
                max: 5,
                role: "reference videos"
            }, {
                slot: "audio",
                accepts: ["audio"],
                max: 5,
                role: "reference audio"
            }]
        }
    };
    e.s(["meta", 0, oS], 964671);
    let oE = {
        id: "world-cup-2026",
        name: "World Cup 2026 Video",
        tagline: "Star in your own football broadcast",
        icon: {
            src: e.i(683343).default,
            width: 128,
            height: 128,
            blurWidth: 8,
            blurHeight: 8,
            blurDataURL: "data:image/webp;base64,UklGRi4BAABXRUJQVlA4TCIBAAAvB8ABAM1VICICHgiADQIAAIC/3ekv1RNElwQIAQAAABQAAAAAAAAAAAAAAAAAACCAAB7nQRCqVYQHAADwQABwEAEAAM7/BGEGEKAAARIQEIW0AAYAUCACAAGABAAEAQgQktBAAgQEAtI/EHIKYx4IAA4iAADA+d+SM1WGEi0SAQAAAAAAAAAAAAAAAAAAAAAABAAEAAh4GGsQ1Kx13oqL7LeNKmaa0LT2AA4j2nhFFVVMABTJB1OPVg9pY8W41R0B+AvDBdRwYmV+PZ6E+/O6OLiamtn56+ksxlXRSDpxd1yunV6yyYQ4BxLnouJOLk9y3HVpy+pg18un1DKjVi++fyZCU+wd+2Hb7vuQ/0L8UPgmiREkq/P8+uwdMP17kCyQAA=="
        },
        thumbnail: {
            src: e.i(852328).default,
            width: 1280,
            height: 800,
            blurWidth: 8,
            blurHeight: 5,
            blurDataURL: "data:image/webp;base64,UklGRuAAAABXRUJQVlA4TNQAAAAvBwABAM1VICICHghACgMAAADRv+WHMQBjAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAEhioMd77pgMAAPBAgE0AAAAAzv9tBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBEPEHvPg8EmAgCAADg/FfdHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuOfVVuTDh7YOfNQYYxiHf+6EVwsYwqcGWUkCFd4uhyG0vMXOlnVmpUpYmERunl9cf3cfwetxr5BMPrjPyO58VdnKBQ=="
        }.src,
        hero: {
            url: "https://cdn.pika.art/v2/creation/app-heroes/world-cup-2026.mp4",
            media_type: "video"
        },
        aliases: ["soccer", "Kling"],
        categories: ["featured", "templates"],
        professions: ["agency", "video-editor", "marketer", "creator", "for-fun"],
        nav_tags: ["video-tools", "templates", "use-cases", "all-apps"],
        best_for: "World Cup 2026 Video is best for campaign and launch assets, client-ready creative concepts, motion, video, and finishing workflows.",
        status: "live",
        hidden: !0,
        output_type: "video",
        display_order: 210,
        handoff: {
            text: null,
            inputs: [{
                slot: "source",
                accepts: ["image"],
                max: 1,
                role: "a photo of the fan",
                required: !0
            }]
        }
    };
    e.s(["meta", 0, oE], 917319);
    let oP = [{
            slug: "ad-localization",
            meta: o
        }, {
            slug: "add-elements",
            meta: s
        }, {
            slug: "anime-world-cup-2026",
            meta: l
        }, {
            slug: "camera-director",
            meta: d
        }, {
            slug: "change-voice",
            meta: u
        }, {
            slug: "character-creator",
            meta: c
        }, {
            slug: "cinematic-camera",
            meta: m
        }, {
            slug: "color-grading",
            meta: aI
        }, {
            slug: "create-audio",
            meta: a_
        }, {
            slug: "create-environment",
            meta: ax
        }, {
            slug: "create-image",
            meta: aB
        }, {
            slug: "create-sfx",
            meta: aS
        }, {
            slug: "create-speech",
            meta: aE
        }, {
            slug: "create-style",
            meta: aP
        }, {
            slug: "create-video",
            meta: aO
        }, {
            slug: "dynamic-captions",
            meta: aN
        }, {
            slug: "edit-image",
            meta: aJ
        }, {
            slug: "edit-video",
            meta: aF
        }, {
            slug: "eleven-multilingual",
            meta: aG
        }, {
            slug: "eleven-sfx",
            meta: aW
        }, {
            slug: "eleven-turbo",
            meta: aX
        }, {
            slug: "extend-video",
            meta: aK
        }, {
            slug: "flux-3",
            meta: aq
        }, {
            slug: "freaky-hair-makeover",
            meta: aY
        }, {
            slug: "google-omni",
            meta: a0
        }, {
            slug: "gpt-image-2",
            meta: a1
        }, {
            slug: "grok-imagine-1-5",
            meta: a2
        }, {
            slug: "grok-imagine-image",
            meta: a3
        }, {
            slug: "grok-imagine-video",
            meta: a7
        }, {
            slug: "hailuo-2-3",
            meta: a9
        }, {
            slug: "hailuo-2-3-fast",
            meta: ne
        }, {
            slug: "hailuo-2-3-i2v",
            meta: nt
        }, {
            slug: "headshot",
            meta: ni
        }, {
            slug: "ideogram",
            meta: na
        }, {
            slug: "image-editor",
            meta: no
        }, {
            slug: "inpaint",
            meta: ns
        }, {
            slug: "kling-4",
            meta: nl
        }, {
            slug: "language-swap",
            meta: nd
        }, {
            slug: "lipsync-studio",
            meta: nu
        }, {
            slug: "minimax-h3",
            meta: nc
        }, {
            slug: "minimax-music-3-0",
            meta: nm
        }, {
            slug: "minimax-speech-hd",
            meta: ng
        }, {
            slug: "minimax-speech-turbo",
            meta: np
        }, {
            slug: "motion-transfer",
            meta: nf
        }, {
            slug: "multi-shot-video",
            meta: nv
        }, {
            slug: "nano-banana",
            meta: n$
        }, {
            slug: "pika-2-5",
            meta: nI
        }, {
            slug: "pika-2-5-i2v",
            meta: ny
        }, {
            slug: "pika-2-5-keyframe",
            meta: n_
        }, {
            slug: "pika-dejavu",
            meta: nk
        }, {
            slug: "pika-h3-flex",
            meta: nw
        }, {
            slug: "pika-music",
            meta: nC
        }, {
            slug: "pika-sfx",
            meta: nE
        }, {
            slug: "pika-soundtrack",
            meta: nN
        }, {
            slug: "pika-speech",
            meta: nZ
        }, {
            slug: "pikadditions",
            meta: nL
        }, {
            slug: "pikaffects",
            meta: nQ
        }, {
            slug: "pikaperformance",
            meta: nz
        }, {
            slug: "pikaswap",
            meta: nj
        }, {
            slug: "podcast-creator",
            meta: nV
        }, {
            slug: "product-ad",
            meta: nM
        }, {
            slug: "product-shot",
            meta: nH
        }, {
            slug: "recraft",
            meta: nJ
        }, {
            slug: "relight-media",
            meta: n6
        }, {
            slug: "resize-images",
            meta: n8
        }, {
            slug: "seed-audio",
            meta: n5
        }, {
            slug: "seedance-2",
            meta: n3
        }, {
            slug: "seedance-2-5",
            meta: n7
        }, {
            slug: "seedance-2-mini",
            meta: n9
        }, {
            slug: "seedream",
            meta: oi
        }, {
            slug: "seedream-5",
            meta: oa
        }, {
            slug: "short-film",
            meta: on
        }, {
            slug: "smart-resize",
            meta: oo
        }, {
            slug: "swap-anything",
            meta: os
        }, {
            slug: "talking-head-studio",
            meta: ou
        }, {
            slug: "time-tourist",
            meta: oc
        }, {
            slug: "time-travel-vlog",
            meta: om
        }, {
            slug: "upscale",
            meta: ob
        }, {
            slug: "veo-3-1",
            meta: o$
        }, {
            slug: "veo-3-fast",
            meta: oI
        }, {
            slug: "veo-3-i2v",
            meta: oy
        }, {
            slug: "video-studio",
            meta: ok
        }, {
            slug: "video-trim",
            meta: oU
        }, {
            slug: "voice-isolation",
            meta: oC
        }, {
            slug: "voiceover",
            meta: oB
        }, {
            slug: "wan-3",
            meta: oS
        }, {
            slug: "world-cup-2026",
            meta: oE
        }].map(({
            meta: e
        }) => e).sort(r.byCatalogOrder),
        oO = new Map(oP.map(e => [e.id, e]));

    function oN(e, t = e.id, i = {}) {
        return { ...e,
            ...i,
            id: e.id,
            catalogKey: t
        }
    }
    e.s(["APPS", 0, oP, "buildCatalogApps", 0, function(e) {
        return e.flatMap(e => "upscale" === e.id ? [oN(e, "upscale:image", {
            entryMode: "image",
            name: `${e.name} Image`,
            hero: null,
            nav_tags: ["image-tools", "all-apps"],
            output_type: "image",
            display_order: e.display_order
        }), oN(e, "upscale:video", {
            entryMode: "video",
            name: `${e.name} Video`,
            nav_tags: ["video-tools", "all-apps"],
            output_type: "video",
            display_order: e.display_order + 1
        })] : [oN(e)]).sort(r.byCatalogOrder)
    }, "catalogAppKey", 0, function(e) {
        return e.catalogKey ? ? e.id
    }, "catalogEntryMode", 0, function(e) {
        return e.entryMode
    }, "findApp", 0, function(e) {
        return e ? oO.get((0, A.canonicalAppId)(e)) : void 0
    }, "isAppSlug", 0, function(e) {
        return oO.has(e)
    }], 336506)
}, 202396, 285164, e => {
    "use strict";
    e.i(866998);
    let t = {
            "pika-flex": "pika-h3-flex",
            "video-editor": "video-studio",
            "camera-control-video": "cinematic-camera",
            "create-music": "create-audio",
            "create-voice": "create-speech",
            "edit-video": "create-video",
            "expand-video": "extend-video",
            "grok-imagine": "grok-imagine-image",
            "image-expand": "edit-image",
            "image-upscale": "upscale",
            "upscale-video": "upscale",
            "kling-3-motion": "motion-transfer",
            "kling-3": "kling-4",
            "minimax-music-2-6": "minimax-music-3-0",
            "nano-banana-edit": "nano-banana",
            "nano-banana-pro-edit": "nano-banana",
            "nano-banana-2": "nano-banana",
            "nano-banana-flash": "nano-banana",
            "nano-banana-pro": "nano-banana",
            "pika-2-5-i2v": "pika-2-5",
            "reframe-footage": "smart-resize",
            "resize-images": "smart-resize",
            "reskin-video": "swap-anything",
            "trend-duplicator": "pika-dejavu"
        },
        i = {
            "image-editor": "create-image",
            "video-studio": "create-video"
        };
    e.s(["FOLDED_INTO", 0, t, "entryAppId", 0, function(e, t) {
        let A = Object.keys(i).filter(t => i[t] === e).find(e => "render" === t(e));
        if (void 0 !== A) return A;
        if ("not_found" !== t(e)) return e;
        if ("not_found" !== t(e)) return null;
        let r = Object.hasOwn(i, e) ? i[e] : void 0;
        return void 0 === r || "not_found" === t(r) ? null : r
    }], 285164);
    let A = new Map;
    for (let [e, i] of Object.entries(t)) A.set(i, [...A.get(i) ? ? [], e]);
    e.s(["canonicalAppId", 0, function(e) {
        return t[e] ? ? e
    }, "withFoldedAliases", 0, function(e) {
        let t = new Set;
        for (let i of e)
            for (let e of (t.add(i), A.get(i) ? ? [])) t.add(e);
        return [...t]
    }], 202396)
}, 752192, 709620, e => {
    "use strict";
    e.i(896379), e.s(["EDIT_ACTIONS", 0, {
        animate: {
            label: "Animate this",
            hint: "Turn this still into a moving clip",
            icon: "play-square"
        },
        "edit-image": {
            label: "Edit Image",
            hint: "Tweak, restyle, or remix",
            icon: "pen-sparkle"
        },
        "replace-background": {
            label: "Replace Background",
            hint: "Send your subject anywhere",
            icon: "replace"
        },
        "swap-subject": {
            label: "Character Swap",
            hint: "Drop a new character into a scene",
            icon: "users-round"
        },
        upscale: {
            label: "Upscale",
            hint: "Enhance video resolution fast",
            icon: "arrow-up-square"
        },
        expand: {
            label: "Expand",
            hint: "Push a photo past its own edges",
            icon: "expand"
        },
        "add-element": {
            label: "Add element",
            hint: "Put something new in the shot",
            icon: "square-plus"
        },
        "lip-sync": {
            label: "Lip sync",
            hint: "Match the mouth to a voice",
            icon: "speech"
        },
        relight: {
            label: "Relight",
            hint: "Change the time of day or the mood",
            icon: "sun"
        },
        extend: {
            label: "Extend",
            hint: "Carry the shot on for longer",
            icon: "plus"
        },
        "change-camera": {
            label: "Change Camera",
            hint: "Reshoot the same take from another angle",
            icon: "camera"
        },
        trim: {
            label: "Trim",
            hint: "Cut the clip down to the span you want",
            icon: "scissors"
        },
        soundtrack: {
            label: "Soundtrack",
            hint: "Score it with music and foley to picture",
            icon: "speaker-wave"
        },
        "apply-effect": {
            label: "Apply an effect",
            hint: "Run a Pikaffect on it",
            icon: "zap"
        },
        reference: {
            label: "Use as reference",
            hint: "Bring this clip into a new shot",
            icon: "layers"
        }
    }], 709620), e.s(["NAV_TAGS", 0, ["pika", "video-tools", "image-tools", "audio", "templates", "models", "use-cases", "all-apps"], "NAV_TAG_LABELS", 0, {
        pika: "Pika",
        "video-tools": "Video",
        "image-tools": "Image",
        audio: "Audio",
        templates: "Templates",
        models: "Models",
        "use-cases": "Use Cases",
        "all-apps": "All Apps"
    }, "appListDescription", 0, function(e) {
        return e.short_description || e.tagline
    }, "byCatalogOrder", 0, function(e, t) {
        return e.display_order - t.display_order || e.id.localeCompare(t.id)
    }, "outputKinds", 0, function(e) {
        return "string" == typeof e.output_type ? [e.output_type] : e.output_type
    }], 752192)
}]);