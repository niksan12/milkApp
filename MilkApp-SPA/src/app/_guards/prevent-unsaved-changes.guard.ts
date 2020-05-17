import { Injectable } from "@angular/core";
import { CanDeactivate } from '@angular/router';
import { TEditComponent } from '../team/t-edit/t-edit.component';

@Injectable()

export class PreventUnsavedChanges implements CanDeactivate<TEditComponent>{
  canDeactivate(component: TEditComponent){
    if (component.editForm.dirty){
      return confirm('Are you sure you want to continue? Any unsaved changes will be lost');

    }
    return true;
  }

}

