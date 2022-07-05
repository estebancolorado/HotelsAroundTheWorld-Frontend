import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TrackByPipe } from './pipe/track-by.pipe';

@NgModule({
  declarations:
  [
    TrackByPipe
  ],
  imports: [ReactiveFormsModule, FormsModule],
  exports:
  [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,

    FormsModule,
    TrackByPipe
  ]
})
export class SharedModule { }
