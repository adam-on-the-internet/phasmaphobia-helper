import {Component} from "@angular/core";
import {NavHelperService} from "src/app/services/nav-helper.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {

  constructor(
    private navHelper: NavHelperService,
  ) {
  }

  public goToPhasmaphobia(): void {
    this.navHelper.goToPhasmaphobia();
  }

  public goToInfo(): void {
    this.navHelper.goToInfo();
  }
}
