

class Time {
    constructor(){
        this.startTime = Date.now();
        this.isRunning = false;
    }

    static getDifference(seconds){
        const now = new Date().getTime();
        const miliseconds = seconds * 1000;
        const diff = now - (now + miliseconds);
        return miliseconds;
    }

    getTimeFromStart (){
        if (!this.startTime){
            return 0;
        }

        return Date.now() - this.startTime;
    }

    start () {
        if (this.isRunning){
            return console.error('already running');
        }

        this.isRunning = true;
        console.error(this.isRunning)
        this.startTime = Date.now();
    }

    stop (interval) {
        if (!this.isRunning){
            return console.error('already stopped');
        }

        this.isRunning = false;
        clearInterval(interval);
    }

    reset () {
        this.allTime = 0;
        if (this.isRunning) {
            this.startTime = Date.now();
            return;
        }

        this.startTime = 0;
    }

    isRngChk () {
        console.error(this.isRunnning);
    }

    getTime () {
        if (!this.startTime){
            return 0;
        }

        if(this.isRunning){
            return this.allTime + this.getTimeFromStart();
        }

        return this.allTime;
    }

    now(){
        console.log(new Date().getTime());
    }

    static clock(speed){
        const startTime = () => {
            console.log(Date.now() - startTime);
        }
        setInterval(startTime, speed);

    }

}

export default Time