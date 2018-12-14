import { NgModule } from '@angular/core';

import { InventoryAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [InventoryAppSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [InventoryAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class InventoryAppSharedCommonModule {}
