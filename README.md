<h2>Installation</h2>

Using npm:

<code>$ npm i wcag-compliant-accessible-library</code>

<br/>

<h2>Usage</h2>

This library can be used with either ESM or CommonJS.

In the following example, you can see the import and passing of the properties using an example component.

```
import { WCAGH2H58 } from 'wcag-compliant-accessible-library'

    ...

<WCAGH2H58
    imageData={{
        imageSource: image,
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

This library fulfils a number of these criteria for success.

A number of components are provided which are not styled at all.

This means that you can easily integrate your own designs.

<br/>

<h2>Content</h2>

This library takes up two of these four principles: 1) Perceivable and 3) Understandable.

The success criteria covered in this library are:

<a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html">1.1.1 Non-text Content</a>,

<a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html">1.3.1 Info and Relationships</a>,

<a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html">1.3.5 Identify Input Purpose</a>,

<a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html">3.1.2 Language of Parts</a> and

<a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/on-input.html">3.2.2 On Input</a>

Each of these success criteria is given certain techniques by the W3C which fulfil these criteria.

These defined techniques and components have been implemented in this library:

(World Wide Web Consortium, Inc., 2023)

<br/>

<h2>Documentation</h2>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/">You can find the Storybook here.</a>

The technologies used are listed in sequence according to the WCAG prefix.

They start with either ARIA, G or H.

<br/>

<em>WCAGNonTextContent</em>:

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcagnontextcontent-wcagaria2h58h65--docs"><strong>WCAGARIA2H58H65</strong></a>:

By using this component you fulfil the success criteria <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">1.1.1 Non-text Content</a>, <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships">1.3.1 Info and Relationships</a> and <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

Code snippet:

```
<input title="description" lang="de" />
```

<br/>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcagnontextcontent-wcagaria6h58--docs"><strong>WCAGARIA6H58</strong></a>:

 By using this component you fulfil the success criteria <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">1.1.1 Non-text Content</a> and <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

 Code snippet:

 ```
 <div aria-label="description" lang="de"> children </div>
 ```

 <br/>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcagnontextcontent-wcagaria10h58--docs"><strong>WCAGARIA10H58</strong></a>:

By using this component you fulfil the success criteria <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">1.1.1 Non-text Content</a> and <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

Code snippet:

```
WCAGARIA10H58:
<div aria-labelledbyid="id" lang="de"> children </div>

WCAGARIA10H58Text:
<div id="id" lang="de"> children </div>
```

<br/>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcagnontextcontent-wcagaria15h58--docs"><strong>WCAGARIA15H58</strong></a>:

 By using this component you fulfil the success criteria <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">1.1.1 Non-text Content</a> and <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

 Code snippet:

 ```
 WCAGARIA15H58:
 <>
    <img aria-describedby="id" src={imageSource-1} />
    <img aria-describedby="id" src={imageSource-2} />
</>

WCAGARIA15H58Text:
<p id="id" lang="de"> children </p>
 ```

 <br/>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcagnontextcontent-wcagg73h58--docs"><strong>WCAGG73H58</strong></a>:

By using this component you fulfil the WCAG2.2 success criteria <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">1.1.1 Non-text Content</a> and <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

Code snippet:

```
WCAGG73H58:
<div aria-describedby="long-desc" id="div-id" lang="de">
    children 
    <a target="_blank" href="#long-desc"> buttonText </a>
    shortText
</div>

WCAGG73H58Text:
<div id="long-desc" lang="de">
    children
    <p>
        <a target="_blank" href="#div-id"> buttonText </a>
    </p>
</div>
```

<br/>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcagnontextcontent-wcagg74g92h58--docs"><strong>WCAGG74G92H58</strong></a>:

By using this component you fulfil the success criteria <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">1.1.1 Non-text Content</a> and <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

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

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcagnontextcontent-wcagg196--docs"><strong>WCAGG196</strong></a>:

By using this component you fulfil the success criterion <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">1.1.1 Non-text Content</a>

Code snippet:

```
<>
    <img alt="description" src={imageSource-1} />
    <img src={imageSource-2} />
