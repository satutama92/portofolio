/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/*
 * This file is used/requested by the 'Styles' button.
 * The 'Styles' button is not enabled by default in DrupalFull and DrupalFiltered toolbars.
 */
if(typeof(CKEDITOR) !== 'undefined') {
    CKEDITOR.addStylesSet( 'drupal',
    [
            /* Block Styles */

            // These styles are already available in the "Format" drop-down list, so they are
            // not needed here by default. You may enable them to avoid placing the
            // "Format" drop-down list in the toolbar, maintaining the same features.

            { name : 'Paragraph'		, element : 'p', attributes : {'class':'richtext'} },

            { name : 'h2 Headline importants', element : 'h2' , attributes : {'class':'richtext'}},
            { name : 'h3 Headline'		, element : 'h3' , attributes : {'class':'richtext'}},
            { name : 'h4 Subheadline important'		, element : 'h4' , attributes : {'class':'richtext'}},
            { name : 'h5 Subheadline'		, element : 'h5' , attributes : {'class':'richtext'}},
            { name : 'h6 Paragraph important'		, element : 'h6' , attributes : {'class':'richtext'}},

            // { name : 'Preformatted Text', element : 'pre' },
            // { name : 'Address'			, element : 'address' },
            //
            //
            // { name : 'Blue Title'		, element : 'h3', styles : { 'color' : 'Blue' } },
            // { name : 'Red Title'		, element : 'h3', styles : { 'color' : 'Red' } },

            /* Inline Styles */

            // These are core styles available as toolbar buttons. You may opt enabling
            // some of them in the "Styles" drop-down list, removing them from the toolbar.
            /*
            { name : 'Strong'			, element : 'strong', overrides : 'b' },
            { name : 'Emphasis'			, element : 'em'	, overrides : 'i' },
            { name : 'Underline'		, element : 'u' },
            { name : 'Strikethrough'	, element : 'strike' },
            { name : 'Subscript'		, element : 'sub' },
            { name : 'Superscript'		, element : 'sup' },
            */

            // { name : 'Marker: Yellow'	, element : 'span', styles : { 'background-color' : 'Yellow' } },
            // { name : 'Marker: Green'	, element : 'span', styles : { 'background-color' : 'Lime' } },

            { name : 'Big'				, element : 'big', attributes : {'class':'richtext'} },
            { name : 'Small'			, element : 'small', attributes : {'class':'richtext'} },
            { name : 'iframe'				, element : 'div', attributes : {'class':'richtext'} },
            // { name : 'Typewriter'		, element : 'tt', attributes : {'class':'richtext'} },
            //
            // { name : 'Computer Code'	, element : 'code' },
            // { name : 'Keyboard Phrase'	, element : 'kbd' },
            // { name : 'Sample Text'		, element : 'samp' },
            // { name : 'Variable'			, element : 'var' },
            //
            // { name : 'Deleted Text'		, element : 'del' },
            // { name : 'Inserted Text'	, element : 'ins' },
            //
            // { name : 'Cited Work'		, element : 'cite' },
            // { name : 'Inline Quotation'	, element : 'q' },
            //
            // { name : 'Language: RTL'	, element : 'span', attributes : { 'dir' : 'rtl' } },
            // { name : 'Language: LTR'	, element : 'span', attributes : { 'dir' : 'ltr' } },

            /* Object Styles */
            { name : 'Document link'		, element : 'a', attributes : {'class':'download-link','style':'font-weight: normal'} },
            { name : 'Info link'		, element : 'a', attributes : {'class':'info-link','style':'font-weight: normal'} },
            { name : 'Anchor link'		, element : 'a', attributes : {'class':'anchor','style':'font-weight: normal'} },
            { name : 'Conversion link'		, element : 'a', attributes : {'class':'a-button btn btn-sub conversion','style' : 'margin: 0'} },
            { name : 'Primary link'		, element : 'a', attributes : {'class':'a-button btn primary','style' : 'margin: 0'} },
            { name : 'Secondary link'		, element : 'a', attributes : {'class':'a-button btn btn-flat secondary','style' : 'margin: 0'} },
            { name : 'Tertiary link'		, element : 'a', attributes : {'class':'tertiary','style' : 'margin: 0'} },
            { name : 'Ordered'		, element : 'ol', attributes : {'class':'numbered'} },
            { name : 'Unordered'		, element : 'ul', attributes : {'class':'bullet'} },
            { name : 'Checkmark list'		, element : 'ul', attributes : {'class':'checkmark-list'} },
            { name : 'Checkmark list small'		, element : 'ul', attributes : {'class':'checkmark-list small'} },
            { name : 'Image large'		, element : 'div', attributes : {'class':'richtext-image-large'} },
            { name : 'Image medium left'		, element : 'div', attributes : {'class':'richtext-image-medium'} },
            { name : 'Image medium middle'		, element : 'div', attributes : {'class':'richtext-image-medium-middle'} },
            { name : 'Image medium right'		, element : 'div', attributes : {'class':'richtext-image-medium-right'} },
            { name : 'Image small left'		, element : 'div', attributes : {'class':'richtext-image-small'} },
            { name : 'Image small middle'		, element : 'div', attributes : {'class':'richtext-image-small-middle'} },
            { name : 'Image small right'		, element : 'div', attributes : {'class':'richtext-image-small-right'} },

            {
                    name : 'Image on Left',
                    element : 'img',
                    attributes :
                    {
                            'style' : 'padding: 5px; margin-right: 5px',
                            'border' : '2',
                            'align' : 'left'
                    }
            },

            {
                    name : 'Image on Right',
                    element : 'img',
                    attributes :
                    {
                            'style' : 'padding: 5px; margin-left: 5px',
                            'border' : '2',
                            'align' : 'right'
                    }
            }
    ]);
}
