'use strict'

module.exports = {
	/*dataTypes function*/
	dataTypes: function(str) {
		if (str === null || typeof(str) === typeof(undefined)) {
			return "no value";
		} else if (typeof(str) === typeof(Array())) {
			return str[2];
		} else if (typeof(str) === typeof(String())) {
			return str.length;
		} else if (typeof(str) === typeof(Boolean())) {
			return str;
		} else if (typeof(str) === typeof(Number()) && str < 100) {
			return "less than 100";
		} else if (typeof(str) === typeof(Number()) && str > 100) {
			return "more than 100";
		} else if (typeof(str) === typeof(Number()) && str === 100) {
			return "equal to 100";
		} else if (typeof(str) === typeof(Array)) {
			return "called callback";
		} else if (typeof(str) === typeof(Array()) && 2 <= str.length === 0) {
			return undefined;
		}
	},

	/*getPrimes function*/
	getPrimes: function(n) {
		var sieve = [];
		var primes = [];
		for (var i = 2; i <= n; i++) {
			if (!sieve[i]) {
				primes.push(i);
				for (var j = i; j <= n; j += i) {
					sieve[j] = true;
				}
			}
		}
		return primes;
	}
}