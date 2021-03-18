// exports.createPages= async function ({actions}) {

//     actions.createPage({
//         path:"product",
//         component: require.resolve('./src/template/product.js'),
//         context:{
//             name:"product",
//             desc:"This is description"
//         }
//     })
// }

exports.onCreatePage=async ({page, actions}) =>{

    const {createPage} = actions

    if (page.path.match(/^\/product/)){
        page.matchPath = "/product/*"
        createPage(page)
    }


}