import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Product } from './components/product/product';
import { ProductDetail } from './components/product-detail/product-detail';
import { Admin } from './components/admin/admin';
import { authGuard } from './auth-guard';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Cart } from './components/cart/cart';
import { Contact } from './components/contact/contact'; // ✅ ADD
import { Features } from './components/features/features';
import { Pricing } from './components/pricing/pricing';
import { About } from './about/about';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
{path:'about', component:About},
  { path: 'home', component: Home },
  { path: 'features', component: Features },
 { path: 'products', component: Product },
{ path: 'product/:id', component: ProductDetail },
  { path: 'cart', component: Cart, data: { hideFooter: true } },
    { path: 'contact', component: Contact },
    {path:'pricing',component:Pricing},


  {
    path: 'admin',
    component: Admin,
    canActivate: [authGuard]
  },

  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: '**', redirectTo: 'signup' }
];