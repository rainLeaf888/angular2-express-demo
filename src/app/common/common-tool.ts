import {Response} from "@angular/http";
import {Observable} from "rxjs/Observable";


export default class CommonTool{

  constructor(argument) {
    // code...
  }

  static extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  static handleError(error: Response | any) {
    let errorMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errorMsg = `${error.status}--${error.statusText || ''} ${err}`;
    } else {
      errorMsg = error.message ? error.message : error.toString();
    }
    console.log(errorMsg);
    return Observable.throw(errorMsg);
  }
}