<template><div><h1 id="blog-0-how-it-got-here" tabindex="-1"><a class="header-anchor" href="#blog-0-how-it-got-here"><span>Blog 0 - How it got here?</span></a></h1>
<h5 id="_6th-june-2024" tabindex="-1"><a class="header-anchor" href="#_6th-june-2024"><span>6th June 2024</span></a></h5>
<h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h2>
<p>The website's finally up! After a good deal of struggling with procrastination, it is finally there. What's the purpose of this website you ask? To post all the technical stuff that fascinates me. So lets start with 'How I built this website?' first.</p>
<h3 id="how-this-website-is-created" tabindex="-1"><a class="header-anchor" href="#how-this-website-is-created"><span>How this website is created?</span></a></h3>
<p>Firstly, I wanted to make this website easily maintainable so that adding any blog such as this can simply be achieved by adding a markdown file to the resources. That's why I chose <a href="https://vuepress.vuejs.org/">VuePress</a>, which is an excellent markdown based static site generator. It saves me the effort of diving into JS and code just for posting pages that are as simple as this one. However VuePress still allows me to customize UI as per my requirement by tweaking its config in JS. Another alternative to achieve such maintainability can be to use <a href="https://wordpress.com/">WordPress</a> instead.</p>
<h3 id="how-this-website-is-deployed" tabindex="-1"><a class="header-anchor" href="#how-this-website-is-deployed"><span>How this website is deployed?</span></a></h3>
<p>For deployment I chose to use Netlify, as it streamlines the deployment process for me, saving the trouble of running pipelines, pushing docker images and finally triggering deployment. It provides automatic CI/CD support for my <a href="">Git repository</a>. Any new markdown file that I push to the repository, a blog such as this one reflects on the website almost instantly. I also provides CDN support to accelerate the site content around the globe.</p>
<h3 id="how-this-website-is-protected" tabindex="-1"><a class="header-anchor" href="#how-this-website-is-protected"><span>How this website is protected?</span></a></h3>
<p>Finally for DNS management and site security I used <a href="https://www.cloudflare.com/">CloudFlare</a>, which provided my website with the SSL certificate, data protection from WHOIS lookup and other DDoS risks.</p>
<h3 id="-1" tabindex="-1"><a class="header-anchor" href="#-1"><span></span></a></h3>
<p>Now I just hope I'll continue posting here.</p>
</div></template>


