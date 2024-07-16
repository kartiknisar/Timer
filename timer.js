class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;

        }


        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaning);
        }

        this.tick();
        this.interval = setInterval(this.tick, 20);
    };

    pause = () => {
        clearInterval(this.interval);
    };

    tick = () => {
        if (this.timeRemaning <= 0) {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        }
        else {
            this.timeRemaning = this.timeRemaning - 0.02;
            if (this.onTick) {
                this.onTick(this.timeRemaning);
            }
        }
    };

    get timeRemaning() {
        return parseFloat(this.durationInput.value)
    }

    set timeRemaning(time) {
        this.durationInput.value = time.toFixed(2);
    }

}