</>
```

<br/>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcagnontextcontent-wcagh2h58--docs"><strong>WCAGH2H58</strong></a>:

By using this component you fulfil the success criteria <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">1.1.1 Non-text Content</a>,  <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context">2.4.4 Link Purpose (In Context)</a>, <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only">2.4.9 Link Purpose (Link Only)</a> and <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

Code snippet:

```
<a target="_blank" href="link" lang="de">
    children
    <img src={imageSource} />
</a>
```

<br/>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcagnontextcontent-wcagh24--docs"><strong>WCAGH24</strong></a>:

By using this component you fulfil the success criteria <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">1.1.1 Non-text Content</a>, <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context">2.4.4 Link Purpose (In Context)</a> and <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only">2.4.9 Link Purpose (Link Only)</a>

Code snippet:

```
<>
    <img useMap"#mapName" src={imageSource} />
    <map name="mapName">
        <area coords="0 0 0 0" shape"rect" />
    </map>
</>
```

<br/>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcagnontextcontent-wcagh30h58--docs"><strong>WCAGH30H58</strong></a>:

By using this component you fulfil the success criteria <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">1.1.1 Non-text Content</a>, <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context">2.4.4 Link Purpose (In Context)</a>, <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only">2.4.9 Link Purpose (Link Only)</a> and <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

Code snippet:

```
<a target="_blank" href="link" lang="de">
    preImageText
    <img src={imageSource-1} />
    <img src={imageSource-2} />
    postImageText
</a>
```

<br/>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcagnontextcontent-wcagh36--docs"><strong>WCAGH36</strong></a>:

By using this component you fulfil the success criterion <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">1.1.1 Non-text Content</a>

Code snippet:

```
<input type="image" alt="description" />
```

<br/>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcagnontextcontent-wcagh37--docs"><strong>WCAGH37</strong></a>:

By using this component you fulfil the success criterion <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">1.1.1 Non-text Content</a>

Code snippet:

```
<img alt="description" src={imageSource} />
```

<br/>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcagnontextcontent-wcagh44h58--docs"><strong>WCAGH44H58</strong></a>:

By using this component you fulfil the success criteria <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">1.1.1 Non-text Content</a>, <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships">1.3.1 Info and Relationships</a>, <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a> and <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions">3.3.2 Labels or Instructions</a>

Code snippet:

```
<>
    <label htmlFor="id" lang="de"> labelText </label>
    <select/textarea/input id="id"> options </select/textarea/input>
</>
```

<br/>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcagnontextcontent-wcagh53--docs"><strong>WCAGH53</strong></a>:

By using this component you fulfil the success criteria <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">1.1.1 Non-text Content</a>, <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded">1.2.3 Audio Description or Media Alternative (Prerecorded)</a> and <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/media-alternative-prerecorded">1.2.8 Media Alternative (Prerecorded)</a>

Code snippet:

```
<object> children </object>
```

<br/>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcagnontextcontent-wcagh58h86--docs"><strong>WCAGH58H86</strong></a>:

By using this component you fulfil the success criteria <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content"> 1.1.1 Non-text Content</a> and <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

Code snippet:

```
<span aria-label="description" lang="de"> emoji </span> or

<div aria-label="description" lang="de"> emoji </div> or

<abbr title="description" lang="de"> emoji </abbr>
```

<br/>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcagnontextcontent-wcagh67--docs"><strong>WCAGH67</strong></a>:

By using this component you fulfil the WCAG2.2 success criterion  <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">1.1.1 Non-text Content</a>

Code snippet:

```
<img alt="" src={imageSource} />
```

<br/>

<em>WCAGInfoAndRelationships</em>:

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcaginfoandrelationships-wcagaria2h58h71--docs"><strong>WCAGARIA2H58H71</strong></a>:

By using this component you fulfil the success criteria <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships">1.3.1 Info and Relationships</a>, <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a> and <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions">3.3.2 Labels or Instructions</a>

Code snippet:

```
<form (optional)>
    <fieldset>
        <legend> legendText </legend>
        <div lang="de">
            <input id="id" />
            <label htmlFor="id"> labelText </label>
        </div>
    </fieldset>
