import * as yup from "yup";

export type YupSchema<T> = Record<keyof T, yup.AnySchema>;

export interface FormValuesStep1 {
  fullName:string;
  displayName:string;
}
export interface FormValuesStep2 {
    workspaceName:string;
    workspaceUrl:string;
  }

