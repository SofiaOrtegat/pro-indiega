import { isPlatformBrowser } from "@angular/common";
import {
  ClassProvider,
  FactoryProvider,
  InjectionToken,
  PLATFORM_ID
} from "@angular/core";

/* Create a new injection token for injecting the window into a component. */
export const WINDOW = new InjectionToken("WindowToken");

/* Define abstract class for obtaining reference to the global window object. */
export abstract class WindowRef {
  get nativeWindow(): Window | Object {
    throw new Error("Not implemented.");
  }
}

/* Define class that implements the abstract class and returns the native window object. */
export class BrowserWindowRef extends WindowRef {
  constructor() {
    super();
  }

  get nativeWindow(): Window | Object {
    return window;
  }
}

/* Create an factory function that r