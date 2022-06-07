declare type EmptyObject = Record<string, any>

declare interface AnyObject { [key: string]: any }

declare type CallbackType = (...args: any) => any

declare interface GridConfig {
  xl?: number,
  lg?: number,
  md?: number,
  sm?: number,
  xs?: number,
}

declare type FormModeType = 'create'|'update'

declare interface FormInfoInterface {
  formConfig: AnyObject|null,
  formMeta: AnyObject|null,
  formData: AnyObject,
  formMode: FormModeType,
}

declare interface FormDataChangeHelperInterface {
  formMode: FormModeType,
  formMeta: AnyObject|null|undefined,
  formConfig: AnyObject|null|undefined,
  formData: AnyObject|null|undefined,
  data: any,
  originalData: any,
  bothEmpty: (value1: any, value2: any) => boolean,
  arrayPropertyDiff: (array1: any, array2: any, property: string|string[]) => boolean,
}

declare type BreadcrumbItem = {
  text: any,
  href?: string,
  to?: { [key: string]: any },
  disabled?: boolean,
}
