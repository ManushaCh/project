import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountpageComponent } from './accountpage/accountpage.component';
import { UserComponent } from './user.component';

const routes: Routes = [{ path: '', component: UserComponent }
  , { path:'account', component: AccountpageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
