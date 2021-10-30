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
window.PROXY_URL = "https://viewer.diagrams.net/proxy";
window.DRAWIO_CONFIG = {
    "customFonts": [{"fontFamily": "Roboto", "fontUrl": "https://fonts.googleapis.com/css?family=Roboto"}],
    "libraries": [
        {
            "title": { "main": "GCP 2021" },
            "entries": [
                {
                    "id": "gcp2021-general",
                    "title": { "main": "GCP general shapes" },
                    "desc": { "main": "Collection of general GCP shapes" },
                    "libs": [
                        {
                            "title": { "main": "Brand Logos"},
                            "url": "https://timretout.github.io/drawio/libs/brands.xml"
                        },
                        {
                            "title": { "main": "Diagram Elements"},
                            "url": "https://timretout.github.io/drawio/libs/gcp2021-diagram-elements.xml"
                        }
                    ]
                },
                {
                    "id": "gcp2021-icons",
                    "title": { "main": "GCP Icons" },
                    "desc": { "main": "Collection of GCP icons" },
                    "libs": [
                        {
                            "title": { "main": "GCP Icons"},
                            "url": "https://timretout.github.io/drawio/libs/gcp2021-icons-all.xml"
                        }
                    ]
	        	}
            ]
        }
    ],
    "defaultLibraries": "gcp2021-general;gcp2021-icons"
};
urlParams['sync'] = 'manual';
