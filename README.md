<h1>WCAG-compliant-accessible-library</h1>

<h2>I need your help</h2>

I'm currently writing my <strong>bachelor's thesis</strong>.

I am focussing on digital accessibility on the internet.

In order to improve digital accessibility, I have created this TypeScript React component library as part of this work.

In order to be able to analyse this library <strong>scientifically</strong>, I need <strong>your feedback</strong>!

If you have tested this library - even if it is <strong>only one</strong> component - please answer a few questions about it.

<a href="https://www.survio.com/survey/d/E3R7X9M7V8N9E9V9W" target="_blank">The survey</a> will take about <strong>5 to 10 minutes</strong>.

Thank you very much.

Kind regards, Michael

<a href="https://www.survio.com/survey/d/E3R7X9M7V8N9E9V9W" target="_blank">Link to the survey.</a>



<h2>Installation</h2>

Using npm:

<code>$ npm i wcag-compliant-accessible-library</code>

<br/>

<h2>Usage</h2>

This library can be used with either ESM or CommonJS.

```
import WCAGH2H58 from 'WCAGNonTextContent/WCAGH2H58'

    ...

<WCAGH2H58
    imageData={{
        imageSource: starImage,
        additionalStyling: { height: 75, width: 75 },
    }}
    link="/star-id"
    childrenBeforeImage
>
    <div>Go to the home page</div>
</WCAGH2H58>

    ...

```

<br/>

<h2>What is it about?</h2>

This library deals with the WCAG 2.2 success criteria.

WCAG stands for Web Consortium Accessibility Guidelines and is an initiative of the World Wide Web Consortium.

The aim behind these guidelines is to make the internet accessible to a wider audience.

The WCAG 2 guidelines are primarily aimed at people with disabilities, people with impaired vision and hearing, impaired movement, speech impairments, photosensitivity and cognitive impairments.

However, people without these disabilities will also benefit from these guidelines.

These guidelines apply to web content for desktops, laptops, tablets and mobile devices.

WCAG 2.2 is divided into four chapters:

1) Perceivable,

2) Operable,

3) Understandable and

4) Robust.

For each of these four principles, the W3C provides a set of success criteria that should be met to ensure digital accessibility.

(World Wide Web Consortium, Inc., 2023)

<br/>

<h2>Content</h2>

This library takes up two of these four principles: 1) Perceivable and 3) Understandable.

The success criteria covered in this library are:

<a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html">1.1.1 Non-text Content</a>,

<a href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html">1.3.1 Info and Relationships</a>,

<a href="https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html">1.3.5 Identify Input Purpose</a>,

<a href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html">3.1.2 Language of Parts</a> and

<a href="https://www.w3.org/WAI/WCAG22/Understanding/on-input.html">3.2.2 On Input</a>

Each of these success criteria is given certain techniques by the W3C which fulfil these criteria.

These defined techniques and components have been implemented in this library:

(World Wide Web Consortium, Inc., 2023)

<br/>

<h2>Documentation</h2>

<a href="https://65bb731e4f345bcada479e35-sofvqptifk.chromatic.com/">You can find the Storybook here.</a>

The technologies used are listed in sequence according to the WCAG prefix.

They start with either ARIA, G or H.

<br/>

<em>WCAGNonTextContent</em>:

<strong>WCAGARIA2H58H65</strong>:

By using this component you fulfil the success criteria <a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">1.1.1 Non.text Content</a>, <a href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships">1.3.1 Info and Relationships</a> and <a href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

Code snippet:

```
<input title="description" lang="de" />
```

<br/>

<strong>WCAGARIA6H58</strong>:

 By using this component you fulfil the success criteria <a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">1.1.1 Non.text Content</a> and <a href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

 Code snippet:

 ```
 <div aria-label="description" lang="de"> children </div>
 ```

 <br/>

<strong>WCAGARIA10H58</strong>:

By using this component you fulfil the success criteria <a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">1.1.1 Non-text Content</a> and <a href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

Code snippet:

```
WCAGARIA10H58:
<div aria-labelledbyid="id" lang="de"> children </div>

WCAGARIA10H58Text:
<div id="id" lang="de"> children </div>
```

<br/>

<strong>WCAGARIA15H58</strong>:

 By using this component you fulfil the success criteria <a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">1.1.1 Non.text Content</a> and <a href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

 Code snippet:

 ```
 WCAGARIA15H58:
 <>
    <img aria-describedby="id" src="imageSource-1" />
    <img aria-describedby="id" src="imageSource-2" />
</>

WCAGARIA15H58Text:
<p id="id" lang="de"> children </p>
 ```

 <br/>

<strong>WCAGG73H58</strong>:

