(function () {
    String.prototype.ensureStart = function (str) {
        let resultStr = this.toString();
        if (!this.startsWith(str)) {
            resultStr = (str + this).toString();
        }
        return resultStr;
    }
    String.prototype.ensureEnd = function (str) {
        let resultStr = this.toString();
        if (!this.endsWith(str)) {
            resultStr = (this + str).toString();
        }
        return resultStr;
    }
    String.prototype.isEmpty = function () {
        let isEmpty = false;
        if (this == '') {
            isEmpty = true;
        }
        return isEmpty;
    }
    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n);
        }
        if (this.length <= n) {
            return this.toString();
        }
        const words = this.split(' ');
        let truncated = words[0];
        for (let i = 1; i < words.length; i++) {
            if (truncated.length + words[i].length + 4 <= n) {
                truncated += ' ' + words[i];
            } else {
                break;
            }
        }
        if (truncated === this.toString()) {
            return this.substring(0, n - 3) + '...';
        } else {
            return truncated + '...';
        }
    }
    String.format = function (string, ...params) {
        return string.replace(/{(\d+)}/g, (match, index) => {
            const param = params[index];
            return typeof param !== 'undefined' ? param : match;
        });
    }
})();