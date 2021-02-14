import { Injectable } from '@angular/core';

@Injectable()
export class CoreService {

  constructor() { }

  messageArray: Array<string> = ['Application Developer', 
  'Software Engineer', 
  'More fancy titles to be included in the future! :D',
  'Do enjoy your stay! :)'];

  clearIntervalOperation(id): void {
    clearInterval(id);
  }
}
