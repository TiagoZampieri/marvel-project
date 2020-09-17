import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule.withConfig({
      useColumnBasisZero: true
    }),
  ],
  exports: [
    CommonModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
