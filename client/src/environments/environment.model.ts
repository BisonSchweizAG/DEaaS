import { NgModuleRef } from '@angular/core';

export interface Environment {
  production: boolean;

  decorateModuleRef(modRef: NgModuleRef<any>): NgModuleRef<any>;
}
