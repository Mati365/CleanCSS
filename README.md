## Description
**CleanCSS** - tiny Semantic's style LESS library

## Examples of use
![Screenshoot](/doc/screen/2.png?raw=true "Screen")
```jade
.col100
	.message.info
	    i.fa.fa-exclamation-triangle.fa-lg
	    | Po zapisaniu zmian zostaniesz przeniesiony do ekranu logowania!
form.form
    .row
	.col50
	    .col100
		    .header.small #{header}:
		    .left.labeled.icon
			i(class='right fa fa-#{icon}')
			input(type='text')
			.label.corner.star
    .row
	.col100
	    .pull-right.left.labeled
	        button.green(type='submit') Zapisz zmiany!
	        .label.fa.fa-save
```

## Browser Compatibility
Tested in Firefox and Chrome

## License
```
The MIT License (MIT)

Copyright (c) 2015,2016 Mateusz Bagiński

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
