import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    const body = document.querySelector("body");

    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    document.querySelectorAll(".sidebar .nav-item").forEach(function(el) {
      el.addEventListener("mouseover", function() {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function() {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
    
  }

  public parentId = "";
  clickedMenu(event) {
    var target = event.currentTarget;
    let parentId = target.id;
    if (parentId == this.parentId) {
      console.log('same');
      this.parentId = "";
    } else {
      console.log('not same');
      this.parentId = target.id;
    }
  }

}
