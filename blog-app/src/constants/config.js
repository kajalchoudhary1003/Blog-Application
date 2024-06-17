// API_Notification Messages

export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: 'Loading...',
        message: 'Data is bein loaded Please wait',
    },
    success: {
        title: 'Success',
        message: 'data successfully loaded',
    },
    responseFailure:{
        title:'Error',
        message: 'An error occured while fetching response from the server. Please try again'
    },
    requestFailure:{
        title:'Error',
        message:'An error occured while parsing request data',
    },
    networkError:{
        title:'Error',
        message:'Unable to connect with the server. Please check internet connection.'
    }
}

export const SERVICE_URLS = {
    userSignup: {url: '/signup', method:'POST'},
    userLogin: {url:'/login', method:'POST'},
    uploadFile: {url:'/file/upload', method: 'POST'},
    createPost: {url:'create', method:'POST'},
    getAllPosts: {url:'/posts', method:'GET'}
}