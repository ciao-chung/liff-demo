export type InitConfig = {[key: string]: any}|null

export interface BaseConfig {
  // vuetify dialog
  maxWidth?: any,
  width?: 'auto'|string|number|null,
  hideOverlay?: boolean,
  persistent?: boolean,
  retainFocus?: boolean,

  // anchor popup
  titleClass?: string,
  autoClose?: number,
  title?: string,
  content?: string,
  applyLabel?: string,
  applyCallback?: (data: any) => any,
  disabledApply?: (data: any) => any,
  applyColor?: string,
  close?: boolean,
  closeLabel?: string,
  closeColor?: string,
  closeCallback?: (() => any),
  closePromise?: (data: any) => boolean,
  isHtml?: boolean,
  promptPlaceholder?: any,
  bodySlot?: Vue|(() => Vue),
  actionSlot?: Vue|(() => Vue),
  actionProps?: AnyObject,
  debug?: boolean,
  applyOnEnter?: boolean,
}
