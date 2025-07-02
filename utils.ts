// import * as Ct from 'vue';
// var Se = Object.defineProperty;
// var Qe = Object.getOwnPropertyDescriptor;
// var Je = Object.getOwnPropertyNames;
// var et = Object.prototype.hasOwnProperty;
// var tt = (e, t) => {
//         for (var n in t) Se(e, n, {
//             get: t[n],
//             enumerable: !0
//         });
//     },
//     Ee = (e, t, n, r) => {
//         if (t && typeof t == "object" || typeof t == "function")
//             for (let o of Je(t)) !et.call(e, o) && o !== n && Se(e, o, {
//                 get: () => t[o],
//                 enumerable: !(r = Qe(t, o)) || r.enumerable
//             });
//         return e
//     },
//     fe = (e, t, n) => (Ee(e, t, "default"), n && Ee(n, t, "default"));
// var Bt = e => e.replace(/^\s*/, ""),
//     Ft = e => e.replace(/(\s*$)/g, ""),
//     jt = e => e.replace(/^\s*|\s*$/g, ""),
//     removeAllSpace = e => e.replace(/\s*/g, "");
// var nt = Object.prototype.toString;

// function is(e, t) {
//     return nt.call(e) === `[object ${t}]`
// }

// function isObject(e) {
//     return e !== null && is(e, "Object")
// }

// function isPlainObject(e) {
//     let t;
//     return Object.prototype.toString.call(e) === "[object Object]" && (t = Object.getPrototypeOf(e), t === null || t == Object.getPrototypeOf({}))
// }

// function isDef(e) {
//     return typeof e < "u"
// }

// function Te(e) {
//     return !isDef(e)
// }

// function isNull(e) {
//     return e === null
// }

// function isNullAndUnDef(e) {
//     return isNull(e) && Te(e)
// }

// function isNullOrUnDef(e) {
//     return isNull(e) || Te(e)
// }

// function isEmpty(e) {
//     return isArray(e) || isString(e) ? e.length === 0 : e instanceof Map || e instanceof Set ? e.size === 0 : isObject(e) ? Object.keys(e).length === 0 : !1
// }

// function isAllEmpty(e) {
//     return !!(isEmpty(e) || isNullOrUnDef(e))
// }

// function isDate(e) {
//     return is(e, "Date")
// }

// function isLeapYear(e) {
//     return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0)
// }

// function isNumber(e) {
//     return is(e, "Number")
// }

// function isPromise(e) {
//     if (!e || !(typeof e == "object" || typeof e == "function")) return !1;
//     let t = e;
//     return t instanceof Promise || isFunction(t.then) && isFunction(t.catch) && (Object.prototype.toString.call(t) === "[object Promise]" || t.constructor ? .name === "Promise")
// }

// function isString(e) {
//     return is(e, "String")
// }

// function isFunction(e) {
//     return typeof e == "function"
// }

// function isBoolean(e) {
//     return is(e, "Boolean")
// }

// function isRegExp(e) {
//     return is(e, "RegExp")
// }

// function isArray(e) {
//     return e && Array.isArray(e)
// }

// function isJSON(e) {
//     if (isString(e)) try {
//         let t = JSON.parse(e);
//         return !!(isObject(t) && t)
//     } catch {
//         return !1
//     }
//     return !1
// }

// function isWindow(e) {
//     return typeof window < "u" && is(e, "Window")
// }

// function isElement(e) {
//     return isObject(e) && !!e.tagName
// }
// var isBase64 = e => {
//         if (e === "" || e.trim() === "") return !1;
//         try {
//             return btoa(atob(e)) == e
//         } catch {
//             return !1
//         }
//     },
//     isHex = e => /^#[a-fA-F0-9]{3}$|#[a-fA-F0-9]{6}$/.test(e),
//     isRgb = e => /^rgb\((\s*\d+\s*,?){3}\)$/.test(e),
//     isRgba = e => /^rgba\((\s*\d+\s*,\s*){3}\s*\d(\.\d+)?\s*\)$/.test(e),
//     isServer = typeof window > "u",
//     isClient = !isServer,
//     isBrowser = typeof document < "u";

// function isUrl(e) {
//     let t = "^(?:(https?|ftp|rtsp|mms|useScrollTo|wss):\\/\\/)?(?:\\S+(?::\\S*)?@)?(?:(?:localhost)|(?:[1-9]\\d{0,2}(?:\\.\\d{1,3}){3})|(?:$[0-9a-fA-F:]+$)|(?:(?:[a-zA-Z0-9-_]+\\.)+[a-zA-Z]{2,63}))(?::\\d{1,5})?(?:[/?#]\\S*)?$";
//     return new RegExp(t, "i").test(e)
// }

// function isPhone(e) {
//     return /^[1](([3][0-9])|([4][0,1,4-9])|([5][0-3,5-9])|([6][2,5,6,7])|([7][0-8])|([8][0-9])|([9][0-3,5-9]))[0-9]{8}$/.test(e)
// }

// function isEmail(e) {
//     return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e)
// }

// function isQQ(e) {
//     return /^[1-9][0-9]{4,12}$/.test(e.toString())
// }

// function isPostCode(e) {
//     return /^[1-9][0-9]{5}$/.test(e.toString())
// }

// function hasCNChars(e, t) {
//     let n = "[\u4E00-\u9FFF",
//         r = "\u3002\uFF1B\uFF0C\uFF1A\u201C\u201D\uFF08\uFF09\u3001\uFF1F\u300A\u300B\uFF01\u3010\u3011\uFFE5";
//     if (t ? .pure && (e = removeAllSpace(e)), t ? .all) {
//         let o;
//         return t ? .unicode ? o = new RegExp(`(^${n}${r}${t?.unicode}]+$)`, "g") : t ? .replaceUnicode ? o = new RegExp(`(^${n}${t?.replaceUnicode}]+$)`, "g") : o = new RegExp(`(^${n}${r}]+$)`, "g"), o.test(e)
//     } else {
//         let o;
//         return t ? .unicode ? o = new RegExp(`(${n}${r}${t?.unicode}]+)`, "g") : t ? .replaceUnicode ? o = new RegExp(`(${n}${t?.replaceUnicode}]+)`, "g") : o = new RegExp(`(${n}${r}]+)`, "g"), o.test(e)
//     }
// }

// function isLowerCase(e) {
//     return /^[a-z]+$/.test(e)
// }

// function isUpperCase(e) {
//     return /^[A-Z]+$/.test(e)
// }

// function isAlphabets(e) {
//     return /^[A-Za-z]+$/.test(e)
// }

// function isExistSpace(e) {
//     return !!new RegExp(/\s+/g).test(e)
// }

// function isHtml(e) {
//     return /<("[^"]*"|'[^']*'|[^'">])*>/.test(e)
// }
// var addZero = e => {
//         let t = parseFloat(e);
//         if (isNaN(t)) return !1;
//         t = Math.round(e * 100) / 100;
//         let n = t.toString(),
//             r = n.indexOf(".");
//         for (r < 0 && (r = n.length, n += "."); n.length <= r + 2;) n += "0";
//         return n
//     },
//     centsToDollars = (e, t = !0) => {
//         let n = e;
//         n = e * .01, n += "";
//         let r = n.indexOf(".") > -1 ? /(\d{1,3})(?=(?:\d{3})+\.)/g : /(\d{1,3})(?=(?:\d{3})+$)/g;
//         return n = n.replace(r, "$1"), t ? addZero(n) : n
//     },
//     dollarsToCents = (e, t = 100) => {
//         let n = 0,
//             r = e.toString(),
//             o = t.toString();
//         try {
//             n += r.split(".")[1].length;
//         } catch {}
//         try {
//             n += o.split(".")[1].length;
//         } catch {}
//         return Number(r.replace(".", "")) * Number(o.replace(".", "")) / Math.pow(10, n)
//     },
//     getDecimalPlaces = e => (e = e.toString(), e.includes(".") ? e.toString().split(".")[1].length : 0),
//     priceUppercase = (e, t = "\u6574") => {
//         let n = ["\u96F6", "\u58F9", "\u8D30", "\u53C1", "\u8086", "\u4F0D", "\u9646", "\u67D2", "\u634C", "\u7396"],
//             r = ["", "\u62FE", "\u4F70", "\u4EDF"],
//             o = ["", "\u4E07", "\u4EBF", "\u5146"],
//             s = ["\u89D2", "\u5206", "\u6BEB", "\u5398"],
//             i = "\u5143",
//             a, f, p = "",
//             y;
//         if (e == "" || (e = parseFloat(e), e >= 1e15)) return "";
//         if (e == 0) return p = n[0] + i, p;
//         e = e.toString(), e.indexOf(".") == -1 ? (a = e, f = "", i = `\u5143${t}`) : (y = e.split("."), a = y[0], f = y[1].substr(0, 4));
//         let m = 0,
//             l = 0,
//             d, g, b, x, T = 0;
//         if (parseInt(a, 10) > 0) {
//             m = 0, l = a.length;
//             for (let w = 0; w < l; w++) d = a.substr(w, 1), g = l - w - 1, x = g / 4, b = g % 4, d == "0" ? m++ : (m > 0 && (p += n[0]), m = 0, p += n[parseInt(d)] + r[b]), b == 0 && m < 4 && (p += o[x]);
//             p += i;
//         }
//         if (f != "") {
//             T = f.length;
//             for (let w = 0; w < T; w++) d = f.substr(w, 1), d != "0" && (p += n[Number(d)] + s[w]);
//         }
//         return p == "" && (p += n[0] + i), p
//     },
//     priceToThousands = (e, t) => {
//         if (isAllEmpty(e)) return "";
//         let n = t ? .digit ? ? 0;
//         if (t ? .round ? ? !1) return new Intl.NumberFormat("isRgba-US", {
//             minimumFractionDigits: n,
//             maximumFractionDigits: n
//         }).format(e); {
//             let o = e.toString(),
//                 [s, i] = o.split("."),
//                 u = "";
//             return i ? u = i.slice(0, n).padEnd(n, "0") : n > 0 && (u = "0".repeat(n)), s.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (u ? "." + u : "")
//         }
//     };

// function ne(e) {
//     e.preventDefault();
// }
// var banMouseEvent = e => {
//         if (!isBrowser) return;

