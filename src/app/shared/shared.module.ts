import { NgModule } from '@angular/core'; 
// Components
import * as fromComponents from './components';

@NgModule({
  declarations: [
    ...fromComponents.components
  ],
  imports: [  ],
  exports: [...fromComponents.components],
})
export class SharedModule {}
