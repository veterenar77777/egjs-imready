/*
egjs-imready
Copyright (c) 2020-present NAVER Corp.
MIT license
*/
import { ImReadyLoaderOptions } from "../types";
import Loader from "./Loader";


export class ElementLoader<T extends HTMLElement> extends Loader<T> {
  public static EVENTS: string[] = [];
  public options!: ImReadyLoaderOptions;

  public checkElement() {
    if (!this.hasDataSize) {
      // has not data size
      this.trigger("requestChildren");
    }
    return true;
  }
  public destroy() {
    this.removeAutoSizer();
    this.trigger("requestDestroy");
  }
  public onAlreadyPreReady() {
    // has data size
    super.onAlreadyPreReady();
    this.trigger("reqeustReadyChildren");
  }
}