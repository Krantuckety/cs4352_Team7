(function () {
  const p = document.createElement("link").relList;
  if (p && p.supports && p.supports("modulepreload")) return;
  for (const x of document.querySelectorAll('link[rel="modulepreload"]')) v(x);
  new MutationObserver((x) => {
    for (const w of x)
      if (w.type === "childList")
        for (const S of w.addedNodes)
          S.tagName === "LINK" && S.rel === "modulepreload" && v(S);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(x) {
    const w = {};
    return (
      x.integrity && (w.integrity = x.integrity),
      x.referrerPolicy && (w.referrerPolicy = x.referrerPolicy),
      x.crossOrigin === "use-credentials"
        ? (w.credentials = "include")
        : x.crossOrigin === "anonymous"
          ? (w.credentials = "omit")
          : (w.credentials = "same-origin"),
      w
    );
  }
  function v(x) {
    if (x.ep) return;
    x.ep = !0;
    const w = u(x);
    fetch(x.href, w);
  }
})();
var $s = { exports: {} },
  Tr = {},
  Bs = { exports: {} },
  ne = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xu;
function Cf() {
  if (Xu) return ne;
  Xu = 1;
  var a = Symbol.for("react.element"),
    p = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    v = Symbol.for("react.strict_mode"),
    x = Symbol.for("react.profiler"),
    w = Symbol.for("react.provider"),
    S = Symbol.for("react.context"),
    N = Symbol.for("react.forward_ref"),
    P = Symbol.for("react.suspense"),
    I = Symbol.for("react.memo"),
    z = Symbol.for("react.lazy"),
    T = Symbol.iterator;
  function L(m) {
    return m === null || typeof m != "object"
      ? null
      : ((m = (T && m[T]) || m["@@iterator"]),
        typeof m == "function" ? m : null);
  }
  var Q = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Z = Object.assign,
    H = {};
  function M(m, j, W) {
    ((this.props = m),
      (this.context = j),
      (this.refs = H),
      (this.updater = W || Q));
  }
  ((M.prototype.isReactComponent = {}),
    (M.prototype.setState = function (m, j) {
      if (typeof m != "object" && typeof m != "function" && m != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, m, j, "setState");
    }),
    (M.prototype.forceUpdate = function (m) {
      this.updater.enqueueForceUpdate(this, m, "forceUpdate");
    }));
  function ee() {}
  ee.prototype = M.prototype;
  function me(m, j, W) {
    ((this.props = m),
      (this.context = j),
      (this.refs = H),
      (this.updater = W || Q));
  }
  var Ce = (me.prototype = new ee());
  ((Ce.constructor = me), Z(Ce, M.prototype), (Ce.isPureReactComponent = !0));
  var ie = Array.isArray,
    be = Object.prototype.hasOwnProperty,
    he = { current: null },
    de = { key: !0, ref: !0, __self: !0, __source: !0 };
  function B(m, j, W) {
    var X,
      re = {},
      oe = null,
      q = null;
    if (j != null)
      for (X in (j.ref !== void 0 && (q = j.ref),
      j.key !== void 0 && (oe = "" + j.key),
      j))
        be.call(j, X) && !de.hasOwnProperty(X) && (re[X] = j[X]);
    var ae = arguments.length - 2;
    if (ae === 1) re.children = W;
    else if (1 < ae) {
      for (var fe = Array(ae), Ie = 0; Ie < ae; Ie++)
        fe[Ie] = arguments[Ie + 2];
      re.children = fe;
    }
    if (m && m.defaultProps)
      for (X in ((ae = m.defaultProps), ae))
        re[X] === void 0 && (re[X] = ae[X]);
    return {
      $$typeof: a,
      type: m,
      key: oe,
      ref: q,
      props: re,
      _owner: he.current,
    };
  }
  function Ee(m, j) {
    return {
      $$typeof: a,
      type: m.type,
      key: j,
      ref: m.ref,
      props: m.props,
      _owner: m._owner,
    };
  }
  function Ze(m) {
    return typeof m == "object" && m !== null && m.$$typeof === a;
  }
  function Je(m) {
    var j = { "=": "=0", ":": "=2" };
    return (
      "$" +
      m.replace(/[=:]/g, function (W) {
        return j[W];
      })
    );
  }
  var Fe = /\/+/g;
  function $e(m, j) {
    return typeof m == "object" && m !== null && m.key != null
      ? Je("" + m.key)
      : j.toString(36);
  }
  function Ke(m, j, W, X, re) {
    var oe = typeof m;
    (oe === "undefined" || oe === "boolean") && (m = null);
    var q = !1;
    if (m === null) q = !0;
    else
      switch (oe) {
        case "string":
        case "number":
          q = !0;
          break;
        case "object":
          switch (m.$$typeof) {
            case a:
            case p:
              q = !0;
          }
      }
    if (q)
      return (
        (q = m),
        (re = re(q)),
        (m = X === "" ? "." + $e(q, 0) : X),
        ie(re)
          ? ((W = ""),
            m != null && (W = m.replace(Fe, "$&/") + "/"),
            Ke(re, j, W, "", function (Ie) {
              return Ie;
            }))
          : re != null &&
            (Ze(re) &&
              (re = Ee(
                re,
                W +
                  (!re.key || (q && q.key === re.key)
                    ? ""
                    : ("" + re.key).replace(Fe, "$&/") + "/") +
                  m,
              )),
            j.push(re)),
        1
      );
    if (((q = 0), (X = X === "" ? "." : X + ":"), ie(m)))
      for (var ae = 0; ae < m.length; ae++) {
        oe = m[ae];
        var fe = X + $e(oe, ae);
        q += Ke(oe, j, W, fe, re);
      }
    else if (((fe = L(m)), typeof fe == "function"))
      for (m = fe.call(m), ae = 0; !(oe = m.next()).done; )
        ((oe = oe.value), (fe = X + $e(oe, ae++)), (q += Ke(oe, j, W, fe, re)));
    else if (oe === "object")
      throw (
        (j = String(m)),
        Error(
          "Objects are not valid as a React child (found: " +
            (j === "[object Object]"
              ? "object with keys {" + Object.keys(m).join(", ") + "}"
              : j) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return q;
  }
  function De(m, j, W) {
    if (m == null) return m;
    var X = [],
      re = 0;
    return (
      Ke(m, X, "", "", function (oe) {
        return j.call(W, oe, re++);
      }),
      X
    );
  }
  function xe(m) {
    if (m._status === -1) {
      var j = m._result;
      ((j = j()),
        j.then(
          function (W) {
            (m._status === 0 || m._status === -1) &&
              ((m._status = 1), (m._result = W));
          },
          function (W) {
            (m._status === 0 || m._status === -1) &&
              ((m._status = 2), (m._result = W));
          },
        ),
        m._status === -1 && ((m._status = 0), (m._result = j)));
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var ce = { current: null },
    k = { transition: null },
    G = {
      ReactCurrentDispatcher: ce,
      ReactCurrentBatchConfig: k,
      ReactCurrentOwner: he,
    };
  function A() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (ne.Children = {
      map: De,
      forEach: function (m, j, W) {
        De(
          m,
          function () {
            j.apply(this, arguments);
          },
          W,
        );
      },
      count: function (m) {
        var j = 0;
        return (
          De(m, function () {
            j++;
          }),
          j
        );
      },
      toArray: function (m) {
        return (
          De(m, function (j) {
            return j;
          }) || []
        );
      },
      only: function (m) {
        if (!Ze(m))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return m;
      },
    }),
    (ne.Component = M),
    (ne.Fragment = u),
    (ne.Profiler = x),
    (ne.PureComponent = me),
    (ne.StrictMode = v),
    (ne.Suspense = P),
    (ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G),
    (ne.act = A),
    (ne.cloneElement = function (m, j, W) {
      if (m == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            m +
            ".",
        );
      var X = Z({}, m.props),
        re = m.key,
        oe = m.ref,
        q = m._owner;
      if (j != null) {
        if (
          (j.ref !== void 0 && ((oe = j.ref), (q = he.current)),
          j.key !== void 0 && (re = "" + j.key),
          m.type && m.type.defaultProps)
        )
          var ae = m.type.defaultProps;
        for (fe in j)
          be.call(j, fe) &&
            !de.hasOwnProperty(fe) &&
            (X[fe] = j[fe] === void 0 && ae !== void 0 ? ae[fe] : j[fe]);
      }
      var fe = arguments.length - 2;
      if (fe === 1) X.children = W;
      else if (1 < fe) {
        ae = Array(fe);
        for (var Ie = 0; Ie < fe; Ie++) ae[Ie] = arguments[Ie + 2];
        X.children = ae;
      }
      return {
        $$typeof: a,
        type: m.type,
        key: re,
        ref: oe,
        props: X,
        _owner: q,
      };
    }),
    (ne.createContext = function (m) {
      return (
        (m = {
          $$typeof: S,
          _currentValue: m,
          _currentValue2: m,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (m.Provider = { $$typeof: w, _context: m }),
        (m.Consumer = m)
      );
    }),
    (ne.createElement = B),
    (ne.createFactory = function (m) {
      var j = B.bind(null, m);
      return ((j.type = m), j);
    }),
    (ne.createRef = function () {
      return { current: null };
    }),
    (ne.forwardRef = function (m) {
      return { $$typeof: N, render: m };
    }),
    (ne.isValidElement = Ze),
    (ne.lazy = function (m) {
      return { $$typeof: z, _payload: { _status: -1, _result: m }, _init: xe };
    }),
    (ne.memo = function (m, j) {
      return { $$typeof: I, type: m, compare: j === void 0 ? null : j };
    }),
    (ne.startTransition = function (m) {
      var j = k.transition;
      k.transition = {};
      try {
        m();
      } finally {
        k.transition = j;
      }
    }),
    (ne.unstable_act = A),
    (ne.useCallback = function (m, j) {
      return ce.current.useCallback(m, j);
    }),
    (ne.useContext = function (m) {
      return ce.current.useContext(m);
    }),
    (ne.useDebugValue = function () {}),
    (ne.useDeferredValue = function (m) {
      return ce.current.useDeferredValue(m);
    }),
    (ne.useEffect = function (m, j) {
      return ce.current.useEffect(m, j);
    }),
    (ne.useId = function () {
      return ce.current.useId();
    }),
    (ne.useImperativeHandle = function (m, j, W) {
      return ce.current.useImperativeHandle(m, j, W);
    }),
    (ne.useInsertionEffect = function (m, j) {
      return ce.current.useInsertionEffect(m, j);
    }),
    (ne.useLayoutEffect = function (m, j) {
      return ce.current.useLayoutEffect(m, j);
    }),
    (ne.useMemo = function (m, j) {
      return ce.current.useMemo(m, j);
    }),
    (ne.useReducer = function (m, j, W) {
      return ce.current.useReducer(m, j, W);
    }),
    (ne.useRef = function (m) {
      return ce.current.useRef(m);
    }),
    (ne.useState = function (m) {
      return ce.current.useState(m);
    }),
    (ne.useSyncExternalStore = function (m, j, W) {
      return ce.current.useSyncExternalStore(m, j, W);
    }),
    (ne.useTransition = function () {
      return ce.current.useTransition();
    }),
    (ne.version = "18.3.1"),
    ne
  );
}
var Zu;
function Js() {
  return (Zu || ((Zu = 1), (Bs.exports = Cf())), Bs.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ju;
function Ef() {
  if (Ju) return Tr;
  Ju = 1;
  var a = Js(),
    p = Symbol.for("react.element"),
    u = Symbol.for("react.fragment"),
    v = Object.prototype.hasOwnProperty,
    x = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(N, P, I) {
    var z,
      T = {},
      L = null,
      Q = null;
    (I !== void 0 && (L = "" + I),
      P.key !== void 0 && (L = "" + P.key),
      P.ref !== void 0 && (Q = P.ref));
    for (z in P) v.call(P, z) && !w.hasOwnProperty(z) && (T[z] = P[z]);
    if (N && N.defaultProps)
      for (z in ((P = N.defaultProps), P)) T[z] === void 0 && (T[z] = P[z]);
    return {
      $$typeof: p,
      type: N,
      key: L,
      ref: Q,
      props: T,
      _owner: x.current,
    };
  }
  return ((Tr.Fragment = u), (Tr.jsx = S), (Tr.jsxs = S), Tr);
}
var qu;
function _f() {
  return (qu || ((qu = 1), ($s.exports = Ef())), $s.exports);
}
var i = _f(),
  Wl = {},
  Ws = { exports: {} },
  lt = {},
  Hs = { exports: {} },
  Qs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ec;
function Pf() {
  return (
    ec ||
      ((ec = 1),
      (function (a) {
        function p(k, G) {
          var A = k.length;
          k.push(G);
          e: for (; 0 < A; ) {
            var m = (A - 1) >>> 1,
              j = k[m];
            if (0 < x(j, G)) ((k[m] = G), (k[A] = j), (A = m));
            else break e;
          }
        }
        function u(k) {
          return k.length === 0 ? null : k[0];
        }
        function v(k) {
          if (k.length === 0) return null;
          var G = k[0],
            A = k.pop();
          if (A !== G) {
            k[0] = A;
            e: for (var m = 0, j = k.length, W = j >>> 1; m < W; ) {
              var X = 2 * (m + 1) - 1,
                re = k[X],
                oe = X + 1,
                q = k[oe];
              if (0 > x(re, A))
                oe < j && 0 > x(q, re)
                  ? ((k[m] = q), (k[oe] = A), (m = oe))
                  : ((k[m] = re), (k[X] = A), (m = X));
              else if (oe < j && 0 > x(q, A))
                ((k[m] = q), (k[oe] = A), (m = oe));
              else break e;
            }
          }
          return G;
        }
        function x(k, G) {
          var A = k.sortIndex - G.sortIndex;
          return A !== 0 ? A : k.id - G.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var w = performance;
          a.unstable_now = function () {
            return w.now();
          };
        } else {
          var S = Date,
            N = S.now();
          a.unstable_now = function () {
            return S.now() - N;
          };
        }
        var P = [],
          I = [],
          z = 1,
          T = null,
          L = 3,
          Q = !1,
          Z = !1,
          H = !1,
          M = typeof setTimeout == "function" ? setTimeout : null,
          ee = typeof clearTimeout == "function" ? clearTimeout : null,
          me = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function Ce(k) {
          for (var G = u(I); G !== null; ) {
            if (G.callback === null) v(I);
            else if (G.startTime <= k)
              (v(I), (G.sortIndex = G.expirationTime), p(P, G));
            else break;
            G = u(I);
          }
        }
        function ie(k) {
          if (((H = !1), Ce(k), !Z))
            if (u(P) !== null) ((Z = !0), xe(be));
            else {
              var G = u(I);
              G !== null && ce(ie, G.startTime - k);
            }
        }
        function be(k, G) {
          ((Z = !1), H && ((H = !1), ee(B), (B = -1)), (Q = !0));
          var A = L;
          try {
            for (
              Ce(G), T = u(P);
              T !== null && (!(T.expirationTime > G) || (k && !Je()));

            ) {
              var m = T.callback;
              if (typeof m == "function") {
                ((T.callback = null), (L = T.priorityLevel));
                var j = m(T.expirationTime <= G);
                ((G = a.unstable_now()),
                  typeof j == "function"
                    ? (T.callback = j)
                    : T === u(P) && v(P),
                  Ce(G));
              } else v(P);
              T = u(P);
            }
            if (T !== null) var W = !0;
            else {
              var X = u(I);
              (X !== null && ce(ie, X.startTime - G), (W = !1));
            }
            return W;
          } finally {
            ((T = null), (L = A), (Q = !1));
          }
        }
        var he = !1,
          de = null,
          B = -1,
          Ee = 5,
          Ze = -1;
        function Je() {
          return !(a.unstable_now() - Ze < Ee);
        }
        function Fe() {
          if (de !== null) {
            var k = a.unstable_now();
            Ze = k;
            var G = !0;
            try {
              G = de(!0, k);
            } finally {
              G ? $e() : ((he = !1), (de = null));
            }
          } else he = !1;
        }
        var $e;
        if (typeof me == "function")
          $e = function () {
            me(Fe);
          };
        else if (typeof MessageChannel < "u") {
          var Ke = new MessageChannel(),
            De = Ke.port2;
          ((Ke.port1.onmessage = Fe),
            ($e = function () {
              De.postMessage(null);
            }));
        } else
          $e = function () {
            M(Fe, 0);
          };
        function xe(k) {
          ((de = k), he || ((he = !0), $e()));
        }
        function ce(k, G) {
          B = M(function () {
            k(a.unstable_now());
          }, G);
        }
        ((a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (k) {
            k.callback = null;
          }),
          (a.unstable_continueExecution = function () {
            Z || Q || ((Z = !0), xe(be));
          }),
          (a.unstable_forceFrameRate = function (k) {
            0 > k || 125 < k
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Ee = 0 < k ? Math.floor(1e3 / k) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return L;
          }),
          (a.unstable_getFirstCallbackNode = function () {
            return u(P);
          }),
          (a.unstable_next = function (k) {
            switch (L) {
              case 1:
              case 2:
              case 3:
                var G = 3;
                break;
              default:
                G = L;
            }
            var A = L;
            L = G;
            try {
              return k();
            } finally {
              L = A;
            }
          }),
          (a.unstable_pauseExecution = function () {}),
          (a.unstable_requestPaint = function () {}),
          (a.unstable_runWithPriority = function (k, G) {
            switch (k) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                k = 3;
            }
            var A = L;
            L = k;
            try {
              return G();
            } finally {
              L = A;
            }
          }),
          (a.unstable_scheduleCallback = function (k, G, A) {
            var m = a.unstable_now();
            switch (
              (typeof A == "object" && A !== null
                ? ((A = A.delay),
                  (A = typeof A == "number" && 0 < A ? m + A : m))
                : (A = m),
              k)
            ) {
              case 1:
                var j = -1;
                break;
              case 2:
                j = 250;
                break;
              case 5:
                j = 1073741823;
                break;
              case 4:
                j = 1e4;
                break;
              default:
                j = 5e3;
            }
            return (
              (j = A + j),
              (k = {
                id: z++,
                callback: G,
                priorityLevel: k,
                startTime: A,
                expirationTime: j,
                sortIndex: -1,
              }),
              A > m
                ? ((k.sortIndex = A),
                  p(I, k),
                  u(P) === null &&
                    k === u(I) &&
                    (H ? (ee(B), (B = -1)) : (H = !0), ce(ie, A - m)))
                : ((k.sortIndex = j), p(P, k), Z || Q || ((Z = !0), xe(be))),
              k
            );
          }),
          (a.unstable_shouldYield = Je),
          (a.unstable_wrapCallback = function (k) {
            var G = L;
            return function () {
              var A = L;
              L = G;
              try {
                return k.apply(this, arguments);
              } finally {
                L = A;
              }
            };
          }));
      })(Qs)),
    Qs
  );
}
var tc;
function bf() {
  return (tc || ((tc = 1), (Hs.exports = Pf())), Hs.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nc;
function zf() {
  if (nc) return lt;
  nc = 1;
  var a = Js(),
    p = bf();
  function u(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var v = new Set(),
    x = {};
  function w(e, t) {
    (S(e, t), S(e + "Capture", t));
  }
  function S(e, t) {
    for (x[e] = t, e = 0; e < t.length; e++) v.add(t[e]);
  }
  var N = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    P = Object.prototype.hasOwnProperty,
    I =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    z = {},
    T = {};
  function L(e) {
    return P.call(T, e)
      ? !0
      : P.call(z, e)
        ? !1
        : I.test(e)
          ? (T[e] = !0)
          : ((z[e] = !0), !1);
  }
  function Q(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function Z(e, t, n, r) {
    if (t === null || typeof t > "u" || Q(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function H(e, t, n, r, l, o, s) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = s));
  }
  var M = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      M[e] = new H(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      M[t] = new H(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        M[e] = new H(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      M[e] = new H(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        M[e] = new H(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      M[e] = new H(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      M[e] = new H(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      M[e] = new H(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      M[e] = new H(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var ee = /[\-:]([a-z])/g;
  function me(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(ee, me);
      M[t] = new H(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(ee, me);
        M[t] = new H(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(ee, me);
      M[t] = new H(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      M[e] = new H(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (M.xlinkHref = new H(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      M[e] = new H(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function Ce(e, t, n, r) {
    var l = M.hasOwnProperty(t) ? M[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (Z(t, n, l, r) && (n = null),
      r || l === null
        ? L(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ie = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    be = Symbol.for("react.element"),
    he = Symbol.for("react.portal"),
    de = Symbol.for("react.fragment"),
    B = Symbol.for("react.strict_mode"),
    Ee = Symbol.for("react.profiler"),
    Ze = Symbol.for("react.provider"),
    Je = Symbol.for("react.context"),
    Fe = Symbol.for("react.forward_ref"),
    $e = Symbol.for("react.suspense"),
    Ke = Symbol.for("react.suspense_list"),
    De = Symbol.for("react.memo"),
    xe = Symbol.for("react.lazy"),
    ce = Symbol.for("react.offscreen"),
    k = Symbol.iterator;
  function G(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (k && e[k]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var A = Object.assign,
    m;
  function j(e) {
    if (m === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        m = (t && t[1]) || "";
      }
    return (
      `
` +
      m +
      e
    );
  }
  var W = !1;
  function X(e, t) {
    if (!e || W) return "";
    W = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (y) {
            var r = y;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (y) {
            r = y;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (y) {
          r = y;
        }
        e();
      }
    } catch (y) {
      if (y && r && typeof y.stack == "string") {
        for (
          var l = y.stack.split(`
`),
            o = r.stack.split(`
`),
            s = l.length - 1,
            c = o.length - 1;
          1 <= s && 0 <= c && l[s] !== o[c];

        )
          c--;
        for (; 1 <= s && 0 <= c; s--, c--)
          if (l[s] !== o[c]) {
            if (s !== 1 || c !== 1)
              do
                if ((s--, c--, 0 > c || l[s] !== o[c])) {
                  var d =
                    `
` + l[s].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      d.includes("<anonymous>") &&
                      (d = d.replace("<anonymous>", e.displayName)),
                    d
                  );
                }
              while (1 <= s && 0 <= c);
            break;
          }
      }
    } finally {
      ((W = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? j(e) : "";
  }
  function re(e) {
    switch (e.tag) {
      case 5:
        return j(e.type);
      case 16:
        return j("Lazy");
      case 13:
        return j("Suspense");
      case 19:
        return j("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = X(e.type, !1)), e);
      case 11:
        return ((e = X(e.type.render, !1)), e);
      case 1:
        return ((e = X(e.type, !0)), e);
      default:
        return "";
    }
  }
  function oe(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case de:
        return "Fragment";
      case he:
        return "Portal";
      case Ee:
        return "Profiler";
      case B:
        return "StrictMode";
      case $e:
        return "Suspense";
      case Ke:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Je:
          return (e.displayName || "Context") + ".Consumer";
        case Ze:
          return (e._context.displayName || "Context") + ".Provider";
        case Fe:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case De:
          return (
            (t = e.displayName || null),
            t !== null ? t : oe(e.type) || "Memo"
          );
        case xe:
          ((t = e._payload), (e = e._init));
          try {
            return oe(e(t));
          } catch {}
      }
    return null;
  }
  function q(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return oe(t);
      case 8:
        return t === B ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function ae(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function fe(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ie(e) {
    var t = fe(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (s) {
            ((r = "" + s), o.call(this, s));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (s) {
            r = "" + s;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function At(e) {
    e._valueTracker || (e._valueTracker = Ie(e));
  }
  function rn(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = fe(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Mr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Kl(e, t) {
    var n = t.checked;
    return A({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function ri(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = ae(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      }));
  }
  function li(e, t) {
    ((t = t.checked), t != null && Ce(e, "checked", t, !1));
  }
  function Yl(e, t) {
    li(e, t);
    var n = ae(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? Xl(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Xl(e, t.type, ae(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked));
  }
  function oi(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      ((t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n));
  }
  function Xl(e, t, n) {
    (t !== "number" || Mr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Gn = Array.isArray;
  function xn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + ae(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Zl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(u(91));
    return A({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function si(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(u(92));
        if (Gn(n)) {
          if (1 < n.length) throw Error(u(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: ae(n) };
  }
  function ii(e, t) {
    var n = ae(t.value),
      r = ae(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function ai(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function ui(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Jl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? ui(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Ar,
    ci = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Ar = Ar || document.createElement("div"),
            Ar.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Ar.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Kn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Yn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Pc = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Yn).forEach(function (e) {
    Pc.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Yn[t] = Yn[e]));
    });
  });
  function di(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Yn.hasOwnProperty(e) && Yn[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function fi(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = di(n, t[n], r);
        (n === "float" && (n = "cssFloat"),
          r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var bc = A(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function ql(e, t) {
    if (t) {
      if (bc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(u(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(u(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(u(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(u(62));
    }
  }
  function eo(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var to = null;
  function no(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ro = null,
    wn = null,
    kn = null;
  function pi(e) {
    if ((e = vr(e))) {
      if (typeof ro != "function") throw Error(u(280));
      var t = e.stateNode;
      t && ((t = ol(t)), ro(e.stateNode, e.type, t));
    }
  }
  function mi(e) {
    wn ? (kn ? kn.push(e) : (kn = [e])) : (wn = e);
  }
  function hi() {
    if (wn) {
      var e = wn,
        t = kn;
      if (((kn = wn = null), pi(e), t)) for (e = 0; e < t.length; e++) pi(t[e]);
    }
  }
  function gi(e, t) {
    return e(t);
  }
  function vi() {}
  var lo = !1;
  function yi(e, t, n) {
    if (lo) return e(t, n);
    lo = !0;
    try {
      return gi(e, t, n);
    } finally {
      ((lo = !1), (wn !== null || kn !== null) && (vi(), hi()));
    }
  }
  function Xn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ol(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(u(231, t, typeof n));
    return n;
  }
  var oo = !1;
  if (N)
    try {
      var Zn = {};
      (Object.defineProperty(Zn, "passive", {
        get: function () {
          oo = !0;
        },
      }),
        window.addEventListener("test", Zn, Zn),
        window.removeEventListener("test", Zn, Zn));
    } catch {
      oo = !1;
    }
  function zc(e, t, n, r, l, o, s, c, d) {
    var y = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, y);
    } catch (E) {
      this.onError(E);
    }
  }
  var Jn = !1,
    Or = null,
    Fr = !1,
    so = null,
    Lc = {
      onError: function (e) {
        ((Jn = !0), (Or = e));
      },
    };
  function Tc(e, t, n, r, l, o, s, c, d) {
    ((Jn = !1), (Or = null), zc.apply(Lc, arguments));
  }
  function Rc(e, t, n, r, l, o, s, c, d) {
    if ((Tc.apply(this, arguments), Jn)) {
      if (Jn) {
        var y = Or;
        ((Jn = !1), (Or = null));
      } else throw Error(u(198));
      Fr || ((Fr = !0), (so = y));
    }
  }
  function ln(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function xi(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function wi(e) {
    if (ln(e) !== e) throw Error(u(188));
  }
  function Ic(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = ln(e)), t === null)) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return (wi(l), e);
          if (o === r) return (wi(l), t);
          o = o.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== r.return) ((n = l), (r = o));
      else {
        for (var s = !1, c = l.child; c; ) {
          if (c === n) {
            ((s = !0), (n = l), (r = o));
            break;
          }
          if (c === r) {
            ((s = !0), (r = l), (n = o));
            break;
          }
          c = c.sibling;
        }
        if (!s) {
          for (c = o.child; c; ) {
            if (c === n) {
              ((s = !0), (n = o), (r = l));
              break;
            }
            if (c === r) {
              ((s = !0), (r = o), (n = l));
              break;
            }
            c = c.sibling;
          }
          if (!s) throw Error(u(189));
        }
      }
      if (n.alternate !== r) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? e : t;
  }
  function ki(e) {
    return ((e = Ic(e)), e !== null ? Si(e) : null);
  }
  function Si(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Si(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ni = p.unstable_scheduleCallback,
    ji = p.unstable_cancelCallback,
    Mc = p.unstable_shouldYield,
    Ac = p.unstable_requestPaint,
    _e = p.unstable_now,
    Oc = p.unstable_getCurrentPriorityLevel,
    io = p.unstable_ImmediatePriority,
    Ci = p.unstable_UserBlockingPriority,
    Dr = p.unstable_NormalPriority,
    Fc = p.unstable_LowPriority,
    Ei = p.unstable_IdlePriority,
    Ur = null,
    St = null;
  function Dc(e) {
    if (St && typeof St.onCommitFiberRoot == "function")
      try {
        St.onCommitFiberRoot(Ur, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var ht = Math.clz32 ? Math.clz32 : $c,
    Uc = Math.log,
    Vc = Math.LN2;
  function $c(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Uc(e) / Vc) | 0)) | 0);
  }
  var Vr = 64,
    $r = 4194304;
  function qn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Br(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      s = n & 268435455;
    if (s !== 0) {
      var c = s & ~l;
      c !== 0 ? (r = qn(c)) : ((o &= s), o !== 0 && (r = qn(o)));
    } else ((s = n & ~l), s !== 0 ? (r = qn(s)) : o !== 0 && (r = qn(o)));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        ((n = 31 - ht(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function Bc(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Wc(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;

    ) {
      var s = 31 - ht(o),
        c = 1 << s,
        d = l[s];
      (d === -1
        ? ((c & n) === 0 || (c & r) !== 0) && (l[s] = Bc(c, t))
        : d <= t && (e.expiredLanes |= c),
        (o &= ~c));
    }
  }
  function ao(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function _i() {
    var e = Vr;
    return ((Vr <<= 1), (Vr & 4194240) === 0 && (Vr = 64), e);
  }
  function uo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function er(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - ht(t)),
      (e[t] = n));
  }
  function Hc(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - ht(n),
        o = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o));
    }
  }
  function co(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - ht(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var pe = 0;
  function Pi(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var bi,
    fo,
    zi,
    Li,
    Ti,
    po = !1,
    Wr = [],
    Ot = null,
    Ft = null,
    Dt = null,
    tr = new Map(),
    nr = new Map(),
    Ut = [],
    Qc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function Ri(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ot = null;
        break;
      case "dragenter":
      case "dragleave":
        Ft = null;
        break;
      case "mouseover":
      case "mouseout":
        Dt = null;
        break;
      case "pointerover":
      case "pointerout":
        tr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        nr.delete(t.pointerId);
    }
  }
  function rr(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = vr(t)), t !== null && fo(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Gc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((Ot = rr(Ot, e, t, n, r, l)), !0);
      case "dragenter":
        return ((Ft = rr(Ft, e, t, n, r, l)), !0);
      case "mouseover":
        return ((Dt = rr(Dt, e, t, n, r, l)), !0);
      case "pointerover":
        var o = l.pointerId;
        return (tr.set(o, rr(tr.get(o) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return (
          (o = l.pointerId),
          nr.set(o, rr(nr.get(o) || null, e, t, n, r, l)),
          !0
        );
    }
    return !1;
  }
  function Ii(e) {
    var t = on(e.target);
    if (t !== null) {
      var n = ln(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = xi(n)), t !== null)) {
            ((e.blockedOn = t),
              Ti(e.priority, function () {
                zi(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Hr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ho(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((to = r), n.target.dispatchEvent(r), (to = null));
      } else return ((t = vr(n)), t !== null && fo(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Mi(e, t, n) {
    Hr(e) && n.delete(t);
  }
  function Kc() {
    ((po = !1),
      Ot !== null && Hr(Ot) && (Ot = null),
      Ft !== null && Hr(Ft) && (Ft = null),
      Dt !== null && Hr(Dt) && (Dt = null),
      tr.forEach(Mi),
      nr.forEach(Mi));
  }
  function lr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      po ||
        ((po = !0),
        p.unstable_scheduleCallback(p.unstable_NormalPriority, Kc)));
  }
  function or(e) {
    function t(l) {
      return lr(l, e);
    }
    if (0 < Wr.length) {
      lr(Wr[0], e);
      for (var n = 1; n < Wr.length; n++) {
        var r = Wr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Ot !== null && lr(Ot, e),
        Ft !== null && lr(Ft, e),
        Dt !== null && lr(Dt, e),
        tr.forEach(t),
        nr.forEach(t),
        n = 0;
      n < Ut.length;
      n++
    )
      ((r = Ut[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Ut.length && ((n = Ut[0]), n.blockedOn === null); )
      (Ii(n), n.blockedOn === null && Ut.shift());
  }
  var Sn = ie.ReactCurrentBatchConfig,
    Qr = !0;
  function Yc(e, t, n, r) {
    var l = pe,
      o = Sn.transition;
    Sn.transition = null;
    try {
      ((pe = 1), mo(e, t, n, r));
    } finally {
      ((pe = l), (Sn.transition = o));
    }
  }
  function Xc(e, t, n, r) {
    var l = pe,
      o = Sn.transition;
    Sn.transition = null;
    try {
      ((pe = 4), mo(e, t, n, r));
    } finally {
      ((pe = l), (Sn.transition = o));
    }
  }
  function mo(e, t, n, r) {
    if (Qr) {
      var l = ho(e, t, n, r);
      if (l === null) (To(e, t, r, Gr, n), Ri(e, r));
      else if (Gc(l, e, t, n, r)) r.stopPropagation();
      else if ((Ri(e, r), t & 4 && -1 < Qc.indexOf(e))) {
        for (; l !== null; ) {
          var o = vr(l);
          if (
            (o !== null && bi(o),
            (o = ho(e, t, n, r)),
            o === null && To(e, t, r, Gr, n),
            o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else To(e, t, r, null, n);
    }
  }
  var Gr = null;
  function ho(e, t, n, r) {
    if (((Gr = null), (e = no(r)), (e = on(e)), e !== null))
      if (((t = ln(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = xi(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Gr = e), null);
  }
  function Ai(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Oc()) {
          case io:
            return 1;
          case Ci:
            return 4;
          case Dr:
          case Fc:
            return 16;
          case Ei:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Vt = null,
    go = null,
    Kr = null;
  function Oi() {
    if (Kr) return Kr;
    var e,
      t = go,
      n = t.length,
      r,
      l = "value" in Vt ? Vt.value : Vt.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === l[o - r]; r++);
    return (Kr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Yr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Xr() {
    return !0;
  }
  function Fi() {
    return !1;
  }
  function ot(e) {
    function t(n, r, l, o, s) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = s),
        (this.currentTarget = null));
      for (var c in e)
        e.hasOwnProperty(c) && ((n = e[c]), (this[c] = n ? n(o) : o[c]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Xr
          : Fi),
        (this.isPropagationStopped = Fi),
        this
      );
    }
    return (
      A(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Xr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Xr));
        },
        persist: function () {},
        isPersistent: Xr,
      }),
      t
    );
  }
  var Nn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    vo = ot(Nn),
    sr = A({}, Nn, { view: 0, detail: 0 }),
    Zc = ot(sr),
    yo,
    xo,
    ir,
    Zr = A({}, sr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ko,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== ir &&
              (ir && e.type === "mousemove"
                ? ((yo = e.screenX - ir.screenX), (xo = e.screenY - ir.screenY))
                : (xo = yo = 0),
              (ir = e)),
            yo);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : xo;
      },
    }),
    Di = ot(Zr),
    Jc = A({}, Zr, { dataTransfer: 0 }),
    qc = ot(Jc),
    ed = A({}, sr, { relatedTarget: 0 }),
    wo = ot(ed),
    td = A({}, Nn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    nd = ot(td),
    rd = A({}, Nn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    ld = ot(rd),
    od = A({}, Nn, { data: 0 }),
    Ui = ot(od),
    sd = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    id = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    ad = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function ud(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = ad[e])
        ? !!t[e]
        : !1;
  }
  function ko() {
    return ud;
  }
  var cd = A({}, sr, {
      key: function (e) {
        if (e.key) {
          var t = sd[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Yr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? id[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ko,
      charCode: function (e) {
        return e.type === "keypress" ? Yr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Yr(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    dd = ot(cd),
    fd = A({}, Zr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Vi = ot(fd),
    pd = A({}, sr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ko,
    }),
    md = ot(pd),
    hd = A({}, Nn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    gd = ot(hd),
    vd = A({}, Zr, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    yd = ot(vd),
    xd = [9, 13, 27, 32],
    So = N && "CompositionEvent" in window,
    ar = null;
  N && "documentMode" in document && (ar = document.documentMode);
  var wd = N && "TextEvent" in window && !ar,
    $i = N && (!So || (ar && 8 < ar && 11 >= ar)),
    Bi = " ",
    Wi = !1;
  function Hi(e, t) {
    switch (e) {
      case "keyup":
        return xd.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Qi(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var jn = !1;
  function kd(e, t) {
    switch (e) {
      case "compositionend":
        return Qi(t);
      case "keypress":
        return t.which !== 32 ? null : ((Wi = !0), Bi);
      case "textInput":
        return ((e = t.data), e === Bi && Wi ? null : e);
      default:
        return null;
    }
  }
  function Sd(e, t) {
    if (jn)
      return e === "compositionend" || (!So && Hi(e, t))
        ? ((e = Oi()), (Kr = go = Vt = null), (jn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return $i && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Nd = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Gi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Nd[e.type] : t === "textarea";
  }
  function Ki(e, t, n, r) {
    (mi(r),
      (t = nl(t, "onChange")),
      0 < t.length &&
        ((n = new vo("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t })));
  }
  var ur = null,
    cr = null;
  function jd(e) {
    fa(e, 0);
  }
  function Jr(e) {
    var t = bn(e);
    if (rn(t)) return e;
  }
  function Cd(e, t) {
    if (e === "change") return t;
  }
  var Yi = !1;
  if (N) {
    var No;
    if (N) {
      var jo = "oninput" in document;
      if (!jo) {
        var Xi = document.createElement("div");
        (Xi.setAttribute("oninput", "return;"),
          (jo = typeof Xi.oninput == "function"));
      }
      No = jo;
    } else No = !1;
    Yi = No && (!document.documentMode || 9 < document.documentMode);
  }
  function Zi() {
    ur && (ur.detachEvent("onpropertychange", Ji), (cr = ur = null));
  }
  function Ji(e) {
    if (e.propertyName === "value" && Jr(cr)) {
      var t = [];
      (Ki(t, cr, e, no(e)), yi(jd, t));
    }
  }
  function Ed(e, t, n) {
    e === "focusin"
      ? (Zi(), (ur = t), (cr = n), ur.attachEvent("onpropertychange", Ji))
      : e === "focusout" && Zi();
  }
  function _d(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Jr(cr);
  }
  function Pd(e, t) {
    if (e === "click") return Jr(t);
  }
  function bd(e, t) {
    if (e === "input" || e === "change") return Jr(t);
  }
  function zd(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var gt = typeof Object.is == "function" ? Object.is : zd;
  function dr(e, t) {
    if (gt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!P.call(t, l) || !gt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function qi(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ea(e, t) {
    var n = qi(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = qi(n);
    }
  }
  function ta(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? ta(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function na() {
    for (var e = window, t = Mr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Mr(e.document);
    }
    return t;
  }
  function Co(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Ld(e) {
    var t = na(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      ta(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && Co(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          ((n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            o = Math.min(r.start, l);
          ((r = r.end === void 0 ? o : Math.min(r.end, l)),
            !e.extend && o > r && ((l = r), (r = o), (o = l)),
            (l = ea(n, o)));
          var s = ea(n, r);
          l &&
            s &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== s.node ||
              e.focusOffset !== s.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(s.node, s.offset))
              : (t.setEnd(s.node, s.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var Td = N && "documentMode" in document && 11 >= document.documentMode,
    Cn = null,
    Eo = null,
    fr = null,
    _o = !1;
  function ra(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    _o ||
      Cn == null ||
      Cn !== Mr(r) ||
      ((r = Cn),
      "selectionStart" in r && Co(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (fr && dr(fr, r)) ||
        ((fr = r),
        (r = nl(Eo, "onSelect")),
        0 < r.length &&
          ((t = new vo("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Cn))));
  }
  function qr(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var En = {
      animationend: qr("Animation", "AnimationEnd"),
      animationiteration: qr("Animation", "AnimationIteration"),
      animationstart: qr("Animation", "AnimationStart"),
      transitionend: qr("Transition", "TransitionEnd"),
    },
    Po = {},
    la = {};
  N &&
    ((la = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete En.animationend.animation,
      delete En.animationiteration.animation,
      delete En.animationstart.animation),
    "TransitionEvent" in window || delete En.transitionend.transition);
  function el(e) {
    if (Po[e]) return Po[e];
    if (!En[e]) return e;
    var t = En[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in la) return (Po[e] = t[n]);
    return e;
  }
  var oa = el("animationend"),
    sa = el("animationiteration"),
    ia = el("animationstart"),
    aa = el("transitionend"),
    ua = new Map(),
    ca =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function $t(e, t) {
    (ua.set(e, t), w(t, [e]));
  }
  for (var bo = 0; bo < ca.length; bo++) {
    var zo = ca[bo],
      Rd = zo.toLowerCase(),
      Id = zo[0].toUpperCase() + zo.slice(1);
    $t(Rd, "on" + Id);
  }
  ($t(oa, "onAnimationEnd"),
    $t(sa, "onAnimationIteration"),
    $t(ia, "onAnimationStart"),
    $t("dblclick", "onDoubleClick"),
    $t("focusin", "onFocus"),
    $t("focusout", "onBlur"),
    $t(aa, "onTransitionEnd"),
    S("onMouseEnter", ["mouseout", "mouseover"]),
    S("onMouseLeave", ["mouseout", "mouseover"]),
    S("onPointerEnter", ["pointerout", "pointerover"]),
    S("onPointerLeave", ["pointerout", "pointerover"]),
    w(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    w(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    w("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    w(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    w(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    w(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var pr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Md = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(pr),
    );
  function da(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), Rc(r, t, void 0, e), (e.currentTarget = null));
  }
  function fa(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var s = r.length - 1; 0 <= s; s--) {
            var c = r[s],
              d = c.instance,
              y = c.currentTarget;
            if (((c = c.listener), d !== o && l.isPropagationStopped()))
              break e;
            (da(l, c, y), (o = d));
          }
        else
          for (s = 0; s < r.length; s++) {
            if (
              ((c = r[s]),
              (d = c.instance),
              (y = c.currentTarget),
              (c = c.listener),
              d !== o && l.isPropagationStopped())
            )
              break e;
            (da(l, c, y), (o = d));
          }
      }
    }
    if (Fr) throw ((e = so), (Fr = !1), (so = null), e);
  }
  function ve(e, t) {
    var n = t[Fo];
    n === void 0 && (n = t[Fo] = new Set());
    var r = e + "__bubble";
    n.has(r) || (pa(t, e, 2, !1), n.add(r));
  }
  function Lo(e, t, n) {
    var r = 0;
    (t && (r |= 4), pa(n, e, r, t));
  }
  var tl = "_reactListening" + Math.random().toString(36).slice(2);
  function mr(e) {
    if (!e[tl]) {
      ((e[tl] = !0),
        v.forEach(function (n) {
          n !== "selectionchange" && (Md.has(n) || Lo(n, !1, e), Lo(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[tl] || ((t[tl] = !0), Lo("selectionchange", !1, t));
    }
  }
  function pa(e, t, n, r) {
    switch (Ai(t)) {
      case 1:
        var l = Yc;
        break;
      case 4:
        l = Xc;
        break;
      default:
        l = mo;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !oo ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function To(e, t, n, r, l) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
          var c = r.stateNode.containerInfo;
          if (c === l || (c.nodeType === 8 && c.parentNode === l)) break;
          if (s === 4)
            for (s = r.return; s !== null; ) {
              var d = s.tag;
              if (
                (d === 3 || d === 4) &&
                ((d = s.stateNode.containerInfo),
                d === l || (d.nodeType === 8 && d.parentNode === l))
              )
                return;
              s = s.return;
            }
          for (; c !== null; ) {
            if (((s = on(c)), s === null)) return;
            if (((d = s.tag), d === 5 || d === 6)) {
              r = o = s;
              continue e;
            }
            c = c.parentNode;
          }
        }
        r = r.return;
      }
    yi(function () {
      var y = o,
        E = no(n),
        _ = [];
      e: {
        var C = ua.get(e);
        if (C !== void 0) {
          var R = vo,
            F = e;
          switch (e) {
            case "keypress":
              if (Yr(n) === 0) break e;
            case "keydown":
            case "keyup":
              R = dd;
              break;
            case "focusin":
              ((F = "focus"), (R = wo));
              break;
            case "focusout":
              ((F = "blur"), (R = wo));
              break;
            case "beforeblur":
            case "afterblur":
              R = wo;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              R = Di;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              R = qc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              R = md;
              break;
            case oa:
            case sa:
            case ia:
              R = nd;
              break;
            case aa:
              R = gd;
              break;
            case "scroll":
              R = Zc;
              break;
            case "wheel":
              R = yd;
              break;
            case "copy":
            case "cut":
            case "paste":
              R = ld;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              R = Vi;
          }
          var V = (t & 4) !== 0,
            Pe = !V && e === "scroll",
            h = V ? (C !== null ? C + "Capture" : null) : C;
          V = [];
          for (var f = y, g; f !== null; ) {
            g = f;
            var b = g.stateNode;
            if (
              (g.tag === 5 &&
                b !== null &&
                ((g = b),
                h !== null &&
                  ((b = Xn(f, h)), b != null && V.push(hr(f, b, g)))),
              Pe)
            )
              break;
            f = f.return;
          }
          0 < V.length &&
            ((C = new R(C, F, null, n, E)), _.push({ event: C, listeners: V }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((C = e === "mouseover" || e === "pointerover"),
            (R = e === "mouseout" || e === "pointerout"),
            C &&
              n !== to &&
              (F = n.relatedTarget || n.fromElement) &&
              (on(F) || F[_t]))
          )
            break e;
          if (
            (R || C) &&
            ((C =
              E.window === E
                ? E
                : (C = E.ownerDocument)
                  ? C.defaultView || C.parentWindow
                  : window),
            R
              ? ((F = n.relatedTarget || n.toElement),
                (R = y),
                (F = F ? on(F) : null),
                F !== null &&
                  ((Pe = ln(F)), F !== Pe || (F.tag !== 5 && F.tag !== 6)) &&
                  (F = null))
              : ((R = null), (F = y)),
            R !== F)
          ) {
            if (
              ((V = Di),
              (b = "onMouseLeave"),
              (h = "onMouseEnter"),
              (f = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((V = Vi),
                (b = "onPointerLeave"),
                (h = "onPointerEnter"),
                (f = "pointer")),
              (Pe = R == null ? C : bn(R)),
              (g = F == null ? C : bn(F)),
              (C = new V(b, f + "leave", R, n, E)),
              (C.target = Pe),
              (C.relatedTarget = g),
              (b = null),
              on(E) === y &&
                ((V = new V(h, f + "enter", F, n, E)),
                (V.target = g),
                (V.relatedTarget = Pe),
                (b = V)),
              (Pe = b),
              R && F)
            )
              t: {
                for (V = R, h = F, f = 0, g = V; g; g = _n(g)) f++;
                for (g = 0, b = h; b; b = _n(b)) g++;
                for (; 0 < f - g; ) ((V = _n(V)), f--);
                for (; 0 < g - f; ) ((h = _n(h)), g--);
                for (; f--; ) {
                  if (V === h || (h !== null && V === h.alternate)) break t;
                  ((V = _n(V)), (h = _n(h)));
                }
                V = null;
              }
            else V = null;
            (R !== null && ma(_, C, R, V, !1),
              F !== null && Pe !== null && ma(_, Pe, F, V, !0));
          }
        }
        e: {
          if (
            ((C = y ? bn(y) : window),
            (R = C.nodeName && C.nodeName.toLowerCase()),
            R === "select" || (R === "input" && C.type === "file"))
          )
            var $ = Cd;
          else if (Gi(C))
            if (Yi) $ = bd;
            else {
              $ = _d;
              var K = Ed;
            }
          else
            (R = C.nodeName) &&
              R.toLowerCase() === "input" &&
              (C.type === "checkbox" || C.type === "radio") &&
              ($ = Pd);
          if ($ && ($ = $(e, y))) {
            Ki(_, $, n, E);
            break e;
          }
          (K && K(e, C, y),
            e === "focusout" &&
              (K = C._wrapperState) &&
              K.controlled &&
              C.type === "number" &&
              Xl(C, "number", C.value));
        }
        switch (((K = y ? bn(y) : window), e)) {
          case "focusin":
            (Gi(K) || K.contentEditable === "true") &&
              ((Cn = K), (Eo = y), (fr = null));
            break;
          case "focusout":
            fr = Eo = Cn = null;
            break;
          case "mousedown":
            _o = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((_o = !1), ra(_, n, E));
            break;
          case "selectionchange":
            if (Td) break;
          case "keydown":
          case "keyup":
            ra(_, n, E);
        }
        var Y;
        if (So)
          e: {
            switch (e) {
              case "compositionstart":
                var J = "onCompositionStart";
                break e;
              case "compositionend":
                J = "onCompositionEnd";
                break e;
              case "compositionupdate":
                J = "onCompositionUpdate";
                break e;
            }
            J = void 0;
          }
        else
          jn
            ? Hi(e, n) && (J = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (J = "onCompositionStart");
        (J &&
          ($i &&
            n.locale !== "ko" &&
            (jn || J !== "onCompositionStart"
              ? J === "onCompositionEnd" && jn && (Y = Oi())
              : ((Vt = E),
                (go = "value" in Vt ? Vt.value : Vt.textContent),
                (jn = !0))),
          (K = nl(y, J)),
          0 < K.length &&
            ((J = new Ui(J, e, null, n, E)),
            _.push({ event: J, listeners: K }),
            Y ? (J.data = Y) : ((Y = Qi(n)), Y !== null && (J.data = Y)))),
          (Y = wd ? kd(e, n) : Sd(e, n)) &&
            ((y = nl(y, "onBeforeInput")),
            0 < y.length &&
              ((E = new Ui("onBeforeInput", "beforeinput", null, n, E)),
              _.push({ event: E, listeners: y }),
              (E.data = Y))));
      }
      fa(_, t);
    });
  }
  function hr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function nl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      (l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = Xn(e, n)),
        o != null && r.unshift(hr(e, o, l)),
        (o = Xn(e, t)),
        o != null && r.push(hr(e, o, l))),
        (e = e.return));
    }
    return r;
  }
  function _n(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ma(e, t, n, r, l) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
      var c = n,
        d = c.alternate,
        y = c.stateNode;
      if (d !== null && d === r) break;
      (c.tag === 5 &&
        y !== null &&
        ((c = y),
        l
          ? ((d = Xn(n, o)), d != null && s.unshift(hr(n, d, c)))
          : l || ((d = Xn(n, o)), d != null && s.push(hr(n, d, c)))),
        (n = n.return));
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var Ad = /\r\n?/g,
    Od = /\u0000|\uFFFD/g;
  function ha(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Ad,
        `
`,
      )
      .replace(Od, "");
  }
  function rl(e, t, n) {
    if (((t = ha(t)), ha(e) !== t && n)) throw Error(u(425));
  }
  function ll() {}
  var Ro = null,
    Io = null;
  function Mo(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ao = typeof setTimeout == "function" ? setTimeout : void 0,
    Fd = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ga = typeof Promise == "function" ? Promise : void 0,
    Dd =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ga < "u"
          ? function (e) {
              return ga.resolve(null).then(e).catch(Ud);
            }
          : Ao;
  function Ud(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Oo(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            (e.removeChild(l), or(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    or(t);
  }
  function Bt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function va(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Pn = Math.random().toString(36).slice(2),
    Nt = "__reactFiber$" + Pn,
    gr = "__reactProps$" + Pn,
    _t = "__reactContainer$" + Pn,
    Fo = "__reactEvents$" + Pn,
    Vd = "__reactListeners$" + Pn,
    $d = "__reactHandles$" + Pn;
  function on(e) {
    var t = e[Nt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[_t] || n[Nt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = va(e); e !== null; ) {
            if ((n = e[Nt])) return n;
            e = va(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function vr(e) {
    return (
      (e = e[Nt] || e[_t]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function bn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(u(33));
  }
  function ol(e) {
    return e[gr] || null;
  }
  var Do = [],
    zn = -1;
  function Wt(e) {
    return { current: e };
  }
  function ye(e) {
    0 > zn || ((e.current = Do[zn]), (Do[zn] = null), zn--);
  }
  function ge(e, t) {
    (zn++, (Do[zn] = e.current), (e.current = t));
  }
  var Ht = {},
    Be = Wt(Ht),
    qe = Wt(!1),
    sn = Ht;
  function Ln(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ht;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      o;
    for (o in n) l[o] = t[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function et(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function sl() {
    (ye(qe), ye(Be));
  }
  function ya(e, t, n) {
    if (Be.current !== Ht) throw Error(u(168));
    (ge(Be, t), ge(qe, n));
  }
  function xa(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(u(108, q(e) || "Unknown", l));
    return A({}, n, r);
  }
  function il(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Ht),
      (sn = Be.current),
      ge(Be, e),
      ge(qe, qe.current),
      !0
    );
  }
  function wa(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(u(169));
    (n
      ? ((e = xa(e, t, sn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ye(qe),
        ye(Be),
        ge(Be, e))
      : ye(qe),
      ge(qe, n));
  }
  var Pt = null,
    al = !1,
    Uo = !1;
  function ka(e) {
    Pt === null ? (Pt = [e]) : Pt.push(e);
  }
  function Bd(e) {
    ((al = !0), ka(e));
  }
  function Qt() {
    if (!Uo && Pt !== null) {
      Uo = !0;
      var e = 0,
        t = pe;
      try {
        var n = Pt;
        for (pe = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((Pt = null), (al = !1));
      } catch (l) {
        throw (Pt !== null && (Pt = Pt.slice(e + 1)), Ni(io, Qt), l);
      } finally {
        ((pe = t), (Uo = !1));
      }
    }
    return null;
  }
  var Tn = [],
    Rn = 0,
    ul = null,
    cl = 0,
    ut = [],
    ct = 0,
    an = null,
    bt = 1,
    zt = "";
  function un(e, t) {
    ((Tn[Rn++] = cl), (Tn[Rn++] = ul), (ul = e), (cl = t));
  }
  function Sa(e, t, n) {
    ((ut[ct++] = bt), (ut[ct++] = zt), (ut[ct++] = an), (an = e));
    var r = bt;
    e = zt;
    var l = 32 - ht(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var o = 32 - ht(t) + l;
    if (30 < o) {
      var s = l - (l % 5);
      ((o = (r & ((1 << s) - 1)).toString(32)),
        (r >>= s),
        (l -= s),
        (bt = (1 << (32 - ht(t) + l)) | (n << l) | r),
        (zt = o + e));
    } else ((bt = (1 << o) | (n << l) | r), (zt = e));
  }
  function Vo(e) {
    e.return !== null && (un(e, 1), Sa(e, 1, 0));
  }
  function $o(e) {
    for (; e === ul; )
      ((ul = Tn[--Rn]), (Tn[Rn] = null), (cl = Tn[--Rn]), (Tn[Rn] = null));
    for (; e === an; )
      ((an = ut[--ct]),
        (ut[ct] = null),
        (zt = ut[--ct]),
        (ut[ct] = null),
        (bt = ut[--ct]),
        (ut[ct] = null));
  }
  var st = null,
    it = null,
    we = !1,
    vt = null;
  function Na(e, t) {
    var n = mt(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function ja(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (st = e), (it = Bt(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (st = e), (it = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = an !== null ? { id: bt, overflow: zt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = mt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (st = e),
              (it = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Bo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Wo(e) {
    if (we) {
      var t = it;
      if (t) {
        var n = t;
        if (!ja(e, t)) {
          if (Bo(e)) throw Error(u(418));
          t = Bt(n.nextSibling);
          var r = st;
          t && ja(e, t)
            ? Na(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (we = !1), (st = e));
        }
      } else {
        if (Bo(e)) throw Error(u(418));
        ((e.flags = (e.flags & -4097) | 2), (we = !1), (st = e));
      }
    }
  }
  function Ca(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    st = e;
  }
  function dl(e) {
    if (e !== st) return !1;
    if (!we) return (Ca(e), (we = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Mo(e.type, e.memoizedProps))),
      t && (t = it))
    ) {
      if (Bo(e)) throw (Ea(), Error(u(418)));
      for (; t; ) (Na(e, t), (t = Bt(t.nextSibling)));
    }
    if ((Ca(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                it = Bt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        it = null;
      }
    } else it = st ? Bt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ea() {
    for (var e = it; e; ) e = Bt(e.nextSibling);
  }
  function In() {
    ((it = st = null), (we = !1));
  }
  function Ho(e) {
    vt === null ? (vt = [e]) : vt.push(e);
  }
  var Wd = ie.ReactCurrentBatchConfig;
  function yr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(u(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(u(147, e));
        var l = r,
          o = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === o
          ? t.ref
          : ((t = function (s) {
              var c = l.refs;
              s === null ? delete c[o] : (c[o] = s);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != "string") throw Error(u(284));
      if (!n._owner) throw Error(u(290, e));
    }
    return e;
  }
  function fl(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        u(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      )
    );
  }
  function _a(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Pa(e) {
    function t(h, f) {
      if (e) {
        var g = h.deletions;
        g === null ? ((h.deletions = [f]), (h.flags |= 16)) : g.push(f);
      }
    }
    function n(h, f) {
      if (!e) return null;
      for (; f !== null; ) (t(h, f), (f = f.sibling));
      return null;
    }
    function r(h, f) {
      for (h = new Map(); f !== null; )
        (f.key !== null ? h.set(f.key, f) : h.set(f.index, f), (f = f.sibling));
      return h;
    }
    function l(h, f) {
      return ((h = en(h, f)), (h.index = 0), (h.sibling = null), h);
    }
    function o(h, f, g) {
      return (
        (h.index = g),
        e
          ? ((g = h.alternate),
            g !== null
              ? ((g = g.index), g < f ? ((h.flags |= 2), f) : g)
              : ((h.flags |= 2), f))
          : ((h.flags |= 1048576), f)
      );
    }
    function s(h) {
      return (e && h.alternate === null && (h.flags |= 2), h);
    }
    function c(h, f, g, b) {
      return f === null || f.tag !== 6
        ? ((f = As(g, h.mode, b)), (f.return = h), f)
        : ((f = l(f, g)), (f.return = h), f);
    }
    function d(h, f, g, b) {
      var $ = g.type;
      return $ === de
        ? E(h, f, g.props.children, b, g.key)
        : f !== null &&
            (f.elementType === $ ||
              (typeof $ == "object" &&
                $ !== null &&
                $.$$typeof === xe &&
                _a($) === f.type))
          ? ((b = l(f, g.props)), (b.ref = yr(h, f, g)), (b.return = h), b)
          : ((b = Al(g.type, g.key, g.props, null, h.mode, b)),
            (b.ref = yr(h, f, g)),
            (b.return = h),
            b);
    }
    function y(h, f, g, b) {
      return f === null ||
        f.tag !== 4 ||
        f.stateNode.containerInfo !== g.containerInfo ||
        f.stateNode.implementation !== g.implementation
        ? ((f = Os(g, h.mode, b)), (f.return = h), f)
        : ((f = l(f, g.children || [])), (f.return = h), f);
    }
    function E(h, f, g, b, $) {
      return f === null || f.tag !== 7
        ? ((f = vn(g, h.mode, b, $)), (f.return = h), f)
        : ((f = l(f, g)), (f.return = h), f);
    }
    function _(h, f, g) {
      if ((typeof f == "string" && f !== "") || typeof f == "number")
        return ((f = As("" + f, h.mode, g)), (f.return = h), f);
      if (typeof f == "object" && f !== null) {
        switch (f.$$typeof) {
          case be:
            return (
              (g = Al(f.type, f.key, f.props, null, h.mode, g)),
              (g.ref = yr(h, null, f)),
              (g.return = h),
              g
            );
          case he:
            return ((f = Os(f, h.mode, g)), (f.return = h), f);
          case xe:
            var b = f._init;
            return _(h, b(f._payload), g);
        }
        if (Gn(f) || G(f))
          return ((f = vn(f, h.mode, g, null)), (f.return = h), f);
        fl(h, f);
      }
      return null;
    }
    function C(h, f, g, b) {
      var $ = f !== null ? f.key : null;
      if ((typeof g == "string" && g !== "") || typeof g == "number")
        return $ !== null ? null : c(h, f, "" + g, b);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case be:
            return g.key === $ ? d(h, f, g, b) : null;
          case he:
            return g.key === $ ? y(h, f, g, b) : null;
          case xe:
            return (($ = g._init), C(h, f, $(g._payload), b));
        }
        if (Gn(g) || G(g)) return $ !== null ? null : E(h, f, g, b, null);
        fl(h, g);
      }
      return null;
    }
    function R(h, f, g, b, $) {
      if ((typeof b == "string" && b !== "") || typeof b == "number")
        return ((h = h.get(g) || null), c(f, h, "" + b, $));
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case be:
            return (
              (h = h.get(b.key === null ? g : b.key) || null),
              d(f, h, b, $)
            );
          case he:
            return (
              (h = h.get(b.key === null ? g : b.key) || null),
              y(f, h, b, $)
            );
          case xe:
            var K = b._init;
            return R(h, f, g, K(b._payload), $);
        }
        if (Gn(b) || G(b)) return ((h = h.get(g) || null), E(f, h, b, $, null));
        fl(f, b);
      }
      return null;
    }
    function F(h, f, g, b) {
      for (
        var $ = null, K = null, Y = f, J = (f = 0), Oe = null;
        Y !== null && J < g.length;
        J++
      ) {
        Y.index > J ? ((Oe = Y), (Y = null)) : (Oe = Y.sibling);
        var ue = C(h, Y, g[J], b);
        if (ue === null) {
          Y === null && (Y = Oe);
          break;
        }
        (e && Y && ue.alternate === null && t(h, Y),
          (f = o(ue, f, J)),
          K === null ? ($ = ue) : (K.sibling = ue),
          (K = ue),
          (Y = Oe));
      }
      if (J === g.length) return (n(h, Y), we && un(h, J), $);
      if (Y === null) {
        for (; J < g.length; J++)
          ((Y = _(h, g[J], b)),
            Y !== null &&
              ((f = o(Y, f, J)),
              K === null ? ($ = Y) : (K.sibling = Y),
              (K = Y)));
        return (we && un(h, J), $);
      }
      for (Y = r(h, Y); J < g.length; J++)
        ((Oe = R(Y, h, J, g[J], b)),
          Oe !== null &&
            (e &&
              Oe.alternate !== null &&
              Y.delete(Oe.key === null ? J : Oe.key),
            (f = o(Oe, f, J)),
            K === null ? ($ = Oe) : (K.sibling = Oe),
            (K = Oe)));
      return (
        e &&
          Y.forEach(function (tn) {
            return t(h, tn);
          }),
        we && un(h, J),
        $
      );
    }
    function V(h, f, g, b) {
      var $ = G(g);
      if (typeof $ != "function") throw Error(u(150));
      if (((g = $.call(g)), g == null)) throw Error(u(151));
      for (
        var K = ($ = null), Y = f, J = (f = 0), Oe = null, ue = g.next();
        Y !== null && !ue.done;
        J++, ue = g.next()
      ) {
        Y.index > J ? ((Oe = Y), (Y = null)) : (Oe = Y.sibling);
        var tn = C(h, Y, ue.value, b);
        if (tn === null) {
          Y === null && (Y = Oe);
          break;
        }
        (e && Y && tn.alternate === null && t(h, Y),
          (f = o(tn, f, J)),
          K === null ? ($ = tn) : (K.sibling = tn),
          (K = tn),
          (Y = Oe));
      }
      if (ue.done) return (n(h, Y), we && un(h, J), $);
      if (Y === null) {
        for (; !ue.done; J++, ue = g.next())
          ((ue = _(h, ue.value, b)),
            ue !== null &&
              ((f = o(ue, f, J)),
              K === null ? ($ = ue) : (K.sibling = ue),
              (K = ue)));
        return (we && un(h, J), $);
      }
      for (Y = r(h, Y); !ue.done; J++, ue = g.next())
        ((ue = R(Y, h, J, ue.value, b)),
          ue !== null &&
            (e &&
              ue.alternate !== null &&
              Y.delete(ue.key === null ? J : ue.key),
            (f = o(ue, f, J)),
            K === null ? ($ = ue) : (K.sibling = ue),
            (K = ue)));
      return (
        e &&
          Y.forEach(function (jf) {
            return t(h, jf);
          }),
        we && un(h, J),
        $
      );
    }
    function Pe(h, f, g, b) {
      if (
        (typeof g == "object" &&
          g !== null &&
          g.type === de &&
          g.key === null &&
          (g = g.props.children),
        typeof g == "object" && g !== null)
      ) {
        switch (g.$$typeof) {
          case be:
            e: {
              for (var $ = g.key, K = f; K !== null; ) {
                if (K.key === $) {
                  if ((($ = g.type), $ === de)) {
                    if (K.tag === 7) {
                      (n(h, K.sibling),
                        (f = l(K, g.props.children)),
                        (f.return = h),
                        (h = f));
                      break e;
                    }
                  } else if (
                    K.elementType === $ ||
                    (typeof $ == "object" &&
                      $ !== null &&
                      $.$$typeof === xe &&
                      _a($) === K.type)
                  ) {
                    (n(h, K.sibling),
                      (f = l(K, g.props)),
                      (f.ref = yr(h, K, g)),
                      (f.return = h),
                      (h = f));
                    break e;
                  }
                  n(h, K);
                  break;
                } else t(h, K);
                K = K.sibling;
              }
              g.type === de
                ? ((f = vn(g.props.children, h.mode, b, g.key)),
                  (f.return = h),
                  (h = f))
                : ((b = Al(g.type, g.key, g.props, null, h.mode, b)),
                  (b.ref = yr(h, f, g)),
                  (b.return = h),
                  (h = b));
            }
            return s(h);
          case he:
            e: {
              for (K = g.key; f !== null; ) {
                if (f.key === K)
                  if (
                    f.tag === 4 &&
                    f.stateNode.containerInfo === g.containerInfo &&
                    f.stateNode.implementation === g.implementation
                  ) {
                    (n(h, f.sibling),
                      (f = l(f, g.children || [])),
                      (f.return = h),
                      (h = f));
                    break e;
                  } else {
                    n(h, f);
                    break;
                  }
                else t(h, f);
                f = f.sibling;
              }
              ((f = Os(g, h.mode, b)), (f.return = h), (h = f));
            }
            return s(h);
          case xe:
            return ((K = g._init), Pe(h, f, K(g._payload), b));
        }
        if (Gn(g)) return F(h, f, g, b);
        if (G(g)) return V(h, f, g, b);
        fl(h, g);
      }
      return (typeof g == "string" && g !== "") || typeof g == "number"
        ? ((g = "" + g),
          f !== null && f.tag === 6
            ? (n(h, f.sibling), (f = l(f, g)), (f.return = h), (h = f))
            : (n(h, f), (f = As(g, h.mode, b)), (f.return = h), (h = f)),
          s(h))
        : n(h, f);
    }
    return Pe;
  }
  var Mn = Pa(!0),
    ba = Pa(!1),
    pl = Wt(null),
    ml = null,
    An = null,
    Qo = null;
  function Go() {
    Qo = An = ml = null;
  }
  function Ko(e) {
    var t = pl.current;
    (ye(pl), (e._currentValue = t));
  }
  function Yo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function On(e, t) {
    ((ml = e),
      (Qo = An = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (tt = !0), (e.firstContext = null)));
  }
  function dt(e) {
    var t = e._currentValue;
    if (Qo !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), An === null)) {
        if (ml === null) throw Error(u(308));
        ((An = e), (ml.dependencies = { lanes: 0, firstContext: e }));
      } else An = An.next = e;
    return t;
  }
  var cn = null;
  function Xo(e) {
    cn === null ? (cn = [e]) : cn.push(e);
  }
  function za(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Xo(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Lt(e, r)
    );
  }
  function Lt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      ((e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var Gt = !1;
  function Zo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function La(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function Tt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Kt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (se & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Lt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Xo(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Lt(e, n)
    );
  }
  function hl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), co(e, n));
    }
  }
  function Ta(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var s = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (o === null ? (l = o = s) : (o = o.next = s), (n = n.next));
        } while (n !== null);
        o === null ? (l = o = t) : (o = o.next = t);
      } else l = o = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function gl(e, t, n, r) {
    var l = e.updateQueue;
    Gt = !1;
    var o = l.firstBaseUpdate,
      s = l.lastBaseUpdate,
      c = l.shared.pending;
    if (c !== null) {
      l.shared.pending = null;
      var d = c,
        y = d.next;
      ((d.next = null), s === null ? (o = y) : (s.next = y), (s = d));
      var E = e.alternate;
      E !== null &&
        ((E = E.updateQueue),
        (c = E.lastBaseUpdate),
        c !== s &&
          (c === null ? (E.firstBaseUpdate = y) : (c.next = y),
          (E.lastBaseUpdate = d)));
    }
    if (o !== null) {
      var _ = l.baseState;
      ((s = 0), (E = y = d = null), (c = o));
      do {
        var C = c.lane,
          R = c.eventTime;
        if ((r & C) === C) {
          E !== null &&
            (E = E.next =
              {
                eventTime: R,
                lane: 0,
                tag: c.tag,
                payload: c.payload,
                callback: c.callback,
                next: null,
              });
          e: {
            var F = e,
              V = c;
            switch (((C = t), (R = n), V.tag)) {
              case 1:
                if (((F = V.payload), typeof F == "function")) {
                  _ = F.call(R, _, C);
                  break e;
                }
                _ = F;
                break e;
              case 3:
                F.flags = (F.flags & -65537) | 128;
              case 0:
                if (
                  ((F = V.payload),
                  (C = typeof F == "function" ? F.call(R, _, C) : F),
                  C == null)
                )
                  break e;
                _ = A({}, _, C);
                break e;
              case 2:
                Gt = !0;
            }
          }
          c.callback !== null &&
            c.lane !== 0 &&
            ((e.flags |= 64),
            (C = l.effects),
            C === null ? (l.effects = [c]) : C.push(c));
        } else
          ((R = {
            eventTime: R,
            lane: C,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            E === null ? ((y = E = R), (d = _)) : (E = E.next = R),
            (s |= C));
        if (((c = c.next), c === null)) {
          if (((c = l.shared.pending), c === null)) break;
          ((C = c),
            (c = C.next),
            (C.next = null),
            (l.lastBaseUpdate = C),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (E === null && (d = _),
        (l.baseState = d),
        (l.firstBaseUpdate = y),
        (l.lastBaseUpdate = E),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((s |= l.lane), (l = l.next));
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      ((pn |= s), (e.lanes = s), (e.memoizedState = _));
    }
  }
  function Ra(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(u(191, l));
          l.call(r);
        }
      }
  }
  var xr = {},
    jt = Wt(xr),
    wr = Wt(xr),
    kr = Wt(xr);
  function dn(e) {
    if (e === xr) throw Error(u(174));
    return e;
  }
  function Jo(e, t) {
    switch ((ge(kr, t), ge(wr, e), ge(jt, xr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Jl(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Jl(t, e)));
    }
    (ye(jt), ge(jt, t));
  }
  function Fn() {
    (ye(jt), ye(wr), ye(kr));
  }
  function Ia(e) {
    dn(kr.current);
    var t = dn(jt.current),
      n = Jl(t, e.type);
    t !== n && (ge(wr, e), ge(jt, n));
  }
  function qo(e) {
    wr.current === e && (ye(jt), ye(wr));
  }
  var Se = Wt(0);
  function vl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var es = [];
  function ts() {
    for (var e = 0; e < es.length; e++)
      es[e]._workInProgressVersionPrimary = null;
    es.length = 0;
  }
  var yl = ie.ReactCurrentDispatcher,
    ns = ie.ReactCurrentBatchConfig,
    fn = 0,
    Ne = null,
    Le = null,
    Me = null,
    xl = !1,
    Sr = !1,
    Nr = 0,
    Hd = 0;
  function We() {
    throw Error(u(321));
  }
  function rs(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!gt(e[n], t[n])) return !1;
    return !0;
  }
  function ls(e, t, n, r, l, o) {
    if (
      ((fn = o),
      (Ne = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (yl.current = e === null || e.memoizedState === null ? Yd : Xd),
      (e = n(r, l)),
      Sr)
    ) {
      o = 0;
      do {
        if (((Sr = !1), (Nr = 0), 25 <= o)) throw Error(u(301));
        ((o += 1),
          (Me = Le = null),
          (t.updateQueue = null),
          (yl.current = Zd),
          (e = n(r, l)));
      } while (Sr);
    }
    if (
      ((yl.current = Sl),
      (t = Le !== null && Le.next !== null),
      (fn = 0),
      (Me = Le = Ne = null),
      (xl = !1),
      t)
    )
      throw Error(u(300));
    return e;
  }
  function os() {
    var e = Nr !== 0;
    return ((Nr = 0), e);
  }
  function Ct() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Me === null ? (Ne.memoizedState = Me = e) : (Me = Me.next = e), Me);
  }
  function ft() {
    if (Le === null) {
      var e = Ne.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Le.next;
    var t = Me === null ? Ne.memoizedState : Me.next;
    if (t !== null) ((Me = t), (Le = e));
    else {
      if (e === null) throw Error(u(310));
      ((Le = e),
        (e = {
          memoizedState: Le.memoizedState,
          baseState: Le.baseState,
          baseQueue: Le.baseQueue,
          queue: Le.queue,
          next: null,
        }),
        Me === null ? (Ne.memoizedState = Me = e) : (Me = Me.next = e));
    }
    return Me;
  }
  function jr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ss(e) {
    var t = ft(),
      n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = Le,
      l = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var s = l.next;
        ((l.next = o.next), (o.next = s));
      }
      ((r.baseQueue = l = o), (n.pending = null));
    }
    if (l !== null) {
      ((o = l.next), (r = r.baseState));
      var c = (s = null),
        d = null,
        y = o;
      do {
        var E = y.lane;
        if ((fn & E) === E)
          (d !== null &&
            (d = d.next =
              {
                lane: 0,
                action: y.action,
                hasEagerState: y.hasEagerState,
                eagerState: y.eagerState,
                next: null,
              }),
            (r = y.hasEagerState ? y.eagerState : e(r, y.action)));
        else {
          var _ = {
            lane: E,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null,
          };
          (d === null ? ((c = d = _), (s = r)) : (d = d.next = _),
            (Ne.lanes |= E),
            (pn |= E));
        }
        y = y.next;
      } while (y !== null && y !== o);
      (d === null ? (s = r) : (d.next = c),
        gt(r, t.memoizedState) || (tt = !0),
        (t.memoizedState = r),
        (t.baseState = s),
        (t.baseQueue = d),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((o = l.lane), (Ne.lanes |= o), (pn |= o), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function is(e) {
    var t = ft(),
      n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var s = (l = l.next);
      do ((o = e(o, s.action)), (s = s.next));
      while (s !== l);
      (gt(o, t.memoizedState) || (tt = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o));
    }
    return [o, r];
  }
  function Ma() {}
  function Aa(e, t) {
    var n = Ne,
      r = ft(),
      l = t(),
      o = !gt(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (tt = !0)),
      (r = r.queue),
      as(Da.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Me !== null && Me.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Cr(9, Fa.bind(null, n, r, l, t), void 0, null),
        Ae === null)
      )
        throw Error(u(349));
      (fn & 30) !== 0 || Oa(n, t, l);
    }
    return l;
  }
  function Oa(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Ne.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ne.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Fa(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), Ua(t) && Va(e));
  }
  function Da(e, t, n) {
    return n(function () {
      Ua(t) && Va(e);
    });
  }
  function Ua(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !gt(e, n);
    } catch {
      return !0;
    }
  }
  function Va(e) {
    var t = Lt(e, 1);
    t !== null && kt(t, e, 1, -1);
  }
  function $a(e) {
    var t = Ct();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Kd.bind(null, Ne, e)),
      [t.memoizedState, e]
    );
  }
  function Cr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Ne.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ne.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Ba() {
    return ft().memoizedState;
  }
  function wl(e, t, n, r) {
    var l = Ct();
    ((Ne.flags |= e),
      (l.memoizedState = Cr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function kl(e, t, n, r) {
    var l = ft();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Le !== null) {
      var s = Le.memoizedState;
      if (((o = s.destroy), r !== null && rs(r, s.deps))) {
        l.memoizedState = Cr(t, n, o, r);
        return;
      }
    }
    ((Ne.flags |= e), (l.memoizedState = Cr(1 | t, n, o, r)));
  }
  function Wa(e, t) {
    return wl(8390656, 8, e, t);
  }
  function as(e, t) {
    return kl(2048, 8, e, t);
  }
  function Ha(e, t) {
    return kl(4, 2, e, t);
  }
  function Qa(e, t) {
    return kl(4, 4, e, t);
  }
  function Ga(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Ka(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null),
      kl(4, 4, Ga.bind(null, t, e), n)
    );
  }
  function us() {}
  function Ya(e, t) {
    var n = ft();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && rs(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Xa(e, t) {
    var n = ft();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && rs(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Za(e, t, n) {
    return (fn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (tt = !0)), (e.memoizedState = n))
      : (gt(n, t) ||
          ((n = _i()), (Ne.lanes |= n), (pn |= n), (e.baseState = !0)),
        t);
  }
  function Qd(e, t) {
    var n = pe;
    ((pe = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = ns.transition;
    ns.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((pe = n), (ns.transition = r));
    }
  }
  function Ja() {
    return ft().memoizedState;
  }
  function Gd(e, t, n) {
    var r = Jt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      qa(e))
    )
      eu(t, n);
    else if (((n = za(e, t, n, r)), n !== null)) {
      var l = Xe();
      (kt(n, e, r, l), tu(n, t, r));
    }
  }
  function Kd(e, t, n) {
    var r = Jt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (qa(e)) eu(t, l);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var s = t.lastRenderedState,
            c = o(s, n);
          if (((l.hasEagerState = !0), (l.eagerState = c), gt(c, s))) {
            var d = t.interleaved;
            (d === null
              ? ((l.next = l), Xo(t))
              : ((l.next = d.next), (d.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = za(e, t, l, r)),
        n !== null && ((l = Xe()), kt(n, e, r, l), tu(n, t, r)));
    }
  }
  function qa(e) {
    var t = e.alternate;
    return e === Ne || (t !== null && t === Ne);
  }
  function eu(e, t) {
    Sr = xl = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function tu(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), co(e, n));
    }
  }
  var Sl = {
      readContext: dt,
      useCallback: We,
      useContext: We,
      useEffect: We,
      useImperativeHandle: We,
      useInsertionEffect: We,
      useLayoutEffect: We,
      useMemo: We,
      useReducer: We,
      useRef: We,
      useState: We,
      useDebugValue: We,
      useDeferredValue: We,
      useTransition: We,
      useMutableSource: We,
      useSyncExternalStore: We,
      useId: We,
      unstable_isNewReconciler: !1,
    },
    Yd = {
      readContext: dt,
      useCallback: function (e, t) {
        return ((Ct().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: dt,
      useEffect: Wa,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          wl(4194308, 4, Ga.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return wl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return wl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Ct();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Ct();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = Gd.bind(null, Ne, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ct();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: $a,
      useDebugValue: us,
      useDeferredValue: function (e) {
        return (Ct().memoizedState = e);
      },
      useTransition: function () {
        var e = $a(!1),
          t = e[0];
        return ((e = Qd.bind(null, e[1])), (Ct().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = Ne,
          l = Ct();
        if (we) {
          if (n === void 0) throw Error(u(407));
          n = n();
        } else {
          if (((n = t()), Ae === null)) throw Error(u(349));
          (fn & 30) !== 0 || Oa(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          Wa(Da.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          Cr(9, Fa.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Ct(),
          t = Ae.identifierPrefix;
        if (we) {
          var n = zt,
            r = bt;
          ((n = (r & ~(1 << (32 - ht(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = Nr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = Hd++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Xd = {
      readContext: dt,
      useCallback: Ya,
      useContext: dt,
      useEffect: as,
      useImperativeHandle: Ka,
      useInsertionEffect: Ha,
      useLayoutEffect: Qa,
      useMemo: Xa,
      useReducer: ss,
      useRef: Ba,
      useState: function () {
        return ss(jr);
      },
      useDebugValue: us,
      useDeferredValue: function (e) {
        var t = ft();
        return Za(t, Le.memoizedState, e);
      },
      useTransition: function () {
        var e = ss(jr)[0],
          t = ft().memoizedState;
        return [e, t];
      },
      useMutableSource: Ma,
      useSyncExternalStore: Aa,
      useId: Ja,
      unstable_isNewReconciler: !1,
    },
    Zd = {
      readContext: dt,
      useCallback: Ya,
      useContext: dt,
      useEffect: as,
      useImperativeHandle: Ka,
      useInsertionEffect: Ha,
      useLayoutEffect: Qa,
      useMemo: Xa,
      useReducer: is,
      useRef: Ba,
      useState: function () {
        return is(jr);
      },
      useDebugValue: us,
      useDeferredValue: function (e) {
        var t = ft();
        return Le === null ? (t.memoizedState = e) : Za(t, Le.memoizedState, e);
      },
      useTransition: function () {
        var e = is(jr)[0],
          t = ft().memoizedState;
        return [e, t];
      },
      useMutableSource: Ma,
      useSyncExternalStore: Aa,
      useId: Ja,
      unstable_isNewReconciler: !1,
    };
  function yt(e, t) {
    if (e && e.defaultProps) {
      ((t = A({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function cs(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : A({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Nl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? ln(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Xe(),
        l = Jt(e),
        o = Tt(r, l);
      ((o.payload = t),
        n != null && (o.callback = n),
        (t = Kt(e, o, l)),
        t !== null && (kt(t, e, l, r), hl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Xe(),
        l = Jt(e),
        o = Tt(r, l);
      ((o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = Kt(e, o, l)),
        t !== null && (kt(t, e, l, r), hl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Xe(),
        r = Jt(e),
        l = Tt(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Kt(e, l, r)),
        t !== null && (kt(t, e, r, n), hl(t, e, r)));
    },
  };
  function nu(e, t, n, r, l, o, s) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, o, s)
        : t.prototype && t.prototype.isPureReactComponent
          ? !dr(n, r) || !dr(l, o)
          : !0
    );
  }
  function ru(e, t, n) {
    var r = !1,
      l = Ht,
      o = t.contextType;
    return (
      typeof o == "object" && o !== null
        ? (o = dt(o))
        : ((l = et(t) ? sn : Be.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? Ln(e, l) : Ht)),
      (t = new t(n, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Nl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function lu(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Nl.enqueueReplaceState(t, t.state, null));
  }
  function ds(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Zo(e));
    var o = t.contextType;
    (typeof o == "object" && o !== null
      ? (l.context = dt(o))
      : ((o = et(t) ? sn : Be.current), (l.context = Ln(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == "function" && (cs(e, t, o, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && Nl.enqueueReplaceState(l, l.state, null),
        gl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function Dn(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += re(r)), (r = r.return));
      while (r);
      var l = n;
    } catch (o) {
      l =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function fs(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function ps(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Jd = typeof WeakMap == "function" ? WeakMap : Map;
  function ou(e, t, n) {
    ((n = Tt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (zl || ((zl = !0), (Ps = r)), ps(e, t));
      }),
      n
    );
  }
  function su(e, t, n) {
    ((n = Tt(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          ps(e, t);
        }));
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == "function" &&
        (n.callback = function () {
          (ps(e, t),
            typeof r != "function" &&
              (Xt === null ? (Xt = new Set([this])) : Xt.add(this)));
          var s = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : "",
          });
        }),
      n
    );
  }
  function iu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Jd();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = pf.bind(null, e, t, n)), t.then(e, e));
  }
  function au(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function uu(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Tt(-1, 1)), (t.tag = 2), Kt(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var qd = ie.ReactCurrentOwner,
    tt = !1;
  function Ye(e, t, n, r) {
    t.child = e === null ? ba(t, null, n, r) : Mn(t, e.child, n, r);
  }
  function cu(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      On(t, l),
      (r = ls(e, t, n, r, o, l)),
      (n = os()),
      e !== null && !tt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Rt(e, t, l))
        : (we && n && Vo(t), (t.flags |= 1), Ye(e, t, r, l), t.child)
    );
  }
  function du(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !Ms(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), fu(e, t, o, r, l))
        : ((e = Al(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), (e.lanes & l) === 0)) {
      var s = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : dr), n(s, r) && e.ref === t.ref)
      )
        return Rt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = en(o, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function fu(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (dr(o, r) && e.ref === t.ref)
        if (((tt = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (tt = !0);
        else return ((t.lanes = e.lanes), Rt(e, t, l));
    }
    return ms(e, t, n, r, l);
  }
  function pu(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ge(Vn, at),
          (at |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ge(Vn, at),
            (at |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = o !== null ? o.baseLanes : n),
          ge(Vn, at),
          (at |= r));
      }
    else
      (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ge(Vn, at),
        (at |= r));
    return (Ye(e, t, l, n), t.child);
  }
  function mu(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function ms(e, t, n, r, l) {
    var o = et(n) ? sn : Be.current;
    return (
      (o = Ln(t, o)),
      On(t, l),
      (n = ls(e, t, n, r, o, l)),
      (r = os()),
      e !== null && !tt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Rt(e, t, l))
        : (we && r && Vo(t), (t.flags |= 1), Ye(e, t, n, l), t.child)
    );
  }
  function hu(e, t, n, r, l) {
    if (et(n)) {
      var o = !0;
      il(t);
    } else o = !1;
    if ((On(t, l), t.stateNode === null))
      (Cl(e, t), ru(t, n, r), ds(t, n, r, l), (r = !0));
    else if (e === null) {
      var s = t.stateNode,
        c = t.memoizedProps;
      s.props = c;
      var d = s.context,
        y = n.contextType;
      typeof y == "object" && y !== null
        ? (y = dt(y))
        : ((y = et(n) ? sn : Be.current), (y = Ln(t, y)));
      var E = n.getDerivedStateFromProps,
        _ =
          typeof E == "function" ||
          typeof s.getSnapshotBeforeUpdate == "function";
      (_ ||
        (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
          typeof s.componentWillReceiveProps != "function") ||
        ((c !== r || d !== y) && lu(t, s, r, y)),
        (Gt = !1));
      var C = t.memoizedState;
      ((s.state = C),
        gl(t, r, s, l),
        (d = t.memoizedState),
        c !== r || C !== d || qe.current || Gt
          ? (typeof E == "function" && (cs(t, n, E, r), (d = t.memoizedState)),
            (c = Gt || nu(t, n, c, r, C, d, y))
              ? (_ ||
                  (typeof s.UNSAFE_componentWillMount != "function" &&
                    typeof s.componentWillMount != "function") ||
                  (typeof s.componentWillMount == "function" &&
                    s.componentWillMount(),
                  typeof s.UNSAFE_componentWillMount == "function" &&
                    s.UNSAFE_componentWillMount()),
                typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = d)),
            (s.props = r),
            (s.state = d),
            (s.context = y),
            (r = c))
          : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1)));
    } else {
      ((s = t.stateNode),
        La(e, t),
        (c = t.memoizedProps),
        (y = t.type === t.elementType ? c : yt(t.type, c)),
        (s.props = y),
        (_ = t.pendingProps),
        (C = s.context),
        (d = n.contextType),
        typeof d == "object" && d !== null
          ? (d = dt(d))
          : ((d = et(n) ? sn : Be.current), (d = Ln(t, d))));
      var R = n.getDerivedStateFromProps;
      ((E =
        typeof R == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function") ||
        (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
          typeof s.componentWillReceiveProps != "function") ||
        ((c !== _ || C !== d) && lu(t, s, r, d)),
        (Gt = !1),
        (C = t.memoizedState),
        (s.state = C),
        gl(t, r, s, l));
      var F = t.memoizedState;
      c !== _ || C !== F || qe.current || Gt
        ? (typeof R == "function" && (cs(t, n, R, r), (F = t.memoizedState)),
          (y = Gt || nu(t, n, y, r, C, F, d) || !1)
            ? (E ||
                (typeof s.UNSAFE_componentWillUpdate != "function" &&
                  typeof s.componentWillUpdate != "function") ||
                (typeof s.componentWillUpdate == "function" &&
                  s.componentWillUpdate(r, F, d),
                typeof s.UNSAFE_componentWillUpdate == "function" &&
                  s.UNSAFE_componentWillUpdate(r, F, d)),
              typeof s.componentDidUpdate == "function" && (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof s.componentDidUpdate != "function" ||
                (c === e.memoizedProps && C === e.memoizedState) ||
                (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" ||
                (c === e.memoizedProps && C === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = F)),
          (s.props = r),
          (s.state = F),
          (s.context = d),
          (r = y))
        : (typeof s.componentDidUpdate != "function" ||
            (c === e.memoizedProps && C === e.memoizedState) ||
            (t.flags |= 4),
          typeof s.getSnapshotBeforeUpdate != "function" ||
            (c === e.memoizedProps && C === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return hs(e, t, n, r, o, l);
  }
  function hs(e, t, n, r, l, o) {
    mu(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return (l && wa(t, n, !1), Rt(e, t, o));
    ((r = t.stateNode), (qd.current = t));
    var c =
      s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && s
        ? ((t.child = Mn(t, e.child, null, o)), (t.child = Mn(t, null, c, o)))
        : Ye(e, t, c, o),
      (t.memoizedState = r.state),
      l && wa(t, n, !0),
      t.child
    );
  }
  function gu(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? ya(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && ya(e, t.context, !1),
      Jo(e, t.containerInfo));
  }
  function vu(e, t, n, r, l) {
    return (In(), Ho(l), (t.flags |= 256), Ye(e, t, n, r), t.child);
  }
  var gs = { dehydrated: null, treeContext: null, retryLane: 0 };
  function vs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function yu(e, t, n) {
    var r = t.pendingProps,
      l = Se.current,
      o = !1,
      s = (t.flags & 128) !== 0,
      c;
    if (
      ((c = s) ||
        (c = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      c
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      ge(Se, l & 1),
      e === null)
    )
      return (
        Wo(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((s = r.children),
            (e = r.fallback),
            o
              ? ((r = t.mode),
                (o = t.child),
                (s = { mode: "hidden", children: s }),
                (r & 1) === 0 && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = s))
                  : (o = Ol(s, r, 0, null)),
                (e = vn(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = vs(n)),
                (t.memoizedState = gs),
                e)
              : ys(t, s))
      );
    if (((l = e.memoizedState), l !== null && ((c = l.dehydrated), c !== null)))
      return ef(e, t, s, r, c, l, n);
    if (o) {
      ((o = r.fallback), (s = t.mode), (l = e.child), (c = l.sibling));
      var d = { mode: "hidden", children: r.children };
      return (
        (s & 1) === 0 && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = d),
            (t.deletions = null))
          : ((r = en(l, d)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        c !== null ? (o = en(c, o)) : ((o = vn(o, s, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (s = e.child.memoizedState),
        (s =
          s === null
            ? vs(n)
            : {
                baseLanes: s.baseLanes | n,
                cachePool: null,
                transitions: s.transitions,
              }),
        (o.memoizedState = s),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = gs),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = en(o, { mode: "visible", children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function ys(e, t) {
    return (
      (t = Ol({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function jl(e, t, n, r) {
    return (
      r !== null && Ho(r),
      Mn(t, e.child, null, n),
      (e = ys(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function ef(e, t, n, r, l, o, s) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = fs(Error(u(422)))), jl(e, t, s, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = r.fallback),
            (l = t.mode),
            (r = Ol({ mode: "visible", children: r.children }, l, 0, null)),
            (o = vn(o, l, s, null)),
            (o.flags |= 2),
            (r.return = t),
            (o.return = t),
            (r.sibling = o),
            (t.child = r),
            (t.mode & 1) !== 0 && Mn(t, e.child, null, s),
            (t.child.memoizedState = vs(s)),
            (t.memoizedState = gs),
            o);
    if ((t.mode & 1) === 0) return jl(e, t, s, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var c = r.dgst;
      return (
        (r = c),
        (o = Error(u(419))),
        (r = fs(o, r, void 0)),
        jl(e, t, s, r)
      );
    }
    if (((c = (s & e.childLanes) !== 0), tt || c)) {
      if (((r = Ae), r !== null)) {
        switch (s & -s) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        ((l = (l & (r.suspendedLanes | s)) !== 0 ? 0 : l),
          l !== 0 &&
            l !== o.retryLane &&
            ((o.retryLane = l), Lt(e, l), kt(r, e, l, -1)));
      }
      return (Is(), (r = fs(Error(u(421)))), jl(e, t, s, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = mf.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (it = Bt(l.nextSibling)),
        (st = t),
        (we = !0),
        (vt = null),
        e !== null &&
          ((ut[ct++] = bt),
          (ut[ct++] = zt),
          (ut[ct++] = an),
          (bt = e.id),
          (zt = e.overflow),
          (an = t)),
        (t = ys(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function xu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Yo(e.return, t, n));
  }
  function xs(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = l));
  }
  function wu(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((Ye(e, t, r.children, n), (r = Se.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && xu(e, n, t);
          else if (e.tag === 19) xu(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      r &= 1;
    }
    if ((ge(Se, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate),
              e !== null && vl(e) === null && (l = n),
              (n = n.sibling));
          ((n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            xs(t, !1, l, n, o));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && vl(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          xs(t, !0, n, null, o);
          break;
        case "together":
          xs(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Cl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Rt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (pn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (
        e = t.child, n = en(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        ((e = e.sibling),
          (n = n.sibling = en(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function tf(e, t, n) {
    switch (t.tag) {
      case 3:
        (gu(t), In());
        break;
      case 5:
        Ia(t);
        break;
      case 1:
        et(t.type) && il(t);
        break;
      case 4:
        Jo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (ge(pl, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ge(Se, Se.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? yu(e, t, n)
              : (ge(Se, Se.current & 1),
                (e = Rt(e, t, n)),
                e !== null ? e.sibling : null);
        ge(Se, Se.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return wu(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ge(Se, Se.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), pu(e, t, n));
    }
    return Rt(e, t, n);
  }
  var ku, ws, Su, Nu;
  ((ku = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  }),
    (ws = function () {}),
    (Su = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), dn(jt.current));
        var o = null;
        switch (n) {
          case "input":
            ((l = Kl(e, l)), (r = Kl(e, r)), (o = []));
            break;
          case "select":
            ((l = A({}, l, { value: void 0 })),
              (r = A({}, r, { value: void 0 })),
              (o = []));
            break;
          case "textarea":
            ((l = Zl(e, l)), (r = Zl(e, r)), (o = []));
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = ll);
        }
        ql(n, r);
        var s;
        n = null;
        for (y in l)
          if (!r.hasOwnProperty(y) && l.hasOwnProperty(y) && l[y] != null)
            if (y === "style") {
              var c = l[y];
              for (s in c) c.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
            } else
              y !== "dangerouslySetInnerHTML" &&
                y !== "children" &&
                y !== "suppressContentEditableWarning" &&
                y !== "suppressHydrationWarning" &&
                y !== "autoFocus" &&
                (x.hasOwnProperty(y)
                  ? o || (o = [])
                  : (o = o || []).push(y, null));
        for (y in r) {
          var d = r[y];
          if (
            ((c = l?.[y]),
            r.hasOwnProperty(y) && d !== c && (d != null || c != null))
          )
            if (y === "style")
              if (c) {
                for (s in c)
                  !c.hasOwnProperty(s) ||
                    (d && d.hasOwnProperty(s)) ||
                    (n || (n = {}), (n[s] = ""));
                for (s in d)
                  d.hasOwnProperty(s) &&
                    c[s] !== d[s] &&
                    (n || (n = {}), (n[s] = d[s]));
              } else (n || (o || (o = []), o.push(y, n)), (n = d));
            else
              y === "dangerouslySetInnerHTML"
                ? ((d = d ? d.__html : void 0),
                  (c = c ? c.__html : void 0),
                  d != null && c !== d && (o = o || []).push(y, d))
                : y === "children"
                  ? (typeof d != "string" && typeof d != "number") ||
                    (o = o || []).push(y, "" + d)
                  : y !== "suppressContentEditableWarning" &&
                    y !== "suppressHydrationWarning" &&
                    (x.hasOwnProperty(y)
                      ? (d != null && y === "onScroll" && ve("scroll", e),
                        o || c === d || (o = []))
                      : (o = o || []).push(y, d));
        }
        n && (o = o || []).push("style", n);
        var y = o;
        (t.updateQueue = y) && (t.flags |= 4);
      }
    }),
    (Nu = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function Er(e, t) {
    if (!we)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            (n.alternate !== null && (r = n), (n = n.sibling));
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function He(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
  }
  function nf(e, t, n) {
    var r = t.pendingProps;
    switch (($o(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (He(t), null);
      case 1:
        return (et(t.type) && sl(), He(t), null);
      case 3:
        return (
          (r = t.stateNode),
          Fn(),
          ye(qe),
          ye(Be),
          ts(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (dl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), vt !== null && (Ls(vt), (vt = null)))),
          ws(e, t),
          He(t),
          null
        );
      case 5:
        qo(t);
        var l = dn(kr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (Su(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(u(166));
            return (He(t), null);
          }
          if (((e = dn(jt.current)), dl(t))) {
            ((r = t.stateNode), (n = t.type));
            var o = t.memoizedProps;
            switch (((r[Nt] = t), (r[gr] = o), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (ve("cancel", r), ve("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                ve("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < pr.length; l++) ve(pr[l], r);
                break;
              case "source":
                ve("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (ve("error", r), ve("load", r));
                break;
              case "details":
                ve("toggle", r);
                break;
              case "input":
                (ri(r, o), ve("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!o.multiple }),
                  ve("invalid", r));
                break;
              case "textarea":
                (si(r, o), ve("invalid", r));
            }
            (ql(n, o), (l = null));
            for (var s in o)
              if (o.hasOwnProperty(s)) {
                var c = o[s];
                s === "children"
                  ? typeof c == "string"
                    ? r.textContent !== c &&
                      (o.suppressHydrationWarning !== !0 &&
                        rl(r.textContent, c, e),
                      (l = ["children", c]))
                    : typeof c == "number" &&
                      r.textContent !== "" + c &&
                      (o.suppressHydrationWarning !== !0 &&
                        rl(r.textContent, c, e),
                      (l = ["children", "" + c]))
                  : x.hasOwnProperty(s) &&
                    c != null &&
                    s === "onScroll" &&
                    ve("scroll", r);
              }
            switch (n) {
              case "input":
                (At(r), oi(r, o, !0));
                break;
              case "textarea":
                (At(r), ai(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = ll);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((s = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = ui(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = s.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = s.createElement(n, { is: r.is }))
                    : ((e = s.createElement(n)),
                      n === "select" &&
                        ((s = e),
                        r.multiple
                          ? (s.multiple = !0)
                          : r.size && (s.size = r.size)))
                : (e = s.createElementNS(e, n)),
              (e[Nt] = t),
              (e[gr] = r),
              ku(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((s = eo(n, r)), n)) {
                case "dialog":
                  (ve("cancel", e), ve("close", e), (l = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (ve("load", e), (l = r));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < pr.length; l++) ve(pr[l], e);
                  l = r;
                  break;
                case "source":
                  (ve("error", e), (l = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (ve("error", e), ve("load", e), (l = r));
                  break;
                case "details":
                  (ve("toggle", e), (l = r));
                  break;
                case "input":
                  (ri(e, r), (l = Kl(e, r)), ve("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = A({}, r, { value: void 0 })),
                    ve("invalid", e));
                  break;
                case "textarea":
                  (si(e, r), (l = Zl(e, r)), ve("invalid", e));
                  break;
                default:
                  l = r;
              }
              (ql(n, l), (c = l));
              for (o in c)
                if (c.hasOwnProperty(o)) {
                  var d = c[o];
                  o === "style"
                    ? fi(e, d)
                    : o === "dangerouslySetInnerHTML"
                      ? ((d = d ? d.__html : void 0), d != null && ci(e, d))
                      : o === "children"
                        ? typeof d == "string"
                          ? (n !== "textarea" || d !== "") && Kn(e, d)
                          : typeof d == "number" && Kn(e, "" + d)
                        : o !== "suppressContentEditableWarning" &&
                          o !== "suppressHydrationWarning" &&
                          o !== "autoFocus" &&
                          (x.hasOwnProperty(o)
                            ? d != null && o === "onScroll" && ve("scroll", e)
                            : d != null && Ce(e, o, d, s));
                }
              switch (n) {
                case "input":
                  (At(e), oi(e, r, !1));
                  break;
                case "textarea":
                  (At(e), ai(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ae(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? xn(e, !!r.multiple, o, !1)
                      : r.defaultValue != null &&
                        xn(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = ll);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (He(t), null);
      case 6:
        if (e && t.stateNode != null) Nu(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(u(166));
          if (((n = dn(kr.current)), dn(jt.current), dl(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Nt] = t),
              (o = r.nodeValue !== n) && ((e = st), e !== null))
            )
              switch (e.tag) {
                case 3:
                  rl(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    rl(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Nt] = t),
              (t.stateNode = r));
        }
        return (He(t), null);
      case 13:
        if (
          (ye(Se),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (we && it !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Ea(), In(), (t.flags |= 98560), (o = !1));
          else if (((o = dl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(u(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(u(317));
              o[Nt] = t;
            } else
              (In(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (He(t), (o = !1));
          } else (vt !== null && (Ls(vt), (vt = null)), (o = !0));
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Se.current & 1) !== 0
                  ? Te === 0 && (Te = 3)
                  : Is())),
            t.updateQueue !== null && (t.flags |= 4),
            He(t),
            null);
      case 4:
        return (
          Fn(),
          ws(e, t),
          e === null && mr(t.stateNode.containerInfo),
          He(t),
          null
        );
      case 10:
        return (Ko(t.type._context), He(t), null);
      case 17:
        return (et(t.type) && sl(), He(t), null);
      case 19:
        if ((ye(Se), (o = t.memoizedState), o === null)) return (He(t), null);
        if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
          if (r) Er(o, !1);
          else {
            if (Te !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((s = vl(e)), s !== null)) {
                  for (
                    t.flags |= 128,
                      Er(o, !1),
                      r = s.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    ((o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (s = o.alternate),
                      s === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = s.childLanes),
                          (o.lanes = s.lanes),
                          (o.child = s.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = s.memoizedProps),
                          (o.memoizedState = s.memoizedState),
                          (o.updateQueue = s.updateQueue),
                          (o.type = s.type),
                          (e = s.dependencies),
                          (o.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling));
                  return (ge(Se, (Se.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            o.tail !== null &&
              _e() > $n &&
              ((t.flags |= 128), (r = !0), Er(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = vl(s)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Er(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !s.alternate &&
                  !we)
              )
                return (He(t), null);
            } else
              2 * _e() - o.renderingStartTime > $n &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Er(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((s.sibling = t.child), (t.child = s))
            : ((n = o.last),
              n !== null ? (n.sibling = s) : (t.child = s),
              (o.last = s));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = _e()),
            (t.sibling = null),
            (n = Se.current),
            ge(Se, r ? (n & 1) | 2 : n & 1),
            t)
          : (He(t), null);
      case 22:
      case 23:
        return (
          Rs(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (at & 1073741824) !== 0 &&
              (He(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : He(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function rf(e, t) {
    switch (($o(t), t.tag)) {
      case 1:
        return (
          et(t.type) && sl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Fn(),
          ye(qe),
          ye(Be),
          ts(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return (qo(t), null);
      case 13:
        if (
          (ye(Se), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(u(340));
          In();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (ye(Se), null);
      case 4:
        return (Fn(), null);
      case 10:
        return (Ko(t.type._context), null);
      case 22:
      case 23:
        return (Rs(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var El = !1,
    Qe = !1,
    lf = typeof WeakSet == "function" ? WeakSet : Set,
    O = null;
  function Un(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          je(e, t, r);
        }
      else n.current = null;
  }
  function ks(e, t, n) {
    try {
      n();
    } catch (r) {
      je(e, t, r);
    }
  }
  var ju = !1;
  function of(e, t) {
    if (((Ro = Qr), (e = na()), Co(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, o.nodeType);
            } catch {
              n = null;
              break e;
            }
            var s = 0,
              c = -1,
              d = -1,
              y = 0,
              E = 0,
              _ = e,
              C = null;
            t: for (;;) {
              for (
                var R;
                _ !== n || (l !== 0 && _.nodeType !== 3) || (c = s + l),
                  _ !== o || (r !== 0 && _.nodeType !== 3) || (d = s + r),
                  _.nodeType === 3 && (s += _.nodeValue.length),
                  (R = _.firstChild) !== null;

              )
                ((C = _), (_ = R));
              for (;;) {
                if (_ === e) break t;
                if (
                  (C === n && ++y === l && (c = s),
                  C === o && ++E === r && (d = s),
                  (R = _.nextSibling) !== null)
                )
                  break;
                ((_ = C), (C = _.parentNode));
              }
              _ = R;
            }
            n = c === -1 || d === -1 ? null : { start: c, end: d };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Io = { focusedElem: e, selectionRange: n }, Qr = !1, O = t;
      O !== null;

    )
      if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (O = e));
      else
        for (; O !== null; ) {
          t = O;
          try {
            var F = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (F !== null) {
                    var V = F.memoizedProps,
                      Pe = F.memoizedState,
                      h = t.stateNode,
                      f = h.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? V : yt(t.type, V),
                        Pe,
                      );
                    h.__reactInternalSnapshotBeforeUpdate = f;
                  }
                  break;
                case 3:
                  var g = t.stateNode.containerInfo;
                  g.nodeType === 1
                    ? (g.textContent = "")
                    : g.nodeType === 9 &&
                      g.documentElement &&
                      g.removeChild(g.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(u(163));
              }
          } catch (b) {
            je(t, t.return, b);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (O = e));
            break;
          }
          O = t.return;
        }
    return ((F = ju), (ju = !1), F);
  }
  function _r(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          ((l.destroy = void 0), o !== void 0 && ks(t, n, o));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function _l(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Ss(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Cu(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Cu(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Nt],
          delete t[gr],
          delete t[Fo],
          delete t[Vd],
          delete t[$d])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Eu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function _u(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Eu(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ns(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = ll)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Ns(e, t, n), e = e.sibling; e !== null; )
        (Ns(e, t, n), (e = e.sibling));
  }
  function js(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (js(e, t, n), e = e.sibling; e !== null; )
        (js(e, t, n), (e = e.sibling));
  }
  var Ue = null,
    xt = !1;
  function Yt(e, t, n) {
    for (n = n.child; n !== null; ) (Pu(e, t, n), (n = n.sibling));
  }
  function Pu(e, t, n) {
    if (St && typeof St.onCommitFiberUnmount == "function")
      try {
        St.onCommitFiberUnmount(Ur, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Qe || Un(n, t);
      case 6:
        var r = Ue,
          l = xt;
        ((Ue = null),
          Yt(e, t, n),
          (Ue = r),
          (xt = l),
          Ue !== null &&
            (xt
              ? ((e = Ue),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Ue.removeChild(n.stateNode)));
        break;
      case 18:
        Ue !== null &&
          (xt
            ? ((e = Ue),
              (n = n.stateNode),
              e.nodeType === 8
                ? Oo(e.parentNode, n)
                : e.nodeType === 1 && Oo(e, n),
              or(e))
            : Oo(Ue, n.stateNode));
        break;
      case 4:
        ((r = Ue),
          (l = xt),
          (Ue = n.stateNode.containerInfo),
          (xt = !0),
          Yt(e, t, n),
          (Ue = r),
          (xt = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Qe &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var o = l,
              s = o.destroy;
            ((o = o.tag),
              s !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && ks(n, t, s),
              (l = l.next));
          } while (l !== r);
        }
        Yt(e, t, n);
        break;
      case 1:
        if (
          !Qe &&
          (Un(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            ((r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount());
          } catch (c) {
            je(n, t, c);
          }
        Yt(e, t, n);
        break;
      case 21:
        Yt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Qe = (r = Qe) || n.memoizedState !== null), Yt(e, t, n), (Qe = r))
          : Yt(e, t, n);
        break;
      default:
        Yt(e, t, n);
    }
  }
  function bu(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new lf()),
        t.forEach(function (r) {
          var l = hf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function wt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var o = e,
            s = t,
            c = s;
          e: for (; c !== null; ) {
            switch (c.tag) {
              case 5:
                ((Ue = c.stateNode), (xt = !1));
                break e;
              case 3:
                ((Ue = c.stateNode.containerInfo), (xt = !0));
                break e;
              case 4:
                ((Ue = c.stateNode.containerInfo), (xt = !0));
                break e;
            }
            c = c.return;
          }
          if (Ue === null) throw Error(u(160));
          (Pu(o, s, l), (Ue = null), (xt = !1));
          var d = l.alternate;
          (d !== null && (d.return = null), (l.return = null));
        } catch (y) {
          je(l, t, y);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) (zu(t, e), (t = t.sibling));
  }
  function zu(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((wt(t, e), Et(e), r & 4)) {
          try {
            (_r(3, e, e.return), _l(3, e));
          } catch (V) {
            je(e, e.return, V);
          }
          try {
            _r(5, e, e.return);
          } catch (V) {
            je(e, e.return, V);
          }
        }
        break;
      case 1:
        (wt(t, e), Et(e), r & 512 && n !== null && Un(n, n.return));
        break;
      case 5:
        if (
          (wt(t, e),
          Et(e),
          r & 512 && n !== null && Un(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Kn(l, "");
          } catch (V) {
            je(e, e.return, V);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            s = n !== null ? n.memoizedProps : o,
            c = e.type,
            d = e.updateQueue;
          if (((e.updateQueue = null), d !== null))
            try {
              (c === "input" &&
                o.type === "radio" &&
                o.name != null &&
                li(l, o),
                eo(c, s));
              var y = eo(c, o);
              for (s = 0; s < d.length; s += 2) {
                var E = d[s],
                  _ = d[s + 1];
                E === "style"
                  ? fi(l, _)
                  : E === "dangerouslySetInnerHTML"
                    ? ci(l, _)
                    : E === "children"
                      ? Kn(l, _)
                      : Ce(l, E, _, y);
              }
              switch (c) {
                case "input":
                  Yl(l, o);
                  break;
                case "textarea":
                  ii(l, o);
                  break;
                case "select":
                  var C = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var R = o.value;
                  R != null
                    ? xn(l, !!o.multiple, R, !1)
                    : C !== !!o.multiple &&
                      (o.defaultValue != null
                        ? xn(l, !!o.multiple, o.defaultValue, !0)
                        : xn(l, !!o.multiple, o.multiple ? [] : "", !1));
              }
              l[gr] = o;
            } catch (V) {
              je(e, e.return, V);
            }
        }
        break;
      case 6:
        if ((wt(t, e), Et(e), r & 4)) {
          if (e.stateNode === null) throw Error(u(162));
          ((l = e.stateNode), (o = e.memoizedProps));
          try {
            l.nodeValue = o;
          } catch (V) {
            je(e, e.return, V);
          }
        }
        break;
      case 3:
        if (
          (wt(t, e), Et(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            or(t.containerInfo);
          } catch (V) {
            je(e, e.return, V);
          }
        break;
      case 4:
        (wt(t, e), Et(e));
        break;
      case 13:
        (wt(t, e),
          Et(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (_s = _e())),
          r & 4 && bu(e));
        break;
      case 22:
        if (
          ((E = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Qe = (y = Qe) || E), wt(t, e), (Qe = y)) : wt(t, e),
          Et(e),
          r & 8192)
        ) {
          if (
            ((y = e.memoizedState !== null),
            (e.stateNode.isHidden = y) && !E && (e.mode & 1) !== 0)
          )
            for (O = e, E = e.child; E !== null; ) {
              for (_ = O = E; O !== null; ) {
                switch (((C = O), (R = C.child), C.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    _r(4, C, C.return);
                    break;
                  case 1:
                    Un(C, C.return);
                    var F = C.stateNode;
                    if (typeof F.componentWillUnmount == "function") {
                      ((r = C), (n = C.return));
                      try {
                        ((t = r),
                          (F.props = t.memoizedProps),
                          (F.state = t.memoizedState),
                          F.componentWillUnmount());
                      } catch (V) {
                        je(r, n, V);
                      }
                    }
                    break;
                  case 5:
                    Un(C, C.return);
                    break;
                  case 22:
                    if (C.memoizedState !== null) {
                      Ru(_);
                      continue;
                    }
                }
                R !== null ? ((R.return = C), (O = R)) : Ru(_);
              }
              E = E.sibling;
            }
          e: for (E = null, _ = e; ; ) {
            if (_.tag === 5) {
              if (E === null) {
                E = _;
                try {
                  ((l = _.stateNode),
                    y
                      ? ((o = l.style),
                        typeof o.setProperty == "function"
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none"))
                      : ((c = _.stateNode),
                        (d = _.memoizedProps.style),
                        (s =
                          d != null && d.hasOwnProperty("display")
                            ? d.display
                            : null),
                        (c.style.display = di("display", s))));
                } catch (V) {
                  je(e, e.return, V);
                }
              }
            } else if (_.tag === 6) {
              if (E === null)
                try {
                  _.stateNode.nodeValue = y ? "" : _.memoizedProps;
                } catch (V) {
                  je(e, e.return, V);
                }
            } else if (
              ((_.tag !== 22 && _.tag !== 23) ||
                _.memoizedState === null ||
                _ === e) &&
              _.child !== null
            ) {
              ((_.child.return = _), (_ = _.child));
              continue;
            }
            if (_ === e) break e;
            for (; _.sibling === null; ) {
              if (_.return === null || _.return === e) break e;
              (E === _ && (E = null), (_ = _.return));
            }
            (E === _ && (E = null),
              (_.sibling.return = _.return),
              (_ = _.sibling));
          }
        }
        break;
      case 19:
        (wt(t, e), Et(e), r & 4 && bu(e));
        break;
      case 21:
        break;
      default:
        (wt(t, e), Et(e));
    }
  }
  function Et(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Eu(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(u(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Kn(l, ""), (r.flags &= -33));
            var o = _u(e);
            js(e, o, l);
            break;
          case 3:
          case 4:
            var s = r.stateNode.containerInfo,
              c = _u(e);
            Ns(e, c, s);
            break;
          default:
            throw Error(u(161));
        }
      } catch (d) {
        je(e, e.return, d);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function sf(e, t, n) {
    ((O = e), Lu(e));
  }
  function Lu(e, t, n) {
    for (var r = (e.mode & 1) !== 0; O !== null; ) {
      var l = O,
        o = l.child;
      if (l.tag === 22 && r) {
        var s = l.memoizedState !== null || El;
        if (!s) {
          var c = l.alternate,
            d = (c !== null && c.memoizedState !== null) || Qe;
          c = El;
          var y = Qe;
          if (((El = s), (Qe = d) && !y))
            for (O = l; O !== null; )
              ((s = O),
                (d = s.child),
                s.tag === 22 && s.memoizedState !== null
                  ? Iu(l)
                  : d !== null
                    ? ((d.return = s), (O = d))
                    : Iu(l));
          for (; o !== null; ) ((O = o), Lu(o), (o = o.sibling));
          ((O = l), (El = c), (Qe = y));
        }
        Tu(e);
      } else
        (l.subtreeFlags & 8772) !== 0 && o !== null
          ? ((o.return = l), (O = o))
          : Tu(e);
    }
  }
  function Tu(e) {
    for (; O !== null; ) {
      var t = O;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Qe || _l(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Qe)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : yt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var o = t.updateQueue;
                o !== null && Ra(t, o, r);
                break;
              case 3:
                var s = t.updateQueue;
                if (s !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Ra(t, s, n);
                }
                break;
              case 5:
                var c = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = c;
                  var d = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d.autoFocus && n.focus();
                      break;
                    case "img":
                      d.src && (n.src = d.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var y = t.alternate;
                  if (y !== null) {
                    var E = y.memoizedState;
                    if (E !== null) {
                      var _ = E.dehydrated;
                      _ !== null && or(_);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(u(163));
            }
          Qe || (t.flags & 512 && Ss(t));
        } catch (C) {
          je(t, t.return, C);
        }
      }
      if (t === e) {
        O = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (O = n));
        break;
      }
      O = t.return;
    }
  }
  function Ru(e) {
    for (; O !== null; ) {
      var t = O;
      if (t === e) {
        O = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (O = n));
        break;
      }
      O = t.return;
    }
  }
  function Iu(e) {
    for (; O !== null; ) {
      var t = O;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              _l(4, t);
            } catch (d) {
              je(t, n, d);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (d) {
                je(t, l, d);
              }
            }
            var o = t.return;
            try {
              Ss(t);
            } catch (d) {
              je(t, o, d);
            }
            break;
          case 5:
            var s = t.return;
            try {
              Ss(t);
            } catch (d) {
              je(t, s, d);
            }
        }
      } catch (d) {
        je(t, t.return, d);
      }
      if (t === e) {
        O = null;
        break;
      }
      var c = t.sibling;
      if (c !== null) {
        ((c.return = t.return), (O = c));
        break;
      }
      O = t.return;
    }
  }
  var af = Math.ceil,
    Pl = ie.ReactCurrentDispatcher,
    Cs = ie.ReactCurrentOwner,
    pt = ie.ReactCurrentBatchConfig,
    se = 0,
    Ae = null,
    ze = null,
    Ve = 0,
    at = 0,
    Vn = Wt(0),
    Te = 0,
    Pr = null,
    pn = 0,
    bl = 0,
    Es = 0,
    br = null,
    nt = null,
    _s = 0,
    $n = 1 / 0,
    It = null,
    zl = !1,
    Ps = null,
    Xt = null,
    Ll = !1,
    Zt = null,
    Tl = 0,
    zr = 0,
    bs = null,
    Rl = -1,
    Il = 0;
  function Xe() {
    return (se & 6) !== 0 ? _e() : Rl !== -1 ? Rl : (Rl = _e());
  }
  function Jt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (se & 2) !== 0 && Ve !== 0
        ? Ve & -Ve
        : Wd.transition !== null
          ? (Il === 0 && (Il = _i()), Il)
          : ((e = pe),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : Ai(e.type))),
            e);
  }
  function kt(e, t, n, r) {
    if (50 < zr) throw ((zr = 0), (bs = null), Error(u(185)));
    (er(e, n, r),
      ((se & 2) === 0 || e !== Ae) &&
        (e === Ae && ((se & 2) === 0 && (bl |= n), Te === 4 && qt(e, Ve)),
        rt(e, r),
        n === 1 &&
          se === 0 &&
          (t.mode & 1) === 0 &&
          (($n = _e() + 500), al && Qt())));
  }
  function rt(e, t) {
    var n = e.callbackNode;
    Wc(e, t);
    var r = Br(e, e === Ae ? Ve : 0);
    if (r === 0)
      (n !== null && ji(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && ji(n), t === 1))
        (e.tag === 0 ? Bd(Au.bind(null, e)) : ka(Au.bind(null, e)),
          Dd(function () {
            (se & 6) === 0 && Qt();
          }),
          (n = null));
      else {
        switch (Pi(r)) {
          case 1:
            n = io;
            break;
          case 4:
            n = Ci;
            break;
          case 16:
            n = Dr;
            break;
          case 536870912:
            n = Ei;
            break;
          default:
            n = Dr;
        }
        n = Wu(n, Mu.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function Mu(e, t) {
    if (((Rl = -1), (Il = 0), (se & 6) !== 0)) throw Error(u(327));
    var n = e.callbackNode;
    if (Bn() && e.callbackNode !== n) return null;
    var r = Br(e, e === Ae ? Ve : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Ml(e, r);
    else {
      t = r;
      var l = se;
      se |= 2;
      var o = Fu();
      (Ae !== e || Ve !== t) && ((It = null), ($n = _e() + 500), hn(e, t));
      do
        try {
          df();
          break;
        } catch (c) {
          Ou(e, c);
        }
      while (!0);
      (Go(),
        (Pl.current = o),
        (se = l),
        ze !== null ? (t = 0) : ((Ae = null), (Ve = 0), (t = Te)));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = ao(e)), l !== 0 && ((r = l), (t = zs(e, l)))),
        t === 1)
      )
        throw ((n = Pr), hn(e, 0), qt(e, r), rt(e, _e()), n);
      if (t === 6) qt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !uf(l) &&
            ((t = Ml(e, r)),
            t === 2 && ((o = ao(e)), o !== 0 && ((r = o), (t = zs(e, o)))),
            t === 1))
        )
          throw ((n = Pr), hn(e, 0), qt(e, r), rt(e, _e()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            gn(e, nt, It);
            break;
          case 3:
            if (
              (qt(e, r),
              (r & 130023424) === r && ((t = _s + 500 - _e()), 10 < t))
            ) {
              if (Br(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (Xe(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = Ao(gn.bind(null, e, nt, It), t);
              break;
            }
            gn(e, nt, It);
            break;
          case 4:
            if ((qt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var s = 31 - ht(r);
              ((o = 1 << s), (s = t[s]), s > l && (l = s), (r &= ~o));
            }
            if (
              ((r = l),
              (r = _e() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * af(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Ao(gn.bind(null, e, nt, It), r);
              break;
            }
            gn(e, nt, It);
            break;
          case 5:
            gn(e, nt, It);
            break;
          default:
            throw Error(u(329));
        }
      }
    }
    return (rt(e, _e()), e.callbackNode === n ? Mu.bind(null, e) : null);
  }
  function zs(e, t) {
    var n = br;
    return (
      e.current.memoizedState.isDehydrated && (hn(e, t).flags |= 256),
      (e = Ml(e, t)),
      e !== 2 && ((t = nt), (nt = n), t !== null && Ls(t)),
      e
    );
  }
  function Ls(e) {
    nt === null ? (nt = e) : nt.push.apply(nt, e);
  }
  function uf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!gt(o(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function qt(e, t) {
    for (
      t &= ~Es,
        t &= ~bl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - ht(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function Au(e) {
    if ((se & 6) !== 0) throw Error(u(327));
    Bn();
    var t = Br(e, 0);
    if ((t & 1) === 0) return (rt(e, _e()), null);
    var n = Ml(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = ao(e);
      r !== 0 && ((t = r), (n = zs(e, r)));
    }
    if (n === 1) throw ((n = Pr), hn(e, 0), qt(e, t), rt(e, _e()), n);
    if (n === 6) throw Error(u(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      gn(e, nt, It),
      rt(e, _e()),
      null
    );
  }
  function Ts(e, t) {
    var n = se;
    se |= 1;
    try {
      return e(t);
    } finally {
      ((se = n), se === 0 && (($n = _e() + 500), al && Qt()));
    }
  }
  function mn(e) {
    Zt !== null && Zt.tag === 0 && (se & 6) === 0 && Bn();
    var t = se;
    se |= 1;
    var n = pt.transition,
      r = pe;
    try {
      if (((pt.transition = null), (pe = 1), e)) return e();
    } finally {
      ((pe = r), (pt.transition = n), (se = t), (se & 6) === 0 && Qt());
    }
  }
  function Rs() {
    ((at = Vn.current), ye(Vn));
  }
  function hn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Fd(n)), ze !== null))
      for (n = ze.return; n !== null; ) {
        var r = n;
        switch (($o(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && sl());
            break;
          case 3:
            (Fn(), ye(qe), ye(Be), ts());
            break;
          case 5:
            qo(r);
            break;
          case 4:
            Fn();
            break;
          case 13:
            ye(Se);
            break;
          case 19:
            ye(Se);
            break;
          case 10:
            Ko(r.type._context);
            break;
          case 22:
          case 23:
            Rs();
        }
        n = n.return;
      }
    if (
      ((Ae = e),
      (ze = e = en(e.current, null)),
      (Ve = at = t),
      (Te = 0),
      (Pr = null),
      (Es = bl = pn = 0),
      (nt = br = null),
      cn !== null)
    ) {
      for (t = 0; t < cn.length; t++)
        if (((n = cn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var s = o.next;
            ((o.next = l), (r.next = s));
          }
          n.pending = r;
        }
      cn = null;
    }
    return e;
  }
  function Ou(e, t) {
    do {
      var n = ze;
      try {
        if ((Go(), (yl.current = Sl), xl)) {
          for (var r = Ne.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          xl = !1;
        }
        if (
          ((fn = 0),
          (Me = Le = Ne = null),
          (Sr = !1),
          (Nr = 0),
          (Cs.current = null),
          n === null || n.return === null)
        ) {
          ((Te = 1), (Pr = t), (ze = null));
          break;
        }
        e: {
          var o = e,
            s = n.return,
            c = n,
            d = t;
          if (
            ((t = Ve),
            (c.flags |= 32768),
            d !== null && typeof d == "object" && typeof d.then == "function")
          ) {
            var y = d,
              E = c,
              _ = E.tag;
            if ((E.mode & 1) === 0 && (_ === 0 || _ === 11 || _ === 15)) {
              var C = E.alternate;
              C
                ? ((E.updateQueue = C.updateQueue),
                  (E.memoizedState = C.memoizedState),
                  (E.lanes = C.lanes))
                : ((E.updateQueue = null), (E.memoizedState = null));
            }
            var R = au(s);
            if (R !== null) {
              ((R.flags &= -257),
                uu(R, s, c, o, t),
                R.mode & 1 && iu(o, y, t),
                (t = R),
                (d = y));
              var F = t.updateQueue;
              if (F === null) {
                var V = new Set();
                (V.add(d), (t.updateQueue = V));
              } else F.add(d);
              break e;
            } else {
              if ((t & 1) === 0) {
                (iu(o, y, t), Is());
                break e;
              }
              d = Error(u(426));
            }
          } else if (we && c.mode & 1) {
            var Pe = au(s);
            if (Pe !== null) {
              ((Pe.flags & 65536) === 0 && (Pe.flags |= 256),
                uu(Pe, s, c, o, t),
                Ho(Dn(d, c)));
              break e;
            }
          }
          ((o = d = Dn(d, c)),
            Te !== 4 && (Te = 2),
            br === null ? (br = [o]) : br.push(o),
            (o = s));
          do {
            switch (o.tag) {
              case 3:
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var h = ou(o, d, t);
                Ta(o, h);
                break e;
              case 1:
                c = d;
                var f = o.type,
                  g = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof f.getDerivedStateFromError == "function" ||
                    (g !== null &&
                      typeof g.componentDidCatch == "function" &&
                      (Xt === null || !Xt.has(g))))
                ) {
                  ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                  var b = su(o, c, t);
                  Ta(o, b);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Uu(n);
      } catch ($) {
        ((t = $), ze === n && n !== null && (ze = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Fu() {
    var e = Pl.current;
    return ((Pl.current = Sl), e === null ? Sl : e);
  }
  function Is() {
    ((Te === 0 || Te === 3 || Te === 2) && (Te = 4),
      Ae === null ||
        ((pn & 268435455) === 0 && (bl & 268435455) === 0) ||
        qt(Ae, Ve));
  }
  function Ml(e, t) {
    var n = se;
    se |= 2;
    var r = Fu();
    (Ae !== e || Ve !== t) && ((It = null), hn(e, t));
    do
      try {
        cf();
        break;
      } catch (l) {
        Ou(e, l);
      }
    while (!0);
    if ((Go(), (se = n), (Pl.current = r), ze !== null)) throw Error(u(261));
    return ((Ae = null), (Ve = 0), Te);
  }
  function cf() {
    for (; ze !== null; ) Du(ze);
  }
  function df() {
    for (; ze !== null && !Mc(); ) Du(ze);
  }
  function Du(e) {
    var t = Bu(e.alternate, e, at);
    ((e.memoizedProps = e.pendingProps),
      t === null ? Uu(e) : (ze = t),
      (Cs.current = null));
  }
  function Uu(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = nf(n, t, at)), n !== null)) {
          ze = n;
          return;
        }
      } else {
        if (((n = rf(n, t)), n !== null)) {
          ((n.flags &= 32767), (ze = n));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Te = 6), (ze = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        ze = t;
        return;
      }
      ze = t = e;
    } while (t !== null);
    Te === 0 && (Te = 5);
  }
  function gn(e, t, n) {
    var r = pe,
      l = pt.transition;
    try {
      ((pt.transition = null), (pe = 1), ff(e, t, n, r));
    } finally {
      ((pt.transition = l), (pe = r));
    }
    return null;
  }
  function ff(e, t, n, r) {
    do Bn();
    while (Zt !== null);
    if ((se & 6) !== 0) throw Error(u(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(u(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var o = n.lanes | n.childLanes;
    if (
      (Hc(e, o),
      e === Ae && ((ze = Ae = null), (Ve = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Ll ||
        ((Ll = !0),
        Wu(Dr, function () {
          return (Bn(), null);
        })),
      (o = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || o)
    ) {
      ((o = pt.transition), (pt.transition = null));
      var s = pe;
      pe = 1;
      var c = se;
      ((se |= 4),
        (Cs.current = null),
        of(e, n),
        zu(n, e),
        Ld(Io),
        (Qr = !!Ro),
        (Io = Ro = null),
        (e.current = n),
        sf(n),
        Ac(),
        (se = c),
        (pe = s),
        (pt.transition = o));
    } else e.current = n;
    if (
      (Ll && ((Ll = !1), (Zt = e), (Tl = l)),
      (o = e.pendingLanes),
      o === 0 && (Xt = null),
      Dc(n.stateNode),
      rt(e, _e()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (zl) throw ((zl = !1), (e = Ps), (Ps = null), e);
    return (
      (Tl & 1) !== 0 && e.tag !== 0 && Bn(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === bs ? zr++ : ((zr = 0), (bs = e))) : (zr = 0),
      Qt(),
      null
    );
  }
  function Bn() {
    if (Zt !== null) {
      var e = Pi(Tl),
        t = pt.transition,
        n = pe;
      try {
        if (((pt.transition = null), (pe = 16 > e ? 16 : e), Zt === null))
          var r = !1;
        else {
          if (((e = Zt), (Zt = null), (Tl = 0), (se & 6) !== 0))
            throw Error(u(331));
          var l = se;
          for (se |= 4, O = e.current; O !== null; ) {
            var o = O,
              s = o.child;
            if ((O.flags & 16) !== 0) {
              var c = o.deletions;
              if (c !== null) {
                for (var d = 0; d < c.length; d++) {
                  var y = c[d];
                  for (O = y; O !== null; ) {
                    var E = O;
                    switch (E.tag) {
                      case 0:
                      case 11:
                      case 15:
                        _r(8, E, o);
                    }
                    var _ = E.child;
                    if (_ !== null) ((_.return = E), (O = _));
                    else
                      for (; O !== null; ) {
                        E = O;
                        var C = E.sibling,
                          R = E.return;
                        if ((Cu(E), E === y)) {
                          O = null;
                          break;
                        }
                        if (C !== null) {
                          ((C.return = R), (O = C));
                          break;
                        }
                        O = R;
                      }
                  }
                }
                var F = o.alternate;
                if (F !== null) {
                  var V = F.child;
                  if (V !== null) {
                    F.child = null;
                    do {
                      var Pe = V.sibling;
                      ((V.sibling = null), (V = Pe));
                    } while (V !== null);
                  }
                }
                O = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && s !== null)
              ((s.return = o), (O = s));
            else
              e: for (; O !== null; ) {
                if (((o = O), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _r(9, o, o.return);
                  }
                var h = o.sibling;
                if (h !== null) {
                  ((h.return = o.return), (O = h));
                  break e;
                }
                O = o.return;
              }
          }
          var f = e.current;
          for (O = f; O !== null; ) {
            s = O;
            var g = s.child;
            if ((s.subtreeFlags & 2064) !== 0 && g !== null)
              ((g.return = s), (O = g));
            else
              e: for (s = f; O !== null; ) {
                if (((c = O), (c.flags & 2048) !== 0))
                  try {
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        _l(9, c);
                    }
                  } catch ($) {
                    je(c, c.return, $);
                  }
                if (c === s) {
                  O = null;
                  break e;
                }
                var b = c.sibling;
                if (b !== null) {
                  ((b.return = c.return), (O = b));
                  break e;
                }
                O = c.return;
              }
          }
          if (
            ((se = l),
            Qt(),
            St && typeof St.onPostCommitFiberRoot == "function")
          )
            try {
              St.onPostCommitFiberRoot(Ur, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((pe = n), (pt.transition = t));
      }
    }
    return !1;
  }
  function Vu(e, t, n) {
    ((t = Dn(n, t)),
      (t = ou(e, t, 1)),
      (e = Kt(e, t, 1)),
      (t = Xe()),
      e !== null && (er(e, 1, t), rt(e, t)));
  }
  function je(e, t, n) {
    if (e.tag === 3) Vu(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Vu(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Xt === null || !Xt.has(r)))
          ) {
            ((e = Dn(n, e)),
              (e = su(t, e, 1)),
              (t = Kt(t, e, 1)),
              (e = Xe()),
              t !== null && (er(t, 1, e), rt(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function pf(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Xe()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Ae === e &&
        (Ve & n) === n &&
        (Te === 4 || (Te === 3 && (Ve & 130023424) === Ve && 500 > _e() - _s)
          ? hn(e, 0)
          : (Es |= n)),
      rt(e, t));
  }
  function $u(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = $r), ($r <<= 1), ($r & 130023424) === 0 && ($r = 4194304)));
    var n = Xe();
    ((e = Lt(e, t)), e !== null && (er(e, t, n), rt(e, n)));
  }
  function mf(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), $u(e, n));
  }
  function hf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(u(314));
    }
    (r !== null && r.delete(t), $u(e, n));
  }
  var Bu;
  Bu = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || qe.current) tt = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return ((tt = !1), tf(e, t, n));
        tt = (e.flags & 131072) !== 0;
      }
    else ((tt = !1), we && (t.flags & 1048576) !== 0 && Sa(t, cl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (Cl(e, t), (e = t.pendingProps));
        var l = Ln(t, Be.current);
        (On(t, n), (l = ls(null, t, r, e, l, n)));
        var o = os();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              et(r) ? ((o = !0), il(t)) : (o = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Zo(t),
              (l.updater = Nl),
              (t.stateNode = l),
              (l._reactInternals = t),
              ds(t, r, e, n),
              (t = hs(null, t, r, !0, o, n)))
            : ((t.tag = 0), we && o && Vo(t), Ye(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Cl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = vf(r)),
            (e = yt(r, e)),
            l)
          ) {
            case 0:
              t = ms(null, t, r, e, n);
              break e;
            case 1:
              t = hu(null, t, r, e, n);
              break e;
            case 11:
              t = cu(null, t, r, e, n);
              break e;
            case 14:
              t = du(null, t, r, yt(r.type, e), n);
              break e;
          }
          throw Error(u(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : yt(r, l)),
          ms(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : yt(r, l)),
          hu(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((gu(t), e === null)) throw Error(u(387));
          ((r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            La(e, t),
            gl(t, r, null, n));
          var s = t.memoizedState;
          if (((r = s.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: s.cache,
                pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                transitions: s.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              ((l = Dn(Error(u(423)), t)), (t = vu(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = Dn(Error(u(424)), t)), (t = vu(e, t, r, n, l)));
              break e;
            } else
              for (
                it = Bt(t.stateNode.containerInfo.firstChild),
                  st = t,
                  we = !0,
                  vt = null,
                  n = ba(t, null, r, n),
                  t.child = n;
                n;

              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((In(), r === l)) {
              t = Rt(e, t, n);
              break e;
            }
            Ye(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Ia(t),
          e === null && Wo(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (s = l.children),
          Mo(r, l) ? (s = null) : o !== null && Mo(r, o) && (t.flags |= 32),
          mu(e, t),
          Ye(e, t, s, n),
          t.child
        );
      case 6:
        return (e === null && Wo(t), null);
      case 13:
        return yu(e, t, n);
      case 4:
        return (
          Jo(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Mn(t, null, r, n)) : Ye(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : yt(r, l)),
          cu(e, t, r, l, n)
        );
      case 7:
        return (Ye(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Ye(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Ye(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (s = l.value),
            ge(pl, r._currentValue),
            (r._currentValue = s),
            o !== null)
          )
            if (gt(o.value, s)) {
              if (o.children === l.children && !qe.current) {
                t = Rt(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var c = o.dependencies;
                if (c !== null) {
                  s = o.child;
                  for (var d = c.firstContext; d !== null; ) {
                    if (d.context === r) {
                      if (o.tag === 1) {
                        ((d = Tt(-1, n & -n)), (d.tag = 2));
                        var y = o.updateQueue;
                        if (y !== null) {
                          y = y.shared;
                          var E = y.pending;
                          (E === null
                            ? (d.next = d)
                            : ((d.next = E.next), (E.next = d)),
                            (y.pending = d));
                        }
                      }
                      ((o.lanes |= n),
                        (d = o.alternate),
                        d !== null && (d.lanes |= n),
                        Yo(o.return, n, t),
                        (c.lanes |= n));
                      break;
                    }
                    d = d.next;
                  }
                } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((s = o.return), s === null)) throw Error(u(341));
                  ((s.lanes |= n),
                    (c = s.alternate),
                    c !== null && (c.lanes |= n),
                    Yo(s, n, t),
                    (s = o.sibling));
                } else s = o.child;
                if (s !== null) s.return = o;
                else
                  for (s = o; s !== null; ) {
                    if (s === t) {
                      s = null;
                      break;
                    }
                    if (((o = s.sibling), o !== null)) {
                      ((o.return = s.return), (s = o));
                      break;
                    }
                    s = s.return;
                  }
                o = s;
              }
          (Ye(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          On(t, n),
          (l = dt(l)),
          (r = r(l)),
          (t.flags |= 1),
          Ye(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = yt(r, t.pendingProps)),
          (l = yt(r.type, l)),
          du(e, t, r, l, n)
        );
      case 15:
        return fu(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : yt(r, l)),
          Cl(e, t),
          (t.tag = 1),
          et(r) ? ((e = !0), il(t)) : (e = !1),
          On(t, n),
          ru(t, r, l),
          ds(t, r, l, n),
          hs(null, t, r, !0, e, n)
        );
      case 19:
        return wu(e, t, n);
      case 22:
        return pu(e, t, n);
    }
    throw Error(u(156, t.tag));
  };
  function Wu(e, t) {
    return Ni(e, t);
  }
  function gf(e, t, n, r) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function mt(e, t, n, r) {
    return new gf(e, t, n, r);
  }
  function Ms(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function vf(e) {
    if (typeof e == "function") return Ms(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Fe)) return 11;
      if (e === De) return 14;
    }
    return 2;
  }
  function en(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = mt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Al(e, t, n, r, l, o) {
    var s = 2;
    if (((r = e), typeof e == "function")) Ms(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else
      e: switch (e) {
        case de:
          return vn(n.children, l, o, t);
        case B:
          ((s = 8), (l |= 8));
          break;
        case Ee:
          return (
            (e = mt(12, n, t, l | 2)),
            (e.elementType = Ee),
            (e.lanes = o),
            e
          );
        case $e:
          return (
            (e = mt(13, n, t, l)),
            (e.elementType = $e),
            (e.lanes = o),
            e
          );
        case Ke:
          return (
            (e = mt(19, n, t, l)),
            (e.elementType = Ke),
            (e.lanes = o),
            e
          );
        case ce:
          return Ol(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Ze:
                s = 10;
                break e;
              case Je:
                s = 9;
                break e;
              case Fe:
                s = 11;
                break e;
              case De:
                s = 14;
                break e;
              case xe:
                ((s = 16), (r = null));
                break e;
            }
          throw Error(u(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = mt(s, n, t, l)),
      (t.elementType = e),
      (t.type = r),
      (t.lanes = o),
      t
    );
  }
  function vn(e, t, n, r) {
    return ((e = mt(7, e, r, t)), (e.lanes = n), e);
  }
  function Ol(e, t, n, r) {
    return (
      (e = mt(22, e, r, t)),
      (e.elementType = ce),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function As(e, t, n) {
    return ((e = mt(6, e, null, t)), (e.lanes = n), e);
  }
  function Os(e, t, n) {
    return (
      (t = mt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function yf(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = uo(0)),
      (this.expirationTimes = uo(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = uo(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Fs(e, t, n, r, l, o, s, c, d) {
    return (
      (e = new yf(e, t, n, c, d)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = mt(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Zo(o),
      e
    );
  }
  function xf(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: he,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Hu(e) {
    if (!e) return Ht;
    e = e._reactInternals;
    e: {
      if (ln(e) !== e || e.tag !== 1) throw Error(u(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (et(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(u(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (et(n)) return xa(e, n, t);
    }
    return t;
  }
  function Qu(e, t, n, r, l, o, s, c, d) {
    return (
      (e = Fs(n, r, !0, e, l, o, s, c, d)),
      (e.context = Hu(null)),
      (n = e.current),
      (r = Xe()),
      (l = Jt(n)),
      (o = Tt(r, l)),
      (o.callback = t ?? null),
      Kt(n, o, l),
      (e.current.lanes = l),
      er(e, l, r),
      rt(e, r),
      e
    );
  }
  function Fl(e, t, n, r) {
    var l = t.current,
      o = Xe(),
      s = Jt(l);
    return (
      (n = Hu(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Tt(o, s)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Kt(l, t, s)),
      e !== null && (kt(e, l, s, o), hl(e, l, s)),
      s
    );
  }
  function Dl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Gu(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ds(e, t) {
    (Gu(e, t), (e = e.alternate) && Gu(e, t));
  }
  function wf() {
    return null;
  }
  var Ku =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Us(e) {
    this._internalRoot = e;
  }
  ((Ul.prototype.render = Us.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(u(409));
      Fl(e, t, null, null);
    }),
    (Ul.prototype.unmount = Us.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (mn(function () {
            Fl(null, e, null, null);
          }),
            (t[_t] = null));
        }
      }));
  function Ul(e) {
    this._internalRoot = e;
  }
  Ul.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Li();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ut.length && t !== 0 && t < Ut[n].priority; n++);
      (Ut.splice(n, 0, e), n === 0 && Ii(e));
    }
  };
  function Vs(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Vl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Yu() {}
  function kf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function () {
          var y = Dl(s);
          o.call(y);
        };
      }
      var s = Qu(t, r, e, 0, null, !1, !1, "", Yu);
      return (
        (e._reactRootContainer = s),
        (e[_t] = s.current),
        mr(e.nodeType === 8 ? e.parentNode : e),
        mn(),
        s
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var c = r;
      r = function () {
        var y = Dl(d);
        c.call(y);
      };
    }
    var d = Fs(e, 0, !1, null, null, !1, !1, "", Yu);
    return (
      (e._reactRootContainer = d),
      (e[_t] = d.current),
      mr(e.nodeType === 8 ? e.parentNode : e),
      mn(function () {
        Fl(t, d, n, r);
      }),
      d
    );
  }
  function $l(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var s = o;
      if (typeof l == "function") {
        var c = l;
        l = function () {
          var d = Dl(s);
          c.call(d);
        };
      }
      Fl(t, s, e, l);
    } else s = kf(n, t, e, l, r);
    return Dl(s);
  }
  ((bi = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = qn(t.pendingLanes);
          n !== 0 &&
            (co(t, n | 1),
            rt(t, _e()),
            (se & 6) === 0 && (($n = _e() + 500), Qt()));
        }
        break;
      case 13:
        (mn(function () {
          var r = Lt(e, 1);
          if (r !== null) {
            var l = Xe();
            kt(r, e, 1, l);
          }
        }),
          Ds(e, 1));
    }
  }),
    (fo = function (e) {
      if (e.tag === 13) {
        var t = Lt(e, 134217728);
        if (t !== null) {
          var n = Xe();
          kt(t, e, 134217728, n);
        }
        Ds(e, 134217728);
      }
    }),
    (zi = function (e) {
      if (e.tag === 13) {
        var t = Jt(e),
          n = Lt(e, t);
        if (n !== null) {
          var r = Xe();
          kt(n, e, t, r);
        }
        Ds(e, t);
      }
    }),
    (Li = function () {
      return pe;
    }),
    (Ti = function (e, t) {
      var n = pe;
      try {
        return ((pe = e), t());
      } finally {
        pe = n;
      }
    }),
    (ro = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Yl(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = ol(r);
                if (!l) throw Error(u(90));
                (rn(r), Yl(r, l));
              }
            }
          }
          break;
        case "textarea":
          ii(e, n);
          break;
        case "select":
          ((t = n.value), t != null && xn(e, !!n.multiple, t, !1));
      }
    }),
    (gi = Ts),
    (vi = mn));
  var Sf = { usingClientEntryPoint: !1, Events: [vr, bn, ol, mi, hi, Ts] },
    Lr = {
      findFiberByHostInstance: on,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Nf = {
      bundleType: Lr.bundleType,
      version: Lr.version,
      rendererPackageName: Lr.rendererPackageName,
      rendererConfig: Lr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ie.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = ki(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Lr.findFiberByHostInstance || wf,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Bl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Bl.isDisabled && Bl.supportsFiber)
      try {
        ((Ur = Bl.inject(Nf)), (St = Bl));
      } catch {}
  }
  return (
    (lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sf),
    (lt.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Vs(t)) throw Error(u(200));
      return xf(e, t, null, n);
    }),
    (lt.createRoot = function (e, t) {
      if (!Vs(e)) throw Error(u(299));
      var n = !1,
        r = "",
        l = Ku;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Fs(e, 1, !1, null, null, n, !1, r, l)),
        (e[_t] = t.current),
        mr(e.nodeType === 8 ? e.parentNode : e),
        new Us(t)
      );
    }),
    (lt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(u(188))
          : ((e = Object.keys(e).join(",")), Error(u(268, e)));
      return ((e = ki(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (lt.flushSync = function (e) {
      return mn(e);
    }),
    (lt.hydrate = function (e, t, n) {
      if (!Vl(t)) throw Error(u(200));
      return $l(null, e, t, !0, n);
    }),
    (lt.hydrateRoot = function (e, t, n) {
      if (!Vs(e)) throw Error(u(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = "",
        s = Ku;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
        (t = Qu(t, null, e, 1, n ?? null, l, !1, o, s)),
        (e[_t] = t.current),
        mr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new Ul(t);
    }),
    (lt.render = function (e, t, n) {
      if (!Vl(t)) throw Error(u(200));
      return $l(null, e, t, !1, n);
    }),
    (lt.unmountComponentAtNode = function (e) {
      if (!Vl(e)) throw Error(u(40));
      return e._reactRootContainer
        ? (mn(function () {
            $l(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[_t] = null));
            });
          }),
          !0)
        : !1;
    }),
    (lt.unstable_batchedUpdates = Ts),
    (lt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Vl(n)) throw Error(u(200));
      if (e == null || e._reactInternals === void 0) throw Error(u(38));
      return $l(e, t, n, !1, r);
    }),
    (lt.version = "18.3.1-next-f1338f8080-20240426"),
    lt
  );
}
var rc;
function Lf() {
  if (rc) return Ws.exports;
  rc = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (p) {
        console.error(p);
      }
  }
  return (a(), (Ws.exports = zf()), Ws.exports);
}
var lc;
function Tf() {
  if (lc) return Wl;
  lc = 1;
  var a = Lf();
  return ((Wl.createRoot = a.createRoot), (Wl.hydrateRoot = a.hydrateRoot), Wl);
}
var Rf = Tf(),
  le = Js();
const oc = [
    {
      id: "1",
      name: "Gmail",
      email: "user@gmail.com",
      riskLevel: "safe",
      lastChecked: "Today, 2:30 PM",
      connectedSince: "January 2023",
      websiteUrl: "https://mail.google.com",
      issues: [],
    },
    {
      id: "2",
      name: "Amazon",
      email: "user@example.com",
      riskLevel: "moderate",
      lastChecked: "Today, 2:30 PM",
      connectedSince: "March 2023",
      websiteUrl: "https://www.amazon.com",
      issues: [
        {
          id: "2-1",
          title: "Weak Password Strength",
          description: "Password is less than 12 characters",
          severity: "medium",
          fixed: !1,
        },
        {
          id: "2-2",
          title: "Last Password Update",
          description: "Password was last changed 18 months ago",
          severity: "low",
          fixed: !1,
        },
      ],
    },
    {
      id: "3",
      name: "Netflix",
      email: "user@example.com",
      riskLevel: "unsafe",
      lastChecked: "Today, 2:30 PM",
      connectedSince: "February 2023",
      websiteUrl: "https://www.netflix.com",
      issues: [
        {
          id: "3-1",
          title: "Reused Password",
          description: "This password is used on 3 other accounts",
          severity: "high",
          fixed: !1,
        },
        {
          id: "3-2",
          title: "No 2FA Enabled",
          description: "Two-factor authentication is not active",
          severity: "high",
          fixed: !1,
        },
        {
          id: "3-3",
          title: "Weak Password Strength",
          description: "Password is less than 12 characters",
          severity: "medium",
          fixed: !1,
        },
        {
          id: "3-4",
          title: "Last Password Update",
          description: "Password was last changed 18 months ago",
          severity: "low",
          fixed: !1,
        },
      ],
    },
    {
      id: "4",
      name: "Facebook",
      email: "user@facebook.com",
      riskLevel: "safe",
      lastChecked: "Today, 2:30 PM",
      connectedSince: "April 2023",
      websiteUrl: "https://www.facebook.com",
      issues: [],
    },
    {
      id: "5",
      name: "Banking App",
      email: "user@bank.com",
      riskLevel: "unsafe",
      lastChecked: "Today, 2:30 PM",
      connectedSince: "May 2023",
      websiteUrl: "https://www.bankofamerica.com",
      issues: [
        {
          id: "5-1",
          title: "Reused Password",
          description:
            "This password is identical to your email account password",
          severity: "high",
          fixed: !1,
        },
        {
          id: "5-2",
          title: "No 2FA Enabled",
          description:
            "Two-factor authentication is not active on this financial account",
          severity: "high",
          fixed: !1,
        },
        {
          id: "5-3",
          title: "Last Password Update",
          description: "Password was last changed 24 months ago",
          severity: "medium",
          fixed: !1,
        },
      ],
    },
    {
      id: "6",
      name: "Spotify",
      email: "user@spotify.com",
      riskLevel: "safe",
      lastChecked: "Today, 2:30 PM",
      connectedSince: "June 2023",
      websiteUrl: "https://www.spotify.com",
      issues: [],
    },
    {
      id: "7",
      name: "LinkedIn",
      email: "user@linkedin.com",
      riskLevel: "safe",
      lastChecked: "Today, 2:30 PM",
      connectedSince: "July 2023",
      websiteUrl: "https://www.linkedin.com",
      issues: [],
    },
    {
      id: "8",
      name: "Twitter",
      email: "user@twitter.com",
      riskLevel: "moderate",
      lastChecked: "Today, 2:30 PM",
      connectedSince: "August 2023",
      websiteUrl: "https://www.twitter.com",
      issues: [
        {
          id: "8-1",
          title: "Weak Password Strength",
          description: "Password is less than 12 characters",
          severity: "medium",
          fixed: !1,
        },
        {
          id: "8-2",
          title: "Last Password Update",
          description: "Password was last changed 18 months ago",
          severity: "low",
          fixed: !1,
        },
      ],
    },
  ],
  sc = (a) => {
    const p = a.length,
      u = a.filter((S) => S.riskLevel === "safe").length,
      v = a.filter((S) => S.riskLevel === "moderate").length,
      x = a.filter((S) => S.riskLevel === "unsafe").length;
    let w = (u * 100 + v * 70 + x * 30) / p;
    return Math.round(w);
  },
  If = (a, p, u) =>
    a.map((v) => {
      if (v.id === p) {
        const x = v.issues.map((N) => ({
            ...N,
            fixed: u.includes(N.id) ? !0 : N.fixed,
          })),
          w = x.filter((N) => !N.fixed);
        let S = v.riskLevel;
        if (w.length === 0) S = "safe";
        else {
          const N = w.some((I) => I.severity === "high"),
            P = w.some((I) => I.severity === "medium");
          N ? (S = "unsafe") : P ? (S = "moderate") : (S = "safe");
        }
        return {
          ...v,
          issues: x,
          riskLevel: S,
          lastChecked: new Date().toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
          }),
        };
      }
      return v;
    });
function hc(a) {
  var p,
    u,
    v = "";
  if (typeof a == "string" || typeof a == "number") v += a;
  else if (typeof a == "object")
    if (Array.isArray(a)) {
      var x = a.length;
      for (p = 0; p < x; p++)
        a[p] && (u = hc(a[p])) && (v && (v += " "), (v += u));
    } else for (u in a) a[u] && (v && (v += " "), (v += u));
  return v;
}
function gc() {
  for (var a, p, u = 0, v = "", x = arguments.length; u < x; u++)
    (a = arguments[u]) && (p = hc(a)) && (v && (v += " "), (v += p));
  return v;
}
const qs = "-",
  Mf = (a) => {
    const p = Of(a),
      { conflictingClassGroups: u, conflictingClassGroupModifiers: v } = a;
    return {
      getClassGroupId: (S) => {
        const N = S.split(qs);
        return (N[0] === "" && N.length !== 1 && N.shift(), vc(N, p) || Af(S));
      },
      getConflictingClassGroupIds: (S, N) => {
        const P = u[S] || [];
        return N && v[S] ? [...P, ...v[S]] : P;
      },
    };
  },
  vc = (a, p) => {
    if (a.length === 0) return p.classGroupId;
    const u = a[0],
      v = p.nextPart.get(u),
      x = v ? vc(a.slice(1), v) : void 0;
    if (x) return x;
    if (p.validators.length === 0) return;
    const w = a.join(qs);
    return p.validators.find(({ validator: S }) => S(w))?.classGroupId;
  },
  ic = /^\[(.+)\]$/,
  Af = (a) => {
    if (ic.test(a)) {
      const p = ic.exec(a)[1],
        u = p?.substring(0, p.indexOf(":"));
      if (u) return "arbitrary.." + u;
    }
  },
  Of = (a) => {
    const { theme: p, classGroups: u } = a,
      v = { nextPart: new Map(), validators: [] };
    for (const x in u) Ys(u[x], v, x, p);
    return v;
  },
  Ys = (a, p, u, v) => {
    a.forEach((x) => {
      if (typeof x == "string") {
        const w = x === "" ? p : ac(p, x);
        w.classGroupId = u;
        return;
      }
      if (typeof x == "function") {
        if (Ff(x)) {
          Ys(x(v), p, u, v);
          return;
        }
        p.validators.push({ validator: x, classGroupId: u });
        return;
      }
      Object.entries(x).forEach(([w, S]) => {
        Ys(S, ac(p, w), u, v);
      });
    });
  },
  ac = (a, p) => {
    let u = a;
    return (
      p.split(qs).forEach((v) => {
        (u.nextPart.has(v) ||
          u.nextPart.set(v, { nextPart: new Map(), validators: [] }),
          (u = u.nextPart.get(v)));
      }),
      u
    );
  },
  Ff = (a) => a.isThemeGetter,
  Df = (a) => {
    if (a < 1) return { get: () => {}, set: () => {} };
    let p = 0,
      u = new Map(),
      v = new Map();
    const x = (w, S) => {
      (u.set(w, S), p++, p > a && ((p = 0), (v = u), (u = new Map())));
    };
    return {
      get(w) {
        let S = u.get(w);
        if (S !== void 0) return S;
        if ((S = v.get(w)) !== void 0) return (x(w, S), S);
      },
      set(w, S) {
        u.has(w) ? u.set(w, S) : x(w, S);
      },
    };
  },
  Xs = "!",
  Zs = ":",
  Uf = Zs.length,
  Vf = (a) => {
    const { prefix: p, experimentalParseClassName: u } = a;
    let v = (x) => {
      const w = [];
      let S = 0,
        N = 0,
        P = 0,
        I;
      for (let Z = 0; Z < x.length; Z++) {
        let H = x[Z];
        if (S === 0 && N === 0) {
          if (H === Zs) {
            (w.push(x.slice(P, Z)), (P = Z + Uf));
            continue;
          }
          if (H === "/") {
            I = Z;
            continue;
          }
        }
        H === "[" ? S++ : H === "]" ? S-- : H === "(" ? N++ : H === ")" && N--;
      }
      const z = w.length === 0 ? x : x.substring(P),
        T = $f(z),
        L = T !== z,
        Q = I && I > P ? I - P : void 0;
      return {
        modifiers: w,
        hasImportantModifier: L,
        baseClassName: T,
        maybePostfixModifierPosition: Q,
      };
    };
    if (p) {
      const x = p + Zs,
        w = v;
      v = (S) =>
        S.startsWith(x)
          ? w(S.substring(x.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: S,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (u) {
      const x = v;
      v = (w) => u({ className: w, parseClassName: x });
    }
    return v;
  },
  $f = (a) =>
    a.endsWith(Xs)
      ? a.substring(0, a.length - 1)
      : a.startsWith(Xs)
        ? a.substring(1)
        : a,
  Bf = (a) => {
    const p = Object.fromEntries(a.orderSensitiveModifiers.map((v) => [v, !0]));
    return (v) => {
      if (v.length <= 1) return v;
      const x = [];
      let w = [];
      return (
        v.forEach((S) => {
          S[0] === "[" || p[S] ? (x.push(...w.sort(), S), (w = [])) : w.push(S);
        }),
        x.push(...w.sort()),
        x
      );
    };
  },
  Wf = (a) => ({
    cache: Df(a.cacheSize),
    parseClassName: Vf(a),
    sortModifiers: Bf(a),
    ...Mf(a),
  }),
  Hf = /\s+/,
  Qf = (a, p) => {
    const {
        parseClassName: u,
        getClassGroupId: v,
        getConflictingClassGroupIds: x,
        sortModifiers: w,
      } = p,
      S = [],
      N = a.trim().split(Hf);
    let P = "";
    for (let I = N.length - 1; I >= 0; I -= 1) {
      const z = N[I],
        {
          isExternal: T,
          modifiers: L,
          hasImportantModifier: Q,
          baseClassName: Z,
          maybePostfixModifierPosition: H,
        } = u(z);
      if (T) {
        P = z + (P.length > 0 ? " " + P : P);
        continue;
      }
      let M = !!H,
        ee = v(M ? Z.substring(0, H) : Z);
      if (!ee) {
        if (!M) {
          P = z + (P.length > 0 ? " " + P : P);
          continue;
        }
        if (((ee = v(Z)), !ee)) {
          P = z + (P.length > 0 ? " " + P : P);
          continue;
        }
        M = !1;
      }
      const me = w(L).join(":"),
        Ce = Q ? me + Xs : me,
        ie = Ce + ee;
      if (S.includes(ie)) continue;
      S.push(ie);
      const be = x(ee, M);
      for (let he = 0; he < be.length; ++he) {
        const de = be[he];
        S.push(Ce + de);
      }
      P = z + (P.length > 0 ? " " + P : P);
    }
    return P;
  };
function Gf() {
  let a = 0,
    p,
    u,
    v = "";
  for (; a < arguments.length; )
    (p = arguments[a++]) && (u = yc(p)) && (v && (v += " "), (v += u));
  return v;
}
const yc = (a) => {
  if (typeof a == "string") return a;
  let p,
    u = "";
  for (let v = 0; v < a.length; v++)
    a[v] && (p = yc(a[v])) && (u && (u += " "), (u += p));
  return u;
};
function Kf(a, ...p) {
  let u,
    v,
    x,
    w = S;
  function S(P) {
    const I = p.reduce((z, T) => T(z), a());
    return ((u = Wf(I)), (v = u.cache.get), (x = u.cache.set), (w = N), N(P));
  }
  function N(P) {
    const I = v(P);
    if (I) return I;
    const z = Qf(P, u);
    return (x(P, z), z);
  }
  return function () {
    return w(Gf.apply(null, arguments));
  };
}
const Re = (a) => {
    const p = (u) => u[a] || [];
    return ((p.isThemeGetter = !0), p);
  },
  xc = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  wc = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Yf = /^\d+\/\d+$/,
  Xf = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Zf =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Jf = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  qf = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  ep =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Wn = (a) => Yf.test(a),
  te = (a) => !!a && !Number.isNaN(Number(a)),
  nn = (a) => !!a && Number.isInteger(Number(a)),
  Gs = (a) => a.endsWith("%") && te(a.slice(0, -1)),
  Mt = (a) => Xf.test(a),
  tp = () => !0,
  np = (a) => Zf.test(a) && !Jf.test(a),
  kc = () => !1,
  rp = (a) => qf.test(a),
  lp = (a) => ep.test(a),
  op = (a) => !D(a) && !U(a),
  sp = (a) => Hn(a, jc, kc),
  D = (a) => xc.test(a),
  yn = (a) => Hn(a, Cc, np),
  Ks = (a) => Hn(a, dp, te),
  uc = (a) => Hn(a, Sc, kc),
  ip = (a) => Hn(a, Nc, lp),
  Hl = (a) => Hn(a, Ec, rp),
  U = (a) => wc.test(a),
  Rr = (a) => Qn(a, Cc),
  ap = (a) => Qn(a, fp),
  cc = (a) => Qn(a, Sc),
  up = (a) => Qn(a, jc),
  cp = (a) => Qn(a, Nc),
  Ql = (a) => Qn(a, Ec, !0),
  Hn = (a, p, u) => {
    const v = xc.exec(a);
    return v ? (v[1] ? p(v[1]) : u(v[2])) : !1;
  },
  Qn = (a, p, u = !1) => {
    const v = wc.exec(a);
    return v ? (v[1] ? p(v[1]) : u) : !1;
  },
  Sc = (a) => a === "position" || a === "percentage",
  Nc = (a) => a === "image" || a === "url",
  jc = (a) => a === "length" || a === "size" || a === "bg-size",
  Cc = (a) => a === "length",
  dp = (a) => a === "number",
  fp = (a) => a === "family-name",
  Ec = (a) => a === "shadow",
  pp = () => {
    const a = Re("color"),
      p = Re("font"),
      u = Re("text"),
      v = Re("font-weight"),
      x = Re("tracking"),
      w = Re("leading"),
      S = Re("breakpoint"),
      N = Re("container"),
      P = Re("spacing"),
      I = Re("radius"),
      z = Re("shadow"),
      T = Re("inset-shadow"),
      L = Re("text-shadow"),
      Q = Re("drop-shadow"),
      Z = Re("blur"),
      H = Re("perspective"),
      M = Re("aspect"),
      ee = Re("ease"),
      me = Re("animate"),
      Ce = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      ie = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      be = () => [...ie(), U, D],
      he = () => ["auto", "hidden", "clip", "visible", "scroll"],
      de = () => ["auto", "contain", "none"],
      B = () => [U, D, P],
      Ee = () => [Wn, "full", "auto", ...B()],
      Ze = () => [nn, "none", "subgrid", U, D],
      Je = () => ["auto", { span: ["full", nn, U, D] }, nn, U, D],
      Fe = () => [nn, "auto", U, D],
      $e = () => ["auto", "min", "max", "fr", U, D],
      Ke = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      De = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      xe = () => ["auto", ...B()],
      ce = () => [
        Wn,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...B(),
      ],
      k = () => [a, U, D],
      G = () => [...ie(), cc, uc, { position: [U, D] }],
      A = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      m = () => ["auto", "cover", "contain", up, sp, { size: [U, D] }],
      j = () => [Gs, Rr, yn],
      W = () => ["", "none", "full", I, U, D],
      X = () => ["", te, Rr, yn],
      re = () => ["solid", "dashed", "dotted", "double"],
      oe = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      q = () => [te, Gs, cc, uc],
      ae = () => ["", "none", Z, U, D],
      fe = () => ["none", te, U, D],
      Ie = () => ["none", te, U, D],
      At = () => [te, U, D],
      rn = () => [Wn, "full", ...B()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Mt],
        breakpoint: [Mt],
        color: [tp],
        container: [Mt],
        "drop-shadow": [Mt],
        ease: ["in", "out", "in-out"],
        font: [op],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [Mt],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [Mt],
        shadow: [Mt],
        spacing: ["px", te],
        text: [Mt],
        "text-shadow": [Mt],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", Wn, D, U, M] }],
        container: ["container"],
        columns: [{ columns: [te, D, U, N] }],
        "break-after": [{ "break-after": Ce() }],
        "break-before": [{ "break-before": Ce() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: be() }],
        overflow: [{ overflow: he() }],
        "overflow-x": [{ "overflow-x": he() }],
        "overflow-y": [{ "overflow-y": he() }],
        overscroll: [{ overscroll: de() }],
        "overscroll-x": [{ "overscroll-x": de() }],
        "overscroll-y": [{ "overscroll-y": de() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: Ee() }],
        "inset-x": [{ "inset-x": Ee() }],
        "inset-y": [{ "inset-y": Ee() }],
        start: [{ start: Ee() }],
        end: [{ end: Ee() }],
        top: [{ top: Ee() }],
        right: [{ right: Ee() }],
        bottom: [{ bottom: Ee() }],
        left: [{ left: Ee() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [nn, "auto", U, D] }],
        basis: [{ basis: [Wn, "full", "auto", N, ...B()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [te, Wn, "auto", "initial", "none", D] }],
        grow: [{ grow: ["", te, U, D] }],
        shrink: [{ shrink: ["", te, U, D] }],
        order: [{ order: [nn, "first", "last", "none", U, D] }],
        "grid-cols": [{ "grid-cols": Ze() }],
        "col-start-end": [{ col: Je() }],
        "col-start": [{ "col-start": Fe() }],
        "col-end": [{ "col-end": Fe() }],
        "grid-rows": [{ "grid-rows": Ze() }],
        "row-start-end": [{ row: Je() }],
        "row-start": [{ "row-start": Fe() }],
        "row-end": [{ "row-end": Fe() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": $e() }],
        "auto-rows": [{ "auto-rows": $e() }],
        gap: [{ gap: B() }],
        "gap-x": [{ "gap-x": B() }],
        "gap-y": [{ "gap-y": B() }],
        "justify-content": [{ justify: [...Ke(), "normal"] }],
        "justify-items": [{ "justify-items": [...De(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...De()] }],
        "align-content": [{ content: ["normal", ...Ke()] }],
        "align-items": [{ items: [...De(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...De(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": Ke() }],
        "place-items": [{ "place-items": [...De(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...De()] }],
        p: [{ p: B() }],
        px: [{ px: B() }],
        py: [{ py: B() }],
        ps: [{ ps: B() }],
        pe: [{ pe: B() }],
        pt: [{ pt: B() }],
        pr: [{ pr: B() }],
        pb: [{ pb: B() }],
        pl: [{ pl: B() }],
        m: [{ m: xe() }],
        mx: [{ mx: xe() }],
        my: [{ my: xe() }],
        ms: [{ ms: xe() }],
        me: [{ me: xe() }],
        mt: [{ mt: xe() }],
        mr: [{ mr: xe() }],
        mb: [{ mb: xe() }],
        ml: [{ ml: xe() }],
        "space-x": [{ "space-x": B() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": B() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: ce() }],
        w: [{ w: [N, "screen", ...ce()] }],
        "min-w": [{ "min-w": [N, "screen", "none", ...ce()] }],
        "max-w": [
          { "max-w": [N, "screen", "none", "prose", { screen: [S] }, ...ce()] },
        ],
        h: [{ h: ["screen", "lh", ...ce()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...ce()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...ce()] }],
        "font-size": [{ text: ["base", u, Rr, yn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [v, U, Ks] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              Gs,
              D,
            ],
          },
        ],
        "font-family": [{ font: [ap, D, p] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [x, U, D] }],
        "line-clamp": [{ "line-clamp": [te, "none", U, Ks] }],
        leading: [{ leading: [w, ...B()] }],
        "list-image": [{ "list-image": ["none", U, D] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", U, D] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: k() }],
        "text-color": [{ text: k() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...re(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [te, "from-font", "auto", U, yn] },
        ],
        "text-decoration-color": [{ decoration: k() }],
        "underline-offset": [{ "underline-offset": [te, "auto", U, D] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: B() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              U,
              D,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", U, D] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: G() }],
        "bg-repeat": [{ bg: A() }],
        "bg-size": [{ bg: m() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  nn,
                  U,
                  D,
                ],
                radial: ["", U, D],
                conic: [nn, U, D],
              },
              cp,
              ip,
            ],
          },
        ],
        "bg-color": [{ bg: k() }],
        "gradient-from-pos": [{ from: j() }],
        "gradient-via-pos": [{ via: j() }],
        "gradient-to-pos": [{ to: j() }],
        "gradient-from": [{ from: k() }],
        "gradient-via": [{ via: k() }],
        "gradient-to": [{ to: k() }],
        rounded: [{ rounded: W() }],
        "rounded-s": [{ "rounded-s": W() }],
        "rounded-e": [{ "rounded-e": W() }],
        "rounded-t": [{ "rounded-t": W() }],
        "rounded-r": [{ "rounded-r": W() }],
        "rounded-b": [{ "rounded-b": W() }],
        "rounded-l": [{ "rounded-l": W() }],
        "rounded-ss": [{ "rounded-ss": W() }],
        "rounded-se": [{ "rounded-se": W() }],
        "rounded-ee": [{ "rounded-ee": W() }],
        "rounded-es": [{ "rounded-es": W() }],
        "rounded-tl": [{ "rounded-tl": W() }],
        "rounded-tr": [{ "rounded-tr": W() }],
        "rounded-br": [{ "rounded-br": W() }],
        "rounded-bl": [{ "rounded-bl": W() }],
        "border-w": [{ border: X() }],
        "border-w-x": [{ "border-x": X() }],
        "border-w-y": [{ "border-y": X() }],
        "border-w-s": [{ "border-s": X() }],
        "border-w-e": [{ "border-e": X() }],
        "border-w-t": [{ "border-t": X() }],
        "border-w-r": [{ "border-r": X() }],
        "border-w-b": [{ "border-b": X() }],
        "border-w-l": [{ "border-l": X() }],
        "divide-x": [{ "divide-x": X() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": X() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...re(), "hidden", "none"] }],
        "divide-style": [{ divide: [...re(), "hidden", "none"] }],
        "border-color": [{ border: k() }],
        "border-color-x": [{ "border-x": k() }],
        "border-color-y": [{ "border-y": k() }],
        "border-color-s": [{ "border-s": k() }],
        "border-color-e": [{ "border-e": k() }],
        "border-color-t": [{ "border-t": k() }],
        "border-color-r": [{ "border-r": k() }],
        "border-color-b": [{ "border-b": k() }],
        "border-color-l": [{ "border-l": k() }],
        "divide-color": [{ divide: k() }],
        "outline-style": [{ outline: [...re(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [te, U, D] }],
        "outline-w": [{ outline: ["", te, Rr, yn] }],
        "outline-color": [{ outline: k() }],
        shadow: [{ shadow: ["", "none", z, Ql, Hl] }],
        "shadow-color": [{ shadow: k() }],
        "inset-shadow": [{ "inset-shadow": ["none", T, Ql, Hl] }],
        "inset-shadow-color": [{ "inset-shadow": k() }],
        "ring-w": [{ ring: X() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: k() }],
        "ring-offset-w": [{ "ring-offset": [te, yn] }],
        "ring-offset-color": [{ "ring-offset": k() }],
        "inset-ring-w": [{ "inset-ring": X() }],
        "inset-ring-color": [{ "inset-ring": k() }],
        "text-shadow": [{ "text-shadow": ["none", L, Ql, Hl] }],
        "text-shadow-color": [{ "text-shadow": k() }],
        opacity: [{ opacity: [te, U, D] }],
        "mix-blend": [
          { "mix-blend": [...oe(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": oe() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [te] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": q() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": q() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": k() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": k() }],
        "mask-image-t-from-pos": [{ "mask-t-from": q() }],
        "mask-image-t-to-pos": [{ "mask-t-to": q() }],
        "mask-image-t-from-color": [{ "mask-t-from": k() }],
        "mask-image-t-to-color": [{ "mask-t-to": k() }],
        "mask-image-r-from-pos": [{ "mask-r-from": q() }],
        "mask-image-r-to-pos": [{ "mask-r-to": q() }],
        "mask-image-r-from-color": [{ "mask-r-from": k() }],
        "mask-image-r-to-color": [{ "mask-r-to": k() }],
        "mask-image-b-from-pos": [{ "mask-b-from": q() }],
        "mask-image-b-to-pos": [{ "mask-b-to": q() }],
        "mask-image-b-from-color": [{ "mask-b-from": k() }],
        "mask-image-b-to-color": [{ "mask-b-to": k() }],
        "mask-image-l-from-pos": [{ "mask-l-from": q() }],
        "mask-image-l-to-pos": [{ "mask-l-to": q() }],
        "mask-image-l-from-color": [{ "mask-l-from": k() }],
        "mask-image-l-to-color": [{ "mask-l-to": k() }],
        "mask-image-x-from-pos": [{ "mask-x-from": q() }],
        "mask-image-x-to-pos": [{ "mask-x-to": q() }],
        "mask-image-x-from-color": [{ "mask-x-from": k() }],
        "mask-image-x-to-color": [{ "mask-x-to": k() }],
        "mask-image-y-from-pos": [{ "mask-y-from": q() }],
        "mask-image-y-to-pos": [{ "mask-y-to": q() }],
        "mask-image-y-from-color": [{ "mask-y-from": k() }],
        "mask-image-y-to-color": [{ "mask-y-to": k() }],
        "mask-image-radial": [{ "mask-radial": [U, D] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": q() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": q() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": k() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": k() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": ie() }],
        "mask-image-conic-pos": [{ "mask-conic": [te] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": q() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": q() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": k() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": k() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: G() }],
        "mask-repeat": [{ mask: A() }],
        "mask-size": [{ mask: m() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", U, D] }],
        filter: [{ filter: ["", "none", U, D] }],
        blur: [{ blur: ae() }],
        brightness: [{ brightness: [te, U, D] }],
        contrast: [{ contrast: [te, U, D] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Q, Ql, Hl] }],
        "drop-shadow-color": [{ "drop-shadow": k() }],
        grayscale: [{ grayscale: ["", te, U, D] }],
        "hue-rotate": [{ "hue-rotate": [te, U, D] }],
        invert: [{ invert: ["", te, U, D] }],
        saturate: [{ saturate: [te, U, D] }],
        sepia: [{ sepia: ["", te, U, D] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", U, D] }],
        "backdrop-blur": [{ "backdrop-blur": ae() }],
        "backdrop-brightness": [{ "backdrop-brightness": [te, U, D] }],
        "backdrop-contrast": [{ "backdrop-contrast": [te, U, D] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", te, U, D] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [te, U, D] }],
        "backdrop-invert": [{ "backdrop-invert": ["", te, U, D] }],
        "backdrop-opacity": [{ "backdrop-opacity": [te, U, D] }],
        "backdrop-saturate": [{ "backdrop-saturate": [te, U, D] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", te, U, D] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": B() }],
        "border-spacing-x": [{ "border-spacing-x": B() }],
        "border-spacing-y": [{ "border-spacing-y": B() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              U,
              D,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [te, "initial", U, D] }],
        ease: [{ ease: ["linear", "initial", ee, U, D] }],
        delay: [{ delay: [te, U, D] }],
        animate: [{ animate: ["none", me, U, D] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [H, U, D] }],
        "perspective-origin": [{ "perspective-origin": be() }],
        rotate: [{ rotate: fe() }],
        "rotate-x": [{ "rotate-x": fe() }],
        "rotate-y": [{ "rotate-y": fe() }],
        "rotate-z": [{ "rotate-z": fe() }],
        scale: [{ scale: Ie() }],
        "scale-x": [{ "scale-x": Ie() }],
        "scale-y": [{ "scale-y": Ie() }],
        "scale-z": [{ "scale-z": Ie() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: At() }],
        "skew-x": [{ "skew-x": At() }],
        "skew-y": [{ "skew-y": At() }],
        transform: [{ transform: [U, D, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: be() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: rn() }],
        "translate-x": [{ "translate-x": rn() }],
        "translate-y": [{ "translate-y": rn() }],
        "translate-z": [{ "translate-z": rn() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: k() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: k() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              U,
              D,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": B() }],
        "scroll-mx": [{ "scroll-mx": B() }],
        "scroll-my": [{ "scroll-my": B() }],
        "scroll-ms": [{ "scroll-ms": B() }],
        "scroll-me": [{ "scroll-me": B() }],
        "scroll-mt": [{ "scroll-mt": B() }],
        "scroll-mr": [{ "scroll-mr": B() }],
        "scroll-mb": [{ "scroll-mb": B() }],
        "scroll-ml": [{ "scroll-ml": B() }],
        "scroll-p": [{ "scroll-p": B() }],
        "scroll-px": [{ "scroll-px": B() }],
        "scroll-py": [{ "scroll-py": B() }],
        "scroll-ps": [{ "scroll-ps": B() }],
        "scroll-pe": [{ "scroll-pe": B() }],
        "scroll-pt": [{ "scroll-pt": B() }],
        "scroll-pr": [{ "scroll-pr": B() }],
        "scroll-pb": [{ "scroll-pb": B() }],
        "scroll-pl": [{ "scroll-pl": B() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", U, D] },
        ],
        fill: [{ fill: ["none", ...k()] }],
        "stroke-w": [{ stroke: [te, Rr, yn, Ks] }],
        stroke: [{ stroke: ["none", ...k()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  mp = Kf(pp);
function ei(...a) {
  return mp(gc(a));
}
function ke({ className: a, ...p }) {
  return i.jsx("div", {
    "data-slot": "card",
    className: ei(
      "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",
      a,
    ),
    ...p,
  });
}
function dc(a, p) {
  if (typeof a == "function") return a(p);
  a != null && (a.current = p);
}
function hp(...a) {
  return (p) => {
    let u = !1;
    const v = a.map((x) => {
      const w = dc(x, p);
      return (!u && typeof w == "function" && (u = !0), w);
    });
    if (u)
      return () => {
        for (let x = 0; x < v.length; x++) {
          const w = v[x];
          typeof w == "function" ? w() : dc(a[x], null);
        }
      };
  };
}
function gp(a) {
  const p = yp(a),
    u = le.forwardRef((v, x) => {
      const { children: w, ...S } = v,
        N = le.Children.toArray(w),
        P = N.find(wp);
      if (P) {
        const I = P.props.children,
          z = N.map((T) =>
            T === P
              ? le.Children.count(I) > 1
                ? le.Children.only(null)
                : le.isValidElement(I)
                  ? I.props.children
                  : null
              : T,
          );
        return i.jsx(p, {
          ...S,
          ref: x,
          children: le.isValidElement(I) ? le.cloneElement(I, void 0, z) : null,
        });
      }
      return i.jsx(p, { ...S, ref: x, children: w });
    });
  return ((u.displayName = `${a}.Slot`), u);
}
var vp = gp("Slot");
function yp(a) {
  const p = le.forwardRef((u, v) => {
    const { children: x, ...w } = u;
    if (le.isValidElement(x)) {
      const S = Sp(x),
        N = kp(w, x.props);
      return (
        x.type !== le.Fragment && (N.ref = v ? hp(v, S) : S),
        le.cloneElement(x, N)
      );
    }
    return le.Children.count(x) > 1 ? le.Children.only(null) : null;
  });
  return ((p.displayName = `${a}.SlotClone`), p);
}
var xp = Symbol("radix.slottable");
function wp(a) {
  return (
    le.isValidElement(a) &&
    typeof a.type == "function" &&
    "__radixId" in a.type &&
    a.type.__radixId === xp
  );
}
function kp(a, p) {
  const u = { ...p };
  for (const v in p) {
    const x = a[v],
      w = p[v];
    /^on[A-Z]/.test(v)
      ? x && w
        ? (u[v] = (...N) => {
            const P = w(...N);
            return (x(...N), P);
          })
        : x && (u[v] = x)
      : v === "style"
        ? (u[v] = { ...x, ...w })
        : v === "className" && (u[v] = [x, w].filter(Boolean).join(" "));
  }
  return { ...a, ...u };
}
function Sp(a) {
  let p = Object.getOwnPropertyDescriptor(a.props, "ref")?.get,
    u = p && "isReactWarning" in p && p.isReactWarning;
  return u
    ? a.ref
    : ((p = Object.getOwnPropertyDescriptor(a, "ref")?.get),
      (u = p && "isReactWarning" in p && p.isReactWarning),
      u ? a.props.ref : a.props.ref || a.ref);
}
const fc = (a) => (typeof a == "boolean" ? `${a}` : a === 0 ? "0" : a),
  pc = gc,
  Np = (a, p) => (u) => {
    var v;
    if (p?.variants == null) return pc(a, u?.class, u?.className);
    const { variants: x, defaultVariants: w } = p,
      S = Object.keys(x).map((I) => {
        const z = u?.[I],
          T = w?.[I];
        if (z === null) return null;
        const L = fc(z) || fc(T);
        return x[I][L];
      }),
      N =
        u &&
        Object.entries(u).reduce((I, z) => {
          let [T, L] = z;
          return (L === void 0 || (I[T] = L), I);
        }, {}),
      P =
        p == null || (v = p.compoundVariants) === null || v === void 0
          ? void 0
          : v.reduce((I, z) => {
              let { class: T, className: L, ...Q } = z;
              return Object.entries(Q).every((Z) => {
                let [H, M] = Z;
                return Array.isArray(M)
                  ? M.includes({ ...w, ...N }[H])
                  : { ...w, ...N }[H] === M;
              })
                ? [...I, T, L]
                : I;
            }, []);
    return pc(a, S, P, u?.class, u?.className);
  },
  jp = Np(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
          outline:
            "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost:
            "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-9 px-4 py-2 has-[>svg]:px-3",
          sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
          lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
          icon: "size-9 rounded-md",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  );
function Ge({ className: a, variant: p, size: u, asChild: v = !1, ...x }) {
  const w = v ? vp : "button";
  return i.jsx(w, {
    "data-slot": "button",
    className: ei(jp({ variant: p, size: u, className: a })),
    ...x,
  });
}
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cp = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Ep = (a) =>
    a.replace(/^([A-Z])|[\s-_]+(\w)/g, (p, u, v) =>
      v ? v.toUpperCase() : u.toLowerCase(),
    ),
  mc = (a) => {
    const p = Ep(a);
    return p.charAt(0).toUpperCase() + p.slice(1);
  },
  _c = (...a) =>
    a
      .filter((p, u, v) => !!p && p.trim() !== "" && v.indexOf(p) === u)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var _p = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pp = le.forwardRef(
  (
    {
      color: a = "currentColor",
      size: p = 24,
      strokeWidth: u = 2,
      absoluteStrokeWidth: v,
      className: x = "",
      children: w,
      iconNode: S,
      ...N
    },
    P,
  ) =>
    le.createElement(
      "svg",
      {
        ref: P,
        ..._p,
        width: p,
        height: p,
        stroke: a,
        strokeWidth: v ? (Number(u) * 24) / Number(p) : u,
        className: _c("lucide", x),
        ...N,
      },
      [
        ...S.map(([I, z]) => le.createElement(I, z)),
        ...(Array.isArray(w) ? w : [w]),
      ],
    ),
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ti = (a, p) => {
  const u = le.forwardRef(({ className: v, ...x }, w) =>
    le.createElement(Pp, {
      ref: w,
      iconNode: p,
      className: _c(`lucide-${Cp(mc(a))}`, `lucide-${a}`, v),
      ...x,
    }),
  );
  return ((u.displayName = mc(a)), u);
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bp = [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }],
  ],
  Ir = ti("arrow-left", bp);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zp = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  Gl = ti("check", zp);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lp = [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    [
      "path",
      {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp",
      },
    ],
  ],
  ni = ti("external-link", Lp);
function Tp({
  accounts: a,
  securityScore: p,
  onAccountClick: u,
  onViewSummary: v,
}) {
  const x = (L) =>
      L === "safe" ? "bg-safe" : L === "moderate" ? "bg-warning" : "bg-danger",
    w = (L) =>
      L === "safe" ? "Safe" : L === "moderate" ? "Needs Work" : "Unsafe",
    S = () => (p >= 80 ? "bg-safe" : p >= 60 ? "bg-warning" : "bg-danger"),
    N = a.filter((L) => L.riskLevel === "safe").length,
    P = a.filter((L) => L.riskLevel === "moderate").length,
    I = a.filter((L) => L.riskLevel === "unsafe").length,
    z = a.filter((L) => L.riskLevel !== "safe"),
    T = a.reduce((L, Q) => L + Q.issues.filter((Z) => !Z.fixed).length, 0);
  return i.jsxs("div", {
    className: "space-y-8",
    children: [
      z.length > 0 &&
        i.jsx(ke, {
          className: "border-2 border-danger p-6 mb-8",
          children: i.jsxs("div", {
            className: "flex items-center gap-4",
            children: [
              i.jsx("div", {
                className:
                  "w-12 h-12 bg-danger text-white flex items-center justify-center text-2xl font-bold rounded",
                children: "!",
              }),
              i.jsxs("div", {
                children: [
                  i.jsx("h3", {
                    className: "font-bold mb-1",
                    children: "Action Required",
                  }),
                  i.jsxs("p", {
                    children: [
                      z.length,
                      " account",
                      z.length !== 1 ? "s" : "",
                      " need attention with ",
                      T,
                      " issue",
                      T !== 1 ? "s" : "",
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      i.jsxs("div", {
        className: "grid grid-cols-3 gap-6",
        children: [
          i.jsxs(ke, {
            className: "border-2 border-gray-800 p-6 col-span-2",
            children: [
              i.jsx("h3", {
                className: "text-xl font-bold mb-6",
                children: "Overall Security Score",
              }),
              i.jsxs("div", {
                className: "flex items-end gap-8",
                children: [
                  i.jsx("div", {
                    className: "text-7xl font-bold",
                    children: p,
                  }),
                  i.jsx("div", {
                    className: "flex-1 pb-2",
                    children: i.jsx("div", {
                      className: "w-full h-8 border-2 border-gray-800 mb-2",
                      children: i.jsx("div", {
                        className: `h-full ${S()} transition`,
                        style: { width: `${p}%` },
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
          i.jsxs(ke, {
            className: "border-2 border-gray-800 p-6",
            children: [
              i.jsx("h3", {
                className: "text-xl font-bold mb-6",
                children: "Account Status",
              }),
              i.jsxs("div", {
                className: "space-y-4",
                children: [
                  i.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      i.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          i.jsx("div", {
                            className: "w-4 h-4 rounded-full bg-safe",
                          }),
                          i.jsx("span", { children: "Safe" }),
                        ],
                      }),
                      i.jsx("span", {
                        className: "text-2xl font-bold",
                        children: N,
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      i.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          i.jsx("div", {
                            className: "w-4 h-4 rounded-full bg-warning",
                          }),
                          i.jsx("span", { children: "Needs Work" }),
                        ],
                      }),
                      i.jsx("span", {
                        className: "text-2xl font-bold",
                        children: P,
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      i.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          i.jsx("div", {
                            className: "w-4 h-4 rounded-full bg-danger",
                          }),
                          i.jsx("span", { children: "Unsafe" }),
                        ],
                      }),
                      i.jsx("span", {
                        className: "text-2xl font-bold",
                        children: I,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      i.jsxs("div", {
        children: [
          i.jsxs("div", {
            className: "flex items-center justify-between mb-4 mt-6",
            children: [
              i.jsxs("h3", {
                className: "text-2xl font-bold",
                children: ["Connected Accounts (", a.length, ")"],
              }),
              i.jsx(Ge, {
                onClick: v,
                className: "bg-primary text-white hover:bg-primary",
                children: "View Report",
              }),
            ],
          }),
          i.jsx("div", {
            className: "grid grid-cols-2 gap-4",
            children: a.map((L) =>
              i.jsx(
                ke,
                {
                  className:
                    "border-2 border-gray-800 p-5 cursor-pointer hover:shadow-lg transition",
                  onClick: () => u(L.id),
                  children: i.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      i.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [
                          i.jsx("div", {
                            className: `w-12 h-12 ${x(L.riskLevel)} rounded`,
                          }),
                          i.jsxs("div", {
                            children: [
                              i.jsxs("div", {
                                className:
                                  "font-bold mb-1 flex items-center gap-2",
                                children: [
                                  i.jsx("span", { children: L.name }),
                                  L.websiteUrl &&
                                    i.jsx("a", {
                                      href: L.websiteUrl,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      className:
                                        "text-gray-600 hover:text-gray-800",
                                      onClick: (Q) => Q.stopPropagation(),
                                      children: i.jsx(ni, {
                                        className: "w-4 h-4",
                                      }),
                                    }),
                                ],
                              }),
                              i.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  i.jsx("div", {
                                    className: `w-3 h-3 rounded-full ${x(L.riskLevel)}`,
                                  }),
                                  i.jsx("span", {
                                    className: "text-sm",
                                    children: w(L.riskLevel),
                                  }),
                                ],
                              }),
                              L.issues.filter((Q) => !Q.fixed).length > 0 &&
                                i.jsxs("div", {
                                  className: "mt-1 text-sm text-gray-600",
                                  children: [
                                    L.issues.filter((Q) => !Q.fixed).length,
                                    " issue",
                                    L.issues.filter((Q) => !Q.fixed).length !==
                                    1
                                      ? "s"
                                      : "",
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                      i.jsx(Ge, {
                        variant: "outline",
                        size: "sm",
                        className: "border-2 border-gray-800",
                        children: "View",
                      }),
                    ],
                  }),
                },
                L.id,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function Rp({ account: a, onStartFix: p, onBack: u }) {
  const v = (N) =>
      N === "high" ? "bg-danger" : N === "medium" ? "bg-warning" : "bg-primary",
    x = () =>
      a.riskLevel === "safe"
        ? "bg-safe"
        : a.riskLevel === "moderate"
          ? "bg-warning"
          : "bg-danger",
    w = () =>
      a.riskLevel === "safe"
        ? "Safe"
        : a.riskLevel === "moderate"
          ? "Needs Work"
          : "Unsafe",
    S = a.issues.filter((N) => !N.fixed);
  return i.jsxs("div", {
    className: "space-y-8",
    children: [
      i.jsxs(Ge, {
        variant: "ghost",
        size: "sm",
        className: "mb-2",
        onClick: u,
        children: [
          i.jsx(Ir, { className: "w-4 h-4 mr-2" }),
          "Back to Dashboard",
        ],
      }),
      i.jsxs("div", {
        className: "grid grid-cols-3 gap-6",
        children: [
          i.jsx(ke, {
            className: "border-2 border-gray-800 p-6",
            children: i.jsxs("div", {
              className: "text-center",
              children: [
                i.jsx("div", {
                  className: `w-20 h-20 rounded ${x()} mx-auto mb-4`,
                }),
                i.jsx("h3", {
                  className: "text-xl font-bold mb-2",
                  children: a.name,
                }),
                i.jsx("div", {
                  className: `inline-block px-4 py-2 ${x()} text-white font-bold`,
                  children: w(),
                }),
              ],
            }),
          }),
          i.jsxs(ke, {
            className: "border-2 border-gray-800 p-6 col-span-2",
            children: [
              i.jsx("h3", {
                className: "text-xl font-bold mb-4",
                children: "Account Information",
              }),
              i.jsxs("div", {
                className: "grid grid-cols-2 gap-6",
                children: [
                  i.jsxs("div", {
                    children: [
                      i.jsx("div", {
                        className: "text-sm text-gray-600 mb-1",
                        children: "Email Address",
                      }),
                      i.jsx("div", {
                        className: "font-medium",
                        children: a.email,
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    children: [
                      i.jsx("div", {
                        className: "text-sm text-gray-600 mb-1",
                        children: "Connected Since",
                      }),
                      i.jsx("div", {
                        className: "font-medium",
                        children: a.connectedSince,
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    children: [
                      i.jsx("div", {
                        className: "text-sm text-gray-600 mb-1",
                        children: "Last Security Check",
                      }),
                      i.jsx("div", {
                        className: "font-medium",
                        children: a.lastChecked,
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    children: [
                      i.jsx("div", {
                        className: "text-sm text-gray-600 mb-1",
                        children: "Active Issues",
                      }),
                      i.jsx("div", {
                        className: "font-bold text-2xl text-danger",
                        children: S.length,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      S.length > 0
        ? i.jsxs("div", {
            children: [
              i.jsxs("div", {
                className: "flex items-center justify-between mb-6 mt-6",
                children: [
                  i.jsxs("h3", {
                    className: "text-2xl font-bold",
                    children: ["Security Issues (", S.length, ")"],
                  }),
                  i.jsx(Ge, {
                    className:
                      "px-8 py-3 bg-primary text-white hover:bg-primary font-bold",
                    onClick: p,
                    children: "Fix Issues Now",
                  }),
                ],
              }),
              i.jsx("div", {
                className: "space-y-4",
                children: S.map((N) =>
                  i.jsx(
                    ke,
                    {
                      className: "border-2 border-gray-800 p-6",
                      children: i.jsxs("div", {
                        className: "flex items-start gap-4",
                        children: [
                          i.jsx("div", {
                            className: `w-12 h-12 ${v(N.severity)} flex items-center justify-center flex-shrink-0 text-white font-bold text-xl`,
                            children: "!",
                          }),
                          i.jsxs("div", {
                            className: "flex-1",
                            children: [
                              i.jsxs("div", {
                                className:
                                  "flex items-start justify-between mb-2",
                                children: [
                                  i.jsx("h4", {
                                    className: "text-lg font-bold",
                                    children: N.title,
                                  }),
                                  i.jsx("span", {
                                    className:
                                      "text-sm px-3 py-1 border-2 border-gray-800 uppercase font-bold",
                                    children: N.severity,
                                  }),
                                ],
                              }),
                              i.jsx("p", {
                                className: "text-gray-700",
                                children: N.description,
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    N.id,
                  ),
                ),
              }),
            ],
          })
        : i.jsxs(ke, {
            className: "border-2 border-safe p-8 text-center",
            children: [
              i.jsx("div", {
                className:
                  "w-16 h-16 rounded-full bg-safe mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold",
                children: "✓",
              }),
              i.jsx("h3", {
                className: "text-2xl font-bold mb-2",
                children: "All Secure!",
              }),
              i.jsx("p", {
                className: "text-gray-700",
                children: "This account has no security issues. Great job!",
              }),
            ],
          }),
      S.length > 0 &&
        i.jsxs(ke, {
          className: "border-2 border-gray-800 p-6 mt-6",
          children: [
            i.jsx("h3", {
              className: "text-xl font-bold mb-4",
              children: "💡 Why This Matters",
            }),
            i.jsxs("div", {
              className: "space-y-3",
              children: [
                S.some((N) => N.title.toLowerCase().includes("reused")) &&
                  i.jsxs("div", {
                    className: "flex items-start gap-3",
                    children: [
                      i.jsx("div", {
                        className: "w-2 h-2 bg-danger rounded-full mt-2",
                      }),
                      i.jsxs("p", {
                        children: [
                          i.jsx("strong", { children: "Reused passwords" }),
                          " mean if one account is compromised, hackers can access all your other accounts using the same password.",
                        ],
                      }),
                    ],
                  }),
                S.some((N) => N.title.toLowerCase().includes("2fa")) &&
                  i.jsxs("div", {
                    className: "flex items-start gap-3",
                    children: [
                      i.jsx("div", {
                        className: "w-2 h-2 bg-danger rounded-full mt-2",
                      }),
                      i.jsxs("p", {
                        children: [
                          i.jsx("strong", {
                            children: "Two-factor authentication (2FA)",
                          }),
                          " adds an extra security layer, making it much harder for attackers to access your account.",
                        ],
                      }),
                    ],
                  }),
                S.some((N) => N.title.toLowerCase().includes("weak")) &&
                  i.jsxs("div", {
                    className: "flex items-start gap-3",
                    children: [
                      i.jsx("div", {
                        className: "w-2 h-2 bg-warning rounded-full mt-2",
                      }),
                      i.jsxs("p", {
                        children: [
                          i.jsx("strong", { children: "Weak passwords" }),
                          " can be cracked quickly by automated tools. Strong passwords are your first line of defense.",
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
    ],
  });
}
function Ip({ className: a, type: p, ...u }) {
  return i.jsx("input", {
    type: p,
    "data-slot": "input",
    className: ei(
      "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
      "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
      a,
    ),
    ...u,
  });
}
function Mp({
  account: a,
  onComplete: p,
  onBack: u,
  onNavigateToAuthenticator: v,
}) {
  const x = () => {
      const M = [];
      return (
        a.issues.forEach((ee) => {
          if (!ee.fixed) {
            if (ee.title.toLowerCase().includes("reused password")) {
              const me = a.issues.find(
                  (ie) =>
                    !ie.fixed &&
                    ie.title.toLowerCase().includes("weak password"),
                ),
                Ce = me ? `${ee.id},${me.id}` : ee.id;
              M.push({
                id: Ce,
                title: "Fix Reused Password",
                description:
                  "Create a unique password that is not used on any other account",
                instructions: [
                  `Go to ${a.name} settings`,
                  'Navigate to "Security & Password"',
                  'Select "Change Password"',
                  "Create a completely unique password (not used elsewhere)",
                  "Use a password manager to generate a strong password",
                  "Ensure it has at least 12 characters",
                  "Include uppercase, lowercase, numbers, and symbols",
                  "Save the new password securely",
                ],
                estimatedTime: "5 minutes",
                completed: !1,
              });
            }
            ((ee.title.toLowerCase().includes("no 2fa") ||
              ee.title.toLowerCase().includes("two-factor")) &&
              M.push({
                id: ee.id,
                title: "Enable Two-Factor Authentication",
                description: "Add an extra layer of security to your account",
                instructions: [
                  `Go to ${a.name} security settings`,
                  'Find "Two-Factor Authentication" or "2FA" section',
                  'Click "Enable 2FA" or "Turn On"',
                  "Choose your preferred method (Authenticator App recommended)",
                  "Follow the on-screen setup instructions",
                  "Scan the QR code with your authenticator app",
                  "Enter the verification code to confirm",
                  "Save backup codes in a secure location",
                ],
                estimatedTime: "8 minutes",
                completed: !1,
              }),
              ee.title.toLowerCase().includes("weak password") &&
                !M.find((me) => me.title.includes("Reused")) &&
                M.push({
                  id: ee.id,
                  title: "Strengthen Your Password",
                  description:
                    "Create a stronger password that meets security requirements",
                  instructions: [
                    `Go to ${a.name} settings`,
                    'Click on "Security & Password"',
                    'Select "Change Password"',
                    "Create a strong password with at least 12 characters",
                    "Include uppercase letters (A-Z)",
                    "Include lowercase letters (a-z)",
                    "Include numbers (0-9)",
                    "Include special symbols (!@#$%^&*)",
                    "Avoid common words or personal information",
                    "Save changes and test login with new password",
                  ],
                  estimatedTime: "5 minutes",
                  completed: !1,
                }),
              ee.title.toLowerCase().includes("last password update") &&
                M.push({
                  id: ee.id,
                  title: "Update Old Password",
                  description:
                    "Replace your outdated password with a fresh, secure one",
                  instructions: [
                    `Go to ${a.name} settings`,
                    'Navigate to "Security & Password"',
                    'Select "Change Password"',
                    "Create a new strong password (min. 12 characters)",
                    "Make sure it's different from your old password",
                    "Include a mix of characters, numbers, and symbols",
                    "Save the new password in a password manager",
                    "Set a reminder to update it again in 6 months",
                  ],
                  estimatedTime: "5 minutes",
                  completed: !1,
                }));
          }
        }),
        M
      );
    },
    [w, S] = le.useState(x()),
    [N, P] = le.useState(0),
    [I, z] = le.useState(""),
    T = w[N],
    L = w.filter((M) => M.completed).length,
    Q = (L / w.length) * 100,
    Z = () => {
      const M = [...w];
      if (((M[N].completed = !0), S(M), N < w.length - 1)) P(N + 1);
      else {
        const ee = M.filter((me) => me.completed).flatMap((me) =>
          me.id.split(","),
        );
        p(ee);
      }
    },
    H = () => {
      N < w.length - 1 && P(N + 1);
    };
  return i.jsxs("div", {
    children: [
      i.jsxs(Ge, {
        variant: "ghost",
        size: "sm",
        className: "mb-6 -ml-2",
        onClick: u,
        children: [
          i.jsx(Ir, { className: "w-4 h-4 mr-2" }),
          "Back to Account Details",
        ],
      }),
      i.jsxs("div", {
        className: "mb-8",
        children: [
          i.jsxs("h2", {
            className: "text-3xl font-bold mb-2",
            children: ["Securing ", a.name],
          }),
          i.jsx("p", {
            className: "text-gray-600",
            children:
              "Follow these steps to fix the security issues on this account",
          }),
        ],
      }),
      i.jsxs("div", {
        className: "grid grid-cols-3 gap-6",
        children: [
          i.jsxs(ke, {
            className: "border-2 border-gray-800 p-6",
            children: [
              i.jsx("h3", {
                className: "text-xl font-bold mb-6",
                children: "Your Progress",
              }),
              i.jsx("div", {
                className: "space-y-3 mb-6",
                children: w.map((M, ee) =>
                  i.jsxs(
                    "div",
                    {
                      className: `p-4 border-2 cursor-pointer transition-all ${ee === N ? "border-gray-800 bg-gray-100" : M.completed ? "border-green-500 bg-green-50" : "border-gray-300"}`,
                      onClick: () => P(ee),
                      children: [
                        i.jsxs("div", {
                          className: "flex items-center gap-3 mb-2",
                          children: [
                            i.jsx("div", {
                              className: `w-7 h-7 rounded-full border-2 border-gray-800 flex items-center justify-center font-bold ${M.completed ? "bg-green-500 text-white" : ""}`,
                              children: M.completed
                                ? i.jsx(Gl, { className: "w-4 h-4" })
                                : ee + 1,
                            }),
                            i.jsxs("span", {
                              className: "text-sm font-medium",
                              children: ["Step ", ee + 1],
                            }),
                          ],
                        }),
                        i.jsx("div", {
                          className: "text-sm font-medium",
                          children: M.title,
                        }),
                      ],
                    },
                    M.id,
                  ),
                ),
              }),
              i.jsxs("div", {
                className: "p-4 border-2 border-gray-800 bg-gray-50",
                children: [
                  i.jsx("div", {
                    className: "text-sm text-gray-600 mb-2",
                    children: "Overall Progress",
                  }),
                  i.jsxs("div", {
                    className: "text-3xl font-bold mb-3",
                    children: [L, "/", w.length],
                  }),
                  i.jsx("div", {
                    className: "w-full h-3 border-2 border-gray-800",
                    children: i.jsx("div", {
                      className:
                        "h-full bg-gray-800 transition-all duration-500",
                      style: { width: `${Q}%` },
                    }),
                  }),
                ],
              }),
            ],
          }),
          i.jsxs("div", {
            className: "col-span-2",
            children: [
              i.jsxs(ke, {
                className: "border-2 border-gray-800 p-8 mb-6",
                children: [
                  i.jsxs("div", {
                    className: "mb-6",
                    children: [
                      i.jsxs("div", {
                        className: "text-sm text-gray-600 mb-2",
                        children: ["Step ", N + 1, " of ", w.length],
                      }),
                      i.jsxs("div", {
                        className: "flex items-center justify-between mb-3",
                        children: [
                          i.jsx("h2", {
                            className: "text-2xl font-bold",
                            children: T.title,
                          }),
                          a.websiteUrl &&
                            i.jsxs("a", {
                              href: a.websiteUrl,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "flex items-center gap-2 px-4 py-2 border-2 border-gray-800 bg-white hover:bg-gray-100 text-sm font-medium",
                              children: [
                                "Go to ",
                                a.name,
                                i.jsx(ni, { className: "w-4 h-4" }),
                              ],
                            }),
                        ],
                      }),
                      i.jsx("p", {
                        className: "text-gray-700 mb-4",
                        children: T.description,
                      }),
                      i.jsxs("div", {
                        className:
                          "inline-block px-4 py-2 border-2 border-gray-800 bg-gray-100 text-sm font-medium",
                        children: ["⏱Estimated time: ", T.estimatedTime],
                      }),
                    ],
                  }),
                  T.title.includes("Two-Factor") &&
                    v &&
                    i.jsx("div", {
                      className:
                        "mb-6 p-6 border-2 border-gray-800 bg-green-50",
                      children: i.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          i.jsxs("div", {
                            children: [
                              i.jsx("h4", {
                                className: "font-bold mb-1",
                                children: "Need a 2FA Code?",
                              }),
                              i.jsx("p", {
                                className: "text-sm text-gray-600",
                                children:
                                  "View your authenticator app to get verification codes",
                              }),
                            ],
                          }),
                          i.jsx(Ge, {
                            className:
                              "border-2 border-gray-800 bg-gray-800 text-white hover:bg-gray-700",
                            onClick: v,
                            children: "View Authenticator",
                          }),
                        ],
                      }),
                    }),
                  i.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      i.jsx("h3", {
                        className: "font-bold text-lg mb-4",
                        children: "Follow these steps:",
                      }),
                      T.instructions.map((M, ee) =>
                        i.jsxs(
                          "div",
                          {
                            className:
                              "flex gap-4 p-4 border-2 border-gray-800 bg-gray-50",
                            children: [
                              i.jsx("div", {
                                className:
                                  "w-8 h-8 rounded-full border-2 border-gray-800 bg-white flex-shrink-0 flex items-center justify-center font-bold",
                                children: ee + 1,
                              }),
                              i.jsx("div", {
                                className: "pt-1 font-medium",
                                children: M,
                              }),
                            ],
                          },
                          ee,
                        ),
                      ),
                    ],
                  }),
                  (T.title.includes("Password") ||
                    T.title.includes("password")) &&
                    i.jsxs("div", {
                      className: "mt-6 p-6 border-2 border-gray-800 bg-gray-50",
                      children: [
                        i.jsx("h4", {
                          className: "font-bold mb-3",
                          children: "Test Your Password Strength",
                        }),
                        i.jsx("p", {
                          className: "text-sm text-gray-600 mb-4",
                          children:
                            "Try entering a password to check if it meets the strength requirements",
                        }),
                        i.jsx(Ip, {
                          type: "password",
                          placeholder: "Enter a password to test...",
                          value: I,
                          onChange: (M) => z(M.target.value),
                          className: "mb-3 border-2 border-gray-800",
                        }),
                        I.length > 0 &&
                          i.jsxs("div", {
                            className: `p-3 border-2 border-gray-800 ${I.length > 6 ? "bg-green-100" : "bg-red-100"}`,
                            children: [
                              i.jsx("div", {
                                className: "font-medium",
                                children:
                                  I.length > 6
                                    ? "✓ Strong Password"
                                    : "✗ Weak Password",
                              }),
                              i.jsx("div", {
                                className: "text-sm mt-1",
                                children:
                                  I.length > 6
                                    ? "This password meets the minimum requirements"
                                    : "Password must be longer than 6 characters",
                              }),
                            ],
                          }),
                      ],
                    }),
                ],
              }),
              i.jsxs("div", {
                className: "flex gap-4",
                children: [
                  i.jsx(Ge, {
                    className:
                      "flex-1 border-2 border-gray-800 bg-gray-800 text-white hover:bg-gray-700 py-6 text-lg",
                    onClick: Z,
                    children:
                      N < w.length - 1
                        ? i.jsxs(i.Fragment, {
                            children: [
                              i.jsx(Gl, { className: "w-5 h-5 mr-2" }),
                              "Mark Complete & Continue",
                            ],
                          })
                        : "Complete All Fixes",
                  }),
                  N < w.length - 1 &&
                    i.jsx(Ge, {
                      variant: "outline",
                      className: "border-2 border-gray-800 py-6",
                      onClick: H,
                      children: "Skip for Now",
                    }),
                ],
              }),
              i.jsxs(ke, {
                className: "border-2 border-gray-800 p-6 mt-6 bg-blue-50",
                children: [
                  i.jsx("h4", {
                    className: "font-bold mb-3",
                    children: "Need Help?",
                  }),
                  i.jsxs("div", {
                    className: "space-y-2 text-sm",
                    children: [
                      i.jsx("div", {
                        children:
                          "• Can't find the settings? Look for a gear icon or your profile picture",
                      }),
                      i.jsxs("div", {
                        children: [
                          "• Having trouble? Contact ",
                          a.name,
                          " support for assistance",
                        ],
                      }),
                      i.jsx("div", {
                        children:
                          "• Want to learn more? Check our security guides",
                      }),
                    ],
                  }),
                  T.title.includes("Two-Factor") &&
                    v &&
                    i.jsx(Ge, {
                      className:
                        "w-full mt-4 border-2 border-gray-800 bg-white hover:bg-gray-100 text-black",
                      onClick: v,
                      children: "View Authenticator",
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Ap({
  accountName: a,
  oldScore: p,
  newScore: u,
  fixedIssues: v,
  onContinue: x,
}) {
  const w = u - p,
    S = v.length;
  return i.jsxs("div", {
    className: "max-w-4xl mx-auto",
    children: [
      i.jsxs("div", {
        className: "text-center mb-12",
        children: [
          i.jsx("div", {
            className:
              "w-32 h-32 rounded-full border-4 border-gray-800 bg-green-500 mx-auto mb-6 flex items-center justify-center animate-bounce",
            children: i.jsx(Gl, {
              className: "w-16 h-16 text-white",
              strokeWidth: 4,
            }),
          }),
          i.jsx("h1", {
            className: "text-4xl font-bold mb-4",
            children: S > 0 ? "Security Issues Resolved!" : "Progress Saved",
          }),
          i.jsx("p", {
            className: "text-xl text-gray-700",
            children:
              S > 0
                ? i.jsxs(i.Fragment, {
                    children: [
                      "Great work! ",
                      i.jsx("strong", { children: a }),
                      " is now more secure.",
                    ],
                  })
                : i.jsxs(i.Fragment, {
                    children: [
                      "You can continue fixing ",
                      i.jsx("strong", { children: a }),
                      " later.",
                    ],
                  }),
          }),
        ],
      }),
      i.jsx(ke, {
        className: "border-2 border-gray-800 p-8 mb-8",
        children: i.jsxs("div", {
          className: "text-center",
          children: [
            i.jsx("h3", {
              className: "text-2xl font-bold mb-8",
              children: "Your Security Score Improved",
            }),
            i.jsxs("div", {
              className: "flex items-center justify-center gap-12 mb-8",
              children: [
                i.jsxs("div", {
                  className: "text-center",
                  children: [
                    i.jsxs("div", {
                      className: "p-6 border-2 border-gray-800 mb-3 bg-gray-50",
                      children: [
                        i.jsx("div", {
                          className: "text-sm text-gray-600 mb-2",
                          children: "Previous Score",
                        }),
                        i.jsx("div", {
                          className: "text-6xl font-bold",
                          children: p,
                        }),
                      ],
                    }),
                    i.jsx("div", {
                      className: "text-sm font-medium",
                      children: "Needed Work",
                    }),
                  ],
                }),
                i.jsx("div", {
                  className: "text-5xl font-bold text-gray-400",
                  children: "→",
                }),
                i.jsxs("div", {
                  className: "text-center",
                  children: [
                    i.jsxs("div", {
                      className:
                        "p-6 border-2 border-gray-800 bg-green-500 text-white mb-3",
                      children: [
                        i.jsx("div", {
                          className: "text-sm mb-2",
                          children: "Current Score",
                        }),
                        i.jsx("div", {
                          className: "text-6xl font-bold",
                          children: u,
                        }),
                      ],
                    }),
                    i.jsx("div", {
                      className: "text-sm font-medium",
                      children: u >= 80 ? "Excellent!" : "Better!",
                    }),
                  ],
                }),
              ],
            }),
            i.jsxs("div", {
              className:
                "inline-block px-8 py-4 border-2 border-gray-800 bg-green-100 text-lg font-bold",
              children: ["🎉 Score increased by +", w, " points"],
            }),
          ],
        }),
      }),
      S > 0 &&
        i.jsxs(ke, {
          className: "border-2 border-gray-800 p-8 mb-8",
          children: [
            i.jsx("h3", {
              className: "text-2xl font-bold mb-6",
              children: "What You Just Fixed",
            }),
            i.jsx("div", {
              className: "space-y-4",
              children: v.map((N) =>
                i.jsxs(
                  "div",
                  {
                    className:
                      "flex items-start gap-4 p-4 border-2 border-gray-800 bg-green-50",
                    children: [
                      i.jsx("div", {
                        className:
                          "w-10 h-10 border-2 border-gray-800 bg-green-500 text-white flex items-center justify-center flex-shrink-0",
                        children: i.jsx(Gl, { className: "w-6 h-6" }),
                      }),
                      i.jsxs("div", {
                        children: [
                          i.jsx("h4", {
                            className: "font-bold mb-1",
                            children: N.title,
                          }),
                          i.jsx("p", {
                            className: "text-sm text-gray-700",
                            children: N.description,
                          }),
                        ],
                      }),
                    ],
                  },
                  N.id,
                ),
              ),
            }),
          ],
        }),
      i.jsxs(ke, {
        className: "border-2 border-gray-800 p-8 mb-8 bg-blue-50",
        children: [
          i.jsx("h3", {
            className: "text-2xl font-bold mb-4",
            children: "Keep Going!",
          }),
          i.jsx("p", {
            className: "text-gray-700 mb-4",
            children:
              "You're on the right track. Check your dashboard to see if other accounts need attention.",
          }),
          i.jsxs("div", {
            className: "space-y-2 text-sm",
            children: [
              i.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  i.jsx("div", {
                    className: "w-2 h-2 bg-blue-500 rounded-full",
                  }),
                  i.jsx("span", {
                    children: "Review other accounts for similar issues",
                  }),
                ],
              }),
              i.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  i.jsx("div", {
                    className: "w-2 h-2 bg-blue-500 rounded-full",
                  }),
                  i.jsx("span", {
                    children:
                      "Consider using a password manager for all accounts",
                  }),
                ],
              }),
              i.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  i.jsx("div", {
                    className: "w-2 h-2 bg-blue-500 rounded-full",
                  }),
                  i.jsx("span", {
                    children: "Schedule regular security check-ups every month",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      i.jsx("div", {
        className: "flex justify-center",
        children: i.jsx(Ge, {
          className:
            "px-12 py-6 border-2 border-gray-800 bg-gray-800 text-white hover:bg-gray-700 text-lg",
          onClick: x,
          children: "Return to Dashboard",
        }),
      }),
    ],
  });
}
function Op({ accounts: a, securityScore: p, onBack: u }) {
  const v = a.reduce((z, T) => z + T.issues.length, 0),
    x = a.reduce((z, T) => z + T.issues.filter((L) => L.fixed).length, 0),
    w = v - x,
    S = a.reduce(
      (z, T) =>
        z + T.issues.filter((L) => !L.fixed && L.severity === "high").length,
      0,
    ),
    N = a.filter((z) => z.riskLevel === "safe").length,
    P = a.filter((z) => z.riskLevel !== "safe"),
    I = [
      {
        icon: "🔑",
        title: "Use Unique Passwords",
        description:
          "Never reuse passwords across different accounts to prevent cascading breaches",
      },
      {
        icon: "📱",
        title: "Enable 2FA Everywhere",
        description:
          "Turn on two-factor authentication for all accounts that support it",
      },
      {
        icon: "🔄",
        title: "Update Passwords Regularly",
        description:
          "Change passwords every 3-6 months, especially for critical accounts",
      },
      {
        icon: "🔐",
        title: "Use a Password Manager",
        description:
          "Let a password manager generate and store complex passwords for you",
      },
      {
        icon: "🚫",
        title: "Never Share Passwords",
        description:
          "Keep passwords private and never share them via email or text",
      },
      {
        icon: "⚠️",
        title: "Watch for Phishing",
        description:
          "Be cautious of suspicious emails and always verify sender authenticity",
      },
    ];
  return i.jsxs("div", {
    children: [
      i.jsxs(Ge, {
        variant: "ghost",
        size: "sm",
        className: "mb-6 -ml-2",
        onClick: u,
        children: [
          i.jsx(Ir, { className: "w-4 h-4 mr-2" }),
          "Back to Dashboard",
        ],
      }),
      i.jsxs("div", {
        className: "mb-8",
        children: [
          i.jsx("h2", {
            className: "text-3xl font-bold mb-2",
            children: "Security Report",
          }),
          i.jsx("p", {
            className: "text-gray-600",
            children:
              "Complete overview of your account security and recommendations",
          }),
        ],
      }),
      i.jsxs("div", {
        className: "mb-8",
        children: [
          i.jsx("h3", {
            className: "text-2xl font-bold mb-4",
            children: "Security Overview",
          }),
          i.jsxs("div", {
            className: "grid grid-cols-4 gap-4",
            children: [
              i.jsxs(ke, {
                className: "border-2 border-gray-800 p-6 text-center",
                children: [
                  i.jsx("div", {
                    className: "text-5xl font-bold mb-2",
                    children: p,
                  }),
                  i.jsx("div", {
                    className: "font-medium mb-2",
                    children: "Security Score",
                  }),
                  i.jsx("div", {
                    className:
                      "text-sm px-3 py-1 border-2 border-gray-800 bg-gray-100 inline-block",
                    children:
                      p >= 80 ? "Excellent" : p >= 60 ? "Good" : "Needs Work",
                  }),
                ],
              }),
              i.jsxs(ke, {
                className: "border-2 border-gray-800 p-6 text-center",
                children: [
                  i.jsx("div", {
                    className: "text-5xl font-bold mb-2",
                    children: w,
                  }),
                  i.jsx("div", {
                    className: "font-medium mb-2",
                    children: "Active Issues",
                  }),
                  i.jsxs("div", {
                    className:
                      "text-sm px-3 py-1 border-2 border-gray-800 bg-red-100 inline-block",
                    children: [S, " critical"],
                  }),
                ],
              }),
              i.jsxs(ke, {
                className: "border-2 border-gray-800 p-6 text-center",
                children: [
                  i.jsx("div", {
                    className: "text-5xl font-bold mb-2",
                    children: N,
                  }),
                  i.jsx("div", {
                    className: "font-medium mb-2",
                    children: "Safe Accounts",
                  }),
                  i.jsxs("div", {
                    className:
                      "text-sm px-3 py-1 border-2 border-gray-800 bg-green-100 inline-block",
                    children: ["of ", a.length],
                  }),
                ],
              }),
              i.jsxs(ke, {
                className: "border-2 border-gray-800 p-6 text-center",
                children: [
                  i.jsx("div", {
                    className: "text-5xl font-bold mb-2",
                    children: x,
                  }),
                  i.jsx("div", {
                    className: "font-medium mb-2",
                    children: "Issues Fixed",
                  }),
                  i.jsxs("div", {
                    className:
                      "text-sm px-3 py-1 border-2 border-gray-800 bg-blue-100 inline-block",
                    children: [
                      v > 0 ? Math.round((x / v) * 100) : 0,
                      "% resolved",
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      P.length > 0 &&
        i.jsxs("div", {
          className: "mb-8",
          children: [
            i.jsx("h3", {
              className: "text-2xl font-bold mb-4",
              children: "Accounts Needing Attention",
            }),
            i.jsx("div", {
              className: "space-y-3",
              children: P.map((z) =>
                i.jsx(
                  ke,
                  {
                    className: "border-2 border-gray-800 p-6",
                    children: i.jsxs("div", {
                      className: "flex items-start gap-4",
                      children: [
                        i.jsx("div", {
                          className: `w-12 h-12 border-2 border-gray-800 flex items-center justify-center flex-shrink-0 text-white font-bold ${z.riskLevel === "unsafe" ? "bg-red-500" : "bg-yellow-500"}`,
                          children: "!",
                        }),
                        i.jsxs("div", {
                          className: "flex-1",
                          children: [
                            i.jsxs("div", {
                              className:
                                "flex items-start justify-between mb-2",
                              children: [
                                i.jsx("h4", {
                                  className: "text-xl font-bold",
                                  children: z.name,
                                }),
                                i.jsx("span", {
                                  className: `text-sm px-3 py-1 border-2 border-gray-800 font-bold ${z.riskLevel === "unsafe" ? "bg-red-500 text-white" : "bg-yellow-500 text-white"}`,
                                  children:
                                    z.riskLevel === "unsafe"
                                      ? "UNSAFE"
                                      : "NEEDS WORK",
                                }),
                              ],
                            }),
                            i.jsxs("p", {
                              className: "text-gray-700 mb-3",
                              children: [
                                z.issues.filter((T) => !T.fixed).length,
                                " issue",
                                z.issues.filter((T) => !T.fixed).length !== 1
                                  ? "s"
                                  : "",
                                " found:",
                                " ",
                                z.issues
                                  .filter((T) => !T.fixed)
                                  .map((T) => T.title)
                                  .slice(0, 2)
                                  .join(", "),
                                z.issues.filter((T) => !T.fixed).length > 2 &&
                                  "...",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  z.id,
                ),
              ),
            }),
          ],
        }),
      P.length === 0 &&
        i.jsxs(ke, {
          className:
            "border-2 border-green-500 bg-green-50 p-8 text-center mb-8",
          children: [
            i.jsx("div", {
              className:
                "w-20 h-20 rounded-full border-2 border-gray-800 bg-green-500 mx-auto mb-4 flex items-center justify-center",
              children: i.jsx("span", {
                className: "text-4xl text-white",
                children: "✓",
              }),
            }),
            i.jsx("h3", {
              className: "text-2xl font-bold mb-2",
              children: "All Accounts Secure!",
            }),
            i.jsx("p", {
              className: "text-gray-700",
              children:
                "Excellent work! All your accounts are properly secured. Keep up the good security practices.",
            }),
          ],
        }),
      i.jsxs("div", {
        className: "mb-8",
        children: [
          i.jsx("h3", {
            className: "text-2xl font-bold mb-4",
            children: "Security Best Practices",
          }),
          i.jsx("div", {
            className: "grid grid-cols-2 gap-4",
            children: I.map((z, T) =>
              i.jsx(
                ke,
                {
                  className: "border-2 border-gray-800 p-6",
                  children: i.jsxs("div", {
                    className: "flex gap-4",
                    children: [
                      i.jsx("div", { className: "text-4xl", children: z.icon }),
                      i.jsxs("div", {
                        children: [
                          i.jsx("h4", {
                            className: "font-bold mb-2",
                            children: z.title,
                          }),
                          i.jsx("p", {
                            className: "text-sm text-gray-700",
                            children: z.description,
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                T,
              ),
            ),
          }),
        ],
      }),
      i.jsxs("div", {
        className: "flex gap-4 justify-center",
        children: [
          i.jsx(Ge, {
            className:
              "px-8 py-4 border-2 border-gray-800 bg-gray-800 text-white hover:bg-gray-700",
            onClick: u,
            children: "Back to Dashboard",
          }),
          i.jsx(Ge, {
            variant: "outline",
            className: "px-8 py-4 border-2 border-gray-800",
            children: "Download Report",
          }),
          i.jsx(Ge, {
            variant: "outline",
            className: "px-8 py-4 border-2 border-gray-800",
            children: "Share Summary",
          }),
        ],
      }),
    ],
  });
}
function Fp({ onBack: a, accountName: p, accounts: u }) {
  const [x, w] = le.useState("123 456"),
    [S, N] = le.useState(60),
    [P, I] = le.useState([]);
  console.log("Authenticator props:", {
    accountName: p,
    accountsLength: u?.length,
  });
  const z = () => {
      const Q = Math.floor(Math.random() * 900) + 100,
        Z = Math.floor(Math.random() * 900) + 100;
      return `${Q} ${Z}`;
    },
    T = (Q) => {
      const Z = Math.floor(Q / 60),
        H = Q % 60;
      return `${Z}:${H.toString().padStart(2, "0")}`;
    };
  (le.useEffect(() => {
    if (u && !p) {
      const H = 60 - (Math.floor(new Date().getTime() / 1e3) % 60),
        M = u.map((ee) => ({ accountName: ee.name, code: z(), timeLeft: H }));
      I(M);
    }
  }, [u, p]),
    le.useEffect(() => {
      if (p) {
        (w(z()), N(60));
        const Q = setInterval(() => {
          N((Z) => (Z <= 1 ? (w(z()), 60) : Z - 1));
        }, 1e3);
        return () => clearInterval(Q);
      }
    }, [p]),
    le.useEffect(() => {
      if (u && !p) {
        const Q = setInterval(() => {
          I((Z) =>
            Z.length > 0 && Z[0].timeLeft <= 1
              ? Z.map((H) => ({ ...H, code: z(), timeLeft: 60 }))
              : Z.map((H) => ({ ...H, timeLeft: H.timeLeft - 1 })),
          );
        }, 1e3);
        return () => clearInterval(Q);
      }
    }, [u, p]));
  const L = p || "your account";
  return p
    ? i.jsxs("div", {
        children: [
          i.jsxs(Ge, {
            variant: "ghost",
            size: "sm",
            className: "mb-6 -ml-2",
            onClick: a,
            children: [i.jsx(Ir, { className: "w-4 h-4 mr-2" }), "Back"],
          }),
          i.jsxs("div", {
            className: "mb-8",
            children: [
              i.jsx("h2", {
                className: "text-3xl font-bold mb-2",
                children: "Authenticator",
              }),
              i.jsxs("p", {
                className: "text-gray-600",
                children: ["Two-factor authentication code for ", p],
              }),
            ],
          }),
          i.jsx(ke, {
            className: "border-2 border-gray-800 p-8",
            children: i.jsxs("div", {
              className: "max-w-md mx-auto",
              children: [
                i.jsxs("div", {
                  className: "mb-6",
                  children: [
                    i.jsx("h3", {
                      className: "text-xl font-bold mb-4",
                      children: p,
                    }),
                    i.jsxs("div", {
                      className:
                        "p-6 border-2 border-gray-800 bg-gray-50 text-center",
                      children: [
                        i.jsx("div", {
                          className: "text-4xl font-bold tracking-wider mb-2",
                          children: x,
                        }),
                        i.jsxs("div", {
                          className: "text-sm text-gray-600",
                          children: ["Code expires in ", T(S)],
                        }),
                      ],
                    }),
                  ],
                }),
                i.jsxs("div", {
                  className: "p-4 border-2 border-gray-800 bg-blue-50",
                  children: [
                    i.jsx("h4", {
                      className: "font-bold mb-2",
                      children: "How to use:",
                    }),
                    i.jsxs("div", {
                      className: "space-y-2 text-sm",
                      children: [
                        i.jsxs("div", {
                          children: [
                            "• Enter this 6-digit code when logging into ",
                            L,
                          ],
                        }),
                        i.jsx("div", {
                          children: "• Code refreshes every 60 seconds",
                        }),
                        i.jsx("div", {
                          children: "• Keep your authenticator app secure",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      })
    : i.jsxs("div", {
        children: [
          i.jsxs(Ge, {
            variant: "ghost",
            size: "sm",
            className: "mb-6 -ml-2",
            onClick: a,
            children: [i.jsx(Ir, { className: "w-4 h-4 mr-2" }), "Back"],
          }),
          i.jsxs("div", {
            className: "mb-8",
            children: [
              i.jsx("h2", {
                className: "text-3xl font-bold mb-2",
                children: "Authenticator Hub",
              }),
              i.jsx("p", {
                className: "text-gray-600",
                children:
                  "Manage all your two-factor authentication codes in one place",
              }),
            ],
          }),
          i.jsxs("div", {
            className: "mb-6 p-4 border-2 border-gray-800 bg-blue-50",
            children: [
              i.jsx("h4", {
                className: "font-bold mb-2",
                children: "About 2FA Codes:",
              }),
              i.jsxs("div", {
                className: "space-y-1 text-sm",
                children: [
                  i.jsx("div", {
                    children:
                      "• Each code is unique to its account and refreshes every 60 seconds",
                  }),
                  i.jsx("div", {
                    children:
                      "• Use these codes when logging in to add an extra layer of security",
                  }),
                  i.jsx("div", {
                    children:
                      "• Keep this page secure - anyone with access can see your codes",
                  }),
                ],
              }),
            ],
          }),
          P.length === 0
            ? i.jsx("div", {
                className:
                  "text-center p-8 border-2 border-gray-800 bg-gray-50",
                children: i.jsx("p", {
                  className: "text-gray-600",
                  children: "Loading authenticator codes...",
                }),
              })
            : i.jsx("div", {
                className: "grid grid-cols-2 gap-4",
                children: P.map((Q) => {
                  const Z = u?.find((H) => H.name === Q.accountName);
                  return i.jsxs(
                    ke,
                    {
                      className: "border-2 border-gray-800 p-6",
                      children: [
                        i.jsxs("div", {
                          className: "mb-4",
                          children: [
                            i.jsxs("div", {
                              className:
                                "flex items-center justify-between mb-1",
                              children: [
                                i.jsx("h3", {
                                  className: "text-lg font-bold",
                                  children: Q.accountName,
                                }),
                                Z?.websiteUrl &&
                                  i.jsx("a", {
                                    href: Z.websiteUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                      "text-gray-600 hover:text-gray-800",
                                    title: `Go to ${Q.accountName}`,
                                    children: i.jsx(ni, {
                                      className: "w-4 h-4",
                                    }),
                                  }),
                              ],
                            }),
                            i.jsx("div", {
                              className: "text-xs text-gray-600",
                              children: "Two-Factor Authentication",
                            }),
                          ],
                        }),
                        i.jsxs("div", {
                          className:
                            "p-4 border-2 border-gray-800 bg-gray-50 text-center mb-3",
                          children: [
                            i.jsx("div", {
                              className:
                                "text-3xl font-bold tracking-wider mb-2",
                              children: Q.code,
                            }),
                            i.jsxs("div", {
                              className: "text-xs text-gray-600",
                              children: ["Expires in ", T(Q.timeLeft)],
                            }),
                          ],
                        }),
                        i.jsx("div", {
                          className: "flex items-center justify-center",
                          children: i.jsx("div", {
                            className:
                              "w-full bg-gray-200 h-2 border-2 border-gray-800",
                            children: i.jsx("div", {
                              className:
                                "bg-gray-800 h-full transition-all duration-1000",
                              style: { width: `${(Q.timeLeft / 60) * 100}%` },
                            }),
                          }),
                        }),
                      ],
                    },
                    Q.accountName,
                  );
                }),
              }),
        ],
      });
}
function Dp() {
  const [a, p] = le.useState("dashboard"),
    [u, v] = le.useState(oc),
    [x, w] = le.useState(null),
    [S, N] = le.useState(sc(oc)),
    [P, I] = le.useState(S),
    [z, T] = le.useState(""),
    [L, Q] = le.useState([]),
    [Z, H] = le.useState(void 0),
    M = u.find((de) => de.id === x),
    ee = (de) => {
      (w(de), p("account-detail"));
    },
    me = () => {
      p("fix-flow");
    },
    Ce = (de) => {
      if (!x) return;
      I(S);
      const B = u.find((Je) => Je.id === x);
      if (B) {
        T(B.name);
        const Je = B.issues.filter((Fe) => de.includes(Fe.id));
        Q(Je);
      }
      const Ee = If(u, x, de);
      v(Ee);
      const Ze = sc(Ee);
      (N(Ze), p("completion"));
    },
    ie = () => {
      (p("dashboard"), w(null));
    },
    be = () => {
      p("summary");
    },
    he = (de) => {
      (H(de), p("authenticator"));
    };
  return i.jsxs("div", {
    className: "min-h-screen bg-gray-100",
    children: [
      i.jsx("header", {
        className: "bg-white border-b-2 border-gray-800",
        children: i.jsx("div", {
          className: "max-w-7xl mx-auto px-8 py-6",
          children: i.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              i.jsx("h1", {
                className: "text-2xl font-bold",
                children: "ShieldHub",
              }),
              i.jsxs("nav", {
                className: "flex gap-4",
                children: [
                  i.jsx("button", {
                    className: `px-4 py-2 border-2 border-gray-800 transition ${a === "dashboard" ? "bg-gray-800 text-white" : "bg-white hover:bg-gray-100"}`,
                    onClick: ie,
                    children: "Dashboard",
                  }),
                  i.jsx("button", {
                    className: `px-4 py-2 border-2 border-gray-800 transition ${a === "authenticator" ? "bg-gray-800 text-white" : "bg-white hover:bg-gray-100"}`,
                    onClick: () => he(),
                    children: "Authenticator",
                  }),
                  i.jsx("button", {
                    className:
                      "px-4 py-2 border-2 border-gray-800 bg-white hover:bg-gray-100 transition",
                    children: "Settings",
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      i.jsxs("main", {
        className: "max-w-7xl mx-auto px-8 py-8",
        children: [
          a === "dashboard" &&
            i.jsx(Tp, {
              accounts: u,
              securityScore: S,
              onAccountClick: ee,
              onViewSummary: be,
            }),
          a === "account-detail" &&
            M &&
            i.jsx(Rp, { account: M, onStartFix: me, onBack: ie }),
          a === "fix-flow" &&
            M &&
            i.jsx(Mp, {
              account: M,
              onComplete: Ce,
              onBack: () => p("account-detail"),
              onNavigateToAuthenticator: () => he(M.name),
            }),
          a === "completion" &&
            i.jsx(Ap, {
              accountName: z,
              oldScore: P,
              newScore: S,
              fixedIssues: L,
              onContinue: ie,
            }),
          a === "summary" &&
            i.jsx(Op, { accounts: u, securityScore: S, onBack: ie }),
          a === "authenticator" &&
            i.jsx(Fp, { onBack: ie, accountName: Z, accounts: Z ? void 0 : u }),
        ],
      }),
    ],
  });
}
Rf.createRoot(document.getElementById("root")).render(i.jsx(Dp, {}));
