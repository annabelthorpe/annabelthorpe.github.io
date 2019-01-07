# 🤸‍ – A Blog Theme for Jekyll
Cartwheel is a blog theme for Jekyll built using HTML, Sass, and jQuery. External stylesheets and libraries included are Google Fonts, Font Awesome, Normalize.CSS, Instafetch.js, Owl Carousel 2, Smooth Scroll, and WOW.js.

## Installation
All dependencies are saved in the ````Gemfile````. Run ````bundle install```` (Install [Bundler](http://bundler.io/) if it is not already).

## Edit Theme
I made everything as easy as possible to edit. Most things can be found in the ````_config.yml````, but if more editing is required digging through the code will be required. The ````head.html```` file is in the ````_includes```` folder and the Sass variables are found in the ````_base.scss```` file in the ````_sass```` folder.

### _config.yml

#### Site Settings
    baseurl: ""

* ````baseurl```` - Path of blog if adding this on to another website

#### Color Settings
    color_alpha: feeaeb
    color_beta: 05009e

* ````color_alpha```` - Main color
* ````color_beta```` - Secondary color

#### Google Analytics
    google_analytics: UA—XXXXXXXX-X

* ````google_analytics```` - Option field to replace with correct Google Analytics code

#### Instagram API
    instagram_key: 
    instagram_caption: 

* ````instagram_key```` - See [Instafetch.js docs](http://thomasvaeth.com/instafetch.js/) for API key information
* ````instagram_caption```` - true or false to display Instagram captions

#### SEO Settings
    title: 
    description: 
    url: ""
    email:
    twitter_username: 
    default_img: 

* ````title```` - Title of blog
* ````description```` - Description of blog (recommended to not go over 160 characters)
* ````url```` - URL of main website
* ````email```` - Email address
* ````twitter_username```` - Twitter username
* ````default_img```` - Image that will appear when posting links on social networks

#### Profile Settings
    name:  
    social:
      github: 

* ````name```` - Full name for SEO purposes
* ````social```` - List of social networks for icons in the contact card and the footer ([Font Awesome](http://fontawesome.io/) is used, so only match the name of the icon, but do not include ````fa-````)


#### Build Settings
    exclude: ["node_modules", "gulpfile.js", "assets/js/app.js", "README.md", "Gemfile", "Gemfile.lock"]
    permalink: /:year/:month/:day/:title/

* ````include```` - Folders that are not automatically included in Jekyll
* ````exclude```` - Folders that are excluded from `_site`
* ````permalink```` - URL structure of blog posts

### _posts
    ---
    layout: post
    title: ""
    date: 
    categories:
    description: 
    image: 
    image-sm:
    ---

This is the YAML front matter block for blog posts.
* ````layout```` - This field will always be post
* ````title```` - The title of the blog post
* ````date```` - The date that will appear on the blog post
* ````tags```` - Optional field that can be entered as an array or a list
* ````description```` - Optional field for SEO (recommended to not go over 160 characters)
* ````image```` - The blog theme was designed for 2000x1200px images (optimize your images because this is a picture heavy theme)
