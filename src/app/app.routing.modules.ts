import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { ListRenderComponent } from './components/list-render/list-render.component';

const routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'list', component: ListRenderComponent },
  { path: 'number', component: ChangeNumberComponent },
  { path: 'ifrender', component: IfRenderComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