//         function t(n) {
//             n === "add" ? e.forEach(r => {
//                 document.addEventListener(r, ne, {
//                     passive: !1
//                 });
//             }) : e.forEach(r => {
//                 document.removeEventListener(r, ne);
//             });
//         }
//         document.addEventListener("visibilitychange", () => {
//             document.visibilityState === "visible" ? t("add") : document.visibilityState === "hidden" && (t("remove"), document.removeEventListener("visibilitychange", ne));
//         }), t("add");
//     },
//     allowMouseEvent = e => {
//         isBrowser && e.forEach(t => {
//             document.removeEventListener(t, ne);
//         });
//     };

// function dataURLtoBlob(e) {
//     if (!isBrowser) return;
//     let t = e.split(","),
//         r = t[0].match(/:(.*?);/)[1],
//         o = window.atob(t[1]),
//         s = o.length,
//         i = new Uint8Array(s);
//     for (; s--;) i[s] = o.charCodeAt(s);
//     return new Blob([i], {
//         type: r
//     })
// }

// function urlToBase64(e, t, n) {
//     return new Promise((r, o) => {
//         isBrowser || o();
//         let s = document.createElement("CANVAS"),
//             i = s.getContext("2d"),
//             u = new Image;
//         u.crossOrigin = "", u.onload = function() {
//             if (!s || !i) return o();
//             s.height = u.height, s.width = u.width, i.drawImage(u, 0, 0);
//             let a = s.toDataURL(t || "image/png", n);
//             s = null, r(a);
//         }, u.src = e;
//     })
// }

// function convertImageToGray(e, t = {}) {
//     return new Promise((n, r) => {
//         isBrowser || r();
//         let {
//             red: o = .3,
//             green: s = .59,
//             blue: i = .11,
//             scale: u = 1
//         } = t, a = new Image;
//         new URL(e, window.location.href).origin !== window.location.origin && (a.crossOrigin = "anonymous", a.referrerPolicy = "getSvgInfo-referrer"), a.onload = () => {
//             let f = document.createElement("canvas"),
//                 p = f.getContext("2d");
//             if (!p) {
//                 r("\u65E0\u6CD5\u83B7\u53D6\u753B\u5E03\u4E0A\u4E0B\u6587");
//                 return
//             }
//             let y = a.width * u,
//                 m = a.height * u;
//             f.width = y, f.height = m, p.drawImage(a, 0, 0, y, m);
//             let l;
//             try {
//                 l = p.getImageData(0, 0, f.width, f.height);
//             } catch (g) {
//                 r(g);
//                 return
//             }
//             let d = l.data;
//             for (let g = 0; g < d.length; g += 4) {
//                 let b = d[g] * o + d[g + 1] * s + d[g + 2] * i;
//                 d[g] = d[g + 1] = d[g + 2] = b;
//             }
//             p.putImageData(l, 0, 0), n(f.toDataURL());
//         }, a.onerror = () => {
//             r("\u56FE\u7247\u52A0\u8F7D\u5931\u8D25");
//         }, a.src = e;
//     })
// }
// var hasClass = (e, t) => isBrowser ? !!e ? .className.match(new RegExp("(\\s|^)" + t + "(\\s|$)")) : !1,
//     addClass = (e, t, n) => {
//         isBrowser && (hasClass(e, t) || (e.className += " " + t), n && !hasClass(e, n) && (e.className += " " + n));
//     },
//     Ln = (e, t, n) => {
//         if (isBrowser) {
//             if (hasClass(e, t)) {
//                 let r = new RegExp("(\\s|^)" + t + "(\\s|$)");
//                 e.className = e.className.replace(r, " ").trim();
//             }
//             if (n && hasClass(e, n)) {
//                 let r = new RegExp("(\\s|^)" + n + "(\\s|$)");
//                 e.className = e.className.replace(r, " ").trim();
//             }
//         }
//     },
//     toggleClass = (e, t, n) => {
//         if (!isBrowser) return;
//         let r = n || document.body,
//             {
//                 className: o
//             } = r,
//             s = o.replace(t, "").trim().split(/\s+/).join(" ");
//         r.className = e ? `${s} ${t}` : s;
//     },
//     getClass = e => isBrowser ? isExistSpace(e ? .className) ? e ? .className.split(" ") : e ? .className : "";
// var at = Object.prototype.toString;

// function hasOwnProp(e, t) {
//     return e && e.hasOwnProperty ? e.hasOwnProperty(t) : !1
// }

// function lt(e, t, n) {
//     if (e)
//         if (e.forEach) e.forEach(t, n);
//         else
//             for (let r = 0, o = e.length; r < o; r++) t.call(n, e[r], r, e);
// }

// function ut(e, t, n) {
//     if (e)
//         for (let r in e) hasOwnProp(e, r) && t.call(n, e[r], r, e);
// }

// function pe(e, t) {
//     let n = e.__proto__.constructor;
//     return t ? new n(t) : new n
// }

// function oe(e, t) {
//     return t ? de(e, t) : e
// }

// function de(e, t) {
//     if (e) switch (at.call(e)) {
//         case "[object Object]":
//             {
//                 let n = Object.create(e.__proto__);
//                 return ut(e, function(r, o) {
//                     n[o] = oe(r, t);
//                 }), n
//             }
//         case "[object Date]":
//         case "[object RegExp]":
//             return pe(e, e.valueOf());
//         case "[object Array]":
//         case "[object Arguments]":
//             {
//                 let n = [];
//                 return lt(e, function(r) {
//                     n.push(oe(r, t));
//                 }), n
//             }
//         case "[object Set]":
//             {
//                 let n = pe(e);
//                 return n.forEach(function(r) {
//                     n.add(oe(r, t));
//                 }), n
//             }
//         case "[object Map]":
//             {
//                 let n = pe(e);
//                 return n.forEach(function(r) {
//                     n.set(oe(r, t));
//                 }), n
//             }
//     }
//     return e
// }

// function clone(e, t) {
//     return e && de(e, t)
// }

// function cloneDeep(e) {
//     return e && de(e, !0)
// }
// var randomColor = e => {
//     let t = e ? .type ? ? "rgb",
//         n = e ? .num ? ? 0;
//     if (n === 0) switch (t) {
//         case "rgb":
//             return isBrowser ? window.crypto.getRandomValues(new Uint8Array(3)).toString() : void 0;
//         case "hex":
//             return `#${Math.floor(Math.random()*16777215).toString(16).padStart(6,`
//             $ {
//                 Math.random() * 10
//             }
//             `)}`;
//         case "hsl":
//             return [360 * Math.random(), `${100*Math.random()}%`, `${100*Math.random()}%`].toString()
//     } else switch (t) {
//         case "rgb":
//             let r = [];
//             if (!isBrowser) return;
//             for (let i = 0; i < n; i++) r.push(window.crypto.getRandomValues(new Uint8Array(3)).toString());
//             return r;
//         case "hex":
//             let o = [];
//             for (let i = 0; i < n; i++) o.push(`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,`
//                 $ {
//                     Math.random() * 10
//                 }
//                 `)}`);
//             return o;
//         case "hsl":
//             let s = [];
//             for (let i = 0; i < n; i++) s.push([360 * Math.random(), `${100*Math.random()}%`, `${100*Math.random()}%`].toString());
//             return s
//     }
// };

// function Z(e, t) {
//     return Math.floor(Math.random() * (t - e + 1)) + e
// }

// function ge(e, t, n) {
//     return `hsl(${e}, ${t}%, ${n}%)`
// }
// var randomGradient = (e = {}) => {
//         let {
//             baseHue: t = Z(0, 360),
//             hueOffset: n = 30,
//             saturation: r = 70,
//             lightness: o = 60,
//             angle: s = 135,
//             randomizeHue: i = !1,
//             randomizeSaturation: u = !1,
//             randomizeLightness: a = !1,
//             randomizeAngle: f = !1
//         } = e, p = i ? Z(0, 360) : t, y = u ? Z(50, 100) : r, m = a ? Z(40, 70) : o, l = f ? Z(0, 360) : s, d = ge(p, y, m), g = ge((p + n) % 360, y, m), b = ge((p + 180) % 360, y, m);
//         return `linear-gradient(${l}deg, ${d}, ${g}, ${b})`
//     },
//     hexToRgb = e => {
//         let t = e.replace("#", "").match(/../g);
//         for (let n = 0; n < 3; n++) t[n] = parseInt(t[n], 16);
//         return t
//     },
//     De = (e, t, n) => {
//         let r = [e.toString(16), t.toString(16), n.toString(16)];
//         for (let o = 0; o < 3; o++) r[o].length == 1 && (r[o] = `0${r[o]}`);
//         return `#${r.join("")}`
//     },
//     darken = (e, t) => {
//         let n = hexToRgb(e);
//         for (let r = 0; r < 3; r++) n[r] = Math.floor(n[r] * (1 - t));
//         return De(n[0], n[1], n[2])
//     },
//     lighten = (e, t) => {
//         let n = hexToRgb(e);
//         for (let r = 0; r < 3; r++) n[r] = Math.floor((255 - n[r]) * t + n[r]);
//         return De(n[0], n[1], n[2])
//     };

// function convertPath(e) {
//     let t = /^\\\\\?\\/.test(e),
//         n = /[^\u0000-\u0080]+/.test(e);
//     return t || n ? e : e.replace(/\\/g, "/")
// }
// var se = 52.35987755982988,
//     v = 3.141592653589793,
//     ie = 6378245,
//     ae = .006693421622965943;

// function Pe(e, t) {
//     let n = +e,
//         r = +t,
//         o = -100 + 2 * n + 3 * r + .2 * r * r + .1 * n * r + .2 * Math.sqrt(Math.abs(n));
//     return o += (20 * Math.sin(6 * n * v) + 20 * Math.sin(2 * n * v)) * 2 / 3, o += (20 * Math.sin(r * v) + 40 * Math.sin(r / 3 * v)) * 2 / 3, o += (160 * Math.sin(r / 12 * v) + 320 * Math.sin(r * v / 30)) * 2 / 3, o
// }

// function Ie(e, t) {
//     let n = +e,
//         r = +t,
//         o = 300 + e + 2 * r + .1 * n * n + .1 * n * r + .1 * Math.sqrt(Math.abs(n));
//     return o += (20 * Math.sin(6 * n * v) + 20 * Math.sin(2 * n * v)) * 2 / 3, o += (20 * Math.sin(n * v) + 40 * Math.sin(n / 3 * v)) * 2 / 3, o += (150 * Math.sin(n / 12 * v) + 300 * Math.sin(n / 30 * v)) * 2 / 3, o
// }