</form>
```

<br/>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcaginfoandrelationships-wcagaria2h58h85--docs"><strong>WCAGARIA2H58H85</strong></a>:

By using this component you fulfil the success criteria <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships">1.3.1 Info and Relationships</a> and <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

Code snippet:

```
<form>
    <label htmlFor="id"> labelText </label>
    <select id="id">
        <optgroup>
            <option lang="de"> option </option>
            <option lang="de"> option </option>
        </optgroup>
    </select>
</form>
```

<br/>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcaginfoandrelationships-wcagaria11h58--docs"><strong>WCAGARIA11H58</strong></a>:

By using this component you fulfil the success criteria <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships">1.3.1 Info and Relationships</a>, <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose">1.3.6 Identify Purpose </a>, <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks">2.4.1 Bypass Blocks</a> and <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

Code snippet:

```
<div lang="de" aria-label="description"> children </div> or

<form lang="de" aria-label="description"> children </form>
```

<br/>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcaginfoandrelationships-wcagaria12h58--docs"><strong>WCAGARIA12H58</strong></a>:

By using this component you fulfil the success criteria <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships">1.3.1 Info and Relationships</a> and <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

Code snippet:

```
<div aria-level="3" lang="de"> children </div>
```

<br/>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcaginfoandrelationships-wcagg115h49code--docs"><strong>WCAGG115H49Code</strong></a>:

By using this component you fulfil success criterion <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships">1.3.1 Info and Relationships</a>

Code snippet:

```
<code> children </code>
```

<br/>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcaginfoandrelationships-wcagg115h49h58a--docs"><strong>WCAGG115H49H58A</strong></a>:

By using this component you fulfil the success criteria <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships">1.3.1 Info and Relationships</a> and <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

Code snippet:

```
<a target="_blank" href="link" lang="de"> children </a>
```

<br/>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcaginfoandrelationships-wcagg115h49h58b--docs"><strong>WCAGG115H49H58B</strong></a>:

By using this component you fulfil the success criteria <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships">1.3.1 Info and Relationships</a> and <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

Code snippet:

```
<b lang="de"> children </b>
```

<br/>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcaginfoandrelationships-wcagg115h49h58cite--docs"><strong>WCAGG115H49H58Cite</strong></a>:

By using this component you fulfil the success criteria <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships">1.3.1 Info and Relationships</a> and <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

Code snippet:

```
<cite lang="de"> children </cite>
```

<br/>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcaginfoandrelationships-wcagg115h49h58em--docs"><strong>WCAGG115H49H58Em</strong></a>:

By using this component you fulfil the success criteria <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships">1.3.1 Info and Relationships</a> and <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

Code snippet:

```
<em lang="de"> children </em>
```

<br/>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcaginfoandrelationships-wcagg115h49h58quote--docs"><strong>WCAGG115H49H58Quote</strong></a>:

By using this component you fulfil the success criteria <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships">1.3.1 Info and Relationships</a> and <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

Code snippet:

```
<blockquote lang="de"> children </blockquote>
```

<br/>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcaginfoandrelationships-wcagg115h49h58shortquote--docs"><strong>WCAGG115H49H58ShortQuote</strong></a>:

By using this component you fulfil the success criteria <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships">1.3.1 Info and Relationships</a> and <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

Code snippet:

```
<q lang="de"> children </q>
```

<br/>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcaginfoandrelationships-wcagg115h49h58strong--docs"><strong>WCAGG115H49H58Strong</strong></a>:

By using this component you fulfil the success criteria <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships">1.3.1 Info and Relationships</a> and <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

Code snippet:

```
<strong lang="de"> children </strong>
```

<br/>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcaginfoandrelationships-wcagg115h49h58sub--docs"><strong>WCAGG115H49H58Sub</strong></a>:

By using this component you fulfil the success criteria <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships">1.3.1 Info and Relationships</a> and <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

Code snippet:

```
<sub lang="de"> children </sub>
```

<br/>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcaginfoandrelationships-wcagg115h49h58sup--docs"><strong>WCAGG115H49H58Sup</strong></a>:

By using this component you fulfil the success criteria <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships">1.3.1 Info and Relationships</a> and <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

Code snippet:

```
<sup lang="de"> children </sup>
```

<br/>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcaginfoandrelationships-wcagg117h48h58--docs"><strong>WCAGG117H48H58</strong></a>:

By using this component you fulfil the success criteria <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships">1.3.1 Info and Relationships</a> and <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

Code snippet:

```
<ul>
    <li lang="de"> item </li>
    <li lang="de"> item </li>
