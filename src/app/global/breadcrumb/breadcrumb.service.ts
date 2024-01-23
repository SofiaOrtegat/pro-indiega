import { Injectable } from "@angular/core";
import { BreadCrumb } from "./breadcrumb.interface";
import { ActivatedRoute, PRIMARY_OUTLET } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class BreadcrumbService {
  