import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WacomModule } from 'wacom';
import { TableComponent } from './table.component';
import {
	ActionsDirective,
	CellDirective,
	CustomEditDirective,
	SortDirective
} from './table.directive';

import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { FormModule } from '../form/form.module';
import { InputModule } from '../input/input.module';
import { TranslateModule } from '../translate/translate.module';
import { PerPagePipe } from './per-page.pipe';

@NgModule({
	imports: [
    CommonModule,
    FormsModule,
    WacomModule,
    FormModule,
    RouterModule,
    InputModule,
    TranslateModule,
	ButtonComponent
],
	declarations: [
		TableComponent,
		CellDirective,
		SortDirective,
		ActionsDirective,
		CustomEditDirective,
		PerPagePipe
	],
	providers: [],
	exports: [
		TableComponent,
		CellDirective,
		SortDirective,
		ActionsDirective,
		CustomEditDirective
	]
})
export class TableModule {}
