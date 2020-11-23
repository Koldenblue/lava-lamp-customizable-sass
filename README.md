# Customizable Sass Lava Lamp

![image](https://img.shields.io/badge/license-MIT%20License-green)

## Table of Contents

1. <a href="#description">Description</a>
2. <a href="#installation">Installation</a>
3. <a href="#usage">Usage</a>
4. <a href="#contributions">Contributions</a>
5. <a href="#license">License</a>
6. <a href="#questions">Issues and Questions</a>
<hr><h3 id='description'>Description</h3>
<p>This webpage presents an animated model of a lava-lamp which is easily portable to other websites. The lava lamp models are generated entirely with CSS, and animated using CSS keyframes. Sass pre-processing allows for easy customization with minimal coding - variables such as color, width, height, and shadowing can easily be changed simply by changing the appropriate values at the top of the lava lamp SCSS file. The lamp itself can be dropped into other websites simply by pastiong the appropriate html code, and adding the lamp SCSS module to the existing SCSS files for a website.</p> <p>Additionally, Express.js is used for back-end routing functionality. Users can navigate through the simple website to view information about lava lamps, view pictures of lava lamps, or view information about the website itself. Finally, JavaScript propgramming allows for asynchronous API calls which find and retrieve images of lava lamps. </p>

<h3 id='installation'>Installation</h3>
<p>The website may be viewed at ___________. The website may also be run on a local host by cloning this repository, and running 'node server.js' in a Node.js environment. The webpage will be hosted locally on port 8080 by default, at localhost:8080 in a browser.</p>
<h3 id='usage'>Usage</h3>
<p> To add the lamp graphic to an existing website, two steps are required: first, drop the lamp HTML code into the appropriate website container. Second, add the appropriate Sass file to the existing website SCSS (or less ideally, add in the basic lamp CSS). 
The HTML file for the lamp may be found in '/public/index.html'. Alternatively, it may be copied here: Along with the appropriate CSS, this is all that is needed to integrate the lava lamp graphic into a website.</p>
```
  <section id='lamp-section' class='purple-lamp'>
    <div class='top-cap-ellipse'></div>
    <div class='lamp-cap'></div>
    <div class='cap-ellipse'></div>
    <div class='lamp-shadow'></div>
    <div class='lamp-shadow-mid'></div>
    <div class='lamp-shadow-2'></div>
    <div class='lamp-translucent-cover'></div>
    <div class='bg-text'>LOVE LAVA</div>
    <div class='lamp'>
      <div class='lava-0'></div>
      <div class='lava-1'></div>
      <div class='lava-2'></div>
      <div class='lava-3'></div>
      <div class='lava-4'></div>
    </div>
    <div class='middle-ellipse'></div>
    <div class='lamp-top'></div>
    <div class='lamp-bottom'></div>
    <div class='bottom-ellipse'></div>
  </section>
```

<p>The appropriate CSS for the lamp may be taken from the CSS file, '/public/styles/style.css', which contains separate CSS for 3 lamps. However, it is recommended that Sass be used instead, to allow easy customization and integration into existing SCSS files. Visit the <a href='https://sass-lang.com/'>Sass website</a> for installation and usage instructions. There are three different customized lamp files, _lava.scss, _greenLava.scss, and _blueLava.scss, each in the '/public/styles' folder. The main file, _lava.scss, should be used with the HTML code above, since the class name 'purple-lamp' under the section tag matches the class name in the _lava.scss file. However, this class name can easily be changed in the HTML, as well as by editing a single line of code near the top of the SCSS file (near the top, labeled with a comment). After customization, the _lava.scss files may be imported to the main SCSS file, like any other Sass modules.</p>
<p>To customize a lamp, simply change the values at the top of the lava lamp SCSS file. Most values, such as color, shadows, or height are simple to customize. The lamp is centered in its container by default. Changing the position to be further left or right in a given container will require manual editing of the 'transform: translate(X)' values under the .lamp-shadow and .lamp-shadow-2 classes. Further customization options may be added in the future, for values such as animation keyframes, additional colors, or additional shading.</p>

<h3 id='contributions'>Contributions</h3>
Contact the author through email or through GitHub for issues, suggestions, or contributions.

<h3 id='license'>License</h3>
This project is licensed under the MIT License.

<h3 id='questions'>Issues and Questions</h3>
Issues and questions may be emailed to 'kmillergit' at the domain 'outlook.com'. The author's GitHub profile may be found at https://github.com/Koldenblue.<p><sub><sup>This readme was generated with the help of the readme generator program at https://github.com/Koldenblue/readme-generator.</sup></sub></p>