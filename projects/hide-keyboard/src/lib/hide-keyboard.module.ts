import { ModuleWithProviders, NgModule } from '@angular/core';
import { HideKeyboardDirective } from './hide-keyboard.directive';

@NgModule({
	declarations: [HideKeyboardDirective],
	exports: [HideKeyboardDirective]
})
export class HideKeyboardModule {
	static forRoot(): ModuleWithProviders<HideKeyboardModule> {
		return {
			ngModule: HideKeyboardModule,
			providers: []
		};
	}
}