</ul>

or

<ol>
    <li lang="de"> item </li>
    <li lang="de"> item </li>
</ol>

or

<dl>
    <div>
        <dt lang="de"> name </dt>
        <dd lang="de"> description </dd>
    </div>
</dl>
```

<br/>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcaginfoandrelationships-wcagg117h58h97h101--docs"><strong>WCAGG117H58H97H101</strong></a>:

By using this component you fulfil the success criteria <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships">1.3.1 Info and Relationships</a>, <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks">2.4.1 Bypass Blocks</a> and <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

Code snippet:

```
<nav>
    <ul>
        <li>
            <a target="_blank" href="link" lang="de"> displayedText </a>
            <a target="_blank" href="link" lang="de"> displayedText </a>
        </li>
    </ul>
</nav>
```

<br/>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcaginfoandrelationships-wcagh39h43h51h58h63--docs"><strong>WCAGH39H43H51H58H63</strong></a>:

By using this component you fulfil the success criteria <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">1.1.1 Non-text Content</a>, <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded">1.2.3 Audio Description or Media Alternative (Prerecorded)</a>, <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/media-alternative-prerecorded">1.2.8 Media Alternative (Prerecorded)</a>, <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships">1.3.1 Info and Relationships</a> and <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>

Code snippet:

```
<table>
    <caption> captionText </caption>
    <tbody>
        <tr>
            <th id="id" scope"col" lang="de"> header </th>
        </tr>
        <tr headers="id">
            <td lang="de"> item </td>
        </tr>
        <tr headers="id">
            <td lang="de"> item </td>
        </tr>
    </tbody>
</table>
```

<br/>

<em>WCAGIdentifyInputPurpose</em>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/?path=/docs/components-wcagidentifyinputpurpose-wcagg13h32h58h98--docs" ><strong>WCAGG13H32H58H98</strong></a>:

By using this component you fulfil the success criteria <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose">1.3.5 Identify Input Purpose</a>, <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">3.1.2 Language of Parts</a>, <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/on-input">3.2.2 On Input</a> and <a target="_blank" href="https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions">3.3.2 Labels or Instructions</a>

Code snippet:

```
<form>
    changedContextText (optional)
    <div>
        <label htmlFor="id"> labelText </label>
        <input type="month" autocomplete="bday-month" id="id" />
    </div>
    <div>
        <input type="submit" /> (div and submit are optional)
    </div>
</form>
```

<br/>

<a target="_blank" href="https://65bb731e4f345bcada479e35-ydvtfeiafv.chromatic.com/">You can find the Storybook here.</a>

<br/>

<h2>License</h2>

<a target="_blank" href="https://github.com/StackOverflowIsBetterThanAnyAI/wcag-compliant-accessible-library/blob/master/LICENSE">MIT</a>
