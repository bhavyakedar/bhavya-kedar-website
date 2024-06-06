# Blog 0 - How it got here?
##### 6th June 2024
##
The website's finally up! After a good deal of struggling with procrastination, it is finally there. What's the purpose of this website you ask? To post all the technical stuff that fascinates me. So lets start with 'How I built this website?' first.

### How this website is created?
Firstly, I wanted to make this website easily maintainable so that adding any blog such as this can simply be achieved by adding a markdown file to the resources. That's why I chose <a href="https://vuepress.vuejs.org/">VuePress</a>, which is an excellent markdown based static site generator. It saves me the effort of diving into JS and code just for posting pages that are as simple as this one. However VuePress still allows me to customize UI as per my requirement by tweaking its config in JS. Another alternative to achieve such maintainability can be to use <a href="https://wordpress.com/">WordPress</a> instead.

### How this website is deployed?
For deployment I chose to use Netlify, as it streamlines the deployment process for me, saving the trouble of running pipelines, pushing docker images and finally triggering deployment. It provides automatic CI/CD support for my <a href="">Git repository</a>. Any new markdown file that I push to the repository, a blog such as this one reflects on the website almost instantly. I also provides CDN support to accelerate the site content around the globe.

### How this website is protected?
Finally for DNS management and site security I used <a href="https://www.cloudflare.com/">CloudFlare</a>, which provided my website with the SSL certificate, data protection from WHOIS lookup and other DDoS risks.

###

Now I just hope I'll continue posting here.