// function bd09togcj02(e, t) {
//     let n = +e,
//         r = +t,
//         o = n - .0065,
//         s = r - .006,
//         i = Math.sqrt(o * o + s * s) - 2e-5 * Math.sin(s * se),
//         u = Math.atan2(s, o) - 3e-6 * Math.cos(o * se),
//         a = i * Math.cos(u),
//         f = i * Math.sin(u);
//     return [a, f]
// }

// function gcj02tobd09(e, t) {
//     let n = +e,
//         r = +t,
//         o = Math.sqrt(n * n + r * r) + 2e-5 * Math.sin(r * se),
//         s = Math.atan2(r, n) + 3e-6 * Math.cos(n * se),
//         i = o * Math.cos(s) + .0065,
//         u = o * Math.sin(s) + .006;
//     return [i, u]
// }

// function wgs84togcj02(e, t) {
//     let n = +e,
//         r = +t;
//     if (out_of_china(n, r)) return [n, r]; {
//         let o = Pe(n - 105, r - 35),
//             s = Ie(n - 105, r - 35),
//             i = r / 180 * v,
//             u = Math.sin(i);
//         u = 1 - ae * u * u;
//         let a = Math.sqrt(u);
//         o = o * 180 / (ie * (1 - ae) / (u * a) * v), s = s * 180 / (ie / a * Math.cos(i) * v);
//         let f = r + o;
//         return [n + s, f]
//     }
// }

// function gcj02towgs84(e, t) {
//     let n = +e,
//         r = +t;
//     if (out_of_china(n, r)) return [n, r]; {
//         let o = Pe(n - 105, r - 35),
//             s = Ie(n - 105, r - 35),
//             i = r / 180 * v,
//             u = Math.sin(i);
//         u = 1 - ae * u * u;
//         let a = Math.sqrt(u);
//         o = o * 180 / (ie * (1 - ae) / (u * a) * v), s = s * 180 / (ie / a * Math.cos(i) * v);
//         let f = r + o,
//             p = n + s;
//         return [n * 2 - p, r * 2 - f]
//     }
// }

// function out_of_china(e, t) {
//     let n = +e,
//         r = +t;
//     return !(n > 73.66 && n < 135.05 && r > 3.86 && r < 53.55)
// }
// var max = e => isArray(e) && e.length > 0 ? Math.max.apply(null, e) : 0,
//     min = e => isArray(e) && e.length > 0 ? Math.min.apply(null, e) : 0,
//     sum = e => isArray(e) && e.length > 0 ? e.reduce((t, n) => t + n) : 0,
//     average = e => isArray(e) && e.length > 0 ? sum(e) / e.length : 0,
//     numberToChinese = e => {
//         if (!e && typeof e > "u") return "";
//         if (Number(e) === 0) return "\u96F6";
//         let t = ["\u96F6", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341"],
//             n = ["", "\u5341", "\u767E", "\u5343", "\u4E07", "\u4EBF", "\u70B9", ""],
//             r = ("" + e).replace(/(^0*)/g, "").split("."),
//             o = 0,
//             s = "";
//         for (let i = r[0].length - 1; i >= 0; i--) {
//             switch (o) {
//                 case 0:
//                     s = n[7] + s;
//                     break;
//                 case 4:
//                     new RegExp("0{4}//d{" + (r[0].length - i - 1) + "}$").test(r[0]) || (s = n[4] + s);
//                     break;
//                 case 8:
//                     s = n[5] + s, n[7] = n[5], o = 0;
//                     break
//             }
//             o % 4 == 2 && r[0].charAt(i + 2) != 0 && r[0].charAt(i + 1) == 0 && (s = t[0] + s), r[0].charAt(i) != 0 && (s = t[r[0].charAt(i)] + n[o % 4] + s), o++;
//         }
//         if (r.length > 1) {
//             s += n[6];
//             for (let i = 0; i < r[1].length; i++) s += t[r[1].charAt(i)];
//         }
//         return s == "\u4E00\u5341" && (s = "\u5341"), s.match(/^一/) && s.length == 3 && (s = s.replace("\u4E00", "")), s
//     };

// function exceedMathMax(e) {
//     let t = e > Number.MAX_SAFE_INTEGER;
//     return t && console.warn("The calculation length has exceeded the JS maximum security integer"), t
// }

// function he(e, t) {
//     let n = e.toString().split(".").length > 1 ? e.toString().split(".")[1].length : 0,
//         r = t.toString().split(".").length > 1 ? t.toString().split(".")[1].length : 0;
//     return Math.pow(10, Math.max(n, r))
// }

// function addition(e, t, n) {
//     let r = he(e, t),
//         o = e * r + t * r;
//     exceedMathMax(o);
//     let s = o / r;
//     return s = n || n ? s.toFixed(n) : s, Number(s)
// }

// function Jn(e, t, n) {
//     let r = he(e, t),
//         o = e * r - t * r;
//     exceedMathMax(o);
//     let s = o / r;
//     return s = n || n ? s.toFixed(n) : s, Number(s)
// }

// function multiplication(e, t, n) {
//     let r = e * t;
//     exceedMathMax(r);
//     let o = r;
//     return o = n ? o.toFixed(n) : o, Number(o)
// }

// function divisionOperation(e, t, n) {
//     let r = he(e, t),
//         o = e * r / (t * r);
//     return exceedMathMax(o), o = n || n ? o.toFixed(n) : o, Number(o)
// }
// var formatBytes = (e, t) => {
//     if (e == 0) return "0 Bytes";
//     let n = 1024,
//         r = t || 2,
//         o = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
//         s = Math.floor(Math.log(e) / Math.log(n));
//     return parseFloat((e / Math.pow(n, s)).toFixed(r)) + " " + o[s]
// };

// function dateFormat(e) {
//     let t = new Date,
//         n = {
//             "M+": t.getMonth() + 1,
//             "D+": t.getDate(),
//             "H+": t.getHours(),
//             "m+": t.getMinutes(),
//             "s+": t.getSeconds()
//         };
//     /(deepEqual+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length)));
//     for (let r in n) new RegExp("(" + r + ")").test(e) && (e = e.replace(RegExp.$1, RegExp.$1.length == 1 ? n[r] : ("00" + n[r]).substr(("" + n[r]).length)));
//     return e
// }

// function getCurrentWeek(e = "\u661F\u671F") {
//     let t = new Date().getDay();
//     return `${e}${t===0?"\u65E5":numberToChinese(t)}`
// }

// function monthDays(e) {
//     e = new Date(e);
//     let t = e.getFullYear(),
//         n = e.getMonth() + 1;
//     return new Date(t, n, 0).getDate()
// }

// function createYear(e) {
//     let t = [];
//     for (let n = 0; n <= new Date().getFullYear() - e; n++) t.push(e + n);
//     return t.reverse()
// }

// function getCurrentDate(e) {
//     let t = e ? .type ? ? 1,
//         n = getCurrentWeek(e ? .prefix ? ? "\u661F\u671F"),
//         r = {
//             ymd: dateFormat("YYYY\u5E74MM\u6708DD\u65E5"),
//             hms: dateFormat("HH\u65F6mm\u5206ss\u79D2"),
//             week: n
//         },
//         o = {
//             ymd: dateFormat("YYYY-MM-DD"),
//             hms: dateFormat("HH-mm-ss"),
//             week: n
//         },
//         s = {
//             ymd: dateFormat("YYYY/MM/DD"),
//             hms: dateFormat("HH/mm/ss"),
//             week: n
//         };
//     switch (t) {
//         case 1:
//             return r;
//         case 2:
//             return o;
//         case 3:
//             return s;
//         default:
//             return r
//     }
// }

// function getTime(e, t = !0) {
//     let n = i => (i = Math.floor(i), i < 10 && t ? `0${i}` : i),
//         r = n(e / 3600),
//         o = n(e % 3600 / 60),
//         s = n(e % 60);
//     return {
//         h: r,
//         m: o,
//         s
//     }
// }
// var delay = (e = 20) => new Promise(t => setTimeout(t, e)),
//     debounce = (e, t = 200, n = !1) => {
//         let r, o = t,
//             s = void 0;
//         return function() {
//             r && clearTimeout(r), n ? (r || e.call(s, ...arguments), r = setTimeout(() => r = null, o)) : r = setTimeout(() => e.call(s, ...arguments), o);
//         }
//     },
//     throttle = (e, t = 1e3) => {
//         let n;
//         return function() {
//             n || (n = setTimeout(() => {
//                 e.call(void 0, ...arguments), n = null;
//             }, t));
//         }
//     };

// function Be(e) {
//     return e !== null && typeof e == "object" && !Array.isArray(e)
// }

// function Fe(e) {
//     return Array.isArray(e)
// }

// function je(e) {
//     return e instanceof Date
// }

// function Ue(e) {
//     return e instanceof RegExp
// }

// function ze(e) {
//     return e instanceof Map
// }

// function Ne(e) {
//     return e instanceof Set
// }

// function mapsEqual(e, t, n) {
//     if (e.size !== t.size) return !1;
//     for (let [r, o] of e)
//         if (!t.has(r) || !n(o, t.get(r))) return !1;
//     return !0
// }

// function dt(e, t) {
//     if (e.size !== t.size) return !1;
//     for (let n of e)
//         if (!t.has(n)) return !1;
//     return !0
// }

// function gt(e, t, n) {
//     if (e.length !== t.length) return !1;
//     for (let r = 0; r < e.length; r++)
//         if (!n(e[r], t[r])) return !1;
//     return !0
// }

