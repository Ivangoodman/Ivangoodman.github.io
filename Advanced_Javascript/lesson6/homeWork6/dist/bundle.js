!(function (t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var o = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = t),
    (r.c = e),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          r.d(
            n,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ""),
    r((r.s = 4));
})([
  function (t, e, r) {
    t.exports = r(6);
  },
  function (t, e, r) {},
  function (t, e, r) {
    var n = r(7),
      o = r(8),
      i = r(9),
      a = r(11);
    t.exports = function (t, e) {
      return n(t) || o(t, e) || i(t, e) || a();
    };
  },
  function (t, e) {
    function r(t, e, r, n, o, i, a) {
      try {
        var c = t[i](a),
          u = c.value;
      } catch (t) {
        return void r(t);
      }
      c.done ? e(u) : Promise.resolve(u).then(n, o);
    }
    t.exports = function (t) {
      return function () {
        var e = this,
          n = arguments;
        return new Promise(function (o, i) {
          var a = t.apply(e, n);
          function c(t) {
            r(a, o, i, c, u, "next", t);
          }
          function u(t) {
            r(a, o, i, c, u, "throw", t);
          }
          c(void 0);
        });
      };
    };
  },
  function (t, e, r) {
    r(5), (t.exports = r(1));
  },
  function (t, e, r) {
    "use strict";
    r.r(e);
    var n = r(0),
      o = r.n(n),
      i = r(2),
      a = r.n(i),
      c = r(3),
      u = r.n(c),
      l = (r(1), document.getElementById("list")),
      f = document.getElementById("spinner"),
      s = document.getElementById("userInfo");
    function h(t) {
      return fetch("https://jsonplaceholder.typicode.com/" + t).then(function (
        t
      ) {
        return t.ok ? t.json() : Promise.reject(" Unsuccessfull response");
      });
    }
    function p(t, e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (d = u()(
        o.a.mark(function t(e, r) {
          var n, i, c;
          return o.a.wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.prev = 0), (t.next = 3), Promise.all([h(e)]);
                  case 3:
                    (n = t.sent),
                      (i = a()(n, 1)),
                      (c = i[0]),
                      r(c),
                      (t.next = 13);
                    break;
                  case 9:
                    (t.prev = 9),
                      (t.t0 = t.catch(0)),
                      console.log(t.t0),
                      (l.textContent = "OOps");
                  case 13:
                  case "end":
                    return t.stop();
                }
            },
            t,
            null,
            [[0, 9]]
          );
        })
      )).apply(this, arguments);
    }
    function y(t) {
      var e = t.target.id;
      p("users/".concat(e), v);
      var r = document.getElementById(e);
      document.querySelectorAll(".link").forEach(function (t) {
        return t.parentElement.classList.remove("current");
      }),
        r.parentElement.classList.add("current");
    }
    function v(t) {
      console.log(t),
        (s.innerHTML = '<form  >\n  <label for="fname">Name:</label>\n  <input type="text" id="fname" name="fname" disabled value="'
          .concat(
            t.name,
            '"><br><br>\n  <label for="lname">Username:</label>\n  <input type="text" id="Sname" name="lname" disabled value="'
          )
          .concat(t.username, '"><br><br>\n   <label for="lname">Email:  ')
          .concat(t.email, "</label>\n \n \n</form>"));
    }
    (l.innerHTML = "Loading ..."),
      p("posts", function (t) {
        console.log("Inside:", t);
        for (
          var e =
              " <tr>\n        <th>Title</th>\n        <th>Body</th>\n        <th>Link</th>\n      </tr>",
            r = 0;
          r < 100;
          r += 10
        )
          e += "\n          <tr>\n          <td>"
            .concat(t[r].title, " </td>\n          <td>")
            .concat(t[r].body, "</td>\n          <td   ><a id=")
            .concat(
              t[r].userId,
              ' class="link" >Link to user...</a></td>\n          <tr>\n        </tr>  '
            );
        (l.innerHTML = e),
          document.querySelectorAll(".link").forEach(function (t) {
            t.addEventListener("click", y);
          });
      }).finally(function () {
        f.remove();
      });
  },
  function (t, e, r) {
    var n = (function (t) {
      "use strict";
      var e = Object.prototype,
        r = e.hasOwnProperty,
        n = "function" == typeof Symbol ? Symbol : {},
        o = n.iterator || "@@iterator",
        i = n.asyncIterator || "@@asyncIterator",
        a = n.toStringTag || "@@toStringTag";
      function c(t, e, r, n) {
        var o = e && e.prototype instanceof f ? e : f,
          i = Object.create(o.prototype),
          a = new E(n || []);
        return (
          (i._invoke = (function (t, e, r) {
            var n = "suspendedStart";
            return function (o, i) {
              if ("executing" === n)
                throw new Error("Generator is already running");
              if ("completed" === n) {
                if ("throw" === o) throw i;
                return O();
              }
              for (r.method = o, r.arg = i; ; ) {
                var a = r.delegate;
                if (a) {
                  var c = w(a, r);
                  if (c) {
                    if (c === l) continue;
                    return c;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                n = "executing";
                var f = u(t, e, r);
                if ("normal" === f.type) {
                  if (
                    ((n = r.done ? "completed" : "suspendedYield"), f.arg === l)
                  )
                    continue;
                  return { value: f.arg, done: r.done };
                }
                "throw" === f.type &&
                  ((n = "completed"), (r.method = "throw"), (r.arg = f.arg));
              }
            };
          })(t, r, a)),
          i
        );
      }
      function u(t, e, r) {
        try {
          return { type: "normal", arg: t.call(e, r) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      t.wrap = c;
      var l = {};
      function f() {}
      function s() {}
      function h() {}
      var p = {};
      p[o] = function () {
        return this;
      };
      var d = Object.getPrototypeOf,
        y = d && d(d(j([])));
      function v(t, e) {
        return a in t ? t[a] : (t[a] = e);
      }
      y && y !== e && r.call(y, o) && (p = y);
      var m = (h.prototype = f.prototype = Object.create(p));
      function g(t) {
        ["next", "throw", "return"].forEach(function (e) {
          t[e] = function (t) {
            return this._invoke(e, t);
          };
        });
      }
      function b(t, e) {
        var n;
        this._invoke = function (o, i) {
          function a() {
            return new e(function (n, a) {
              !(function n(o, i, a, c) {
                var l = u(t[o], t, i);
                if ("throw" !== l.type) {
                  var f = l.arg,
                    s = f.value;
                  return s && "object" == typeof s && r.call(s, "__await")
                    ? e.resolve(s.__await).then(
                        function (t) {
                          n("next", t, a, c);
                        },
                        function (t) {
                          n("throw", t, a, c);
                        }
                      )
                    : e.resolve(s).then(
                        function (t) {
                          (f.value = t), a(f);
                        },
                        function (t) {
                          return n("throw", t, a, c);
                        }
                      );
                }
                c(l.arg);
              })(o, i, n, a);
            });
          }
          return (n = n ? n.then(a, a) : a());
        };
      }
      function w(t, e) {
        var r = t.iterator[e.method];
        if (void 0 === r) {
          if (((e.delegate = null), "throw" === e.method)) {
            if (
              t.iterator.return &&
              ((e.method = "return"),
              (e.arg = void 0),
              w(t, e),
              "throw" === e.method)
            )
              return l;
            (e.method = "throw"),
              (e.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return l;
        }
        var n = u(r, t.iterator, e.arg);
        if ("throw" === n.type)
          return (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), l;
        var o = n.arg;
        return o
          ? o.done
            ? ((e[t.resultName] = o.value),
              (e.next = t.nextLoc),
              "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
              (e.delegate = null),
              l)
            : o
          : ((e.method = "throw"),
            (e.arg = new TypeError("iterator result is not an object")),
            (e.delegate = null),
            l);
      }
      function x(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function L(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function E(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(x, this),
          this.reset(!0);
      }
      function j(t) {
        if (t) {
          var e = t[o];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var n = -1,
              i = function e() {
                for (; ++n < t.length; )
                  if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                return (e.value = void 0), (e.done = !0), e;
              };
            return (i.next = i);
          }
        }
        return { next: O };
      }
      function O() {
        return { value: void 0, done: !0 };
      }
      return (
        (s.prototype = m.constructor = h),
        (h.constructor = s),
        (s.displayName = v(h, "GeneratorFunction")),
        (t.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return (
            !!e &&
            (e === s || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, h)
              : ((t.__proto__ = h), v(t, "GeneratorFunction")),
            (t.prototype = Object.create(m)),
            t
          );
        }),
        (t.awrap = function (t) {
          return { __await: t };
        }),
        g(b.prototype),
        (b.prototype[i] = function () {
          return this;
        }),
        (t.AsyncIterator = b),
        (t.async = function (e, r, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new b(c(e, r, n, o), i);
          return t.isGeneratorFunction(r)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        g(m),
        v(m, "Generator"),
        (m[o] = function () {
          return this;
        }),
        (m.toString = function () {
          return "[object Generator]";
        }),
        (t.keys = function (t) {
          var e = [];
          for (var r in t) e.push(r);
          return (
            e.reverse(),
            function r() {
              for (; e.length; ) {
                var n = e.pop();
                if (n in t) return (r.value = n), (r.done = !1), r;
              }
              return (r.done = !0), r;
            }
          );
        }),
        (t.values = j),
        (E.prototype = {
          constructor: E,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(L),
              !t)
            )
              for (var e in this)
                "t" === e.charAt(0) &&
                  r.call(this, e) &&
                  !isNaN(+e.slice(1)) &&
                  (this[e] = void 0);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var e = this;
            function n(r, n) {
              return (
                (a.type = "throw"),
                (a.arg = t),
                (e.next = r),
                n && ((e.method = "next"), (e.arg = void 0)),
                !!n
              );
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion;
              if ("root" === i.tryLoc) return n("end");
              if (i.tryLoc <= this.prev) {
                var c = r.call(i, "catchLoc"),
                  u = r.call(i, "finallyLoc");
                if (c && u) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                } else if (c) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                } else {
                  if (!u)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var o = this.tryEntries[n];
              if (
                o.tryLoc <= this.prev &&
                r.call(o, "finallyLoc") &&
                this.prev < o.finallyLoc
              ) {
                var i = o;
                break;
              }
            }
            i &&
              ("break" === t || "continue" === t) &&
              i.tryLoc <= e &&
              e <= i.finallyLoc &&
              (i = null);
            var a = i ? i.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              i
                ? ((this.method = "next"), (this.next = i.finallyLoc), l)
                : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
              l
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t)
                return this.complete(r.completion, r.afterLoc), L(r), l;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  L(r);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, e, r) {
            return (
              (this.delegate = { iterator: j(t), resultName: e, nextLoc: r }),
              "next" === this.method && (this.arg = void 0),
              l
            );
          },
        }),
        t
      );
    })(t.exports);
    try {
      regeneratorRuntime = n;
    } catch (t) {
      Function("r", "regeneratorRuntime = r")(n);
    }
  },
  function (t, e) {
    t.exports = function (t) {
      if (Array.isArray(t)) return t;
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
        var r = [],
          n = !0,
          o = !1,
          i = void 0;
        try {
          for (
            var a, c = t[Symbol.iterator]();
            !(n = (a = c.next()).done) &&
            (r.push(a.value), !e || r.length !== e);
            n = !0
          );
        } catch (t) {
          (o = !0), (i = t);
        } finally {
          try {
            n || null == c.return || c.return();
          } finally {
            if (o) throw i;
          }
        }
        return r;
      }
    };
  },
  function (t, e, r) {
    var n = r(10);
    t.exports = function (t, e) {
      if (t) {
        if ("string" == typeof t) return n(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        return (
          "Object" === r && t.constructor && (r = t.constructor.name),
          "Map" === r || "Set" === r
            ? Array.from(t)
            : "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            ? n(t, e)
            : void 0
        );
      }
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
      return n;
    };
  },
  function (t, e) {
    t.exports = function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    };
  },
]);
