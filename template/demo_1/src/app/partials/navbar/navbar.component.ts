import { Component, OnInit } from "@angular/core";
import { NgbDropdownConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit {
  public iconOnlyToggled = false;
  public sidebarToggled = false;

  toggleRightSidebar() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }

  toggleIconOnlySidebar() {
    this.iconOnlyToggled = !this.iconOnlyToggled;
    if (this.iconOnlyToggled) {
      document.querySelector("body").classList.add("sidebar-icon-only");
    } else {
      document.querySelector("body").classList.remove("sidebar-icon-only");
    }
  }

  constructor(config: NgbDropdownConfig) {
    config.placement = "bottom-right";
  }
  ngOnInit() {}
}