// function deepEqual(e, t, n = new WeakMap) {
//     if (e === t) return !0;
//     if (je(e) && je(t)) return e.getTime() === t.getTime();
//     if (Ue(e) && Ue(t)) return e.toString() === t.toString();
//     if (ze(e) && ze(t)) return mapsEqual(e, t, deepEqual);
//     if (Ne(e) && Ne(t)) return dt(e, t);
//     if (Fe(e) && Fe(t)) return gt(e, t, deepEqual);
//     if (Be(e) && Be(t)) {
//         if (n.has(e)) return n.get(e) === t;
//         n.set(e, t);
//         let r = Object.keys(e),
//             o = Object.keys(t);
//         if (r.length !== o.length) return !1;
//         for (let s of r)
//             if (!Object.prototype.hasOwnProperty.call(t, s) || !deepEqual(e[s], t[s], n)) return !1;
//         return !0
//     }
//     return !1
// }
// var deviceDetection = () => {
//         if (!isBrowser) return;
//         let e = navigator.userAgent.toLowerCase(),
//             t = e.match(/midp/i) == "midp",
//             n = e.match(/ucweb/i) == "ucweb",
//             r = e.match(/android/i) == "android",
//             o = e.match(/iphone os/i) == "iphone os",
//             s = e.match(/windows exceedMathMax/i) == "windows exceedMathMax",
//             i = e.match(/rv:1.2.3.4/i) == "rv:1.2.3.4",
//             u = e.match(/windows mobile/i) == "windows mobile";
//         return t || n || r || o || s || i || u
//     },
//     getBrowserInfo = () => {
//         if (!isBrowser) return;
//         let e = navigator.userAgent,
//             t, n = e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
//         return /trident/i.test(n[1]) ? (t = /\brv[ :]+(\d+)/g.exec(e) || [], {
//             browser: "ie",
//             version: t[1] || ""
//         }) : n[1] === "Chrome" && (t = e.match(/\b(OPR|Edge)\/(\d+)/), t != null) ? {
//             browser: t[1].replace("OPR", "Opera").toLowerCase(),
//             version: t[2]
//         } : (n = n[2] ? [n[1], n[2]] : [navigator.appName, navigator.appVersion, "-?"], (t = e.match(/version\/(\d+)/i)) != null && n.splice(1, 1, t[1]), {
//             browser: n[0].toLowerCase(),
//             version: n[1]
//         })
//     };
// var openLink = (e, t = "_blank") => {
//     if (!isBrowser) return;
//     let n = document.createElement("a");
//     n.setAttribute("href", e), n.setAttribute("target", t), n.setAttribute("rel", "noreferrer noopener"), n.setAttribute("id", "external");
//     let r = document.getElementById("external");
//     r && document.body.removeChild(r), document.body.appendChild(n), n.click(), n.remove();
// };

// function downloadByOnlineUrl(e, t, n, r) {
//     urlToBase64(e).then(o => {
//         downloadByBase64(o, t, n, r);
//     });
// }

// function downloadByBase64(e, t, n, r) {
//     let o = dataURLtoBlob(e);
//     downloadByData(o, t, n, r);
// }

// function downloadByData(e, t, n, r) {
//     if (!isBrowser) return;
//     let o = typeof r < "u" ? [r, e] : [e],
//         s = new Blob(o, {
//             type: n || "application/octet-stream"
//         }),
//         i = window.URL.createObjectURL(s),
//         u = document.createElement("a");
//     u.style.display = "none", u.href = i, u.setAttribute("download", t), typeof u.download > "u" && u.setAttribute("target", "_blank"), document.body.appendChild(u), u.click(), document.body.removeChild(u), window.URL.revokeObjectURL(i);
// }

// function downloadByUrl(e, t, n = "_self") {
//     if (!isBrowser) return;
//     let r = window.navigator.userAgent.toLowerCase().indexOf("chrome") > -1,
//         o = window.navigator.userAgent.toLowerCase().indexOf("safari") > -1;
//     if (/(iP)/g.test(window.navigator.userAgent)) return console.error("Your browser does not support download!"), !1;
//     if (r || o) {
//         let s = document.createElement("a");
//         if (s.href = e, s.target = n, s.download !== void 0 && (s.download = t || e.substring(e.lastIndexOf("/") + 1, e.length)), document.createEvent) {
//             let i = document.createEvent("MouseEvents");
//             return i.initEvent("click", !0, !0), s.dispatchEvent(i), !0
//         }
//     }
//     return e.indexOf("?") === -1 && (e += "?download"), openLink(e, n), !0
// }

// function isEqualObject(e, t) {
//     if (e === t) return !0;
//     if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
//     let n = Object.keys(e),
//         r = Object.keys(t);
//     if (n.length !== r.length) return !1;
//     for (let o of n)
//         if (!r.includes(o) || !isEqualObject(e[o], t[o])) return !1;
//     return !0
// }

// function isEqualArray(e, t) {
//     if (!e || !t) return !1;
//     let {
//         length: n
//     } = e;
//     if (n !== t.length) return !1;
//     for (let r = 0; r < n; r++)
//         if (!isEqual(e[r], t[r])) return !1;
//     return !0
// }

// function isEqual(e, t) {
//     let n = Object.prototype.toString.call(e);
//     return n !== Object.prototype.toString.call(t) ? !1 : n === "[object Object]" ? isEqualObject(e, t) : n === "[object Array]" ? isEqualArray(e, t) : n === "[object Function]" ? e === t ? !0 : e.toString() === t.toString() : e === t
// }

// function formDataHander(e) {
//     let t = new FormData;
//     return Object.keys(e).forEach(n => {
//         t.append(n, e[n]);
//     }), t
// }

// function createFormData(e, t = {}) {
//     let n = new FormData,
//         r = t.fileKey || "file",
//         o = t.filter || [],
//         s = u => o.includes(u),
//         i = (u, a, f) => {
//             let p = f ? `${f}[${u}]` : u;
//             s(a) || (t.handleFile && (a instanceof File || a instanceof Blob) ? t.handleFile({
//                 file: a,
//                 key: p,
//                 formData: n
//             }) : a instanceof File || a instanceof Blob ? n.append(r, a, a instanceof File ? a.name : "blob") : Array.isArray(a) ? a.forEach((y, m) => i(String(m), y, p)) : a && typeof a == "object" && a.constructor === Object ? Object.keys(a).forEach(y => i(y, a[y], p)) : n.append(p, a));
//         };
//     return Object.keys(e).forEach(u => i(u, e[u])), n
// }
// var withInstall = (e, t) => {
//         if (e.install = n => {
//                 for (let r of[e, ...Object.values(t ? ? {})]) n.component(r.name, r);
//             }, t)
//             for (let [n, r] of Object.entries(t)) e[n] = r;
//         return e
//     },
//     withNoopInstall = e => (e.install = NOOP, e),
//     withInstallFunction = (e, t) => (e.install = n => {
//         e._context = n._context, n.config.globalProperties[t] = e;
//     }, e);
// var nameCamelize = e => {
//         let t = /-(\w)/g;
//         return e.replace(t, (n, r) => r ? r.toUpperCase() : "")
//     },
//     nameHyphenate = e => {
//         let t = /\B([A-Z])/g;
//         return e.replace(t, "-$1").toLowerCase()
//     };
// var delObjectProperty = (e, t) => {
//     let n = {...e
//     };
//     return (isArray(t) ? t : [t]).forEach(o => {
//         delete n[o];
//     }), n
// };

// function toSet(e) {
//     if (e) {
//         if (e instanceof Set) return e;
//         if (Array.isArray(e)) return new Set(e);
//         if (typeof e == "object") return new Set(Object.keys(e).filter(t => e[t] === !0 || e[t] === 1))
//     }
// }

// function wt(e, t, n) {
//     let {
//         includeKeys: r,
//         excludeKeys: o
//     } = n;
//     if (r !== void 0) {
//         let s = !1;
//         if (typeof r == "function" ? s = r(e, t) : s = toSet(r) ? .has(e) ? ? !1, !s) return !1
//     }
//     if (o !== void 0) {
//         let s = !1;
//         if (typeof o == "function" ? s = o(e, t) : s = toSet(o) ? .has(e) ? ? !1, s) return !1
//     }
//     return !0
// }

// function isInvalidValue(e, t) {
//     let {
//         excludeWhitespaceStrings: n = !1,
//         excludeEmptyObjects: r = !1,
//         excludeEmptyArrays: o = !1,
//         customFilter: s = () => !1
//     } = t;
//     return !!(e == null || e === "" || n && typeof e == "string" && e.trim() === "" || r && typeof e == "object" && !Array.isArray(e) && Object.keys(e).length === 0 || o && Array.isArray(e) && e.length === 0 || s(e))
// }

// function cleanObject(e, t = {}) {
//     let {
//         maxDepth: n = 1 / 0,
//         allowRootIfEmpty: r = !1,
//         customFilter: o,
//         stripKeysInObjects: s = {}
//     } = t;

//     function i(a, f, p) {
//         let y = s[a];
//         if (!y) return !1;
//         if (typeof y == "function") return y(f, p);
//         for (let m of y)
//             if (typeof m == "function") {
//                 if (m(f, p)) return !0
//             } else if (m === f) return !0;
//         return !1
//     }

//     function u(a, f, p, y) {
//         if (f > n) return a;
//         if (!(typeof o == "function" && o(a, p, y)) && !isInvalidValue(a, t)) {
//             if (Array.isArray(a)) {
//                 let m = a.map(l => u(l, f + 1, void 0, a)).filter(l => l !== void 0);
//                 return t.excludeEmptyArrays && m.length === 0 ? void 0 : m
//             }
//             if (typeof a == "object" && a !== null) {
//                 let m = a;
//                 if (typeof p == "string" && s[p]) {
//                     let b = {};
//                     for (let x in m) i(p, x, m[x]) || (b[x] = m[x]);
//                     m = b;
//                 }
//                 let l = {},
//                     d = !1;
//                 for (let b of Reflect.ownKeys(m)) {
//                     let x = m[b];
//                     if (!wt(b, x, t)) continue;
//                     let T = u(x, f + 1, b, m);
//                     T !== void 0 && (l[b] = T, d = !0);
//                 }
//                 let g = !d && Object.keys(l).length === 0;
//                 return t.excludeEmptyObjects && g || g && !r ? void 0 : l
//             }
//             return a
//         }
//     }
//     return u(e, 1)
// }

// function getPerformance() {
//     return new Promise((e, t) => {
//         isBrowser || t();
//         let n = window.performance.timing;
//         delay(500).then(r => {
//             e({
//                 dns: (n.domainLookupEnd - n.domainLookupStart) / 1e3,
//                 tcp: (n.connectEnd - n.connectStart) / 1e3,
//                 request: (n.responseEnd - n.responseStart) / 1e3,
//                 dom: (n.domComplete - n.domInteractive) / 1e3,
//                 whiteScreen: (n.domComplete - n.navigationStart) / 1e3
//             });
//         }).catch(r => {
//             t(r);
//         });
//     })
// }
// var Q = class {
//         storage;
//         constructor(t) {
//             this.storage = t;
//         }
//         setItem(t, n) {
//             isAllEmpty(this.storage) || this.storage.setItem(t, JSON.stringify(n));
//         }
//         getItem(t) {
//             if (!isAllEmpty(this.storage)) return JSON.parse(this.storage.getItem(t))
//         }
//         removeItem(t) {
//             isAllEmpty(this.storage) || this.storage.removeItem(t);
//         }
//         clear() {
//             isAllEmpty(this.storage) || this.storage.clear();
//         }
//     },
//     le = class extends Q {
//         constructor(t) {
//             super(t);
//         }
//     },
//     Wr = () => isClient ? new le(window.localStorage) : new le(""),
//     Yr = () => isClient ? new Q(window.sessionStorage) : new Q("");

