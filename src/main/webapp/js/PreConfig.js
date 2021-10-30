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
		},
                {
                    "id": "gcp2021-products",
                    "title": { "main": "GCP Products" },
                    "desc": { "main": "Collection of GCP product icons" },
                    "libs": [
                        {
                            "title": { "main": "AI and Machine Learning"},
                            "url": "https://timretout.github.io/drawio/libs/gcp2021-icons-ai.xml"
                        },
                        {
                            "title": { "main": "API Management"},
                            "url": "https://timretout.github.io/drawio/libs/gcp2021-icons-api.xml"
                        },
                        {
                            "title": { "main": "Compute"},
                            "url": "https://timretout.github.io/drawio/libs/gcp2021-icons-compute.xml"
                        },
                        {
                            "title": { "main": "Containers"},
                            "url": "https://timretout.github.io/drawio/libs/gcp2021-icons-containers.xml"
                        },
                        {
                            "title": { "main": "Data Analytics"},
                            "url": "https://timretout.github.io/drawio/libs/gcp2021-icons-data.xml"
                        },
                        {
                            "title": { "main": "Databases"},
                            "url": "https://timretout.github.io/drawio/libs/gcp2021-icons-databases.xml"
                        },
                        {
                            "title": { "main": "Developer Tools"},
                            "url": "https://timretout.github.io/drawio/libs/gcp2021-icons-developer-tools.xml"
                        },
                        {
                            "title": { "main": "Healthcare and Life Sciences"},
                            "url": "https://timretout.github.io/drawio/libs/gcp2021-icons-healthcare.xml"
                        },
                        {
                            "title": { "main": "Hybrid and Multicloud"},
                            "url": "https://timretout.github.io/drawio/libs/gcp2021-icons-hybrid.xml"
                        },
                        {
                            "title": { "main": "Internet of Things (IoT)"},
                            "url": "https://timretout.github.io/drawio/libs/gcp2021-icons-iot.xml"
                        },
                        {
                            "title": { "main": "Management Tools"},
                            "url": "https://timretout.github.io/drawio/libs/gcp2021-icons-management.xml"
                        },
                        {
                            "title": { "main": "Media and Gaming"},
                            "url": "https://timretout.github.io/drawio/libs/gcp2021-icons-media.xml"
                        },
                        {
                            "title": { "main": "Migration"},
                            "url": "https://timretout.github.io/drawio/libs/gcp2021-icons-migration.xml"
                        },
                        {
                            "title": { "main": "Networking"},
                            "url": "https://timretout.github.io/drawio/libs/gcp2021-icons-networking.xml"
                        },
                        {
                            "title": { "main": "Operations"},
                            "url": "https://timretout.github.io/drawio/libs/gcp2021-icons-operations.xml"
                        },
                        {
                            "title": { "main": "Security and Identity"},
                            "url": "https://timretout.github.io/drawio/libs/gcp2021-icons-security.xml"
                        },
                        {
                            "title": { "main": "Serverless Computing"},
                            "url": "https://timretout.github.io/drawio/libs/gcp2021-icons-serverless.xml"
                        },
                        {
                            "title": { "main": "Storage"},
                            "url": "https://timretout.github.io/drawio/libs/gcp2021-icons-storage.xml"
                        }
                    ]
                }
            ]
        }
    ],
    "defaultLibraries": "gcp2021-general;gcp2021-icons"
};
urlParams['sync'] = 'manual';
