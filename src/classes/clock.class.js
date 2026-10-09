class Clock {
    constructor(parentId) {
        if (!parentId) throw "Missing parameters";

        // Load settings
        this.twelveHours = (window.settings.clockHours === 12);

        // Create DOM
        this.parent = document.getElementById(parentId);
        this.parent.innerHTML += `<div id="mod_clock" class="${(this.twelveHours) ? "mod_clock_twelve" : ""}">
            <h1 id="mod_clock_text"><span>?</span><span>?</span><span>:</span><span>?</span><span>?</span><span>:</span><span>?</span><span>?</span></h1>
        </div>`;

        this.updateClock();
        this.updater = setInterval(() => {
            this.updateClock();
        }, 1000);
    }
    updateClock() {
        let time = new Date();
        let array = [time.getHours(), time.getMinutes(), time.getSeconds()];

        // 12-hour mode translation
        if (this.twelveHours) {
            this.ampm = (array[0] >= 12) ? "PM" : "AM";
            if (array[0] > 12) array[0] = array[0] - 12;
            if (array[0] === 0) array[0] = 12;
        }

        let clockString = array.map(e => String(e).padStart(2, "0")).join(":")
            .split("").map(e => (e === ":") ? `<em>${e}</em>` : `<span>${e}</span>`).join("");

        if (this.twelveHours) clockString += `<span>${this.ampm}</span>`;

        document.getElementById("mod_clock_text").innerHTML = clockString;
    }
}

module.exports = {
    Clock
};
