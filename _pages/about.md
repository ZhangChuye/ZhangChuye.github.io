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
    font-size: 0.9em; /* Adjust size as needed */
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
======

---

<!-- ------ -->

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



Research
======

---

**Don't Yell at Your Robot: Physical Correction as the Collaborative Interface for Language Model Powered Robots**

[Project Home Page](https://sites.google.com/sas.upenn.edu/dontyellatyourrobot/home)

*We present a novel approach for enhancing human-robot collaboration using physical interactions for real-time error correction of large language model (LLM) parameterized commands.*


<div class="video-container">
    <iframe src="https://www.youtube-nocookie.com/embed/fY_BDzoNCw8?si=Bu4uI_L0UHTrkfWc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
