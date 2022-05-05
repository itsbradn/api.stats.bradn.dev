export default class ErrorResponse extends Error {
    constructor(message: string, statusCode: number, field?: string) {
        super(message);
        this.statusCode = statusCode;
        this.field = field;
    }
    public statusCode = 500;
    public field: string | undefined;
}