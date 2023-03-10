function solvedProblem() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }
        changeUnits(value) {
            this.units = value;
        }
        mathConvert(num) {
            if (this.units === 'm') return num /= 10;
            if (this.units === 'mm') return num *= 10;
            return num;
        }
        toString() {
            if (this.hasOwnProperty('radius')) {
                return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
            }
            if (this.hasOwnProperty('width')) {
                return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
            }
        }
    }
    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this._radius = radius;
        }
        get area() {
            this.radius = this.mathConvert(this._radius);
            return Math.PI * Math.pow(this.radius, 2);
        }
    }
    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }
        get area() {
            this.width = this.mathConvert(this._width);
            this.height = this.mathConvert(this._height);
            return this.width * this.height;
        }
    }
    return { Figure, Circle, Rectangle }
}