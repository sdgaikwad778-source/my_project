import HomePage from "./pages/HomePage"

export const routes = [
    {
        path:"/",
        element:<HomePage/>,
       
        children:[
           {
             path:"/",
             element:""
           },
           {
             path:"categories/:categoryId/list",
             element:"<CategoryListingPage/>"
           },
           {
             path:"/product/:productId",
             element:"<ProductDetailPage/>"
           },
           {
             path:"product/:productId/checkout",
             element:"<CheckoutPage/>"
           },
        ]
    },
    {
        path:"/account/:userId/",
        element:"<UserDashboard/>",
        children:[
            {
                 path:"orders",
                 element:"<Orders/>"
            },
             {
                 path:"profile",
                 element:"<UserProfile/>"
            },
            
        ]
    },
    {
        path:"/cart/:userId"
    }


]