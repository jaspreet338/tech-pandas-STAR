const { login } = require("../pages/Home");

test( "Jest runs correctly" , function () {
	expect(login(true)).toBe(true);
});