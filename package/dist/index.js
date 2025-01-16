'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var _excluded = ["className", "reverse", "pauseOnHover", "children", "vertical", "repeat", "speed"];
function Marquee(_ref) {
  var className = _ref.className,
    reverse = _ref.reverse,
    _ref$pauseOnHover = _ref.pauseOnHover,
    pauseOnHover = _ref$pauseOnHover === void 0 ? false : _ref$pauseOnHover,
    children = _ref.children,
    _ref$vertical = _ref.vertical,
    vertical = _ref$vertical === void 0 ? false : _ref$vertical,
    _ref$repeat = _ref.repeat,
    repeat = _ref$repeat === void 0 ? 4 : _ref$repeat,
    _ref$speed = _ref.speed,
    speed = _ref$speed === void 0 ? 20 : _ref$speed,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React__default["default"].createElement("div", _extends({}, props, {
    style: {
      display: "flex",
      flexDirection: vertical ? "column" : "row",
      overflow: "hidden",
      padding: "0.5rem",
      position: "relative",
      width: "100%"
    },
    className: "group ".concat(className || "")
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      display: "flex",
      flexDirection: vertical ? "column" : "row",
      gap: "1rem",
      animation: "marquee ".concat(speed, "s linear infinite ").concat(reverse ? "reverse" : "normal"),
      animationPlayState: pauseOnHover ? "paused" : "running"
    },
    onMouseEnter: function onMouseEnter(e) {
      return pauseOnHover && (e.currentTarget.style.animationPlayState = "paused");
    },
    onMouseLeave: function onMouseLeave(e) {
      return pauseOnHover && (e.currentTarget.style.animationPlayState = "running");
    }
  }, Array(repeat).fill(0).map(function (_, i) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      key: i,
      style: {
        display: "flex",
        flexDirection: "row"
      }
    }, children);
  })));
}
function ReviewCard(_ref2) {
  var img = _ref2.img,
    name = _ref2.name,
    username = _ref2.username,
    body = _ref2.body;
  return /*#__PURE__*/React__default["default"].createElement("figure", {
    style: {
      width: "16rem",
      border: "1px solid #e5e7eb",
      borderRadius: "0.75rem",
      overflow: "hidden",
      padding: "1rem",
      backgroundColor: "#fff",
      boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
      margin: "0.5rem",
      cursor: "pointer",
      transition: "background-color 0.2s"
    },
    onMouseEnter: function onMouseEnter(e) {
      return e.currentTarget.style.backgroundColor = "#f9fafb";
    },
    onMouseLeave: function onMouseLeave(e) {
      return e.currentTarget.style.backgroundColor = "#fff";
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "0.5rem"
    }
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    style: {
      borderRadius: "50%",
      width: "32px",
      height: "32px"
    },
    alt: "",
    src: img
  }), /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("figcaption", {
    style: {
      fontSize: "0.875rem",
      fontWeight: "500",
      color: "#1f2937"
    }
  }, name), /*#__PURE__*/React__default["default"].createElement("p", {
    style: {
      fontSize: "0.75rem",
      fontWeight: "500",
      color: "#6b7280"
    }
  }, username))), /*#__PURE__*/React__default["default"].createElement("blockquote", {
    style: {
      marginTop: "0.5rem",
      fontSize: "0.875rem",
      color: "#374151"
    }
  }, body));
}
function Embed1(_ref3) {
  var productid = _ref3.productid,
    _ref3$height = _ref3.height,
    height = _ref3$height === void 0 ? "500px" : _ref3$height,
    _ref3$width = _ref3.width,
    width = _ref3$width === void 0 ? "100%" : _ref3$width;
  var _useState = React.useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    reviews = _useState2[0],
    setReviews = _useState2[1];
  var _useState3 = React.useState(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = React.useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  //   const productid = `${productid}`;

  React.useEffect(function () {
    var fetchReviews = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setLoading(true);
              _context.next = 4;
              return fetch("https://threerd-review-1.onrender.com/getreview/".concat(productid));
            case 4:
              response = _context.sent;
              if (response.ok) {
                _context.next = 7;
                break;
              }
              throw new Error("Failed to fetch reviews");
            case 7:
              _context.next = 9;
              return response.json();
            case 9:
              data = _context.sent;
              setReviews(data.reviews || []);
              _context.next = 17;
              break;
            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              console.error("Error fetching reviews:", _context.t0);
              setError(_context.t0.message);
            case 17:
              _context.prev = 17;
              setLoading(false);
              return _context.finish(17);
            case 20:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 13, 17, 20]]);
      }));
      return function fetchReviews() {
        return _ref4.apply(this, arguments);
      };
    }();
    fetchReviews();
  }, [productid]);
  if (loading) return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      color: "#000"
    }
  }, "Loading reviews...");
  if (error) return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      color: "#f87171"
    }
  }, "Error: ", error);
  if (!reviews.length) return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      color: "#000"
    }
  }, "No reviews found");
  var firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
  var secondRow = reviews.slice(Math.ceil(reviews.length / 2));
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      height: height,
      width: width,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid #e5e7eb",
      borderRadius: "0.75rem",
      overflow: "hidden",
      backgroundColor: "",
      position: "relative"
    }
  }, /*#__PURE__*/React__default["default"].createElement("style", null, "\n        @keyframes marquee {\n          from {\n            transform: translateX(0);\n          }\n          to {\n            transform: translateX(-50%);\n          }\n        }\n      "), /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      width: "100%",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React__default["default"].createElement(Marquee, {
    pauseOnHover: true,
    speed: 40
  }, firstRow.map(function (review) {
    return /*#__PURE__*/React__default["default"].createElement(ReviewCard, {
      key: review._id,
      img: "https://avatar.vercel.sh/".concat(review.customerName),
      name: review.customerName,
      username: review.customerEmail,
      body: review.comment
    });
  })), /*#__PURE__*/React__default["default"].createElement(Marquee, {
    reverse: true,
    pauseOnHover: true,
    speed: 40
  }, secondRow.map(function (review) {
    return /*#__PURE__*/React__default["default"].createElement(ReviewCard, {
      key: review._id,
      img: "https://avatar.vercel.sh/".concat(review.customerName),
      name: review.customerName,
      username: review.customerEmail,
      body: review.comment
    });
  }))));
}

module.exports = Embed1;
