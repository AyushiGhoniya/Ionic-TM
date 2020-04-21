export interface IShare {
    message?: string,
    subject?: string,
    files?: string,
    url?: string,
    chooserTitle?: string
}

export class Share implements IShare {
    message: string;
    subject: string;
    files: string;
    url: string;
    chooserTitle: string;

    constructor() {
        this.message = '';
        this.subject = '';
        this.files = '';
        this.url = '';
        this.chooserTitle = '';
    }
}