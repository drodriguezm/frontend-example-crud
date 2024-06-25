import {ActivatedRouteSnapshot, BaseRouteReuseStrategy} from '@angular/router';

export class ReuseStrategyCustom extends BaseRouteReuseStrategy {

  public override shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return false/*future.data['reuseComponent']*/;
  }
}