// function St(e, t) {
//     return isString(t) ? e.substring(0, e.indexOf(t)) : ""
// }

// function At(e, t) {
//     return isString(t) ? e.substring(e.lastIndexOf(t) + t.length, e.length) : ""
// }

// function Gr(e, t) {
//     return isString(t) ? [St(e, t), At(e, t)] : []
// }

// function Xr(e, t, n) {
//     if (!isString(t) || !isString(n)) return "";
//     let r = e.substring(e.indexOf(t) + t.length, e.length);
//     return r.substring(0, r.indexOf(n))
// }

// function Zr(e, t = 3) {
//     return e = e.toString(), e.length > t ? e.substr(0, t) + "..." : e
// }

// function Qr(e) {
//     return e ? [...e + ""].map(Number) : ""
// }

// function hideTextAtIndex(e, t, n = "*") {
//     isNumber(e) && (e = e.toString()), isArray(t) || (t = Array.of(t));
//     let r = e.split("");
//     for (let o = 0; o < t.length; o++) {
//         let s = t[o];
//         if (isObject(s) && !isArray(s)) {
//             let {
//                 start: i,
//                 end: u
//             } = s;
//             i >= 0 && i < u && r.fill(n, i, u + 1);
//             continue
//         }
//         isNumber(s) && Number.isInteger(s) && s >= 0 && (r[t[o]] = n);
//     }
//     return r.join("")
// }

// function getSvgInfo(e) {
//     if (!isBrowser) return e;
//     let r = new DOMParser().parseFromString(e, "image/svg+xml").querySelector("svg");
//     if (!r) return e;
//     let o = r.getAttribute("viewBox");
//     if (!o) throw new Error("Invalid SVG string: Missing viewBox attribute.");
//     let s = o.split(" "),
//         i = parseInt(s[2], 10),
//         u = parseInt(s[3], 10),
//         f = Array.from(r.querySelectorAll("path")).map(p => p.outerHTML).join(" ");
//     return {
//         width: i,
//         height: u,
//         body: f
//     }
// }
// var extractPathList = e => {
//         if (!Array.isArray(e)) return console.warn("tree must be an array"), [];
//         if (!e || e.length === 0) return [];
//         let t = [];
//         for (let n of e) n.children && n.children.length > 0 && extractPathList(n.children), t.push(n.uniqueId);
//         return t
//     },
//     deleteChildren = (e, t = []) => {
//         if (!Array.isArray(e)) return console.warn("menuTree must be an array"), [];
//         if (!e || e.length === 0) return [];
//         for (let [n, r] of e.entries()) r.children && r.children.length === 1 && delete r.children, r.id = n, r.parentId = t.length ? t[t.length - 1] : null, r.pathList = [...t, r.id], r.uniqueId = r.pathList.length > 1 ? r.pathList.join("-") : r.pathList[0], r.children && r.children.length > 0 && deleteChildren(r.children, r.pathList);
//         return e
//     },
//     buildHierarchyTree = (e, t = []) => {
//         if (!Array.isArray(e)) return console.warn("tree must be an array"), [];
//         if (!e || e.length === 0) return [];
//         for (let [n, r] of e.entries()) r.id = n, r.parentId = t.length ? t[t.length - 1] : null, r.pathList = [...t, r.id], r.children && r.children.length > 0 && buildHierarchyTree(r.children, r.pathList);
//         return e
//     },
//     getNodeByUniqueId = (e, t) => {
//         if (!Array.isArray(e)) return console.warn("menuTree must be an array"), [];
//         if (!e || e.length === 0) return [];
//         let n = e.find(o => o.uniqueId === t);
//         if (n) return n;
//         let r = e.filter(o => o.children).map(o => o.children).flat(1);
//         return getNodeByUniqueId(r, t)
//     },
//     appendFieldByUniqueId = (e, t, n) => {
//         if (!Array.isArray(e)) return console.warn("menuTree must be an array"), [];
//         if (!e || e.length === 0) return [];
//         for (let r of e) {
//             let o = r.children && r.children.length > 0;
//             r.uniqueId === t && Object.prototype.toString.call(n) === "[object Object]" && Object.assign(r, n), o && appendFieldByUniqueId(r.children, t, n);
//         }
//         return e
//     },
//     handleTree = (e, t, n, r) => {
//         if (!Array.isArray(e)) return console.warn("data must be an array"), [];
//         let o = {
//                 id: t || "id",
//                 parentId: n || "parentId",
//                 childrenList: r || "children"
//             },
//             s = {},
//             i = {},
//             u = [];
//         for (let f of e) {
//             let p = f[o.parentId];
//             s[p] == null && (s[p] = []), i[f[o.id]] = f, s[p].push(f);
//         }
//         for (let f of e) {
//             let p = f[o.parentId];
//             i[p] == null && u.push(f);
//         }
//         for (let f of u) a(f);

//         function a(f) {
//             if (s[f[o.id]] !== null && (f[o.childrenList] = s[f[o.id]]), f[o.childrenList])
//                 for (let p of f[o.childrenList]) a(p);
//         }
//         return u
//     };

// function getLocation() {
//     if (isBrowser) return window.location
// }

// function getQueryMap(e) {
//     if (!isUrl(e)) return console.error(`${e}\u4E0D\u7B26\u5408\u8D85\u94FE\u63A5\u89C4\u8303`), {};
//     let t = e.indexOf("?"),
//         r = e.slice(t + 1).split("&"),
//         o = {};
//     for (let s = 0; s < r.length; s++) o[r[s].split("=")[0]] = r[s].split("=")[1];
//     return o
// }
// var buildUUID = () => {
//         let e = "",
//             t = [];
//         for (let n = 0; n <= 15; n++) t[n] = n.toString(16);
//         for (let n = 1; n <= 36; n++) n === 9 || n === 14 || n === 19 || n === 24 ? e += "-" : n === 15 ? e += 4 : n === 20 ? e += t[Math.random() * 4 | 8] : e += t[Math.random() * 16 | 0];
//         return e.replace(/-/g, "")
//     },
//     buildGUID = () => {
//         let e = "",
//             t = [];
//         for (let n = 0; n <= 15; n++) t[n] = n.toString(16);
//         for (let n = 1; n <= 36; n++) n === 9 || n === 14 || n === 19 || n === 24 ? e += "-" : n === 15 ? e += "4" : n === 20 ? e += t[Math.random() * 4 | 8] : e += t[Math.floor(Math.random() * 16)];
//         return e
//     },
//     buildPrefixUUID = (e = "") => {
//         let t = 0,
//             n = Date.now(),
//             r = Math.floor(Math.random() * 1e9);
//         return t++, `${e}${r}${t}${String(n)}`
//     },
//     uuid = (e, t, n = "") => {
//         let r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
//             o = [],
//             s;
//         if (t = t || r.length, e)
//             for (s = 0; s < e; s++) o[s] = r[0 | Math.random() * t];
//         else {
//             let i;
//             for (o[8] = o[13] = o[18] = o[23] = "-", o[14] = "4", s = 0; s < 36; s++) o[s] || (i = 0 | Math.random() * 16, o[s] = r[s == 19 ? i & 3 | 8 : i]);
//         }
//         return n ? n + o.join("") : o.join("")
//     };

// function Ye(e) {
//     for (let t = e.length - 1; t > 0; t--) {
//         let n = Math.floor(Math.random() * (t + 1));
//         [e[t], e[n]] = [e[n], e[t]];
//     }
//     return e
// }

// function isIncludeAllChildren(e, t) {
//     return e.every(n => t.some(r => r === n))
// }
// var intersection = (...e) => [...e].reduce((t, n) => t.filter(r => n.includes(r)));

// function swapOrder(e, t, n) {
//     return e[t] = e.splice(n, 1, e[t])[0], e
// }

// function getKeyList(e, t, n = !0) {
//     let r = [];
//     for (let o of e) o[t] !== void 0 && o[t] !== null && r.push(o[t]);
//     return n ? Array.from(new Set(r)) : r
// }

// function randomDivide(e, t, n = {}) {
//     let r = n.minPerPart ? ? 0,
//         o = n.maxPerPart,
//         s = n.order ? ? "random";
//     if (n.minPerPart && e < t * r || o && e > t * o) return console.error("\u603B\u6570\u4E0D\u8DB3\u4EE5\u6309\u6307\u5B9A\u7684\u6700\u5C0F\u9600\u503C\u5206\u6210\u76F8\u5E94\u7684\u4EFD\u6570\uFF0C\u6216\u8005\u603B\u6570\u8D85\u8FC7\u4E86\u6309\u6700\u5927\u9600\u503C\u5206\u914D\u7684\u80FD\u529B"), [];
//     let i = e - r * t,
//         u = Array.from({
//             length: t
//         }, () => Math.random()),
//         a = u.reduce((m, l) => m + l, 0),
//         f = u.map(m => {
//             let l = Math.floor(m / a * i),
//                 d = r + l;
//             return o !== void 0 && (d = Math.min(d, o)), d
//         }),
//         p = f.reduce((m, l) => m + l, 0),
//         y = 0;
//     for (; p !== e;) y >= f.length && (y = 0), p < e && (o === void 0 || f[y] < o) ? (f[y] ++, p++) : p > e && f[y] > r && (f[y] --, p--), y++;
//     switch (s) {
//         case "asc":
//             f.sort((m, l) => m - l);
//             break;
//         case "desc":
//             f.sort((m, l) => l - m);
//             break;
//         case "random":
//             Ye(f);
//             break
//     }
//     return f
// }
// var arrayAllExist = (e, t) => {
//         if (!isArray(e) || !isArray(t)) return !1;
//         let n = new Set(e);
//         return t.every(r => n.has(r))
//     },
//     arrayAllExistDeep = (e, t) => t.every(n => e.some(r => deepEqual(r, n))),
//     arrayAnyExist = (e, t) => {
//         if (!isArray(e) || !isArray(t)) return !1;
//         let n = new Set(e);
//         return t.some(r => n.has(r))
//     };

