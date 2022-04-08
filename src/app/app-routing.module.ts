import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './shared/a/a.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { BComponent } from './shared/b/b.component';
import { CreateLeadComponent } from './shared/create-lead/create-lead.component';
import { FormBuilderComponent } from './shared/form-builder/form-builder.component';
import { HomeComponent } from './shared/home/home.component';
import { ShowLeadComponent } from './shared/show-lead/show-lead.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'home', component : HomeComponent},
  {path : 'about-us', component : AboutUsComponent},
  {path : 'create-lead', component : CreateLeadComponent},
  {path : 'show-lead', component : ShowLeadComponent},
  {path : 'form-builder', component : FormBuilderComponent},
  {path : 'a', component : AComponent},
  {path : 'b', component : BComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
