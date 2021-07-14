export default [{
  header: 'Apps & Pages',
},
{
  title: 'Product',
  icon: 'ShoppingBagIcon',
  children: [
    {
      title: 'Add New',
      route: 'admin-add-product',
    },
    {
      title: 'Category',
      route: 'admin-category-list',
    },
    {
      title: 'Sub Category',
      route: 'admin-sub-category-list',
    },
  ],
},
// {
//   title: 'Website Setup',
//   icon: 'ShoppingBagIcon',
//   children: [
//     {
//       title: 'Settings',
//       route: 'admin-website-settings',
//     },
//     {
//       title: 'Header',
//       route: 'admin-website-settings-header',
//     },
//     {
//       title: 'Footer',
//       route: 'admin-website-settings-footer',
//     },
//   ],
// },
{
  title: 'Custom Fields',
  route: 'admin-custom-field-list',
  icon: 'FileTextIcon',
},
{
  title: 'Attributes',
  route: 'admin-attributes-list',
  icon: 'FileTextIcon',
},
// {
//   title: 'Documentation',
//   href: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation',
//   icon: 'FileTextIcon',
// },
];