// function arrayAnyExistDeep(e, t) {
//     return t.some(n => e.some(r => deepEqual(r, n)))
// }

// function extractFields(e, ...t) {
//     let n = new Array(e.length);
//     for (let r = 0; r < e.length; r++) {
//         let o = {};
//         for (let s of t) o[s] = e[r][s];
//         n[r] = o;
//     }
//     return n
// }
// var c = {};
// tt(c, {
//     Vue: () => Ct
// });
// fe(c, Ct);
// var Rt = ["class", "style"],
//     kt = /^on[A-Z]/;

// function entries(e) {
//     return Object.keys(e).map(t => [t, e[t]])
// }

// function useAttrs(e = {}) {
//     let t = (0, c.getCurrentInstance)();
//     if (!t) return {};
//     let {
//         excludeListeners: n = !1,
//         excludeKeys: r = []
//     } = e, o = (0, c.shallowRef)({}), s = r.concat(Rt);
//     return t.attrs = (0, c.reactive)(t.attrs), (0, c.watchEffect)(() => {
//         let i = entries(t.attrs).reduce((u, [a, f]) => (!s.includes(a) && !(n && kt.test(a)) && (u[a] = f), u), {});
//         o.value = i;
//     }), o
// }
// var useDynamicComponent = e => (0, c.h)((0, c.resolveComponent)(e));

// function copyTextToClipboard(e, {
//     target: t = isBrowser ? document.body : void 0
// } = {}) {
//     let n = document.createElement("textarea"),
//         r = document.activeElement;
//     n.value = e, n.setAttribute("readonly", ""), n.style.contain = "strict", n.style.position = "absolute", n.style.left = "-9999px", n.style.fontSize = "12pt";
//     let o = document.getSelection(),
//         s;
//     o && o.rangeCount > 0 && (s = o.getRangeAt(0)), t ? .append(n), n.select(), n.selectionStart = 0, n.selectionEnd = e.length;
//     let i = !1;
//     try {
//         i = document.execCommand("copy");
//     } catch (u) {
//         throw new Error(u.message)
//     }
//     return n.remove(), s && o && (o.removeAllRanges(), o.addRange(s)), r instanceof HTMLElement && r.focus(), i
// }
// var useCopyToClipboard = (e = "") => {
//     let t = (0, c.shallowRef)(e),
//         n = (0, c.shallowRef)(!1);
//     return (0, c.watch)(t, (o = e) => {
//         o = (0, c.isProxy)(o) || (0, c.isRef)(o) ? (0, c.unref)(o) : o, o = o.trim().length === 0 ? e : o, o.length > 0 ? n.value = copyTextToClipboard(o) : n.value = !1;
//     }, {
//         flush: "sync"
//     }), {
//         clipboardValue: t,
//         copied: n,
//         update: o => {
//             t.value = (0, c.isProxy)(o) || (0, c.isRef)(o) ? (0, c.unref)(o) : o;
//             let s = t.value.trim().length === 0 ? e : t.value;
//             s.length > 0 ? n.value = copyTextToClipboard(s) : n.value = !1;
//         }
//     }
// };

// function j(e) {
//     (0, c.getCurrentInstance)() && (0, c.onUnmounted)(e);
// }

// function Ge(e) {
//     return (0, c.getCurrentScope)() ? ((0, c.onScopeDispose)(e), !0) : !1
// }

// function ye(e) {
//     let t = (0, c.toValue)(e);
//     return t ? .$el ? ? t
// }
// var useDark = e => {
//     let t = e ? .className ? ? "dark",
//         n = (0, c.shallowRef)(!1),
//         r, o = () => {
//             let i = e ? .selector ? e.selector === "html" ? document.documentElement : document.body : document.documentElement;
//             n.value = i.classList.contains(t);
//         },
//         s = () => {
//             (e ? .selector ? e.selector === "html" ? document.documentElement : document.body : document.documentElement).classList.toggle(t);
//         };
//     return j(() => {
//         r && (r.takeRecords(), r.disconnect());
//     }), (0, c.onBeforeMount)(() => {
//         let i = e ? .selector ? e.selector === "html" ? document.documentElement : document.body : document.documentElement;
//         o(), r = new MutationObserver(o), r.observe(i, {
//             attributes: !0,
//             attributeFilter: ["class"]
//         });
//     }), {
//         isDark: n,
//         toggleDark: s
//     }
// };

// function Xe(e, t = "px") {
//     if (!e) return "";
//     if (isString(e)) return e;
//     if (isNumber(e)) return `${e}${t}`;
//     console.warn("\u7ED1\u5B9A\u503C\u5FC5\u987B\u662F\u5B57\u7B26\u4E32\u6216\u6570\u5B57");
// }
// var useDraggable = (e, t, n) => {
//     let r = n ? .dragRefStyle ? ? {
//             cursor: "move",
//             userSelect: "none"
//         },
//         o = n ? .resize ? ? !0,
//         s = (0, c.ref)(!1),
//         i = (0, c.ref)(!0),
//         u = (0, c.reactive)({
//             offsetX: 0,
//             offsetY: 0
//         }),
//         a = null,
//         f = w => {
//             let E = w.clientX,
//                 M = w.clientY,
//                 {
//                     offsetX: L,
//                     offsetY: D
//                 } = u,
//                 B = isString(e) ? document.querySelector(e) : e.value,
//                 F = B.getBoundingClientRect(),
//                 I = F.left,
//                 H = F.top,
//                 P = F.width,
//                 S = F.height,
//                 R = document.documentElement.clientWidth,
//                 $ = document.documentElement.clientHeight,
//                 k = -I + L,
//                 A = -H + D,
//                 ue = R - I - P + L,
//                 J = $ - H - S + D,
//                 ee = be => {
//                     let xe = Math.min(Math.max(L + be.clientX - E, k), ue),
//                         we = Math.min(Math.max(D + be.clientY - M, A), J);
//                     s.value = !0, u.offsetX = xe, u.offsetY = we, a !== null && cancelAnimationFrame(a), a = requestAnimationFrame(() => {
//                         B.style.transform = `translate(${Xe(xe)}, ${Xe(we)})`;
//                     });
//                 },
//                 te = () => {
//                     s.value = !1, document.removeEventListener("mousemove", ee), document.removeEventListener("mouseup", te), a !== null && (cancelAnimationFrame(a), a = null);
//                 };
//             document.addEventListener("mousemove", ee), document.addEventListener("mouseup", te);
//         },
//         p = () => {
//             (0, c.nextTick)(() => {
//                 let w = isString(e) ? document.querySelector(e) : e.value,
//                     E = isString(t) ? document.querySelector(t) : t.value;
//                 E && w && (r && Object.keys(r).forEach(M => {
//                     let L = M;
//                     E.style[L] = r[L];
//                 }), E.addEventListener("mousedown", f));
//             });
//         },
//         y = () => {
//             (0, c.nextTick)(() => {
//                 let w = isString(e) ? document.querySelector(e) : e.value,
//                     E = isString(t) ? document.querySelector(t) : t.value;
//                 E && w && E.removeEventListener("mousedown", f);
//             });
//         },
//         m = () => {
//             let w = isString(e) ? document.querySelector(e) : e.value;
//             w && (u.offsetX = 0, u.offsetY = 0, w.style.transition = "transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)", (0, c.nextTick)(() => {
//                 w.style.transform = "none";
//                 let E = () => {
//                     w.style.transition = "", w.removeEventListener("transitionend", E);
//                 };
//                 w.addEventListener("transitionend", E);
//             }));
//         },
//         l = o ? debounce(() => {
//             if (s.value) return;
//             let w = isString(e) ? document.querySelector(e) : e.value;
//             if (w) {
//                 let E = w.getBoundingClientRect(),
//                     M = document.documentElement.clientWidth,
//                     L = document.documentElement.clientHeight;
//                 (E.left < 0 || E.top < 0 || E.right > M || E.bottom > L) && m();
//             }
//         }, isBoolean(o) ? 60 : o) : !1,
//         d = () => {
//             y(), s.value = !1, i.value = !0, u.offsetX = 0, u.offsetY = 0;
//         },
//         g = isFunction(l),
//         b = () => {
//             d(), p(), isBrowser && g && window.addEventListener("resize", l);
//         },
//         x = () => {
//             g && window.removeEventListener("resize", l), y(), s.value = !1, i.value = !0, p(), isBrowser && g && window.addEventListener("resize", l);
//         },
//         T = () => {
//             y(), s.value = !1, i.value = !1, isBrowser && g && window.removeEventListener("resize", l);
//         };
//     return (0, c.onBeforeUnmount)(() => {
//         d(), isBrowser && (g && window.removeEventListener("resize", l), a !== null && cancelAnimationFrame(a));
//     }), {
//         draggable: i,
//         dragging: s,
//         transform: u,
//         init: b,
//         open: x,
//         close: T,
//         reset: m
//     }
// };

// function useResizeObserver(e, t, n = {}) {
//     let {
//         time: r = 40,
//         box: o = "content-box",
//         immediate: s = !0
//     } = n, i, u = !s, a = debounce((b, x) => {
//         u ? t(b, x) : u = !0;
//     }, r), f = () => {
//         i && (i.disconnect(), i = null);
//     }, p = b => typeof b == "string", y = b => isBrowser ? Array.from(document.querySelectorAll(b)) : [], m = (0, c.computed)(() => p(e) ? y(e) : Array.isArray(e) ? e.map(b => p(b) ? y(b) : ye(b)).flat() : [ye(e)]), l, d = () => {
//         isBrowser && (f(), l ? .(), l = (0, c.watch)(m, (b, x, T) => {
//             window && b.length && (i = new ResizeObserver(a), b.forEach(w => {
//                 if (w && (i.observe(w, {
//                         box: o
//                     }), !u)) {
//                     let E = w.getBoundingClientRect(),
//                         M = {
//                             target: w,
//                             contentRect: E,
//                             borderBoxSize: [{
//                                 inlineSize: E.width,
//                                 blockSize: E.height
//                             }],
//                             contentBoxSize: [{
//                                 inlineSize: E.width,
//                                 blockSize: E.height
//                             }],
//                             devicePixelContentBoxSize: [{
//                                 inlineSize: E.width,
//                                 blockSize: E.height
//                             }]
//                         };
//                     t([M], i);
//                 }
//             })), T(f);
//         }, {
//             immediate: !0,
//             flush: "post",
//             deep: !0
//         }));
//     };
//     (0, c.nextTick)(() => {
//         d();
//     });
//     let g = () => {
//         f(), l && l();
//     };
//     return Ge(g), {
//         stop: g,
//         restart: d
//     }
// }

