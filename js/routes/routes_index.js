var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","component":"HomeComponent"},{"path":"search-result","component":"SearchResultComponent"},{"path":"search-result/:key","component":"SearchResultComponent"},{"path":"product-details/:id","component":"ProductDetailsComponent"},{"path":"seller-profile/:id","component":"SellerProfileComponent","canActivate":["AuthGuardGuard"]},{"path":"chat","component":"ChatsComponent","canActivate":["AuthGuardGuard"]},{"path":"userchat/:id","component":"SingleChatComponent","canActivate":["AuthGuardGuard"]},{"path":"adds/:id","component":"AddsComponent","canActivate":["AuthGuardGuard"]},{"path":"new-add","component":"NewAddComponent","canActivate":["AuthGuardGuard"]},{"path":"edit-add/:id","component":"EditAddComponent"},{"path":"subscriptions","component":"SubscriptionsComponent","canActivate":["AuthGuardGuard"]},{"path":"termsandconditions/:slug","component":"TermsConditionsComponent"},{"path":"buyingrecord","component":"BuyingRecordComponent","canActivate":["AuthGuardGuard"]},{"path":"register","component":"RegisterComponent"},{"path":"profile","component":"ProfileComponent","canActivate":["AuthGuardGuard"]},{"path":"address","component":"AddressComponent","canActivate":["AuthGuardGuard"]},{"path":"add","component":"AddEditAddressComponent","canActivate":["AuthGuardGuard"]},{"path":"edit/:id","component":"AddEditAddressComponent","canActivate":["AuthGuardGuard"]},{"path":"deposit","component":"DepositComponent"},{"path":"notification","component":"NotificationsComponent"},{"path":"**","component":"NotfoundComponent"}],"kind":"module"}]}
