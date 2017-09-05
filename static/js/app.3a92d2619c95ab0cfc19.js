webpackJsonp([1],{

/***/ "0VBe":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "5qpT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Graph_vue__ = __webpack_require__("WcWR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_41df72c7_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Graph_vue__ = __webpack_require__("FHUi");
function injectStyle (ssrContext) {
  __webpack_require__("ZBpI")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Graph_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_41df72c7_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Graph_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "FHUi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "graph"
  }, [_c('svg', {
    ref: "svg",
    attrs: {
      "width": _vm.width,
      "height": _vm.height
    }
  })])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8f2597c2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("lQHD");
function injectStyle (ssrContext) {
  __webpack_require__("0VBe")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8f2597c2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("M93x");



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),

/***/ "WcWR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3__ = __webpack_require__("vwbq");
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'graph',
  props: ['data'],
  computed: {
    width: function () {
      return window.innerWidth - 20;
    },
    height: function () {
      return window.innerHeight - 200;
    },
    nodes: function () {
      return this.data.split(' ').map(d => {
        return { id: d };
      });
    },
    links: function () {
      return this.linksIds.map(l => {
        const source = this.findId(l.source);
        const target = this.findId(l.target);
        return { source, target };
      });
    }
  },
  watch: {
    links: function () {
      this.update();
    },
    nodes: function () {
      this.update();
    }
  },
  data: function () {
    return {
      linksIds: []
    };
  },
  methods: {
    generateOutput: function () {
      let out = "digraph test {" + "\n";
      this.nodes.forEach(n => {
        out += "\t" + n.id + " [label=" + n.id + " shape=box]" + "\n";
      });
      this.linksIds.forEach(l => {
        out += "\t" + l.source + " -> " + l.target + "\n";
      });
      out += "}";
      this.$emit('input', out);
    },
    findId: function (id) {
      return this.nodes.find(n => n.id === id);
    },
    ticked: function (t) {
      this.node.attr("x", function (d) {
        return d.x;
      }).attr("y", function (d) {
        return d.y;
      });

      this.link.attr("d", this.linkArc);
    },
    update: function () {
      console.log("update", this.links, this.nodes);
      this.node = this.node.data(this.nodes, function (d) {
        return d.id;
      });
      this.node.exit().remove();
      this.node = this.node.enter().append("text").text(d => d.id).attr('text-anchor', 'center').on('click', this.clicked).merge(this.node);

      // Apply the general update pattern to the links.
      this.link = this.link.data(this.links, function (d) {
        return d.source.id + "-" + d.target.id;
      });
      this.link.exit().remove();
      this.link = this.link.enter().append("path").attr("marker-end", function (d) {
        return "url(#arrow)";
      }).merge(this.link);

      this.forceSimulation.nodes(this.nodes);
      this.forceSimulation.force("link").links(this.links);
      this.forceSimulation.alpha(1).restart();

      this.generateOutput();
    },
    clicked: function (d) {
      if (this.active === d) {
        this.active = null;
      } else if (this.active) {
        this.linksIds.push({ source: this.active.id, target: d.id });
        this.active = null;
      } else {
        this.active = d;
      }
    },
    linkArc(d) {
      var dx = d.target.x - d.source.x,
          dy = d.target.y - d.source.y,
          dr = Math.sqrt(dx * dx + dy * dy);
      return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
    }
  },
  mounted: function () {
    this.active = null;
    // this.links = []
    this.forceSimulation = Object(__WEBPACK_IMPORTED_MODULE_0_d3__["c" /* forceSimulation */])(this.nodes).force("link", Object(__WEBPACK_IMPORTED_MODULE_0_d3__["a" /* forceLink */])(this.links).distance(200)).force("charge", Object(__WEBPACK_IMPORTED_MODULE_0_d3__["b" /* forceManyBody */])().strength(-1000)).force("x", Object(__WEBPACK_IMPORTED_MODULE_0_d3__["d" /* forceX */])()).force("y", Object(__WEBPACK_IMPORTED_MODULE_0_d3__["e" /* forceY */])())
    // .alphaTarget(1)
    .on("tick", this.ticked);

    this.svg = Object(__WEBPACK_IMPORTED_MODULE_0_d3__["f" /* select */])(this.$refs.svg);
    this.svg.append("defs").append("marker").attr("id", "arrow").attr("viewBox", "0 -5 10 10").attr("refX", 10).attr("refY", 0).attr("markerWidth", 6).attr("markerHeight", 6).attr("orient", "auto").append("path").attr("d", "M0,-5L10,0L0,5");

    this.g = this.svg.append("g").attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")"), this.link = this.g.append("g").attr("stroke", "#000").attr("stroke-width", 1.5).selectAll(".link"), this.node = this.g.append("g").attr("stroke", "#fff").attr("stroke-width", 1.5).selectAll(".node");
    this.update();
  }
});

/***/ }),

/***/ "ZBpI":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "lQHD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.data),
      expression: "data"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.data)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.data = $event.target.value
      }
    }
  }), _vm._v(" "), _c('graph', {
    attrs: {
      "data": _vm.data
    },
    model: {
      value: (_vm.output),
      callback: function($$v) {
        _vm.output = $$v
      },
      expression: "output"
    }
  }), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.output),
      expression: "output"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.output)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.output = $event.target.value
      }
    }
  })], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Graph__ = __webpack_require__("5qpT");
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
  data() {
    return {
      data: 'Foo Bar Baz Test Dot',
      output: ''
    };
  },
  components: {
    Graph: __WEBPACK_IMPORTED_MODULE_0__components_Graph__["a" /* default */]
  }
});

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.3a92d2619c95ab0cfc19.js.map