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
        },
        causes: {
            index: {
                path: '/management/causes'
            },
            create: {
                path: '/management/causes/create'
            },
        },
        cities: {
            index: {
                path: '/management/cities'
            },
            create: {
                path: '/management/cities/create'
            },
        },
        events: {
            index: {
                path: '/management/events'
            },
            create: {
                path: '/management/events/create'
            },
        },
        products: {
            index: {
                path: '/management/products'
            },
            create: {
                path: '/management/products/create'
            },
        },
        users: {
            index: {
                path: '/management/users'
            },
            create: {
                path: '/management/users/create'
            },
        },
        charities: {
            index: {
                path: '/management/charities'
            },
            create: {
                path: '/management/charities/create'
            },
        },
        posts: {
            index: {
                path: '/management/posts'
            },
            create: {
                path: '/management/posts/create'
            },
        },
        orders: {
            index: {
                path: '/management/orders'
            },
            create: {
                path: '/management/orders/create'
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
            }
        },
        charities: {
            index: {
                path: '/charities'
            }
        },
        cart: {
            show: {
                path: '/cart'
            },
            pay: {
                path: '/cart/payment'
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
