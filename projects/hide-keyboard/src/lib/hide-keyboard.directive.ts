import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[hideKeyboard]'
})
export class HideKeyboardDirective {
    private readonly: boolean;
    private focusTimeout = 500;

	constructor(private el: ElementRef) {
		this.readonly = true;
		this.setReadOnly(this.readonly)

		setTimeout(() => {
			this.el.nativeElement.focus();
		}, this.focusTimeout);
	}

	@HostListener('focus') onFocus() {
		this.readonly = true;
		this.setReadOnly(this.readonly);

		if (!this.readonly) {
			this.setReadOnly(!this.readonly);
		}
		setTimeout(() => {
			this.readonly = false;
			this.setReadOnly(this.readonly);
		}, 100);
	};

    @HostListener('click', ['$event.target']) 
    onClick(input) {
		this.readonly = true;
		this.setReadOnly(this.readonly);

		setTimeout(() => {
			this.readonly = false;
			this.setReadOnly(this.readonly);
			this.el.nativeElement.focus();
		}, this.focusTimeout);
	}

	private setReadOnly(value: boolean): void {
		this.el.nativeElement.readOnly = value;
		if (this.el.nativeElement.children && this.el.nativeElement.children.length > 0) {
			this.el.nativeElement.children[0].readOnly = value;
			this.el.nativeElement.children[1].readOnly = value;
		};
	};
}
