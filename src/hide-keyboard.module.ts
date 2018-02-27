import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideKeyboardDirective } from './hide-keyboard.directive';

export * from './hide-keyboard.directive';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HideKeyboardDirective
  ],
  exports: [
    HideKeyboardDirective
  ]
})
export class HideKeyboardModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HideKeyboardModule,
      providers: []
    };
  }
}
