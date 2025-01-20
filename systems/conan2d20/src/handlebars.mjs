export default function registerHandlebarsHelpers() {
	Handlebars.registerHelper("add", (a, b) => {
		return a + b;
	});

	Handlebars.registerHelper("fromConfig", function(arg1, arg2) {
		return CONFIG.CONAN[arg1][arg2] ? CONFIG.CONAN[arg1][arg2] : arg2;
	});

	Handlebars.registerHelper("if_all", function() {
		const args = [].slice.apply(arguments);
		const opts = args.pop();

		let {fn} = opts;
		for (let i = 0; i < args.length; i += 1) {
			if (args[i]) continue;
			fn = opts.inverse;
			break;
		}
		return fn(this);
	});

	Handlebars.registerHelper("ifCond", function(v1, operator, v2, options) {
		switch (operator) {
			case "==":
				return v1 === v2 ? options.fn(this) : options.inverse(this);
			case "===":
				return v1 === v2 ? options.fn(this) : options.inverse(this);
			case "!=":
				return v1 !== v2 ? options.fn(this) : options.inverse(this);
			case "!==":
				return v1 !== v2 ? options.fn(this) : options.inverse(this);
			case "<":
				return v1 < v2 ? options.fn(this) : options.inverse(this);
			case "<=":
				return v1 <= v2 ? options.fn(this) : options.inverse(this);
			case ">":
				return v1 > v2 ? options.fn(this) : options.inverse(this);
			case ">=":
				return v1 >= v2 ? options.fn(this) : options.inverse(this);
			case "&&":
				return v1 && v2 ? options.fn(this) : options.inverse(this);
			case "||":
				return v1 || v2 ? options.fn(this) : options.inverse(this);
			default:
				return options.inverse(this);
		}
	});

	Handlebars.registerHelper("ifEq", function(arg1, arg2, options) {
		return arg1 === arg2 ? options.fn(this) : options.inverse(this);
	});

	Handlebars.registerHelper("ifModZero", function(arg1, arg2, options) {
		return arg1 % arg2 === 0 ? options.fn(this) : options.inverse(this);
	});

	Handlebars.registerHelper("ifNeq", function(arg1, arg2, options) {
		return arg1 !== arg2 ? options.fn(this) : options.inverse(this);
	});

	Handlebars.registerHelper("ifObjIndex", function(obj, index, options) {
		return obj[index] ? options.fn(this) : options.inverse(this);
	});

	Handlebars.registerHelper("multiply", (a, b) => {
		return a * b;
	});

	Handlebars.registerHelper("select", function(selected, options) {
		const escapedValue = RegExp.escape(Handlebars.escapeExpression(selected));
		const rgx = new RegExp(` value=["']${escapedValue}["']`);
		const html = options.fn(this);
		return html.replace(rgx, "$& selected");
	});
}
