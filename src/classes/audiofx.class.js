class AudioManager {
    constructor() {
        const path = require("path");
        const {Howl, Howler} = require("howler");

        if (window.settings.audio === true) {
            let load = (sounds, volume) => sounds.forEach(sound => {
                this[sound] = new Howl({src: [path.join(__dirname, "assets", "audio", sound+".wav")], volume});
            });
            if (window.settings.disableFeedbackAudio === false) {
                load(["stdout", "stdin"], 0.4);
                load(["folder", "granted"]);
            }
            load(["keyboard", "theme", "expand", "panels", "scan", "denied", "info", "alarm", "error"]);

            Howler.volume(window.settings.audioVolume);
        } else {
            Howler.volume(0.0);
        }

        // Return a proxy to avoid errors if sounds aren't loaded
        return new Proxy(this, {
            get: (target, sound) => {
                if (sound in target) {
                    return target[sound];
                } else {
                    return {
                        play: () => {return true;}
                    }
                }
            }
        });
    }
}

module.exports = {
    AudioManager
};
