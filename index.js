import Logger from 'bet-logger';

export default class BetModule {
  constructor (app) {
    this.W = W;
    this.D = D;
    this.A = A;
    this.M = M;

    let mid = (this.A && this.A.talker && this.A.talker.appId) ? `${this.A.talker.appId}:${app.mid}` : app.mid;
    this.log = new Logger(`BET:module:${mid}:${window.location.hostname}`);
  }
};
