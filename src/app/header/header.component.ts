import { LinksService } from "./../shared/links.service";
import { Links } from "./../shared/links.model";
import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  Renderer2,
  ViewChild
} from "@angular/core";
import { MatToolbar } from "@angular/material";
import { DOCUMENT } from "@angular/common";
import { WINDOW } from "../shared/window.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"]
})
export class HeaderComp