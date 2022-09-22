<template>
  <div id="controls">
    <label for="wrist">Wrist Circumference:</label>
    <input type="number" v-model="wrist" name="wrist" placeholder="Wrist Circumference">
    <label for="arm">Arm Circumference:</label>
    <input type="number" v-model="arm" name="wrist" placeholder="Arm Circumference">
    <label for="length">Bracer Length:</label>
    <input type="number" v-model="length" name="length" placeholder="Bracer Length">
    <label for="wrap">Coverage (%):</label>
    <input type="number" v-model="wrap" name="wrap" placeholder="Bracer Coverage (%)">
  </div>
  <BracerRender :R1="R1" :R2="R2" :fullpath="fullpath" :bracerpath="bracerpath" :viewBox="viewBox"/>
</template>

<script>
import BracerRender from "@/components/BracerRender";

export default {
  name: "BracerComputing",
  components: {BracerRender},
  data() {
    return {
      wrist: 7.5,
      arm: 11.5,
      length: 12,
      wrap: 75
    }
  },
  computed: {
    RC() {
      return this.arm / (2 * Math.PI);
    }, // Base diameter
    RD() {
      return this.wrist / (2 * Math.PI);
    }, // Top diameter
    DeltaR() {
      return this.RC - this.RD;
    }, // Difference between the radii
    alpha() {
      return Math.asin(this.DeltaR / this.length);
    }, // Cone tip angle
    H2() {
      return this.length ** 2 - this.DeltaR ** 2;
    }, // Square of height H
    H() {
      return Math.sqrt(this.H2);
    }, // Height
    R2() {
      return this.RC / Math.sin(this.alpha);
    }, // Outer sheet radius
    R1() {
      return this.R2 - this.length;
    }, // Inner sheet radius
    theta() {
      return this.arm / this.R2;
    }, // Cone cut angle
    thetaR() {
      return -Math.PI / 2 - this.theta / 2;
    }, // Right ray (90º-theta)
    thetaL() {
      return -Math.PI / 2 + this.theta / 2;
    }, // Left ray (90º+theta)
    RstartX() {
      return this.R1 * Math.cos(this.thetaR);
    },
    RstartY() {
      return this.R1 * Math.sin(this.thetaR);
    },
    RendX() {
      return this.R2 * Math.cos(this.thetaR);
    },
    RendY() {
      return this.R2 * Math.sin(this.thetaR);
    },
    LstartX() {
      return this.R1 * Math.cos(this.thetaL);
    },
    LstartY() {
      return this.R1 * Math.sin(this.thetaL);
    },
    LendX() {
      return this.R2 * Math.cos(this.thetaL);
    },
    LendY() {
      return this.R2 * Math.sin(this.thetaL);
    },
    fullpath() {
      return "" +
          `M ${this.RstartX},${this.RstartY} ` +
          `L ${this.RendX},${this.RendY} ` +
          `A ${this.R2} ${this.R2} ${this.theta} 0 1 ${this.LendX} ${this.LendY} ` +
          `L ${this.LstartX},${this.LstartY} ` +
          `A ${this.R1} ${this.R1} ${this.theta} 0 0 ${this.RstartX} ${this.RstartY} ` +
          "z";
    },
    phi() {
      return this.theta * this.wrap / 100;
    }, // Bracer spread angle
    phiR() {
      return -Math.PI / 2 - this.phi / 2;
    }, // Right ray (90º-phi)
    phiL() {
      return -Math.PI / 2 + this.phi / 2;
    }, // Left ray (90º+phi)
    bRstartX() {
      return this.R1 * Math.cos(this.phiR);
    },
    bRstartY() {
      return this.R1 * Math.sin(this.phiR);
    },
    bRendX() {
      return this.R2 * Math.cos(this.phiR);
    },
    bRendY() {
      return this.R2 * Math.sin(this.phiR);
    },
    bLstartX() {
      return this.R1 * Math.cos(this.phiL);
    },
    bLstartY() {
      return this.R1 * Math.sin(this.phiL);
    },
    bLendX() {
      return this.R2 * Math.cos(this.phiL);
    },
    bLendY() {
      return this.R2 * Math.sin(this.phiL);
    },
    bracerpath() {
      return "" +
          `M ${this.bRstartX},${this.bRstartY} ` +
          `L ${this.bRendX},${this.bRendY} ` +
          `A ${this.R2} ${this.R2} ${this.phi} 0 1 ${this.bLendX} ${this.bLendY} ` +
          `L ${this.bLstartX},${this.bLstartY} ` +
          `A ${this.R1} ${this.R1} ${this.phi} 0 0 ${this.bRstartX} ${this.bRstartY} ` +
          "z";
    },
    yValues() {
      return [
        this.LstartY, this.LendY, this.RstartY, this.RendY,
        this.LstartY, this.LendY, this.RstartY, this.RendY,
        this.R1 * Math.sin(-Math.PI / 2), this.R2 * Math.sin(-Math.PI / 2)];
    },
    yMin() {
      return Math.min(...this.yValues);
    },
    yMax() {
      return Math.max(...this.yValues);
    },
    yRange() {
      return this.yMax - this.yMin;
    },
    xValues() {
      return [
        this.LstartX, this.LendX, this.RstartX, this.RendX,
        this.LstartX, this.LendX, this.RstartX, this.RendX];
    },
    xMin() {
      return Math.min(...this.xValues);
    },
    xMax() {
      return Math.max(...this.xValues);
    },
    xRange() {
      return this.xMax - this.xMin;
    },
    viewBox() {
      return `${this.xMin - 0.2 * this.xRange} ${this.yMin - 0.2 * this.yRange} ${1.4 * this.xRange} ${1.4 * this.yRange}`;
    },
  }
}
</script>

<style scoped>
label {
  color: darkgoldenrod;
  display: block;
}

input {
  padding: 3px;
  box-shadow: 3px 3px 5px grey;
}

#controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>