export default Object.freeze({
    backEnd: {
        auth: {
            login: {
                path: '/sign-in'
            }
        },
        home: {
            index: {
                path: '/management'
            }
        },
        categories: {
            index: {
                path: '/management/categories'
            },
            create: {
                path: '/management/categories/create'
            },
            show: {
                path: '/management/categories/:id'
            },
            edit: {
                path: '/management/categories/:id/edit'
            },
        },
        causes: {
            index: {
                path: '/management/causes'
            },
            create: {
                path: '/management/causes/create'
            },
            show: {
                path: '/management/causes/:id'
            },
            edit: {
                path: '/management/causes/:id/edit'
            },
        },
        cities: {
            index: {
                path: '/management/cities'
            },
            create: {
                path: '/management/cities/create'
            },
            show: {
                path: '/management/cities/:id'
            },
            edit: {
                path: '/management/cities/:id/edit'
            },
        },
        events: {
            index: {
                path: '/management/events'
            },
            create: {
                path: '/management/events/create'
            },
            show: {
                path: '/management/events/:id'
            },
            edit: {
                path: '/management/events/:id/edit'
            },
        },
        products: {
            index: {
                path: '/management/products'
            },
            create: {
                path: '/management/products/create'
            },
            show: {
                path: '/management/products/:id'
            },
            edit: {
                path: '/management/products/:id/edit'
            },
        },
        users: {
            index: {
                path: '/management/users'
            },
            create: {
                path: '/management/users/create'
            },
            show: {
                path: '/management/users/:id'
            },
            edit: {
                path: '/management/users/:id/edit'
            },
            editInfo: {
                path: '/management/information'
            },
        },
        charities: {
            index: {
                path: '/management/charities'
            },
            create: {
                path: '/management/charities/create'
            },
            show: {
                path: '/management/charities/:id'
            },
            edit: {
                path: '/management/charities/:id/edit'
            },
        },
        posts: {
            index: {
                path: '/management/posts'
            },
            create: {
                path: '/management/posts/create'
            },
            show: {
                path: '/management/posts/:id'
            },
            edit: {
                path: '/management/posts/:id/edit'
            },
        },
        orders: {
            index: {
                path: '/management/orders'
            },
            create: {
                path: '/management/orders/create'
            },
            show: {
                path: '/management/orders/:id'
            },
            edit: {
                path: '/management/orders/:id/edit'
            },
        },
    },
    frontEnd: {
        auth: {
            login: {
                path: '/login'
            },
            register: {
                path: '/register'
            }
        },
        home: {
            index: {
                path: '/'
            }
        },
        events: {
            index: {
                path: '/events'
            },
            show: {
                path: '/events/:id'
            },
            create: {
                path: '/start-an-event'
            }
        },
        charities: {
            index: {
                path: '/charities'
            }
        },
        categories: {
            index: {
                path: '/categories'
            }
        },
        cart: {
            show: {
                path: '/cart/payment'
            },
            pay: {
                path: '/cart/payment/event/:id'
            }
        },
        causes: {
            index: {
                path: '/causes'
            },
            show: {
                path: '/causes/:id'
            }
        },
        products: {
            index: {
                path: '/shop/event/:id'
            }
        },
        aboutUs: {
            path: '/about'
        },
        contactUs: {
            path: '/contact-us'
        }
    }
});
