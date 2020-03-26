import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StyleDirective } from './directives/style.directive'
import { MultByPipe } from './pipes/mult-by.pipe'
import { PostComponent } from './post/post.component';
import { Post2Component } from './post2/post2.component';
import { Post3Component } from './post3/post3.component'
import { Post4Component } from './post4/post4.component';
import { Post5Component } from './post5/post5.component';
import { Post6Component } from './post6/post6.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostViewComponent } from './post-view/post-view.component';
import { IfnotDirective } from './directives/ifnot.directive';
import { PipesComponent } from './pipes/pipes.component';
import { ExMarksPipe } from './pipes/ex-marks.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { AsyncPipeComponent } from './pipes/async-pipe/async-pipe.component';
import { RxTechnoComponent } from './rx-techno/rx-techno.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    Post2Component,
    Post3Component,
    Post4Component,
    Post5Component,
    Post6Component,
    PostFormComponent,
    PostViewComponent ,
    StyleDirective,
    IfnotDirective,
    PipesComponent,
    MultByPipe,
    ExMarksPipe,
    FilterPipe,
    AsyncPipeComponent,
    RxTechnoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
