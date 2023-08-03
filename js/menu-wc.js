'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">golden-deal documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-1a72d4208e3a67286d5379cad7159657acaab6afd20fec8b73b05957459a5cdda5000546c455fc21da2928ef4000129f16da2c4843374ce22cb5f3e3fd6faa77"' : 'data-bs-target="#xs-components-links-module-AppModule-1a72d4208e3a67286d5379cad7159657acaab6afd20fec8b73b05957459a5cdda5000546c455fc21da2928ef4000129f16da2c4843374ce22cb5f3e3fd6faa77"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-1a72d4208e3a67286d5379cad7159657acaab6afd20fec8b73b05957459a5cdda5000546c455fc21da2928ef4000129f16da2c4843374ce22cb5f3e3fd6faa77"' :
                                            'id="xs-components-links-module-AppModule-1a72d4208e3a67286d5379cad7159657acaab6afd20fec8b73b05957459a5cdda5000546c455fc21da2928ef4000129f16da2c4843374ce22cb5f3e3fd6faa77"' }>
                                            <li class="link">
                                                <a href="components/AddEditAddressComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddEditAddressComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddressComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddressComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddsBannerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddsBannerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthRemainderModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthRemainderModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BuyingRecordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BuyingRecordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChatSupportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChatSupportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChatsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChatsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DepositComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DepositComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogCoverComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DialogCoverComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DialogDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogImageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DialogImageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogMajorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DialogMajorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogSolidComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DialogSolidComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotfoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotfoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotificationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaymentDetailsDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentDetailsDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResetPassModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResetPassModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResponseModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResponseModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResponseModalErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResponseModalErrorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchResultComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchResultComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SellerProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SellerProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidenavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidenavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SingleChatComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SingleChatComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubscriptionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscriptionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TermsConditionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TermsConditionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestimonialComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TestimonialComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-1a72d4208e3a67286d5379cad7159657acaab6afd20fec8b73b05957459a5cdda5000546c455fc21da2928ef4000129f16da2c4843374ce22cb5f3e3fd6faa77"' : 'data-bs-target="#xs-injectables-links-module-AppModule-1a72d4208e3a67286d5379cad7159657acaab6afd20fec8b73b05957459a5cdda5000546c455fc21da2928ef4000129f16da2c4843374ce22cb5f3e3fd6faa77"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-1a72d4208e3a67286d5379cad7159657acaab6afd20fec8b73b05957459a5cdda5000546c455fc21da2928ef4000129f16da2c4843374ce22cb5f3e3fd6faa77"' :
                                        'id="xs-injectables-links-module-AppModule-1a72d4208e3a67286d5379cad7159657acaab6afd20fec8b73b05957459a5cdda5000546c455fc21da2928ef4000129f16da2c4843374ce22cb5f3e3fd6faa77"' }>
                                        <li class="link">
                                            <a href="injectables/NotificationsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationsService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-AppModule-1a72d4208e3a67286d5379cad7159657acaab6afd20fec8b73b05957459a5cdda5000546c455fc21da2928ef4000129f16da2c4843374ce22cb5f3e3fd6faa77"' : 'data-bs-target="#xs-pipes-links-module-AppModule-1a72d4208e3a67286d5379cad7159657acaab6afd20fec8b73b05957459a5cdda5000546c455fc21da2928ef4000129f16da2c4843374ce22cb5f3e3fd6faa77"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-1a72d4208e3a67286d5379cad7159657acaab6afd20fec8b73b05957459a5cdda5000546c455fc21da2928ef4000129f16da2c4843374ce22cb5f3e3fd6faa77"' :
                                            'id="xs-pipes-links-module-AppModule-1a72d4208e3a67286d5379cad7159657acaab6afd20fec8b73b05957459a5cdda5000546c455fc21da2928ef4000129f16da2c4843374ce22cb5f3e3fd6faa77"' }>
                                            <li class="link">
                                                <a href="pipes/DateAgoPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DateAgoPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/InputPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/DialogDeleteComponent-1.html" data-type="entity-link" >DialogDeleteComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ActionsService.html" data-type="entity-link" >ActionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AddressesService.html" data-type="entity-link" >AddressesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AdminService.html" data-type="entity-link" >AdminService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChatService.html" data-type="entity-link" >ChatService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClearStorageService.html" data-type="entity-link" >ClearStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ErrorHandlerService.html" data-type="entity-link" >ErrorHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetproductsService.html" data-type="entity-link" >GetproductsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GoBackService.html" data-type="entity-link" >GoBackService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HomeAddsService.html" data-type="entity-link" >HomeAddsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MacPrefixService.html" data-type="entity-link" >MacPrefixService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MustMatchService.html" data-type="entity-link" >MustMatchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationsService.html" data-type="entity-link" >NotificationsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductsRequestService.html" data-type="entity-link" >ProductsRequestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfileService.html" data-type="entity-link" >ProfileService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/HttpErrorInterceptor.html" data-type="entity-link" >HttpErrorInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/HttpHeadersInterceptor.html" data-type="entity-link" >HttpHeadersInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuardGuard.html" data-type="entity-link" >AuthGuardGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Address.html" data-type="entity-link" >Address</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Addresses.html" data-type="entity-link" >Addresses</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Adds.html" data-type="entity-link" >Adds</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Admin.html" data-type="entity-link" >Admin</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/APIresponse.html" data-type="entity-link" >APIresponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/APIResponse.html" data-type="entity-link" >APIResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/APIResponse-1.html" data-type="entity-link" >APIResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/APIresponse2.html" data-type="entity-link" >APIresponse2</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/APIResponse2.html" data-type="entity-link" >APIResponse2</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/APIResponse2-1.html" data-type="entity-link" >APIResponse2</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/APIResponse3.html" data-type="entity-link" >APIResponse3</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/APIResponse4.html" data-type="entity-link" >APIResponse4</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/APIResponse4-1.html" data-type="entity-link" >APIResponse4</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/APIResponse5.html" data-type="entity-link" >APIResponse5</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/APIResponse7.html" data-type="entity-link" >APIResponse7</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BrandFilter.html" data-type="entity-link" >BrandFilter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Brands.html" data-type="entity-link" >Brands</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Category_Filter.html" data-type="entity-link" >Category_Filter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CategoryFilter.html" data-type="entity-link" >CategoryFilter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditProduct.html" data-type="entity-link" >EditProduct</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditProductFilters.html" data-type="entity-link" >EditProductFilters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FavItem.html" data-type="entity-link" >FavItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Favourites.html" data-type="entity-link" >Favourites</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/filter_options.html" data-type="entity-link" >filter_options</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/filter_options_new.html" data-type="entity-link" >filter_options_new</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/filter_options_new-1.html" data-type="entity-link" >filter_options_new</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/filter_options_new-2.html" data-type="entity-link" >filter_options_new</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Filters.html" data-type="entity-link" >Filters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Login.html" data-type="entity-link" >Login</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Messages.html" data-type="entity-link" >Messages</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MessagesList.html" data-type="entity-link" >MessagesList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NewProduct.html" data-type="entity-link" >NewProduct</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Notification.html" data-type="entity-link" >Notification</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Notifications.html" data-type="entity-link" >Notifications</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Orders.html" data-type="entity-link" >Orders</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OtpForgetPass.html" data-type="entity-link" >OtpForgetPass</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ownerRatings.html" data-type="entity-link" >ownerRatings</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Pages.html" data-type="entity-link" >Pages</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Portfolio.html" data-type="entity-link" >Portfolio</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product_Properties.html" data-type="entity-link" >Product_Properties</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product_Properties-1.html" data-type="entity-link" >Product_Properties</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product_Properties-2.html" data-type="entity-link" >Product_Properties</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/productImages.html" data-type="entity-link" >productImages</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Products.html" data-type="entity-link" >Products</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Products-1.html" data-type="entity-link" >Products</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Profile.html" data-type="entity-link" >Profile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Provider.html" data-type="entity-link" >Provider</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProviderRate.html" data-type="entity-link" >ProviderRate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Purchases.html" data-type="entity-link" >Purchases</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Regions.html" data-type="entity-link" >Regions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Register.html" data-type="entity-link" >Register</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResponseSuccess.html" data-type="entity-link" >ResponseSuccess</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Reviews.html" data-type="entity-link" >Reviews</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Search.html" data-type="entity-link" >Search</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SplashScreen.html" data-type="entity-link" >SplashScreen</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Subscriptions.html" data-type="entity-link" >Subscriptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Support.html" data-type="entity-link" >Support</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Update.html" data-type="entity-link" >Update</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserProducts.html" data-type="entity-link" >UserProducts</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Verify.html" data-type="entity-link" >Verify</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});