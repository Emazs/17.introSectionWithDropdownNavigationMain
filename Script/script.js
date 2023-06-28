/*Menu*/
let features = document.querySelector(".features__caret");
let featuresMenu = document.querySelector(".features__content");
let arrowUp = document.querySelector(".arrow-up");
let arrowDown = document.querySelector(".arrow-dowm");

let arrowUpCompany = document.querySelector(".arrow-up-company");
let arrowDownCompany = document.querySelector(".arrow-dowm-company");

let company = document.querySelector(".company__caret");
let companyMenu = document.querySelector(".company__content");

features.addEventListener("click", e => {
    featuresMenu.classList.toggle("activate");
    arrowUp.classList.toggle("activate");
    arrowDown.classList.toggle("desactive");
});

company.addEventListener("click", e => {
    companyMenu.classList.toggle("activate");
    arrowUpCompany.classList.toggle("activate");
    arrowDownCompany.classList.toggle("desactive");
});

/*Menu sidebar*/

let sidebarFeatures = document.querySelector(".sidebar_features__caret");
let sidebarFeaturesMenu = document.querySelector(".sidebar_features_content");
let sidebarArrowUp = document.querySelector(".sidebar_arrow-up");
let sidebarArrowDown = document.querySelector(".sidebar_arrow-dowm");

let sidebarArrowUpCompany = document.querySelector(".sidebar_arrow-up-company");
let sidebarArrowDownCompany = document.querySelector(".sidebar_arrow-dowm-company");

let sidebarCompany = document.querySelector(".sidebar_company__caret");
let sidebar_CompanyMenu = document.querySelector(".sidebar_company_content");

let burguer = document.querySelector(".burguer");
let sidebar = document.querySelector(".sidebar");
let close_menu = document.querySelector(".close_menu");

burguer.addEventListener("click", e =>{
    sidebar.classList.toggle("activateSidebar");
});

close_menu.addEventListener("click", e =>{
    sidebar.classList.toggle("activateSidebar");
    sidebarFeaturesMenu.classList.remove("activate");
    sidebar_CompanyMenu.classList.remove("activate");
});

sidebarFeatures.addEventListener("click", e => {
    sidebarFeaturesMenu.classList.toggle("activate");
    sidebarArrowUp.classList.toggle("activate");
    sidebarArrowDown.classList.toggle("desactive");
});

sidebarCompany.addEventListener("click", e => {
    sidebar_CompanyMenu.classList.toggle("activate");
    sidebarArrowUpCompany.classList.toggle("activate");
    sidebarArrowDownCompany.classList.toggle("desactive");
});