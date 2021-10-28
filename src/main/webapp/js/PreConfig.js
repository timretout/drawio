/**
 * Copyright (c) 2006-2020, JGraph Ltd
 * Copyright (c) 2006-2020, draw.io AG
 */
// Overrides of global vars need to be pre-loaded
window.EXPORT_URL = 'REPLACE_WITH_YOUR_IMAGE_SERVER';
window.PLANT_URL = 'REPLACE_WITH_YOUR_PLANTUML_SERVER';
window.DRAWIO_BASE_URL = null; // Replace with path to base of deployment, e.g. https://www.example.com/folder
window.DRAWIO_VIEWER_URL = null; // Replace your path to the viewer js, e.g. https://www.example.com/js/viewer.min.js
window.DRAWIO_LIGHTBOX_URL = null; // Replace with your lightbox URL, eg. https://www.example.com
window.DRAW_MATH_URL = 'math';
//window.DRAWIO_CONFIG = null; // Replace with your custom draw.io configurations. For more details, https://www.diagrams.net/doc/faq/configure-diagram-editor
window.DRAWIO_CONFIG = {
    "customFonts": [{"fontFamily": "Roboto", "fontUrl": "https://fonts.googleapis.com/css?family=Roboto"}],
    "libraries": [
        {
            "title": { "main": "GCP 2021" },
            "entries": [
                {
                    "id": "gcp2021-brands",
                    "title": { "main": "Brand Logos" },
                    "desc": { "main": "Collection of brand logos" },
                    "libs": [
                        {
                            "title": { "main": "Brand Logos"},
                            "url": "/drawio/libs/brands.xml"
                        }
                    ]
                }
            ]
        }
    ],
    "defaultLibraries": "gcp2021-brands;general;uml;er;bpmn;flowchart;basic;arrows2"
};
urlParams['sync'] = 'manual';
