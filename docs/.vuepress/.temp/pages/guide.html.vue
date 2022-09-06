<template><div><h1 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h1>
<h3 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install @igorv/vue3-component-library
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="changing-components" tabindex="-1"><a class="header-anchor" href="#changing-components" aria-hidden="true">#</a> Changing components</h3>
<ol>
<li>Go to you projects folder and clone repository</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> clone https://github.com/TheHelmsman/vue3-component-library.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>Install modules</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ npm Install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>
<p>Edit any component files to update components</p>
</li>
<li>
<p>Update version number after editing (edit package.json file):</p>
</li>
</ol>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"@yourname/yourlibrary"</span><span class="token punctuation">,</span>
  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"0.0.1"</span><span class="token punctuation">,</span> <span class="token comment">// &lt;- increment</span>
  <span class="token property">"main"</span><span class="token operator">:</span> <span class="token string">"dist/library.js"</span><span class="token punctuation">,</span>
  <span class="token property">"module"</span><span class="token operator">:</span> <span class="token string">"dist/library.mjs"</span><span class="token punctuation">,</span>
  <span class="token property">"files"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"dist/*"</span>
  <span class="token punctuation">]</span>
  <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>Login to npm registry &amp; publish your settings</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> login
$ <span class="token function">npm</span> publish <span class="token parameter variable">--access</span><span class="token operator">=</span>public
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>Check published files</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> view @yourname/yourlibrary
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Note: If the publish was successful, you’ll see the package info printed in the console.</p>
<h3 id="documentation" tabindex="-1"><a class="header-anchor" href="#documentation" aria-hidden="true">#</a> Documentation</h3>
<ol>
<li>In local repository execute following command to run documentation server locally:</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Command output:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run docs:dev

<span class="token operator">></span> @igorv/vue3-component-library@0.0.1 docs:dev
<span class="token operator">></span> vuepress dev docs

✔ Initializing and preparing data - <span class="token keyword">done</span> <span class="token keyword">in</span> 155ms

  vite v3.0.9 dev server running at:

  ➜  Local:   http://localhost:8080/
  ➜  Network: http://192.168.1.56:8080/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>
<p>Open browser and go to <code v-pre>http://localhost:8080/</code></p>
</li>
<li>
<p>Use sidebar links to select component and get its documentation on usage and imports</p>
</li>
</ol>
</div></template>


