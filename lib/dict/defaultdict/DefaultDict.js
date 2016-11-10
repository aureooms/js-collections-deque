"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var _DefaultDict = exports._DefaultDict = function _DefaultDict(Dict, Map) {

	var DefaultDict = function DefaultDict(default_factory, mapping) {

		this.container = new Map(mapping);

		this.default_factory = default_factory;
	};

	DefaultDict.fromkeys = function (seq) {
		var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
		var default_factory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;


		return new DefaultDict(default_factory, Mapping.fromkeys(seq, value));
	};

	DefaultDict.prototype = new Dict();

	DefaultDict.prototype.__missing__ = function (key) {

		if (this.default_factory === null) throw new KeyError(key);

		return this.default_factory();
	};

	return DefaultDict;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaWN0L2RlZmF1bHRkaWN0L0RlZmF1bHREaWN0LmpzIl0sIm5hbWVzIjpbIl9EZWZhdWx0RGljdCIsIkRpY3QiLCJNYXAiLCJEZWZhdWx0RGljdCIsImRlZmF1bHRfZmFjdG9yeSIsIm1hcHBpbmciLCJjb250YWluZXIiLCJmcm9ta2V5cyIsInNlcSIsInZhbHVlIiwiTWFwcGluZyIsInByb3RvdHlwZSIsIl9fbWlzc2luZ19fIiwia2V5IiwiS2V5RXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ08sSUFBTUEsc0NBQWUsU0FBZkEsWUFBZSxDQUFXQyxJQUFYLEVBQWtCQyxHQUFsQixFQUF3Qjs7QUFFbkQsS0FBTUMsY0FBYyxTQUFkQSxXQUFjLENBQVdDLGVBQVgsRUFBOEJDLE9BQTlCLEVBQXlDOztBQUU1RCxPQUFLQyxTQUFMLEdBQWlCLElBQUlKLEdBQUosQ0FBU0csT0FBVCxDQUFqQjs7QUFFQSxPQUFLRCxlQUFMLEdBQXVCQSxlQUF2QjtBQUVBLEVBTkQ7O0FBUUFELGFBQVlJLFFBQVosR0FBdUIsVUFBV0MsR0FBWCxFQUF5RDtBQUFBLE1BQXhDQyxLQUF3Qyx1RUFBaEMsSUFBZ0M7QUFBQSxNQUF6QkwsZUFBeUIsdUVBQVAsSUFBTzs7O0FBRS9FLFNBQU8sSUFBSUQsV0FBSixDQUFpQkMsZUFBakIsRUFBbUNNLFFBQVFILFFBQVIsQ0FBa0JDLEdBQWxCLEVBQXdCQyxLQUF4QixDQUFuQyxDQUFQO0FBRUEsRUFKRDs7QUFNQU4sYUFBWVEsU0FBWixHQUF3QixJQUFJVixJQUFKLEVBQXhCOztBQUVBRSxhQUFZUSxTQUFaLENBQXNCQyxXQUF0QixHQUFvQyxVQUFXQyxHQUFYLEVBQWlCOztBQUVwRCxNQUFLLEtBQUtULGVBQUwsS0FBeUIsSUFBOUIsRUFBcUMsTUFBTSxJQUFJVSxRQUFKLENBQWNELEdBQWQsQ0FBTjs7QUFFckMsU0FBTyxLQUFLVCxlQUFMLEVBQVA7QUFFQSxFQU5EOztBQVFBLFFBQU9ELFdBQVA7QUFFQSxDQTVCTSIsImZpbGUiOiJEZWZhdWx0RGljdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNvbnN0IF9EZWZhdWx0RGljdCA9IGZ1bmN0aW9uICggRGljdCAsIE1hcCApIHtcblxuXHRjb25zdCBEZWZhdWx0RGljdCA9IGZ1bmN0aW9uICggZGVmYXVsdF9mYWN0b3J5ICAsIG1hcHBpbmcgICkge1xuXG5cdFx0dGhpcy5jb250YWluZXIgPSBuZXcgTWFwKCBtYXBwaW5nICkgO1xuXG5cdFx0dGhpcy5kZWZhdWx0X2ZhY3RvcnkgPSBkZWZhdWx0X2ZhY3RvcnkgO1xuXG5cdH0gO1xuXG5cdERlZmF1bHREaWN0LmZyb21rZXlzID0gZnVuY3Rpb24gKCBzZXEgLCB2YWx1ZSA9IG51bGwgLCBkZWZhdWx0X2ZhY3RvcnkgPSBudWxsICkge1xuXG5cdFx0cmV0dXJuIG5ldyBEZWZhdWx0RGljdCggZGVmYXVsdF9mYWN0b3J5ICwgTWFwcGluZy5mcm9ta2V5cyggc2VxICwgdmFsdWUgKSApIDtcblxuXHR9IDtcblxuXHREZWZhdWx0RGljdC5wcm90b3R5cGUgPSBuZXcgRGljdCggKSA7XG5cblx0RGVmYXVsdERpY3QucHJvdG90eXBlLl9fbWlzc2luZ19fID0gZnVuY3Rpb24gKCBrZXkgKSB7XG5cblx0XHRpZiAoIHRoaXMuZGVmYXVsdF9mYWN0b3J5ID09PSBudWxsICkgdGhyb3cgbmV3IEtleUVycm9yKCBrZXkgKSA7XG5cblx0XHRyZXR1cm4gdGhpcy5kZWZhdWx0X2ZhY3RvcnkoICkgO1xuXG5cdH0gO1xuXG5cdHJldHVybiBEZWZhdWx0RGljdCA7XG5cbn0gO1xuIl19