<template>
  <div class="graph">
    <svg :width="width" :height="height" ref="svg" />
  </div>
</template>

<script>
import { select, forceSimulation, forceManyBody, forceX, forceY, forceLink } from 'd3'

export default {
  name: 'graph',
  props: ['data'],
  computed: {
    width: function(){
      return window.innerWidth - 20
    },
    height: function(){
      return window.innerHeight - 200
    },
    nodes: function(){
      return this.data.split(' ').map(d => { return { id: d } })
    },
    links: function(){
      return this.linksIds.map(l => {
        const source = this.findId(l.source)
        const target = this.findId(l.target)
        return { source, target }
      })
    }
  },
  watch: {
    links: function(){
      this.update()
    },
    nodes: function(){
      this.update()
    }
  },
  data: function(){
    return {
      linksIds: []
    }
  },
  methods: {
    generateOutput: function(){
      let out = "digraph test {" + "\n"
      this.nodes.forEach(n => {
        out += "\t" + n.id + " [label=" + n.id + " shape=box]" + "\n"
      })
      this.linksIds.forEach(l => {
        out += "\t" + l.source + " -> " + l.target + "\n"
      })
      out += "}"
      this.$emit('input', out)
    },
    findId: function(id){
      return this.nodes.find(n => n.id === id)
    },
    ticked: function(t){
      this.node.attr("x", function(d) { return d.x; })
        .attr("y", function(d) { return d.y; })

      this.link.attr("d", this.linkArc);
    },
    update: function(){
      console.log("update", this.links, this.nodes)
      this.node = this.node.data(this.nodes, function(d) { return d.id;});
      this.node.exit().remove();
      this.node = this.node.enter().append("text").text(d => d.id).attr('text-anchor', 'center').on('click', this.clicked).merge(this.node);

      // Apply the general update pattern to the links.
      this.link = this.link.data(this.links, function(d) { return d.source.id + "-" + d.target.id; });
      this.link.exit().remove();
      this.link = this.link.enter().append("path").attr("marker-end", function(d) { return "url(#arrow)"; }).merge(this.link);
      
      this.forceSimulation.nodes(this.nodes)
      this.forceSimulation.force("link").links(this.links);
      this.forceSimulation.alpha(1).restart()

      this.generateOutput()
    },
    clicked: function(d){
      if(this.active === d){
        this.active = null
      } else if(this.active){
        this.linksIds.push({ source: this.active.id, target: d.id })
        this.active = null
      } else {
        this.active = d
      }
    },
    linkArc(d) {
      var dx = d.target.x - d.source.x,
          dy = d.target.y - d.source.y,
          dr = Math.sqrt(dx * dx + dy * dy);
      return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
    }
  },
  mounted: function(){
    this.active = null
    // this.links = []
    this.forceSimulation = forceSimulation(this.nodes)
      .force("link", forceLink(this.links).distance(200))
      .force("charge", forceManyBody().strength(-1000))
      .force("x", forceX())
      .force("y", forceY())
      // .alphaTarget(1)
      .on("tick", this.ticked)
    
    this.svg = select(this.$refs.svg)
    this.svg.append("defs").append("marker")
      .attr("id", "arrow")
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 10)
      .attr("refY", 0)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto")
      .append("path")
        .attr("d", "M0,-5L10,0L0,5");

    this.g = this.svg.append("g").attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")"),
    this.link = this.g.append("g").attr("stroke", "#000").attr("stroke-width", 1.5).selectAll(".link"),
    this.node = this.g.append("g").attr("stroke", "#fff").attr("stroke-width", 1.5).selectAll(".node");
    this.update()
  }
}
</script>

<style>
  .graph text {
    fill:blue;
    stroke: none;
  }
  .graph path {
    stroke:blue;
    fill: none;
  }
</style>
