import { Injectable } from '@angular/core';

@Injectable()
export class CoreService {

  constructor() { }

  messageArray: Array<string> = [
    'Application Developer',
    'Software Engineer'];

  clearIntervalOperation(id): void {
    clearInterval(id);
  }
}
