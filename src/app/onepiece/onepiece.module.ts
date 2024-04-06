import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnepieceListComponent } from './components/list/list.component';
import { OnepieceCreateComponent } from './components/create/create.component';
import { OnepieceMainPageComponent } from './page/onepiece-main-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OnepieceListComponent,
    OnepieceCreateComponent,
    OnepieceMainPageComponent
  ],
  exports: [
    OnepieceMainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class OnepieceModule { }
