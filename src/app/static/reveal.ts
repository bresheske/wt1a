declare let window:any;
export class Reveal {
    static reveal(selector:string) {
        window.sr.reveal(selector, { duration: 200 }, 10);
    }
}