import { Injectable} from "@angular/core";

export class CrisisCenter{

  constructor(public id: number, public name: string) {
    // code...
  }
}

const CRISIS_LIST = [
  new CrisisCenter(100, '生物'),
  new CrisisCenter(101, '化学')
];

let crisisPromise = Promise.resolve(CRISIS_LIST);

@Injectable()
export class CrisisCenterService{

  getCrisisList() {
    return crisisPromise;
  }

  getCrisisById(id: number | string) {
    return crisisPromise.then((crisisList: CrisisCenter[])=>
      crisisList.find(crisis=> crisis.id == + id)
    )
  }
}