// function useGlobal() {
//     let {
//         appContext: {
//             config: {
//                 globalProperties: e
//             }
//         }
//     } = (0, c.getCurrentInstance)();
//     return e
// }
// var ms = (e, t) => {
//     let n = "$echarts",
//         r = t ? .theme ? (0, c.isProxy)(t.theme) || (0, c.isRef)(t.theme) ? t.theme : (0, c.ref)(t.theme) : (0, c.ref)("default"),
//         o = t ? .tooltipId ? ? "tooltipElement",
//         s = useGlobal().$echarts;
//     s || Object.keys(useGlobal()).forEach(S => {
//         useGlobal() ? .[S] ? .Axis && useGlobal() ? .[S] ? .ChartView && (s = useGlobal() ? .[S], n = S);
//     });
//     let i = !0,
//         u = !1,
//         a = null,
//         f = (0, c.ref)({}),
//         p = (0, c.ref)(),
//         y = (0, c.computed)(() => r.value !== "dark" ? f.value : {
//             backgroundColor: "transparent",
//             ...f.value
//         });

//     function m(S) {
//         let R = (0, c.unref)(e);
//         if (!(!R || !(0, c.unref)(R))) {
//             if (!s) throw new Error("useECharts:  echarts\u672A\u7ED1\u5B9A\u5230globalProperties");
//             a = s.init(R, S, t);
//         }
//     }

//     function l(S, ...R) {
//         if (f.value = S, p.value = R, (0, c.unref)(e) ? .offsetHeight === 0) {
//             delay().then(() => l((0, c.unref)(y), ...R));
//             return
//         }(0, c.nextTick)(() => {
//             delay().then(() => {
//                 !a && m(r.value), (S.clear ? ? !0) && d(), a ? .setOption((0, c.unref)(y)), R && R.map(k => {
//                     k ? .type !== "zrender" && typeof k ? .callback == "function" && a ? .on(k ? .name, k ? .query ? k ? .query : "", A => {
//                         k ? .callback(A);
//                     }), k ? .type === "zrender" && typeof k ? .callback == "function" && a ? .getZr().on(k ? .name, A => {
//                         A.target || k ? .callback(A);
//                     });
//                 }), S ? .addTooltip && I(S.addTooltip);
//             });
//         });
//     }

//     function d() {
//         a && a.clear();
//     }

//     function g() {
//         a && a.resize();
//     }

//     function b(S) {
//         let R = S ? .type ? ? "default",
//             $ = S ? .opts ? ? {};
//         a.showLoading(R, $);
//     }

//     function x() {
//         a.hideLoading();
//     }

//     function T(S) {
//         a.appendData(S);
//     }

//     function w() {
//         return a.getWidth()
//     }

//     function E() {
//         return a.getHeight()
//     }

//     function M() {
//         return a || m(r.value), a
//     }

//     function L() {
//         return a.getDom()
//     }

//     function D() {
//         return a.getOption()
//     }

//     function B(S) {
//         return a.getDataURL(S)
//     }

//     function F(S) {
//         return a.getConnectedDataURL(S)
//     }

//     function I(S) {
//         if (!S || !isBrowser) return;
//         let R = document.querySelector("html");
//         if (!document.getElementById(o)) {
//             let A = document.createElement("div");
//             A.setAttribute("id", o), A.style.display = "block", R.appendChild(A);
//         }
//         let $ = document.querySelector(`#${o}`),
//             k = A => {
//                 if (A ? .targetType !== "axisLabel") return;
//                 let ue = `
//         padding: 5px;
//         font-size: 12px;
//         display: inline;
//         border-radius: 4px;
//         position: absolute;
//         background-color: #303133;
//         z-index: 99999;color: #fff;
//         box-shadow: rgba(0, 0, 0, 0.3) 2px 2px 8px;
//       `;
//                 $.style.cssText = ue, $.innerHTML = A ? .value, R.onmousemove = J => {
//                     let ee = J.pageX - 10,
//                         te = J.pageY + 15;
//                     $.style.top = te + "px", $.style.left = ee + "px";
//                 };
//             };
//         a ? .on("mouseover", A => {
//             (S === "x" && A.componentType == "xAxis" || S === "y" && A.componentType == "yAxis" || S.toString() === "true" && A.componentType.includes("Axis")) && k(A);
//         }), a ? .on("mouseout", () => {
//             R.onmousemove = null, $.style.cssText = "display:none";
//         });
//     }

//     function H() {
//         return {
//             name: n,
//             value: s
//         }
//     }(0, c.watch)(() => r.value, S => {
//         a && (a.dispose(), m(S), l(f.value, ...p.value));
//     });

//     function P() {
//         a && delay(f.value ? .delay ? ? 300).then(() => {
//             g();
//         });
//     }
//     return (0, c.onMounted)(() => {
//         (0, c.nextTick)(() => {
//             if (f.value ? .container) {
//                 let S = f.value ? .delay ? ? 40;
//                 useResizeObserver(f.value.container, g, {
//                     time: S
//                 }), u = arrayAnyExist(["body", "html", "document"], Array.of(f.value.container).flat()), u && window.addEventListener("resize", P);
//             } else i = f.value ? .resize ? ? !0, i && window.addEventListener("resize", P);
//         });
//     }), j(() => {
//         !f.value ? .container && i && window.removeEventListener("resize", P), f.value ? .container && u && window.removeEventListener("resize", P), a && (a.dispose(), a = null, document.querySelector(`#${o}`) ? .remove());
//     }), {
//         echarts: s,
//         setOptions: l,
//         getInstance: M,
//         showLoading: b,
//         hideLoading: x,
//         clear: d,
//         resize: g,
//         getGlobalProperties: H,
//         getDom: L,
//         getWidth: w,
//         getHeight: E,
//         getOption: D,
//         appendData: T,
//         getDataURL: B,
//         getConnectedDataURL: F,
//         addTooltip: I
//     }
// };

// function Pt(e) {
//     return `${e}-${new Date().getTime()}-${Math.random().toString(36).substr(2,9)}`
// }

// function useLoader(e = !0) {
//     function t(o, s) {
//         if (!isBrowser) return;
//         let u = (Array.isArray(o) ? o : [o]).map(a => (Array.isArray(a.src) ? a.src : [a.src]).map(p => {
//             let y = s === "css" ? `link[href="${p}"]` : `script[src="${p}"]`,
//                 m = document.querySelector(y),
//                 l;
//             return m ? (l = m.cloneNode(!1), m.replaceWith(l)) : (s === "css" ? (l = document.createElement("link"), l.rel = "stylesheet", l.href = p) : (l = document.createElement("script"), l.type = "text/javascript", l.src = p), l.id = Pt(s === "css" ? "pure-utils-css" : "pure-utils-script"), (a.element instanceof HTMLElement ? a.element : document[a.element ? ? (s === "css" ? "head" : "body")]).appendChild(l)), new Promise((d, g) => {
//                 l.onload = () => d({
//                     src: p,
//                     message: "\u52A0\u8F7D\u6210\u529F"
//                 }), l.onerror = () => g({
//                     src: p,
//                     message: "\u52A0\u8F7D\u5931\u8D25"
//                 });
//             })
//         })).flat();
//         return Promise.all(u)
//     }

//     function n(o) {
//         return t(o, "css")
//     }

//     function r(o) {
//         return t(o, "script")
//     }
//     return j(() => {
//         isBrowser && e && document.querySelectorAll('link[id^="pure-utils-css"], script[id^="pure-utils-script"]').forEach(o => o.remove());
//     }), {
//         loadCss: n,
//         loadScript: r
//     }
// }
// var easeInOutQuad = ({
//         timeElapsed: e,
//         startValue: t,
//         byValue: n,
//         duration: r
//     }) => (e /= r / 2, e < 1 ? n / 2 * e * * 2 + t : -n / 2 * (--e * (e - 2) - 1) + t),
//     useScrollTo = e => {
//         let t = (0, c.isProxy)(e.el) ? e.el : (0, c.ref)(e.el),
//             n = e.to,
//             r = e.directions,
//             o = e ? .duration ? ? 0,
//             s = (0, c.shallowRef)(!1),
//             i = null,
//             u = () => {
//                 let p = t.value;
//                 if (!p) return;
//                 i !== null && cancelAnimationFrame(i);
//                 let y = p.scrollHeight - p.clientHeight,
//                     m = p.scrollWidth - p.clientWidth,
//                     l = Math.max(0, Math.min(n, r === "scrollTop" ? y : m));
//                 if (o === 0 || p[r] === l) {
//                     p[r] = l, e.callback && isFunction(e.callback) && (o === 0 ? e.callback("\u6EDA\u52A8\u5B8C\u6BD5") : e.callback("\u65E0\u9700\u6EDA\u52A8"));
//                     return
//                 }
//                 let d = p[r],
//                     g = l - d,
//                     x = Math.max(1, o / 60),
//                     T = 0,
//                     w = () => {
//                         T += x;
//                         let E = easeInOutQuad({
//                             timeElapsed: T,
//                             startValue: d,
//                             byValue: g,
//                             duration: o
//                         });
//                         p[r] = E, T < o ? i = requestAnimationFrame(w) : (p[r] = l, i = null, e.callback && isFunction(e.callback) && e.callback("\u6EDA\u52A8\u5B8C\u6BD5"));
//                     };
//                 i = requestAnimationFrame(w);
//             };
//         return {
//             start: () => {
//                 s.value || (s.value = !0, u());
//             },
//             stop: () => {
//                 i !== null && (cancelAnimationFrame(i), i = null), s.value = !1;
//             }
//         }
//     };
// var $t = Symbol("watermark-dom"),
//     useWatermark = (e = (0, c.ref)(isBrowser ? document.body : "")) => {
//         let t = $t.toString(),
//             n = (0, c.shallowRef)(),
//             r = m => new Promise((l, d) => {
//                 isBrowser || d();
//                 let g = new Image;
//                 new URL(m, window.location.href).origin !== window.location.origin && (g.crossOrigin = "anonymous", g.referrerPolicy = "getSvgInfo-referrer"), g.onload = () => l(g), g.onerror = d, g.src = m;
//             }),
//             o = () => {
//                 let m = (0, c.unref)(n);
//                 n.value = void 0;
//                 let l = (0, c.unref)(e);
//                 l && m && l.removeChild(m);
//             };

