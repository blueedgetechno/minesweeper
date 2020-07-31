var colors = [
  [72, 133, 237, 47, 86, 154],
  [0, 135, 68, 0, 88, 44],
  [182, 72, 242, 118, 47, 157],
  [219, 50, 54, 142, 33, 35],
  [244, 194, 13, 159, 126, 8],
  [244, 132, 13, 159, 86, 8],
  [72, 230, 241, 47, 150, 157]
]

module.exports = class Box{
  constructor(x, y, v, col) {
    this.x = x
    this.y = y
    this.s = 0
    this.f = 0
    this.v = v
    this.col = col
    if (this.v == -1) {
      this.cols = colors[Math.floor(Math.random() * 7)]
    }
  }
  draw(p5) {
    p5.noStroke()
    if (this.s) {
      if (this.col) {
        p5.fill(229, 194, 159)
      } else {
        p5.fill(215, 184, 153)
      }

      p5.rect(this.x * z, this.y * z, z, z)

      if (this.v == 1) p5.fill(47, 126, 203)
      else if (this.v == 2) p5.fill(59, 143, 62)
      else if (this.v == 3) p5.fill(212, 54, 52)
      else if (this.v == 4) p5.fill(123, 32, 162)
      else if (this.v == 5) p5.fill(128, 0, 0)
      else if (this.v == 6) p5.fill(183, 97, 17)
      else p5.fill(100)
      if (this.v > 0) {
        p5.textSize(22)
        p5.textStyle(BOLD)
        p5.text(this.v, this.x * z + z / 3, this.y * z + 2 * z / 3)
      }
      if (this.v == -1) {
        p5.fill(this.cols[0], this.cols[1], this.cols[2])
        p5.rect(this.x * z, this.y * z, z, z)
        p5.fill(this.cols[3], this.cols[4], this.cols[5])
        p5.circle(z / 2 + this.x * z, z / 2 + this.y * z, z / 2)
      }
    } else {
      if (this.col) {
        p5.fill(170, 215, 81)
      } else {
        p5.fill(162, 209, 73)
      }
      p5.rect(this.x * z, this.y * z, z, z)
      var dsc = 1
      if(isvalid(this.x+1,this.y)){
        if(boxes[this.x+1][this.y].s){
          p5.stroke(136,176,59)
          p5.strokeWeight(4)
          p5.line((this.x+1)*z,this.y*z+dsc,(this.x+1)*z,(this.y+1)*z-dsc)
        }
      }
      if(isvalid(this.x-1,this.y)){
        if(boxes[this.x-1][this.y].s){
          p5.stroke(136,176,59)
          p5.strokeWeight(2)
          p5.line((this.x)*z,this.y*z+dsc,(this.x)*z,(this.y+1)*z-dsc)
        }

      }
      if(isvalid(this.x,this.y-1)){
        if(boxes[this.x][this.y-1].s){
          p5.stroke(136,176,59)
          p5.strokeWeight(2)
          p5.line(this.x*z+dsc,this.y*z,(this.x+1)*z-dsc,this.y*z)
        }

      }
      if(isvalid(this.x,this.y+1)){
        if(boxes[this.x][this.y+1].s){
          p5.stroke(136,176,59)
          p5.strokeWeight(4)
          p5.line(this.x*z+dsc,(this.y+1)*z,(this.x+1)*z-dsc,(this.y+1)*z)
        }
      }


      if (this.f) {
        p5.fill(242, 54, 7)
        p5.stroke(242, 54, 7)
        var vt = [
          1.5 * z / 5 + this.x * z,
          z / 5 + this.y * z,
          4 * z / 5 + this.x * z,
          2 * z / 5 + this.y * z,
          1.5 * z / 5 + this.x * z,
          3 * z / 5 + this.y * z
        ]
        p5.triangle(vt[0], vt[1], vt[2], vt[3], vt[4], vt[5])
        p5.strokeWeight(4)
        p5.line(1.5 * z / 5 + this.x * z,
          1.25 * z / 5 + this.y * z,
          1.5 * z / 5 + this.x * z,
          4 * z / 5 + this.y * z)
        p5.arc(1.5 * z / 5 + this.x * z, 4 * z / 5 + this.y * z, z / 8, z / 8, PI, 0, CHORD)
      }
    }
  }
}
