<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Entropy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Chi-squared][chisquare-distribution] distribution [differential entropy][entropy].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [differential entropy][entropy] (in [nats][nats]) for a [chi-squared][chisquare-distribution] random variable is

<!-- <equation class="equation" label="eq:chisquare_entropy" align="center" raw="h\left( X \right) = \tfrac{k}{2}+\ln(2\Gamma({\tfrac{k}{2}}))\!+(1-{\tfrac{k}{2}})\psi({\tfrac{k}{2}})" alt="Differential entropy for a chi-squared distribution."> -->

<div class="equation" align="center" data-raw-text="h\left( X \right) = \tfrac{k}{2}+\ln(2\Gamma({\tfrac{k}{2}}))\!+(1-{\tfrac{k}{2}})\psi({\tfrac{k}{2}})" data-equation="eq:chisquare_entropy">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/chisquare/entropy/docs/img/equation_chisquare_entropy.svg" alt="Differential entropy for a chi-squared distribution.">
    <br>
</div>

<!-- </equation> -->

where `k > 0` is the degrees of freedom.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import entropy from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chisquare-entropy@esm/index.mjs';
```

#### entropy( k )

Returns the [differential entropy][entropy] of a [chi-squared][chisquare-distribution] distribution with degrees of freedom `k` (in [nats][nats]).

```javascript
var v = entropy( 9.0 );
// returns ~2.786

v = entropy( 0.5 );
// returns ~-0.939
```

If provided `k <= 0`, the function returns `NaN`.

```javascript
var v = entropy( -1.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs';
import entropy from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chisquare-entropy@esm/index.mjs';

var k;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    k = randu() * 20.0;
    v = entropy( k );
    console.log( 'k: %d, entropy(X,k): %d', k.toFixed( 4 ), v.toFixed( 4 ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-chisquare-entropy.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-chisquare-entropy

[test-image]: https://github.com/stdlib-js/stats-base-dists-chisquare-entropy/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-chisquare-entropy/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-chisquare-entropy/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-chisquare-entropy?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-chisquare-entropy.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-chisquare-entropy/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-chisquare-entropy/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-chisquare-entropy/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-chisquare-entropy/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-chisquare-entropy/main/LICENSE

[chisquare-distribution]: https://en.wikipedia.org/wiki/Chi-squared_distribution

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[nats]: https://en.wikipedia.org/wiki/Nat_%28unit%29

</section>

<!-- /.links -->
