# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html
#
# Reference:
# https://github.com/executablebooks/MyST-Parser

from sphinx.application import Sphinx
import os
import sys

# -- Project information -----------------------------------------------------

project = 'CS2 Utility Notes'
copyright = '2025'
author = ' '
master_doc = "index"

# -- General configuration ---------------------------------------------------
extensions = [
    "myst_parser",
    # "autodoc2",
    "sphinx.ext.intersphinx",
    "sphinx.ext.viewcode",
    # "sphinx.ext.autodoc",
    "sphinx.ext.autosummary",
    'sphinx.ext.githubpages',
    "sphinx_design",
    "sphinx_copybutton",
    "sphinxext.rediraffe",
    "sphinx_pyscript",
    "sphinx_tippy",
    "sphinx_togglebutton",
]

templates_path = ['_templates']
exclude_patterns = ['**/_sidebar.md',
                    '_sidebar.md', 'README.md',
                    '**/README.md',
                    '**/_navbar.md', '_navbar.md',
                    '_coverpage.md']
suppress_warnings = ['myst.header']

# -- Autodoc settings ---------------------------------------------------
autodoc2_packages = [
]

# -- Options for HTML output -------------------------------------------------

html_theme = 'sphinx_book_theme'
html_theme_options = {
    "logo": {
        # "text": "CS2 Utility Notes",
        "image_light": "_static/CS2UtilityNotesLogo.png",
        "image_dark": "_static/CS2UtilityNotesLogo.png",
    }
}
 
html_static_path = ['_static']
html_css_files = ["custom.css"]
myst_enable_extensions = [
    "amsmath",
    "attrs_block",
    "attrs_inline",
    "colon_fence",
    "deflist",
    "dollarmath",
    "fieldlist",
    "html_admonition",
    "html_image",
    "linkify",
    "replacements",
    "smartquotes",
    "strikethrough",
    "substitution",
    "tasklist",
]

myst_dmath_double_inline = True
myst_dmath_allow_labels = True
myst_heading_anchors = 2
rediraffe_redirects = "redirects.txt"

# Configure MathJax v3
mathjax3_config = {
    "tex": {
        "tags": "ams"
    }
}

# -- Local Sphinx extensions -------------------------------------------------


def setup(app: Sphinx):
    """Add functions to the Sphinx setup."""
    from myst_parser._docs import (
        DirectiveDoc,
        DocutilsCliHelpDirective,
        MystAdmonitionDirective,
        MystConfigDirective,
        MystExampleDirective,
        MystLexer,
        MystToHTMLDirective,
        MystWarningsDirective,
        NumberSections,
        StripUnsupportedLatex,
    )

    app.add_directive("myst-config", MystConfigDirective)
    app.add_directive("docutils-cli-help", DocutilsCliHelpDirective)
    app.add_directive("doc-directive", DirectiveDoc)
    app.add_directive("myst-warnings", MystWarningsDirective)
    app.add_directive("myst-example", MystExampleDirective)
    app.add_directive("myst-admonitions", MystAdmonitionDirective)
    app.add_directive("myst-to-html", MystToHTMLDirective)
    app.add_post_transform(StripUnsupportedLatex)
    app.add_lexer("myst", MystLexer)
