import { Routes } from "@angular/router";
import { MenuComponent } from "./menu/menu.component";
import  {SignUpComponent} from "./menu/sign-up/sign-up.component";
import { UserProfileComponent } from "./menu/user-profile/user-profile.component";

const ROUTES : Routes = [
    { path: 'sign-up', component: SignUpComponent},
    { path: 'user-profile', component: UserProfileComponent},
    { path: "", component: MenuComponent},
];

export {ROUTES};