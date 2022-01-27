"use strict";
exports.id = 513;
exports.ids = [513];
exports.modules = {

/***/ 4644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const About = ()=>{
    const { 0: toggleList , 1: setToggleList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("tab1");
    const activeList = (value)=>value === toggleList ? "active" : ""
    ;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "about",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "roww",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "resumo_fn_main_title",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "subtitle",
                                children: "About Me"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "title",
                                children: "Biography"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "desc",
                                children: `I enjoy coding, creating beautiful websites makes me happy.
              I like playing soccer and I'm the captain of my undergraduate school's men's soccer team.
              I'm also an amateur photographer.`
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "resumo_fn_about_info",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "about_left",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        children: "Name"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        children: "Miaoyan Zhang"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        children: "Birthday"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        children: "27th Sep 1996"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        children: "Address"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        children: "Philadelphia"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        children: "Phone"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "tel:+12678153833",
                                                            children: "(+1) 267 815 3833"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        children: "Email"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "myzhang@seas.upenn.edu",
                                                            children: "myzhang@seas.upenn.edu"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "about_right",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "resumo_fn_cv_btn",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: "files/Resume_Miaoyan_2022_1.pdf",
                                        download: true,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "icon",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                        version: "1.1",
                                                        x: "0px",
                                                        y: "0px",
                                                        viewBox: "0 0 449.306 449.306",
                                                        style: {
                                                            enableBackground: "new 0 0 449.306 449.306"
                                                        },
                                                        xmlSpace: "preserve",
                                                        className: "fn__svg replaced-svg",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M447.739,251.298l-59.037-126.433c-1.731-3.54-5.484-5.625-9.404-5.224h-50.155c-5.771,0-10.449,4.678-10.449,10.449 c0,5.771,4.678,10.449,10.449,10.449h43.363l48.588,104.49h-59.559c-27.004-0.133-51.563,15.625-62.694,40.229 c-8.062,16.923-25.141,27.698-43.886,27.69h-60.604c-18.745,0.008-35.823-10.767-43.886-27.69 c-11.131-24.604-35.69-40.362-62.694-40.229H29.257l57.469-104.49h33.437c5.771,0,10.449-4.678,10.449-10.449 c0-5.771-4.678-10.449-10.449-10.449H80.457c-3.776-0.358-7.425,1.467-9.404,4.702L2.09,250.776 c-1.209,1.072-1.958,2.569-2.09,4.18v130.09c0.832,29.282,24.524,52.744,53.812,53.29h341.682 c29.289-0.546,52.98-24.008,53.812-53.29v-130.09C449.107,253.622,448.567,252.362,447.739,251.298z M428.408,385.045 c-0.812,17.743-15.16,31.864-32.914,32.392H53.812c-17.754-0.528-32.102-14.648-32.914-32.392V265.927h66.873 c18.745-0.008,35.823,10.767,43.886,27.69c11.131,24.604,35.69,40.362,62.694,40.229h60.604 c27.004,0.133,51.563-15.625,62.694-40.229c8.062-16.923,25.141-27.698,43.886-27.69h66.873V385.045z"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                        version: "1.1",
                                                        x: "0px",
                                                        y: "0px",
                                                        viewBox: "0 0 449.306 449.306",
                                                        style: {
                                                            enableBackground: "new 0 0 449.306 449.306"
                                                        },
                                                        xmlSpace: "preserve",
                                                        className: "fn__svg arrow replaced-svg",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M217.339,252.865c3.706,4.04,9.986,4.31,14.025,0.603c0.21-0.192,0.411-0.394,0.603-0.603l71.053-71.576 c3.462-4.617,2.527-11.166-2.09-14.629c-3.715-2.786-8.824-2.786-12.539,0l-53.29,53.29V21.42 c0-5.771-4.678-10.449-10.449-10.449s-10.449,4.678-10.449,10.449v198.531l-53.29-53.29c-4.617-3.462-11.166-2.527-14.629,2.09 c-2.786,3.715-2.786,8.824,0,12.539L217.339,252.865z"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Download CV"
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "resumo_fn_tabs",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "tab_header",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: activeList("tab1"),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                onClick: ()=>setToggleList("tab1")
                                                ,
                                                children: "Experience"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: activeList("tab2"),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                onClick: ()=>setToggleList("tab2")
                                                ,
                                                children: "Education"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: activeList("tab3"),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                onClick: ()=>setToggleList("tab3")
                                                ,
                                                children: "Skills"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "tab_content",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        id: "tab1",
                                        className: `tab_item ${activeList("tab1")}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "resumo_fn_boxed_list",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "item",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "item_top",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                            children: "CityDNA"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "( Nov 2020 — Aug 2021 )"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    children: "Sofrware Engineer"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    children: [
                                                                        "• Independently implemented EzScene - a space-time scenario simulation application framework and 2D/3D webGL system. • Implemented EzDataManagement - a data management platform for users to CRUD database online.",
                                                                        " "
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "item",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "item_top",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                            children: "CityDNA"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "( Jun 2020 — Nov 2020 )"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    children: "Software Development and Data Analysis Intern"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    children: [
                                                                        "• Crawled over 5 million sales and rent data. • Further developed ArcPy algorithms. • Developed machine learning models to predict land-use with satellite imagery.",
                                                                        " "
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "item",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "item_top",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                            children: "World Resources Institute"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "( Feb 2019 – Jun 2019 )"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    children: "Analytics Intern"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    children: [
                                                                        "• Collected data and adopted different machine learning models to predict global transportation emissions in 50 years.",
                                                                        " "
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        id: "tab2",
                                        className: `tab_item ${activeList("tab2")}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "resumo_fn_boxed_list",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "item",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "item_top",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                            children: "University of Pennsylvania"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "( 2021 — 2023 )"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    children: "Master of Computer and Information Technology"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    children: [
                                                                        "GPA: 4.0/4.0",
                                                                        " "
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "item",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "item_top",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                            children: "University of Pennsylvania"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "( 2019 — 2020 )"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    children: "Master of Urban Spatial Analytics"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    children: [
                                                                        "GPA 3.71/4",
                                                                        " "
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "item",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "item_top",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                            children: "Southeast University"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "( 2015 — 2019 )"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    children: "Bachelor Degree"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    children: [
                                                                        "GPA 3.74/4",
                                                                        " "
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        id: "tab3",
                                        className: `tab_item ${activeList("tab3")}`,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "resumo_fn_progress_bar",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "progress_item open",
                                                        "data-value": 92,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "item_in",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    className: "progress_title",
                                                                    children: "HTML5 & CSS3"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "progress_percent",
                                                                    style: {
                                                                        right: "8%"
                                                                    },
                                                                    children: "92%"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "bg_wrap",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "progress_bg",
                                                                        style: {
                                                                            width: "92%"
                                                                        }
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "progress_item open",
                                                        "data-value": 95,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "item_in",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    className: "progress_title",
                                                                    children: "React"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "progress_percent",
                                                                    style: {
                                                                        right: "5%"
                                                                    },
                                                                    children: "95%"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "bg_wrap",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "progress_bg",
                                                                        style: {
                                                                            width: "95%"
                                                                        }
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "progress_item open",
                                                        "data-value": 80,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "item_in",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    className: "progress_title",
                                                                    children: "Java"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "progress_percent",
                                                                    style: {
                                                                        right: "20%"
                                                                    },
                                                                    children: "80%"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "bg_wrap",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "progress_bg",
                                                                        style: {
                                                                            width: "80%"
                                                                        }
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "progress_item open",
                                                        "data-value": 85,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "item_in",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    className: "progress_title",
                                                                    children: "Python"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "progress_percent",
                                                                    style: {
                                                                        right: "15%"
                                                                    },
                                                                    children: "85%"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "bg_wrap",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "progress_bg",
                                                                        style: {
                                                                            width: "85%"
                                                                        }
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "resumo_fn_desc"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);


/***/ }),

/***/ 8504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Contact = ()=>{
    const { 0: form , 1: setForm  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        email: "",
        name: "",
        subject: "",
        msg: ""
    });
    const { 0: active , 1: setActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: success , 1: setSuccess  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const onChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const { email , name , subject , msg  } = form;
    const onSubmit = (e)=>{
        e.preventDefault();
        if (email && name && subject && msg) {
            setSuccess(true);
            setTimeout(()=>{
                setForm({
                    email: "",
                    name: "",
                    subject: "",
                    msg: ""
                });
                setSuccess(false);
            }, 2000);
            window.open(`mailto:myzhang@seas.upenn.edu?subject=${subject}&body=${msg}`);
        } else {
            setError(true);
            setTimeout(()=>{
                setError(false);
            }, 2000);
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "contact",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "roww resumo_fn_contact",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "resumo_fn_main_title",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "subtitle",
                                children: "Contact"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "title",
                                children: "Get In Touch"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "desc",
                                children: "If you have any suggestion, project or even you want to say “hello”, please fill out the form below and I will reply you shortly."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        className: "contact_form",
                        onSubmit: (e)=>onSubmit(e)
                        ,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "success",
                                "data-success": "Your message has been received, we will contact you soon.",
                                style: {
                                    display: success ? "block" : "none"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "contact_success",
                                    children: "Your message has been received, we will contact you soon."
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "empty_notice",
                                style: {
                                    display: error ? "block" : "none"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Please Fill Required Fields!"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "items_wrap",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "items",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "item half",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: `input_wrapper ${active === "name" || name ? "active" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        onFocus: ()=>setActive("name")
                                                        ,
                                                        onBlur: ()=>setActive(null)
                                                        ,
                                                        onChange: (e)=>onChange(e)
                                                        ,
                                                        value: name,
                                                        name: "name",
                                                        id: "name",
                                                        type: "text"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "moving_placeholder",
                                                        children: "Name *"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "item half",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: `input_wrapper ${active === "email" || email ? "active" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        onFocus: ()=>setActive("email")
                                                        ,
                                                        onBlur: ()=>setActive(null)
                                                        ,
                                                        onChange: (e)=>onChange(e)
                                                        ,
                                                        value: email,
                                                        name: "email",
                                                        id: "email",
                                                        type: "email"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "moving_placeholder",
                                                        children: "Email *"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "item",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: `input_wrapper ${active === "subject" || subject ? "active" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        onFocus: ()=>setActive("subject")
                                                        ,
                                                        onBlur: ()=>setActive(null)
                                                        ,
                                                        id: "subject",
                                                        onChange: (e)=>onChange(e)
                                                        ,
                                                        value: subject,
                                                        name: "subject",
                                                        type: "text"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "moving_placeholder",
                                                        children: "Subject"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "item",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: `input_wrapper ${active === "message" || msg ? "active" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                        onFocus: ()=>setActive("message")
                                                        ,
                                                        onBlur: ()=>setActive(null)
                                                        ,
                                                        name: "msg",
                                                        onChange: (e)=>onChange(e)
                                                        ,
                                                        value: msg,
                                                        id: "message"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "moving_placeholder",
                                                        children: "Message"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "item",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: "a",
                                                type: "submit",
                                                id: "send_message",
                                                value: "Send Email"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "resumo_fn_contact_info",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Address"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: "4111 Walnut Street, Philadelphia, PA, 19104"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Phone"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "tel:+12678153833",
                                    children: "(+1) 267-815-3833"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "fn__link",
                                    href: "mailto:myzhang@seas.upenn.edu",
                                    children: "myzhang@seas.upenn.edu"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);


/***/ }),

/***/ 3791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Home = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "home",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "roww",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "resumo_fn_main_title",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "subtitle",
                            children: "Introduction"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "title",
                            children: "Miaoyan Zhang"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "desc",
                            children: "My name is Miaoyan Zhang, currently a Computer Science student at the University of Pennsylvania. I have one year of full-time Software Engineer work experience and I'm now looking for 2022 summer SDE internship."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "img/Miaoyan_Zhang_cocosign.png",
                            alt: "image"
                        })
                    ]
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ }),

/***/ 9974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1917);



const Modalbox = ({ close , value  })=>{
    const data = [
        {
            name: "PennLobby",
            tag: "Group-Based Social Network Web App",
            desc: [
                {
                    p: `•	Implemented a MERN platform for students to have group discussions on school affairs, post and send private messages
        •	Built an interactive front-end using React & Redux and use RESTful API for front-end and back-end communication
        •	Implemented web server with Express and Node.js, performed CRUD operations to manage data in MongoDB
        •	Created AWS S3 cloud storage bucket to store application’s image & video files, in order to decrease load to the server
        •	Used Jest & cypress for testing, and Travis for continuous integration. Enabled live notification and chat with WebSocket
        
        `
                }
            ]
        },
        {
            name: "Delicious Fruit",
            tag: "web, mobile, online",
            desc: [
                {
                    p: "Proin sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget efficitur cursus. Integer ornare fringilla arcu, eu mattis risus convallis in."
                },
                {
                    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis risus convallis in. Sed ornare tellus a odio bibendum, at tristique sapien malesuada. "
                }
            ]
        },
        {
            name: "Ice Cream",
            tag: "mobile, design",
            desc: [
                {
                    p: "Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis risus convallis in."
                }
            ]
        },
        {
            name: "EzScene",
            tag: "Space-time scenario simulation application framework and 2D/3D webGL system",
            desc: [
                {
                    p: `-	Independently implemented space-time scenario map & data platform with React and Redux, based on Mapbox GL 
        -	Implemented different customization of the product, which was sold to 32 different cities, bring $3 million profit
        -	Wrote reusable UI components library; implemented rapid application development with Kepler GL for early stage
        -	Developed interactive functions between map and Echarts, allow users update statistical charts by draw on map, etc.
        `
                }
            ]
        },
        {
            name: "Ice Cream",
            tag: "mobile, design",
            desc: [
                {
                    p: "Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis risus convallis in."
                }
            ]
        },
        {
            name: "Yellow Phone",
            tag: "mobile, design",
            desc: [
                {
                    p: "Proin sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget efficitur cursus. Integer ornare fringilla arcu, eu mattis risus convallis in."
                },
                {
                    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis risus convallis in. Sed ornare tellus a odio bibendum, at tristique sapien malesuada."
                }
            ]
        }
    ];
    const { 0: index , 1: setIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_utilits__WEBPACK_IMPORTED_MODULE_2__/* .dataImage */ .CC)();
    }, [
        index
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "resumo_fn_modalbox opened",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: "extra_closer",
                href: "#",
                onClick: (e)=>{
                    e.preventDefault();
                    close(false);
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "box_inner",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "closer",
                        href: "#",
                        onClick: (e)=>{
                            e.preventDefault();
                            close(false);
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "modal_content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "modal_in",
                                children: data.map((d, i1)=>i1 + 1 == index && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "fn__cat",
                                                children: d.tag
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "fn__title",
                                                children: d.name
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "img_holder",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "/img/thumb/square.jpg",
                                                        alt: ""
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "abs_img",
                                                        "data-bg-img": `/img/portfolio/${index}.jpg`
                                                    })
                                                ]
                                            }),
                                            d.desc.map((des, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "fn__desc",
                                                    children: des.p
                                                }, i)
                                            )
                                        ]
                                    }, i1)
                                )
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "fn__nav",
                                "data-from": "portfolio",
                                "data-index": "1",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: "#",
                                        className: "prev",
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            setIndex(index == 1 ? 5 : index - 1);
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text",
                                                children: "Prev"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "arrow_wrapper",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "arrow"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: "#",
                                        className: "next",
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            setIndex(index == 5 ? 1 : index + 1);
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text",
                                                children: "Next"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "arrow_wrapper",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "arrow"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modalbox);


/***/ }),

/***/ 5336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_News)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/utilits.js
var utilits = __webpack_require__(1917);
;// CONCATENATED MODULE: ./src/components/NewsModalbox.js



const NewsModalbox = ({ close , value  })=>{
    const data = [
        {
            title: "PennLobby",
            tag: "Group-Based Social Network Web App",
            desc: [
                {
                    p: `-	Implemented a MERN platform for students to have group discussions on school affairs, post and send private messages
        -	Built an interactive front-end using React & Redux and use RESTful API for front-end and back-end communication
        -	Implemented web server with Express and Node.js, performed CRUD operations to manage data in MongoDB
        -	Created AWS S3 cloud storage bucket to store application’s image & video files, in order to decrease load to the server
        -	Used Jest & cypress for testing, and Travis for continuous integration. Enabled live notification and chat with WebSocket`
                }
            ],
            link: "https://pennlobby.herokuapp.com/",
            img: "img/pennlobby.png"
        },
        {
            title: "EzScene",
            tag: "Space-time scenario simulation application framework and 2D/3D webGL system",
            desc: [
                {
                    p: `-	Independently implemented space-time scenario map & data platform with React and Redux, based on Mapbox GL 
        -	Implemented different customization of the product, which was sold to 32 different cities, bring $3 million profit
        -	Wrote reusable UI components library; implemented rapid application development with Kepler GL for early stage
        -	Developed interactive functions between map and Echarts, allow users update statistical charts by draw on map, etc.
        `
                }
            ],
            img: "img/ezscene.png"
        },
        {
            title: "EzRisk",
            tag: "Full-stack(Flask) rapid-developed risk alarm system",
            desc: [
                {
                    p: `-	Enabled risk prediction, parameter adjustment and result visualization based on user’s input under Flask framework`
                }
            ],
            img: "img/risk.jpg"
        },
        {
            title: "Baltimore Fleet Optimization",
            tag: "Optimization project cooperate with Baltimore government",
            desc: [
                {
                    p: `-	Optimized and reduced Baltimore fleet comeback rates with time-series prediction model, reduced 3% of financial cost
        -	Created a web app with JavaScript CSS & HTML for mechanics and decision-makers to better visualize prediction result
        `
                }
            ],
            link: "https://akshaypracticum.github.io/practicum.github.io/",
            img: "img/baltimore.png"
        },
        {
            title: "Guess Celebrity Games",
            tag: "Small webpage game",
            desc: [
                {
                    p: `-	Built a full-stack web application that provide users a web game that let users guess who the celebrity is with given photos
        -	Stored all user records in MySQL; implemented back-end with Node and Mongoose; deployed the web app to Heroku
        `
                }
            ],
            link: "https://guess-celebrities-quiz.herokuapp.com/",
            img: "img/celeb.png"
        }, 
    ];
    const { 0: index , 1: setIndex  } = (0,external_react_.useState)(value);
    (0,external_react_.useEffect)(()=>{
        (0,utilits/* dataImage */.CC)();
    }, [
        index
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "resumo_fn_modalbox opened",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: "extra_closer",
                href: "#",
                onClick: (e)=>{
                    e.preventDefault();
                    close(false);
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "box_inner",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "closer",
                        href: "#",
                        onClick: (e)=>{
                            e.preventDefault();
                            close(false);
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "modal_content",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "modal_in",
                                children: data.map((d, i)=>i + 1 == index && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "fn__cat",
                                                children: d.tag
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "fn__title",
                                                children: d.title
                                            }),
                                            d.link && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: d.link,
                                                style: {
                                                    textDecorationColor: "#987750"
                                                },
                                                target: "_blank",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "fn__title",
                                                    style: {
                                                        marginTop: '-40px'
                                                    },
                                                    children: `See App ->`
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "img_holder",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/img/thumb/square.jpg",
                                                        alt: ""
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "abs_img",
                                                        "data-bg-img": d.img
                                                    })
                                                ]
                                            }),
                                            d.desc.map((des)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "fn__desc",
                                                    children: des.p
                                                }, i)
                                            )
                                        ]
                                    }, i)
                                )
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "fn__nav",
                                "data-from": "portfolio",
                                "data-index": "1",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "#",
                                        className: "prev",
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            setIndex(index == 1 ? 5 : index - 1);
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text",
                                                children: "Prev"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "arrow_wrapper",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "arrow"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "#",
                                        className: "next",
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            setIndex(index == 5 ? 1 : index + 1);
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text",
                                                children: "Next"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "arrow_wrapper",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "arrow"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_NewsModalbox = (NewsModalbox);

;// CONCATENATED MODULE: ./src/components/News.js



const News = ()=>{
    const { 0: modal , 1: setModal  } = (0,external_react_.useState)(false);
    const { 0: modalValue , 1: setModalValue  } = (0,external_react_.useState)(null);
    const { 0: load , 1: setLoad  } = (0,external_react_.useState)(false);
    const { 0: hiddenItem , 1: setHiddenItem  } = (0,external_react_.useState)(true);
    const { 0: focusValue , 1: setFocusValue  } = (0,external_react_.useState)("");
    const modalValueSet = (value)=>{
        setModal(true);
        setModalValue(value);
    };
    const loadValueSet = (e)=>{
        e.preventDefault();
        if (hiddenItem) {
            setLoad(true);
            setTimeout(()=>{
                setLoad(false);
                setHiddenItem(false);
            }, 2000);
        }
    };
    const focusValueChange = ()=>{
        if (!hiddenItem) {
            setFocusValue("No more projects found");
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "portfolio",
        children: [
            modal && /*#__PURE__*/ jsx_runtime_.jsx(components_NewsModalbox, {
                close: setModal,
                value: modalValue
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "roww",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "resumo_fn_main_title",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "subtitle",
                                    children: "PORTFOLIO"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "title",
                                    children: "Featured Projects"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "resumo_fn_blog_list",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "modal_items",
                                    "data-from": "blog",
                                    "data-count": 5,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "item modal_item",
                                                onClick: ()=>modalValueSet(1)
                                                ,
                                                "data-index": 1,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "img_holder",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "img/thumb/square.jpg",
                                                                alt: "image"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "abs_img",
                                                                "data-bg-img": "img/pennlobby.png"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "title_holder",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Sep 2021 – Dec 2021"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    children: "PennLobby"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "fn__hidden",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "fn__cat",
                                                                children: "September 22, 2021"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                className: "fn__title",
                                                                children: "Five Solid Evidences Attending Design Is Good For Your Career Development."
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "img_holder",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "img/thumb/square.jpg",
                                                                        alt: "image"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "abs_img",
                                                                        "data-bg-img": "img/blog/1.jpg"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "fn__desc",
                                                                children: "Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis risus convallis in."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "fn__desc",
                                                                children: "Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor. Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique, ipsum sit amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor. Morbi enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat purus. In vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero sit amet lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus viverra. Maecenas consequat pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus, pulvinar ac mattis quis, pretium ac nulla. Morbi sed ligula ultrices, ornare mauris id, auctor arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula ex dapibus. Aenean venenatis metus eros, vel faucibus lorem porttitor eu."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "fn__desc",
                                                                children: "Sed porttitor augue erat, vitae convallis odio viverra id. In nec finibus elit. Nullam ac sodales nunc, vel sagittis elit. Ut condimentum ex ipsum, eu ornare odio aliquam eu. Ut iaculis eros quam, eu bibendum tellus convallis quis. Donec sapien risus, consequat ut magna nec, interdum porta nisl. Vivamus pulvinar hendrerit finibus. Nunc molestie lacinia risus, id mattis nunc euismod ac. Nam eu orci felis. Quisque ut elementum quam. Vivamus pulvinar nisi nunc, ut faucibus turpis tincidunt eget. Fusce nec ex quis odio laoreet consequat. Duis faucibus metus id feugiat sodales. Sed eu ligula eget quam ultricies tincidunt. Morbi sodales nunc ultrices justo pellentesque, ac mattis mi sagittis. Morbi ut consectetur neque."
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "item modal_item",
                                                onClick: ()=>modalValueSet(2)
                                                ,
                                                "data-index": 2,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "img_holder",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "img/thumb/square.jpg",
                                                                alt: "image"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "abs_img",
                                                                "data-bg-img": "img/ezscene.png"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "title_holder",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Nov 2020 – Aug 2021"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    children: "EzScene"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "fn__hidden",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "fn__cat",
                                                                children: "September 04, 2021"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                className: "fn__title",
                                                                children: "I Will Tell You The Truth About Design In The Next 60 Seconds."
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "img_holder",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "img/thumb/square.jpg",
                                                                        alt: "image"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "abs_img",
                                                                        "data-bg-img": "img/blog/3.jpg"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "fn__desc",
                                                                children: "Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis risus convallis in."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "fn__desc",
                                                                children: "Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor. Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique, ipsum sit amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor. Morbi enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat purus. In vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero sit amet lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus viverra. Maecenas consequat pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus, pulvinar ac mattis quis, pretium ac nulla. Morbi sed ligula ultrices, ornare mauris id, auctor arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula ex dapibus. Aenean venenatis metus eros, vel faucibus lorem porttitor eu."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "fn__desc",
                                                                children: "Sed porttitor augue erat, vitae convallis odio viverra id. In nec finibus elit. Nullam ac sodales nunc, vel sagittis elit. Ut condimentum ex ipsum, eu ornare odio aliquam eu. Ut iaculis eros quam, eu bibendum tellus convallis quis. Donec sapien risus, consequat ut magna nec, interdum porta nisl. Vivamus pulvinar hendrerit finibus. Nunc molestie lacinia risus, id mattis nunc euismod ac. Nam eu orci felis. Quisque ut elementum quam. Vivamus pulvinar nisi nunc, ut faucibus turpis tincidunt eget. Fusce nec ex quis odio laoreet consequat. Duis faucibus metus id feugiat sodales. Sed eu ligula eget quam ultricies tincidunt. Morbi sodales nunc ultrices justo pellentesque, ac mattis mi sagittis. Morbi ut consectetur neque."
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "item modal_item",
                                                onClick: ()=>modalValueSet(3)
                                                ,
                                                "data-index": 3,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "img_holder",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "img/thumb/square.jpg",
                                                                alt: "image"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "abs_img",
                                                                "data-bg-img": "img/risk.jpg"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "title_holder",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Nov 2020 - Dec 2020"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    children: `EzRisk`
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "fn__hidden",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "fn__cat",
                                                                children: "August 18, 2021"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                className: "fn__title",
                                                                children: `EzRisk`
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "img_holder",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "img/thumb/square.jpg",
                                                                        alt: "image"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "abs_img",
                                                                        "data-bg-img": "img/blog/4.jpg"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "fn__desc",
                                                                children: "Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis risus convallis in."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "fn__desc",
                                                                children: "Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor. Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique, ipsum sit amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor. Morbi enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat purus. In vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero sit amet lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus viverra. Maecenas consequat pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus, pulvinar ac mattis quis, pretium ac nulla. Morbi sed ligula ultrices, ornare mauris id, auctor arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula ex dapibus. Aenean venenatis metus eros, vel faucibus lorem porttitor eu."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "fn__desc",
                                                                children: "Sed porttitor augue erat, vitae convallis odio viverra id. In nec finibus elit. Nullam ac sodales nunc, vel sagittis elit. Ut condimentum ex ipsum, eu ornare odio aliquam eu. Ut iaculis eros quam, eu bibendum tellus convallis quis. Donec sapien risus, consequat ut magna nec, interdum porta nisl. Vivamus pulvinar hendrerit finibus. Nunc molestie lacinia risus, id mattis nunc euismod ac. Nam eu orci felis. Quisque ut elementum quam. Vivamus pulvinar nisi nunc, ut faucibus turpis tincidunt eget. Fusce nec ex quis odio laoreet consequat. Duis faucibus metus id feugiat sodales. Sed eu ligula eget quam ultricies tincidunt. Morbi sodales nunc ultrices justo pellentesque, ac mattis mi sagittis. Morbi ut consectetur neque."
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "item modal_item",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "item modal_item",
                                                onClick: ()=>modalValueSet(4)
                                                ,
                                                "data-index": 4,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "img_holder",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "img/thumb/square.jpg",
                                                                alt: "image"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "abs_img",
                                                                "data-bg-img": "img/baltimore.png"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "title_holder",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Feb 2020 – May 2020"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    children: "Baltimore Fleet Optimization"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "fn__hidden",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "fn__cat",
                                                                children: "August 15, 2021"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                className: "fn__title",
                                                                children: "Forgive Yourself for Not Being Perfect. Then Do It Again Tomorrow."
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "img_holder",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "img/thumb/square.jpg",
                                                                        alt: "image"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "abs_img",
                                                                        "data-bg-img": "img/blog/5.jpg"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "fn__desc",
                                                                children: "Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis risus convallis in."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "fn__desc",
                                                                children: "Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor. Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique, ipsum sit amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor. Morbi enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat purus. In vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero sit amet lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus viverra. Maecenas consequat pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus, pulvinar ac mattis quis, pretium ac nulla. Morbi sed ligula ultrices, ornare mauris id, auctor arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula ex dapibus. Aenean venenatis metus eros, vel faucibus lorem porttitor eu."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "fn__desc",
                                                                children: "Sed porttitor augue erat, vitae convallis odio viverra id. In nec finibus elit. Nullam ac sodales nunc, vel sagittis elit. Ut condimentum ex ipsum, eu ornare odio aliquam eu. Ut iaculis eros quam, eu bibendum tellus convallis quis. Donec sapien risus, consequat ut magna nec, interdum porta nisl. Vivamus pulvinar hendrerit finibus. Nunc molestie lacinia risus, id mattis nunc euismod ac. Nam eu orci felis. Quisque ut elementum quam. Vivamus pulvinar nisi nunc, ut faucibus turpis tincidunt eget. Fusce nec ex quis odio laoreet consequat. Duis faucibus metus id feugiat sodales. Sed eu ligula eget quam ultricies tincidunt. Morbi sodales nunc ultrices justo pellentesque, ac mattis mi sagittis. Morbi ut consectetur neque."
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: !hiddenItem ? "" : "be_animated",
                                                onClick: ()=>modalValueSet(5)
                                                ,
                                                "data-index": 5,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "img_holder",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "img/thumb/square.jpg",
                                                                alt: "image"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "abs_img",
                                                                "data-bg-img": "img/celeb.png"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "title_holder",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Oct 2021 – Nov 2021"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    children: "Guess Celebrity Games"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "fn__hidden",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "fn__cat",
                                                                children: "September 17, 2021"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                className: "fn__title",
                                                                children: "Ten Mind-Blowing Reasons Why Design Is Using This Technique For Exposure."
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "img_holder",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "img/thumb/square.jpg",
                                                                        alt: "image"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "abs_img",
                                                                        "data-bg-img": "img/blog/2.jpg"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "fn__desc",
                                                                children: "Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis risus convallis in."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "fn__desc",
                                                                children: "Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor. Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique, ipsum sit amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor. Morbi enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat purus. In vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero sit amet lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus viverra. Maecenas consequat pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus, pulvinar ac mattis quis, pretium ac nulla. Morbi sed ligula ultrices, ornare mauris id, auctor arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula ex dapibus. Aenean venenatis metus eros, vel faucibus lorem porttitor eu."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "fn__desc",
                                                                children: "Sed porttitor augue erat, vitae convallis odio viverra id. In nec finibus elit. Nullam ac sodales nunc, vel sagittis elit. Ut condimentum ex ipsum, eu ornare odio aliquam eu. Ut iaculis eros quam, eu bibendum tellus convallis quis. Donec sapien risus, consequat ut magna nec, interdum porta nisl. Vivamus pulvinar hendrerit finibus. Nunc molestie lacinia risus, id mattis nunc euismod ac. Nam eu orci felis. Quisque ut elementum quam. Vivamus pulvinar nisi nunc, ut faucibus turpis tincidunt eget. Fusce nec ex quis odio laoreet consequat. Duis faucibus metus id feugiat sodales. Sed eu ligula eget quam ultricies tincidunt. Morbi sodales nunc ultrices justo pellentesque, ac mattis mi sagittis. Morbi ut consectetur neque."
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "clearfix"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "load_more",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "#",
                                        "data-done": "Done",
                                        className: load ? "loading" : "",
                                        "data-no": "No more project found",
                                        onClick: (e)=>loadValueSet(e)
                                        ,
                                        onFocus: (e)=>focusValueChange()
                                        ,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text",
                                                children: hiddenItem ? "Load More Projects" : focusValue ? focusValue : "Done"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: "fn__pulse",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const components_News = (News);


/***/ }),

/***/ 9424:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var _sliderProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5968);
/* harmony import */ var _Modalbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9974);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, _sliderProps__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, _sliderProps__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





const Portfolio = ()=>{
    const { 0: modal , 1: setModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: modalValue , 1: setModalValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        id: "portfolio",
        children: [
            modal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modalbox__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                close: setModal,
                value: modalValue
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "roww",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "resumo_fn_main_title",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "my__nav",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        className: "prev",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        className: "next",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "subtitle",
                                children: "Portfolio"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "title",
                                children: "Featured Projects"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container noright",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "roww",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                        ..._sliderProps__WEBPACK_IMPORTED_MODULE_3__/* .portfolioSliderProps */ .T,
                        className: "owl-carousel modal_items",
                        "data-from": "portfolio",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                className: "item modal_item",
                                onClick: ()=>{
                                    setModal(true);
                                    setModalValue(1);
                                },
                                "data-index": 1,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "img_holder",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "img/thumb/square.jpg",
                                                alt: "image"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "abs_img",
                                                "data-bg-img": "img/pennlobby.png"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "title_holder",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Sep 2021 – Dec 2021"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#",
                                                    children: "PennLobby"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "fn__hidden",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "fn__cat",
                                                children: " Group-Based Social Network Web App"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "fn__title",
                                                children: "PennLobby"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "img_holder",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "img/thumb/square.jpg",
                                                        alt: "image"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "abs_img",
                                                        "data-bg-img": "img/pennlobby.png"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "fn__desc",
                                                children: "Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis risus convallis in."
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                className: "item modal_item",
                                onClick: ()=>{
                                    setModal(true);
                                    setModalValue(2);
                                },
                                "data-index": 2,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "img_holder",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "img/thumb/square.jpg",
                                                alt: "image"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "abs_img",
                                                "data-bg-img": "img/celeb.png"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "title_holder",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Oct 2021 – Nov 2021"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#",
                                                    children: "Guess Celebrity Games"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "fn__hidden",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "fn__cat",
                                                children: "web, mobile, online"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "fn__title",
                                                children: "Delicious Fruit"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "img_holder",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "img/thumb/square.jpg",
                                                        alt: "image"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "abs_img",
                                                        "data-bg-img": "img/celeb.png"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "fn__desc",
                                                children: "Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis risus convallis in."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "fn__desc",
                                                children: "Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor. Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique, ipsum sit amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor. Morbi enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat purus. In vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero sit amet lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus viverra. Maecenas consequat pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus, pulvinar ac mattis quis, pretium ac nulla. Morbi sed ligula ultrices, ornare mauris id, auctor arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula ex dapibus. Aenean venenatis metus eros, vel faucibus lorem porttitor eu."
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                className: "item modal_item",
                                onClick: ()=>{
                                    setModal(true);
                                    setModalValue(3);
                                },
                                "data-index": 3,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "img_holder",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "img/thumb/square.jpg",
                                                alt: "image"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "abs_img",
                                                "data-bg-img": "img/baltimore.png"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "title_holder",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Feb 2020 – May 2020"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#",
                                                    children: "Baltimore Fleet Optimization"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "fn__hidden",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "fn__cat",
                                                children: "Feb 2020 – May 2020"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "fn__title",
                                                children: "BBaltimore Fleet Optimization"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "img_holder",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "img/thumb/square.jpg",
                                                        alt: "image"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "abs_img",
                                                        "data-bg-img": "img/baltimore.png"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "fn__desc",
                                                children: "Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis risus convallis in."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "fn__desc",
                                                children: "Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor. Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique, ipsum sit amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor. Morbi enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat purus. In vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero sit amet lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus viverra. Maecenas consequat pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus, pulvinar ac mattis quis, pretium ac nulla. Morbi sed ligula ultrices, ornare mauris id, auctor arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula ex dapibus. Aenean venenatis metus eros, vel faucibus lorem porttitor eu."
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                className: "item modal_item",
                                onClick: ()=>{
                                    setModal(true);
                                    setModalValue(4);
                                },
                                "data-index": 4,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "img_holder",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "img/thumb/square.jpg",
                                                alt: "image"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "abs_img",
                                                "data-bg-img": "img/ezscene.png"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "title_holder",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Nov 2020 – Aug 2021"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#",
                                                    children: "EzScene"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "fn__hidden",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "fn__cat",
                                                children: "mobile, design"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "fn__title",
                                                children: "Yellow Phone"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "img_holder",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "img/thumb/square.jpg",
                                                        alt: "image"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "abs_img",
                                                        "data-bg-img": "img/ezscene.png"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "fn__desc",
                                                children: "Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis risus convallis in."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "fn__desc",
                                                children: "Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor. Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique, ipsum sit amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor. Morbi enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat purus. In vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero sit amet lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus viverra. Maecenas consequat pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus, pulvinar ac mattis quis, pretium ac nulla. Morbi sed ligula ultrices, ornare mauris id, auctor arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula ex dapibus. Aenean venenatis metus eros, vel faucibus lorem porttitor eu."
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                className: "item modal_item",
                                onClick: ()=>{
                                    setModal(true);
                                    setModalValue(5);
                                },
                                "data-index": 5,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "img_holder",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "img/thumb/square.jpg",
                                                alt: "image"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "abs_img",
                                                "data-bg-img": "img/risk.jpg"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "title_holder",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Nov 2020 - Dec 2020"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#",
                                                    children: "EzRisk"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "fn__hidden",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "fn__cat",
                                                children: "mobile, design"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "fn__title",
                                                children: "Ice Cream"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "img_holder",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "img/thumb/square.jpg",
                                                        alt: "image"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "abs_img",
                                                        "data-bg-img": "img/risk.jpg"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "fn__desc",
                                                children: "Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis risus convallis in."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "fn__desc",
                                                children: "Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor. Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique, ipsum sit amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor. Morbi enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat purus. In vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero sit amet lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus viverra. Maecenas consequat pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus, pulvinar ac mattis quis, pretium ac nulla. Morbi sed ligula ultrices, ornare mauris id, auctor arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula ex dapibus. Aenean venenatis metus eros, vel faucibus lorem porttitor eu."
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio);

});

/***/ }),

/***/ 9923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Services = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "services",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "roww",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "resumo_fn_main_title",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "subtitle",
                                children: "Services"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "title",
                                children: "What I Do"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "desc",
                                children: "I help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers and growing overall sales."
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "resumo_fn_service_list",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "item_left",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        children: "Brand Consultant"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "I build brands through cultural insights & strategic vision. Custom crafted business solutions."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "item_right",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Starts from"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        children: "$599"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "item_left",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        children: "Global Marketing"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Custom marketing solutions. Get your business on the next level. We provide worldwide marketing."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "item_right",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Starts from"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        children: "$399"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "item_left",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        children: "UI/UX Solutions"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Design direction for business. Get your business on the next level. We help to create great experiences."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "item_right",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Starts from"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        children: "$499"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);


/***/ }),

/***/ 41:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/PanelContent.js


const PanelContent = ()=>{
    (0,external_react_.useEffect)(()=>{
        const Typed = __webpack_require__(3603);
        new Typed(".animated_title", {
            strings: [
                "Miaoyan Zhang",
                "Web Developer",
                "Software Engineer",
                "Photographer",
                "Student at Upenn"
            ],
            loop: true,
            smartBackspace: false,
            typeSpeed: 40,
            startDelay: 700,
            backDelay: 3000
        });
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "right_in",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "right_top",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "border1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "border2"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "img_holder",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "img/thumb/square.jpg",
                                alt: "image"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "abs_img",
                                "data-bg-img": "img/head4.jpg"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "title_holder",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                children: "Hi There! I am"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "h3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "animated_title"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "right_bottom",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "#contact",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "circle"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text",
                            children: "Looking for SDE internship. Hire me"
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const components_PanelContent = (PanelContent);

// EXTERNAL MODULE: ./src/utilits.js
var utilits = __webpack_require__(1917);
// EXTERNAL MODULE: ./src/layouts/Cursor.js
var Cursor = __webpack_require__(113);
;// CONCATENATED MODULE: ./src/layouts/Footer.js

const Footer = ()=>{
    const scrollTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        id: "footer",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "footer_top",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#",
                    onClick: ()=>scrollTop()
                    ,
                    className: "resumo_fn_totop",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "footer_content",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "Copyright \xa9 ",
                            new Date().getFullYear(),
                            ". All rights reserved. ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                            })
                        ]
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const layouts_Footer = (Footer);

;// CONCATENATED MODULE: ./src/layouts/Nav.js


const Nav = ({ close , trigger  })=>{
    const { 0: toggle_ , 1: setToggle_  } = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(()=>{
        !trigger && setToggle_("");
        setTimeout(()=>{
            trigger ? setToggle_("ready") : setToggle_("");
        }, 2000);
    }, [
        trigger
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "#",
                className: "resumo_fn_nav_overlay",
                onClick: ()=>close()
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "resumo_fn_navigation",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        className: "closer",
                        onClick: ()=>close()
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "nav_in",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                            id: "nav",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "label",
                                    children: "Menu"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            style: {
                                                transitionDelay: !trigger ? "0ms" : "700ms"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#home",
                                                onClick: ()=>close()
                                                ,
                                                children: "Home"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            style: {
                                                transitionDelay: !trigger ? "0ms" : "900ms"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                onClick: ()=>close()
                                                ,
                                                href: "#about",
                                                children: "About"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            style: {
                                                transitionDelay: !trigger ? "0ms" : "1100ms"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                onClick: ()=>close()
                                                ,
                                                href: "#portfolio",
                                                children: "Portfolio"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            style: {
                                                transitionDelay: !trigger ? "0ms" : "1300ms"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                onClick: ()=>close()
                                                ,
                                                href: "#contact",
                                                children: "Contact"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const layouts_Nav = (Nav);

;// CONCATENATED MODULE: ./src/layouts/Triggger.js

const Triggger = ({ open  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
        href: "#",
        className: "menu_trigger",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "text",
                children: "Menu"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: "hamb",
                onClick: ()=>open()
                ,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const layouts_Triggger = (Triggger);

;// CONCATENATED MODULE: ./src/layouts/Layout.js









const Layout = ({ children  })=>{
    const { 0: trigger , 1: setTrigger  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        (0,utilits/* dataImage */.CC)();
        (0,utilits/* customCursor */._h)();
        (0,utilits/* aTagClick */.jd)();
        window.addEventListener("scroll", utilits/* sticky */.CA);
    });
    const triggerMenu = ()=>{
        setTrigger(!trigger);
        document.querySelector(".resumo_fn_wrapper").classList.toggle("nav-opened");
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Miaoyan's Portfolio"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "resumo_fn_wrapper",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "resumo_fn_content",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "resumo_fn_left",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "resumo_fn_page",
                                        children: children
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(layouts_Footer, {
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "resumo_fn_right",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(layouts_Triggger, {
                                        open: ()=>triggerMenu()
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_PanelContent, {
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(layouts_Nav, {
                        close: ()=>triggerMenu()
                        ,
                        trigger: trigger
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Cursor/* default */.Z, {
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const layouts_Layout = (Layout);


/***/ }),

/***/ 5968:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ portfolioSliderProps),
/* harmony export */   "Z": () => (/* binding */ customersSliderProps)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_0__]);
swiper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay,
    swiper__WEBPACK_IMPORTED_MODULE_0__.EffectFade
]);
const portfolioSliderProps = {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev"
    },
    breakpoints: {
        480: {
            slidesPerView: 2
        },
        1400: {
            slidesPerView: 3
        }
    }
};
const customersSliderProps = {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev"
    }
};

});

/***/ })

};
;