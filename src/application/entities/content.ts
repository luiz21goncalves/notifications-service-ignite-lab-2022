const MIN_CONTENT_LENGTH = 5;
const MAX_CONTENT_LENGTH = 240;

export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validateContentLength(content: string): boolean {
    const isValidLength =
      content.length >= MIN_CONTENT_LENGTH &&
      content.length <= MAX_CONTENT_LENGTH;

    if (isValidLength) {
      return true;
    }

    return false;
  }

  constructor(content: string) {
    const isContentLengthInvalid = !this.validateContentLength(content);

    if (isContentLengthInvalid) {
      throw new Error('Content length error.');
    }

    this.content = content;
  }
}
