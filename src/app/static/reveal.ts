declare let window:any;
export class Reveal {
    static reveal(selector:string) {
        window.scrollTo(0,0);
        window.sr.reveal(selector, { duration: 200 }, 10);
    }
}