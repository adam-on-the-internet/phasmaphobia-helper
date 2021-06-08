import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {ROUTES_ENUM} from "../constants/routing.constants";

@Injectable({
  providedIn: "root"
})
export class NavHelperService {

  constructor(
    private router: Router,
  ) {
  }

  public goToInfo(): void {
    this.goToRoute(ROUTES_ENUM.Info);
  }

  // PROJECTS

  public goToPhasmaphobia(): void {
    this.goToRoute(ROUTES_ENUM.Phasmaphobia);
  }

  // GENERAL

  private goToRoute(route: string): void {
    this.goToRoutes([route]);
  }

  private goToRoutes(routes: string[]): void {
    this.router.navigate(routes);
  }
}
