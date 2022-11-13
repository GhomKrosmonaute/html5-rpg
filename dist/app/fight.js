"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fight = void 0;
const event_emitter_1 = require("@ghom/event-emitter");
class Fight extends event_emitter_1.EventEmitter {
    constructor(player1, player2) {
        super();
        this.player1 = player1;
        this.player2 = player2;
        this.frame = 0;
        this.logs = [];
    }
    start() {
        this.log({ type: "system", content: `fight start` });
        while (!this.endCondition()) {
            this.log({ type: "system", content: `frame ${this.frame}` });
            this.nextStep();
            this.frame++;
        }
        this.log({ type: "system", content: `fight done` });
    }
    log(log) {
        this.logs.push(Object.assign({ frame: this.frame }, log));
    }
}
exports.Fight = Fight;
