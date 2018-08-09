(function (t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define &&
		define.amd ? define([], e) : "object" == typeof exports ? exports.Vue2Editor = e() : t.Vue2Editor = e()
})("undefined" != typeof self ? self : this, function () {
	return function (t) {
		function e(r) {
			if (n[r]) return n[r].exports;
			var o = n[r] = {
				i: r,
				l: !1,
				exports: {}
			};
			return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
		}
		var n = {};
		return e.m = t, e.c = n, e.d = function (t, n, r) {
			e.o(t, n) || Object.defineProperty(t, n, {
				configurable: !1,
				enumerable: !0,
				get: r
			})
		}, e.n = function (t) {
			var n = t && t.__esModule ? function () {
				return t.default
			} : function () {
				return t
			};
			return e.d(n, "a", n), n
		}, e.o = function (t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		}, e.p = "/", e(e.s = 5)
	}([function (t, e, n) {
		(function (e) {
			(function (e, n) {
				t.exports = n()
			})("undefined" != typeof self && self, function () {
				return function (t) {
					function e(r) {
						if (n[r]) return n[r].exports;
						var o = n[r] = {
							i: r,
							l: !1,
							exports: {}
						};
						return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
					}
					var n = {};
					return e.m = t, e.c = n, e.d = function (t, n, r) {
						e.o(t, n) || Object.defineProperty(t, n, {
							configurable: !1,
							enumerable: !0,
							get: r
						})
					}, e.n = function (t) {
						var n = t && t.__esModule ? function () {
							return t.default
						} : function () {
							return t
						};
						return e.d(n, "a", n), n
					}, e.o = function (t, e) {
						return Object.prototype.hasOwnProperty.call(t, e)
					}, e.p = "", e(e.s = 109)
				}([function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var r = n(17),
						o = n(18),
						i = n(19),
						l = n(45),
						a = n(46),
						s = n(47),
						u = n(48),
						c = n(49),
						f = n(12),
						d = n(32),
						p = n(33),
						h = n(31),
						y = n(1),
						b = {
							Scope: y.Scope,
							create: y.create,
							find: y.find,
							query: y.query,
							register: y.register,
							Container: r.default,
							Format: o.default,
							Leaf: i.default,
							Embed: u.default,
							Scroll: l.default,
							Block: s.default,
							Inline: a.default,
							Text: c.default,
							Attributor: {
								Attribute: f.default,
								Class: d.default,
								Style: p.default,
								Store: h.default
							}
						};
					e.default = b
				}, function (t, e, n) {
					"use strict";

					function r(t, e) {
						var n = i(t);
						if (null == n) throw new s("Unable to create " + t + " blot");
						var r = n;
						return new r(t instanceof Node || t.nodeType === Node.TEXT_NODE ? t : r.create(e), e)
					}

					function o(t, n) {
						return void 0 === n && (n = !1), null == t ? null : null != t[e.DATA_KEY] ? t[e.DATA_KEY].blot : n ? o(t
							.parentNode, n) : null
					}

					function i(t, e) {
						void 0 === e && (e = p.ANY);
						var n;
						if ("string" == typeof t) n = d[t] || u[t];
						else if (t instanceof Text || t.nodeType === Node.TEXT_NODE) n = d.text;
						else if ("number" == typeof t) t & p.LEVEL & p.BLOCK ? n = d.block : t & p.LEVEL & p.INLINE && (n = d.inline);
						else if (t instanceof HTMLElement) {
							var r = (t.getAttribute("class") || "").split(/\s+/);
							for (var o in r)
								if (n = c[r[o]]) break;
							n = n || f[t.tagName]
						}
						return null == n ? null : e & p.LEVEL & n.scope && e & p.TYPE & n.scope ? n : null
					}

					function l() {
						for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
						if (t.length > 1) return t.map(function (t) {
							return l(t)
						});
						var n = t[0];
						if ("string" != typeof n.blotName && "string" != typeof n.attrName) throw new s("Invalid definition");
						if ("abstract" === n.blotName) throw new s("Cannot register abstract class");
						if (d[n.blotName || n.attrName] = n, "string" == typeof n.keyName) u[n.keyName] = n;
						else if (null != n.className && (c[n.className] = n), null != n.tagName) {
							Array.isArray(n.tagName) ? n.tagName = n.tagName.map(function (t) {
								return t.toUpperCase()
							}) : n.tagName = n.tagName.toUpperCase();
							var r = Array.isArray(n.tagName) ? n.tagName : [n.tagName];
							r.forEach(function (t) {
								null != f[t] && null != n.className || (f[t] = n)
							})
						}
						return n
					}
					var a = this && this.__extends || function () {
						var t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function (t, e) {
							t.__proto__ = e
						} || function (t, e) {
							for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
						};
						return function (e, n) {
							function r() {
								this.constructor = e
							}
							t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
						}
					}();
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var s = function (t) {
						function e(e) {
							var n = this;
							return e = "[Parchment] " + e, n = t.call(this, e) || this, n.message = e, n.name = n.constructor.name,
								n
						}
						return a(e, t), e
					}(Error);
					e.ParchmentError = s;
					var u = {},
						c = {},
						f = {},
						d = {};
					e.DATA_KEY = "__blot";
					var p;
					(function (t) {
						t[t.TYPE = 3] = "TYPE", t[t.LEVEL = 12] = "LEVEL", t[t.ATTRIBUTE = 13] = "ATTRIBUTE", t[t.BLOT = 14] =
							"BLOT", t[t.INLINE = 7] = "INLINE", t[t.BLOCK = 11] = "BLOCK", t[t.BLOCK_BLOT = 10] = "BLOCK_BLOT", t[
								t.INLINE_BLOT = 6] = "INLINE_BLOT", t[t.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", t[t.INLINE_ATTRIBUTE =
								5] = "INLINE_ATTRIBUTE", t[t.ANY = 15] = "ANY"
					})(p = e.Scope || (e.Scope = {})), e.create = r, e.find = o, e.query = i, e.register = l
				}, function (t, e, n) {
					var r = n(51),
						o = n(11),
						i = n(3),
						l = n(20),
						a = String.fromCharCode(0),
						s = function (t) {
							Array.isArray(t) ? this.ops = t : null != t && Array.isArray(t.ops) ? this.ops = t.ops : this.ops = []
						};
					s.prototype.insert = function (t, e) {
						var n = {};
						return 0 === t.length ? this : (n.insert = t, null != e && "object" == typeof e && Object.keys(e).length >
							0 && (n.attributes = e), this.push(n))
					}, s.prototype.delete = function (t) {
						return t <= 0 ? this : this.push({
							delete: t
						})
					}, s.prototype.retain = function (t, e) {
						if (t <= 0) return this;
						var n = {
							retain: t
						};
						return null != e && "object" == typeof e && Object.keys(e).length > 0 && (n.attributes = e), this.push(
							n)
					}, s.prototype.push = function (t) {
						var e = this.ops.length,
							n = this.ops[e - 1];
						if (t = i(!0, {}, t), "object" == typeof n) {
							if ("number" == typeof t.delete && "number" == typeof n.delete) return this.ops[e - 1] = {
								delete: n.delete + t.delete
							}, this;
							if ("number" == typeof n.delete && null != t.insert && (e -= 1, "object" != typeof (n = this.ops[e - 1])))
								return this.ops.unshift(t), this;
							if (o(t.attributes, n.attributes)) {
								if ("string" == typeof t.insert && "string" == typeof n.insert) return this.ops[e - 1] = {
									insert: n.insert + t.insert
								}, "object" == typeof t.attributes && (this.ops[e - 1].attributes = t.attributes), this;
								if ("number" == typeof t.retain && "number" == typeof n.retain) return this.ops[e - 1] = {
									retain: n.retain + t.retain
								}, "object" == typeof t.attributes && (this.ops[e - 1].attributes = t.attributes), this
							}
						}
						return e === this.ops.length ? this.ops.push(t) : this.ops.splice(e, 0, t), this
					}, s.prototype.chop = function () {
						var t = this.ops[this.ops.length - 1];
						return t && t.retain && !t.attributes && this.ops.pop(), this
					}, s.prototype.filter = function (t) {
						return this.ops.filter(t)
					}, s.prototype.forEach = function (t) {
						this.ops.forEach(t)
					}, s.prototype.map = function (t) {
						return this.ops.map(t)
					}, s.prototype.partition = function (t) {
						var e = [],
							n = [];
						return this.forEach(function (r) {
							(t(r) ? e : n).push(r)
						}), [e, n]
					}, s.prototype.reduce = function (t, e) {
						return this.ops.reduce(t, e)
					}, s.prototype.changeLength = function () {
						return this.reduce(function (t, e) {
							return e.insert ? t + l.length(e) : e.delete ? t - e.delete : t
						}, 0)
					}, s.prototype.length = function () {
						return this.reduce(function (t, e) {
							return t + l.length(e)
						}, 0)
					}, s.prototype.slice = function (t, e) {
						t = t || 0, "number" != typeof e && (e = 1 / 0);
						for (var n = [], r = l.iterator(this.ops), o = 0; o < e && r.hasNext();) {
							var i;
							o < t ? i = r.next(t - o) : (i = r.next(e - o), n.push(i)), o += l.length(i)
						}
						return new s(n)
					}, s.prototype.compose = function (t) {
						for (var e = l.iterator(this.ops), n = l.iterator(t.ops), r = new s; e.hasNext() || n.hasNext();)
							if ("insert" === n.peekType()) r.push(n.next());
							else if ("delete" === e.peekType()) r.push(e.next());
						else {
							var o = Math.min(e.peekLength(), n.peekLength()),
								i = e.next(o),
								a = n.next(o);
							if ("number" == typeof a.retain) {
								var u = {};
								"number" == typeof i.retain ? u.retain = o : u.insert = i.insert;
								var c = l.attributes.compose(i.attributes, a.attributes, "number" == typeof i.retain);
								c && (u.attributes = c), r.push(u)
							} else "number" == typeof a.delete && "number" == typeof i.retain && r.push(a)
						}
						return r.chop()
					}, s.prototype.concat = function (t) {
						var e = new s(this.ops.slice());
						return t.ops.length > 0 && (e.push(t.ops[0]), e.ops = e.ops.concat(t.ops.slice(1))), e
					}, s.prototype.diff = function (t, e) {
						if (this.ops === t.ops) return new s;
						var n = [this, t].map(function (e) {
								return e.map(function (n) {
									if (null != n.insert) return "string" == typeof n.insert ? n.insert : a;
									var r = e === t ? "on" : "with";
									throw new Error("diff() called " + r + " non-document")
								}).join("")
							}),
							i = new s,
							u = r(n[0], n[1], e),
							c = l.iterator(this.ops),
							f = l.iterator(t.ops);
						return u.forEach(function (t) {
							for (var e = t[1].length; e > 0;) {
								var n = 0;
								switch (t[0]) {
									case r.INSERT:
										n = Math.min(f.peekLength(), e), i.push(f.next(n));
										break;
									case r.DELETE:
										n = Math.min(e, c.peekLength()), c.next(n), i.delete(n);
										break;
									case r.EQUAL:
										n = Math.min(c.peekLength(), f.peekLength(), e);
										var a = c.next(n),
											s = f.next(n);
										o(a.insert, s.insert) ? i.retain(n, l.attributes.diff(a.attributes, s.attributes)) : i.push(s).delete(
											n)
								}
								e -= n
							}
						}), i.chop()
					}, s.prototype.eachLine = function (t, e) {
						e = e || "\n";
						for (var n = l.iterator(this.ops), r = new s, o = 0; n.hasNext();) {
							if ("insert" !== n.peekType()) return;
							var i = n.peek(),
								a = l.length(i) - n.peekLength(),
								u = "string" == typeof i.insert ? i.insert.indexOf(e, a) - a : -1;
							if (u < 0) r.push(n.next());
							else if (u > 0) r.push(n.next(u));
							else {
								if (!1 === t(r, n.next(1).attributes || {}, o)) return;
								o += 1, r = new s
							}
						}
						r.length() > 0 && t(r, {}, o)
					}, s.prototype.transform = function (t, e) {
						if (e = !!e, "number" == typeof t) return this.transformPosition(t, e);
						for (var n = l.iterator(this.ops), r = l.iterator(t.ops), o = new s; n.hasNext() || r.hasNext();)
							if ("insert" !== n.peekType() || !e && "insert" === r.peekType())
								if ("insert" === r.peekType()) o.push(r.next());
								else {
									var i = Math.min(n.peekLength(), r.peekLength()),
										a = n.next(i),
										u = r.next(i);
									if (a.delete) continue;
									u.delete ? o.push(u) : o.retain(i, l.attributes.transform(a.attributes, u.attributes, e))
								}
						else o.retain(l.length(n.next()));
						return o.chop()
					}, s.prototype.transformPosition = function (t, e) {
						e = !!e;
						for (var n = l.iterator(this.ops), r = 0; n.hasNext() && r <= t;) {
							var o = n.peekLength(),
								i = n.peekType();
							n.next(), "delete" !== i ? ("insert" === i && (r < t || !e) && (t += o), r += o) : t -= Math.min(o, t -
								r)
						}
						return t
					}, t.exports = s
				}, function (t, e) {
					"use strict";
					var n = Object.prototype.hasOwnProperty,
						r = Object.prototype.toString,
						o = function (t) {
							return "function" == typeof Array.isArray ? Array.isArray(t) : "[object Array]" === r.call(t)
						},
						i = function (t) {
							if (!t || "[object Object]" !== r.call(t)) return !1;
							var e = n.call(t, "constructor"),
								o = t.constructor && t.constructor.prototype && n.call(t.constructor.prototype, "isPrototypeOf");
							if (t.constructor && !e && !o) return !1;
							var i;
							for (i in t);
							return void 0 === i || n.call(t, i)
						};
					t.exports = function t() {
						var e, n, r, l, a, s, u = arguments[0],
							c = 1,
							f = arguments.length,
							d = !1;
						for ("boolean" == typeof u && (d = u, u = arguments[1] || {}, c = 2), (null == u || "object" != typeof u &&
								"function" != typeof u) && (u = {}); c < f; ++c)
							if (null != (e = arguments[c]))
								for (n in e) r = u[n], l = e[n], u !== l && (d && l && (i(l) || (a = o(l))) ? (a ? (a = !1, s = r &&
									o(r) ? r : []) : s = r && i(r) ? r : {}, u[n] = t(d, s, l)) : void 0 !== l && (u[n] = l));
						return u
					}
				}, function (t, e, n) {
					"use strict";

					function r(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}

					function o(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function i(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function l(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}

					function a(t) {
						var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						return null == t ? e : ("function" == typeof t.formats && (e = (0, f.default)(e, t.formats())), null ==
							t.parent || "scroll" == t.parent.blotName || t.parent.statics.scope !== t.statics.scope ? e : a(t.parent,
								e))
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					}), e.default = e.BlockEmbed = e.bubbleFormats = void 0;
					var s = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						u = function t(e, n, r) {
							null === e && (e = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(e, n);
							if (void 0 === o) {
								var i = Object.getPrototypeOf(e);
								return null === i ? void 0 : t(i, n, r)
							}
							if ("value" in o) return o.value;
							var l = o.get;
							if (void 0 !== l) return l.call(r)
						},
						c = n(3),
						f = r(c),
						d = n(2),
						p = r(d),
						h = n(0),
						y = r(h),
						b = n(16),
						v = r(b),
						g = n(6),
						m = r(g),
						q = n(7),
						_ = r(q),
						w = function (t) {
							function e() {
								return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
							}
							return l(e, t), s(e, [{
								key: "attach",
								value: function () {
									u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "attach", this).call(this), this.attributes =
										new y.default.Attributor.Store(this.domNode)
								}
							}, {
								key: "delta",
								value: function () {
									return (new p.default).insert(this.value(), (0, f.default)(this.formats(), this.attributes.values()))
								}
							}, {
								key: "format",
								value: function (t, e) {
									var n = y.default.query(t, y.default.Scope.BLOCK_ATTRIBUTE);
									null != n && this.attributes.attribute(n, e)
								}
							}, {
								key: "formatAt",
								value: function (t, e, n, r) {
									this.format(n, r)
								}
							}, {
								key: "insertAt",
								value: function (t, n, r) {
									if ("string" == typeof n && n.endsWith("\n")) {
										var o = y.default.create(k.blotName);
										this.parent.insertBefore(o, 0 === t ? this : this.next), o.insertAt(0, n.slice(0, -1))
									} else u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this,
										t, n, r)
								}
							}]), e
						}(y.default.Embed);
					w.scope = y.default.Scope.BLOCK_BLOT;
					var k = function (t) {
						function e(t) {
							o(this, e);
							var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
							return n.cache = {}, n
						}
						return l(e, t), s(e, [{
							key: "delta",
							value: function () {
								return null == this.cache.delta && (this.cache.delta = this.descendants(y.default.Leaf).reduce(
									function (t, e) {
										return 0 === e.length() ? t : t.insert(e.value(), a(e))
									}, new p.default).insert("\n", a(this))), this.cache.delta
							}
						}, {
							key: "deleteAt",
							value: function (t, n) {
								u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "deleteAt", this).call(this, t, n),
									this.cache = {}
							}
						}, {
							key: "formatAt",
							value: function (t, n, r, o) {
								n <= 0 || (y.default.query(r, y.default.Scope.BLOCK) ? t + n === this.length() && this.format(r,
									o) : u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatAt", this).call(
									this, t, Math.min(n, this.length() - t - 1), r, o), this.cache = {})
							}
						}, {
							key: "insertAt",
							value: function (t, n, r) {
								if (null != r) return u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt",
									this).call(this, t, n, r);
								if (0 !== n.length) {
									var o = n.split("\n"),
										i = o.shift();
									i.length > 0 && (t < this.length() - 1 || null == this.children.tail ? u(e.prototype.__proto__ ||
										Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, Math.min(t, this.length() -
										1), i) : this.children.tail.insertAt(this.children.tail.length(), i), this.cache = {});
									var l = this;
									o.reduce(function (t, e) {
										return l = l.split(t, !0), l.insertAt(0, e), e.length
									}, t + i.length)
								}
							}
						}, {
							key: "insertBefore",
							value: function (t, n) {
								var r = this.children.head;
								u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertBefore", this).call(this, t,
									n), r instanceof v.default && r.remove(), this.cache = {}
							}
						}, {
							key: "length",
							value: function () {
								return null == this.cache.length && (this.cache.length = u(e.prototype.__proto__ || Object.getPrototypeOf(
									e.prototype), "length", this).call(this) + 1), this.cache.length
							}
						}, {
							key: "moveChildren",
							value: function (t, n) {
								u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "moveChildren", this).call(this, t,
									n), this.cache = {}
							}
						}, {
							key: "optimize",
							value: function (t) {
								u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t),
									this.cache = {}
							}
						}, {
							key: "path",
							value: function (t) {
								return u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "path", this).call(this, t, !
									0)
							}
						}, {
							key: "removeChild",
							value: function (t) {
								u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "removeChild", this).call(this, t),
									this.cache = {}
							}
						}, {
							key: "split",
							value: function (t) {
								var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
								if (n && (0 === t || t >= this.length() - 1)) {
									var r = this.clone();
									return 0 === t ? (this.parent.insertBefore(r, this), this) : (this.parent.insertBefore(r, this.next),
										r)
								}
								var o = u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "split", this).call(this,
									t, n);
								return this.cache = {}, o
							}
						}]), e
					}(y.default.Block);
					k.blotName = "block", k.tagName = "P", k.defaultChild = "break", k.allowedChildren = [m.default, y.default
						.Embed, _.default
					], e.bubbleFormats = a, e.BlockEmbed = w, e.default = k
				}, function (t, e, n) {
					"use strict";

					function r(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}

					function o(t, e, n) {
						return e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n, t
					}

					function i(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function l(t, e) {
						if (e = (0, E.default)(!0, {
								container: t,
								modules: {
									clipboard: !0,
									keyboard: !0,
									history: !0
								}
							}, e), e.theme && e.theme !== P.DEFAULTS.theme) {
							if (e.theme = P.import("themes/" + e.theme), null == e.theme) throw new Error("Invalid theme " + e.theme +
								". Did you register it?")
						} else e.theme = T.default;
						var n = (0, E.default)(!0, {}, e.theme.DEFAULTS);
						[n, e].forEach(function (t) {
							t.modules = t.modules || {}, Object.keys(t.modules).forEach(function (e) {
								!0 === t.modules[e] && (t.modules[e] = {})
							})
						});
						var r = Object.keys(n.modules).concat(Object.keys(e.modules)),
							o = r.reduce(function (t, e) {
								var n = P.import("modules/" + e);
								return null == n ? S.error("Cannot load " + e + " module. Are you sure you registered it?") : t[e] =
									n.DEFAULTS || {}, t
							}, {});
						return null != e.modules && e.modules.toolbar && e.modules.toolbar.constructor !== Object && (e.modules.toolbar = {
							container: e.modules.toolbar
						}), e = (0, E.default)(!0, {}, P.DEFAULTS, {
							modules: o
						}, n, e), ["bounds", "container", "scrollingContainer"].forEach(function (t) {
							"string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
						}), e.modules = Object.keys(e.modules).reduce(function (t, n) {
							return e.modules[n] && (t[n] = e.modules[n]), t
						}, {}), e
					}

					function a(t, e, n, r) {
						if (this.options.strict && !this.isEnabled() && e === g.default.sources.USER) return new h.default;
						var o = null == n ? null : this.getSelection(),
							i = this.editor.delta,
							l = t();
						if (null != o && (!0 === n && (n = o.index), null == r ? o = u(o, l, e) : 0 !== r && (o = u(o, n, r, e)),
								this.setSelection(o, g.default.sources.SILENT)), l.length() > 0) {
							var a, s = [g.default.events.TEXT_CHANGE, l, i, e];
							if ((a = this.emitter).emit.apply(a, [g.default.events.EDITOR_CHANGE].concat(s)), e !== g.default.sources
								.SILENT) {
								var c;
								(c = this.emitter).emit.apply(c, s)
							}
						}
						return l
					}

					function s(t, e, n, r, o) {
						var i = {};
						return "number" == typeof t.index && "number" == typeof t.length ? "number" != typeof e ? (o = r, r = n,
								n = e, e = t.length, t = t.index) : (e = t.length, t = t.index) : "number" != typeof e && (o = r, r =
								n, n = e, e = 0), "object" === (void 0 === n ? "undefined" : c(n)) ? (i = n, o = r) : "string" ==
							typeof n && (null != r ? i[n] = r : o = n), o = o || g.default.sources.API, [t, e, i, o]
					}

					function u(t, e, n, r) {
						if (null == t) return null;
						var o = void 0,
							i = void 0;
						if (e instanceof h.default) {
							var l = [t.index, t.index + t.length].map(function (t) {
									return e.transformPosition(t, r !== g.default.sources.USER)
								}),
								a = f(l, 2);
							o = a[0], i = a[1]
						} else {
							var s = [t.index, t.index + t.length].map(function (t) {
									return t < e || t === e && r === g.default.sources.USER ? t : n >= 0 ? t + n : Math.max(e, t + n)
								}),
								u = f(s, 2);
							o = u[0], i = u[1]
						}
						return new k.Range(o, i - o)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					}), e.default = e.overload = e.expandConfig = void 0;
					var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
							return typeof t
						} : function (t) {
							return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ?
								"symbol" : typeof t
						},
						f = function () {
							function t(t, e) {
								var n = [],
									r = !0,
									o = !1,
									i = void 0;
								try {
									for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !==
											e); r = !0);
								} catch (t) {
									o = !0, i = t
								} finally {
									try {
										!r && a.return && a.return()
									} finally {
										if (o) throw i
									}
								}
								return n
							}
							return function (e, n) {
								if (Array.isArray(e)) return e;
								if (Symbol.iterator in Object(e)) return t(e, n);
								throw new TypeError("Invalid attempt to destructure non-iterable instance")
							}
						}(),
						d = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}();
					n(50);
					var p = n(2),
						h = r(p),
						y = n(14),
						b = r(y),
						v = n(8),
						g = r(v),
						m = n(9),
						q = r(m),
						_ = n(0),
						w = r(_),
						k = n(15),
						O = r(k),
						x = n(3),
						E = r(x),
						A = n(10),
						j = r(A),
						N = n(34),
						T = r(N),
						S = (0, j.default)("quill"),
						P = function () {
							function t(e) {
								var n = this,
									r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
								if (i(this, t), this.options = l(e, r), this.container = this.options.container, null == this.container)
									return S.error("Invalid Quill container", e);
								this.options.debug && t.debug(this.options.debug);
								var o = this.container.innerHTML.trim();
								this.container.classList.add("ql-container"), this.container.innerHTML = "", this.container.__quill =
									this, this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.root.setAttribute(
										"data-gramm", !1), this.scrollingContainer = this.options.scrollingContainer || this.root, this.emitter =
									new g.default, this.scroll = w.default.create(this.root, {
										emitter: this.emitter,
										whitelist: this.options.formats
									}), this.editor = new b.default(this.scroll), this.selection = new O.default(this.scroll, this.emitter),
									this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule(
										"keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule(
										"history"), this.theme.init(), this.emitter.on(g.default.events.EDITOR_CHANGE, function (t) {
										t === g.default.events.TEXT_CHANGE && n.root.classList.toggle("ql-blank", n.editor.isBlank())
									}), this.emitter.on(g.default.events.SCROLL_UPDATE, function (t, e) {
										var r = n.selection.lastRange,
											o = r && 0 === r.length ? r.index : void 0;
										a.call(n, function () {
											return n.editor.update(null, e, o)
										}, t)
									});
								var s = this.clipboard.convert("<div class='ql-editor' style=\"white-space: normal;\">" + o +
									"<p><br></p></div>");
								this.setContents(s), this.history.clear(), this.options.placeholder && this.root.setAttribute(
									"data-placeholder", this.options.placeholder), this.options.readOnly && this.disable()
							}
							return d(t, null, [{
								key: "debug",
								value: function (t) {
									!0 === t && (t = "log"), j.default.level(t)
								}
							}, {
								key: "find",
								value: function (t) {
									return t.__quill || w.default.find(t)
								}
							}, {
								key: "import",
								value: function (t) {
									return null == this.imports[t] && S.error("Cannot import " + t +
										". Are you sure it was registered?"), this.imports[t]
								}
							}, {
								key: "register",
								value: function (t, e) {
									var n = this,
										r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
									if ("string" != typeof t) {
										var o = t.attrName || t.blotName;
										"string" == typeof o ? this.register("formats/" + o, t, e) : Object.keys(t).forEach(function (r) {
											n.register(r, t[r], e)
										})
									} else null == this.imports[t] || r || S.warn("Overwriting " + t + " with", e), this.imports[t] =
										e, (t.startsWith("blots/") || t.startsWith("formats/")) && "abstract" !== e.blotName ? w.default
										.register(e) : t.startsWith("modules") && "function" == typeof e.register && e.register()
								}
							}]), d(t, [{
								key: "addContainer",
								value: function (t) {
									var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
									if ("string" == typeof t) {
										var n = t;
										t = document.createElement("div"), t.classList.add(n)
									}
									return this.container.insertBefore(t, e), t
								}
							}, {
								key: "blur",
								value: function () {
									this.selection.setRange(null)
								}
							}, {
								key: "deleteText",
								value: function (t, e, n) {
									var r = this,
										o = s(t, e, n),
										i = f(o, 4);
									return t = i[0], e = i[1], n = i[3], a.call(this, function () {
										return r.editor.deleteText(t, e)
									}, n, t, -1 * e)
								}
							}, {
								key: "disable",
								value: function () {
									this.enable(!1)
								}
							}, {
								key: "enable",
								value: function () {
									var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
									this.scroll.enable(t), this.container.classList.toggle("ql-disabled", !t)
								}
							}, {
								key: "focus",
								value: function () {
									var t = this.scrollingContainer.scrollTop;
									this.selection.focus(), this.scrollingContainer.scrollTop = t, this.scrollIntoView()
								}
							}, {
								key: "format",
								value: function (t, e) {
									var n = this,
										r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g.default.sources.API;
									return a.call(this, function () {
										var r = n.getSelection(!0),
											i = new h.default;
										if (null == r) return i;
										if (w.default.query(t, w.default.Scope.BLOCK)) i = n.editor.formatLine(r.index, r.length, o({},
											t, e));
										else {
											if (0 === r.length) return n.selection.format(t, e), i;
											i = n.editor.formatText(r.index, r.length, o({}, t, e))
										}
										return n.setSelection(r, g.default.sources.SILENT), i
									}, r)
								}
							}, {
								key: "formatLine",
								value: function (t, e, n, r, o) {
									var i = this,
										l = void 0,
										u = s(t, e, n, r, o),
										c = f(u, 4);
									return t = c[0], e = c[1], l = c[2], o = c[3], a.call(this, function () {
										return i.editor.formatLine(t, e, l)
									}, o, t, 0)
								}
							}, {
								key: "formatText",
								value: function (t, e, n, r, o) {
									var i = this,
										l = void 0,
										u = s(t, e, n, r, o),
										c = f(u, 4);
									return t = c[0], e = c[1], l = c[2], o = c[3], a.call(this, function () {
										return i.editor.formatText(t, e, l)
									}, o, t, 0)
								}
							}, {
								key: "getBounds",
								value: function (t) {
									var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
										n = void 0;
									n = "number" == typeof t ? this.selection.getBounds(t, e) : this.selection.getBounds(t.index, t.length);
									var r = this.container.getBoundingClientRect();
									return {
										bottom: n.bottom - r.top,
										height: n.height,
										left: n.left - r.left,
										right: n.right - r.left,
										top: n.top - r.top,
										width: n.width
									}
								}
							}, {
								key: "getContents",
								value: function () {
									var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
										e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - t,
										n = s(t, e),
										r = f(n, 2);
									return t = r[0], e = r[1], this.editor.getContents(t, e)
								}
							}, {
								key: "getFormat",
								value: function () {
									var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getSelection(!0),
										e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
									return "number" == typeof t ? this.editor.getFormat(t, e) : this.editor.getFormat(t.index, t.length)
								}
							}, {
								key: "getIndex",
								value: function (t) {
									return t.offset(this.scroll)
								}
							}, {
								key: "getLength",
								value: function () {
									return this.scroll.length()
								}
							}, {
								key: "getLeaf",
								value: function (t) {
									return this.scroll.leaf(t)
								}
							}, {
								key: "getLine",
								value: function (t) {
									return this.scroll.line(t)
								}
							}, {
								key: "getLines",
								value: function () {
									var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
										e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE;
									return "number" != typeof t ? this.scroll.lines(t.index, t.length) : this.scroll.lines(t, e)
								}
							}, {
								key: "getModule",
								value: function (t) {
									return this.theme.modules[t]
								}
							}, {
								key: "getSelection",
								value: function () {
									return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.focus(), this.update(),
										this.selection.getRange()[0]
								}
							}, {
								key: "getText",
								value: function () {
									var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
										e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - t,
										n = s(t, e),
										r = f(n, 2);
									return t = r[0], e = r[1], this.editor.getText(t, e)
								}
							}, {
								key: "hasFocus",
								value: function () {
									return this.selection.hasFocus()
								}
							}, {
								key: "insertEmbed",
								value: function (e, n, r) {
									var o = this,
										i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t.sources.API;
									return a.call(this, function () {
										return o.editor.insertEmbed(e, n, r)
									}, i, e)
								}
							}, {
								key: "insertText",
								value: function (t, e, n, r, o) {
									var i = this,
										l = void 0,
										u = s(t, 0, n, r, o),
										c = f(u, 4);
									return t = c[0], l = c[2], o = c[3], a.call(this, function () {
										return i.editor.insertText(t, e, l)
									}, o, t, e.length)
								}
							}, {
								key: "isEnabled",
								value: function () {
									return !this.container.classList.contains("ql-disabled")
								}
							}, {
								key: "off",
								value: function () {
									return this.emitter.off.apply(this.emitter, arguments)
								}
							}, {
								key: "on",
								value: function () {
									return this.emitter.on.apply(this.emitter, arguments)
								}
							}, {
								key: "once",
								value: function () {
									return this.emitter.once.apply(this.emitter, arguments)
								}
							}, {
								key: "pasteHTML",
								value: function (t, e, n) {
									this.clipboard.dangerouslyPasteHTML(t, e, n)
								}
							}, {
								key: "removeFormat",
								value: function (t, e, n) {
									var r = this,
										o = s(t, e, n),
										i = f(o, 4);
									return t = i[0], e = i[1], n = i[3], a.call(this, function () {
										return r.editor.removeFormat(t, e)
									}, n, t)
								}
							}, {
								key: "scrollIntoView",
								value: function () {
									this.selection.scrollIntoView(this.scrollingContainer)
								}
							}, {
								key: "setContents",
								value: function (t) {
									var e = this,
										n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.default.sources.API;
									return a.call(this, function () {
										t = new h.default(t);
										var n = e.getLength(),
											r = e.editor.deleteText(0, n),
											o = e.editor.applyDelta(t),
											i = o.ops[o.ops.length - 1];
										return null != i && "string" == typeof i.insert && "\n" === i.insert[i.insert.length - 1] && (
											e.editor.deleteText(e.getLength() - 1, 1), o.delete(1)), r.compose(o)
									}, n)
								}
							}, {
								key: "setSelection",
								value: function (e, n, r) {
									if (null == e) this.selection.setRange(null, n || t.sources.API);
									else {
										var o = s(e, n, r),
											i = f(o, 4);
										e = i[0], n = i[1], r = i[3], this.selection.setRange(new k.Range(e, n), r), r !== g.default.sources
											.SILENT && this.selection.scrollIntoView(this.scrollingContainer)
									}
								}
							}, {
								key: "setText",
								value: function (t) {
									var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.default.sources.API,
										n = (new h.default).insert(t);
									return this.setContents(n, e)
								}
							}, {
								key: "update",
								value: function () {
									var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g.default.sources.USER,
										e = this.scroll.update(t);
									return this.selection.update(t), e
								}
							}, {
								key: "updateContents",
								value: function (t) {
									var e = this,
										n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.default.sources.API;
									return a.call(this, function () {
										return t = new h.default(t), e.editor.applyDelta(t, n)
									}, n, !0)
								}
							}]), t
						}();
					P.DEFAULTS = {
						bounds: null,
						formats: null,
						modules: {},
						placeholder: "",
						readOnly: !1,
						scrollingContainer: null,
						strict: !0,
						theme: "default"
					}, P.events = g.default.events, P.sources = g.default.sources, P.version = "1.3.6", P.imports = {
						delta: h.default,
						parchment: w.default,
						"core/module": q.default,
						"core/theme": T.default
					}, e.expandConfig = l, e.overload = s, e.default = P
				}, function (t, e, n) {
					"use strict";

					function r(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}

					function o(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function i(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function l(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var a = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						s = function t(e, n, r) {
							null === e && (e = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(e, n);
							if (void 0 === o) {
								var i = Object.getPrototypeOf(e);
								return null === i ? void 0 : t(i, n, r)
							}
							if ("value" in o) return o.value;
							var l = o.get;
							if (void 0 !== l) return l.call(r)
						},
						u = n(7),
						c = r(u),
						f = n(0),
						d = r(f),
						p = function (t) {
							function e() {
								return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
							}
							return l(e, t), a(e, [{
								key: "formatAt",
								value: function (t, n, r, o) {
									if (e.compare(this.statics.blotName, r) < 0 && d.default.query(r, d.default.Scope.BLOT)) {
										var i = this.isolate(t, n);
										o && i.wrap(r, o)
									} else s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatAt", this).call(this,
										t, n, r, o)
								}
							}, {
								key: "optimize",
								value: function (t) {
									if (s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t),
										this.parent instanceof e && e.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
										var n = this.parent.isolate(this.offset(), this.length());
										this.moveChildren(n), n.wrap(this)
									}
								}
							}], [{
								key: "compare",
								value: function (t, n) {
									var r = e.order.indexOf(t),
										o = e.order.indexOf(n);
									return r >= 0 || o >= 0 ? r - o : t === n ? 0 : t < n ? -1 : 1
								}
							}]), e
						}(d.default.Inline);
					p.allowedChildren = [p, d.default.Embed, c.default], p.order = ["cursor", "inline", "underline", "strike",
						"italic", "bold", "script", "link", "code"
					], e.default = p
				}, function (t, e, n) {
					"use strict";

					function r(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function o(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function i(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var l = n(0),
						a = function (t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}(l),
						s = function (t) {
							function e() {
								return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
							}
							return i(e, t), e
						}(a.default.Text);
					e.default = s
				}, function (t, e, n) {
					"use strict";

					function r(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}

					function o(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function i(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function l(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var a = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						s = function t(e, n, r) {
							null === e && (e = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(e, n);
							if (void 0 === o) {
								var i = Object.getPrototypeOf(e);
								return null === i ? void 0 : t(i, n, r)
							}
							if ("value" in o) return o.value;
							var l = o.get;
							if (void 0 !== l) return l.call(r)
						},
						u = n(54),
						c = r(u),
						f = n(10),
						d = r(f),
						p = (0, d.default)("quill:events");
					["selectionchange", "mousedown", "mouseup", "click"].forEach(function (t) {
						document.addEventListener(t, function () {
							for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
							[].slice.call(document.querySelectorAll(".ql-container")).forEach(function (t) {
								if (t.__quill && t.__quill.emitter) {
									var n;
									(n = t.__quill.emitter).handleDOM.apply(n, e)
								}
							})
						})
					});
					var h = function (t) {
						function e() {
							o(this, e);
							var t = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
							return t.listeners = {}, t.on("error", p.error), t
						}
						return l(e, t), a(e, [{
							key: "emit",
							value: function () {
								p.log.apply(p, arguments), s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit",
									this).apply(this, arguments)
							}
						}, {
							key: "handleDOM",
							value: function (t) {
								for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] =
									arguments[r];
								(this.listeners[t.type] || []).forEach(function (e) {
									var r = e.node,
										o = e.handler;
									(t.target === r || r.contains(t.target)) && o.apply(void 0, [t].concat(n))
								})
							}
						}, {
							key: "listenDOM",
							value: function (t, e, n) {
								this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push({
									node: e,
									handler: n
								})
							}
						}]), e
					}(c.default);
					h.events = {
						EDITOR_CHANGE: "editor-change",
						SCROLL_BEFORE_UPDATE: "scroll-before-update",
						SCROLL_OPTIMIZE: "scroll-optimize",
						SCROLL_UPDATE: "scroll-update",
						SELECTION_CHANGE: "selection-change",
						TEXT_CHANGE: "text-change"
					}, h.sources = {
						API: "api",
						SILENT: "silent",
						USER: "user"
					}, e.default = h
				}, function (t, e, n) {
					"use strict";

					function r(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var o = function t(e) {
						var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						r(this, t), this.quill = e, this.options = n
					};
					o.DEFAULTS = {}, e.default = o
				}, function (t, e, n) {
					"use strict";

					function r(t) {
						if (i.indexOf(t) <= i.indexOf(l)) {
							for (var e, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[
								o];
							(e = console)[t].apply(e, r)
						}
					}

					function o(t) {
						return i.reduce(function (e, n) {
							return e[n] = r.bind(console, n, t), e
						}, {})
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var i = ["error", "warn", "log", "info"],
						l = "warn";
					r.level = o.level = function (t) {
						l = t
					}, e.default = o
				}, function (t, e, n) {
					function r(t) {
						return null === t || void 0 === t
					}

					function o(t) {
						return !(!t || "object" != typeof t || "number" != typeof t.length) && ("function" == typeof t.copy &&
							"function" == typeof t.slice && !(t.length > 0 && "number" != typeof t[0]))
					}

					function i(t, e, n) {
						var i, c;
						if (r(t) || r(e)) return !1;
						if (t.prototype !== e.prototype) return !1;
						if (s(t)) return !!s(e) && (t = l.call(t), e = l.call(e), u(t, e, n));
						if (o(t)) {
							if (!o(e)) return !1;
							if (t.length !== e.length) return !1;
							for (i = 0; i < t.length; i++)
								if (t[i] !== e[i]) return !1;
							return !0
						}
						try {
							var f = a(t),
								d = a(e)
						} catch (t) {
							return !1
						}
						if (f.length != d.length) return !1;
						for (f.sort(), d.sort(), i = f.length - 1; i >= 0; i--)
							if (f[i] != d[i]) return !1;
						for (i = f.length - 1; i >= 0; i--)
							if (c = f[i], !u(t[c], e[c], n)) return !1;
						return typeof t == typeof e
					}
					var l = Array.prototype.slice,
						a = n(52),
						s = n(53),
						u = t.exports = function (t, e, n) {
							return n || (n = {}), t === e || (t instanceof Date && e instanceof Date ? t.getTime() === e.getTime() :
								!t || !e || "object" != typeof t && "object" != typeof e ? n.strict ? t === e : t == e : i(t, e, n))
						}
				}, function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var r = n(1),
						o = function () {
							function t(t, e, n) {
								void 0 === n && (n = {}), this.attrName = t, this.keyName = e;
								var o = r.Scope.TYPE & r.Scope.ATTRIBUTE;
								null != n.scope ? this.scope = n.scope & r.Scope.LEVEL | o : this.scope = r.Scope.ATTRIBUTE, null != n
									.whitelist && (this.whitelist = n.whitelist)
							}
							return t.keys = function (t) {
								return [].map.call(t.attributes, function (t) {
									return t.name
								})
							}, t.prototype.add = function (t, e) {
								return !!this.canAdd(t, e) && (t.setAttribute(this.keyName, e), !0)
							}, t.prototype.canAdd = function (t, e) {
								return null != r.query(t, r.Scope.BLOT & (this.scope | r.Scope.TYPE)) && (null == this.whitelist || (
									"string" == typeof e ? this.whitelist.indexOf(e.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(
										e) > -1))
							}, t.prototype.remove = function (t) {
								t.removeAttribute(this.keyName)
							}, t.prototype.value = function (t) {
								var e = t.getAttribute(this.keyName);
								return this.canAdd(t, e) && e ? e : ""
							}, t
						}();
					e.default = o
				}, function (t, e, n) {
					"use strict";

					function r(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}

					function o(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function i(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function l(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					}), e.default = e.Code = void 0;
					var a = function () {
							function t(t, e) {
								var n = [],
									r = !0,
									o = !1,
									i = void 0;
								try {
									for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !==
											e); r = !0);
								} catch (t) {
									o = !0, i = t
								} finally {
									try {
										!r && a.return && a.return()
									} finally {
										if (o) throw i
									}
								}
								return n
							}
							return function (e, n) {
								if (Array.isArray(e)) return e;
								if (Symbol.iterator in Object(e)) return t(e, n);
								throw new TypeError("Invalid attempt to destructure non-iterable instance")
							}
						}(),
						s = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						u = function t(e, n, r) {
							null === e && (e = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(e, n);
							if (void 0 === o) {
								var i = Object.getPrototypeOf(e);
								return null === i ? void 0 : t(i, n, r)
							}
							if ("value" in o) return o.value;
							var l = o.get;
							if (void 0 !== l) return l.call(r)
						},
						c = n(2),
						f = r(c),
						d = n(0),
						p = r(d),
						h = n(4),
						y = r(h),
						b = n(6),
						v = r(b),
						g = n(7),
						m = r(g),
						q = function (t) {
							function e() {
								return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
							}
							return l(e, t), e
						}(v.default);
					q.blotName = "code", q.tagName = "CODE";
					var _ = function (t) {
						function e() {
							return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
						}
						return l(e, t), s(e, [{
							key: "delta",
							value: function () {
								var t = this,
									e = this.domNode.textContent;
								return e.endsWith("\n") && (e = e.slice(0, -1)), e.split("\n").reduce(function (e, n) {
									return e.insert(n).insert("\n", t.formats())
								}, new f.default)
							}
						}, {
							key: "format",
							value: function (t, n) {
								if (t !== this.statics.blotName || !n) {
									var r = this.descendant(m.default, this.length() - 1),
										o = a(r, 1),
										i = o[0];
									null != i && i.deleteAt(i.length() - 1, 1), u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
										"format", this).call(this, t, n)
								}
							}
						}, {
							key: "formatAt",
							value: function (t, n, r, o) {
								if (0 !== n && null != p.default.query(r, p.default.Scope.BLOCK) && (r !== this.statics.blotName ||
										o !== this.statics.formats(this.domNode))) {
									var i = this.newlineIndex(t);
									if (!(i < 0 || i >= t + n)) {
										var l = this.newlineIndex(t, !0) + 1,
											a = i - l + 1,
											s = this.isolate(l, a),
											u = s.next;
										s.format(r, o), u instanceof e && u.formatAt(0, t - l + n - a, r, o)
									}
								}
							}
						}, {
							key: "insertAt",
							value: function (t, e, n) {
								if (null == n) {
									var r = this.descendant(m.default, t),
										o = a(r, 2),
										i = o[0],
										l = o[1];
									i.insertAt(l, e)
								}
							}
						}, {
							key: "length",
							value: function () {
								var t = this.domNode.textContent.length;
								return this.domNode.textContent.endsWith("\n") ? t : t + 1
							}
						}, {
							key: "newlineIndex",
							value: function (t) {
								if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) return this.domNode.textContent
									.slice(0, t).lastIndexOf("\n");
								var e = this.domNode.textContent.slice(t).indexOf("\n");
								return e > -1 ? t + e : -1
							}
						}, {
							key: "optimize",
							value: function (t) {
								this.domNode.textContent.endsWith("\n") || this.appendChild(p.default.create("text", "\n")), u(e.prototype
									.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t);
								var n = this.next;
								null != n && n.prev === this && n.statics.blotName === this.statics.blotName && this.statics.formats(
									this.domNode) === n.statics.formats(n.domNode) && (n.optimize(t), n.moveChildren(this), n.remove())
							}
						}, {
							key: "replace",
							value: function (t) {
								u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replace", this).call(this, t), []
									.slice.call(this.domNode.querySelectorAll("*")).forEach(function (t) {
										var e = p.default.find(t);
										null == e ? t.parentNode.removeChild(t) : e instanceof p.default.Embed ? e.remove() : e.unwrap()
									})
							}
						}], [{
							key: "create",
							value: function (t) {
								var n = u(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
								return n.setAttribute("spellcheck", !1), n
							}
						}, {
							key: "formats",
							value: function () {
								return !0
							}
						}]), e
					}(y.default);
					_.blotName = "code-block", _.tagName = "PRE", _.TAB = "  ", e.Code = q, e.default = _
				}, function (t, e, n) {
					"use strict";

					function r(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}

					function o(t, e, n) {
						return e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n, t
					}

					function i(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function l(t, e) {
						return Object.keys(e).reduce(function (n, r) {
							return null == t[r] ? n : (e[r] === t[r] ? n[r] = e[r] : Array.isArray(e[r]) ? e[r].indexOf(t[r]) < 0 &&
								(n[r] = e[r].concat([t[r]])) : n[r] = [e[r], t[r]], n)
						}, {})
					}

					function a(t) {
						return t.reduce(function (t, e) {
							if (1 === e.insert) {
								var n = (0, E.default)(e.attributes);
								return delete n.image, t.insert({
									image: e.attributes.image
								}, n)
							}
							if (null == e.attributes || !0 !== e.attributes.list && !0 !== e.attributes.bullet || (e = (0, E.default)
									(e), e.attributes.list ? e.attributes.list = "ordered" : (e.attributes.list = "bullet", delete e.attributes
										.bullet)), "string" == typeof e.insert) {
								var r = e.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
								return t.insert(r, e.attributes)
							}
							return t.push(e)
						}, new d.default)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
							return typeof t
						} : function (t) {
							return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ?
								"symbol" : typeof t
						},
						u = function () {
							function t(t, e) {
								var n = [],
									r = !0,
									o = !1,
									i = void 0;
								try {
									for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !==
											e); r = !0);
								} catch (t) {
									o = !0, i = t
								} finally {
									try {
										!r && a.return && a.return()
									} finally {
										if (o) throw i
									}
								}
								return n
							}
							return function (e, n) {
								if (Array.isArray(e)) return e;
								if (Symbol.iterator in Object(e)) return t(e, n);
								throw new TypeError("Invalid attempt to destructure non-iterable instance")
							}
						}(),
						c = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						f = n(2),
						d = r(f),
						p = n(20),
						h = r(p),
						y = n(0),
						b = r(y),
						v = n(13),
						g = r(v),
						m = n(24),
						q = r(m),
						_ = n(4),
						w = r(_),
						k = n(16),
						O = r(k),
						x = n(21),
						E = r(x),
						A = n(11),
						j = r(A),
						N = n(3),
						T = r(N),
						S = /^[ -~]*$/,
						P = function () {
							function t(e) {
								i(this, t), this.scroll = e, this.delta = this.getDelta()
							}
							return c(t, [{
								key: "applyDelta",
								value: function (t) {
									var e = this,
										n = !1;
									this.scroll.update();
									var r = this.scroll.length();
									return this.scroll.batchStart(), t = a(t), t.reduce(function (t, o) {
										var i = o.retain || o.delete || o.insert.length || 1,
											l = o.attributes || {};
										if (null != o.insert) {
											if ("string" == typeof o.insert) {
												var a = o.insert;
												a.endsWith("\n") && n && (n = !1, a = a.slice(0, -1)), t >= r && !a.endsWith("\n") && (n = !
													0), e.scroll.insertAt(t, a);
												var c = e.scroll.line(t),
													f = u(c, 2),
													d = f[0],
													p = f[1],
													y = (0, T.default)({}, (0, _.bubbleFormats)(d));
												if (d instanceof w.default) {
													var v = d.descendant(b.default.Leaf, p),
														g = u(v, 1),
														m = g[0];
													y = (0, T.default)(y, (0, _.bubbleFormats)(m))
												}
												l = h.default.attributes.diff(y, l) || {}
											} else if ("object" === s(o.insert)) {
												var q = Object.keys(o.insert)[0];
												if (null == q) return t;
												e.scroll.insertAt(t, q, o.insert[q])
											}
											r += i
										}
										return Object.keys(l).forEach(function (n) {
											e.scroll.formatAt(t, i, n, l[n])
										}), t + i
									}, 0), t.reduce(function (t, n) {
										return "number" == typeof n.delete ? (e.scroll.deleteAt(t, n.delete), t) : t + (n.retain || n.insert
											.length || 1)
									}, 0), this.scroll.batchEnd(), this.update(t)
								}
							}, {
								key: "deleteText",
								value: function (t, e) {
									return this.scroll.deleteAt(t, e), this.update((new d.default).retain(t).delete(e))
								}
							}, {
								key: "formatLine",
								value: function (t, e) {
									var n = this,
										r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
									return this.scroll.update(), Object.keys(r).forEach(function (o) {
										if (null == n.scroll.whitelist || n.scroll.whitelist[o]) {
											var i = n.scroll.lines(t, Math.max(e, 1)),
												l = e;
											i.forEach(function (e) {
												var i = e.length();
												if (e instanceof g.default) {
													var a = t - e.offset(n.scroll),
														s = e.newlineIndex(a + l) - a + 1;
													e.formatAt(a, s, o, r[o])
												} else e.format(o, r[o]);
												l -= i
											})
										}
									}), this.scroll.optimize(), this.update((new d.default).retain(t).retain(e, (0, E.default)(r)))
								}
							}, {
								key: "formatText",
								value: function (t, e) {
									var n = this,
										r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
									return Object.keys(r).forEach(function (o) {
										n.scroll.formatAt(t, e, o, r[o])
									}), this.update((new d.default).retain(t).retain(e, (0, E.default)(r)))
								}
							}, {
								key: "getContents",
								value: function (t, e) {
									return this.delta.slice(t, t + e)
								}
							}, {
								key: "getDelta",
								value: function () {
									return this.scroll.lines().reduce(function (t, e) {
										return t.concat(e.delta())
									}, new d.default)
								}
							}, {
								key: "getFormat",
								value: function (t) {
									var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
										n = [],
										r = [];
									0 === e ? this.scroll.path(t).forEach(function (t) {
										var e = u(t, 1),
											o = e[0];
										o instanceof w.default ? n.push(o) : o instanceof b.default.Leaf && r.push(o)
									}) : (n = this.scroll.lines(t, e), r = this.scroll.descendants(b.default.Leaf, t, e));
									var o = [n, r].map(function (t) {
										if (0 === t.length) return {};
										for (var e = (0, _.bubbleFormats)(t.shift()); Object.keys(e).length > 0;) {
											var n = t.shift();
											if (null == n) return e;
											e = l((0, _.bubbleFormats)(n), e)
										}
										return e
									});
									return T.default.apply(T.default, o)
								}
							}, {
								key: "getText",
								value: function (t, e) {
									return this.getContents(t, e).filter(function (t) {
										return "string" == typeof t.insert
									}).map(function (t) {
										return t.insert
									}).join("")
								}
							}, {
								key: "insertEmbed",
								value: function (t, e, n) {
									return this.scroll.insertAt(t, e, n), this.update((new d.default).retain(t).insert(o({}, e, n)))
								}
							}, {
								key: "insertText",
								value: function (t, e) {
									var n = this,
										r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
									return e = e.replace(/\r\n/g, "\n").replace(/\r/g, "\n"), this.scroll.insertAt(t, e), Object.keys(
										r).forEach(function (o) {
										n.scroll.formatAt(t, e.length, o, r[o])
									}), this.update((new d.default).retain(t).insert(e, (0, E.default)(r)))
								}
							}, {
								key: "isBlank",
								value: function () {
									if (0 == this.scroll.children.length) return !0;
									if (this.scroll.children.length > 1) return !1;
									var t = this.scroll.children.head;
									return t.statics.blotName === w.default.blotName && (!(t.children.length > 1) && t.children.head instanceof O
										.default)
								}
							}, {
								key: "removeFormat",
								value: function (t, e) {
									var n = this.getText(t, e),
										r = this.scroll.line(t + e),
										o = u(r, 2),
										i = o[0],
										l = o[1],
										a = 0,
										s = new d.default;
									null != i && (a = i instanceof g.default ? i.newlineIndex(l) - l + 1 : i.length() - l, s = i.delta()
										.slice(l, l + a - 1).insert("\n"));
									var c = this.getContents(t, e + a),
										f = c.diff((new d.default).insert(n).concat(s)),
										p = (new d.default).retain(t).concat(f);
									return this.applyDelta(p)
								}
							}, {
								key: "update",
								value: function (t) {
									var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
										n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
										r = this.delta;
									if (1 === e.length && "characterData" === e[0].type && e[0].target.data.match(S) && b.default.find(
											e[0].target)) {
										var o = b.default.find(e[0].target),
											i = (0, _.bubbleFormats)(o),
											l = o.offset(this.scroll),
											a = e[0].oldValue.replace(q.default.CONTENTS, ""),
											s = (new d.default).insert(a),
											u = (new d.default).insert(o.value());
										t = (new d.default).retain(l).concat(s.diff(u, n)).reduce(function (t, e) {
											return e.insert ? t.insert(e.insert, i) : t.push(e)
										}, new d.default), this.delta = r.compose(t)
									} else this.delta = this.getDelta(), t && (0, j.default)(r.compose(t), this.delta) || (t = r.diff(
										this.delta, n));
									return t
								}
							}]), t
						}();
					e.default = P
				}, function (t, e, n) {
					"use strict";

					function r(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}

					function o(t) {
						if (Array.isArray(t)) {
							for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
							return n
						}
						return Array.from(t)
					}

					function i(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function l(t, e) {
						try {
							e.parentNode
						} catch (t) {
							return !1
						}
						return e instanceof Text && (e = e.parentNode), t.contains(e)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					}), e.default = e.Range = void 0;
					var a = function () {
							function t(t, e) {
								var n = [],
									r = !0,
									o = !1,
									i = void 0;
								try {
									for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !==
											e); r = !0);
								} catch (t) {
									o = !0, i = t
								} finally {
									try {
										!r && a.return && a.return()
									} finally {
										if (o) throw i
									}
								}
								return n
							}
							return function (e, n) {
								if (Array.isArray(e)) return e;
								if (Symbol.iterator in Object(e)) return t(e, n);
								throw new TypeError("Invalid attempt to destructure non-iterable instance")
							}
						}(),
						s = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						u = n(0),
						c = r(u),
						f = n(21),
						d = r(f),
						p = n(11),
						h = r(p),
						y = n(8),
						b = r(y),
						v = n(10),
						g = r(v),
						m = (0, g.default)("quill:selection"),
						q = function t(e) {
							var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
							i(this, t), this.index = e, this.length = n
						},
						_ = function () {
							function t(e, n) {
								var r = this;
								i(this, t), this.emitter = n, this.scroll = e, this.composing = !1, this.mouseDown = !1, this.root =
									this.scroll.domNode, this.cursor = c.default.create("cursor", this), this.lastRange = this.savedRange =
									new q(0, 0), this.handleComposition(), this.handleDragging(), this.emitter.listenDOM(
										"selectionchange", document,
										function () {
											r.mouseDown || setTimeout(r.update.bind(r, b.default.sources.USER), 1)
										}), this.emitter.on(b.default.events.EDITOR_CHANGE, function (t, e) {
										t === b.default.events.TEXT_CHANGE && e.length() > 0 && r.update(b.default.sources.SILENT)
									}), this.emitter.on(b.default.events.SCROLL_BEFORE_UPDATE, function () {
										if (r.hasFocus()) {
											var t = r.getNativeRange();
											null != t && t.start.node !== r.cursor.textNode && r.emitter.once(b.default.events.SCROLL_UPDATE,
												function () {
													try {
														r.setNativeRange(t.start.node, t.start.offset, t.end.node, t.end.offset)
													} catch (t) {}
												})
										}
									}), this.emitter.on(b.default.events.SCROLL_OPTIMIZE, function (t, e) {
										if (e.range) {
											var n = e.range,
												o = n.startNode,
												i = n.startOffset,
												l = n.endNode,
												a = n.endOffset;
											r.setNativeRange(o, i, l, a)
										}
									}), this.update(b.default.sources.SILENT)
							}
							return s(t, [{
								key: "handleComposition",
								value: function () {
									var t = this;
									this.root.addEventListener("compositionstart", function () {
										t.composing = !0
									}), this.root.addEventListener("compositionend", function () {
										if (t.composing = !1, t.cursor.parent) {
											var e = t.cursor.restore();
											if (!e) return;
											setTimeout(function () {
												t.setNativeRange(e.startNode, e.startOffset, e.endNode, e.endOffset)
											}, 1)
										}
									})
								}
							}, {
								key: "handleDragging",
								value: function () {
									var t = this;
									this.emitter.listenDOM("mousedown", document.body, function () {
										t.mouseDown = !0
									}), this.emitter.listenDOM("mouseup", document.body, function () {
										t.mouseDown = !1, t.update(b.default.sources.USER)
									})
								}
							}, {
								key: "focus",
								value: function () {
									this.hasFocus() || (this.root.focus(), this.setRange(this.savedRange))
								}
							}, {
								key: "format",
								value: function (t, e) {
									if (null == this.scroll.whitelist || this.scroll.whitelist[t]) {
										this.scroll.update();
										var n = this.getNativeRange();
										if (null != n && n.native.collapsed && !c.default.query(t, c.default.Scope.BLOCK)) {
											if (n.start.node !== this.cursor.textNode) {
												var r = c.default.find(n.start.node, !1);
												if (null == r) return;
												if (r instanceof c.default.Leaf) {
													var o = r.split(n.start.offset);
													r.parent.insertBefore(this.cursor, o)
												} else r.insertBefore(this.cursor, n.start.node);
												this.cursor.attach()
											}
											this.cursor.format(t, e), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode,
												this.cursor.textNode.data.length), this.update()
										}
									}
								}
							}, {
								key: "getBounds",
								value: function (t) {
									var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
										n = this.scroll.length();
									t = Math.min(t, n - 1), e = Math.min(t + e, n - 1) - t;
									var r = void 0,
										o = this.scroll.leaf(t),
										i = a(o, 2),
										l = i[0],
										s = i[1];
									if (null == l) return null;
									var u = l.position(s, !0),
										c = a(u, 2);
									r = c[0], s = c[1];
									var f = document.createRange();
									if (e > 0) {
										f.setStart(r, s);
										var d = this.scroll.leaf(t + e),
											p = a(d, 2);
										if (l = p[0], s = p[1], null == l) return null;
										var h = l.position(s, !0),
											y = a(h, 2);
										return r = y[0], s = y[1], f.setEnd(r, s), f.getBoundingClientRect()
									}
									var b = "left",
										v = void 0;
									return r instanceof Text ? (s < r.data.length ? (f.setStart(r, s), f.setEnd(r, s + 1)) : (f.setStart(
										r, s - 1), f.setEnd(r, s), b = "right"), v = f.getBoundingClientRect()) : (v = l.domNode.getBoundingClientRect(),
										s > 0 && (b = "right")), {
										bottom: v.top + v.height,
										height: v.height,
										left: v[b],
										right: v[b],
										top: v.top,
										width: 0
									}
								}
							}, {
								key: "getNativeRange",
								value: function () {
									var t = document.getSelection();
									if (null == t || t.rangeCount <= 0) return null;
									var e = t.getRangeAt(0);
									if (null == e) return null;
									var n = this.normalizeNative(e);
									return m.info("getNativeRange", n), n
								}
							}, {
								key: "getRange",
								value: function () {
									var t = this.getNativeRange();
									return null == t ? [null, null] : [this.normalizedToRange(t), t]
								}
							}, {
								key: "hasFocus",
								value: function () {
									return document.activeElement === this.root
								}
							}, {
								key: "normalizedToRange",
								value: function (t) {
									var e = this,
										n = [
											[t.start.node, t.start.offset]
										];
									t.native.collapsed || n.push([t.end.node, t.end.offset]);
									var r = n.map(function (t) {
											var n = a(t, 2),
												r = n[0],
												o = n[1],
												i = c.default.find(r, !0),
												l = i.offset(e.scroll);
											return 0 === o ? l : i instanceof c.default.Container ? l + i.length() : l + i.index(r, o)
										}),
										i = Math.min(Math.max.apply(Math, o(r)), this.scroll.length() - 1),
										l = Math.min.apply(Math, [i].concat(o(r)));
									return new q(l, i - l)
								}
							}, {
								key: "normalizeNative",
								value: function (t) {
									if (!l(this.root, t.startContainer) || !t.collapsed && !l(this.root, t.endContainer)) return null;
									var e = {
										start: {
											node: t.startContainer,
											offset: t.startOffset
										},
										end: {
											node: t.endContainer,
											offset: t.endOffset
										},
										native: t
									};
									return [e.start, e.end].forEach(function (t) {
										for (var e = t.node, n = t.offset; !(e instanceof Text) && e.childNodes.length > 0;)
											if (e.childNodes.length > n) e = e.childNodes[n], n = 0;
											else {
												if (e.childNodes.length !== n) break;
												e = e.lastChild, n = e instanceof Text ? e.data.length : e.childNodes.length + 1
											}
										t.node = e, t.offset = n
									}), e
								}
							}, {
								key: "rangeToNative",
								value: function (t) {
									var e = this,
										n = t.collapsed ? [t.index] : [t.index, t.index + t.length],
										r = [],
										o = this.scroll.length();
									return n.forEach(function (t, n) {
										t = Math.min(o - 1, t);
										var i = void 0,
											l = e.scroll.leaf(t),
											s = a(l, 2),
											u = s[0],
											c = s[1],
											f = u.position(c, 0 !== n),
											d = a(f, 2);
										i = d[0], c = d[1], r.push(i, c)
									}), r.length < 2 && (r = r.concat(r)), r
								}
							}, {
								key: "scrollIntoView",
								value: function (t) {
									var e = this.lastRange;
									if (null != e) {
										var n = this.getBounds(e.index, e.length);
										if (null != n) {
											var r = this.scroll.length() - 1,
												o = this.scroll.line(Math.min(e.index, r)),
												i = a(o, 1),
												l = i[0],
												s = l;
											if (e.length > 0) {
												var u = this.scroll.line(Math.min(e.index + e.length, r));
												s = a(u, 1)[0]
											}
											if (null != l && null != s) {
												var c = t.getBoundingClientRect();
												n.top < c.top ? t.scrollTop -= c.top - n.top : n.bottom > c.bottom && (t.scrollTop += n.bottom -
													c.bottom)
											}
										}
									}
								}
							}, {
								key: "setNativeRange",
								value: function (t, e) {
									var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
										r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e,
										o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
									if (m.info("setNativeRange", t, e, n, r), null == t || null != this.root.parentNode && null != t.parentNode &&
										null != n.parentNode) {
										var i = document.getSelection();
										if (null != i)
											if (null != t) {
												this.hasFocus() || this.root.focus();
												var l = (this.getNativeRange() || {}).native;
												if (null == l || o || t !== l.startContainer || e !== l.startOffset || n !== l.endContainer ||
													r !== l.endOffset) {
													"BR" == t.tagName && (e = [].indexOf.call(t.parentNode.childNodes, t), t = t.parentNode),
														"BR" == n.tagName && (r = [].indexOf.call(n.parentNode.childNodes, n), n = n.parentNode);
													var a = document.createRange();
													a.setStart(t, e), a.setEnd(n, r), i.removeAllRanges(), i.addRange(a)
												}
											} else i.removeAllRanges(), this.root.blur(), document.body.focus()
									}
								}
							}, {
								key: "setRange",
								value: function (t) {
									var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
										n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b.default.sources.API;
									if ("string" == typeof e && (n = e, e = !1), m.info("setRange", t), null != t) {
										var r = this.rangeToNative(t);
										this.setNativeRange.apply(this, o(r).concat([e]))
									} else this.setNativeRange(null);
									this.update(n)
								}
							}, {
								key: "update",
								value: function () {
									var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b.default.sources.USER,
										e = this.lastRange,
										n = this.getRange(),
										r = a(n, 2),
										o = r[0],
										i = r[1];
									if (this.lastRange = o, null != this.lastRange && (this.savedRange = this.lastRange), !(0, h.default)
										(e, this.lastRange)) {
										var l;
										!this.composing && null != i && i.native.collapsed && i.start.node !== this.cursor.textNode &&
											this.cursor.restore();
										var s = [b.default.events.SELECTION_CHANGE, (0, d.default)(this.lastRange), (0, d.default)(e), t];
										if ((l = this.emitter).emit.apply(l, [b.default.events.EDITOR_CHANGE].concat(s)), t !== b.default
											.sources.SILENT) {
											var u;
											(u = this.emitter).emit.apply(u, s)
										}
									}
								}
							}]), t
						}();
					e.Range = q, e.default = _
				}, function (t, e, n) {
					"use strict";

					function r(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function o(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function i(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var l = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						a = function t(e, n, r) {
							null === e && (e = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(e, n);
							if (void 0 === o) {
								var i = Object.getPrototypeOf(e);
								return null === i ? void 0 : t(i, n, r)
							}
							if ("value" in o) return o.value;
							var l = o.get;
							if (void 0 !== l) return l.call(r)
						},
						s = n(0),
						u = function (t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}(s),
						c = function (t) {
							function e() {
								return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
							}
							return i(e, t), l(e, [{
								key: "insertInto",
								value: function (t, n) {
									0 === t.children.length ? a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
										"insertInto", this).call(this, t, n) : this.remove()
								}
							}, {
								key: "length",
								value: function () {
									return 0
								}
							}, {
								key: "value",
								value: function () {
									return ""
								}
							}], [{
								key: "value",
								value: function () {}
							}]), e
						}(u.default.Embed);
					c.blotName = "break", c.tagName = "BR", e.default = c
				}, function (t, e, n) {
					"use strict";

					function r(t) {
						var e = a.find(t);
						if (null == e) try {
							e = a.create(t)
						} catch (n) {
							e = a.create(a.Scope.INLINE), [].slice.call(t.childNodes).forEach(function (t) {
								e.domNode.appendChild(t)
							}), t.parentNode && t.parentNode.replaceChild(e.domNode, t), e.attach()
						}
						return e
					}
					var o = this && this.__extends || function () {
						var t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function (t, e) {
							t.__proto__ = e
						} || function (t, e) {
							for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
						};
						return function (e, n) {
							function r() {
								this.constructor = e
							}
							t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
						}
					}();
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var i = n(44),
						l = n(30),
						a = n(1),
						s = function (t) {
							function e(e) {
								var n = t.call(this, e) || this;
								return n.build(), n
							}
							return o(e, t), e.prototype.appendChild = function (t) {
								this.insertBefore(t)
							}, e.prototype.attach = function () {
								t.prototype.attach.call(this), this.children.forEach(function (t) {
									t.attach()
								})
							}, e.prototype.build = function () {
								var t = this;
								this.children = new i.default, [].slice.call(this.domNode.childNodes).reverse().forEach(function (e) {
									try {
										var n = r(e);
										t.insertBefore(n, t.children.head || void 0)
									} catch (t) {
										if (t instanceof a.ParchmentError) return;
										throw t
									}
								})
							}, e.prototype.deleteAt = function (t, e) {
								if (0 === t && e === this.length()) return this.remove();
								this.children.forEachAt(t, e, function (t, e, n) {
									t.deleteAt(e, n)
								})
							}, e.prototype.descendant = function (t, n) {
								var r = this.children.find(n),
									o = r[0],
									i = r[1];
								return null == t.blotName && t(o) || null != t.blotName && o instanceof t ? [o, i] : o instanceof e ?
									o.descendant(t, i) : [null, -1]
							}, e.prototype.descendants = function (t, n, r) {
								void 0 === n && (n = 0), void 0 === r && (r = Number.MAX_VALUE);
								var o = [],
									i = r;
								return this.children.forEachAt(n, r, function (n, r, l) {
									(null == t.blotName && t(n) || null != t.blotName && n instanceof t) && o.push(n), n instanceof e &&
										(o = o.concat(n.descendants(t, r, i))), i -= l
								}), o
							}, e.prototype.detach = function () {
								this.children.forEach(function (t) {
									t.detach()
								}), t.prototype.detach.call(this)
							}, e.prototype.formatAt = function (t, e, n, r) {
								this.children.forEachAt(t, e, function (t, e, o) {
									t.formatAt(e, o, n, r)
								})
							}, e.prototype.insertAt = function (t, e, n) {
								var r = this.children.find(t),
									o = r[0],
									i = r[1];
								if (o) o.insertAt(i, e, n);
								else {
									var l = null == n ? a.create("text", e) : a.create(e, n);
									this.appendChild(l)
								}
							}, e.prototype.insertBefore = function (t, e) {
								if (null != this.statics.allowedChildren && !this.statics.allowedChildren.some(function (e) {
										return t instanceof e
									})) throw new a.ParchmentError("Cannot insert " + t.statics.blotName + " into " + this.statics.blotName);
								t.insertInto(this, e)
							}, e.prototype.length = function () {
								return this.children.reduce(function (t, e) {
									return t + e.length()
								}, 0)
							}, e.prototype.moveChildren = function (t, e) {
								this.children.forEach(function (n) {
									t.insertBefore(n, e)
								})
							}, e.prototype.optimize = function (e) {
								if (t.prototype.optimize.call(this, e), 0 === this.children.length)
									if (null != this.statics.defaultChild) {
										var n = a.create(this.statics.defaultChild);
										this.appendChild(n), n.optimize(e)
									} else this.remove()
							}, e.prototype.path = function (t, n) {
								void 0 === n && (n = !1);
								var r = this.children.find(t, n),
									o = r[0],
									i = r[1],
									l = [
										[this, t]
									];
								return o instanceof e ? l.concat(o.path(i, n)) : (null != o && l.push([o, i]), l)
							}, e.prototype.removeChild = function (t) {
								this.children.remove(t)
							}, e.prototype.replace = function (n) {
								n instanceof e && n.moveChildren(this), t.prototype.replace.call(this, n)
							}, e.prototype.split = function (t, e) {
								if (void 0 === e && (e = !1), !e) {
									if (0 === t) return this;
									if (t === this.length()) return this.next
								}
								var n = this.clone();
								return this.parent.insertBefore(n, this.next), this.children.forEachAt(t, this.length(), function (t,
									r, o) {
									t = t.split(r, e), n.appendChild(t)
								}), n
							}, e.prototype.unwrap = function () {
								this.moveChildren(this.parent, this.next), this.remove()
							}, e.prototype.update = function (t, e) {
								var n = this,
									o = [],
									i = [];
								t.forEach(function (t) {
									t.target === n.domNode && "childList" === t.type && (o.push.apply(o, t.addedNodes), i.push.apply(i,
										t.removedNodes))
								}), i.forEach(function (t) {
									if (!(null != t.parentNode && "IFRAME" !== t.tagName && document.body.compareDocumentPosition(t) &
											Node.DOCUMENT_POSITION_CONTAINED_BY)) {
										var e = a.find(t);
										null != e && (null != e.domNode.parentNode && e.domNode.parentNode !== n.domNode || e.detach())
									}
								}), o.filter(function (t) {
									return t.parentNode == n.domNode
								}).sort(function (t, e) {
									return t === e ? 0 : t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1
								}).forEach(function (t) {
									var e = null;
									null != t.nextSibling && (e = a.find(t.nextSibling));
									var o = r(t);
									o.next == e && null != o.next || (null != o.parent && o.parent.removeChild(n), n.insertBefore(o, e ||
										void 0))
								})
							}, e
						}(l.default);
					e.default = s
				}, function (t, e, n) {
					"use strict";
					var r = this && this.__extends || function () {
						var t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function (t, e) {
							t.__proto__ = e
						} || function (t, e) {
							for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
						};
						return function (e, n) {
							function r() {
								this.constructor = e
							}
							t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
						}
					}();
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var o = n(12),
						i = n(31),
						l = n(17),
						a = n(1),
						s = function (t) {
							function e(e) {
								var n = t.call(this, e) || this;
								return n.attributes = new i.default(n.domNode), n
							}
							return r(e, t), e.formats = function (t) {
								return "string" == typeof this.tagName || (Array.isArray(this.tagName) ? t.tagName.toLowerCase() :
									void 0)
							}, e.prototype.format = function (t, e) {
								var n = a.query(t);
								n instanceof o.default ? this.attributes.attribute(n, e) : e && (null == n || t === this.statics.blotName &&
									this.formats()[t] === e || this.replaceWith(t, e))
							}, e.prototype.formats = function () {
								var t = this.attributes.values(),
									e = this.statics.formats(this.domNode);
								return null != e && (t[this.statics.blotName] = e), t
							}, e.prototype.replaceWith = function (e, n) {
								var r = t.prototype.replaceWith.call(this, e, n);
								return this.attributes.copy(r), r
							}, e.prototype.update = function (e, n) {
								var r = this;
								t.prototype.update.call(this, e, n), e.some(function (t) {
									return t.target === r.domNode && "attributes" === t.type
								}) && this.attributes.build()
							}, e.prototype.wrap = function (n, r) {
								var o = t.prototype.wrap.call(this, n, r);
								return o instanceof e && o.statics.scope === this.statics.scope && this.attributes.move(o), o
							}, e
						}(l.default);
					e.default = s
				}, function (t, e, n) {
					"use strict";
					var r = this && this.__extends || function () {
						var t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function (t, e) {
							t.__proto__ = e
						} || function (t, e) {
							for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
						};
						return function (e, n) {
							function r() {
								this.constructor = e
							}
							t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
						}
					}();
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var o = n(30),
						i = n(1),
						l = function (t) {
							function e() {
								return null !== t && t.apply(this, arguments) || this
							}
							return r(e, t), e.value = function (t) {
								return !0
							}, e.prototype.index = function (t, e) {
								return this.domNode === t || this.domNode.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY ?
									Math.min(e, 1) : -1
							}, e.prototype.position = function (t, e) {
								var n = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
								return t > 0 && (n += 1), [this.parent.domNode, n]
							}, e.prototype.value = function () {
								return t = {}, t[this.statics.blotName] = this.statics.value(this.domNode) || !0, t;
								var t
							}, e.scope = i.Scope.INLINE_BLOT, e
						}(o.default);
					e.default = l
				}, function (t, e, n) {
					function r(t) {
						this.ops = t, this.index = 0, this.offset = 0
					}
					var o = n(11),
						i = n(3),
						l = {
							attributes: {
								compose: function (t, e, n) {
									"object" != typeof t && (t = {}), "object" != typeof e && (e = {});
									var r = i(!0, {}, e);
									n || (r = Object.keys(r).reduce(function (t, e) {
										return null != r[e] && (t[e] = r[e]), t
									}, {}));
									for (var o in t) void 0 !== t[o] && void 0 === e[o] && (r[o] = t[o]);
									return Object.keys(r).length > 0 ? r : void 0
								},
								diff: function (t, e) {
									"object" != typeof t && (t = {}), "object" != typeof e && (e = {});
									var n = Object.keys(t).concat(Object.keys(e)).reduce(function (n, r) {
										return o(t[r], e[r]) || (n[r] = void 0 === e[r] ? null : e[r]), n
									}, {});
									return Object.keys(n).length > 0 ? n : void 0
								},
								transform: function (t, e, n) {
									if ("object" != typeof t) return e;
									if ("object" == typeof e) {
										if (!n) return e;
										var r = Object.keys(e).reduce(function (n, r) {
											return void 0 === t[r] && (n[r] = e[r]), n
										}, {});
										return Object.keys(r).length > 0 ? r : void 0
									}
								}
							},
							iterator: function (t) {
								return new r(t)
							},
							length: function (t) {
								return "number" == typeof t.delete ? t.delete : "number" == typeof t.retain ? t.retain : "string" ==
									typeof t.insert ? t.insert.length : 1
							}
						};
					r.prototype.hasNext = function () {
						return this.peekLength() < 1 / 0
					}, r.prototype.next = function (t) {
						t || (t = 1 / 0);
						var e = this.ops[this.index];
						if (e) {
							var n = this.offset,
								r = l.length(e);
							if (t >= r - n ? (t = r - n, this.index += 1, this.offset = 0) : this.offset += t, "number" == typeof e
								.delete) return {
								delete: t
							};
							var o = {};
							return e.attributes && (o.attributes = e.attributes), "number" == typeof e.retain ? o.retain = t :
								"string" == typeof e.insert ? o.insert = e.insert.substr(n, t) : o.insert = e.insert, o
						}
						return {
							retain: 1 / 0
						}
					}, r.prototype.peek = function () {
						return this.ops[this.index]
					}, r.prototype.peekLength = function () {
						return this.ops[this.index] ? l.length(this.ops[this.index]) - this.offset : 1 / 0
					}, r.prototype.peekType = function () {
						return this.ops[this.index] ? "number" == typeof this.ops[this.index].delete ? "delete" : "number" ==
							typeof this.ops[this.index].retain ? "retain" : "insert" : "retain"
					}, t.exports = l
				}, function (t, n) {
					var r = function () {
						"use strict";

						function t(t, e) {
							return null != e && t instanceof e
						}

						function n(r, o, i, l, f) {
							function d(r, i) {
								if (null === r) return null;
								if (0 === i) return r;
								var b, v;
								if ("object" != typeof r) return r;
								if (t(r, s)) b = new s;
								else if (t(r, u)) b = new u;
								else if (t(r, c)) b = new c(function (t, e) {
									r.then(function (e) {
										t(d(e, i - 1))
									}, function (t) {
										e(d(t, i - 1))
									})
								});
								else if (n.__isArray(r)) b = [];
								else if (n.__isRegExp(r)) b = new RegExp(r.source, a(r)), r.lastIndex && (b.lastIndex = r.lastIndex);
								else if (n.__isDate(r)) b = new Date(r.getTime());
								else {
									if (y && e.isBuffer(r)) return b = new e(r.length), r.copy(b), b;
									t(r, Error) ? b = Object.create(r) : void 0 === l ? (v = Object.getPrototypeOf(r), b = Object.create(
										v)) : (b = Object.create(l), v = l)
								}
								if (o) {
									var g = p.indexOf(r);
									if (-1 != g) return h[g];
									p.push(r), h.push(b)
								}
								t(r, s) && r.forEach(function (t, e) {
									var n = d(e, i - 1),
										r = d(t, i - 1);
									b.set(n, r)
								}), t(r, u) && r.forEach(function (t) {
									var e = d(t, i - 1);
									b.add(e)
								});
								for (var m in r) {
									var q;
									v && (q = Object.getOwnPropertyDescriptor(v, m)), q && null == q.set || (b[m] = d(r[m], i - 1))
								}
								if (Object.getOwnPropertySymbols)
									for (var _ = Object.getOwnPropertySymbols(r), m = 0; m < _.length; m++) {
										var w = _[m],
											k = Object.getOwnPropertyDescriptor(r, w);
										(!k || k.enumerable || f) && (b[w] = d(r[w], i - 1), k.enumerable || Object.defineProperty(b, w, {
											enumerable: !1
										}))
									}
								if (f)
									for (var O = Object.getOwnPropertyNames(r), m = 0; m < O.length; m++) {
										var x = O[m],
											k = Object.getOwnPropertyDescriptor(r, x);
										k && k.enumerable || (b[x] = d(r[x], i - 1), Object.defineProperty(b, x, {
											enumerable: !1
										}))
									}
								return b
							}
							"object" == typeof o && (i = o.depth, l = o.prototype, f = o.includeNonEnumerable, o = o.circular);
							var p = [],
								h = [],
								y = void 0 !== e;
							return void 0 === o && (o = !0), void 0 === i && (i = 1 / 0), d(r, i)
						}

						function r(t) {
							return Object.prototype.toString.call(t)
						}

						function o(t) {
							return "object" == typeof t && "[object Date]" === r(t)
						}

						function i(t) {
							return "object" == typeof t && "[object Array]" === r(t)
						}

						function l(t) {
							return "object" == typeof t && "[object RegExp]" === r(t)
						}

						function a(t) {
							var e = "";
							return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), e
						}
						var s;
						try {
							s = Map
						} catch (t) {
							s = function () {}
						}
						var u;
						try {
							u = Set
						} catch (t) {
							u = function () {}
						}
						var c;
						try {
							c = Promise
						} catch (t) {
							c = function () {}
						}
						return n.clonePrototype = function (t) {
							if (null === t) return null;
							var e = function () {};
							return e.prototype = t, new e
						}, n.__objToStr = r, n.__isDate = o, n.__isArray = i, n.__isRegExp = l, n.__getRegExpFlags = a, n
					}();
					"object" == typeof t && t.exports && (t.exports = r)
				}, function (t, e, n) {
					"use strict";

					function r(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}

					function o(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function i(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function l(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}

					function a(t) {
						return t instanceof b.default || t instanceof y.BlockEmbed
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var s = function () {
							function t(t, e) {
								var n = [],
									r = !0,
									o = !1,
									i = void 0;
								try {
									for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !==
											e); r = !0);
								} catch (t) {
									o = !0, i = t
								} finally {
									try {
										!r && a.return && a.return()
									} finally {
										if (o) throw i
									}
								}
								return n
							}
							return function (e, n) {
								if (Array.isArray(e)) return e;
								if (Symbol.iterator in Object(e)) return t(e, n);
								throw new TypeError("Invalid attempt to destructure non-iterable instance")
							}
						}(),
						u = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						c = function t(e, n, r) {
							null === e && (e = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(e, n);
							if (void 0 === o) {
								var i = Object.getPrototypeOf(e);
								return null === i ? void 0 : t(i, n, r)
							}
							if ("value" in o) return o.value;
							var l = o.get;
							if (void 0 !== l) return l.call(r)
						},
						f = n(0),
						d = r(f),
						p = n(8),
						h = r(p),
						y = n(4),
						b = r(y),
						v = n(16),
						g = r(v),
						m = n(13),
						q = r(m),
						_ = n(25),
						w = r(_),
						k = function (t) {
							function e(t, n) {
								o(this, e);
								var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
								return r.emitter = n.emitter, Array.isArray(n.whitelist) && (r.whitelist = n.whitelist.reduce(function (
									t, e) {
									return t[e] = !0, t
								}, {})), r.domNode.addEventListener("DOMNodeInserted", function () {}), r.optimize(), r.enable(), r
							}
							return l(e, t), u(e, [{
								key: "batchStart",
								value: function () {
									this.batch = !0
								}
							}, {
								key: "batchEnd",
								value: function () {
									this.batch = !1, this.optimize()
								}
							}, {
								key: "deleteAt",
								value: function (t, n) {
									var r = this.line(t),
										o = s(r, 2),
										i = o[0],
										l = o[1],
										a = this.line(t + n),
										u = s(a, 1),
										f = u[0];
									if (c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "deleteAt", this).call(this, t,
											n), null != f && i !== f && l > 0) {
										if (i instanceof y.BlockEmbed || f instanceof y.BlockEmbed) return void this.optimize();
										if (i instanceof q.default) {
											var d = i.newlineIndex(i.length(), !0);
											if (d > -1 && (i = i.split(d + 1)) === f) return void this.optimize()
										} else if (f instanceof q.default) {
											var p = f.newlineIndex(0);
											p > -1 && f.split(p + 1)
										}
										var h = f.children.head instanceof g.default ? null : f.children.head;
										i.moveChildren(f, h), i.remove()
									}
									this.optimize()
								}
							}, {
								key: "enable",
								value: function () {
									var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
									this.domNode.setAttribute("contenteditable", t)
								}
							}, {
								key: "formatAt",
								value: function (t, n, r, o) {
									(null == this.whitelist || this.whitelist[r]) && (c(e.prototype.__proto__ || Object.getPrototypeOf(
										e.prototype), "formatAt", this).call(this, t, n, r, o), this.optimize())
								}
							}, {
								key: "insertAt",
								value: function (t, n, r) {
									if (null == r || null == this.whitelist || this.whitelist[n]) {
										if (t >= this.length())
											if (null == r || null == d.default.query(n, d.default.Scope.BLOCK)) {
												var o = d.default.create(this.statics.defaultChild);
												this.appendChild(o), null == r && n.endsWith("\n") && (n = n.slice(0, -1)), o.insertAt(0, n, r)
											} else {
												var i = d.default.create(n, r);
												this.appendChild(i)
											}
										else c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this,
											t, n, r);
										this.optimize()
									}
								}
							}, {
								key: "insertBefore",
								value: function (t, n) {
									if (t.statics.scope === d.default.Scope.INLINE_BLOT) {
										var r = d.default.create(this.statics.defaultChild);
										r.appendChild(t), t = r
									}
									c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertBefore", this).call(this, t,
										n)
								}
							}, {
								key: "leaf",
								value: function (t) {
									return this.path(t).pop() || [null, -1]
								}
							}, {
								key: "line",
								value: function (t) {
									return t === this.length() ? this.line(t - 1) : this.descendant(a, t)
								}
							}, {
								key: "lines",
								value: function () {
									var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
										e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE;
									return function t(e, n, r) {
										var o = [],
											i = r;
										return e.children.forEachAt(n, r, function (e, n, r) {
											a(e) ? o.push(e) : e instanceof d.default.Container && (o = o.concat(t(e, n, i))), i -= r
										}), o
									}(this, t, e)
								}
							}, {
								key: "optimize",
								value: function () {
									var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
										n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
									!0 !== this.batch && (c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize",
										this).call(this, t, n), t.length > 0 && this.emitter.emit(h.default.events.SCROLL_OPTIMIZE, t,
										n))
								}
							}, {
								key: "path",
								value: function (t) {
									return c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "path", this).call(this, t)
										.slice(1)
								}
							}, {
								key: "update",
								value: function (t) {
									if (!0 !== this.batch) {
										var n = h.default.sources.USER;
										"string" == typeof t && (n = t), Array.isArray(t) || (t = this.observer.takeRecords()), t.length >
											0 && this.emitter.emit(h.default.events.SCROLL_BEFORE_UPDATE, n, t), c(e.prototype.__proto__ ||
												Object.getPrototypeOf(e.prototype), "update", this).call(this, t.concat([])), t.length > 0 &&
											this.emitter.emit(h.default.events.SCROLL_UPDATE, n, t)
									}
								}
							}]), e
						}(d.default.Scroll);
					k.blotName = "scroll", k.className = "ql-editor", k.tagName = "DIV", k.defaultChild = "block", k.allowedChildren = [
						b.default, y.BlockEmbed, w.default
					], e.default = k
				}, function (t, e, n) {
					"use strict";

					function r(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}

					function o(t, e, n) {
						return e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n, t
					}

					function i(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function l(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function a(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}

					function s(t, e) {
						var n, r = t === D.keys.LEFT ? "prefix" : "suffix";
						return n = {
							key: t,
							shiftKey: e,
							altKey: null
						}, o(n, r, /^$/), o(n, "handler", function (n) {
							var r = n.index;
							t === D.keys.RIGHT && (r += n.length + 1);
							var o = this.quill.getLeaf(r);
							return !(v(o, 1)[0] instanceof T.default.Embed) || (t === D.keys.LEFT ? e ? this.quill.setSelection(n
									.index - 1, n.length + 1, P.default.sources.USER) : this.quill.setSelection(n.index - 1, P.default
									.sources.USER) : e ? this.quill.setSelection(n.index, n.length + 1, P.default.sources.USER) : this
								.quill.setSelection(n.index + n.length + 1, P.default.sources.USER), !1)
						}), n
					}

					function u(t, e) {
						if (!(0 === t.index || this.quill.getLength() <= 1)) {
							var n = this.quill.getLine(t.index),
								r = v(n, 1),
								o = r[0],
								i = {};
							if (0 === e.offset) {
								var l = this.quill.getLine(t.index - 1),
									a = v(l, 1),
									s = a[0];
								if (null != s && s.length() > 1) {
									var u = o.formats(),
										c = this.quill.getFormat(t.index - 1, 1);
									i = j.default.attributes.diff(u, c) || {}
								}
							}
							var f = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix) ? 2 : 1;
							this.quill.deleteText(t.index - f, f, P.default.sources.USER), Object.keys(i).length > 0 && this.quill.formatLine(
								t.index - f, f, i, P.default.sources.USER), this.quill.focus()
						}
					}

					function c(t, e) {
						var n = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix) ? 2 : 1;
						if (!(t.index >= this.quill.getLength() - n)) {
							var r = {},
								o = 0,
								i = this.quill.getLine(t.index),
								l = v(i, 1),
								a = l[0];
							if (e.offset >= a.length() - 1) {
								var s = this.quill.getLine(t.index + 1),
									u = v(s, 1),
									c = u[0];
								if (c) {
									var f = a.formats(),
										d = this.quill.getFormat(t.index, 1);
									r = j.default.attributes.diff(f, d) || {}, o = c.length()
								}
							}
							this.quill.deleteText(t.index, n, P.default.sources.USER), Object.keys(r).length > 0 && this.quill.formatLine(
								t.index + o - 1, n, r, P.default.sources.USER)
						}
					}

					function f(t) {
						var e = this.quill.getLines(t),
							n = {};
						if (e.length > 1) {
							var r = e[0].formats(),
								o = e[e.length - 1].formats();
							n = j.default.attributes.diff(o, r) || {}
						}
						this.quill.deleteText(t, P.default.sources.USER), Object.keys(n).length > 0 && this.quill.formatLine(t.index,
							1, n, P.default.sources.USER), this.quill.setSelection(t.index, P.default.sources.SILENT), this.quill.focus()
					}

					function d(t, e) {
						var n = this;
						t.length > 0 && this.quill.scroll.deleteAt(t.index, t.length);
						var r = Object.keys(e.format).reduce(function (t, n) {
							return T.default.query(n, T.default.Scope.BLOCK) && !Array.isArray(e.format[n]) && (t[n] = e.format[n]),
								t
						}, {});
						this.quill.insertText(t.index, "\n", r, P.default.sources.USER), this.quill.setSelection(t.index + 1, P.default
							.sources.SILENT), this.quill.focus(), Object.keys(e.format).forEach(function (t) {
							null == r[t] && (Array.isArray(e.format[t]) || "link" !== t && n.quill.format(t, e.format[t], P.default
								.sources.USER))
						})
					}

					function p(t) {
						return {
							key: D.keys.TAB,
							shiftKey: !t,
							format: {
								"code-block": !0
							},
							handler: function (e) {
								var n = T.default.query("code-block"),
									r = e.index,
									o = e.length,
									i = this.quill.scroll.descendant(n, r),
									l = v(i, 2),
									a = l[0],
									s = l[1];
								if (null != a) {
									var u = this.quill.getIndex(a),
										c = a.newlineIndex(s, !0) + 1,
										f = a.newlineIndex(u + s + o),
										d = a.domNode.textContent.slice(c, f).split("\n");
									s = 0, d.forEach(function (e, i) {
										t ? (a.insertAt(c + s, n.TAB), s += n.TAB.length, 0 === i ? r += n.TAB.length : o += n.TAB.length) :
											e.startsWith(n.TAB) && (a.deleteAt(c + s, n.TAB.length), s -= n.TAB.length, 0 === i ? r -= n.TAB
												.length : o -= n.TAB.length), s += e.length + 1
									}), this.quill.update(P.default.sources.USER), this.quill.setSelection(r, o, P.default.sources.SILENT)
								}
							}
						}
					}

					function h(t) {
						return {
							key: t[0].toUpperCase(),
							shortKey: !0,
							handler: function (e, n) {
								this.quill.format(t, !n.format[t], P.default.sources.USER)
							}
						}
					}

					function y(t) {
						if ("string" == typeof t || "number" == typeof t) return y({
							key: t
						});
						if ("object" === (void 0 === t ? "undefined" : b(t)) && (t = (0, q.default)(t, !1)), "string" == typeof t
							.key)
							if (null != D.keys[t.key.toUpperCase()]) t.key = D.keys[t.key.toUpperCase()];
							else {
								if (1 !== t.key.length) return null;
								t.key = t.key.toUpperCase().charCodeAt(0)
							}
						return t.shortKey && (t[B] = t.shortKey, delete t.shortKey), t
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					}), e.SHORTKEY = e.default = void 0;
					var b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
							return typeof t
						} : function (t) {
							return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ?
								"symbol" : typeof t
						},
						v = function () {
							function t(t, e) {
								var n = [],
									r = !0,
									o = !1,
									i = void 0;
								try {
									for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !==
											e); r = !0);
								} catch (t) {
									o = !0, i = t
								} finally {
									try {
										!r && a.return && a.return()
									} finally {
										if (o) throw i
									}
								}
								return n
							}
							return function (e, n) {
								if (Array.isArray(e)) return e;
								if (Symbol.iterator in Object(e)) return t(e, n);
								throw new TypeError("Invalid attempt to destructure non-iterable instance")
							}
						}(),
						g = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						m = n(21),
						q = r(m),
						_ = n(11),
						w = r(_),
						k = n(3),
						O = r(k),
						x = n(2),
						E = r(x),
						A = n(20),
						j = r(A),
						N = n(0),
						T = r(N),
						S = n(5),
						P = r(S),
						C = n(10),
						L = r(C),
						R = n(9),
						M = r(R),
						I = (0, L.default)("quill:keyboard"),
						B = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey",
						D = function (t) {
							function e(t, n) {
								i(this, e);
								var r = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
								return r.bindings = {}, Object.keys(r.options.bindings).forEach(function (e) {
									("list autofill" !== e || null == t.scroll.whitelist || t.scroll.whitelist.list) && r.options.bindings[
										e] && r.addBinding(r.options.bindings[e])
								}), r.addBinding({
									key: e.keys.ENTER,
									shiftKey: null
								}, d), r.addBinding({
									key: e.keys.ENTER,
									metaKey: null,
									ctrlKey: null,
									altKey: null
								}, function () {}), /Firefox/i.test(navigator.userAgent) ? (r.addBinding({
									key: e.keys.BACKSPACE
								}, {
									collapsed: !0
								}, u), r.addBinding({
									key: e.keys.DELETE
								}, {
									collapsed: !0
								}, c)) : (r.addBinding({
									key: e.keys.BACKSPACE
								}, {
									collapsed: !0,
									prefix: /^.?$/
								}, u), r.addBinding({
									key: e.keys.DELETE
								}, {
									collapsed: !0,
									suffix: /^.?$/
								}, c)), r.addBinding({
									key: e.keys.BACKSPACE
								}, {
									collapsed: !1
								}, f), r.addBinding({
									key: e.keys.DELETE
								}, {
									collapsed: !1
								}, f), r.addBinding({
									key: e.keys.BACKSPACE,
									altKey: null,
									ctrlKey: null,
									metaKey: null,
									shiftKey: null
								}, {
									collapsed: !0,
									offset: 0
								}, u), r.listen(), r
							}
							return a(e, t), g(e, null, [{
								key: "match",
								value: function (t, e) {
									return e = y(e), !["altKey", "ctrlKey", "metaKey", "shiftKey"].some(function (n) {
										return !!e[n] !== t[n] && null !== e[n]
									}) && e.key === (t.which || t.keyCode)
								}
							}]), g(e, [{
								key: "addBinding",
								value: function (t) {
									var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
										n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
										r = y(t);
									if (null == r || null == r.key) return I.warn("Attempted to add invalid keyboard binding", r);
									"function" == typeof e && (e = {
										handler: e
									}), "function" == typeof n && (n = {
										handler: n
									}), r = (0, O.default)(r, e, n), this.bindings[r.key] = this.bindings[r.key] || [], this.bindings[
										r.key].push(r)
								}
							}, {
								key: "listen",
								value: function () {
									var t = this;
									this.quill.root.addEventListener("keydown", function (n) {
										if (!n.defaultPrevented) {
											var r = n.which || n.keyCode,
												o = (t.bindings[r] || []).filter(function (t) {
													return e.match(n, t)
												});
											if (0 !== o.length) {
												var i = t.quill.getSelection();
												if (null != i && t.quill.hasFocus()) {
													var l = t.quill.getLine(i.index),
														a = v(l, 2),
														s = a[0],
														u = a[1],
														c = t.quill.getLeaf(i.index),
														f = v(c, 2),
														d = f[0],
														p = f[1],
														h = 0 === i.length ? [d, p] : t.quill.getLeaf(i.index + i.length),
														y = v(h, 2),
														g = y[0],
														m = y[1],
														q = d instanceof T.default.Text ? d.value().slice(0, p) : "",
														_ = g instanceof T.default.Text ? g.value().slice(m) : "",
														k = {
															collapsed: 0 === i.length,
															empty: 0 === i.length && s.length() <= 1,
															format: t.quill.getFormat(i),
															offset: u,
															prefix: q,
															suffix: _
														};
													o.some(function (e) {
														if (null != e.collapsed && e.collapsed !== k.collapsed) return !1;
														if (null != e.empty && e.empty !== k.empty) return !1;
														if (null != e.offset && e.offset !== k.offset) return !1;
														if (Array.isArray(e.format)) {
															if (e.format.every(function (t) {
																	return null == k.format[t]
																})) return !1
														} else if ("object" === b(e.format) && !Object.keys(e.format).every(function (t) {
																return !0 === e.format[t] ? null != k.format[t] : !1 === e.format[t] ? null == k.format[
																	t] : (0, w.default)(e.format[t], k.format[t])
															})) return !1;
														return !(null != e.prefix && !e.prefix.test(k.prefix)) && (!(null != e.suffix && !e.suffix
															.test(k.suffix)) && !0 !== e.handler.call(t, i, k))
													}) && n.preventDefault()
												}
											}
										}
									})
								}
							}]), e
						}(M.default);
					D.keys = {
						BACKSPACE: 8,
						TAB: 9,
						ENTER: 13,
						ESCAPE: 27,
						LEFT: 37,
						UP: 38,
						RIGHT: 39,
						DOWN: 40,
						DELETE: 46
					}, D.DEFAULTS = {
						bindings: {
							bold: h("bold"),
							italic: h("italic"),
							underline: h("underline"),
							indent: {
								key: D.keys.TAB,
								format: ["blockquote", "indent", "list"],
								handler: function (t, e) {
									if (e.collapsed && 0 !== e.offset) return !0;
									this.quill.format("indent", "+1", P.default.sources.USER)
								}
							},
							outdent: {
								key: D.keys.TAB,
								shiftKey: !0,
								format: ["blockquote", "indent", "list"],
								handler: function (t, e) {
									if (e.collapsed && 0 !== e.offset) return !0;
									this.quill.format("indent", "-1", P.default.sources.USER)
								}
							},
							"outdent backspace": {
								key: D.keys.BACKSPACE,
								collapsed: !0,
								shiftKey: null,
								metaKey: null,
								ctrlKey: null,
								altKey: null,
								format: ["indent", "list"],
								offset: 0,
								handler: function (t, e) {
									null != e.format.indent ? this.quill.format("indent", "-1", P.default.sources.USER) : null != e.format
										.list && this.quill.format("list", !1, P.default.sources.USER)
								}
							},
							"indent code-block": p(!0),
							"outdent code-block": p(!1),
							"remove tab": {
								key: D.keys.TAB,
								shiftKey: !0,
								collapsed: !0,
								prefix: /\t$/,
								handler: function (t) {
									this.quill.deleteText(t.index - 1, 1, P.default.sources.USER)
								}
							},
							tab: {
								key: D.keys.TAB,
								handler: function (t) {
									this.quill.history.cutoff();
									var e = (new E.default).retain(t.index).delete(t.length).insert("\t");
									this.quill.updateContents(e, P.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(
										t.index + 1, P.default.sources.SILENT)
								}
							},
							"list empty enter": {
								key: D.keys.ENTER,
								collapsed: !0,
								format: ["list"],
								empty: !0,
								handler: function (t, e) {
									this.quill.format("list", !1, P.default.sources.USER), e.format.indent && this.quill.format(
										"indent", !1, P.default.sources.USER)
								}
							},
							"checklist enter": {
								key: D.keys.ENTER,
								collapsed: !0,
								format: {
									list: "checked"
								},
								handler: function (t) {
									var e = this.quill.getLine(t.index),
										n = v(e, 2),
										r = n[0],
										o = n[1],
										i = (0, O.default)({}, r.formats(), {
											list: "checked"
										}),
										l = (new E.default).retain(t.index).insert("\n", i).retain(r.length() - o - 1).retain(1, {
											list: "unchecked"
										});
									this.quill.updateContents(l, P.default.sources.USER), this.quill.setSelection(t.index + 1, P.default
										.sources.SILENT), this.quill.scrollIntoView()
								}
							},
							"header enter": {
								key: D.keys.ENTER,
								collapsed: !0,
								format: ["header"],
								suffix: /^$/,
								handler: function (t, e) {
									var n = this.quill.getLine(t.index),
										r = v(n, 2),
										o = r[0],
										i = r[1],
										l = (new E.default).retain(t.index).insert("\n", e.format).retain(o.length() - i - 1).retain(1, {
											header: null
										});
									this.quill.updateContents(l, P.default.sources.USER), this.quill.setSelection(t.index + 1, P.default
										.sources.SILENT), this.quill.scrollIntoView()
								}
							},
							"list autofill": {
								key: " ",
								collapsed: !0,
								format: {
									list: !1
								},
								prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
								handler: function (t, e) {
									var n = e.prefix.length,
										r = this.quill.getLine(t.index),
										o = v(r, 2),
										i = o[0],
										l = o[1];
									if (l > n) return !0;
									var a = void 0;
									switch (e.prefix.trim()) {
										case "[]":
										case "[ ]":
											a = "unchecked";
											break;
										case "[x]":
											a = "checked";
											break;
										case "-":
										case "*":
											a = "bullet";
											break;
										default:
											a = "ordered"
									}
									this.quill.insertText(t.index, " ", P.default.sources.USER), this.quill.history.cutoff();
									var s = (new E.default).retain(t.index - l).delete(n + 1).retain(i.length() - 2 - l).retain(1, {
										list: a
									});
									this.quill.updateContents(s, P.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(
										t.index - n, P.default.sources.SILENT)
								}
							},
							"code exit": {
								key: D.keys.ENTER,
								collapsed: !0,
								format: ["code-block"],
								prefix: /\n\n$/,
								suffix: /^\s+$/,
								handler: function (t) {
									var e = this.quill.getLine(t.index),
										n = v(e, 2),
										r = n[0],
										o = n[1],
										i = (new E.default).retain(t.index + r.length() - o - 2).retain(1, {
											"code-block": null
										}).delete(1);
									this.quill.updateContents(i, P.default.sources.USER)
								}
							},
							"embed left": s(D.keys.LEFT, !1),
							"embed left shift": s(D.keys.LEFT, !0),
							"embed right": s(D.keys.RIGHT, !1),
							"embed right shift": s(D.keys.RIGHT, !0)
						}
					}, e.default = D, e.SHORTKEY = B
				}, function (t, e, n) {
					"use strict";

					function r(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}

					function o(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function i(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function l(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var a = function () {
							function t(t, e) {
								var n = [],
									r = !0,
									o = !1,
									i = void 0;
								try {
									for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !==
											e); r = !0);
								} catch (t) {
									o = !0, i = t
								} finally {
									try {
										!r && a.return && a.return()
									} finally {
										if (o) throw i
									}
								}
								return n
							}
							return function (e, n) {
								if (Array.isArray(e)) return e;
								if (Symbol.iterator in Object(e)) return t(e, n);
								throw new TypeError("Invalid attempt to destructure non-iterable instance")
							}
						}(),
						s = function t(e, n, r) {
							null === e && (e = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(e, n);
							if (void 0 === o) {
								var i = Object.getPrototypeOf(e);
								return null === i ? void 0 : t(i, n, r)
							}
							if ("value" in o) return o.value;
							var l = o.get;
							if (void 0 !== l) return l.call(r)
						},
						u = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						c = n(0),
						f = r(c),
						d = n(7),
						p = r(d),
						h = function (t) {
							function e(t, n) {
								o(this, e);
								var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
								return r.selection = n, r.textNode = document.createTextNode(e.CONTENTS), r.domNode.appendChild(r.textNode),
									r._length = 0, r
							}
							return l(e, t), u(e, null, [{
								key: "value",
								value: function () {}
							}]), u(e, [{
								key: "detach",
								value: function () {
									null != this.parent && this.parent.removeChild(this)
								}
							}, {
								key: "format",
								value: function (t, n) {
									if (0 !== this._length) return s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
										"format", this).call(this, t, n);
									for (var r = this, o = 0; null != r && r.statics.scope !== f.default.Scope.BLOCK_BLOT;) o += r.offset(
										r.parent), r = r.parent;
									null != r && (this._length = e.CONTENTS.length, r.optimize(), r.formatAt(o, e.CONTENTS.length, t,
										n), this._length = 0)
								}
							}, {
								key: "index",
								value: function (t, n) {
									return t === this.textNode ? 0 : s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
										"index", this).call(this, t, n)
								}
							}, {
								key: "length",
								value: function () {
									return this._length
								}
							}, {
								key: "position",
								value: function () {
									return [this.textNode, this.textNode.data.length]
								}
							}, {
								key: "remove",
								value: function () {
									s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "remove", this).call(this), this.parent =
										null
								}
							}, {
								key: "restore",
								value: function () {
									if (!this.selection.composing && null != this.parent) {
										var t = this.textNode,
											n = this.selection.getNativeRange(),
											r = void 0,
											o = void 0,
											i = void 0;
										if (null != n && n.start.node === t && n.end.node === t) {
											var l = [t, n.start.offset, n.end.offset];
											r = l[0], o = l[1], i = l[2]
										}
										for (; null != this.domNode.lastChild && this.domNode.lastChild !== this.textNode;) this.domNode
											.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
										if (this.textNode.data !== e.CONTENTS) {
											var s = this.textNode.data.split(e.CONTENTS).join("");
											this.next instanceof p.default ? (r = this.next.domNode, this.next.insertAt(0, s), this.textNode
												.data = e.CONTENTS) : (this.textNode.data = s, this.parent.insertBefore(f.default.create(this
												.textNode), this), this.textNode = document.createTextNode(e.CONTENTS), this.domNode.appendChild(
												this.textNode))
										}
										if (this.remove(), null != o) {
											var u = [o, i].map(function (t) {
													return Math.max(0, Math.min(r.data.length, t - 1))
												}),
												c = a(u, 2);
											return o = c[0], i = c[1], {
												startNode: r,
												startOffset: o,
												endNode: r,
												endOffset: i
											}
										}
									}
								}
							}, {
								key: "update",
								value: function (t, e) {
									var n = this;
									if (t.some(function (t) {
											return "characterData" === t.type && t.target === n.textNode
										})) {
										var r = this.restore();
										r && (e.range = r)
									}
								}
							}, {
								key: "value",
								value: function () {
									return ""
								}
							}]), e
						}(f.default.Embed);
					h.blotName = "cursor", h.className = "ql-cursor", h.tagName = "span", h.CONTENTS = "\ufeff", e.default =
						h
				}, function (t, e, n) {
					"use strict";

					function r(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}

					function o(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function i(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function l(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var a = n(0),
						s = r(a),
						u = n(4),
						c = r(u),
						f = function (t) {
							function e() {
								return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
							}
							return l(e, t), e
						}(s.default.Container);
					f.allowedChildren = [c.default, u.BlockEmbed, f], e.default = f
				}, function (t, e, n) {
					"use strict";

					function r(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function o(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function i(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					}), e.ColorStyle = e.ColorClass = e.ColorAttributor = void 0;
					var l = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						a = function t(e, n, r) {
							null === e && (e = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(e, n);
							if (void 0 === o) {
								var i = Object.getPrototypeOf(e);
								return null === i ? void 0 : t(i, n, r)
							}
							if ("value" in o) return o.value;
							var l = o.get;
							if (void 0 !== l) return l.call(r)
						},
						s = n(0),
						u = function (t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}(s),
						c = function (t) {
							function e() {
								return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
							}
							return i(e, t), l(e, [{
								key: "value",
								value: function (t) {
									var n = a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this).call(this,
										t);
									return n.startsWith("rgb(") ? (n = n.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), "#" + n.split(
										",").map(function (t) {
										return ("00" + parseInt(t).toString(16)).slice(-2)
									}).join("")) : n
								}
							}]), e
						}(u.default.Attributor.Style),
						f = new u.default.Attributor.Class("color", "ql-color", {
							scope: u.default.Scope.INLINE
						}),
						d = new c("color", "color", {
							scope: u.default.Scope.INLINE
						});
					e.ColorAttributor = c, e.ColorClass = f, e.ColorStyle = d
				}, function (t, e, n) {
					"use strict";

					function r(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function o(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function i(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}

					function l(t, e) {
						var n = document.createElement("a");
						n.href = t;
						var r = n.href.slice(0, n.href.indexOf(":"));
						return e.indexOf(r) > -1
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					}), e.sanitize = e.default = void 0;
					var a = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						s = function t(e, n, r) {
							null === e && (e = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(e, n);
							if (void 0 === o) {
								var i = Object.getPrototypeOf(e);
								return null === i ? void 0 : t(i, n, r)
							}
							if ("value" in o) return o.value;
							var l = o.get;
							if (void 0 !== l) return l.call(r)
						},
						u = n(6),
						c = function (t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}(u),
						f = function (t) {
							function e() {
								return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
							}
							return i(e, t), a(e, [{
								key: "format",
								value: function (t, n) {
									if (t !== this.statics.blotName || !n) return s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
										"format", this).call(this, t, n);
									n = this.constructor.sanitize(n), this.domNode.setAttribute("href", n)
								}
							}], [{
								key: "create",
								value: function (t) {
									var n = s(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
									return t = this.sanitize(t), n.setAttribute("href", t), n.setAttribute("target", "_blank"), n
								}
							}, {
								key: "formats",
								value: function (t) {
									return t.getAttribute("href")
								}
							}, {
								key: "sanitize",
								value: function (t) {
									return l(t, this.PROTOCOL_WHITELIST) ? t : this.SANITIZED_URL
								}
							}]), e
						}(c.default);
					f.blotName = "link", f.tagName = "A", f.SANITIZED_URL = "about:blank", f.PROTOCOL_WHITELIST = ["http",
						"https", "mailto", "tel"
					], e.default = f, e.sanitize = l
				}, function (t, e, n) {
					"use strict";

					function r(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}

					function o(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function i(t, e) {
						t.setAttribute(e, !("true" === t.getAttribute(e)))
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
							return typeof t
						} : function (t) {
							return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ?
								"symbol" : typeof t
						},
						a = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						s = n(23),
						u = r(s),
						c = n(107),
						f = r(c),
						d = 0,
						p = function () {
							function t(e) {
								var n = this;
								o(this, t), this.select = e, this.container = document.createElement("span"), this.buildPicker(), this
									.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select),
									this.label.addEventListener("mousedown", function () {
										n.togglePicker()
									}), this.label.addEventListener("keydown", function (t) {
										switch (t.keyCode) {
											case u.default.keys.ENTER:
												n.togglePicker();
												break;
											case u.default.keys.ESCAPE:
												n.escape(), t.preventDefault()
										}
									}), this.select.addEventListener("change", this.update.bind(this))
							}
							return a(t, [{
								key: "togglePicker",
								value: function () {
									this.container.classList.toggle("ql-expanded"), i(this.label, "aria-expanded"), i(this.options,
										"aria-hidden")
								}
							}, {
								key: "buildItem",
								value: function (t) {
									var e = this,
										n = document.createElement("span");
									return n.tabIndex = "0", n.setAttribute("role", "button"), n.classList.add("ql-picker-item"), t.hasAttribute(
										"value") && n.setAttribute("data-value", t.getAttribute("value")), t.textContent && n.setAttribute(
										"data-label", t.textContent), n.addEventListener("click", function () {
										e.selectItem(n, !0)
									}), n.addEventListener("keydown", function (t) {
										switch (t.keyCode) {
											case u.default.keys.ENTER:
												e.selectItem(n, !0), t.preventDefault();
												break;
											case u.default.keys.ESCAPE:
												e.escape(), t.preventDefault()
										}
									}), n
								}
							}, {
								key: "buildLabel",
								value: function () {
									var t = document.createElement("span");
									return t.classList.add("ql-picker-label"), t.innerHTML = f.default, t.tabIndex = "0", t.setAttribute(
										"role", "button"), t.setAttribute("aria-expanded", "false"), this.container.appendChild(t), t
								}
							}, {
								key: "buildOptions",
								value: function () {
									var t = this,
										e = document.createElement("span");
									e.classList.add("ql-picker-options"), e.setAttribute("aria-hidden", "true"), e.tabIndex = "-1", e
										.id = "ql-picker-options-" + d, d += 1, this.label.setAttribute("aria-controls", e.id), this.options =
										e, [].slice.call(this.select.options).forEach(function (n) {
											var r = t.buildItem(n);
											e.appendChild(r), !0 === n.selected && t.selectItem(r)
										}), this.container.appendChild(e)
								}
							}, {
								key: "buildPicker",
								value: function () {
									var t = this;
									[].slice.call(this.select.attributes).forEach(function (e) {
										t.container.setAttribute(e.name, e.value)
									}), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions()
								}
							}, {
								key: "escape",
								value: function () {
									var t = this;
									this.close(), setTimeout(function () {
										return t.label.focus()
									}, 1)
								}
							}, {
								key: "close",
								value: function () {
									this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"),
										this.options.setAttribute("aria-hidden", "true")
								}
							}, {
								key: "selectItem",
								value: function (t) {
									var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
										n = this.container.querySelector(".ql-selected");
									if (t !== n && (null != n && n.classList.remove("ql-selected"), null != t && (t.classList.add(
												"ql-selected"), this.select.selectedIndex = [].indexOf.call(t.parentNode.children, t), t.hasAttribute(
												"data-value") ? this.label.setAttribute("data-value", t.getAttribute("data-value")) : this.label
											.removeAttribute("data-value"), t.hasAttribute("data-label") ? this.label.setAttribute(
												"data-label", t.getAttribute("data-label")) : this.label.removeAttribute("data-label"), e))) {
										if ("function" == typeof Event) this.select.dispatchEvent(new Event("change"));
										else if ("object" === ("undefined" == typeof Event ? "undefined" : l(Event))) {
											var r = document.createEvent("Event");
											r.initEvent("change", !0, !0), this.select.dispatchEvent(r)
										}
										this.close()
									}
								}
							}, {
								key: "update",
								value: function () {
									var t = void 0;
									if (this.select.selectedIndex > -1) {
										var e = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];
										t = this.select.options[this.select.selectedIndex], this.selectItem(e)
									} else this.selectItem(null);
									var n = null != t && t !== this.select.querySelector("option[selected]");
									this.label.classList.toggle("ql-active", n)
								}
							}]), t
						}();
					e.default = p
				}, function (t, e, n) {
					"use strict";

					function r(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var o = n(0),
						i = r(o),
						l = n(5),
						a = r(l),
						s = n(4),
						u = r(s),
						c = n(16),
						f = r(c),
						d = n(25),
						p = r(d),
						h = n(24),
						y = r(h),
						b = n(35),
						v = r(b),
						g = n(6),
						m = r(g),
						q = n(22),
						_ = r(q),
						w = n(7),
						k = r(w),
						O = n(55),
						x = r(O),
						E = n(42),
						A = r(E),
						j = n(23),
						N = r(j);
					a.default.register({
						"blots/block": u.default,
						"blots/block/embed": s.BlockEmbed,
						"blots/break": f.default,
						"blots/container": p.default,
						"blots/cursor": y.default,
						"blots/embed": v.default,
						"blots/inline": m.default,
						"blots/scroll": _.default,
						"blots/text": k.default,
						"modules/clipboard": x.default,
						"modules/history": A.default,
						"modules/keyboard": N.default
					}), i.default.register(u.default, f.default, y.default, m.default, _.default, k.default), e.default = a.default
				}, function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var r = n(1),
						o = function () {
							function t(t) {
								this.domNode = t, this.domNode[r.DATA_KEY] = {
									blot: this
								}
							}
							return Object.defineProperty(t.prototype, "statics", {
								get: function () {
									return this.constructor
								},
								enumerable: !0,
								configurable: !0
							}), t.create = function (t) {
								if (null == this.tagName) throw new r.ParchmentError("Blot definition missing tagName");
								var e;
								return Array.isArray(this.tagName) ? ("string" == typeof t && (t = t.toUpperCase(), parseInt(t).toString() ===
											t && (t = parseInt(t))), e = "number" == typeof t ? document.createElement(this.tagName[t - 1]) :
										this.tagName.indexOf(t) > -1 ? document.createElement(t) : document.createElement(this.tagName[0])) :
									e = document.createElement(this.tagName), this.className && e.classList.add(this.className), e
							}, t.prototype.attach = function () {
								null != this.parent && (this.scroll = this.parent.scroll)
							}, t.prototype.clone = function () {
								var t = this.domNode.cloneNode(!1);
								return r.create(t)
							}, t.prototype.detach = function () {
								null != this.parent && this.parent.removeChild(this), delete this.domNode[r.DATA_KEY]
							}, t.prototype.deleteAt = function (t, e) {
								this.isolate(t, e).remove()
							}, t.prototype.formatAt = function (t, e, n, o) {
								var i = this.isolate(t, e);
								if (null != r.query(n, r.Scope.BLOT) && o) i.wrap(n, o);
								else if (null != r.query(n, r.Scope.ATTRIBUTE)) {
									var l = r.create(this.statics.scope);
									i.wrap(l), l.format(n, o)
								}
							}, t.prototype.insertAt = function (t, e, n) {
								var o = null == n ? r.create("text", e) : r.create(e, n),
									i = this.split(t);
								this.parent.insertBefore(o, i)
							}, t.prototype.insertInto = function (t, e) {
								void 0 === e && (e = null), null != this.parent && this.parent.children.remove(this);
								var n = null;
								t.children.insertBefore(this, e), null != e && (n = e.domNode), this.domNode.parentNode == t.domNode &&
									this.domNode.nextSibling == n || t.domNode.insertBefore(this.domNode, n), this.parent = t, this.attach()
							}, t.prototype.isolate = function (t, e) {
								var n = this.split(t);
								return n.split(e), n
							}, t.prototype.length = function () {
								return 1
							}, t.prototype.offset = function (t) {
								return void 0 === t && (t = this.parent), null == this.parent || this == t ? 0 : this.parent.children
									.offset(this) + this.parent.offset(t)
							}, t.prototype.optimize = function (t) {
								null != this.domNode[r.DATA_KEY] && delete this.domNode[r.DATA_KEY].mutations
							}, t.prototype.remove = function () {
								null != this.domNode.parentNode && this.domNode.parentNode.removeChild(this.domNode), this.detach()
							}, t.prototype.replace = function (t) {
								null != t.parent && (t.parent.insertBefore(this, t.next), t.remove())
							}, t.prototype.replaceWith = function (t, e) {
								var n = "string" == typeof t ? r.create(t, e) : t;
								return n.replace(this), n
							}, t.prototype.split = function (t, e) {
								return 0 === t ? this : this.next
							}, t.prototype.update = function (t, e) {}, t.prototype.wrap = function (t, e) {
								var n = "string" == typeof t ? r.create(t, e) : t;
								return null != this.parent && this.parent.insertBefore(n, this.next), n.appendChild(this), n
							}, t.blotName = "abstract", t
						}();
					e.default = o
				}, function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var r = n(12),
						o = n(32),
						i = n(33),
						l = n(1),
						a = function () {
							function t(t) {
								this.attributes = {}, this.domNode = t, this.build()
							}
							return t.prototype.attribute = function (t, e) {
								e ? t.add(this.domNode, e) && (null != t.value(this.domNode) ? this.attributes[t.attrName] = t :
									delete this.attributes[t.attrName]) : (t.remove(this.domNode), delete this.attributes[t.attrName])
							}, t.prototype.build = function () {
								var t = this;
								this.attributes = {};
								var e = r.default.keys(this.domNode),
									n = o.default.keys(this.domNode),
									a = i.default.keys(this.domNode);
								e.concat(n).concat(a).forEach(function (e) {
									var n = l.query(e, l.Scope.ATTRIBUTE);
									n instanceof r.default && (t.attributes[n.attrName] = n)
								})
							}, t.prototype.copy = function (t) {
								var e = this;
								Object.keys(this.attributes).forEach(function (n) {
									var r = e.attributes[n].value(e.domNode);
									t.format(n, r)
								})
							}, t.prototype.move = function (t) {
								var e = this;
								this.copy(t), Object.keys(this.attributes).forEach(function (t) {
									e.attributes[t].remove(e.domNode)
								}), this.attributes = {}
							}, t.prototype.values = function () {
								var t = this;
								return Object.keys(this.attributes).reduce(function (e, n) {
									return e[n] = t.attributes[n].value(t.domNode), e
								}, {})
							}, t
						}();
					e.default = a
				}, function (t, e, n) {
					"use strict";

					function r(t, e) {
						return (t.getAttribute("class") || "").split(/\s+/).filter(function (t) {
							return 0 === t.indexOf(e + "-")
						})
					}
					var o = this && this.__extends || function () {
						var t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function (t, e) {
							t.__proto__ = e
						} || function (t, e) {
							for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
						};
						return function (e, n) {
							function r() {
								this.constructor = e
							}
							t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
						}
					}();
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var i = n(12),
						l = function (t) {
							function e() {
								return null !== t && t.apply(this, arguments) || this
							}
							return o(e, t), e.keys = function (t) {
								return (t.getAttribute("class") || "").split(/\s+/).map(function (t) {
									return t.split("-").slice(0, -1).join("-")
								})
							}, e.prototype.add = function (t, e) {
								return !!this.canAdd(t, e) && (this.remove(t), t.classList.add(this.keyName + "-" + e), !0)
							}, e.prototype.remove = function (t) {
								r(t, this.keyName).forEach(function (e) {
									t.classList.remove(e)
								}), 0 === t.classList.length && t.removeAttribute("class")
							}, e.prototype.value = function (t) {
								var e = r(t, this.keyName)[0] || "",
									n = e.slice(this.keyName.length + 1);
								return this.canAdd(t, n) ? n : ""
							}, e
						}(i.default);
					e.default = l
				}, function (t, e, n) {
					"use strict";

					function r(t) {
						var e = t.split("-"),
							n = e.slice(1).map(function (t) {
								return t[0].toUpperCase() + t.slice(1)
							}).join("");
						return e[0] + n
					}
					var o = this && this.__extends || function () {
						var t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function (t, e) {
							t.__proto__ = e
						} || function (t, e) {
							for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
						};
						return function (e, n) {
							function r() {
								this.constructor = e
							}
							t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
						}
					}();
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var i = n(12),
						l = function (t) {
							function e() {
								return null !== t && t.apply(this, arguments) || this
							}
							return o(e, t), e.keys = function (t) {
								return (t.getAttribute("style") || "").split(";").map(function (t) {
									return t.split(":")[0].trim()
								})
							}, e.prototype.add = function (t, e) {
								return !!this.canAdd(t, e) && (t.style[r(this.keyName)] = e, !0)
							}, e.prototype.remove = function (t) {
								t.style[r(this.keyName)] = "", t.getAttribute("style") || t.removeAttribute("style")
							}, e.prototype.value = function (t) {
								var e = t.style[r(this.keyName)];
								return this.canAdd(t, e) ? e : ""
							}, e
						}(i.default);
					e.default = l
				}, function (t, e, n) {
					"use strict";

					function r(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var o = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						i = function () {
							function t(e, n) {
								r(this, t), this.quill = e, this.options = n, this.modules = {}
							}
							return o(t, [{
								key: "init",
								value: function () {
									var t = this;
									Object.keys(this.options.modules).forEach(function (e) {
										null == t.modules[e] && t.addModule(e)
									})
								}
							}, {
								key: "addModule",
								value: function (t) {
									var e = this.quill.constructor.import("modules/" + t);
									return this.modules[t] = new e(this.quill, this.options.modules[t] || {}), this.modules[t]
								}
							}]), t
						}();
					i.DEFAULTS = {
						modules: {}
					}, i.themes = {
						default: i
					}, e.default = i
				}, function (t, e, n) {
					"use strict";

					function r(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}

					function o(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function i(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function l(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var a = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						s = function t(e, n, r) {
							null === e && (e = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(e, n);
							if (void 0 === o) {
								var i = Object.getPrototypeOf(e);
								return null === i ? void 0 : t(i, n, r)
							}
							if ("value" in o) return o.value;
							var l = o.get;
							if (void 0 !== l) return l.call(r)
						},
						u = n(0),
						c = r(u),
						f = n(7),
						d = r(f),
						p = "\ufeff",
						h = function (t) {
							function e(t) {
								o(this, e);
								var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
								return n.contentNode = document.createElement("span"), n.contentNode.setAttribute("contenteditable", !
									1), [].slice.call(n.domNode.childNodes).forEach(function (t) {
									n.contentNode.appendChild(t)
								}), n.leftGuard = document.createTextNode(p), n.rightGuard = document.createTextNode(p), n.domNode.appendChild(
									n.leftGuard), n.domNode.appendChild(n.contentNode), n.domNode.appendChild(n.rightGuard), n
							}
							return l(e, t), a(e, [{
								key: "index",
								value: function (t, n) {
									return t === this.leftGuard ? 0 : t === this.rightGuard ? 1 : s(e.prototype.__proto__ || Object.getPrototypeOf(
										e.prototype), "index", this).call(this, t, n)
								}
							}, {
								key: "restore",
								value: function (t) {
									var e = void 0,
										n = void 0,
										r = t.data.split(p).join("");
									if (t === this.leftGuard)
										if (this.prev instanceof d.default) {
											var o = this.prev.length();
											this.prev.insertAt(o, r), e = {
												startNode: this.prev.domNode,
												startOffset: o + r.length
											}
										} else n = document.createTextNode(r), this.parent.insertBefore(c.default.create(n), this), e = {
											startNode: n,
											startOffset: r.length
										};
									else t === this.rightGuard && (this.next instanceof d.default ? (this.next.insertAt(0, r), e = {
										startNode: this.next.domNode,
										startOffset: r.length
									}) : (n = document.createTextNode(r), this.parent.insertBefore(c.default.create(n), this.next),
										e = {
											startNode: n,
											startOffset: r.length
										}));
									return t.data = p, e
								}
							}, {
								key: "update",
								value: function (t, e) {
									var n = this;
									t.forEach(function (t) {
										if ("characterData" === t.type && (t.target === n.leftGuard || t.target === n.rightGuard)) {
											var r = n.restore(t.target);
											r && (e.range = r)
										}
									})
								}
							}]), e
						}(c.default.Embed);
					e.default = h
				}, function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", {
						value: !0
					}), e.AlignStyle = e.AlignClass = e.AlignAttribute = void 0;
					var r = n(0),
						o = function (t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}(r),
						i = {
							scope: o.default.Scope.BLOCK,
							whitelist: ["right", "center", "justify"]
						},
						l = new o.default.Attributor.Attribute("align", "align", i),
						a = new o.default.Attributor.Class("align", "ql-align", i),
						s = new o.default.Attributor.Style("align", "text-align", i);
					e.AlignAttribute = l, e.AlignClass = a, e.AlignStyle = s
				}, function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", {
						value: !0
					}), e.BackgroundStyle = e.BackgroundClass = void 0;
					var r = n(0),
						o = function (t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}(r),
						i = n(26),
						l = new o.default.Attributor.Class("background", "ql-bg", {
							scope: o.default.Scope.INLINE
						}),
						a = new i.ColorAttributor("background", "background-color", {
							scope: o.default.Scope.INLINE
						});
					e.BackgroundClass = l, e.BackgroundStyle = a
				}, function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", {
						value: !0
					}), e.DirectionStyle = e.DirectionClass = e.DirectionAttribute = void 0;
					var r = n(0),
						o = function (t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}(r),
						i = {
							scope: o.default.Scope.BLOCK,
							whitelist: ["rtl"]
						},
						l = new o.default.Attributor.Attribute("direction", "dir", i),
						a = new o.default.Attributor.Class("direction", "ql-direction", i),
						s = new o.default.Attributor.Style("direction", "direction", i);
					e.DirectionAttribute = l, e.DirectionClass = a, e.DirectionStyle = s
				}, function (t, e, n) {
					"use strict";

					function r(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function o(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function i(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					}), e.FontClass = e.FontStyle = void 0;
					var l = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						a = function t(e, n, r) {
							null === e && (e = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(e, n);
							if (void 0 === o) {
								var i = Object.getPrototypeOf(e);
								return null === i ? void 0 : t(i, n, r)
							}
							if ("value" in o) return o.value;
							var l = o.get;
							if (void 0 !== l) return l.call(r)
						},
						s = n(0),
						u = function (t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}(s),
						c = {
							scope: u.default.Scope.INLINE,
							whitelist: ["serif", "monospace"]
						},
						f = new u.default.Attributor.Class("font", "ql-font", c),
						d = function (t) {
							function e() {
								return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
							}
							return i(e, t), l(e, [{
								key: "value",
								value: function (t) {
									return a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this).call(this, t)
										.replace(/["']/g, "")
								}
							}]), e
						}(u.default.Attributor.Style),
						p = new d("font", "font-family", c);
					e.FontStyle = p, e.FontClass = f
				}, function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", {
						value: !0
					}), e.SizeStyle = e.SizeClass = void 0;
					var r = n(0),
						o = function (t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}(r),
						i = new o.default.Attributor.Class("size", "ql-size", {
							scope: o.default.Scope.INLINE,
							whitelist: ["small", "large", "huge"]
						}),
						l = new o.default.Attributor.Style("size", "font-size", {
							scope: o.default.Scope.INLINE,
							whitelist: ["10px", "18px", "32px"]
						});
					e.SizeClass = i, e.SizeStyle = l
				}, function (t, e, n) {
					"use strict";
					t.exports = {
						align: {
							"": n(76),
							center: n(77),
							right: n(78),
							justify: n(79)
						},
						background: n(80),
						blockquote: n(81),
						bold: n(82),
						clean: n(83),
						code: n(58),
						"code-block": n(58),
						color: n(84),
						direction: {
							"": n(85),
							rtl: n(86)
						},
						float: {
							center: n(87),
							full: n(88),
							left: n(89),
							right: n(90)
						},
						formula: n(91),
						header: {
							1: n(92),
							2: n(93)
						},
						italic: n(94),
						image: n(95),
						indent: {
							"+1": n(96),
							"-1": n(97)
						},
						link: n(98),
						list: {
							ordered: n(99),
							bullet: n(100),
							check: n(101)
						},
						script: {
							sub: n(102),
							super: n(103)
						},
						strike: n(104),
						underline: n(105),
						video: n(106)
					}
				}, function (t, e, n) {
					"use strict";

					function r(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}

					function o(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function i(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function l(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}

					function a(t) {
						var e = t.ops[t.ops.length - 1];
						return null != e && (null != e.insert ? "string" == typeof e.insert && e.insert.endsWith("\n") : null !=
							e.attributes && Object.keys(e.attributes).some(function (t) {
								return null != f.default.query(t, f.default.Scope.BLOCK)
							}))
					}

					function s(t) {
						var e = t.reduce(function (t, e) {
								return t += e.delete || 0
							}, 0),
							n = t.length() - e;
						return a(t) && (n -= 1), n
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					}), e.getLastChangeIndex = e.default = void 0;
					var u = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						c = n(0),
						f = r(c),
						d = n(5),
						p = r(d),
						h = n(9),
						y = r(h),
						b = function (t) {
							function e(t, n) {
								o(this, e);
								var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
								return r.lastRecorded = 0, r.ignoreChange = !1, r.clear(), r.quill.on(p.default.events.EDITOR_CHANGE,
									function (t, e, n, o) {
										t !== p.default.events.TEXT_CHANGE || r.ignoreChange || (r.options.userOnly && o !== p.default.sources
											.USER ? r.transform(e) : r.record(e, n))
									}), r.quill.keyboard.addBinding({
									key: "Z",
									shortKey: !0
								}, r.undo.bind(r)), r.quill.keyboard.addBinding({
									key: "Z",
									shortKey: !0,
									shiftKey: !0
								}, r.redo.bind(r)), /Win/i.test(navigator.platform) && r.quill.keyboard.addBinding({
									key: "Y",
									shortKey: !0
								}, r.redo.bind(r)), r
							}
							return l(e, t), u(e, [{
								key: "change",
								value: function (t, e) {
									if (0 !== this.stack[t].length) {
										var n = this.stack[t].pop();
										this.stack[e].push(n), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(
											n[t], p.default.sources.USER), this.ignoreChange = !1;
										var r = s(n[t]);
										this.quill.setSelection(r)
									}
								}
							}, {
								key: "clear",
								value: function () {
									this.stack = {
										undo: [],
										redo: []
									}
								}
							}, {
								key: "cutoff",
								value: function () {
									this.lastRecorded = 0
								}
							}, {
								key: "record",
								value: function (t, e) {
									if (0 !== t.ops.length) {
										this.stack.redo = [];
										var n = this.quill.getContents().diff(e),
											r = Date.now();
										if (this.lastRecorded + this.options.delay > r && this.stack.undo.length > 0) {
											var o = this.stack.undo.pop();
											n = n.compose(o.undo), t = o.redo.compose(t)
										} else this.lastRecorded = r;
										this.stack.undo.push({
											redo: t,
											undo: n
										}), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift()
									}
								}
							}, {
								key: "redo",
								value: function () {
									this.change("redo", "undo")
								}
							}, {
								key: "transform",
								value: function (t) {
									this.stack.undo.forEach(function (e) {
										e.undo = t.transform(e.undo, !0), e.redo = t.transform(e.redo, !0)
									}), this.stack.redo.forEach(function (e) {
										e.undo = t.transform(e.undo, !0), e.redo = t.transform(e.redo, !0)
									})
								}
							}, {
								key: "undo",
								value: function () {
									this.change("undo", "redo")
								}
							}]), e
						}(y.default);
					b.DEFAULTS = {
						delay: 1e3,
						maxStack: 100,
						userOnly: !1
					}, e.default = b, e.getLastChangeIndex = s
				}, function (t, e, n) {
					"use strict";

					function r(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}

					function o(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function i(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function l(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}

					function a(t) {
						var e = t.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || t.match(
							/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
						return e ? (e[1] || "https") + "://www.youtube.com/embed/" + e[2] + "?showinfo=0" : (e = t.match(
								/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? (e[1] || "https") + "://player.vimeo.com/video/" +
							e[2] + "/" : t
					}

					function s(t, e) {
						var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
						e.forEach(function (e) {
							var r = document.createElement("option");
							e === n ? r.setAttribute("selected", "selected") : r.setAttribute("value", e), t.appendChild(r)
						})
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					}), e.default = e.BaseTooltip = void 0;
					var u = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						c = function t(e, n, r) {
							null === e && (e = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(e, n);
							if (void 0 === o) {
								var i = Object.getPrototypeOf(e);
								return null === i ? void 0 : t(i, n, r)
							}
							if ("value" in o) return o.value;
							var l = o.get;
							if (void 0 !== l) return l.call(r)
						},
						f = n(3),
						d = r(f),
						p = n(2),
						h = r(p),
						y = n(8),
						b = r(y),
						v = n(23),
						g = r(v),
						m = n(34),
						q = r(m),
						_ = n(59),
						w = r(_),
						k = n(60),
						O = r(k),
						x = n(28),
						E = r(x),
						A = n(61),
						j = r(A),
						N = [!1, "center", "right", "justify"],
						T = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc",
							"#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66",
							"#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2",
							"#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"
						],
						S = [!1, "serif", "monospace"],
						P = ["1", "2", "3", !1],
						C = ["small", !1, "large", "huge"],
						L = function (t) {
							function e(t, n) {
								o(this, e);
								var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)),
									l = function e(n) {
										if (!document.body.contains(t.root)) return document.body.removeEventListener("click", e);
										null == r.tooltip || r.tooltip.root.contains(n.target) || document.activeElement === r.tooltip.textbox ||
											r.quill.hasFocus() || r.tooltip.hide(), null != r.pickers && r.pickers.forEach(function (t) {
												t.container.contains(n.target) || t.close()
											})
									};
								return t.emitter.listenDOM("click", document.body, l), r
							}
							return l(e, t), u(e, [{
								key: "addModule",
								value: function (t) {
									var n = c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "addModule", this).call(
										this, t);
									return "toolbar" === t && this.extendToolbar(n), n
								}
							}, {
								key: "buildButtons",
								value: function (t, e) {
									t.forEach(function (t) {
										(t.getAttribute("class") || "").split(/\s+/).forEach(function (n) {
											if (n.startsWith("ql-") && (n = n.slice("ql-".length), null != e[n]))
												if ("direction" === n) t.innerHTML = e[n][""] + e[n].rtl;
												else if ("string" == typeof e[n]) t.innerHTML = e[n];
											else {
												var r = t.value || "";
												null != r && e[n][r] && (t.innerHTML = e[n][r])
											}
										})
									})
								}
							}, {
								key: "buildPickers",
								value: function (t, e) {
									var n = this;
									this.pickers = t.map(function (t) {
										if (t.classList.contains("ql-align")) return null == t.querySelector("option") && s(t, N), new O
											.default(t, e.align);
										if (t.classList.contains("ql-background") || t.classList.contains("ql-color")) {
											var n = t.classList.contains("ql-background") ? "background" : "color";
											return null == t.querySelector("option") && s(t, T, "background" === n ? "#ffffff" :
												"#000000"), new w.default(t, e[n])
										}
										return null == t.querySelector("option") && (t.classList.contains("ql-font") ? s(t, S) : t.classList
											.contains("ql-header") ? s(t, P) : t.classList.contains("ql-size") && s(t, C)), new E.default(
											t)
									});
									var r = function () {
										n.pickers.forEach(function (t) {
											t.update()
										})
									};
									this.quill.on(b.default.events.EDITOR_CHANGE, r)
								}
							}]), e
						}(q.default);
					L.DEFAULTS = (0, d.default)(!0, {}, q.default.DEFAULTS, {
						modules: {
							toolbar: {
								handlers: {
									formula: function () {
										this.quill.theme.tooltip.edit("formula")
									},
									image: function () {
										var t = this,
											e = this.container.querySelector("input.ql-image[type=file]");
										null == e && (e = document.createElement("input"), e.setAttribute("type", "file"), e.setAttribute(
											"accept", "image/png, image/gif, image/jpeg, image/bmp, image/x-icon"), e.classList.add(
											"ql-image"), e.addEventListener("change", function () {
											if (null != e.files && null != e.files[0]) {
												var n = new FileReader;
												n.onload = function (n) {
													var r = t.quill.getSelection(!0);
													t.quill.updateContents((new h.default).retain(r.index).delete(r.length).insert({
															image: n.target.result
														}), b.default.sources.USER), t.quill.setSelection(r.index + 1, b.default.sources.SILENT),
														e.value = ""
												}, n.readAsDataURL(e.files[0])
											}
										}), this.container.appendChild(e)), e.click()
									},
									video: function () {
										this.quill.theme.tooltip.edit("video")
									}
								}
							}
						}
					});
					var R = function (t) {
						function e(t, n) {
							o(this, e);
							var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
							return r.textbox = r.root.querySelector('input[type="text"]'), r.listen(), r
						}
						return l(e, t), u(e, [{
							key: "listen",
							value: function () {
								var t = this;
								this.textbox.addEventListener("keydown", function (e) {
									g.default.match(e, "enter") ? (t.save(), e.preventDefault()) : g.default.match(e, "escape") &&
										(t.cancel(), e.preventDefault())
								})
							}
						}, {
							key: "cancel",
							value: function () {
								this.hide()
							}
						}, {
							key: "edit",
							value: function () {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "link",
									e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
								this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), null != e ? this.textbox
									.value = e : t !== this.root.getAttribute("data-mode") && (this.textbox.value = ""), this.position(
										this.quill.getBounds(this.quill.selection.savedRange)), this.textbox.select(), this.textbox.setAttribute(
										"placeholder", this.textbox.getAttribute("data-" + t) || ""), this.root.setAttribute(
										"data-mode", t)
							}
						}, {
							key: "restoreFocus",
							value: function () {
								var t = this.quill.scrollingContainer.scrollTop;
								this.quill.focus(), this.quill.scrollingContainer.scrollTop = t
							}
						}, {
							key: "save",
							value: function () {
								var t = this.textbox.value;
								switch (this.root.getAttribute("data-mode")) {
									case "link":
										var e = this.quill.root.scrollTop;
										this.linkRange ? (this.quill.formatText(this.linkRange, "link", t, b.default.sources.USER),
											delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", t, b.default.sources
											.USER)), this.quill.root.scrollTop = e;
										break;
									case "video":
										t = a(t);
									case "formula":
										if (!t) break;
										var n = this.quill.getSelection(!0);
										if (null != n) {
											var r = n.index + n.length;
											this.quill.insertEmbed(r, this.root.getAttribute("data-mode"), t, b.default.sources.USER),
												"formula" === this.root.getAttribute("data-mode") && this.quill.insertText(r + 1, " ", b.default
													.sources.USER), this.quill.setSelection(r + 2, b.default.sources.USER)
										}
								}
								this.textbox.value = "", this.hide()
							}
						}]), e
					}(j.default);
					e.BaseTooltip = R, e.default = L
				}, function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var r = function () {
						function t() {
							this.head = this.tail = null, this.length = 0
						}
						return t.prototype.append = function () {
							for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
							this.insertBefore(t[0], null), t.length > 1 && this.append.apply(this, t.slice(1))
						}, t.prototype.contains = function (t) {
							for (var e, n = this.iterator(); e = n();)
								if (e === t) return !0;
							return !1
						}, t.prototype.insertBefore = function (t, e) {
							t && (t.next = e, null != e ? (t.prev = e.prev, null != e.prev && (e.prev.next = t), e.prev = t, e ===
								this.head && (this.head = t)) : null != this.tail ? (this.tail.next = t, t.prev = this.tail, this.tail =
								t) : (t.prev = null, this.head = this.tail = t), this.length += 1)
						}, t.prototype.offset = function (t) {
							for (var e = 0, n = this.head; null != n;) {
								if (n === t) return e;
								e += n.length(), n = n.next
							}
							return -1
						}, t.prototype.remove = function (t) {
							this.contains(t) && (null != t.prev && (t.prev.next = t.next), null != t.next && (t.next.prev = t.prev),
								t === this.head && (this.head = t.next), t === this.tail && (this.tail = t.prev), this.length -= 1)
						}, t.prototype.iterator = function (t) {
							return void 0 === t && (t = this.head),
								function () {
									var e = t;
									return null != t && (t = t.next), e
								}
						}, t.prototype.find = function (t, e) {
							void 0 === e && (e = !1);
							for (var n, r = this.iterator(); n = r();) {
								var o = n.length();
								if (t < o || e && t === o && (null == n.next || 0 !== n.next.length())) return [n, t];
								t -= o
							}
							return [null, 0]
						}, t.prototype.forEach = function (t) {
							for (var e, n = this.iterator(); e = n();) t(e)
						}, t.prototype.forEachAt = function (t, e, n) {
							if (!(e <= 0))
								for (var r, o = this.find(t), i = o[0], l = o[1], a = t - l, s = this.iterator(i);
									(r = s()) && a < t + e;) {
									var u = r.length();
									t > a ? n(r, t - a, Math.min(e, a + u - t)) : n(r, 0, Math.min(u, t + e - a)), a += u
								}
						}, t.prototype.map = function (t) {
							return this.reduce(function (e, n) {
								return e.push(t(n)), e
							}, [])
						}, t.prototype.reduce = function (t, e) {
							for (var n, r = this.iterator(); n = r();) e = t(e, n);
							return e
						}, t
					}();
					e.default = r
				}, function (t, e, n) {
					"use strict";
					var r = this && this.__extends || function () {
						var t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function (t, e) {
							t.__proto__ = e
						} || function (t, e) {
							for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
						};
						return function (e, n) {
							function r() {
								this.constructor = e
							}
							t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
						}
					}();
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var o = n(17),
						i = n(1),
						l = {
							attributes: !0,
							characterData: !0,
							characterDataOldValue: !0,
							childList: !0,
							subtree: !0
						},
						a = function (t) {
							function e(e) {
								var n = t.call(this, e) || this;
								return n.scroll = n, n.observer = new MutationObserver(function (t) {
									n.update(t)
								}), n.observer.observe(n.domNode, l), n.attach(), n
							}
							return r(e, t), e.prototype.detach = function () {
								t.prototype.detach.call(this), this.observer.disconnect()
							}, e.prototype.deleteAt = function (e, n) {
								this.update(), 0 === e && n === this.length() ? this.children.forEach(function (t) {
									t.remove()
								}) : t.prototype.deleteAt.call(this, e, n)
							}, e.prototype.formatAt = function (e, n, r, o) {
								this.update(), t.prototype.formatAt.call(this, e, n, r, o)
							}, e.prototype.insertAt = function (e, n, r) {
								this.update(), t.prototype.insertAt.call(this, e, n, r)
							}, e.prototype.optimize = function (e, n) {
								var r = this;
								void 0 === e && (e = []), void 0 === n && (n = {}), t.prototype.optimize.call(this, n);
								for (var l = [].slice.call(this.observer.takeRecords()); l.length > 0;) e.push(l.pop());
								for (var a = function (t, e) {
										void 0 === e && (e = !0), null != t && t !== r && null != t.domNode.parentNode && (null == t.domNode[
											i.DATA_KEY].mutations && (t.domNode[i.DATA_KEY].mutations = []), e && a(t.parent))
									}, s = function (t) {
										null != t.domNode[i.DATA_KEY] && null != t.domNode[i.DATA_KEY].mutations && (t instanceof o.default &&
											t.children.forEach(s), t.optimize(n))
									}, u = e, c = 0; u.length > 0; c += 1) {
									if (c >= 100) throw new Error("[Parchment] Maximum optimize iterations reached");
									for (u.forEach(function (t) {
											var e = i.find(t.target, !0);
											null != e && (e.domNode === t.target && ("childList" === t.type ? (a(i.find(t.previousSibling, !1)), []
												.forEach.call(t.addedNodes, function (t) {
													var e = i.find(t, !1);
													a(e, !1), e instanceof o.default && e.children.forEach(function (t) {
														a(t, !1)
													})
												})) : "attributes" === t.type && a(e.prev)), a(e))
										}), this.children.forEach(s), u = [].slice.call(this.observer.takeRecords()), l = u.slice(); l.length >
										0;) e.push(l.pop())
								}
							}, e.prototype.update = function (e, n) {
								var r = this;
								void 0 === n && (n = {}), e = e || this.observer.takeRecords(), e.map(function (t) {
									var e = i.find(t.target, !0);
									return null == e ? null : null == e.domNode[i.DATA_KEY].mutations ? (e.domNode[i.DATA_KEY].mutations = [
										t
									], e) : (e.domNode[i.DATA_KEY].mutations.push(t), null)
								}).forEach(function (t) {
									null != t && t !== r && null != t.domNode[i.DATA_KEY] && t.update(t.domNode[i.DATA_KEY].mutations ||
										[], n)
								}), null != this.domNode[i.DATA_KEY].mutations && t.prototype.update.call(this, this.domNode[i.DATA_KEY]
									.mutations, n), this.optimize(e, n)
							}, e.blotName = "scroll", e.defaultChild = "block", e.scope = i.Scope.BLOCK_BLOT, e.tagName = "DIV", e
						}(o.default);
					e.default = a
				}, function (t, e, n) {
					"use strict";

					function r(t, e) {
						if (Object.keys(t).length !== Object.keys(e).length) return !1;
						for (var n in t)
							if (t[n] !== e[n]) return !1;
						return !0
					}
					var o = this && this.__extends || function () {
						var t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function (t, e) {
							t.__proto__ = e
						} || function (t, e) {
							for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
						};
						return function (e, n) {
							function r() {
								this.constructor = e
							}
							t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
						}
					}();
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var i = n(18),
						l = n(1),
						a = function (t) {
							function e() {
								return null !== t && t.apply(this, arguments) || this
							}
							return o(e, t), e.formats = function (n) {
								if (n.tagName !== e.tagName) return t.formats.call(this, n)
							}, e.prototype.format = function (n, r) {
								var o = this;
								n !== this.statics.blotName || r ? t.prototype.format.call(this, n, r) : (this.children.forEach(
									function (t) {
										t instanceof i.default || (t = t.wrap(e.blotName, !0)), o.attributes.copy(t)
									}), this.unwrap())
							}, e.prototype.formatAt = function (e, n, r, o) {
								if (null != this.formats()[r] || l.query(r, l.Scope.ATTRIBUTE)) {
									this.isolate(e, n).format(r, o)
								} else t.prototype.formatAt.call(this, e, n, r, o)
							}, e.prototype.optimize = function (n) {
								t.prototype.optimize.call(this, n);
								var o = this.formats();
								if (0 === Object.keys(o).length) return this.unwrap();
								var i = this.next;
								i instanceof e && i.prev === this && r(o, i.formats()) && (i.moveChildren(this), i.remove())
							}, e.blotName = "inline", e.scope = l.Scope.INLINE_BLOT, e.tagName = "SPAN", e
						}(i.default);
					e.default = a
				}, function (t, e, n) {
					"use strict";
					var r = this && this.__extends || function () {
						var t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function (t, e) {
							t.__proto__ = e
						} || function (t, e) {
							for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
						};
						return function (e, n) {
							function r() {
								this.constructor = e
							}
							t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
						}
					}();
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var o = n(18),
						i = n(1),
						l = function (t) {
							function e() {
								return null !== t && t.apply(this, arguments) || this
							}
							return r(e, t), e.formats = function (n) {
								var r = i.query(e.blotName).tagName;
								if (n.tagName !== r) return t.formats.call(this, n)
							}, e.prototype.format = function (n, r) {
								null != i.query(n, i.Scope.BLOCK) && (n !== this.statics.blotName || r ? t.prototype.format.call(this,
									n, r) : this.replaceWith(e.blotName))
							}, e.prototype.formatAt = function (e, n, r, o) {
								null != i.query(r, i.Scope.BLOCK) ? this.format(r, o) : t.prototype.formatAt.call(this, e, n, r, o)
							}, e.prototype.insertAt = function (e, n, r) {
								if (null == r || null != i.query(n, i.Scope.INLINE)) t.prototype.insertAt.call(this, e, n, r);
								else {
									var o = this.split(e),
										l = i.create(n, r);
									o.parent.insertBefore(l, o)
								}
							}, e.prototype.update = function (e, n) {
								navigator.userAgent.match(/Trident/) ? this.build() : t.prototype.update.call(this, e, n)
							}, e.blotName = "block", e.scope = i.Scope.BLOCK_BLOT, e.tagName = "P", e
						}(o.default);
					e.default = l
				}, function (t, e, n) {
					"use strict";
					var r = this && this.__extends || function () {
						var t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function (t, e) {
							t.__proto__ = e
						} || function (t, e) {
							for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
						};
						return function (e, n) {
							function r() {
								this.constructor = e
							}
							t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
						}
					}();
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var o = n(19),
						i = function (t) {
							function e() {
								return null !== t && t.apply(this, arguments) || this
							}
							return r(e, t), e.formats = function (t) {}, e.prototype.format = function (e, n) {
								t.prototype.formatAt.call(this, 0, this.length(), e, n)
							}, e.prototype.formatAt = function (e, n, r, o) {
								0 === e && n === this.length() ? this.format(r, o) : t.prototype.formatAt.call(this, e, n, r, o)
							}, e.prototype.formats = function () {
								return this.statics.formats(this.domNode)
							}, e
						}(o.default);
					e.default = i
				}, function (t, e, n) {
					"use strict";
					var r = this && this.__extends || function () {
						var t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function (t, e) {
							t.__proto__ = e
						} || function (t, e) {
							for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
						};
						return function (e, n) {
							function r() {
								this.constructor = e
							}
							t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
						}
					}();
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var o = n(19),
						i = n(1),
						l = function (t) {
							function e(e) {
								var n = t.call(this, e) || this;
								return n.text = n.statics.value(n.domNode), n
							}
							return r(e, t), e.create = function (t) {
								return document.createTextNode(t)
							}, e.value = function (t) {
								var e = t.data;
								return e.normalize && (e = e.normalize()), e
							}, e.prototype.deleteAt = function (t, e) {
								this.domNode.data = this.text = this.text.slice(0, t) + this.text.slice(t + e)
							}, e.prototype.index = function (t, e) {
								return this.domNode === t ? e : -1
							}, e.prototype.insertAt = function (e, n, r) {
								null == r ? (this.text = this.text.slice(0, e) + n + this.text.slice(e), this.domNode.data = this.text) :
									t.prototype.insertAt.call(this, e, n, r)
							}, e.prototype.length = function () {
								return this.text.length
							}, e.prototype.optimize = function (n) {
								t.prototype.optimize.call(this, n), this.text = this.statics.value(this.domNode), 0 === this.text.length ?
									this.remove() : this.next instanceof e && this.next.prev === this && (this.insertAt(this.length(),
										this.next.value()), this.next.remove())
							}, e.prototype.position = function (t, e) {
								return void 0 === e && (e = !1), [this.domNode, t]
							}, e.prototype.split = function (t, e) {
								if (void 0 === e && (e = !1), !e) {
									if (0 === t) return this;
									if (t === this.length()) return this.next
								}
								var n = i.create(this.domNode.splitText(t));
								return this.parent.insertBefore(n, this.next), this.text = this.statics.value(this.domNode), n
							}, e.prototype.update = function (t, e) {
								var n = this;
								t.some(function (t) {
									return "characterData" === t.type && t.target === n.domNode
								}) && (this.text = this.statics.value(this.domNode))
							}, e.prototype.value = function () {
								return this.text
							}, e.blotName = "text", e.scope = i.Scope.INLINE_BLOT, e
						}(o.default);
					e.default = l
				}, function (t, e, n) {
					"use strict";
					var r = document.createElement("div");
					if (r.classList.toggle("test-class", !1), r.classList.contains("test-class")) {
						var o = DOMTokenList.prototype.toggle;
						DOMTokenList.prototype.toggle = function (t, e) {
							return arguments.length > 1 && !this.contains(t) == !e ? e : o.call(this, t)
						}
					}
					String.prototype.startsWith || (String.prototype.startsWith = function (t, e) {
						return e = e || 0, this.substr(e, t.length) === t
					}), String.prototype.endsWith || (String.prototype.endsWith = function (t, e) {
						var n = this.toString();
						("number" != typeof e || !isFinite(e) || Math.floor(e) !== e || e > n.length) && (e = n.length), e -=
							t.length;
						var r = n.indexOf(t, e);
						return -1 !== r && r === e
					}), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
						value: function (t) {
							if (null === this) throw new TypeError("Array.prototype.find called on null or undefined");
							if ("function" != typeof t) throw new TypeError("predicate must be a function");
							for (var e, n = Object(this), r = n.length >>> 0, o = arguments[1], i = 0; i < r; i++)
								if (e = n[i], t.call(o, e, i, n)) return e
						}
					}), document.addEventListener("DOMContentLoaded", function () {
						document.execCommand("enableObjectResizing", !1, !1), document.execCommand("autoUrlDetect", !1, !1)
					})
				}, function (t, e) {
					function n(t, e, n) {
						if (t == e) return t ? [
							[b, t]
						] : [];
						(n < 0 || t.length < n) && (n = null);
						var o = l(t, e),
							i = t.substring(0, o);
						t = t.substring(o), e = e.substring(o), o = a(t, e);
						var s = t.substring(t.length - o);
						t = t.substring(0, t.length - o), e = e.substring(0, e.length - o);
						var c = r(t, e);
						return i && c.unshift([b, i]), s && c.push([b, s]), u(c), null != n && (c = f(c, n)), c = d(c)
					}

					function r(t, e) {
						var r;
						if (!t) return [
							[y, e]
						];
						if (!e) return [
							[h, t]
						];
						var i = t.length > e.length ? t : e,
							l = t.length > e.length ? e : t,
							a = i.indexOf(l);
						if (-1 != a) return r = [
							[y, i.substring(0, a)],
							[b, l],
							[y, i.substring(a + l.length)]
						], t.length > e.length && (r[0][0] = r[2][0] = h), r;
						if (1 == l.length) return [
							[h, t],
							[y, e]
						];
						var u = s(t, e);
						if (u) {
							var c = u[0],
								f = u[1],
								d = u[2],
								p = u[3],
								v = u[4],
								g = n(c, d),
								m = n(f, p);
							return g.concat([
								[b, v]
							], m)
						}
						return o(t, e)
					}

					function o(t, e) {
						for (var n = t.length, r = e.length, o = Math.ceil((n + r) / 2), l = o, a = 2 * o, s = new Array(a), u =
								new Array(a), c = 0; c < a; c++) s[c] = -1, u[c] = -1;
						s[l + 1] = 0, u[l + 1] = 0;
						for (var f = n - r, d = f % 2 != 0, p = 0, b = 0, v = 0, g = 0, m = 0; m < o; m++) {
							for (var q = -m + p; q <= m - b; q += 2) {
								var _, w = l + q;
								_ = q == -m || q != m && s[w - 1] < s[w + 1] ? s[w + 1] : s[w - 1] + 1;
								for (var k = _ - q; _ < n && k < r && t.charAt(_) == e.charAt(k);) _++, k++;
								if (s[w] = _, _ > n) b += 2;
								else if (k > r) p += 2;
								else if (d) {
									var O = l + f - q;
									if (O >= 0 && O < a && -1 != u[O]) {
										var x = n - u[O];
										if (_ >= x) return i(t, e, _, k)
									}
								}
							}
							for (var E = -m + v; E <= m - g; E += 2) {
								var x, O = l + E;
								x = E == -m || E != m && u[O - 1] < u[O + 1] ? u[O + 1] : u[O - 1] + 1;
								for (var A = x - E; x < n && A < r && t.charAt(n - x - 1) == e.charAt(r - A - 1);) x++, A++;
								if (u[O] = x, x > n) g += 2;
								else if (A > r) v += 2;
								else if (!d) {
									var w = l + f - E;
									if (w >= 0 && w < a && -1 != s[w]) {
										var _ = s[w],
											k = l + _ - w;
										if (x = n - x, _ >= x) return i(t, e, _, k)
									}
								}
							}
						}
						return [
							[h, t],
							[y, e]
						]
					}

					function i(t, e, r, o) {
						var i = t.substring(0, r),
							l = e.substring(0, o),
							a = t.substring(r),
							s = e.substring(o),
							u = n(i, l),
							c = n(a, s);
						return u.concat(c)
					}

					function l(t, e) {
						if (!t || !e || t.charAt(0) != e.charAt(0)) return 0;
						for (var n = 0, r = Math.min(t.length, e.length), o = r, i = 0; n < o;) t.substring(i, o) == e.substring(
							i, o) ? (n = o, i = n) : r = o, o = Math.floor((r - n) / 2 + n);
						return o
					}

					function a(t, e) {
						if (!t || !e || t.charAt(t.length - 1) != e.charAt(e.length - 1)) return 0;
						for (var n = 0, r = Math.min(t.length, e.length), o = r, i = 0; n < o;) t.substring(t.length - o, t.length -
							i) == e.substring(e.length - o, e.length - i) ? (n = o, i = n) : r = o, o = Math.floor((r - n) / 2 + n);
						return o
					}

					function s(t, e) {
						function n(t, e, n) {
							for (var r, o, i, s, u = t.substring(n, n + Math.floor(t.length / 4)), c = -1, f = ""; - 1 != (c = e.indexOf(
									u, c + 1));) {
								var d = l(t.substring(n), e.substring(c)),
									p = a(t.substring(0, n), e.substring(0, c));
								f.length < p + d && (f = e.substring(c - p, c) + e.substring(c, c + d), r = t.substring(0, n - p), o =
									t.substring(n + d), i = e.substring(0, c - p), s = e.substring(c + d))
							}
							return 2 * f.length >= t.length ? [r, o, i, s, f] : null
						}
						var r = t.length > e.length ? t : e,
							o = t.length > e.length ? e : t;
						if (r.length < 4 || 2 * o.length < r.length) return null;
						var i, s = n(r, o, Math.ceil(r.length / 4)),
							u = n(r, o, Math.ceil(r.length / 2));
						if (!s && !u) return null;
						i = u ? s && s[4].length > u[4].length ? s : u : s;
						var c, f, d, p;
						return t.length > e.length ? (c = i[0], f = i[1], d = i[2], p = i[3]) : (d = i[0], p = i[1], c = i[2], f =
							i[3]), [c, f, d, p, i[4]]
					}

					function u(t) {
						t.push([b, ""]);
						for (var e, n = 0, r = 0, o = 0, i = "", s = ""; n < t.length;) switch (t[n][0]) {
							case y:
								o++, s += t[n][1], n++;
								break;
							case h:
								r++, i += t[n][1], n++;
								break;
							case b:
								r + o > 1 ? (0 !== r && 0 !== o && (e = l(s, i), 0 !== e && (n - r - o > 0 && t[n - r - o - 1][0] ==
									b ? t[n - r - o - 1][1] += s.substring(0, e) : (t.splice(0, 0, [b, s.substring(0, e)]), n++), s =
									s.substring(e), i = i.substring(e)), 0 !== (e = a(s, i)) && (t[n][1] = s.substring(s.length - e) +
									t[n][1], s = s.substring(0, s.length - e), i = i.substring(0, i.length - e))), 0 === r ? t.splice(
									n - o, r + o, [y, s]) : 0 === o ? t.splice(n - r, r + o, [h, i]) : t.splice(n - r - o, r + o, [h,
									i
								], [y, s]), n = n - r - o + (r ? 1 : 0) + (o ? 1 : 0) + 1) : 0 !== n && t[n - 1][0] == b ? (t[n - 1]
									[1] += t[n][1], t.splice(n, 1)) : n++, o = 0, r = 0, i = "", s = ""
						}
						"" === t[t.length - 1][1] && t.pop();
						var c = !1;
						for (n = 1; n < t.length - 1;) t[n - 1][0] == b && t[n + 1][0] == b && (t[n][1].substring(t[n][1].length -
							t[n - 1][1].length) == t[n - 1][1] ? (t[n][1] = t[n - 1][1] + t[n][1].substring(0, t[n][1].length - t[
							n - 1][1].length), t[n + 1][1] = t[n - 1][1] + t[n + 1][1], t.splice(n - 1, 1), c = !0) : t[n][1].substring(
							0, t[n + 1][1].length) == t[n + 1][1] && (t[n - 1][1] += t[n + 1][1], t[n][1] = t[n][1].substring(t[n +
							1][1].length) + t[n + 1][1], t.splice(n + 1, 1), c = !0)), n++;
						c && u(t)
					}

					function c(t, e) {
						if (0 === e) return [b, t];
						for (var n = 0, r = 0; r < t.length; r++) {
							var o = t[r];
							if (o[0] === h || o[0] === b) {
								var i = n + o[1].length;
								if (e === i) return [r + 1, t];
								if (e < i) {
									t = t.slice();
									var l = e - n,
										a = [o[0], o[1].slice(0, l)],
										s = [o[0], o[1].slice(l)];
									return t.splice(r, 1, a, s), [r + 1, t]
								}
								n = i
							}
						}
						throw new Error("cursor_pos is out of bounds!")
					}

					function f(t, e) {
						var n = c(t, e),
							r = n[1],
							o = n[0],
							i = r[o],
							l = r[o + 1];
						if (null == i) return t;
						if (i[0] !== b) return t;
						if (null != l && i[1] + l[1] === l[1] + i[1]) return r.splice(o, 2, l, i), p(r, o, 2);
						if (null != l && 0 === l[1].indexOf(i[1])) {
							r.splice(o, 2, [l[0], i[1]], [0, i[1]]);
							var a = l[1].slice(i[1].length);
							return a.length > 0 && r.splice(o + 2, 0, [l[0], a]), p(r, o, 3)
						}
						return t
					}

					function d(t) {
						for (var e = !1, n = function (t) {
								return t.charCodeAt(0) >= 56320 && t.charCodeAt(0) <= 57343
							}, r = 2; r < t.length; r += 1) t[r - 2][0] === b && function (t) {
							return t.charCodeAt(t.length - 1) >= 55296 && t.charCodeAt(t.length - 1) <= 56319
						}(t[r - 2][1]) && t[r - 1][0] === h && n(t[r - 1][1]) && t[r][0] === y && n(t[r][1]) && (e = !0, t[r -
								1][1] = t[r - 2][1].slice(-1) + t[r - 1][1], t[r][1] = t[r - 2][1].slice(-1) + t[r][1], t[r - 2][1] =
							t[r - 2][1].slice(0, -1));
						if (!e) return t;
						for (var o = [], r = 0; r < t.length; r += 1) t[r][1].length > 0 && o.push(t[r]);
						return o
					}

					function p(t, e, n) {
						for (var r = e + n - 1; r >= 0 && r >= e - 1; r--)
							if (r + 1 < t.length) {
								var o = t[r],
									i = t[r + 1];
								o[0] === i[1] && t.splice(r, 2, [o[0], o[1] + i[1]])
							}
						return t
					}
					var h = -1,
						y = 1,
						b = 0,
						v = n;
					v.INSERT = y, v.DELETE = h, v.EQUAL = b, t.exports = v
				}, function (t, e) {
					function n(t) {
						var e = [];
						for (var n in t) e.push(n);
						return e
					}
					e = t.exports = "function" == typeof Object.keys ? Object.keys : n, e.shim = n
				}, function (t, e) {
					function n(t) {
						return "[object Arguments]" == Object.prototype.toString.call(t)
					}

					function r(t) {
						return t && "object" == typeof t && "number" == typeof t.length && Object.prototype.hasOwnProperty.call(
							t, "callee") && !Object.prototype.propertyIsEnumerable.call(t, "callee") || !1
					}
					var o = "[object Arguments]" == function () {
						return Object.prototype.toString.call(arguments)
					}();
					e = t.exports = o ? n : r, e.supported = n, e.unsupported = r
				}, function (t, e) {
					"use strict";

					function n() {}

					function r(t, e, n) {
						this.fn = t, this.context = e, this.once = n || !1
					}

					function o() {
						this._events = new n, this._eventsCount = 0
					}
					var i = Object.prototype.hasOwnProperty,
						l = "~";
					Object.create && (n.prototype = Object.create(null), (new n).__proto__ || (l = !1)), o.prototype.eventNames =
						function () {
							var t, e, n = [];
							if (0 === this._eventsCount) return n;
							for (e in t = this._events) i.call(t, e) && n.push(l ? e.slice(1) : e);
							return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n
						}, o.prototype.listeners = function (t, e) {
							var n = l ? l + t : t,
								r = this._events[n];
							if (e) return !!r;
							if (!r) return [];
							if (r.fn) return [r.fn];
							for (var o = 0, i = r.length, a = new Array(i); o < i; o++) a[o] = r[o].fn;
							return a
						}, o.prototype.emit = function (t, e, n, r, o, i) {
							var a = l ? l + t : t;
							if (!this._events[a]) return !1;
							var s, u, c = this._events[a],
								f = arguments.length;
							if (c.fn) {
								switch (c.once && this.removeListener(t, c.fn, void 0, !0), f) {
									case 1:
										return c.fn.call(c.context), !0;
									case 2:
										return c.fn.call(c.context, e), !0;
									case 3:
										return c.fn.call(c.context, e, n), !0;
									case 4:
										return c.fn.call(c.context, e, n, r), !0;
									case 5:
										return c.fn.call(c.context, e, n, r, o), !0;
									case 6:
										return c.fn.call(c.context, e, n, r, o, i), !0
								}
								for (u = 1, s = new Array(f - 1); u < f; u++) s[u - 1] = arguments[u];
								c.fn.apply(c.context, s)
							} else {
								var d, p = c.length;
								for (u = 0; u < p; u++) switch (c[u].once && this.removeListener(t, c[u].fn, void 0, !0), f) {
									case 1:
										c[u].fn.call(c[u].context);
										break;
									case 2:
										c[u].fn.call(c[u].context, e);
										break;
									case 3:
										c[u].fn.call(c[u].context, e, n);
										break;
									case 4:
										c[u].fn.call(c[u].context, e, n, r);
										break;
									default:
										if (!s)
											for (d = 1, s = new Array(f - 1); d < f; d++) s[d - 1] = arguments[d];
										c[u].fn.apply(c[u].context, s)
								}
							}
							return !0
						}, o.prototype.on = function (t, e, n) {
							var o = new r(e, n || this),
								i = l ? l + t : t;
							return this._events[i] ? this._events[i].fn ? this._events[i] = [this._events[i], o] : this._events[i].push(
								o) : (this._events[i] = o, this._eventsCount++), this
						}, o.prototype.once = function (t, e, n) {
							var o = new r(e, n || this, !0),
								i = l ? l + t : t;
							return this._events[i] ? this._events[i].fn ? this._events[i] = [this._events[i], o] : this._events[i].push(
								o) : (this._events[i] = o, this._eventsCount++), this
						}, o.prototype.removeListener = function (t, e, r, o) {
							var i = l ? l + t : t;
							if (!this._events[i]) return this;
							if (!e) return 0 == --this._eventsCount ? this._events = new n : delete this._events[i], this;
							var a = this._events[i];
							if (a.fn) a.fn !== e || o && !a.once || r && a.context !== r || (0 == --this._eventsCount ? this._events =
								new n : delete this._events[i]);
							else {
								for (var s = 0, u = [], c = a.length; s < c; s++)(a[s].fn !== e || o && !a[s].once || r && a[s].context !==
									r) && u.push(a[s]);
								u.length ? this._events[i] = 1 === u.length ? u[0] : u : 0 == --this._eventsCount ? this._events = new n :
									delete this._events[i]
							}
							return this
						}, o.prototype.removeAllListeners = function (t) {
							var e;
							return t ? (e = l ? l + t : t, this._events[e] && (0 == --this._eventsCount ? this._events = new n :
								delete this._events[e])) : (this._events = new n, this._eventsCount = 0), this
						}, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prototype.setMaxListeners =
						function () {
							return this
						}, o.prefixed = l, o.EventEmitter = o, void 0 !== t && (t.exports = o)
				}, function (t, e, n) {
					"use strict";

					function r(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}

					function o(t, e, n) {
						return e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n, t
					}

					function i(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function l(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function a(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}

					function s(t, e, n) {
						return "object" === (void 0 === e ? "undefined" : k(e)) ? Object.keys(e).reduce(function (t, n) {
							return s(t, n, e[n])
						}, t) : t.reduce(function (t, r) {
							return r.attributes && r.attributes[e] ? t.push(r) : t.insert(r.insert, (0, A.default)({}, o({}, e, n),
								r.attributes))
						}, new N.default)
					}

					function u(t) {
						if (t.nodeType !== Node.ELEMENT_NODE) return {};
						return t["__ql-computed-style"] || (t["__ql-computed-style"] = window.getComputedStyle(t))
					}

					function c(t, e) {
						for (var n = "", r = t.ops.length - 1; r >= 0 && n.length < e.length; --r) {
							var o = t.ops[r];
							if ("string" != typeof o.insert) break;
							n = o.insert + n
						}
						return n.slice(-1 * e.length) === e
					}

					function f(t) {
						return 0 !== t.childNodes.length && ["block", "list-item"].indexOf(u(t).display) > -1
					}

					function d(t, e, n) {
						return t.nodeType === t.TEXT_NODE ? n.reduce(function (e, n) {
							return n(t, e)
						}, new N.default) : t.nodeType === t.ELEMENT_NODE ? [].reduce.call(t.childNodes || [], function (r, o) {
							var i = d(o, e, n);
							return o.nodeType === t.ELEMENT_NODE && (i = e.reduce(function (t, e) {
								return e(o, t)
							}, i), i = (o[W] || []).reduce(function (t, e) {
								return e(o, t)
							}, i)), r.concat(i)
						}, new N.default) : new N.default
					}

					function p(t, e, n) {
						return s(n, t, !0)
					}

					function h(t, e) {
						var n = S.default.Attributor.Attribute.keys(t),
							r = S.default.Attributor.Class.keys(t),
							o = S.default.Attributor.Style.keys(t),
							i = {};
						return n.concat(r).concat(o).forEach(function (e) {
							var n = S.default.query(e, S.default.Scope.ATTRIBUTE);
							null != n && (i[n.attrName] = n.value(t), i[n.attrName]) || (n = G[e], null == n || n.attrName !== e &&
								n.keyName !== e || (i[n.attrName] = n.value(t) || void 0), null == (n = $[e]) || n.attrName !== e &&
								n.keyName !== e || (n = $[e], i[n.attrName] = n.value(t) || void 0))
						}), Object.keys(i).length > 0 && (e = s(e, i)), e
					}

					function y(t, e) {
						var n = S.default.query(t);
						if (null == n) return e;
						if (n.prototype instanceof S.default.Embed) {
							var r = {},
								o = n.value(t);
							null != o && (r[n.blotName] = o, e = (new N.default).insert(r, n.formats(t)))
						} else "function" == typeof n.formats && (e = s(e, n.blotName, n.formats(t)));
						return e
					}

					function b(t, e) {
						return c(e, "\n") || e.insert("\n"), e
					}

					function v() {
						return new N.default
					}

					function g(t, e) {
						var n = S.default.query(t);
						if (null == n || "list-item" !== n.blotName || !c(e, "\n")) return e;
						for (var r = -1, o = t.parentNode; !o.classList.contains("ql-clipboard");) "list" === (S.default.query(o) ||
							{}).blotName && (r += 1), o = o.parentNode;
						return r <= 0 ? e : e.compose((new N.default).retain(e.length() - 1).retain(1, {
							indent: r
						}))
					}

					function m(t, e) {
						return c(e, "\n") || (f(t) || e.length() > 0 && t.nextSibling && f(t.nextSibling)) && e.insert("\n"), e
					}

					function q(t, e) {
						if (f(t) && null != t.nextElementSibling && !c(e, "\n\n")) {
							var n = t.offsetHeight + parseFloat(u(t).marginTop) + parseFloat(u(t).marginBottom);
							t.nextElementSibling.offsetTop > t.offsetTop + 1.5 * n && e.insert("\n")
						}
						return e
					}

					function _(t, e) {
						var n = {},
							r = t.style || {};
						return r.fontStyle && "italic" === u(t).fontStyle && (n.italic = !0), r.fontWeight && (u(t).fontWeight.startsWith(
							"bold") || parseInt(u(t).fontWeight) >= 700) && (n.bold = !0), Object.keys(n).length > 0 && (e = s(e,
							n)), parseFloat(r.textIndent || 0) > 0 && (e = (new N.default).insert("\t").concat(e)), e
					}

					function w(t, e) {
						var n = t.data;
						if ("O:P" === t.parentNode.tagName) return e.insert(n.trim());
						if (0 === n.trim().length && t.parentNode.classList.contains("ql-clipboard")) return e;
						if (!u(t.parentNode).whiteSpace.startsWith("pre")) {
							var r = function (t, e) {
								return e = e.replace(/[^\u00a0]/g, ""), e.length < 1 && t ? " " : e
							};
							n = n.replace(/\r\n/g, " ").replace(/\n/g, " "), n = n.replace(/\s\s+/g, r.bind(r, !0)), (null == t.previousSibling &&
									f(t.parentNode) || null != t.previousSibling && f(t.previousSibling)) && (n = n.replace(/^\s+/, r.bind(
									r, !1))), (null == t.nextSibling && f(t.parentNode) || null != t.nextSibling && f(t.nextSibling)) &&
								(n = n.replace(/\s+$/, r.bind(r, !1)))
						}
						return e.insert(n)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					}), e.matchText = e.matchSpacing = e.matchNewline = e.matchBlot = e.matchAttributor = e.default = void 0;
					var k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
							return typeof t
						} : function (t) {
							return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ?
								"symbol" : typeof t
						},
						O = function () {
							function t(t, e) {
								var n = [],
									r = !0,
									o = !1,
									i = void 0;
								try {
									for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !==
											e); r = !0);
								} catch (t) {
									o = !0, i = t
								} finally {
									try {
										!r && a.return && a.return()
									} finally {
										if (o) throw i
									}
								}
								return n
							}
							return function (e, n) {
								if (Array.isArray(e)) return e;
								if (Symbol.iterator in Object(e)) return t(e, n);
								throw new TypeError("Invalid attempt to destructure non-iterable instance")
							}
						}(),
						x = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						E = n(3),
						A = r(E),
						j = n(2),
						N = r(j),
						T = n(0),
						S = r(T),
						P = n(5),
						C = r(P),
						L = n(10),
						R = r(L),
						M = n(9),
						I = r(M),
						B = n(36),
						D = n(37),
						U = n(13),
						z = r(U),
						F = n(26),
						H = n(38),
						K = n(39),
						Y = n(40),
						V = (0, R.default)("quill:clipboard"),
						W = "__ql-matcher",
						Z = [
							[Node.TEXT_NODE, w],
							[Node.TEXT_NODE, m],
							["br", b],
							[Node.ELEMENT_NODE, m],
							[Node.ELEMENT_NODE, y],
							[Node.ELEMENT_NODE, q],
							[Node.ELEMENT_NODE, h],
							[Node.ELEMENT_NODE, _],
							["li", g],
							["b", p.bind(p, "bold")],
							["i", p.bind(p, "italic")],
							["style", v]
						],
						G = [B.AlignAttribute, H.DirectionAttribute].reduce(function (t, e) {
							return t[e.keyName] = e, t
						}, {}),
						$ = [B.AlignStyle, D.BackgroundStyle, F.ColorStyle, H.DirectionStyle, K.FontStyle, Y.SizeStyle].reduce(
							function (t, e) {
								return t[e.keyName] = e, t
							}, {}),
						X = function (t) {
							function e(t, n) {
								i(this, e);
								var r = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
								return r.quill.root.addEventListener("paste", r.onPaste.bind(r)), r.container = r.quill.addContainer(
									"ql-clipboard"), r.container.setAttribute("contenteditable", !0), r.container.setAttribute(
									"tabindex", -1), r.matchers = [], Z.concat(r.options.matchers).forEach(function (t) {
									var e = O(t, 2),
										o = e[0],
										i = e[1];
									(n.matchVisual || i !== q) && r.addMatcher(o, i)
								}), r
							}
							return a(e, t), x(e, [{
								key: "addMatcher",
								value: function (t, e) {
									this.matchers.push([t, e])
								}
							}, {
								key: "convert",
								value: function (t) {
									if ("string" == typeof t) return this.container.innerHTML = t.replace(/\>\r?\n +\</g, "><"), this
										.convert();
									var e = this.quill.getFormat(this.quill.selection.savedRange.index);
									if (e[z.default.blotName]) {
										var n = this.container.innerText;
										return this.container.innerHTML = "", (new N.default).insert(n, o({}, z.default.blotName, e[z.default
											.blotName]))
									}
									var r = this.prepareMatching(),
										i = O(r, 2),
										l = i[0],
										a = i[1],
										s = d(this.container, l, a);
									return c(s, "\n") && null == s.ops[s.ops.length - 1].attributes && (s = s.compose((new N.default)
											.retain(s.length() - 1).delete(1))), V.log("convert", this.container.innerHTML, s), this.container
										.innerHTML = "", s
								}
							}, {
								key: "dangerouslyPasteHTML",
								value: function (t, e) {
									var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C.default.sources.API;
									if ("string" == typeof t) this.quill.setContents(this.convert(t), e), this.quill.setSelection(0,
										C.default.sources.SILENT);
									else {
										var r = this.convert(e);
										this.quill.updateContents((new N.default).retain(t).concat(r), n), this.quill.setSelection(t + r
											.length(), C.default.sources.SILENT)
									}
								}
							}, {
								key: "onPaste",
								value: function (t) {
									var e = this;
									if (!t.defaultPrevented && this.quill.isEnabled()) {
										var n = this.quill.getSelection(),
											r = (new N.default).retain(n.index),
											o = this.quill.scrollingContainer.scrollTop;
										this.container.focus(), this.quill.selection.update(C.default.sources.SILENT), setTimeout(
											function () {
												r = r.concat(e.convert()).delete(n.length), e.quill.updateContents(r, C.default.sources.USER),
													e.quill.setSelection(r.length() - n.length, C.default.sources.SILENT), e.quill.scrollingContainer
													.scrollTop = o, e.quill.focus()
											}, 1)
									}
								}
							}, {
								key: "prepareMatching",
								value: function () {
									var t = this,
										e = [],
										n = [];
									return this.matchers.forEach(function (r) {
										var o = O(r, 2),
											i = o[0],
											l = o[1];
										switch (i) {
											case Node.TEXT_NODE:
												n.push(l);
												break;
											case Node.ELEMENT_NODE:
												e.push(l);
												break;
											default:
												[].forEach.call(t.container.querySelectorAll(i), function (t) {
													t[W] = t[W] || [], t[W].push(l)
												})
										}
									}), [e, n]
								}
							}]), e
						}(I.default);
					X.DEFAULTS = {
							matchers: [],
							matchVisual: !0
						}, e.default = X, e.matchAttributor = h, e.matchBlot = y, e.matchNewline = m, e.matchSpacing = q, e.matchText =
						w
				}, function (t, e, n) {
					"use strict";

					function r(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function o(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function i(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var l = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						a = function t(e, n, r) {
							null === e && (e = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(e, n);
							if (void 0 === o) {
								var i = Object.getPrototypeOf(e);
								return null === i ? void 0 : t(i, n, r)
							}
							if ("value" in o) return o.value;
							var l = o.get;
							if (void 0 !== l) return l.call(r)
						},
						s = n(6),
						u = function (t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}(s),
						c = function (t) {
							function e() {
								return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
							}
							return i(e, t), l(e, [{
								key: "optimize",
								value: function (t) {
									a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t),
										this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName)
								}
							}], [{
								key: "create",
								value: function () {
									return a(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this)
								}
							}, {
								key: "formats",
								value: function () {
									return !0
								}
							}]), e
						}(u.default);
					c.blotName = "bold", c.tagName = ["STRONG", "B"], e.default = c
				}, function (t, e, n) {
					"use strict";

					function r(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}

					function o(t, e, n) {
						return e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n, t
					}

					function i(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function l(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function a(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}

					function s(t, e, n) {
						var r = document.createElement("button");
						r.setAttribute("type", "button"), r.classList.add("ql-" + e), null != n && (r.value = n), t.appendChild(
							r)
					}

					function u(t, e) {
						Array.isArray(e[0]) || (e = [e]), e.forEach(function (e) {
							var n = document.createElement("span");
							n.classList.add("ql-formats"), e.forEach(function (t) {
								if ("string" == typeof t) s(n, t);
								else {
									var e = Object.keys(t)[0],
										r = t[e];
									Array.isArray(r) ? c(n, e, r) : s(n, e, r)
								}
							}), t.appendChild(n)
						})
					}

					function c(t, e, n) {
						var r = document.createElement("select");
						r.classList.add("ql-" + e), n.forEach(function (t) {
							var e = document.createElement("option");
							!1 !== t ? e.setAttribute("value", t) : e.setAttribute("selected", "selected"), r.appendChild(e)
						}), t.appendChild(r)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					}), e.addControls = e.default = void 0;
					var f = function () {
							function t(t, e) {
								var n = [],
									r = !0,
									o = !1,
									i = void 0;
								try {
									for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !==
											e); r = !0);
								} catch (t) {
									o = !0, i = t
								} finally {
									try {
										!r && a.return && a.return()
									} finally {
										if (o) throw i
									}
								}
								return n
							}
							return function (e, n) {
								if (Array.isArray(e)) return e;
								if (Symbol.iterator in Object(e)) return t(e, n);
								throw new TypeError("Invalid attempt to destructure non-iterable instance")
							}
						}(),
						d = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						p = n(2),
						h = r(p),
						y = n(0),
						b = r(y),
						v = n(5),
						g = r(v),
						m = n(10),
						q = r(m),
						_ = n(9),
						w = r(_),
						k = (0, q.default)("quill:toolbar"),
						O = function (t) {
							function e(t, n) {
								i(this, e);
								var r = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
								if (Array.isArray(r.options.container)) {
									var o = document.createElement("div");
									u(o, r.options.container), t.container.parentNode.insertBefore(o, t.container), r.container = o
								} else "string" == typeof r.options.container ? r.container = document.querySelector(r.options.container) :
									r.container = r.options.container;
								if (!(r.container instanceof HTMLElement)) {
									var a;
									return a = k.error("Container required for toolbar", r.options), l(r, a)
								}
								return r.container.classList.add("ql-toolbar"), r.controls = [], r.handlers = {}, Object.keys(r.options
									.handlers).forEach(function (t) {
									r.addHandler(t, r.options.handlers[t])
								}), [].forEach.call(r.container.querySelectorAll("button, select"), function (t) {
									r.attach(t)
								}), r.quill.on(g.default.events.EDITOR_CHANGE, function (t, e) {
									t === g.default.events.SELECTION_CHANGE && r.update(e)
								}), r.quill.on(g.default.events.SCROLL_OPTIMIZE, function () {
									var t = r.quill.selection.getRange(),
										e = f(t, 1),
										n = e[0];
									r.update(n)
								}), r
							}
							return a(e, t), d(e, [{
								key: "addHandler",
								value: function (t, e) {
									this.handlers[t] = e
								}
							}, {
								key: "attach",
								value: function (t) {
									var e = this,
										n = [].find.call(t.classList, function (t) {
											return 0 === t.indexOf("ql-")
										});
									if (n) {
										if (n = n.slice("ql-".length), "BUTTON" === t.tagName && t.setAttribute("type", "button"), null ==
											this.handlers[n]) {
											if (null != this.quill.scroll.whitelist && null == this.quill.scroll.whitelist[n]) return void k
												.warn("ignoring attaching to disabled format", n, t);
											if (null == b.default.query(n)) return void k.warn("ignoring attaching to nonexistent format",
												n, t)
										}
										var r = "SELECT" === t.tagName ? "change" : "click";
										t.addEventListener(r, function (r) {
											var i = void 0;
											if ("SELECT" === t.tagName) {
												if (t.selectedIndex < 0) return;
												var l = t.options[t.selectedIndex];
												i = !l.hasAttribute("selected") && (l.value || !1)
											} else i = !t.classList.contains("ql-active") && (t.value || !t.hasAttribute("value")), r.preventDefault();
											e.quill.focus();
											var a = e.quill.selection.getRange(),
												s = f(a, 1),
												u = s[0];
											if (null != e.handlers[n]) e.handlers[n].call(e, i);
											else if (b.default.query(n).prototype instanceof b.default.Embed) {
												if (!(i = prompt("Enter " + n))) return;
												e.quill.updateContents((new h.default).retain(u.index).delete(u.length).insert(o({}, n, i)),
													g.default.sources.USER)
											} else e.quill.format(n, i, g.default.sources.USER);
											e.update(u)
										}), this.controls.push([n, t])
									}
								}
							}, {
								key: "update",
								value: function (t) {
									var e = null == t ? {} : this.quill.getFormat(t);
									this.controls.forEach(function (n) {
										var r = f(n, 2),
											o = r[0],
											i = r[1];
										if ("SELECT" === i.tagName) {
											var l = void 0;
											if (null == t) l = null;
											else if (null == e[o]) l = i.querySelector("option[selected]");
											else if (!Array.isArray(e[o])) {
												var a = e[o];
												"string" == typeof a && (a = a.replace(/\"/g, '\\"')), l = i.querySelector('option[value="' +
													a + '"]')
											}
											null == l ? (i.value = "", i.selectedIndex = -1) : l.selected = !0
										} else if (null == t) i.classList.remove("ql-active");
										else if (i.hasAttribute("value")) {
											var s = e[o] === i.getAttribute("value") || null != e[o] && e[o].toString() === i.getAttribute(
												"value") || null == e[o] && !i.getAttribute("value");
											i.classList.toggle("ql-active", s)
										} else i.classList.toggle("ql-active", null != e[o])
									})
								}
							}]), e
						}(w.default);
					O.DEFAULTS = {}, O.DEFAULTS = {
						container: null,
						handlers: {
							clean: function () {
								var t = this,
									e = this.quill.getSelection();
								if (null != e)
									if (0 == e.length) {
										var n = this.quill.getFormat();
										Object.keys(n).forEach(function (e) {
											null != b.default.query(e, b.default.Scope.INLINE) && t.quill.format(e, !1)
										})
									} else this.quill.removeFormat(e, g.default.sources.USER)
							},
							direction: function (t) {
								var e = this.quill.getFormat().align;
								"rtl" === t && null == e ? this.quill.format("align", "right", g.default.sources.USER) : t ||
									"right" !== e || this.quill.format("align", !1, g.default.sources.USER), this.quill.format(
										"direction", t, g.default.sources.USER)
							},
							indent: function (t) {
								var e = this.quill.getSelection(),
									n = this.quill.getFormat(e),
									r = parseInt(n.indent || 0);
								if ("+1" === t || "-1" === t) {
									var o = "+1" === t ? 1 : -1;
									"rtl" === n.direction && (o *= -1), this.quill.format("indent", r + o, g.default.sources.USER)
								}
							},
							link: function (t) {
								!0 === t && (t = prompt("Enter link URL:")), this.quill.format("link", t, g.default.sources.USER)
							},
							list: function (t) {
								var e = this.quill.getSelection(),
									n = this.quill.getFormat(e);
								"check" === t ? "checked" === n.list || "unchecked" === n.list ? this.quill.format("list", !1, g.default
									.sources.USER) : this.quill.format("list", "unchecked", g.default.sources.USER) : this.quill.format(
									"list", t, g.default.sources.USER)
							}
						}
					}, e.default = O, e.addControls = u
				}, function (t, e) {
					t.exports =
						'<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>'
				}, function (t, e, n) {
					"use strict";

					function r(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function o(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function i(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var l = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						a = function t(e, n, r) {
							null === e && (e = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(e, n);
							if (void 0 === o) {
								var i = Object.getPrototypeOf(e);
								return null === i ? void 0 : t(i, n, r)
							}
							if ("value" in o) return o.value;
							var l = o.get;
							if (void 0 !== l) return l.call(r)
						},
						s = n(28),
						u = function (t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}(s),
						c = function (t) {
							function e(t, n) {
								r(this, e);
								var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
								return i.label.innerHTML = n, i.container.classList.add("ql-color-picker"), [].slice.call(i.container.querySelectorAll(
									".ql-picker-item"), 0, 7).forEach(function (t) {
									t.classList.add("ql-primary")
								}), i
							}
							return i(e, t), l(e, [{
								key: "buildItem",
								value: function (t) {
									var n = a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "buildItem", this).call(
										this, t);
									return n.style.backgroundColor = t.getAttribute("value") || "", n
								}
							}, {
								key: "selectItem",
								value: function (t, n) {
									a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "selectItem", this).call(this, t,
										n);
									var r = this.label.querySelector(".ql-color-label"),
										o = t ? t.getAttribute("data-value") || "" : "";
									r && ("line" === r.tagName ? r.style.stroke = o : r.style.fill = o)
								}
							}]), e
						}(u.default);
					e.default = c
				}, function (t, e, n) {
					"use strict";

					function r(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function o(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function i(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var l = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						a = function t(e, n, r) {
							null === e && (e = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(e, n);
							if (void 0 === o) {
								var i = Object.getPrototypeOf(e);
								return null === i ? void 0 : t(i, n, r)
							}
							if ("value" in o) return o.value;
							var l = o.get;
							if (void 0 !== l) return l.call(r)
						},
						s = n(28),
						u = function (t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}(s),
						c = function (t) {
							function e(t, n) {
								r(this, e);
								var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
								return i.container.classList.add("ql-icon-picker"), [].forEach.call(i.container.querySelectorAll(
									".ql-picker-item"), function (t) {
									t.innerHTML = n[t.getAttribute("data-value") || ""]
								}), i.defaultItem = i.container.querySelector(".ql-selected"), i.selectItem(i.defaultItem), i
							}
							return i(e, t), l(e, [{
								key: "selectItem",
								value: function (t, n) {
									a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "selectItem", this).call(this, t,
										n), t = t || this.defaultItem, this.label.innerHTML = t.innerHTML
								}
							}]), e
						}(u.default);
					e.default = c
				}, function (t, e, n) {
					"use strict";

					function r(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var o = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						i = function () {
							function t(e, n) {
								var o = this;
								r(this, t), this.quill = e, this.boundsContainer = n || document.body, this.root = e.addContainer(
										"ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, this.quill.root === this.quill.scrollingContainer &&
									this.quill.root.addEventListener("scroll", function () {
										o.root.style.marginTop = -1 * o.quill.root.scrollTop + "px"
									}), this.hide()
							}
							return o(t, [{
								key: "hide",
								value: function () {
									this.root.classList.add("ql-hidden")
								}
							}, {
								key: "position",
								value: function (t) {
									var e = t.left + t.width / 2 - this.root.offsetWidth / 2,
										n = t.bottom + this.quill.root.scrollTop;
									this.root.style.left = e + "px", this.root.style.top = n + "px", this.root.classList.remove(
										"ql-flip");
									var r = this.boundsContainer.getBoundingClientRect(),
										o = this.root.getBoundingClientRect(),
										i = 0;
									if (o.right > r.right && (i = r.right - o.right, this.root.style.left = e + i + "px"), o.left < r
										.left && (i = r.left - o.left, this.root.style.left = e + i + "px"), o.bottom > r.bottom) {
										var l = o.bottom - o.top,
											a = t.bottom - t.top + l;
										this.root.style.top = n - a + "px", this.root.classList.add("ql-flip")
									}
									return i
								}
							}, {
								key: "show",
								value: function () {
									this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden")
								}
							}]), t
						}();
					e.default = i
				}, function (t, e, n) {
					"use strict";

					function r(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}

					function o(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function i(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function l(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var a = function () {
							function t(t, e) {
								var n = [],
									r = !0,
									o = !1,
									i = void 0;
								try {
									for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !==
											e); r = !0);
								} catch (t) {
									o = !0, i = t
								} finally {
									try {
										!r && a.return && a.return()
									} finally {
										if (o) throw i
									}
								}
								return n
							}
							return function (e, n) {
								if (Array.isArray(e)) return e;
								if (Symbol.iterator in Object(e)) return t(e, n);
								throw new TypeError("Invalid attempt to destructure non-iterable instance")
							}
						}(),
						s = function t(e, n, r) {
							null === e && (e = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(e, n);
							if (void 0 === o) {
								var i = Object.getPrototypeOf(e);
								return null === i ? void 0 : t(i, n, r)
							}
							if ("value" in o) return o.value;
							var l = o.get;
							if (void 0 !== l) return l.call(r)
						},
						u = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						c = n(3),
						f = r(c),
						d = n(8),
						p = r(d),
						h = n(43),
						y = r(h),
						b = n(27),
						v = r(b),
						g = n(15),
						m = n(41),
						q = r(m),
						_ = [
							[{
								header: ["1", "2", "3", !1]
							}],
							["bold", "italic", "underline", "link"],
							[{
								list: "ordered"
							}, {
								list: "bullet"
							}],
							["clean"]
						],
						w = function (t) {
							function e(t, n) {
								o(this, e), null != n.modules.toolbar && null == n.modules.toolbar.container && (n.modules.toolbar.container =
									_);
								var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
								return r.quill.container.classList.add("ql-snow"), r
							}
							return l(e, t), u(e, [{
								key: "extendToolbar",
								value: function (t) {
									t.container.classList.add("ql-snow"), this.buildButtons([].slice.call(t.container.querySelectorAll(
										"button")), q.default), this.buildPickers([].slice.call(t.container.querySelectorAll("select")),
										q.default), this.tooltip = new k(this.quill, this.options.bounds), t.container.querySelector(
										".ql-link") && this.quill.keyboard.addBinding({
										key: "K",
										shortKey: !0
									}, function (e, n) {
										t.handlers.link.call(t, !n.format.link)
									})
								}
							}]), e
						}(y.default);
					w.DEFAULTS = (0, f.default)(!0, {}, y.default.DEFAULTS, {
						modules: {
							toolbar: {
								handlers: {
									link: function (t) {
										if (t) {
											var e = this.quill.getSelection();
											if (null == e || 0 == e.length) return;
											var n = this.quill.getText(e);
											/^\S+@\S+\.\S+$/.test(n) && 0 !== n.indexOf("mailto:") && (n = "mailto:" + n);
											this.quill.theme.tooltip.edit("link", n)
										} else this.quill.format("link", !1)
									}
								}
							}
						}
					});
					var k = function (t) {
						function e(t, n) {
							o(this, e);
							var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
							return r.preview = r.root.querySelector("a.ql-preview"), r
						}
						return l(e, t), u(e, [{
							key: "listen",
							value: function () {
								var t = this;
								s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "listen", this).call(this), this.root
									.querySelector("a.ql-action").addEventListener("click", function (e) {
										t.root.classList.contains("ql-editing") ? t.save() : t.edit("link", t.preview.textContent), e.preventDefault()
									}), this.root.querySelector("a.ql-remove").addEventListener("click", function (e) {
										if (null != t.linkRange) {
											var n = t.linkRange;
											t.restoreFocus(), t.quill.formatText(n, "link", !1, p.default.sources.USER), delete t.linkRange
										}
										e.preventDefault(), t.hide()
									}), this.quill.on(p.default.events.SELECTION_CHANGE, function (e, n, r) {
										if (null != e) {
											if (0 === e.length && r === p.default.sources.USER) {
												var o = t.quill.scroll.descendant(v.default, e.index),
													i = a(o, 2),
													l = i[0],
													s = i[1];
												if (null != l) {
													t.linkRange = new g.Range(e.index - s, l.length());
													var u = v.default.formats(l.domNode);
													return t.preview.textContent = u, t.preview.setAttribute("href", u), t.show(), void t.position(
														t.quill.getBounds(t.linkRange))
												}
											} else delete t.linkRange;
											t.hide()
										}
									})
							}
						}, {
							key: "show",
							value: function () {
								s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "show", this).call(this), this.root
									.removeAttribute("data-mode")
							}
						}]), e
					}(h.BaseTooltip);
					k.TEMPLATE = ['<a class="ql-preview" target="_blank" href="about:blank"></a>',
						'<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
						'<a class="ql-action"></a>', '<a class="ql-remove"></a>'
					].join(""), e.default = w
				}, function (t, e, n) {
					"use strict";

					function r(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var o = n(29),
						i = r(o),
						l = n(36),
						a = n(38),
						s = n(64),
						u = n(65),
						c = r(u),
						f = n(66),
						d = r(f),
						p = n(67),
						h = r(p),
						y = n(37),
						b = n(26),
						v = n(39),
						g = n(40),
						m = n(56),
						q = r(m),
						_ = n(68),
						w = r(_),
						k = n(27),
						O = r(k),
						x = n(69),
						E = r(x),
						A = n(70),
						j = r(A),
						N = n(71),
						T = r(N),
						S = n(72),
						P = r(S),
						C = n(73),
						L = r(C),
						R = n(13),
						M = r(R),
						I = n(74),
						B = r(I),
						D = n(75),
						U = r(D),
						z = n(57),
						F = r(z),
						H = n(41),
						K = r(H),
						Y = n(28),
						V = r(Y),
						W = n(59),
						Z = r(W),
						G = n(60),
						$ = r(G),
						X = n(61),
						Q = r(X),
						J = n(108),
						tt = r(J),
						et = n(62),
						nt = r(et);
					i.default.register({
						"attributors/attribute/direction": a.DirectionAttribute,
						"attributors/class/align": l.AlignClass,
						"attributors/class/background": y.BackgroundClass,
						"attributors/class/color": b.ColorClass,
						"attributors/class/direction": a.DirectionClass,
						"attributors/class/font": v.FontClass,
						"attributors/class/size": g.SizeClass,
						"attributors/style/align": l.AlignStyle,
						"attributors/style/background": y.BackgroundStyle,
						"attributors/style/color": b.ColorStyle,
						"attributors/style/direction": a.DirectionStyle,
						"attributors/style/font": v.FontStyle,
						"attributors/style/size": g.SizeStyle
					}, !0), i.default.register({
						"formats/align": l.AlignClass,
						"formats/direction": a.DirectionClass,
						"formats/indent": s.IndentClass,
						"formats/background": y.BackgroundStyle,
						"formats/color": b.ColorStyle,
						"formats/font": v.FontClass,
						"formats/size": g.SizeClass,
						"formats/blockquote": c.default,
						"formats/code-block": M.default,
						"formats/header": d.default,
						"formats/list": h.default,
						"formats/bold": q.default,
						"formats/code": R.Code,
						"formats/italic": w.default,
						"formats/link": O.default,
						"formats/script": E.default,
						"formats/strike": j.default,
						"formats/underline": T.default,
						"formats/image": P.default,
						"formats/video": L.default,
						"formats/list/item": p.ListItem,
						"modules/formula": B.default,
						"modules/syntax": U.default,
						"modules/toolbar": F.default,
						"themes/bubble": tt.default,
						"themes/snow": nt.default,
						"ui/icons": K.default,
						"ui/picker": V.default,
						"ui/icon-picker": $.default,
						"ui/color-picker": Z.default,
						"ui/tooltip": Q.default
					}, !0), e.default = i.default
				}, function (t, e, n) {
					"use strict";

					function r(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function o(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function i(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					}), e.IndentClass = void 0;
					var l = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						a = function t(e, n, r) {
							null === e && (e = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(e, n);
							if (void 0 === o) {
								var i = Object.getPrototypeOf(e);
								return null === i ? void 0 : t(i, n, r)
							}
							if ("value" in o) return o.value;
							var l = o.get;
							if (void 0 !== l) return l.call(r)
						},
						s = n(0),
						u = function (t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}(s),
						c = function (t) {
							function e() {
								return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
							}
							return i(e, t), l(e, [{
								key: "add",
								value: function (t, n) {
									if ("+1" === n || "-1" === n) {
										var r = this.value(t) || 0;
										n = "+1" === n ? r + 1 : r - 1
									}
									return 0 === n ? (this.remove(t), !0) : a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
										"add", this).call(this, t, n)
								}
							}, {
								key: "canAdd",
								value: function (t, n) {
									return a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "canAdd", this).call(this,
										t, n) || a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "canAdd", this).call(
										this, t, parseInt(n))
								}
							}, {
								key: "value",
								value: function (t) {
									return parseInt(a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this).call(
										this, t)) || void 0
								}
							}]), e
						}(u.default.Attributor.Class),
						f = new c("indent", "ql-indent", {
							scope: u.default.Scope.BLOCK,
							whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
						});
					e.IndentClass = f
				}, function (t, e, n) {
					"use strict";

					function r(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function o(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function i(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var l = n(4),
						a = function (t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}(l),
						s = function (t) {
							function e() {
								return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
							}
							return i(e, t), e
						}(a.default);
					s.blotName = "blockquote", s.tagName = "blockquote", e.default = s
				}, function (t, e, n) {
					"use strict";

					function r(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function o(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function i(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var l = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						a = n(4),
						s = function (t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}(a),
						u = function (t) {
							function e() {
								return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
							}
							return i(e, t), l(e, null, [{
								key: "formats",
								value: function (t) {
									return this.tagName.indexOf(t.tagName) + 1
								}
							}]), e
						}(s.default);
					u.blotName = "header", u.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"], e.default = u
				}, function (t, e, n) {
					"use strict";

					function r(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}

					function o(t, e, n) {
						return e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n, t
					}

					function i(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function l(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function a(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					}), e.default = e.ListItem = void 0;
					var s = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						u = function t(e, n, r) {
							null === e && (e = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(e, n);
							if (void 0 === o) {
								var i = Object.getPrototypeOf(e);
								return null === i ? void 0 : t(i, n, r)
							}
							if ("value" in o) return o.value;
							var l = o.get;
							if (void 0 !== l) return l.call(r)
						},
						c = n(0),
						f = r(c),
						d = n(4),
						p = r(d),
						h = n(25),
						y = r(h),
						b = function (t) {
							function e() {
								return i(this, e), l(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
							}
							return a(e, t), s(e, [{
								key: "format",
								value: function (t, n) {
									t !== v.blotName || n ? u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format",
										this).call(this, t, n) : this.replaceWith(f.default.create(this.statics.scope))
								}
							}, {
								key: "remove",
								value: function () {
									null == this.prev && null == this.next ? this.parent.remove() : u(e.prototype.__proto__ || Object
										.getPrototypeOf(e.prototype), "remove", this).call(this)
								}
							}, {
								key: "replaceWith",
								value: function (t, n) {
									return this.parent.isolate(this.offset(this.parent), this.length()), t === this.parent.statics.blotName ?
										(this.parent.replaceWith(t, n), this) : (this.parent.unwrap(), u(e.prototype.__proto__ || Object
											.getPrototypeOf(e.prototype), "replaceWith", this).call(this, t, n))
								}
							}], [{
								key: "formats",
								value: function (t) {
									return t.tagName === this.tagName ? void 0 : u(e.__proto__ || Object.getPrototypeOf(e), "formats",
										this).call(this, t)
								}
							}]), e
						}(p.default);
					b.blotName = "list-item", b.tagName = "LI";
					var v = function (t) {
						function e(t) {
							i(this, e);
							var n = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)),
								r = function (e) {
									if (e.target.parentNode === t) {
										var r = n.statics.formats(t),
											o = f.default.find(e.target);
										"checked" === r ? o.format("list", "unchecked") : "unchecked" === r && o.format("list", "checked")
									}
								};
							return t.addEventListener("touchstart", r), t.addEventListener("mousedown", r), n
						}
						return a(e, t), s(e, null, [{
							key: "create",
							value: function (t) {
								var n = "ordered" === t ? "OL" : "UL",
									r = u(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, n);
								return "checked" !== t && "unchecked" !== t || r.setAttribute("data-checked", "checked" === t), r
							}
						}, {
							key: "formats",
							value: function (t) {
								return "OL" === t.tagName ? "ordered" : "UL" === t.tagName ? t.hasAttribute("data-checked") ?
									"true" === t.getAttribute("data-checked") ? "checked" : "unchecked" : "bullet" : void 0
							}
						}]), s(e, [{
							key: "format",
							value: function (t, e) {
								this.children.length > 0 && this.children.tail.format(t, e)
							}
						}, {
							key: "formats",
							value: function () {
								return o({}, this.statics.blotName, this.statics.formats(this.domNode))
							}
						}, {
							key: "insertBefore",
							value: function (t, n) {
								if (t instanceof b) u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertBefore",
									this).call(this, t, n);
								else {
									var r = null == n ? this.length() : n.offset(this),
										o = this.split(r);
									o.parent.insertBefore(t, o)
								}
							}
						}, {
							key: "optimize",
							value: function (t) {
								u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t);
								var n = this.next;
								null != n && n.prev === this && n.statics.blotName === this.statics.blotName && n.domNode.tagName ===
									this.domNode.tagName && n.domNode.getAttribute("data-checked") === this.domNode.getAttribute(
										"data-checked") && (n.moveChildren(this), n.remove())
							}
						}, {
							key: "replace",
							value: function (t) {
								if (t.statics.blotName !== this.statics.blotName) {
									var n = f.default.create(this.statics.defaultChild);
									t.moveChildren(n), this.appendChild(n)
								}
								u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replace", this).call(this, t)
							}
						}]), e
					}(y.default);
					v.blotName = "list", v.scope = f.default.Scope.BLOCK_BLOT, v.tagName = ["OL", "UL"], v.defaultChild =
						"list-item", v.allowedChildren = [b], e.ListItem = b, e.default = v
				}, function (t, e, n) {
					"use strict";

					function r(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function o(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function i(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var l = n(56),
						a = function (t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}(l),
						s = function (t) {
							function e() {
								return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
							}
							return i(e, t), e
						}(a.default);
					s.blotName = "italic", s.tagName = ["EM", "I"], e.default = s
				}, function (t, e, n) {
					"use strict";

					function r(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function o(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function i(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var l = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						a = function t(e, n, r) {
							null === e && (e = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(e, n);
							if (void 0 === o) {
								var i = Object.getPrototypeOf(e);
								return null === i ? void 0 : t(i, n, r)
							}
							if ("value" in o) return o.value;
							var l = o.get;
							if (void 0 !== l) return l.call(r)
						},
						s = n(6),
						u = function (t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}(s),
						c = function (t) {
							function e() {
								return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
							}
							return i(e, t), l(e, null, [{
								key: "create",
								value: function (t) {
									return "super" === t ? document.createElement("sup") : "sub" === t ? document.createElement("sub") :
										a(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t)
								}
							}, {
								key: "formats",
								value: function (t) {
									return "SUB" === t.tagName ? "sub" : "SUP" === t.tagName ? "super" : void 0
								}
							}]), e
						}(u.default);
					c.blotName = "script", c.tagName = ["SUB", "SUP"], e.default = c
				}, function (t, e, n) {
					"use strict";

					function r(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function o(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function i(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var l = n(6),
						a = function (t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}(l),
						s = function (t) {
							function e() {
								return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
							}
							return i(e, t), e
						}(a.default);
					s.blotName = "strike", s.tagName = "S", e.default = s
				}, function (t, e, n) {
					"use strict";

					function r(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function o(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function i(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var l = n(6),
						a = function (t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}(l),
						s = function (t) {
							function e() {
								return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
							}
							return i(e, t), e
						}(a.default);
					s.blotName = "underline", s.tagName = "U", e.default = s
				}, function (t, e, n) {
					"use strict";

					function r(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function o(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function i(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var l = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						a = function t(e, n, r) {
							null === e && (e = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(e, n);
							if (void 0 === o) {
								var i = Object.getPrototypeOf(e);
								return null === i ? void 0 : t(i, n, r)
							}
							if ("value" in o) return o.value;
							var l = o.get;
							if (void 0 !== l) return l.call(r)
						},
						s = n(0),
						u = function (t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}(s),
						c = n(27),
						f = ["alt", "height", "width"],
						d = function (t) {
							function e() {
								return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
							}
							return i(e, t), l(e, [{
								key: "format",
								value: function (t, n) {
									f.indexOf(t) > -1 ? n ? this.domNode.setAttribute(t, n) : this.domNode.removeAttribute(t) : a(e.prototype
										.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n)
								}
							}], [{
								key: "create",
								value: function (t) {
									var n = a(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
									return "string" == typeof t && n.setAttribute("src", this.sanitize(t)), n
								}
							}, {
								key: "formats",
								value: function (t) {
									return f.reduce(function (e, n) {
										return t.hasAttribute(n) && (e[n] = t.getAttribute(n)), e
									}, {})
								}
							}, {
								key: "match",
								value: function (t) {
									return /\.(jpe?g|gif|png)$/.test(t) || /^data:image\/.+;base64/.test(t)
								}
							}, {
								key: "sanitize",
								value: function (t) {
									return (0, c.sanitize)(t, ["http", "https", "data"]) ? t : "//:0"
								}
							}, {
								key: "value",
								value: function (t) {
									return t.getAttribute("src")
								}
							}]), e
						}(u.default.Embed);
					d.blotName = "image", d.tagName = "IMG", e.default = d
				}, function (t, e, n) {
					"use strict";

					function r(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function o(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function i(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var l = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						a = function t(e, n, r) {
							null === e && (e = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(e, n);
							if (void 0 === o) {
								var i = Object.getPrototypeOf(e);
								return null === i ? void 0 : t(i, n, r)
							}
							if ("value" in o) return o.value;
							var l = o.get;
							if (void 0 !== l) return l.call(r)
						},
						s = n(4),
						u = n(27),
						c = function (t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}(u),
						f = ["height", "width"],
						d = function (t) {
							function e() {
								return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
							}
							return i(e, t), l(e, [{
								key: "format",
								value: function (t, n) {
									f.indexOf(t) > -1 ? n ? this.domNode.setAttribute(t, n) : this.domNode.removeAttribute(t) : a(e.prototype
										.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n)
								}
							}], [{
								key: "create",
								value: function (t) {
									var n = a(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
									return n.setAttribute("frameborder", "0"), n.setAttribute("allowfullscreen", !0), n.setAttribute(
										"src", this.sanitize(t)), n
								}
							}, {
								key: "formats",
								value: function (t) {
									return f.reduce(function (e, n) {
										return t.hasAttribute(n) && (e[n] = t.getAttribute(n)), e
									}, {})
								}
							}, {
								key: "sanitize",
								value: function (t) {
									return c.default.sanitize(t)
								}
							}, {
								key: "value",
								value: function (t) {
									return t.getAttribute("src")
								}
							}]), e
						}(s.BlockEmbed);
					d.blotName = "video", d.className = "ql-video", d.tagName = "IFRAME", e.default = d
				}, function (t, e, n) {
					"use strict";

					function r(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}

					function o(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function i(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function l(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					}), e.default = e.FormulaBlot = void 0;
					var a = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						s = function t(e, n, r) {
							null === e && (e = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(e, n);
							if (void 0 === o) {
								var i = Object.getPrototypeOf(e);
								return null === i ? void 0 : t(i, n, r)
							}
							if ("value" in o) return o.value;
							var l = o.get;
							if (void 0 !== l) return l.call(r)
						},
						u = n(35),
						c = r(u),
						f = n(5),
						d = r(f),
						p = n(9),
						h = r(p),
						y = function (t) {
							function e() {
								return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
							}
							return l(e, t), a(e, null, [{
								key: "create",
								value: function (t) {
									var n = s(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
									return "string" == typeof t && (window.katex.render(t, n, {
										throwOnError: !1,
										errorColor: "#f00"
									}), n.setAttribute("data-value", t)), n
								}
							}, {
								key: "value",
								value: function (t) {
									return t.getAttribute("data-value")
								}
							}]), e
						}(c.default);
					y.blotName = "formula", y.className = "ql-formula", y.tagName = "SPAN";
					var b = function (t) {
						function e() {
							o(this, e);
							var t = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
							if (null == window.katex) throw new Error("Formula module requires KaTeX.");
							return t
						}
						return l(e, t), a(e, null, [{
							key: "register",
							value: function () {
								d.default.register(y, !0)
							}
						}]), e
					}(h.default);
					e.FormulaBlot = y, e.default = b
				}, function (t, e, n) {
					"use strict";

					function r(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}

					function o(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function i(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function l(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					}), e.default = e.CodeToken = e.CodeBlock = void 0;
					var a = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						s = function t(e, n, r) {
							null === e && (e = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(e, n);
							if (void 0 === o) {
								var i = Object.getPrototypeOf(e);
								return null === i ? void 0 : t(i, n, r)
							}
							if ("value" in o) return o.value;
							var l = o.get;
							if (void 0 !== l) return l.call(r)
						},
						u = n(0),
						c = r(u),
						f = n(5),
						d = r(f),
						p = n(9),
						h = r(p),
						y = n(13),
						b = r(y),
						v = function (t) {
							function e() {
								return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
							}
							return l(e, t), a(e, [{
								key: "replaceWith",
								value: function (t) {
									this.domNode.textContent = this.domNode.textContent, this.attach(), s(e.prototype.__proto__ ||
										Object.getPrototypeOf(e.prototype), "replaceWith", this).call(this, t)
								}
							}, {
								key: "highlight",
								value: function (t) {
									var e = this.domNode.textContent;
									this.cachedText !== e && ((e.trim().length > 0 || null == this.cachedText) && (this.domNode.innerHTML =
										t(e), this.domNode.normalize(), this.attach()), this.cachedText = e)
								}
							}]), e
						}(b.default);
					v.className = "ql-syntax";
					var g = new c.default.Attributor.Class("token", "hljs", {
							scope: c.default.Scope.INLINE
						}),
						m = function (t) {
							function e(t, n) {
								o(this, e);
								var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
								if ("function" != typeof r.options.highlight) throw new Error(
									"Syntax module requires highlight.js. Please include the library on the page before Quill.");
								var l = null;
								return r.quill.on(d.default.events.SCROLL_OPTIMIZE, function () {
									clearTimeout(l), l = setTimeout(function () {
										r.highlight(), l = null
									}, r.options.interval)
								}), r.highlight(), r
							}
							return l(e, t), a(e, null, [{
								key: "register",
								value: function () {
									d.default.register(g, !0), d.default.register(v, !0)
								}
							}]), a(e, [{
								key: "highlight",
								value: function () {
									var t = this;
									if (!this.quill.selection.composing) {
										this.quill.update(d.default.sources.USER);
										var e = this.quill.getSelection();
										this.quill.scroll.descendants(v).forEach(function (e) {
											e.highlight(t.options.highlight)
										}), this.quill.update(d.default.sources.SILENT), null != e && this.quill.setSelection(e, d.default
											.sources.SILENT)
									}
								}
							}]), e
						}(h.default);
					m.DEFAULTS = {
						highlight: function () {
							return null == window.hljs ? null : function (t) {
								return window.hljs.highlightAuto(t).value
							}
						}(),
						interval: 1e3
					}, e.CodeBlock = v, e.CodeToken = g, e.default = m
				}, function (t, e) {
					t.exports =
						'<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>'
				}, function (t, e) {
					t.exports =
						'<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>'
				}, function (t, e) {
					t.exports =
						'<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>'
				}, function (t, e) {
					t.exports =
						'<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>'
				}, function (t, e) {
					t.exports =
						'<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>'
				}, function (t, e) {
					t.exports =
						'<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>'
				}, function (t, e) {
					t.exports =
						'<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>'
				}, function (t, e) {
					t.exports =
						'<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>'
				}, function (t, e) {
					t.exports =
						'<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>'
				}, function (t, e) {
					t.exports =
						'<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>'
				}, function (t, e) {
					t.exports =
						'<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>'
				}, function (t, e) {
					t.exports =
						'<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>'
				}, function (t, e) {
					t.exports =
						'<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>'
				}, function (t, e) {
					t.exports =
						'<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>'
				}, function (t, e) {
					t.exports =
						'<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>'
				}, function (t, e) {
					t.exports =
						'<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>'
				}, function (t, e) {
					t.exports =
						'<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>'
				}, function (t, e) {
					t.exports =
						'<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>'
				}, function (t, e) {
					t.exports =
						'<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>'
				}, function (t, e) {
					t.exports =
						'<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>'
				}, function (t, e) {
					t.exports =
						'<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>'
				}, function (t, e) {
					t.exports =
						'<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>'
				}, function (t, e) {
					t.exports =
						'<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>'
				}, function (t, e) {
					t.exports =
						'<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>'
				}, function (t, e) {
					t.exports =
						'<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>'
				}, function (t, e) {
					t.exports =
						'<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>'
				}, function (t, e) {
					t.exports =
						'<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>'
				}, function (t, e) {
					t.exports =
						'<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>'
				}, function (t, e) {
					t.exports =
						'<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>'
				}, function (t, e) {
					t.exports =
						'<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>'
				}, function (t, e) {
					t.exports =
						'<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>'
				}, function (t, e) {
					t.exports =
						'<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>'
				}, function (t, e, n) {
					"use strict";

					function r(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}

					function o(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function i(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}

					function l(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError(
							"Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					}), e.default = e.BubbleTooltip = void 0;
					var a = function t(e, n, r) {
							null === e && (e = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(e, n);
							if (void 0 === o) {
								var i = Object.getPrototypeOf(e);
								return null === i ? void 0 : t(i, n, r)
							}
							if ("value" in o) return o.value;
							var l = o.get;
							if (void 0 !== l) return l.call(r)
						},
						s = function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
										t, r.key, r)
								}
							}
							return function (e, n, r) {
								return n && t(e.prototype, n), r && t(e, r), e
							}
						}(),
						u = n(3),
						c = r(u),
						f = n(8),
						d = r(f),
						p = n(43),
						h = r(p),
						y = n(15),
						b = n(41),
						v = r(b),
						g = [
							["bold", "italic", "link"],
							[{
								header: 1
							}, {
								header: 2
							}, "blockquote"]
						],
						m = function (t) {
							function e(t, n) {
								o(this, e), null != n.modules.toolbar && null == n.modules.toolbar.container && (n.modules.toolbar.container =
									g);
								var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
								return r.quill.container.classList.add("ql-bubble"), r
							}
							return l(e, t), s(e, [{
								key: "extendToolbar",
								value: function (t) {
									this.tooltip = new q(this.quill, this.options.bounds), this.tooltip.root.appendChild(t.container),
										this.buildButtons([].slice.call(t.container.querySelectorAll("button")), v.default), this.buildPickers(
											[].slice.call(t.container.querySelectorAll("select")), v.default)
								}
							}]), e
						}(h.default);
					m.DEFAULTS = (0, c.default)(!0, {}, h.default.DEFAULTS, {
						modules: {
							toolbar: {
								handlers: {
									link: function (t) {
										t ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1)
									}
								}
							}
						}
					});
					var q = function (t) {
						function e(t, n) {
							o(this, e);
							var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
							return r.quill.on(d.default.events.EDITOR_CHANGE, function (t, e, n, o) {
								if (t === d.default.events.SELECTION_CHANGE)
									if (null != e && e.length > 0 && o === d.default.sources.USER) {
										r.show(), r.root.style.left = "0px", r.root.style.width = "", r.root.style.width = r.root.offsetWidth +
											"px";
										var i = r.quill.getLines(e.index, e.length);
										if (1 === i.length) r.position(r.quill.getBounds(e));
										else {
											var l = i[i.length - 1],
												a = r.quill.getIndex(l),
												s = Math.min(l.length() - 1, e.index + e.length - a),
												u = r.quill.getBounds(new y.Range(a, s));
											r.position(u)
										}
									} else document.activeElement !== r.textbox && r.quill.hasFocus() && r.hide()
							}), r
						}
						return l(e, t), s(e, [{
							key: "listen",
							value: function () {
								var t = this;
								a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "listen", this).call(this), this.root
									.querySelector(".ql-close").addEventListener("click", function () {
										t.root.classList.remove("ql-editing")
									}), this.quill.on(d.default.events.SCROLL_OPTIMIZE, function () {
										setTimeout(function () {
											if (!t.root.classList.contains("ql-hidden")) {
												var e = t.quill.getSelection();
												null != e && t.position(t.quill.getBounds(e))
											}
										}, 1)
									})
							}
						}, {
							key: "cancel",
							value: function () {
								this.show()
							}
						}, {
							key: "position",
							value: function (t) {
								var n = a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "position", this).call(
										this, t),
									r = this.root.querySelector(".ql-tooltip-arrow");
								if (r.style.marginLeft = "", 0 === n) return n;
								r.style.marginLeft = -1 * n - r.offsetWidth / 2 + "px"
							}
						}]), e
					}(p.BaseTooltip);
					q.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">',
						'<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
						'<a class="ql-close"></a>', "</div>"
					].join(""), e.BubbleTooltip = q, e.default = m
				}, function (t, e, n) {
					t.exports = n(63)
				}]).default
			})
		}).call(e, n(7).Buffer)
	}, function (t, e) {
		var n;
		n = function () {
			return this
		}();
		try {
			n = n || Function("return this")() || (0, eval)("this")
		} catch (t) {
			"object" == typeof window && (n = window)
		}
		t.exports = n
	}, function (t, e) {
		function n(t, e) {
			var n = t[1] || "",
				o = t[3];
			if (!o) return n;
			if (e && "function" == typeof btoa) {
				var i = r(o);
				return [n].concat(o.sources.map(function (t) {
					return "/*# sourceURL=" + o.sourceRoot + t + " */"
				})).concat([i]).join("\n")
			}
			return [n].join("\n")
		}

		function r(t) {
			return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(
				JSON.stringify(t)))) + " */"
		}
		t.exports = function (t) {
			var e = [];
			return e.toString = function () {
				return this.map(function (e) {
					var r = n(e, t);
					return e[2] ? "@media " + e[2] + "{" + r + "}" : r
				}).join("")
			}, e.i = function (t, n) {
				"string" == typeof t && (t = [
					[null, t, ""]
				]);
				for (var r = {}, o = 0; o < this.length; o++) {
					var i = this[o][0];
					"number" == typeof i && (r[i] = !0)
				}
				for (o = 0; o < t.length; o++) {
					var l = t[o];
					"number" == typeof l[0] && r[l[0]] || (n && !l[2] ? l[2] = n : n && (l[2] = "(" + l[2] + ") and (" + n + ")"),
						e.push(l))
				}
			}, e
		}
	}, function (t, e, n) {
		function r(t) {
			for (var e = 0; e < t.length; e++) {
				var n = t[e],
					r = c[n.id];
				if (r) {
					r.refs++;
					for (var o = 0; o < r.parts.length; o++) r.parts[o](n.parts[o]);
					for (; o < n.parts.length; o++) r.parts.push(i(n.parts[o]));
					r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
				} else {
					for (var l = [], o = 0; o < n.parts.length; o++) l.push(i(n.parts[o]));
					c[n.id] = {
						id: n.id,
						refs: 1,
						parts: l
					}
				}
			}
		}

		function o() {
			var t = document.createElement("style");
			return t.type = "text/css", f.appendChild(t), t
		}

		function i(t) {
			var e, n, r = document.querySelector("style[" + v + '~="' + t.id + '"]');
			if (r) {
				if (h) return y;
				r.parentNode.removeChild(r)
			}
			if (g) {
				var i = p++;
				r = d || (d = o()), e = l.bind(null, r, i, !1), n = l.bind(null, r, i, !0)
			} else r = o(), e = a.bind(null, r), n = function () {
				r.parentNode.removeChild(r)
			};
			return e(t),
				function (r) {
					if (r) {
						if (r.css === t.css && r.media === t.media && r.sourceMap === t.sourceMap) return;
						e(t = r)
					} else n()
				}
		}

		function l(t, e, n, r) {
			var o = n ? "" : r.css;
			if (t.styleSheet) t.styleSheet.cssText = m(e, o);
			else {
				var i = document.createTextNode(o),
					l = t.childNodes;
				l[e] && t.removeChild(l[e]), l.length ? t.insertBefore(i, l[e]) : t.appendChild(i)
			}
		}

		function a(t, e) {
			var n = e.css,
				r = e.media,
				o = e.sourceMap;
			if (r && t.setAttribute("media", r), b.ssrId && t.setAttribute(v, e.id), o && (n += "\n/*# sourceURL=" + o.sources[
					0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(
					JSON.stringify(o)))) + " */"), t.styleSheet) t.styleSheet.cssText = n;
			else {
				for (; t.firstChild;) t.removeChild(t.firstChild);
				t.appendChild(document.createTextNode(n))
			}
		}
		var s = "undefined" != typeof document;
		if ("undefined" != typeof DEBUG && DEBUG && !s) throw new Error(
			"vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
		);
		var u = n(14),
			c = {},
			f = s && (document.head || document.getElementsByTagName("head")[0]),
			d = null,
			p = 0,
			h = !1,
			y = function () {},
			b = null,
			v = "data-vue-ssr-id",
			g = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
		t.exports = function (t, e, n, o) {
			h = n, b = o || {};
			var i = u(t, e);
			return r(i),
				function (e) {
					for (var n = [], o = 0; o < i.length; o++) {
						var l = i[o],
							a = c[l.id];
						a.refs--, n.push(a)
					}
					e ? (i = u(t, e), r(i)) : i = [];
					for (var o = 0; o < n.length; o++) {
						var a = n[o];
						if (0 === a.refs) {
							for (var s = 0; s < a.parts.length; s++) a.parts[s]();
							delete c[a.id]
						}
					}
				}
		};
		var m = function () {
			var t = [];
			return function (e, n) {
				return t[e] = n, t.filter(Boolean).join("\n")
			}
		}()
	}, function (t, e, n) {
		"use strict";
		(function (t) {
			var r = n(0),
				o = n.n(r),
				i = n(18),
				l = n(19),
				a = n(20),
				s = n.n(a),
				u = t || o.a;
			e.a = {
				name: "vue-editor",
				props: {
					value: String,
					id: {
						type: String,
						default: "quill-container"
					},
					placeholder: String,
					disabled: Boolean,
					customModules: Array,
					editorToolbar: Array,
					editorOptions: {
						type: Object,
						default: function () {
							return {}
						}
					},
					useCustomImageHandler: {
						type: Boolean,
						default: !1
					}
				},
				computed: {
					filteredInitialContent: function () {
						return (this.value || "").replace(/(<div)/gim, "<p").replace(/<\/div>/gim, "</p>")
					},
					imageResizeActive: function () {
						return void 0 !== this.quill.options.modules.imageResize
					}
				},
				data: function () {
					return {
						quill: null,
						editor: null,
						editorConfig: {},
						modules: {
							toolbar: this.editorToolbar ? this.editorToolbar : i.a,
							markdownShortcuts: {}
						}
					}
				},
				mounted: function () {
					this.initializeVue2Editor(), this.handleUpdatedEditor()
				},
				beforeDestroy: function () {
					this.quill = null, delete this.quill
				},
				watch: {
					value: function (t) {
						t == this.quill.root.innerHTML || this.quill.hasFocus() || (this.quill.root.innerHTML = t)
					},
					disabled: function (t) {
						this.quill.enable(!t)
					}
				},
				methods: {
					initializeVue2Editor: function () {
						var t = this;
						this.prepareModules(), this.setQuillElement(), this.handleDynamicStyles(), this.checkForInitialContent(),
							this.checkForCustomImageHandler(), this.quill.on("selection-change", function (e) {
								t.$emit("selection-change", e), e ? t.$emit("focus", t.quill) : t.$emit("blur", t.quill)
							})
					},
					setQuillElement: function () {
						var t = {
							debug: !1,
							modules: this.modules,
							placeholder: this.placeholder ? this.placeholder : "",
							theme: "snow",
							readOnly: !!this.disabled && this.disabled
						};
						this.prepareEditorConfig(t), this.quill = new u(this.$refs.quillContainer, t)
					},
					setEditorElement: function () {},
					handleDynamicStyles: function () {
						this.imageResizeActive && this.quill.root.classList.add("imageResizeActive")
					},
					prepareModules: function () {
						this.registerBuiltInModules(), this.registerCustomModules()
					},
					registerBuiltInModules: function () {
						u.register("modules/markdownShortcuts", l.a, !0)
					},
					registerCustomModules: function () {
						void 0 !== this.customModules && this.customModules.forEach(function (t) {
							u.register("modules/" + t.alias, t.module)
						})
					},
					prepareEditorConfig: function (t) {
						Object.keys(this.editorOptions).length > 0 && this.editorOptions.constructor === Object && (this.editorOptions
							.modules && void 0 !== this.editorOptions.modules.toolbar && delete t.modules.toolbar, s()(t, this.editorOptions)
						)
					},
					checkForInitialContent: function () {
						this.value && (this.quill.root.innerHTML = this.filteredInitialContent)
					},
					checkForCustomImageHandler: function () {
						!0 === this.useCustomImageHandler && this.setupCustomImageHandler()
					},
					setupCustomImageHandler: function () {
						this.quill.getModule("toolbar").addHandler("image", this.customImageHandler)
					},
					handleUpdatedEditor: function () {
						var t = this;
						this.quill.on("text-change", function () {
							var e = t.quill.root.innerHTML;
							"<p><br></p>" === e && (e = ""), t.$emit("input", e)
						})
					},
					customImageHandler: function (t, e) {
						this.$refs.fileInput.click()
					},
					emitImageInfo: function (t) {
						var e = function () {
								document.getElementById("file-upload").value = ""
							},
							n = t.target.files[0],
							r = this.quill,
							o = r.getSelection(),
							i = o.index;
						this.$emit("imageAdded", n, r, i, e)
					}
				}
			}
		}).call(e, n(0))
	}, function (t, e, n) {
		t.exports = n(6)
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
				value: !0
			}),
			function (t) {
				n.d(e, "Quill", function () {
					return l
				});
				var r = n(11),
					o = n(0),
					i = n.n(o);
				n.d(e, "VueEditor", function () {
					return r.a
				});
				var l = t || i.a,
					a = {
						VueEditor: r.a,
						install: function (t) {
							t.component(r.a.name, r.a)
						}
					};
				"undefined" != typeof window && window.Vue && window.Vue.use(a), e.default = a
			}.call(e, n(0))
	}, function (t, e, n) {
		"use strict";
		(function (t) {
			function r() {
				return i.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
			}

			function o(t, e) {
				if (r() < e) throw new RangeError("Invalid typed array length");
				return i.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e), t.__proto__ = i.prototype) : (null === t && (t = new i(
					e)), t.length = e), t
			}

			function i(t, e, n) {
				if (!(i.TYPED_ARRAY_SUPPORT || this instanceof i)) return new i(t, e, n);
				if ("number" == typeof t) {
					if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
					return u(this, t)
				}
				return l(this, t, e, n)
			}

			function l(t, e, n, r) {
				if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
				return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? d(t, e, n, r) : "string" == typeof e ?
					c(t, e, n) : p(t, e)
			}

			function a(t) {
				if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
				if (t < 0) throw new RangeError('"size" argument must not be negative')
			}

			function s(t, e, n, r) {
				return a(e), e <= 0 ? o(t, e) : void 0 !== n ? "string" == typeof r ? o(t, e).fill(n, r) : o(t, e).fill(n) : o(
					t, e)
			}

			function u(t, e) {
				if (a(e), t = o(t, e < 0 ? 0 : 0 | h(e)), !i.TYPED_ARRAY_SUPPORT)
					for (var n = 0; n < e; ++n) t[n] = 0;
				return t
			}

			function c(t, e, n) {
				if ("string" == typeof n && "" !== n || (n = "utf8"), !i.isEncoding(n)) throw new TypeError(
					'"encoding" must be a valid string encoding');
				var r = 0 | b(e, n);
				t = o(t, r);
				var l = t.write(e, n);
				return l !== r && (t = t.slice(0, l)), t
			}

			function f(t, e) {
				var n = e.length < 0 ? 0 : 0 | h(e.length);
				t = o(t, n);
				for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
				return t
			}

			function d(t, e, n, r) {
				if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
				if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
				return e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(
					e, n, r), i.TYPED_ARRAY_SUPPORT ? (t = e, t.__proto__ = i.prototype) : t = f(t, e), t
			}

			function p(t, e) {
				if (i.isBuffer(e)) {
					var n = 0 | h(e.length);
					return t = o(t, n), 0 === t.length ? t : (e.copy(t, 0, 0, n), t)
				}
				if (e) {
					if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" !=
						typeof e.length || G(e.length) ? o(t, 0) : f(t, e);
					if ("Buffer" === e.type && Q(e.data)) return f(t, e.data)
				}
				throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
			}

			function h(t) {
				if (t >= r()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r().toString(16) +
					" bytes");
				return 0 | t
			}

			function y(t) {
				return +t != t && (t = 0), i.alloc(+t)
			}

			function b(t, e) {
				if (i.isBuffer(t)) return t.length;
				if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) ||
						t instanceof ArrayBuffer)) return t.byteLength;
				"string" != typeof t && (t = "" + t);
				var n = t.length;
				if (0 === n) return 0;
				for (var r = !1;;) switch (e) {
					case "ascii":
					case "latin1":
					case "binary":
						return n;
					case "utf8":
					case "utf-8":
					case void 0:
						return K(t).length;
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return 2 * n;
					case "hex":
						return n >>> 1;
					case "base64":
						return W(t).length;
					default:
						if (r) return K(t).length;
						e = ("" + e).toLowerCase(), r = !0
				}
			}

			function v(t, e, n) {
				var r = !1;
				if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
				if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
				if (n >>>= 0, e >>>= 0, n <= e) return "";
				for (t || (t = "utf8");;) switch (t) {
					case "hex":
						return P(this, e, n);
					case "utf8":
					case "utf-8":
						return j(this, e, n);
					case "ascii":
						return T(this, e, n);
					case "latin1":
					case "binary":
						return S(this, e, n);
					case "base64":
						return A(this, e, n);
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return C(this, e, n);
					default:
						if (r) throw new TypeError("Unknown encoding: " + t);
						t = (t + "").toLowerCase(), r = !0
				}
			}

			function g(t, e, n) {
				var r = t[e];
				t[e] = t[n], t[n] = r
			}

			function m(t, e, n, r, o) {
				if (0 === t.length) return -1;
				if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -
						2147483648), n = +n, isNaN(n) && (n = o ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
					if (o) return -1;
					n = t.length - 1
				} else if (n < 0) {
					if (!o) return -1;
					n = 0
				}
				if ("string" == typeof e && (e = i.from(e, r)), i.isBuffer(e)) return 0 === e.length ? -1 : q(t, e, n, r, o);
				if ("number" == typeof e) return e &= 255, i.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ?
					o ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : q(t, [e],
						n, r, o);
				throw new TypeError("val must be string, number or Buffer")
			}

			function q(t, e, n, r, o) {
				function i(t, e) {
					return 1 === l ? t[e] : t.readUInt16BE(e * l)
				}
				var l = 1,
					a = t.length,
					s = e.length;
				if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r ||
						"utf-16le" === r)) {
					if (t.length < 2 || e.length < 2) return -1;
					l = 2, a /= 2, s /= 2, n /= 2
				}
				var u;
				if (o) {
					var c = -1;
					for (u = n; u < a; u++)
						if (i(t, u) === i(e, -1 === c ? 0 : u - c)) {
							if (-1 === c && (c = u), u - c + 1 === s) return c * l
						} else -1 !== c && (u -= u - c), c = -1
				} else
					for (n + s > a && (n = a - s), u = n; u >= 0; u--) {
						for (var f = !0, d = 0; d < s; d++)
							if (i(t, u + d) !== i(e, d)) {
								f = !1;
								break
							}
						if (f) return u
					}
				return -1
			}

			function _(t, e, n, r) {
				n = Number(n) || 0;
				var o = t.length - n;
				r ? (r = Number(r)) > o && (r = o) : r = o;
				var i = e.length;
				if (i % 2 != 0) throw new TypeError("Invalid hex string");
				r > i / 2 && (r = i / 2);
				for (var l = 0; l < r; ++l) {
					var a = parseInt(e.substr(2 * l, 2), 16);
					if (isNaN(a)) return l;
					t[n + l] = a
				}
				return l
			}

			function w(t, e, n, r) {
				return Z(K(e, t.length - n), t, n, r)
			}

			function k(t, e, n, r) {
				return Z(Y(e), t, n, r)
			}

			function O(t, e, n, r) {
				return k(t, e, n, r)
			}

			function x(t, e, n, r) {
				return Z(W(e), t, n, r)
			}

			function E(t, e, n, r) {
				return Z(V(e, t.length - n), t, n, r)
			}

			function A(t, e, n) {
				return 0 === e && n === t.length ? $.fromByteArray(t) : $.fromByteArray(t.slice(e, n))
			}

			function j(t, e, n) {
				n = Math.min(t.length, n);
				for (var r = [], o = e; o < n;) {
					var i = t[o],
						l = null,
						a = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
					if (o + a <= n) {
						var s, u, c, f;
						switch (a) {
							case 1:
								i < 128 && (l = i);
								break;
							case 2:
								s = t[o + 1], 128 == (192 & s) && (f = (31 & i) << 6 | 63 & s) > 127 && (l = f);
								break;
							case 3:
								s = t[o + 1], u = t[o + 2], 128 == (192 & s) && 128 == (192 & u) && (f = (15 & i) << 12 | (63 & s) << 6 |
									63 & u) > 2047 && (f < 55296 || f > 57343) && (l = f);
								break;
							case 4:
								s = t[o + 1], u = t[o + 2], c = t[o + 3], 128 == (192 & s) && 128 == (192 & u) && 128 == (192 & c) && (f =
									(15 & i) << 18 | (63 & s) << 12 | (63 & u) << 6 | 63 & c) > 65535 && f < 1114112 && (l = f)
						}
					}
					null === l ? (l = 65533, a = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 &
						l), r.push(l), o += a
				}
				return N(r)
			}

			function N(t) {
				var e = t.length;
				if (e <= J) return String.fromCharCode.apply(String, t);
				for (var n = "", r = 0; r < e;) n += String.fromCharCode.apply(String, t.slice(r, r += J));
				return n
			}

			function T(t, e, n) {
				var r = "";
				n = Math.min(t.length, n);
				for (var o = e; o < n; ++o) r += String.fromCharCode(127 & t[o]);
				return r
			}

			function S(t, e, n) {
				var r = "";
				n = Math.min(t.length, n);
				for (var o = e; o < n; ++o) r += String.fromCharCode(t[o]);
				return r
			}

			function P(t, e, n) {
				var r = t.length;
				(!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
				for (var o = "", i = e; i < n; ++i) o += H(t[i]);
				return o
			}

			function C(t, e, n) {
				for (var r = t.slice(e, n), o = "", i = 0; i < r.length; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
				return o
			}

			function L(t, e, n) {
				if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
				if (t + e > n) throw new RangeError("Trying to access beyond buffer length")
			}

			function R(t, e, n, r, o, l) {
				if (!i.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
				if (e > o || e < l) throw new RangeError('"value" argument is out of bounds');
				if (n + r > t.length) throw new RangeError("Index out of range")
			}

			function M(t, e, n, r) {
				e < 0 && (e = 65535 + e + 1);
				for (var o = 0, i = Math.min(t.length - n, 2); o < i; ++o) t[n + o] = (e & 255 << 8 * (r ? o : 1 - o)) >>> 8 *
					(r ? o : 1 - o)
			}

			function I(t, e, n, r) {
				e < 0 && (e = 4294967295 + e + 1);
				for (var o = 0, i = Math.min(t.length - n, 4); o < i; ++o) t[n + o] = e >>> 8 * (r ? o : 3 - o) & 255
			}

			function B(t, e, n, r, o, i) {
				if (n + r > t.length) throw new RangeError("Index out of range");
				if (n < 0) throw new RangeError("Index out of range")
			}

			function D(t, e, n, r, o) {
				return o || B(t, e, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), X.write(t, e, n, r, 23, 4), n + 4
			}

			function U(t, e, n, r, o) {
				return o || B(t, e, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), X.write(t, e, n, r, 52, 8), n + 8
			}

			function z(t) {
				if (t = F(t).replace(tt, ""), t.length < 2) return "";
				for (; t.length % 4 != 0;) t += "=";
				return t
			}

			function F(t) {
				return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
			}

			function H(t) {
				return t < 16 ? "0" + t.toString(16) : t.toString(16)
			}

			function K(t, e) {
				e = e || 1 / 0;
				for (var n, r = t.length, o = null, i = [], l = 0; l < r; ++l) {
					if ((n = t.charCodeAt(l)) > 55295 && n < 57344) {
						if (!o) {
							if (n > 56319) {
								(e -= 3) > -1 && i.push(239, 191, 189);
								continue
							}
							if (l + 1 === r) {
								(e -= 3) > -1 && i.push(239, 191, 189);
								continue
							}
							o = n;
							continue
						}
						if (n < 56320) {
							(e -= 3) > -1 && i.push(239, 191, 189), o = n;
							continue
						}
						n = 65536 + (o - 55296 << 10 | n - 56320)
					} else o && (e -= 3) > -1 && i.push(239, 191, 189);
					if (o = null, n < 128) {
						if ((e -= 1) < 0) break;
						i.push(n)
					} else if (n < 2048) {
						if ((e -= 2) < 0) break;
						i.push(n >> 6 | 192, 63 & n | 128)
					} else if (n < 65536) {
						if ((e -= 3) < 0) break;
						i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
					} else {
						if (!(n < 1114112)) throw new Error("Invalid code point");
						if ((e -= 4) < 0) break;
						i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
					}
				}
				return i
			}

			function Y(t) {
				for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
				return e
			}

			function V(t, e) {
				for (var n, r, o, i = [], l = 0; l < t.length && !((e -= 2) < 0); ++l) n = t.charCodeAt(l), r = n >> 8, o = n %
					256, i.push(o), i.push(r);
				return i
			}

			function W(t) {
				return $.toByteArray(z(t))
			}

			function Z(t, e, n, r) {
				for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o) e[o + n] = t[o];
				return o
			}

			function G(t) {
				return t !== t
			}
			var $ = n(8),
				X = n(9),
				Q = n(10);
			e.Buffer = i, e.SlowBuffer = y, e.INSPECT_MAX_BYTES = 50, i.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ?
				t.TYPED_ARRAY_SUPPORT : function () {
					try {
						var t = new Uint8Array(1);
						return t.__proto__ = {
							__proto__: Uint8Array.prototype,
							foo: function () {
								return 42
							}
						}, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
					} catch (t) {
						return !1
					}
				}(), e.kMaxLength = r(), i.poolSize = 8192, i._augment = function (t) {
					return t.__proto__ = i.prototype, t
				}, i.from = function (t, e, n) {
					return l(null, t, e, n)
				}, i.TYPED_ARRAY_SUPPORT && (i.prototype.__proto__ = Uint8Array.prototype, i.__proto__ = Uint8Array,
					"undefined" != typeof Symbol && Symbol.species && i[Symbol.species] === i && Object.defineProperty(i, Symbol.species, {
						value: null,
						configurable: !0
					})), i.alloc = function (t, e, n) {
					return s(null, t, e, n)
				}, i.allocUnsafe = function (t) {
					return u(null, t)
				}, i.allocUnsafeSlow = function (t) {
					return u(null, t)
				}, i.isBuffer = function (t) {
					return !(null == t || !t._isBuffer)
				}, i.compare = function (t, e) {
					if (!i.isBuffer(t) || !i.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
					if (t === e) return 0;
					for (var n = t.length, r = e.length, o = 0, l = Math.min(n, r); o < l; ++o)
						if (t[o] !== e[o]) {
							n = t[o], r = e[o];
							break
						}
					return n < r ? -1 : r < n ? 1 : 0
				}, i.isEncoding = function (t) {
					switch (String(t).toLowerCase()) {
						case "hex":
						case "utf8":
						case "utf-8":
						case "ascii":
						case "latin1":
						case "binary":
						case "base64":
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return !0;
						default:
							return !1
					}
				}, i.concat = function (t, e) {
					if (!Q(t)) throw new TypeError('"list" argument must be an Array of Buffers');
					if (0 === t.length) return i.alloc(0);
					var n;
					if (void 0 === e)
						for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
					var r = i.allocUnsafe(e),
						o = 0;
					for (n = 0; n < t.length; ++n) {
						var l = t[n];
						if (!i.isBuffer(l)) throw new TypeError('"list" argument must be an Array of Buffers');
						l.copy(r, o), o += l.length
					}
					return r
				}, i.byteLength = b, i.prototype._isBuffer = !0, i.prototype.swap16 = function () {
					var t = this.length;
					if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
					for (var e = 0; e < t; e += 2) g(this, e, e + 1);
					return this
				}, i.prototype.swap32 = function () {
					var t = this.length;
					if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
					for (var e = 0; e < t; e += 4) g(this, e, e + 3), g(this, e + 1, e + 2);
					return this
				}, i.prototype.swap64 = function () {
					var t = this.length;
					if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
					for (var e = 0; e < t; e += 8) g(this, e, e + 7), g(this, e + 1, e + 6), g(this, e + 2, e + 5), g(this, e + 3,
						e + 4);
					return this
				}, i.prototype.toString = function () {
					var t = 0 | this.length;
					return 0 === t ? "" : 0 === arguments.length ? j(this, 0, t) : v.apply(this, arguments)
				}, i.prototype.equals = function (t) {
					if (!i.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
					return this === t || 0 === i.compare(this, t)
				}, i.prototype.inspect = function () {
					var t = "",
						n = e.INSPECT_MAX_BYTES;
					return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t +=
						" ... ")), "<Buffer " + t + ">"
				}, i.prototype.compare = function (t, e, n, r, o) {
					if (!i.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
					if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === o &&
						(o = this.length), e < 0 || n > t.length || r < 0 || o > this.length) throw new RangeError(
						"out of range index");
					if (r >= o && e >= n) return 0;
					if (r >= o) return -1;
					if (e >= n) return 1;
					if (e >>>= 0, n >>>= 0, r >>>= 0, o >>>= 0, this === t) return 0;
					for (var l = o - r, a = n - e, s = Math.min(l, a), u = this.slice(r, o), c = t.slice(e, n), f = 0; f < s; ++f)
						if (u[f] !== c[f]) {
							l = u[f], a = c[f];
							break
						}
					return l < a ? -1 : a < l ? 1 : 0
				}, i.prototype.includes = function (t, e, n) {
					return -1 !== this.indexOf(t, e, n)
				}, i.prototype.indexOf = function (t, e, n) {
					return m(this, t, e, n, !0)
				}, i.prototype.lastIndexOf = function (t, e, n) {
					return m(this, t, e, n, !1)
				}, i.prototype.write = function (t, e, n, r) {
					if (void 0 === e) r = "utf8", n = this.length, e = 0;
					else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;
					else {
						if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
						e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
					}
					var o = this.length - e;
					if ((void 0 === n || n > o) && (n = o), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError(
						"Attempt to write outside buffer bounds");
					r || (r = "utf8");
					for (var i = !1;;) switch (r) {
						case "hex":
							return _(this, t, e, n);
						case "utf8":
						case "utf-8":
							return w(this, t, e, n);
						case "ascii":
							return k(this, t, e, n);
						case "latin1":
						case "binary":
							return O(this, t, e, n);
						case "base64":
							return x(this, t, e, n);
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return E(this, t, e, n);
						default:
							if (i) throw new TypeError("Unknown encoding: " + r);
							r = ("" + r).toLowerCase(), i = !0
					}
				}, i.prototype.toJSON = function () {
					return {
						type: "Buffer",
						data: Array.prototype.slice.call(this._arr || this, 0)
					}
				};
			var J = 4096;
			i.prototype.slice = function (t, e) {
				var n = this.length;
				t = ~~t, e = void 0 === e ? n : ~~e, t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), e < 0 ? (e += n) < 0 &&
					(e = 0) : e > n && (e = n), e < t && (e = t);
				var r;
				if (i.TYPED_ARRAY_SUPPORT) r = this.subarray(t, e), r.__proto__ = i.prototype;
				else {
					var o = e - t;
					r = new i(o, void 0);
					for (var l = 0; l < o; ++l) r[l] = this[l + t]
				}
				return r
			}, i.prototype.readUIntLE = function (t, e, n) {
				t |= 0, e |= 0, n || L(t, e, this.length);
				for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);) r += this[t + i] * o;
				return r
			}, i.prototype.readUIntBE = function (t, e, n) {
				t |= 0, e |= 0, n || L(t, e, this.length);
				for (var r = this[t + --e], o = 1; e > 0 && (o *= 256);) r += this[t + --e] * o;
				return r
			}, i.prototype.readUInt8 = function (t, e) {
				return e || L(t, 1, this.length), this[t]
			}, i.prototype.readUInt16LE = function (t, e) {
				return e || L(t, 2, this.length), this[t] | this[t + 1] << 8
			}, i.prototype.readUInt16BE = function (t, e) {
				return e || L(t, 2, this.length), this[t] << 8 | this[t + 1]
			}, i.prototype.readUInt32LE = function (t, e) {
				return e || L(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
			}, i.prototype.readUInt32BE = function (t, e) {
				return e || L(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
			}, i.prototype.readIntLE = function (t, e, n) {
				t |= 0, e |= 0, n || L(t, e, this.length);
				for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);) r += this[t + i] * o;
				return o *= 128, r >= o && (r -= Math.pow(2, 8 * e)), r
			}, i.prototype.readIntBE = function (t, e, n) {
				t |= 0, e |= 0, n || L(t, e, this.length);
				for (var r = e, o = 1, i = this[t + --r]; r > 0 && (o *= 256);) i += this[t + --r] * o;
				return o *= 128, i >= o && (i -= Math.pow(2, 8 * e)), i
			}, i.prototype.readInt8 = function (t, e) {
				return e || L(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
			}, i.prototype.readInt16LE = function (t, e) {
				e || L(t, 2, this.length);
				var n = this[t] | this[t + 1] << 8;
				return 32768 & n ? 4294901760 | n : n
			}, i.prototype.readInt16BE = function (t, e) {
				e || L(t, 2, this.length);
				var n = this[t + 1] | this[t] << 8;
				return 32768 & n ? 4294901760 | n : n
			}, i.prototype.readInt32LE = function (t, e) {
				return e || L(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
			}, i.prototype.readInt32BE = function (t, e) {
				return e || L(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
			}, i.prototype.readFloatLE = function (t, e) {
				return e || L(t, 4, this.length), X.read(this, t, !0, 23, 4)
			}, i.prototype.readFloatBE = function (t, e) {
				return e || L(t, 4, this.length), X.read(this, t, !1, 23, 4)
			}, i.prototype.readDoubleLE = function (t, e) {
				return e || L(t, 8, this.length), X.read(this, t, !0, 52, 8)
			}, i.prototype.readDoubleBE = function (t, e) {
				return e || L(t, 8, this.length), X.read(this, t, !1, 52, 8)
			}, i.prototype.writeUIntLE = function (t, e, n, r) {
				if (t = +t, e |= 0, n |= 0, !r) {
					R(this, t, e, n, Math.pow(2, 8 * n) - 1, 0)
				}
				var o = 1,
					i = 0;
				for (this[e] = 255 & t; ++i < n && (o *= 256);) this[e + i] = t / o & 255;
				return e + n
			}, i.prototype.writeUIntBE = function (t, e, n, r) {
				if (t = +t, e |= 0, n |= 0, !r) {
					R(this, t, e, n, Math.pow(2, 8 * n) - 1, 0)
				}
				var o = n - 1,
					i = 1;
				for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);) this[e + o] = t / i & 255;
				return e + n
			}, i.prototype.writeUInt8 = function (t, e, n) {
				return t = +t, e |= 0, n || R(this, t, e, 1, 255, 0), i.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] =
					255 & t, e + 1
			}, i.prototype.writeUInt16LE = function (t, e, n) {
				return t = +t, e |= 0, n || R(this, t, e, 2, 65535, 0), i.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e +
					1] = t >>> 8) : M(this, t, e, !0), e + 2
			}, i.prototype.writeUInt16BE = function (t, e, n) {
				return t = +t, e |= 0, n || R(this, t, e, 2, 65535, 0), i.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e +
					1] = 255 & t) : M(this, t, e, !1), e + 2
			}, i.prototype.writeUInt32LE = function (t, e, n) {
				return t = +t, e |= 0, n || R(this, t, e, 4, 4294967295, 0), i.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24,
					this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : I(this, t, e, !0), e + 4
			}, i.prototype.writeUInt32BE = function (t, e, n) {
				return t = +t, e |= 0, n || R(this, t, e, 4, 4294967295, 0), i.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24,
					this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : I(this, t, e, !1), e + 4
			}, i.prototype.writeIntLE = function (t, e, n, r) {
				if (t = +t, e |= 0, !r) {
					var o = Math.pow(2, 8 * n - 1);
					R(this, t, e, n, o - 1, -o)
				}
				var i = 0,
					l = 1,
					a = 0;
				for (this[e] = 255 & t; ++i < n && (l *= 256);) t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1), this[e +
					i] = (t / l >> 0) - a & 255;
				return e + n
			}, i.prototype.writeIntBE = function (t, e, n, r) {
				if (t = +t, e |= 0, !r) {
					var o = Math.pow(2, 8 * n - 1);
					R(this, t, e, n, o - 1, -o)
				}
				var i = n - 1,
					l = 1,
					a = 0;
				for (this[e + i] = 255 & t; --i >= 0 && (l *= 256);) t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1),
					this[e + i] = (t / l >> 0) - a & 255;
				return e + n
			}, i.prototype.writeInt8 = function (t, e, n) {
				return t = +t, e |= 0, n || R(this, t, e, 1, 127, -128), i.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 &&
					(t = 255 + t + 1), this[e] = 255 & t, e + 1
			}, i.prototype.writeInt16LE = function (t, e, n) {
				return t = +t, e |= 0, n || R(this, t, e, 2, 32767, -32768), i.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[
					e + 1] = t >>> 8) : M(this, t, e, !0), e + 2
			}, i.prototype.writeInt16BE = function (t, e, n) {
				return t = +t, e |= 0, n || R(this, t, e, 2, 32767, -32768), i.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[
					e + 1] = 255 & t) : M(this, t, e, !1), e + 2
			}, i.prototype.writeInt32LE = function (t, e, n) {
				return t = +t, e |= 0, n || R(this, t, e, 4, 2147483647, -2147483648), i.TYPED_ARRAY_SUPPORT ? (this[e] = 255 &
					t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : I(this, t, e, !0), e + 4
			}, i.prototype.writeInt32BE = function (t, e, n) {
				return t = +t, e |= 0, n || R(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), i.TYPED_ARRAY_SUPPORT ?
					(this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : I(this, t, e, !
						1), e + 4
			}, i.prototype.writeFloatLE = function (t, e, n) {
				return D(this, t, e, !0, n)
			}, i.prototype.writeFloatBE = function (t, e, n) {
				return D(this, t, e, !1, n)
			}, i.prototype.writeDoubleLE = function (t, e, n) {
				return U(this, t, e, !0, n)
			}, i.prototype.writeDoubleBE = function (t, e, n) {
				return U(this, t, e, !1, n)
			}, i.prototype.copy = function (t, e, n, r) {
				if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 &&
					r < n && (r = n), r === n) return 0;
				if (0 === t.length || 0 === this.length) return 0;
				if (e < 0) throw new RangeError("targetStart out of bounds");
				if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
				if (r < 0) throw new RangeError("sourceEnd out of bounds");
				r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
				var o, l = r - n;
				if (this === t && n < e && e < r)
					for (o = l - 1; o >= 0; --o) t[o + e] = this[o + n];
				else if (l < 1e3 || !i.TYPED_ARRAY_SUPPORT)
					for (o = 0; o < l; ++o) t[o + e] = this[o + n];
				else Uint8Array.prototype.set.call(t, this.subarray(n, n + l), e);
				return l
			}, i.prototype.fill = function (t, e, n, r) {
				if ("string" == typeof t) {
					if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length),
						1 === t.length) {
						var o = t.charCodeAt(0);
						o < 256 && (t = o)
					}
					if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
					if ("string" == typeof r && !i.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
				} else "number" == typeof t && (t &= 255);
				if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
				if (n <= e) return this;
				e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0);
				var l;
				if ("number" == typeof t)
					for (l = e; l < n; ++l) this[l] = t;
				else {
					var a = i.isBuffer(t) ? t : K(new i(t, r).toString()),
						s = a.length;
					for (l = 0; l < n - e; ++l) this[l + e] = a[l % s]
				}
				return this
			};
			var tt = /[^+\/0-9A-Za-z-_]/g
		}).call(e, n(1))
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			var e = t.length;
			if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
			var n = t.indexOf("=");
			return -1 === n && (n = e), [n, n === e ? 0 : 4 - n % 4]
		}

		function o(t) {
			var e = r(t),
				n = e[0],
				o = e[1];
			return 3 * (n + o) / 4 - o
		}

		function i(t, e, n) {
			return 3 * (e + n) / 4 - n
		}

		function l(t) {
			for (var e, n = r(t), o = n[0], l = n[1], a = new d(i(t, o, l)), s = 0, u = l > 0 ? o - 4 : o, c = 0; c < u; c +=
				4) e = f[t.charCodeAt(c)] << 18 | f[t.charCodeAt(c + 1)] << 12 | f[t.charCodeAt(c + 2)] << 6 | f[t.charCodeAt(c +
				3)], a[s++] = e >> 16 & 255, a[s++] = e >> 8 & 255, a[s++] = 255 & e;
			return 2 === l && (e = f[t.charCodeAt(c)] << 2 | f[t.charCodeAt(c + 1)] >> 4, a[s++] = 255 & e), 1 === l && (e =
				f[t.charCodeAt(c)] << 10 | f[t.charCodeAt(c + 1)] << 4 | f[t.charCodeAt(c + 2)] >> 2, a[s++] = e >> 8 & 255, a[
					s++] = 255 & e), a
		}

		function a(t) {
			return c[t >> 18 & 63] + c[t >> 12 & 63] + c[t >> 6 & 63] + c[63 & t]
		}

		function s(t, e, n) {
			for (var r, o = [], i = e; i < n; i += 3) r = (t[i] << 16 & 16711680) + (t[i + 1] << 8 & 65280) + (255 & t[i + 2]),
				o.push(a(r));
			return o.join("")
		}

		function u(t) {
			for (var e, n = t.length, r = n % 3, o = [], i = 0, l = n - r; i < l; i += 16383) o.push(s(t, i, i + 16383 > l ?
				l : i + 16383));
			return 1 === r ? (e = t[n - 1], o.push(c[e >> 2] + c[e << 4 & 63] + "==")) : 2 === r && (e = (t[n - 2] << 8) + t[
				n - 1], o.push(c[e >> 10] + c[e >> 4 & 63] + c[e << 2 & 63] + "=")), o.join("")
		}
		e.byteLength = o, e.toByteArray = l, e.fromByteArray = u;
		for (var c = [], f = [], d = "undefined" != typeof Uint8Array ? Uint8Array : Array, p =
				"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", h = 0, y = p.length; h < y; ++h) c[h] = p[h],
			f[p.charCodeAt(h)] = h;
		f["-".charCodeAt(0)] = 62, f["_".charCodeAt(0)] = 63
	}, function (t, e) {
		e.read = function (t, e, n, r, o) {
			var i, l, a = 8 * o - r - 1,
				s = (1 << a) - 1,
				u = s >> 1,
				c = -7,
				f = n ? o - 1 : 0,
				d = n ? -1 : 1,
				p = t[e + f];
			for (f += d, i = p & (1 << -c) - 1, p >>= -c, c += a; c > 0; i = 256 * i + t[e + f], f += d, c -= 8);
			for (l = i & (1 << -c) - 1, i >>= -c, c += r; c > 0; l = 256 * l + t[e + f], f += d, c -= 8);
			if (0 === i) i = 1 - u;
			else {
				if (i === s) return l ? NaN : 1 / 0 * (p ? -1 : 1);
				l += Math.pow(2, r), i -= u
			}
			return (p ? -1 : 1) * l * Math.pow(2, i - r)
		}, e.write = function (t, e, n, r, o, i) {
			var l, a, s, u = 8 * i - o - 1,
				c = (1 << u) - 1,
				f = c >> 1,
				d = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
				p = r ? 0 : i - 1,
				h = r ? 1 : -1,
				y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
			for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, l = c) : (l = Math.floor(Math.log(e) /
						Math.LN2), e * (s = Math.pow(2, -l)) < 1 && (l--, s *= 2), e += l + f >= 1 ? d / s : d * Math.pow(2, 1 - f),
					e * s >= 2 && (l++, s /= 2), l + f >= c ? (a = 0, l = c) : l + f >= 1 ? (a = (e * s - 1) * Math.pow(2, o), l +=
						f) : (a = e * Math.pow(2, f - 1) * Math.pow(2, o), l = 0)); o >= 8; t[n + p] = 255 & a, p += h, a /= 256, o -=
				8);
			for (l = l << o | a, u += o; u > 0; t[n + p] = 255 & l, p += h, l /= 256, u -= 8);
			t[n + p - h] |= 128 * y
		}
	}, function (t, e) {
		var n = {}.toString;
		t.exports = Array.isArray || function (t) {
			return "[object Array]" == n.call(t)
		}
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			n(12), n(15)
		}
		var o = n(4),
			i = n(22),
			l = n(17),
			a = r,
			s = l(o.a, i.a, !1, a, null, null);
		e.a = s.exports
	}, function (t, e, n) {
		var r = n(13);
		"string" == typeof r && (r = [
			[t.i, r, ""]
		]), r.locals && (t.exports = r.locals);
		n(3)("de01be92", r, !0, {
			sourceMap: !1
		})
	}, function (t, e, n) {
		e = t.exports = n(2)(!1), e.push([t.i,
			'/*!\n * Quill Editor v1.3.6\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */.ql-container{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative}.ql-container.ql-disabled .ql-tooltip{visibility:hidden}.ql-container.ql-disabled .ql-editor ul[data-checked]>li:before{pointer-events:none}.ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}.ql-clipboard p{margin:0;padding:0}.ql-editor{-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.42;height:100%;outline:none;overflow-y:auto;padding:12px 15px;-o-tab-size:4;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word}.ql-editor>*{cursor:text}.ql-editor blockquote,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor ol,.ql-editor p,.ql-editor pre,.ql-editor ul{margin:0;padding:0;counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol,.ql-editor ul{padding-left:1.5em}.ql-editor ol>li,.ql-editor ul>li{list-style-type:none}.ql-editor ul>li:before{content:"\\2022"}.ql-editor ul[data-checked=false],.ql-editor ul[data-checked=true]{pointer-events:none}.ql-editor ul[data-checked=false]>li *,.ql-editor ul[data-checked=true]>li *{pointer-events:all}.ql-editor ul[data-checked=false]>li:before,.ql-editor ul[data-checked=true]>li:before{color:#777;cursor:pointer;pointer-events:all}.ql-editor ul[data-checked=true]>li:before{content:"\\2611"}.ql-editor ul[data-checked=false]>li:before{content:"\\2610"}.ql-editor li:before{display:inline-block;white-space:nowrap;width:1.2em}.ql-editor li:not(.ql-direction-rtl):before{margin-left:-1.5em;margin-right:.3em;text-align:right}.ql-editor li.ql-direction-rtl:before{margin-left:.3em;margin-right:-1.5em}.ql-editor ol li:not(.ql-direction-rtl),.ql-editor ul li:not(.ql-direction-rtl){padding-left:1.5em}.ql-editor ol li.ql-direction-rtl,.ql-editor ul li.ql-direction-rtl{padding-right:1.5em}.ql-editor ol li{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.ql-editor ol li:before{content:counter(list-0,decimal) ". "}.ql-editor ol li.ql-indent-1{counter-increment:list-1}.ql-editor ol li.ql-indent-1:before{content:counter(list-1,lower-alpha) ". "}.ql-editor ol li.ql-indent-1{counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-2{counter-increment:list-2}.ql-editor ol li.ql-indent-2:before{content:counter(list-2,lower-roman) ". "}.ql-editor ol li.ql-indent-2{counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-3{counter-increment:list-3}.ql-editor ol li.ql-indent-3:before{content:counter(list-3,decimal) ". "}.ql-editor ol li.ql-indent-3{counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-4{counter-increment:list-4}.ql-editor ol li.ql-indent-4:before{content:counter(list-4,lower-alpha) ". "}.ql-editor ol li.ql-indent-4{counter-reset:list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-5{counter-increment:list-5}.ql-editor ol li.ql-indent-5:before{content:counter(list-5,lower-roman) ". "}.ql-editor ol li.ql-indent-5{counter-reset:list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-6{counter-increment:list-6}.ql-editor ol li.ql-indent-6:before{content:counter(list-6,decimal) ". "}.ql-editor ol li.ql-indent-6{counter-reset:list-7 list-8 list-9}.ql-editor ol li.ql-indent-7{counter-increment:list-7}.ql-editor ol li.ql-indent-7:before{content:counter(list-7,lower-alpha) ". "}.ql-editor ol li.ql-indent-7{counter-reset:list-8 list-9}.ql-editor ol li.ql-indent-8{counter-increment:list-8}.ql-editor ol li.ql-indent-8:before{content:counter(list-8,lower-roman) ". "}.ql-editor ol li.ql-indent-8{counter-reset:list-9}.ql-editor ol li.ql-indent-9{counter-increment:list-9}.ql-editor ol li.ql-indent-9:before{content:counter(list-9,decimal) ". "}.ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.ql-editor .ql-video{display:block;max-width:100%}.ql-editor .ql-video.ql-align-center{margin:0 auto}.ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.ql-editor .ql-bg-black{background-color:#000}.ql-editor .ql-bg-red{background-color:#e60000}.ql-editor .ql-bg-orange{background-color:#f90}.ql-editor .ql-bg-yellow{background-color:#ff0}.ql-editor .ql-bg-green{background-color:#008a00}.ql-editor .ql-bg-blue{background-color:#06c}.ql-editor .ql-bg-purple{background-color:#93f}.ql-editor .ql-color-white{color:#fff}.ql-editor .ql-color-red{color:#e60000}.ql-editor .ql-color-orange{color:#f90}.ql-editor .ql-color-yellow{color:#ff0}.ql-editor .ql-color-green{color:#008a00}.ql-editor .ql-color-blue{color:#06c}.ql-editor .ql-color-purple{color:#93f}.ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.ql-editor .ql-size-small{font-size:.75em}.ql-editor .ql-size-large{font-size:1.5em}.ql-editor .ql-size-huge{font-size:2.5em}.ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.ql-editor .ql-align-center{text-align:center}.ql-editor .ql-align-justify{text-align:justify}.ql-editor .ql-align-right{text-align:right}.ql-editor.ql-blank:before{color:rgba(0,0,0,.6);content:attr(data-placeholder);font-style:italic;left:15px;pointer-events:none;position:absolute;right:15px}.ql-snow.ql-toolbar:after,.ql-snow .ql-toolbar:after{clear:both;content:"";display:table}.ql-snow.ql-toolbar button,.ql-snow .ql-toolbar button{background:none;border:none;cursor:pointer;display:inline-block;float:left;height:24px;padding:3px 5px;width:28px}.ql-snow.ql-toolbar button svg,.ql-snow .ql-toolbar button svg{float:left;height:100%}.ql-snow.ql-toolbar button:active:hover,.ql-snow .ql-toolbar button:active:hover{outline:none}.ql-snow.ql-toolbar input.ql-image[type=file],.ql-snow .ql-toolbar input.ql-image[type=file]{display:none}.ql-snow.ql-toolbar .ql-picker-item.ql-selected,.ql-snow .ql-toolbar .ql-picker-item.ql-selected,.ql-snow.ql-toolbar .ql-picker-item:hover,.ql-snow .ql-toolbar .ql-picker-item:hover,.ql-snow.ql-toolbar .ql-picker-label.ql-active,.ql-snow .ql-toolbar .ql-picker-label.ql-active,.ql-snow.ql-toolbar .ql-picker-label:hover,.ql-snow .ql-toolbar .ql-picker-label:hover,.ql-snow.ql-toolbar button.ql-active,.ql-snow .ql-toolbar button.ql-active,.ql-snow.ql-toolbar button:focus,.ql-snow .ql-toolbar button:focus,.ql-snow.ql-toolbar button:hover,.ql-snow .ql-toolbar button:hover{color:#06c}.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:focus .ql-fill,.ql-snow .ql-toolbar button:focus .ql-fill,.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:hover .ql-fill,.ql-snow .ql-toolbar button:hover .ql-fill,.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill{fill:#06c}.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow.ql-toolbar button.ql-active .ql-stroke,.ql-snow .ql-toolbar button.ql-active .ql-stroke,.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar button:focus .ql-stroke,.ql-snow .ql-toolbar button:focus .ql-stroke,.ql-snow.ql-toolbar button:focus .ql-stroke-miter,.ql-snow .ql-toolbar button:focus .ql-stroke-miter,.ql-snow.ql-toolbar button:hover .ql-stroke,.ql-snow .ql-toolbar button:hover .ql-stroke,.ql-snow.ql-toolbar button:hover .ql-stroke-miter,.ql-snow .ql-toolbar button:hover .ql-stroke-miter{stroke:#06c}@media (pointer:coarse){.ql-snow.ql-toolbar button:hover:not(.ql-active),.ql-snow .ql-toolbar button:hover:not(.ql-active){color:#444}.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{fill:#444}.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{stroke:#444}}.ql-snow,.ql-snow *{-webkit-box-sizing:border-box;box-sizing:border-box}.ql-snow .ql-hidden{display:none}.ql-snow .ql-out-bottom,.ql-snow .ql-out-top{visibility:hidden}.ql-snow .ql-tooltip{position:absolute;-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px)}.ql-snow .ql-tooltip a{cursor:pointer;text-decoration:none}.ql-snow .ql-tooltip.ql-flip{-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px)}.ql-snow .ql-formats{display:inline-block;vertical-align:middle}.ql-snow .ql-formats:after{clear:both;content:"";display:table}.ql-snow .ql-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ql-snow .ql-stroke-miter{fill:none;stroke:#444;stroke-miterlimit:10;stroke-width:2}.ql-snow .ql-fill,.ql-snow .ql-stroke.ql-fill{fill:#444}.ql-snow .ql-empty{fill:none}.ql-snow .ql-even{fill-rule:evenodd}.ql-snow .ql-stroke.ql-thin,.ql-snow .ql-thin{stroke-width:1}.ql-snow .ql-transparent{opacity:.4}.ql-snow .ql-direction svg:last-child{display:none}.ql-snow .ql-direction.ql-active svg:last-child{display:inline}.ql-snow .ql-direction.ql-active svg:first-child{display:none}.ql-snow .ql-editor h1{font-size:2em}.ql-snow .ql-editor h2{font-size:1.5em}.ql-snow .ql-editor h3{font-size:1.17em}.ql-snow .ql-editor h4{font-size:1em}.ql-snow .ql-editor h5{font-size:.83em}.ql-snow .ql-editor h6{font-size:.67em}.ql-snow .ql-editor a{text-decoration:underline}.ql-snow .ql-editor blockquote{border-left:4px solid #ccc;margin-bottom:5px;margin-top:5px;padding-left:16px}.ql-snow .ql-editor code,.ql-snow .ql-editor pre{background-color:#f0f0f0;border-radius:3px}.ql-snow .ql-editor pre{white-space:pre-wrap;margin-bottom:5px;margin-top:5px;padding:5px 10px}.ql-snow .ql-editor code{font-size:85%;padding:2px 4px}.ql-snow .ql-editor pre.ql-syntax{background-color:#23241f;color:#f8f8f2;overflow:visible}.ql-snow .ql-editor img{max-width:100%}.ql-snow .ql-picker{color:#444;display:inline-block;float:left;font-size:14px;font-weight:500;height:24px;position:relative;vertical-align:middle}.ql-snow .ql-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:2px;position:relative;width:100%}.ql-snow .ql-picker-label:before{display:inline-block;line-height:22px}.ql-snow .ql-picker-options{background-color:#fff;display:none;min-width:100%;padding:4px 8px;position:absolute;white-space:nowrap}.ql-snow .ql-picker-options .ql-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px}.ql-snow .ql-picker.ql-expanded .ql-picker-label{color:#ccc;z-index:2}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill{fill:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke{stroke:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-options{display:block;margin-top:-1px;top:100%;z-index:1}.ql-snow .ql-color-picker,.ql-snow .ql-icon-picker{width:28px}.ql-snow .ql-color-picker .ql-picker-label,.ql-snow .ql-icon-picker .ql-picker-label{padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-label svg,.ql-snow .ql-icon-picker .ql-picker-label svg{right:4px}.ql-snow .ql-icon-picker .ql-picker-options{padding:4px 0}.ql-snow .ql-icon-picker .ql-picker-item{height:24px;width:24px;padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-options{padding:3px 5px;width:152px}.ql-snow .ql-color-picker .ql-picker-item{border:1px solid transparent;float:left;height:16px;margin:2px;padding:0;width:16px}.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=""]):before{content:attr(data-label)}.ql-snow .ql-picker.ql-header{width:98px}.ql-snow .ql-picker.ql-header .ql-picker-item:before,.ql-snow .ql-picker.ql-header .ql-picker-label:before{content:"Normal"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]:before{content:"Heading 1"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]:before{content:"Heading 2"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]:before{content:"Heading 3"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]:before{content:"Heading 4"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]:before{content:"Heading 5"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]:before{content:"Heading 6"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]:before{font-size:2em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]:before{font-size:1.5em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]:before{font-size:1.17em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]:before{font-size:1em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]:before{font-size:.83em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]:before{font-size:.67em}.ql-snow .ql-picker.ql-font{width:108px}.ql-snow .ql-picker.ql-font .ql-picker-item:before,.ql-snow .ql-picker.ql-font .ql-picker-label:before{content:"Sans Serif"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]:before{content:"Serif"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]:before{content:"Monospace"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before{font-family:Georgia,Times New Roman,serif}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before{font-family:Monaco,Courier New,monospace}.ql-snow .ql-picker.ql-size{width:98px}.ql-snow .ql-picker.ql-size .ql-picker-item:before,.ql-snow .ql-picker.ql-size .ql-picker-label:before{content:"Normal"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]:before{content:"Small"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]:before{content:"Large"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]:before{content:"Huge"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before{font-size:10px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before{font-size:18px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before{font-size:32px}.ql-snow .ql-color-picker.ql-background .ql-picker-item{background-color:#fff}.ql-snow .ql-color-picker.ql-color .ql-picker-item{background-color:#000}.ql-toolbar.ql-snow{border:1px solid #ccc;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;padding:8px}.ql-toolbar.ql-snow .ql-formats{margin-right:15px}.ql-toolbar.ql-snow .ql-picker-label{border:1px solid transparent}.ql-toolbar.ql-snow .ql-picker-options{border:1px solid transparent;-webkit-box-shadow:rgba(0,0,0,.2) 0 2px 8px;box-shadow:0 2px 8px rgba(0,0,0,.2)}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label,.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options{border-color:#ccc}.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover{border-color:#000}.ql-toolbar.ql-snow+.ql-container.ql-snow{border-top:0}.ql-snow .ql-tooltip{background-color:#fff;border:1px solid #ccc;-webkit-box-shadow:0 0 5px #ddd;box-shadow:0 0 5px #ddd;color:#444;padding:5px 12px;white-space:nowrap}.ql-snow .ql-tooltip:before{content:"Visit URL:";line-height:26px;margin-right:8px}.ql-snow .ql-tooltip input[type=text]{display:none;border:1px solid #ccc;font-size:13px;height:26px;margin:0;padding:3px 5px;width:170px}.ql-snow .ql-tooltip a.ql-preview{display:inline-block;max-width:200px;overflow-x:hidden;text-overflow:ellipsis;vertical-align:top}.ql-snow .ql-tooltip a.ql-action:after{border-right:1px solid #ccc;content:"Edit";margin-left:16px;padding-right:8px}.ql-snow .ql-tooltip a.ql-remove:before{content:"Remove";margin-left:8px}.ql-snow .ql-tooltip a{line-height:26px}.ql-snow .ql-tooltip.ql-editing a.ql-preview,.ql-snow .ql-tooltip.ql-editing a.ql-remove{display:none}.ql-snow .ql-tooltip.ql-editing input[type=text]{display:inline-block}.ql-snow .ql-tooltip.ql-editing a.ql-action:after{border-right:0;content:"Save";padding-right:0}.ql-snow .ql-tooltip[data-mode=link]:before{content:"Enter link:"}.ql-snow .ql-tooltip[data-mode=formula]:before{content:"Enter formula:"}.ql-snow .ql-tooltip[data-mode=video]:before{content:"Enter video:"}.ql-snow a{color:#06c}.ql-container.ql-snow{border:1px solid #ccc}',
			""
		])
	}, function (t, e) {
		t.exports = function (t, e) {
			for (var n = [], r = {}, o = 0; o < e.length; o++) {
				var i = e[o],
					l = i[0],
					a = i[1],
					s = i[2],
					u = i[3],
					c = {
						id: t + ":" + o,
						css: a,
						media: s,
						sourceMap: u
					};
				r[l] ? r[l].parts.push(c) : n.push(r[l] = {
					id: l,
					parts: [c]
				})
			}
			return n
		}
	}, function (t, e, n) {
		var r = n(16);
		"string" == typeof r && (r = [
			[t.i, r, ""]
		]), r.locals && (t.exports = r.locals);
		n(3)("93ab2cd2", r, !0, {
			sourceMap: !1
		})
	}, function (t, e, n) {
		e = t.exports = n(2)(!1), e.push([t.i,
			".ql-editor{min-height:200px;font-size:16px}.ql-snow .ql-stroke.ql-thin,.ql-snow .ql-thin{stroke-width:1px!important}.quillWrapper .ql-snow.ql-toolbar{padding-top:8px;padding-bottom:4px}.quillWrapper .ql-snow.ql-toolbar .ql-formats{margin-bottom:10px}.ql-snow .ql-toolbar button svg,.quillWrapper .ql-snow.ql-toolbar button svg{width:22px;height:22px}.quillWrapper .ql-editor ul[data-checked=false]>li:before,.quillWrapper .ql-editor ul[data-checked=true]>li:before{font-size:1.35em;vertical-align:baseline;bottom:-.065em;font-weight:900;color:#222}.quillWrapper .ql-snow .ql-stroke{stroke:rgba(63,63,63,.95);stroke-linecap:square;stroke-linejoin:initial;stroke-width:1.7px}.quillWrapper .ql-picker-label{font-size:15px}.quillWrapper .ql-snow .ql-active .ql-stroke{stroke-width:2.25px}.quillWrapper .ql-toolbar.ql-snow .ql-formats{vertical-align:top}.ql-picker:not(.ql-background){position:relative;top:2px}.ql-picker.ql-color-picker svg{width:22px!important;height:22px!important}.quillWrapper .imageResizeActive img{display:block;cursor:pointer}.quillWrapper .imageResizeActive~div svg{cursor:pointer}",
			""
		])
	}, function (t, e) {
		t.exports = function (t, e, n, r, o, i) {
			var l, a = t = t || {},
				s = typeof t.default;
			"object" !== s && "function" !== s || (l = t, a = t.default);
			var u = "function" == typeof a ? a.options : a;
			e && (u.render = e.render, u.staticRenderFns = e.staticRenderFns, u._compiled = !0), n && (u.functional = !0),
				o && (u._scopeId = o);
			var c;
			if (i ? (c = function (t) {
					t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
						t || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), r && r.call(this, t), t && t._registeredComponents &&
						t._registeredComponents.add(i)
				}, u._ssrRegister = c) : r && (c = r), c) {
				var f = u.functional,
					d = f ? u.render : u.beforeCreate;
				f ? (u._injectStyles = c, u.render = function (t, e) {
					return c.call(e), d(t, e)
				}) : u.beforeCreate = d ? [].concat(d, c) : [c]
			}
			return {
				esModule: l,
				exports: a,
				options: u
			}
		}
	}, function (t, e, n) {
		"use strict";
		var r = [
			[{
				header: [!1, 1, 2, 3, 4, 5, 6]
			}],
			["bold", "italic", "underline", "strike"],
			[{
				align: ""
			}, {
				align: "center"
			}, {
				align: "right"
			}, {
				align: "justify"
			}],
			["blockquote", "code-block"],
			[{
				list: "ordered"
			}, {
				list: "bullet"
			}, {
				list: "check"
			}],
			[{
				indent: "-1"
			}, {
				indent: "+1"
			}],
			[{
				color: []
			}, {
				background: []
			}],
			["link", "image", "video"],
			["clean"]
		];
		e.a = r
	}, function (t, e, n) {
		"use strict";

		function r(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}
		var o = function () {
				function t(t, e) {
					var n = [],
						r = !0,
						o = !1,
						i = void 0;
					try {
						for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !
							0);
					} catch (t) {
						o = !0, i = t
					} finally {
						try {
							!r && a.return && a.return()
						} finally {
							if (o) throw i
						}
					}
					return n
				}
				return function (e, n) {
					if (Array.isArray(e)) return e;
					if (Symbol.iterator in Object(e)) return t(e, n);
					throw new TypeError("Invalid attempt to destructure non-iterable instance")
				}
			}(),
			i = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
							t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			l = function () {
				function t(e, n) {
					var o = this;
					r(this, t), this.quill = e, this.options = n, this.matches = [{
						name: "header",
						pattern: /^(#){1,6}\s/g,
						action: function (t, e) {
							switch (t.trim()) {
								case "#":
									o.quill.formatLine(e.index, 0, "header", 1);
									break;
								case "##":
									o.quill.formatLine(e.index, 0, "header", 2);
									break;
								case "###":
									o.quill.formatLine(e.index, 0, "header", 3);
									break;
								case "####":
									o.quill.formatLine(e.index, 0, "header", 4);
									break;
								case "#####":
									o.quill.formatLine(e.index, 0, "header", 5);
									break;
								case "######":
									o.quill.formatLine(e.index, 0, "header", 6)
							}
							setTimeout(function () {
								o.quill.deleteText(e.index - t.length, t.length)
							}, 0)
						}
					}, {
						name: "blockquote",
						pattern: /^(>)\s/g,
						action: function (t, e) {
							setTimeout(function () {
								o.quill.formatLine(e.index, 1, "blockquote", !0), o.quill.deleteText(e.index - 2, 2)
							}, 0)
						}
					}, {
						name: "code-block",
						pattern: /^`{3}(?:\s|\n)/g,
						action: function (t, e) {
							setTimeout(function () {
								o.quill.formatLine(e.index, 1, "code-block", !0), o.quill.deleteText(e.index - 4, 4)
							}, 0)
						}
					}, {
						name: "bolditalic",
						pattern: /(?:\*|_){3}(.+?)(?:\*|_){3}/g,
						action: function (t, e, n, r) {
							var i = n.exec(t),
								l = i[0],
								a = i[1],
								s = r + i.index;
							t.match(/^([*_ \n]+)$/g) || setTimeout(function () {
								o.quill.deleteText(s, l.length), o.quill.insertText(s, a, {
									bold: !0
								}), o.quill.format("bold", !1)
							}, 0)
						}
					}, {
						name: "bold",
						pattern: /(?:\*|_){2}(.+?)(?:\*|_){2}/g,
						action: function (t, e, n, r) {
							var i = n.exec(t),
								l = i[0],
								a = i[1],
								s = r + i.index;
							t.match(/^([*_ \n]+)$/g) || setTimeout(function () {
								o.quill.deleteText(s, l.length), o.quill.insertText(s, a, {
									bold: !0
								}), o.quill.format("bold", !1)
							}, 0)
						}
					}, {
						name: "italic",
						pattern: /(?:\*|_){1}(.+?)(?:\*|_){1}/g,
						action: function (t, e, n, r) {
							var i = n.exec(t),
								l = i[0],
								a = i[1],
								s = r + i.index;
							t.match(/^([*_ \n]+)$/g) || setTimeout(function () {
								o.quill.deleteText(s, l.length), o.quill.insertText(s, a, {
									italic: !0
								}), o.quill.format("italic", !1)
							}, 0)
						}
					}, {
						name: "strikethrough",
						pattern: /(?:~~)(.+?)(?:~~)/g,
						action: function (t, e, n, r) {
							var i = n.exec(t),
								l = i[0],
								a = i[1],
								s = r + i.index;
							t.match(/^([*_ \n]+)$/g) || setTimeout(function () {
								o.quill.deleteText(s, l.length), o.quill.insertText(s, a, {
									strike: !0
								}), o.quill.format("strike", !1)
							}, 0)
						}
					}, {
						name: "code",
						pattern: /(?:`)(.+?)(?:`)/g,
						action: function (t, e, n, r) {
							var i = n.exec(t),
								l = i[0],
								a = i[1],
								s = r + i.index;
							t.match(/^([*_ \n]+)$/g) || setTimeout(function () {
								o.quill.deleteText(s, l.length), o.quill.insertText(s, a, {
									code: !0
								}), o.quill.format("code", !1), o.quill.insertText(o.quill.getSelection(), " ")
							}, 0)
						}
					}, {
						name: "asterisk-ul",
						pattern: /^(\*|\+)\s$/g,
						action: function (t, e, n) {
							setTimeout(function () {
								o.quill.formatLine(e.index, 1, "list", "unordered"), o.quill.deleteText(e.index - 2, 2)
							}, 0)
						}
					}, {
						name: "image",
						pattern: /(?:!\[(.+?)\])(?:\((.+?)\))/g,
						action: function (t, e, n) {
							var r = t.search(n),
								i = t.match(n)[0],
								l = t.match(/(?:\((.*?)\))/g)[0],
								a = e.index - i.length - 1; - 1 !== r && setTimeout(function () {
								o.quill.deleteText(a, i.length), o.quill.insertEmbed(a, "image", l.slice(1, l.length - 1))
							}, 0)
						}
					}, {
						name: "link",
						pattern: /(?:\[(.+?)\])(?:\((.+?)\))/g,
						action: function (t, e, n) {
							var r = t.search(n),
								i = t.match(n)[0],
								l = t.match(/(?:\[(.*?)\])/g)[0],
								a = t.match(/(?:\((.*?)\))/g)[0],
								s = e.index - i.length - 1; - 1 !== r && setTimeout(function () {
								o.quill.deleteText(s, i.length), o.quill.insertText(s, l.slice(1, l.length - 1), "link", a.slice(1, a.length -
									1))
							}, 0)
						}
					}], this.quill.on("text-change", function (t, e, n) {
						for (var r = 0; r < t.ops.length; r++) t.ops[r].hasOwnProperty("insert") && (" " === t.ops[r].insert ? o.onSpace() :
							"\n" === t.ops[r].insert && o.onEnter())
					})
				}
				return i(t, [{
					key: "onSpace",
					value: function () {
						var t = this.quill.getSelection(),
							e = this.quill.getLine(t.index),
							n = o(e, 2),
							r = n[0],
							i = n[1],
							l = r.domNode.textContent,
							a = t.index - i;
						if (void 0 !== l && l) {
							var s = !0,
								u = !1,
								c = void 0;
							try {
								for (var f, d = this.matches[Symbol.iterator](); !(s = (f = d.next()).done); s = !0) {
									var p = f.value;
									if (l.match(p.pattern)) return console.log("matched", p.name, l), void p.action(l, t, p.pattern, a)
								}
							} catch (t) {
								u = !0, c = t
							} finally {
								try {
									!s && d.return && d.return()
								} finally {
									if (u) throw c
								}
							}
						}
					}
				}, {
					key: "onEnter",
					value: function () {
						var t = this.quill.getSelection();
						if (t) {
							var e = this.quill.getLine(t.index),
								n = o(e, 2),
								r = n[0],
								i = n[1],
								l = r.domNode.textContent + " ",
								a = t.index - i;
							if (t.length = t.index++, void 0 !== l && l) {
								var s = !0,
									u = !1,
									c = void 0;
								try {
									for (var f, d = this.matches[Symbol.iterator](); !(s = (f = d.next()).done); s = !0) {
										var p = f.value;
										if (l.match(p.pattern)) return console.log("matched", p.name, l), void p.action(l, t, p.pattern, a)
									}
								} catch (t) {
									u = !0, c = t
								} finally {
									try {
										!s && d.return && d.return()
									} finally {
										if (u) throw c
									}
								}
							}
						}
					}
				}]), t
			}();
		e.a = l
	}, function (t, e, n) {
		(function (t, n) {
			function r(t, e, n) {
				switch (n.length) {
					case 0:
						return t.call(e);
					case 1:
						return t.call(e, n[0]);
					case 2:
						return t.call(e, n[0], n[1]);
					case 3:
						return t.call(e, n[0], n[1], n[2])
				}
				return t.apply(e, n)
			}

			function o(t, e) {
				for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
				return r
			}

			function i(t, e) {
				return null == t ? void 0 : t[e]
			}

			function l(t, e) {
				return "__proto__" == e ? void 0 : t[e]
			}

			function a(t) {
				var e = -1,
					n = null == t ? 0 : t.length;
				for (this.clear(); ++e < n;) {
					var r = t[e];
					this.set(r[0], r[1])
				}
			}

			function s() {
				this.__data__ = ve ? ve(null) : {}, this.size = 0
			}

			function u(t) {
				var e = this.has(t) && delete this.__data__[t];
				return this.size -= e ? 1 : 0, e
			}

			function c(t) {
				var e = this.__data__;
				if (ve) {
					var n = e[t];
					return n === wt ? void 0 : n
				}
				return Qt.call(e, t) ? e[t] : void 0
			}

			function f(t) {
				var e = this.__data__;
				return ve ? void 0 !== e[t] : Qt.call(e, t)
			}

			function d(t, e) {
				var n = this.__data__;
				return this.size += this.has(t) ? 0 : 1, n[t] = ve && void 0 === e ? wt : e, this
			}

			function p(t) {
				var e = -1,
					n = null == t ? 0 : t.length;
				for (this.clear(); ++e < n;) {
					var r = t[e];
					this.set(r[0], r[1])
				}
			}

			function h() {
				this.__data__ = [], this.size = 0
			}

			function y(t) {
				var e = this.__data__,
					n = L(e, t);
				return !(n < 0) && (n == e.length - 1 ? e.pop() : ce.call(e, n, 1), --this.size, !0)
			}

			function b(t) {
				var e = this.__data__,
					n = L(e, t);
				return n < 0 ? void 0 : e[n][1]
			}

			function v(t) {
				return L(this.__data__, t) > -1
			}

			function g(t, e) {
				var n = this.__data__,
					r = L(n, t);
				return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this
			}

			function m(t) {
				var e = -1,
					n = null == t ? 0 : t.length;
				for (this.clear(); ++e < n;) {
					var r = t[e];
					this.set(r[0], r[1])
				}
			}

			function q() {
				this.size = 0, this.__data__ = {
					hash: new a,
					map: new(be || p),
					string: new a
				}
			}

			function _(t) {
				var e = G(this, t).delete(t);
				return this.size -= e ? 1 : 0, e
			}

			function w(t) {
				return G(this, t).get(t)
			}

			function k(t) {
				return G(this, t).has(t)
			}

			function O(t, e) {
				var n = G(this, t),
					r = n.size;
				return n.set(t, e), this.size += n.size == r ? 0 : 1, this
			}

			function x(t) {
				var e = this.__data__ = new p(t);
				this.size = e.size
			}

			function E() {
				this.__data__ = new p, this.size = 0
			}

			function A(t) {
				var e = this.__data__,
					n = e.delete(t);
				return this.size = e.size, n
			}

			function j(t) {
				return this.__data__.get(t)
			}

			function N(t) {
				return this.__data__.has(t)
			}

			function T(t, e) {
				var n = this.__data__;
				if (n instanceof p) {
					var r = n.__data__;
					if (!be || r.length < _t - 1) return r.push([t, e]), this.size = ++n.size, this;
					n = this.__data__ = new m(r)
				}
				return n.set(t, e), this.size = n.size, this
			}

			function S(t, e) {
				var n = ke(t),
					r = !n && we(t),
					i = !n && !r && Oe(t),
					l = !n && !r && !i && xe(t),
					a = n || r || i || l,
					s = a ? o(t.length, String) : [],
					u = s.length;
				for (var c in t) !e && !Qt.call(t, c) || a && ("length" == c || i && ("offset" == c || "parent" == c) || l &&
					("buffer" == c || "byteLength" == c || "byteOffset" == c) || J(c, u)) || s.push(c);
				return s
			}

			function P(t, e, n) {
				(void 0 === n || st(t[e], n)) && (void 0 !== n || e in t) || R(t, e, n)
			}

			function C(t, e, n) {
				var r = t[e];
				Qt.call(t, e) && st(r, n) && (void 0 !== n || e in t) || R(t, e, n)
			}

			function L(t, e) {
				for (var n = t.length; n--;)
					if (st(t[n][0], e)) return n;
				return -1
			}

			function R(t, e, n) {
				"__proto__" == e && de ? de(t, e, {
					configurable: !0,
					enumerable: !0,
					value: n,
					writable: !0
				}) : t[e] = n
			}

			function M(t) {
				return null == t ? void 0 === t ? Ct : Tt : fe && fe in Object(t) ? X(t) : it(t)
			}

			function I(t) {
				return ht(t) && M(t) == Et
			}

			function B(t) {
				return !(!pt(t) || nt(t)) && (ft(t) ? ne : Rt).test(at(t))
			}

			function D(t) {
				return ht(t) && dt(t.length) && !!It[M(t)]
			}

			function U(t) {
				if (!pt(t)) return ot(t);
				var e = rt(t),
					n = [];
				for (var r in t)("constructor" != r || !e && Qt.call(t, r)) && n.push(r);
				return n
			}

			function z(t, e, n, r, o) {
				t !== e && me(e, function (i, a) {
					if (pt(i)) o || (o = new x), F(t, e, a, n, z, r, o);
					else {
						var s = r ? r(l(t, a), i, a + "", t, e, o) : void 0;
						void 0 === s && (s = i), P(t, a, s)
					}
				}, vt)
			}

			function F(t, e, n, r, o, i, a) {
				var s = l(t, n),
					u = l(e, n),
					c = a.get(u);
				if (c) return void P(t, n, c);
				var f = i ? i(s, u, n + "", t, e, a) : void 0,
					d = void 0 === f;
				if (d) {
					var p = ke(u),
						h = !p && Oe(u),
						y = !p && !h && xe(u);
					f = u, p || h || y ? ke(s) ? f = s : ct(s) ? f = W(s) : h ? (d = !1, f = K(u, !0)) : y ? (d = !1, f = V(u, !0)) :
						f = [] : yt(u) || we(u) ? (f = s, we(s) ? f = bt(s) : (!pt(s) || r && ft(s)) && (f = Q(u))) : d = !1
				}
				d && (a.set(u, f), o(f, u, r, i, a), a.delete(u)), P(t, n, f)
			}

			function H(t, e) {
				return _e(lt(t, e, mt), t + "")
			}

			function K(t, e) {
				if (e) return t.slice();
				var n = t.length,
					r = le ? le(n) : new t.constructor(n);
				return t.copy(r), r
			}

			function Y(t) {
				var e = new t.constructor(t.byteLength);
				return new ie(e).set(new ie(t)), e
			}

			function V(t, e) {
				var n = e ? Y(t.buffer) : t.buffer;
				return new t.constructor(n, t.byteOffset, t.length)
			}

			function W(t, e) {
				var n = -1,
					r = t.length;
				for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
				return e
			}

			function Z(t, e, n, r) {
				var o = !n;
				n || (n = {});
				for (var i = -1, l = e.length; ++i < l;) {
					var a = e[i],
						s = r ? r(n[a], t[a], a, n, t) : void 0;
					void 0 === s && (s = t[a]), o ? R(n, a, s) : C(n, a, s)
				}
				return n
			}

			function G(t, e) {
				var n = t.__data__;
				return et(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
			}

			function $(t, e) {
				var n = i(t, e);
				return B(n) ? n : void 0
			}

			function X(t) {
				var e = Qt.call(t, fe),
					n = t[fe];
				try {
					t[fe] = void 0;
					var r = !0
				} catch (t) {}
				var o = te.call(t);
				return r && (e ? t[fe] = n : delete t[fe]), o
			}

			function Q(t) {
				return "function" != typeof t.constructor || rt(t) ? {} : ge(ae(t))
			}

			function J(t, e) {
				var n = typeof t;
				return !!(e = null == e ? xt : e) && ("number" == n || "symbol" != n && Mt.test(t)) && t > -1 && t % 1 == 0 &&
					t < e
			}

			function tt(t, e, n) {
				if (!pt(n)) return !1;
				var r = typeof e;
				return !!("number" == r ? ut(n) && J(e, n.length) : "string" == r && e in n) && st(n[e], t)
			}

			function et(t) {
				var e = typeof t;
				return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
			}

			function nt(t) {
				return !!Jt && Jt in t
			}

			function rt(t) {
				var e = t && t.constructor;
				return t === ("function" == typeof e && e.prototype || Gt)
			}

			function ot(t) {
				var e = [];
				if (null != t)
					for (var n in Object(t)) e.push(n);
				return e
			}

			function it(t) {
				return te.call(t)
			}

			function lt(t, e, n) {
				return e = he(void 0 === e ? t.length - 1 : e, 0),
					function () {
						for (var o = arguments, i = -1, l = he(o.length - e, 0), a = Array(l); ++i < l;) a[i] = o[e + i];
						i = -1;
						for (var s = Array(e + 1); ++i < e;) s[i] = o[i];
						return s[e] = n(a), r(t, this, s)
					}
			}

			function at(t) {
				if (null != t) {
					try {
						return Xt.call(t)
					} catch (t) {}
					try {
						return t + ""
					} catch (t) {}
				}
				return ""
			}

			function st(t, e) {
				return t === e || t !== t && e !== e
			}

			function ut(t) {
				return null != t && dt(t.length) && !ft(t)
			}

			function ct(t) {
				return ht(t) && ut(t)
			}

			function ft(t) {
				if (!pt(t)) return !1;
				var e = M(t);
				return e == jt || e == Nt || e == At || e == Pt
			}

			function dt(t) {
				return "number" == typeof t && t > -1 && t % 1 == 0 && t <= xt
			}

			function pt(t) {
				var e = typeof t;
				return null != t && ("object" == e || "function" == e)
			}

			function ht(t) {
				return null != t && "object" == typeof t
			}

			function yt(t) {
				if (!ht(t) || M(t) != St) return !1;
				var e = ae(t);
				if (null === e) return !0;
				var n = Qt.call(e, "constructor") && e.constructor;
				return "function" == typeof n && n instanceof n && Xt.call(n) == ee
			}

			function bt(t) {
				return Z(t, vt(t))
			}

			function vt(t) {
				return ut(t) ? S(t, !0) : U(t)
			}

			function gt(t) {
				return function () {
					return t
				}
			}

			function mt(t) {
				return t
			}

			function qt() {
				return !1
			}
			var _t = 200,
				wt = "__lodash_hash_undefined__",
				kt = 800,
				Ot = 16,
				xt = 9007199254740991,
				Et = "[object Arguments]",
				At = "[object AsyncFunction]",
				jt = "[object Function]",
				Nt = "[object GeneratorFunction]",
				Tt = "[object Null]",
				St = "[object Object]",
				Pt = "[object Proxy]",
				Ct = "[object Undefined]",
				Lt = /[\\^$.*+?()[\]{}|]/g,
				Rt = /^\[object .+?Constructor\]$/,
				Mt = /^(?:0|[1-9]\d*)$/,
				It = {};
			It["[object Float32Array]"] = It["[object Float64Array]"] = It["[object Int8Array]"] = It["[object Int16Array]"] =
				It["[object Int32Array]"] = It["[object Uint8Array]"] = It["[object Uint8ClampedArray]"] = It[
					"[object Uint16Array]"] = It["[object Uint32Array]"] = !0, It[Et] = It["[object Array]"] = It[
					"[object ArrayBuffer]"] = It["[object Boolean]"] = It["[object DataView]"] = It["[object Date]"] = It[
					"[object Error]"] = It[jt] = It["[object Map]"] = It["[object Number]"] = It[St] = It["[object RegExp]"] = It[
					"[object Set]"] = It["[object String]"] = It["[object WeakMap]"] = !1;
			var Bt = "object" == typeof t && t && t.Object === Object && t,
				Dt = "object" == typeof self && self && self.Object === Object && self,
				Ut = Bt || Dt || Function("return this")(),
				zt = "object" == typeof e && e && !e.nodeType && e,
				Ft = zt && "object" == typeof n && n && !n.nodeType && n,
				Ht = Ft && Ft.exports === zt,
				Kt = Ht && Bt.process,
				Yt = function () {
					try {
						return Kt && Kt.binding && Kt.binding("util")
					} catch (t) {}
				}(),
				Vt = Yt && Yt.isTypedArray,
				Wt = Array.prototype,
				Zt = Function.prototype,
				Gt = Object.prototype,
				$t = Ut["__core-js_shared__"],
				Xt = Zt.toString,
				Qt = Gt.hasOwnProperty,
				Jt = function () {
					var t = /[^.]+$/.exec($t && $t.keys && $t.keys.IE_PROTO || "");
					return t ? "Symbol(src)_1." + t : ""
				}(),
				te = Gt.toString,
				ee = Xt.call(Object),
				ne = RegExp("^" + Xt.call(Qt).replace(Lt, "\\$&").replace(
					/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
				re = Ht ? Ut.Buffer : void 0,
				oe = Ut.Symbol,
				ie = Ut.Uint8Array,
				le = re ? re.allocUnsafe : void 0,
				ae = function (t, e) {
					return function (n) {
						return t(e(n))
					}
				}(Object.getPrototypeOf, Object),
				se = Object.create,
				ue = Gt.propertyIsEnumerable,
				ce = Wt.splice,
				fe = oe ? oe.toStringTag : void 0,
				de = function () {
					try {
						var t = $(Object, "defineProperty");
						return t({}, "", {}), t
					} catch (t) {}
				}(),
				pe = re ? re.isBuffer : void 0,
				he = Math.max,
				ye = Date.now,
				be = $(Ut, "Map"),
				ve = $(Object, "create"),
				ge = function () {
					function t() {}
					return function (e) {
						if (!pt(e)) return {};
						if (se) return se(e);
						t.prototype = e;
						var n = new t;
						return t.prototype = void 0, n
					}
				}();
			a.prototype.clear = s, a.prototype.delete = u, a.prototype.get = c, a.prototype.has = f, a.prototype.set = d, p
				.prototype.clear = h, p.prototype.delete = y, p.prototype.get = b, p.prototype.has = v, p.prototype.set = g, m
				.prototype.clear = q, m.prototype.delete = _, m.prototype.get = w, m.prototype.has = k, m.prototype.set = O, x
				.prototype.clear = E, x.prototype.delete = A, x.prototype.get = j, x.prototype.has = N, x.prototype.set = T;
			var me = function (t) {
					return function (e, n, r) {
						for (var o = -1, i = Object(e), l = r(e), a = l.length; a--;) {
							var s = l[t ? a : ++o];
							if (!1 === n(i[s], s, i)) break
						}
						return e
					}
				}(),
				qe = de ? function (t, e) {
					return de(t, "toString", {
						configurable: !0,
						enumerable: !1,
						value: gt(e),
						writable: !0
					})
				} : mt,
				_e = function (t) {
					var e = 0,
						n = 0;
					return function () {
						var r = ye(),
							o = Ot - (r - n);
						if (n = r, o > 0) {
							if (++e >= kt) return arguments[0]
						} else e = 0;
						return t.apply(void 0, arguments)
					}
				}(qe),
				we = I(function () {
					return arguments
				}()) ? I : function (t) {
					return ht(t) && Qt.call(t, "callee") && !ue.call(t, "callee")
				},
				ke = Array.isArray,
				Oe = pe || qt,
				xe = Vt ? function (t) {
					return function (e) {
						return t(e)
					}
				}(Vt) : D,
				Ee = function (t) {
					return H(function (e, n) {
						var r = -1,
							o = n.length,
							i = o > 1 ? n[o - 1] : void 0,
							l = o > 2 ? n[2] : void 0;
						for (i = t.length > 3 && "function" == typeof i ? (o--, i) : void 0, l && tt(n[0], n[1], l) && (i = o < 3 ?
								void 0 : i, o = 1), e = Object(e); ++r < o;) {
							var a = n[r];
							a && t(e, a, r, i)
						}
						return e
					})
				}(function (t, e, n) {
					z(t, e, n)
				});
			n.exports = Ee
		}).call(e, n(1), n(21)(t))
	}, function (t, e) {
		t.exports = function (t) {
			return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []),
				Object.defineProperty(t, "loaded", {
					enumerable: !0,
					get: function () {
						return t.l
					}
				}), Object.defineProperty(t, "id", {
					enumerable: !0,
					get: function () {
						return t.i
					}
				}), t.webpackPolyfill = 1), t
		}
	}, function (t, e, n) {
		"use strict";
		var r = function () {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {
					staticClass: "quillWrapper"
				}, [n("div", {
					ref: "quillContainer",
					attrs: {
						id: t.id
					}
				}), t._v(" "), t.useCustomImageHandler ? n("input", {
					ref: "fileInput",
					staticStyle: {
						display: "none"
					},
					attrs: {
						id: "file-upload",
						type: "file"
					},
					on: {
						change: function (e) {
							t.emitImageInfo(e)
						}
					}
				}) : t._e()])
			},
			o = [],
			i = {
				render: r,
				staticRenderFns: o
			};
		e.a = i
	}])
});