By using this component you fulfil the WCAG2.2 success criteria <a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">1.1.1 Non-text Content</a> and <a href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

Code snippet:

```
WCAGG73H58:
<div aria-describedby="long-desc" id="div-id" lang="de">
    children 
    <a href="#long-desc"> buttonText </a>
    shortText
</div>

WCAGG73H58Text:
<div id="long-desc" lang="de">
    children
    <p>
        <a href="#div-id"> buttonText </a>
    </p>
</div>
```

<br/>

<strong>WCAGG74G92H58</strong>:

By using this component you fulfil the success criteria <a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">1.1.1 Non.text Content</a> and <a href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

Code snippet:

```
WCAGG74G92H58:
<div aria-describedby="long-desc" lang="de">
    children
    shortText
</div>

WCAGG74G92H58Text:
<p id="long-desc" lang="de"> children </p>
```

<br/>

<strong>WCAGG196</strong>:

By using this component you fulfil the success criterion <a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">1.1.1 Non.text Content</a>

Code snippet:

```
<>
    <img alt="description" src="imageSource-1"/>
    <img src="imageSource-2"/>
</>
```

<br/>

<strong>WCAGH2H58</strong>:

By using this component you fulfil the success criteria <a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">1.1.1 Non.text Content</a>,  <a href="https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context">2.4.4 Link Purpose (In Context)</a>, <a href="https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only">2.4.9 Link Purpose (Link Only)</a> and <a href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

Code snippet:

```
<a href="link" lang="de">
    children
    <img src="imageSource"/>
</a>
```

<br/>

<strong>WCAGH24</strong>:

By using this component you fulfil the success criteria <a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">1.1.1 Non-text Content</a>, <a href="https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context">2.4.4 Link Purpose (In Context)</a> and <a href="https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only">2.4.9 Link Purpose (Link Only)</a>

Code snippet:

```
<>
    <img useMap"#mapName" src="imageSource" />
    <map name="mapName">
        <area coords="0 0 0 0" shape"rect" />
    </map>
</>
```

<br/>

<strong>WCAGH30H58</strong>:

By using this component you fulfil the success criteria <a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">1.1.1 Non.text Content</a>, <a href="https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context">2.4.4 Link Purpose (In Context)</a>, <a href="https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only">2.4.9 Link Purpose (Link Only)</a> and <a href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

Code snippet:

```
<a href="link" lang="de">
    preImageText
    <img src="imageSource-1" />
    <img src="imageSource-2" />
    postImageText
</a>
```

<br/>

<strong>WCAGH36</strong>:

By using this component you fulfil the success criterion <a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">1.1.1 Non.text Content</a>

Code snippet:

```
<input type="image" alt="description" />
```

<br/>

<strong>WCAGH37</strong>:

By using this component you fulfil the success criterion <a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">1.1.1 Non.text Content</a>

Code snippet:

```
<img alt="description" src="imageSource" />
```

<br/>

<strong>WCAGH44H58</strong>:

By using this component you fulfil the success criteria <a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">1.1.1 Non-text Content</a>, <a href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships">1.3.1 Info and Relationships</a>, <a href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a> and <a href="https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions">3.3.2 Labels or Instructions</a>

Code snippet:

```
<>
    <label htmlFor="id" lang="de"> labelText </label>
    <select/textarea/input id="id"> options </select/textarea/input>
</>
```

<br/>

<strong>WCAGH53</strong>:

By using this component you fulfil the success criteria <a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">1.1.1 Non-text Content</a>, <a href="https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded">1.2.3 Audio Description or Media Alternative (Prerecorded)</a> and <a href="https://www.w3.org/WAI/WCAG22/Understanding/media-alternative-prerecorded">1.2.8 Media Alternative (Prerecorded)</a>

Code snippet:

```
<object> children </object>
```

<br/>

<strong>WCAGH58H86</strong>:

By using this component you fulfil the success criteria <a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content"> 1.1.1 Non-text Content</a> and <a href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

Code snippet:

```
<span aria-label="description" lang="de"> emoji </span> or

<div aria-label="description" lang="de"> emoji </div> or

<abbr title="description" lang="de"> emoji </abbr>
```

<br/>

<strong>WCAGH67</strong>:

By using this component you fulfil the WCAG2.2 success criterion  <a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">1.1.1 Non-text Content</a>

Code snippet:

```
<img alt="" src="imageSource" />
```

<br/>

<a href="https://65bb731e4f345bcada479e35-sofvqptifk.chromatic.com/">You can find the Storybook here.</a>

<br/>

<h2>License</h2>

<a href="https://github.com/StackOverflowIsBetterThanAnyAI/wcag-compliant-accessible-library/blob/master/LICENSE">MIT</a>
