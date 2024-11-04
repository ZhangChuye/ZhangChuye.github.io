---
permalink: /
title: "Chuye Zhang"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
  .education-table {
    width: 100%;
    border: none;
    border-collapse: collapse;
    font-size: 0.95em; /* Adjust size as needed */
  }
  .education-table td {
    padding: 0;
    vertical-align: top;
    border: none;
  }
  .education-table td.right {
    text-align: right;
    padding-left: 20px;
  }
</style>


My motivation ...

Education Background
------

<table class="education-table">
  <tr>
    <td><strong>University of Pennsylvania</strong><br>
    <em>International Guest Student</em> | GPA: 4.0/4.0</td>
    <td class="right">Jan 2024 - Jul 2024</td>
  </tr>
  <tr>
    <td><strong></strong><br>
    <em></em></td>
    <td class="right"></td>
  </tr>
  <tr>
    <td><strong>Southern University of Science and Technology (SUSTech)</strong><br>
    <em>Bachelor of Engineering in Robotics Engineering</em> | GPA: 3.87/4.0, Rank: 1/67</td>
    <td class="right">Sep 2021 - Present</td>
  </tr>
</table>

<!-- <table class="education-table">
  <tr>
    <td style="padding: 0; vertical-align: top; border: none;"><strong>University of Pennsylvania</strong><br>
    <em>International Guest Student</em> | GPA: 4.0/4.0</td>
    <td style="text-align: right; padding: 0; vertical-align: top; border: none;">Jan 2024 - Jul 2024</td>
  </tr>
  <tr>
    <td style="padding: 0; vertical-align: top; border: none;"><strong></strong><br>
    <em></em></td>
    <td style="text-align: right; padding: 0; vertical-align: top; border: none;"></td>
  </tr>
  <tr>
    <td style="padding: 0; vertical-align: top; border: none;"><strong>Southern University of Science and Technology (SUSTech)</strong><br>
    <em>Bachelor of Engineering in Robotics Engineering</em> | GPA: 3.87/4.0, Rank: 1/67</td>
    <td style="text-align: right; padding: 0; vertical-align: top; border: none;">Sep 2021 - Present</td>
  </tr>
</table> -->

Publications
------
Don't yell at your robots

<div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
  <!-- Video on the left -->
  <div style="flex: 1; max-width: 300px;">
    <iframe width="100%" height="200" src="https://www.youtube.com/embed/fY_BDzoNCw8?si=_7YRDcIlDXWKYl1T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>

  <!-- Content on the right -->
  <div style="flex: 2;">
    <h3>Paper Title Goes Here</h3>
    <p><a href="https://arxiv.org/abs/2304.14356" target="_blank">View Paper on arXiv</a></p>
    <p>This paper presents ... (additional content here)</p>
  </div>
</div>


Create content & metadata
------
For site content, there is one markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

The repository includes [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual markdown files that will be properly formatted for the Academic Pages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the markdown files, then commit and push them to the GitHub repository.

How to edit your site's GitHub repository
------
Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons. 

Example: editing a markdown file for a talk
![Editing a markdown file for a talk](/images/editing-talk.png)

For more info
------
More info about configuring Academic Pages can be found in [the guide](https://academicpages.github.io/markdown/), the [growing wiki](https://github.com/academicpages/academicpages.github.io/wiki), and you can always [ask a question on GitHub](https://github.com/academicpages/academicpages.github.io/discussions). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful.