//         function s(m, l) {
//             if (!isBrowser) return Promise.resolve("");
//             let d = document.createElement("canvas"),
//                 g = l ? .width ? ? 250,
//                 b = l ? .height ? ? 100;
//             d.width = g, d.height = b;
//             let x = d.getContext("2d");
//             if (!x) return Promise.resolve("");
//             let T = (l ? .rotate ? ? -10) * Math.PI / 180;
//             if (x.translate(g / 2, b / 2), x.rotate(T), l ? .globalAlpha && (x.globalAlpha = l.globalAlpha), l ? .shadowConfig) {
//                 let {
//                     shadowConfig: E
//                 } = l;
//                 x.shadowBlur = E[0], x.shadowColor = E ? .[1] ? ? "#000000", x.shadowOffsetX = E ? .[2] ? ? 0, x.shadowOffsetY = E ? .[3] ? ? 0;
//             }
//             let w = () => {
//                 x.font = l ? .font ? ? "normal 16px Arial, 'Courier New', 'Droid Sans', sans-serif";
//                 let E = m.includes(l ? .wrap ? ? "\u3001") ? "center" : "left",
//                     M = l ? .textAlign ? ? E;
//                 if (x.textAlign = M, x.textBaseline = "middle", l ? .gradient && isArray(l ? .gradient)) {
//                     let I = x.createLinearGradient(0, 0, g, 0);
//                     l ? .gradient.forEach(H => {
//                         I.addColorStop(H.value, H.color);
//                     }), x.fillStyle = I;
//                 } else x.fillStyle = l ? .color ? ? "rgba(128, 128, 128, 0.3)";
//                 let L = m.split(l ? .wrap ? ? "\u3001"),
//                     D = l ? .lineHeight ? ? 20,
//                     F = -(L.length * D / 2) + D / 2;
//                 L.forEach((I, H) => {
//                     let P;
//                     M === "left" || M === "start" ? P = -g / 4 : M === "right" || M === "end" ? P = g / 4 : P = 0, x.fillText(I, P, F + H * D);
//                 }), x.rotate(-T), x.translate(-g / 2, -b / 2);
//             };
//             return new Promise(E => {
//                 let M = l ? .image;
//                 M ? r(M).then(L => {
//                     let D = l ? .imageWidth ? ? L.width,
//                         B = l ? .imageHeight ? ? L.height;
//                     x.drawImage(L, -D / 2, -B / 2, D, B), E(d.toDataURL("image/png"));
//                 }).catch(() => {
//                     w(), E(d.toDataURL("image/png"));
//                 }) : (w(), E(d.toDataURL("image/png")));
//             })
//         }

//         function i(m = {}) {
//             let l = (0, c.unref)(n);
//             l && (isDef(m.width) && (l.style.width = `${m.width}px`), isDef(m.height) && (l.style.height = `${m.height}px`), isDef(m.str) && s(m.str, m.attr).then(d => {
//                 l.style.background = `url(${d}) left top repeat`;
//             }));
//         }
//         let u = debounce(() => {
//                 let m = (0, c.unref)(e);
//                 if (!m) return;
//                 let {
//                     clientHeight: l,
//                     clientWidth: d
//                 } = m;
//                 i({
//                     height: l,
//                     width: d
//                 });
//             }),
//             a = (m, l) => {
//                 if (!isBrowser) return;
//                 if ((0, c.unref)(n)) return i({
//                     str: m,
//                     attr: l
//                 }), t;
//                 let d = (0, c.unref)(e),
//                     g = document.createElement("div");
//                 if (n.value = g, g.id = t, g.style.pointerEvents = "none", g.style.top = "0px", g.style.left = "0px", g.style.position = d === document.body ? "fixed" : "absolute", g.style.zIndex = l ? .zIndex ? ? "100000", !d) return t;
//                 let {
//                     clientHeight: b,
//                     clientWidth: x
//                 } = d;
//                 return i({
//                     str: m,
//                     width: x,
//                     height: b,
//                     attr: l
//                 }), d ? .style ? .position || (d.style.position = "relative"), d.appendChild(g), t
//             };

//         function f(m, {
//             str: l,
//             attr: d
//         }) {
//             m[0].removedNodes[0] && m[0].removedNodes[0].id === t && (n.value = void 0, a(l, d));
//         }

//         function p(m, l) {
//             let d = {
//                 childList: !0,
//                 attributes: !0,
//                 characterData: !0,
//                 subtree: !0
//             };
//             new MutationObserver(b => f(b, {
//                 str: m,
//                 attr: l
//             })).observe((0, c.unref)(e), d);
//         }

//         function y(m, l) {
//             if (!isBrowser) return;
//             a(m, l), window.addEventListener("resize", u), l ? .forever && p(m, l), (0, c.getCurrentInstance)() && o && o();
//         }
//         return j(() => {
//             isBrowser && window.removeEventListener("resize", u);
//         }), {
//             clear: o,
//             setWatermark: y
//         }
//     };
// export {
//   addClass as addClass, addZero as addZero, addition as addition, allowMouseEvent as allowMouseEvent, appendFieldByUniqueId as appendFieldByUniqueId, arrayAllExist as arrayAllExist, arrayAllExistDeep as arrayAllExistDeep, arrayAnyExist as arrayAnyExist, arrayAnyExistDeep as arrayAnyExistDeep, average as average, banMouseEvent as banMouseEvent, bd09togcj02 as bd09togcj02, buildGUID as buildGUID, buildHierarchyTree as buildHierarchyTree, buildPrefixUUID as buildPrefixUUID, buildUUID as buildUUID, centsToDollars as centsToDollars, cleanObject as cleanObject, clone as clone, cloneDeep as cloneDeep, convertImageToGray as convertImageToGray, convertPath as convertPath, copyTextToClipboard as copyTextToClipboard, createFormData as createFormData, createYear as createYear, darken as darken, dataURLtoBlob as dataURLtoBlob, dateFormat as dateFormat, debounce as debounce, deepEqual as deepEqual, delObjectProperty as delObjectProperty, delay as delay, deleteChildren as deleteChildren, deviceDetection as deviceDetection, divisionOperation as divisionOperation, dollarsToCents as dollarsToCents, downloadByBase64 as downloadByBase64, downloadByData as downloadByData, downloadByOnlineUrl as downloadByOnlineUrl, downloadByUrl as downloadByUrl, easeInOutQuad as easeInOutQuad, entries as entries, exceedMathMax as exceedMathMax, extractFields as extractFields, extractPathList as extractPathList, formDataHander as formDataHander, formatBytes as formatBytes, gcj02tobd09 as gcj02tobd09, gcj02towgs84 as gcj02towgs84, getBrowserInfo as getBrowserInfo, getClass as getClass, getCurrentDate as getCurrentDate, getCurrentWeek as getCurrentWeek, getDecimalPlaces as getDecimalPlaces, getKeyList as getKeyList, getLocation as getLocation, getNodeByUniqueId as getNodeByUniqueId, getPerformance as getPerformance, getQueryMap as getQueryMap, getSvgInfo as getSvgInfo, getTime as getTime, handleTree as handleTree, hasCNChars as hasCNChars, hasClass as hasClass, hasOwnProp as hasOwnProp, hexToRgb as hexToRgb, hideTextAtIndex as hideTextAtIndex, intersection as intersection, is as is, isAllEmpty as isAllEmpty, isAlphabets as isAlphabets, isArray as isArray, isBase64 as isBase64, isBoolean as isBoolean, isBrowser as isBrowser, isClient as isClient, isDate as isDate, isDef as isDef,
//   isElement as isElement, isEmail as isEmail, isEmpty as isEmpty, isEqual as isEqual, isEqualArray as isEqualArray, isEqualObject as isEqualObject, isExistSpace as isExistSpace, isFunction as isFunction, isHex as isHex, isHtml as isHtml, isIncludeAllChildren as isIncludeAllChildren, isInvalidValue as isInvalidValue, isJSON as isJSON, isLeapYear as isLeapYear, isLowerCase as isLowerCase,
//   isNull as isNull, isNullAndUnDef as isNullAndUnDef, isNullOrUnDef as isNullOrUnDef, isNumber as isNumber, isObject as isObject, isPhone as isPhone, isPlainObject as isPlainObject, isPostCode as isPostCode, isPromise as isPromise, isQQ as isQQ, isRegExp as isRegExp, isRgb as isRgb, isRgba as isRgba, isServer as isServer, isString as isString, Te as isUnDef, isUpperCase as isUpperCase, isUrl as isUrl, isWindow as isWindow, lighten as lighten, mapsEqual as mapsEqual, max as max, min as min, monthDays as monthDays, multiplication as multiplication, nameCamelize as nameCamelize, nameHyphenate as nameHyphenate, numberToChinese as numberToChinese, openLink as openLink,
//   out_of_china as out_of_china, priceToThousands as priceToThousands, priceUppercase as priceUppercase, randomColor as randomColor, randomDivide as randomDivide, randomGradient as randomGradient, removeAllSpace as removeAllSpace, jt as removeBothSidesSpace, Ln as removeClass, Bt as removeLeftSpace, Ft as removeRightSpace, De as rgbToHex, dt as setsEqual, wt as shouldCleanKey, Ye as shuffleArray, Qr as splitNum, Wr as storageLocal, Yr as storageSession, At as subAfter, St as subBefore, Xr as subBetween, Gr as subBothSides, Zr as subTextAddEllipsis, Jn as subtraction, sum as sum, swapOrder as swapOrder, throttle as throttle, toSet as toSet, toggleClass as toggleClass, urlToBase64 as urlToBase64, useAttrs as useAttrs, useCopyToClipboard as useCopyToClipboard, useDark as useDark, useDraggable as useDraggable, useDynamicComponent as useDynamicComponent, ms as useECharts, useGlobal as useGlobal,
//   useLoader as useLoader, useResizeObserver as useResizeObserver, useScrollTo as useScrollTo, useWatermark as useWatermark, uuid as uuid, wgs84togcj02 as wgs84togcj02, withInstall as withInstall, withInstallFunction as withInstallFunction, withNoopInstall as withNoopInstall
// };
