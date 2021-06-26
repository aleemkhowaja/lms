import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {PermissionService} from "./permission.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

export interface IMenuItem {
  id?: number;
  title?: string;
  description?: string;
  type: string;       // Possible values: link/dropDown/extLink
  name?: string;      // Used as display text for item and title for separator type
  state?: string;     // Router state
  icon?: string;      // Material icon name
  tooltip?: string;   // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
  active?: boolean;
}

export interface IChildItem {
  id?: number;
  parentId?: number;
  type?: string;
  name: string;       // Display text
  state?: string;     // Router state
  icon?: string;
  sub?: IChildItem[];
  active?: boolean;
}

interface IBadge {
  color: string;      // primary/accent/warn/hex color codes(#fff000)
  value: string;      // Display text
}

interface ISidebarState {
  sideNavOpen?: boolean;
  childNavOpen?: boolean;
}

@Injectable({
  providedIn: "root"
})
export class NavigationService {
  public sidebarState: ISidebarState = {
    sideNavOpen: true,
    childNavOpen: false
  };
  defaultMenu: IMenuItem[] = [];    // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.defaultMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();

  constructor(private permissionService: PermissionService,
              private router: Router, private toastr: ToastrService) {
  }

  getAllLinksByEmployeeNID() {
    this.permissionService.getAllLinksByEmployeeNID().subscribe(data => {
        for (let index = 0; index < data.length; index++) {

          if (data[index].linkParent == 0) {
            this.defaultMenu.push(
              {
                id: data[index].linkNumber,
                name: data[index].linkName,
                description: '',
                type: data[index].linkType,
                icon: data[index].linkIcon,
                state: data[index].linkState,
                sub: []
              }
            );
          } else {
            let parent = this.defaultMenu.find(x => x.id == data[index].linkParent);
            parent.sub.push(
              {
                icon: data[index].linkIcon,
                name: data[index].linkName,
                state: data[index].linkState,
                type: data[index].linkType
              }
            );

          }


        }
      },
      (error) => {
        this.toastr.error(error, '', {
          timeOut: 9000,
          closeButton: false,
          progressBar: true
        });
      }
    );

  }

}
