/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-adownload-animation-appearance-backdropfilter-bgpositionxy-borderradius-boxsizing-canvas-canvasblending-canvastext-cookies-cssanimations-csscalc-customelements-dart-dataview-fullscreen-geolocation-input-inputtypes-json-ligatures-lowbattery-mathml-pagevisibility-performance-promises-requestanimationframe-search-svg-video-domprefixes-setclasses !*/
!(function(e, t, n) {
  function r(e, t) {
    return typeof e === t;
  }
  function a() {
    var e, t, n, a, i, o, s;
    for (var l in T)
      if (T.hasOwnProperty(l)) {
        if (
          ((e = []),
          (t = T[l]),
          t.name &&
            (e.push(t.name.toLowerCase()),
            t.options && t.options.aliases && t.options.aliases.length))
        )
          for (n = 0; n < t.options.aliases.length; n++)
            e.push(t.options.aliases[n].toLowerCase());
        for (a = r(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++)
          (o = e[i]),
            (s = o.split(".")),
            1 === s.length
              ? (Modernizr[s[0]] = a)
              : (!Modernizr[s[0]] ||
                  Modernizr[s[0]] instanceof Boolean ||
                  (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])),
                (Modernizr[s[0]][s[1]] = a)),
            x.push((a ? "" : "no-") + s.join("-"));
      }
  }
  function i(e) {
    var t = w.className,
      n = Modernizr._config.classPrefix || "";
    if ((C && (t = t.baseVal), Modernizr._config.enableJSClass)) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(r, "$1" + n + "js$2");
    }
    Modernizr._config.enableClasses &&
      ((t += " " + n + e.join(" " + n)),
      C ? (w.className.baseVal = t) : (w.className = t));
  }
  function o() {
    return "function" != typeof t.createElement
      ? t.createElement(arguments[0])
      : C
      ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0])
      : t.createElement.apply(t, arguments);
  }
  function s(e, t) {
    return !!~("" + e).indexOf(t);
  }
  function l() {
    var e = t.body;
    return e || ((e = o(C ? "svg" : "body")), (e.fake = !0)), e;
  }
  function c(e, n, r, a) {
    var i,
      s,
      c,
      d,
      u = "modernizr",
      f = o("div"),
      p = l();
    if (parseInt(r, 10))
      for (; r--; )
        (c = o("div")), (c.id = a ? a[r] : u + (r + 1)), f.appendChild(c);
    return (
      (i = o("style")),
      (i.type = "text/css"),
      (i.id = "s" + u),
      (p.fake ? p : f).appendChild(i),
      p.appendChild(f),
      i.styleSheet
        ? (i.styleSheet.cssText = e)
        : i.appendChild(t.createTextNode(e)),
      (f.id = u),
      p.fake &&
        ((p.style.background = ""),
        (p.style.overflow = "hidden"),
        (d = w.style.overflow),
        (w.style.overflow = "hidden"),
        w.appendChild(p)),
      (s = n(f, e)),
      p.fake
        ? (p.parentNode.removeChild(p), (w.style.overflow = d), w.offsetHeight)
        : f.parentNode.removeChild(f),
      !!s
    );
  }
  function d(e) {
    return e
      .replace(/([A-Z])/g, function(e, t) {
        return "-" + t.toLowerCase();
      })
      .replace(/^ms-/, "-ms-");
  }
  function u(t, n, r) {
    var a;
    if ("getComputedStyle" in e) {
      a = getComputedStyle.call(e, t, n);
      var i = e.console;
      if (null !== a) r && (a = a.getPropertyValue(r));
      else if (i) {
        var o = i.error ? "error" : "log";
        i[o].call(
          i,
          "getComputedStyle returning null, its possible modernizr test results are inaccurate"
        );
      }
    } else a = !n && t.currentStyle && t.currentStyle[r];
    return a;
  }
  function f(t, r) {
    var a = t.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; a--; ) if (e.CSS.supports(d(t[a]), r)) return !0;
      return !1;
    }
    if ("CSSSupportsRule" in e) {
      for (var i = []; a--; ) i.push("(" + d(t[a]) + ":" + r + ")");
      return (
        (i = i.join(" or ")),
        c(
          "@supports (" + i + ") { #modernizr { position: absolute; } }",
          function(e) {
            return "absolute" == u(e, null, "position");
          }
        )
      );
    }
    return n;
  }
  function p(e) {
    return e
      .replace(/([a-z])-([a-z])/g, function(e, t, n) {
        return t + n.toUpperCase();
      })
      .replace(/^-/, "");
  }
  function m(e, t, a, i) {
    function l() {
      d && (delete E.style, delete E.modElem);
    }
    if (((i = r(i, "undefined") ? !1 : i), !r(a, "undefined"))) {
      var c = f(e, a);
      if (!r(c, "undefined")) return c;
    }
    for (
      var d, u, m, v, g, y = ["modernizr", "tspan", "samp"];
      !E.style && y.length;

    )
      (d = !0), (E.modElem = o(y.shift())), (E.style = E.modElem.style);
    for (m = e.length, u = 0; m > u; u++)
      if (
        ((v = e[u]),
        (g = E.style[v]),
        s(v, "-") && (v = p(v)),
        E.style[v] !== n)
      ) {
        if (i || r(a, "undefined")) return l(), "pfx" == t ? v : !0;
        try {
          E.style[v] = a;
        } catch (h) {}
        if (E.style[v] != g) return l(), "pfx" == t ? v : !0;
      }
    return l(), !1;
  }
  function v(e, t) {
    return function() {
      return e.apply(t, arguments);
    };
  }
  function g(e, t, n) {
    var a;
    for (var i in e)
      if (e[i] in t)
        return n === !1
          ? e[i]
          : ((a = t[e[i]]), r(a, "function") ? v(a, n || t) : a);
    return !1;
  }
  function y(e, t, n, a, i) {
    var o = e.charAt(0).toUpperCase() + e.slice(1),
      s = (e + " " + k.join(o + " ") + o).split(" ");
    return r(t, "string") || r(t, "undefined")
      ? m(s, t, a, i)
      : ((s = (e + " " + P.join(o + " ") + o).split(" ")), g(s, t, n));
  }
  function h(e, t, r) {
    return y(e, n, n, t, r);
  }
  var T = [],
    b = {
      _version: "3.6.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0
      },
      _q: [],
      on: function(e, t) {
        var n = this;
        setTimeout(function() {
          t(n[e]);
        }, 0);
      },
      addTest: function(e, t, n) {
        T.push({ name: e, fn: t, options: n });
      },
      addAsyncTest: function(e) {
        T.push({ name: null, fn: e });
      }
    },
    Modernizr = function() {};
  (Modernizr.prototype = b), (Modernizr = new Modernizr());
  var x = [],
    w = t.documentElement,
    C = "svg" === w.nodeName.toLowerCase(),
    S = "Moz O ms Webkit",
    P = b._config.usePrefixes ? S.toLowerCase().split(" ") : [];
  (b._domPrefixes = P),
    Modernizr.addTest("canvas", function() {
      var e = o("canvas");
      return !(!e.getContext || !e.getContext("2d"));
    }),
    Modernizr.addTest("canvastext", function() {
      return Modernizr.canvas === !1
        ? !1
        : "function" == typeof o("canvas").getContext("2d").fillText;
    }),
    Modernizr.addTest("cookies", function() {
      try {
        t.cookie = "cookietest=1";
        var e = -1 != t.cookie.indexOf("cookietest=");
        return (
          (t.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT"), e
        );
      } catch (n) {
        return !1;
      }
    }),
    Modernizr.addTest("customelements", "customElements" in e);
  var k = b._config.usePrefixes ? S.split(" ") : [];
  b._cssomPrefixes = k;
  var _ = { elem: o("modernizr") };
  Modernizr._q.push(function() {
    delete _.elem;
  });
  var E = { style: _.elem.style };
  Modernizr._q.unshift(function() {
    delete E.style;
  }),
    (b.testAllProps = y);
  var N = function(t) {
    var r,
      a = q.length,
      i = e.CSSRule;
    if ("undefined" == typeof i) return n;
    if (!t) return !1;
    if (
      ((t = t.replace(/^@/, "")),
      (r = t.replace(/-/g, "_").toUpperCase() + "_RULE"),
      r in i)
    )
      return "@" + t;
    for (var o = 0; a > o; o++) {
      var s = q[o],
        l = s.toUpperCase() + "_" + r;
      if (l in i) return "@-" + s.toLowerCase() + "-" + t;
    }
    return !1;
  };
  b.atRule = N;
  var z = (b.prefixed = function(e, t, n) {
    return 0 === e.indexOf("@")
      ? N(e)
      : (-1 != e.indexOf("-") && (e = p(e)), t ? y(e, t, n) : y(e, "pfx"));
  });
  Modernizr.addTest("dart", !!z("startDart", navigator)),
    Modernizr.addTest(
      "dataview",
      "undefined" != typeof DataView && "getFloat64" in DataView.prototype
    ),
    Modernizr.addTest(
      "fullscreen",
      !(!z("exitFullscreen", t, !1) && !z("cancelFullScreen", t, !1))
    ),
    Modernizr.addTest("geolocation", "geolocation" in navigator);
  var A = o("input"),
    O = "autocomplete autofocus list placeholder max min multiple pattern required step".split(
      " "
    ),
    L = {};
  Modernizr.input = (function(t) {
    for (var n = 0, r = t.length; r > n; n++) L[t[n]] = !!(t[n] in A);
    return L.list && (L.list = !(!o("datalist") || !e.HTMLDataListElement)), L;
  })(O);
  var $ = (function() {
    function e(e, t) {
      var a;
      return e
        ? ((t && "string" != typeof t) || (t = o(t || "div")),
          (e = "on" + e),
          (a = e in t),
          !a &&
            r &&
            (t.setAttribute || (t = o("div")),
            t.setAttribute(e, ""),
            (a = "function" == typeof t[e]),
            t[e] !== n && (t[e] = n),
            t.removeAttribute(e)),
          a)
        : !1;
    }
    var r = !("onblur" in t.documentElement);
    return e;
  })();
  (b.hasEvent = $), Modernizr.addTest("inputsearchevent", $("search"));
  var j = "search tel url email datetime date month week time datetime-local number range color".split(
      " "
    ),
    V = {};
  (Modernizr.inputtypes = (function(e) {
    for (var r, a, i, o = e.length, s = "1)", l = 0; o > l; l++)
      A.setAttribute("type", (r = e[l])),
        (i = "text" !== A.type && "style" in A),
        i &&
          ((A.value = s),
          (A.style.cssText = "position:absolute;visibility:hidden;"),
          /^range$/.test(r) && A.style.WebkitAppearance !== n
            ? (w.appendChild(A),
              (a = t.defaultView),
              (i =
                a.getComputedStyle &&
                "textfield" !== a.getComputedStyle(A, null).WebkitAppearance &&
                0 !== A.offsetHeight),
              w.removeChild(A))
            : /^(search|tel)$/.test(r) ||
              (i = /^(url|email)$/.test(r)
                ? A.checkValidity && A.checkValidity() === !1
                : A.value != s)),
        (V[e[l]] = !!i);
    return V;
  })(j)),
    Modernizr.addTest(
      "json",
      "JSON" in e && "parse" in JSON && "stringify" in JSON
    ),
    (b.testAllProps = h),
    Modernizr.addTest("ligatures", h("fontFeatureSettings", '"liga" 1'));
  var R = (b.testStyles = c);
  Modernizr.addTest("mathml", function() {
    var e;
    return (
      R("#modernizr{position:absolute;display:inline-block}", function(t) {
        (t.innerHTML += "<math><mfrac><mi>xx</mi><mi>yy</mi></mfrac></math>"),
          (e = t.offsetHeight > t.offsetWidth);
      }),
      e
    );
  }),
    Modernizr.addTest("pagevisibility", !!z("hidden", t, !1)),
    Modernizr.addTest("performance", !!z("performance", e)),
    Modernizr.addTest(
      "requestanimationframe",
      !!z("requestAnimationFrame", e),
      { aliases: ["raf"] }
    ),
    Modernizr.addTest(
      "svg",
      !!t.createElementNS &&
        !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
    ),
    Modernizr.addTest("video", function() {
      var e = o("video"),
        t = !1;
      try {
        (t = !!e.canPlayType),
          t &&
            ((t = new Boolean(t)),
            (t.ogg = e
              .canPlayType('video/ogg; codecs="theora"')
              .replace(/^no$/, "")),
            (t.h264 = e
              .canPlayType('video/mp4; codecs="avc1.42E01E"')
              .replace(/^no$/, "")),
            (t.webm = e
              .canPlayType('video/webm; codecs="vp8, vorbis"')
              .replace(/^no$/, "")),
            (t.vp9 = e
              .canPlayType('video/webm; codecs="vp9"')
              .replace(/^no$/, "")),
            (t.hls = e
              .canPlayType('application/x-mpegURL; codecs="avc1.42E01E"')
              .replace(/^no$/, "")));
      } catch (n) {}
      return t;
    }),
    Modernizr.addTest("webanimations", "animate" in o("div")),
    Modernizr.addTest("adownload", !e.externalHost && "download" in o("a")),
    Modernizr.addTest("lowbattery", function() {
      var e = 0.2,
        t = z("battery", navigator);
      return !!(t && !t.charging && t.level <= e);
    }),
    Modernizr.addTest("canvasblending", function() {
      if (Modernizr.canvas === !1) return !1;
      var e = o("canvas").getContext("2d");
      try {
        e.globalCompositeOperation = "screen";
      } catch (t) {}
      return "screen" === e.globalCompositeOperation;
    }),
    Modernizr.addTest("cssanimations", h("animationName", "a", !0)),
    Modernizr.addTest("appearance", h("appearance")),
    Modernizr.addTest("backdropfilter", h("backdropFilter")),
    Modernizr.addTest("bgpositionxy", function() {
      return (
        h("backgroundPositionX", "3px", !0) &&
        h("backgroundPositionY", "5px", !0)
      );
    }),
    Modernizr.addTest("borderradius", h("borderRadius", "0px", !0)),
    Modernizr.addTest(
      "boxsizing",
      h("boxSizing", "border-box", !0) &&
        (t.documentMode === n || t.documentMode > 7)
    );
  var q = b._config.usePrefixes
    ? " -webkit- -moz- -o- -ms- ".split(" ")
    : ["", ""];
  (b._prefixes = q),
    Modernizr.addTest("csscalc", function() {
      var e = "width:",
        t = "calc(10px);",
        n = o("a");
      return (n.style.cssText = e + q.join(t + e)), !!n.style.length;
    }),
    Modernizr.addTest("promises", function() {
      return (
        "Promise" in e &&
        "resolve" in e.Promise &&
        "reject" in e.Promise &&
        "all" in e.Promise &&
        "race" in e.Promise &&
        (function() {
          var t;
          return (
            new e.Promise(function(e) {
              t = e;
            }),
            "function" == typeof t
          );
        })()
      );
    }),
    a(),
    i(x),
    delete b.addTest,
    delete b.addAsyncTest;
  for (var M = 0; M < Modernizr._q.length; M++) Modernizr._q[M]();
  e.Modernizr = Modernizr;
})(window, document);
