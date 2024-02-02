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
export class HeaderComponent implements OnInit {
  @ViewChild("navBar") navbar: MatToolbar;
  @ViewChild("logo") logo: ElementRef;

  links: Array<Links> = [];
  dropdown: Array<Links> = [];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window,
    public renderer: Renderer2,
    private linksService: L